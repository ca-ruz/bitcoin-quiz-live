// lightning.js — Integración con Lightning Network para pagar al ganador
//
// Prioridad de métodos de pago:
//   1. NWC  (Nostr Wallet Connect) — sólo necesitas una URL de conexión
//   2. LND  (REST API)             — para quien corre su propio nodo
//   3. Manual                      — muestra el monto para pago manual
//
// Configura UNO de los dos primeros en tu .env y el resto se ignora.

const https = require("https");
const fetch = require("node-fetch");

// ─── Detección de método configurado ─────────────────────────────────────────

function activeMethod() {
  if (process.env.NWC_URL && process.env.NWC_URL.startsWith("nostr+walletconnect://")) {
    return "nwc";
  }
  if (process.env.LND_REST_URL && process.env.LND_MACAROON) {
    return "lnd";
  }
  return "manual";
}

function isConfigured() {
  return activeMethod() !== "manual";
}

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Genera una factura Lightning para el ganador del quiz.
 *
 * @param {number} satAmount - Monto en satoshis
 * @param {string} memo      - Descripción de la factura
 * @returns {object}         - { success, paymentRequest, satAmount }
 *                             o { manual: true, satAmount, error? }
 */
async function createInvoice(satAmount, memo) {
  const method = activeMethod();

  if (method === "nwc") return createInvoiceViaNWC(satAmount, memo);
  if (method === "lnd") return createInvoiceViaLND(satAmount, memo);

  // Modo manual: no hay backend Lightning configurado
  return { manual: true, satAmount, memo };
}

// ─── NWC (Nostr Wallet Connect) ───────────────────────────────────────────────
// La opción más fácil: sólo una URL de conexión desde tu wallet.
// Wallets compatibles: Alby (getalby.com), Zeus, Bitkit y otras.

async function createInvoiceViaNWC(satAmount, memo) {
  try {
    // Importación dinámica porque @getalby/sdk usa ESM internamente
    const { nwc } = await import("@getalby/sdk");

    const client = new nwc.NWCClient({
      nostrWalletConnectUrl: process.env.NWC_URL
    });

    // NWC trabaja en milisatoshis
    const response = await client.makeInvoice({
      amount: satAmount * 1000,
      description: memo,
      expiry: 3600
    });

    await client.close();

    return {
      success: true,
      paymentRequest: response.invoice, // cadena BOLT11
      satAmount,
      memo
    };
  } catch (err) {
    console.error("Error NWC al crear factura:", err.message);
    return { manual: true, satAmount, memo, error: err.message };
  }
}

// ─── LND REST API ─────────────────────────────────────────────────────────────
// Para quienes corren su propio nodo Bitcoin/Lightning.
// Requiere: LND_REST_URL, LND_MACAROON y opcionalmente LND_CERT.

async function createInvoiceViaLND(satAmount, memo) {
  try {
    const agentOptions = {};
    if (process.env.LND_CERT) {
      // Certificado TLS proporcionado como base64
      agentOptions.ca = Buffer.from(process.env.LND_CERT, "base64");
    } else {
      // Sin certificado: desactivar verificación TLS (aceptable para nodo local)
      agentOptions.rejectUnauthorized = false;
    }
    const agent = new https.Agent(agentOptions);

    const response = await fetch(`${process.env.LND_REST_URL}/v1/invoices`, {
      method: "POST",
      agent,
      headers: {
        "Grpc-Metadata-macaroon": process.env.LND_MACAROON,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: satAmount,  // LND usa satoshis directamente
        memo,
        expiry: 3600
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`LND ${response.status}: ${errText}`);
    }

    const data = await response.json();
    return {
      success: true,
      paymentRequest: data.payment_request, // cadena BOLT11
      satAmount,
      memo
    };
  } catch (err) {
    console.error("Error LND al crear factura:", err.message);
    return { manual: true, satAmount, memo, error: err.message };
  }
}

module.exports = { isConfigured, activeMethod, createInvoice };
