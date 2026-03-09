# Bitcoin Quiz Live

Quiz multijugador estilo Kahoot para meetups de Bitcoin.
Los participantes se unen desde su teléfono, compiten en tiempo real y
el ganador recibe sats a través de Lightning Network.

> Desarrollado para el Hackathon de Educación Bitcoin con IA — México 2025.

---

## Características

- Panel del presentador con estadísticas en vivo, marcador y flujo automático
- Participantes se unen desde su celular con un código de sala o escaneando un QR
- 25 preguntas de Bitcoin para principiantes con explicaciones
- Temporizador de cuenta regresiva con puntuación por velocidad (50–100 pts)
- La pregunta termina automáticamente cuando alguien responde correctamente (o se acaba el tiempo)
- Avance automático entre preguntas — el presentador sólo inicia y observa
- Marcador en tiempo real después de cada pregunta
- Pago Lightning al ganador: NWC, LND REST o modo manual
- QR en pantalla del presentador para que los participantes se unan fácilmente
- UI mobile-first — botones grandes, legible en cualquier pantalla

---

## Inicio rápido

### 1. Instalar dependencias

```bash
cd bitcoin-quiz-live
npm install
```

### 2. Configurar entorno

```bash
cp .env.example .env
# edita .env según necesites
```

Para correr sin Lightning (modo manual), no necesitas cambiar nada.

### 3. Correr el servidor

```bash
# Producción
npm start

# Desarrollo (reinicia automáticamente al guardar cambios)
npm run dev
```

### 4. Abrir el panel del presentador

```
http://localhost:3000/host.html
```

Haz clic en **Crear Sala**. Verás el código de 4 letras y el código QR.

### 5. Los participantes se unen

Desde su celular abren:

```
http://<tu-ip-local>:3000
```

O escanean el QR en la pantalla del presentador.
Ingresan su apodo y el código de sala.

> **Tip para meetups:** conecta la laptop a un proyector y comparte tu IP local
> (`ip addr` en Linux / `ipconfig` en Windows). El QR también funciona si todos
> están en la misma red WiFi.

### 6. Flujo del quiz

1. Espera a que los participantes se unan (aparecen en vivo en tu pantalla).
2. Haz clic en **Iniciar Quiz**.
3. La primera pregunta lanza automáticamente con un temporizador de 15 segundos.
4. La pregunta termina en cuanto alguien responde correctamente (o se acaba el tiempo).
5. Se muestran los resultados durante 14 segundos (respuesta correcta + explicación + marcador).
6. La siguiente pregunta inicia sola — no necesitas hacer nada.
7. Al terminar la pregunta 25 (o si haces clic en **Terminar Quiz**) aparecen los resultados finales con la factura Lightning del ganador.

---

## Puntuación

| Resultado | Puntos |
|-----------|--------|
| Respuesta incorrecta | 0 |
| Correcto (último segundo) | 50 |
| Correcto (instantáneo) | 100 |

La bonificación por velocidad es lineal entre esos límites.
Los participantes que no responden a tiempo reciben 0 puntos.

**Recompensa en sats** = `puntos_ganador × SAT_PER_POINT` (por defecto 1 sat/punto).

---

## Integración Lightning Network

Hay tres modos, en orden de facilidad:

---

### Opción A — NWC (Nostr Wallet Connect) ⭐ Recomendado

La opción más fácil. Solo necesitas una URL de conexión desde tu wallet.

**Wallets compatibles:** Alby · Zeus · Bitkit · Mutiny · cualquier wallet con soporte NWC

**Pasos:**

1. En [getalby.com](https://getalby.com) (u otra wallet NWC), crea una conexión NWC.
2. Copia la cadena de conexión (empieza con `nostr+walletconnect://`).
3. En tu `.env`:

```env
NWC_URL=nostr+walletconnect://clave-publica?relay=wss://relay.example.com&secret=tu-secreto
```

4. Reinicia el servidor. El estado en la pantalla del presentador mostrará "⚡ NWC conectado".

---

### Opción B — LND REST API (nodo propio)

Para quienes operan su propio nodo Bitcoin/Lightning.

**Obtener el macaroon (en el servidor LND):**

```bash
# Macaroon de administrador (o usa invoice.macaroon para permisos mínimos)
xxd -p -c 10000 ~/.lnd/data/chain/bitcoin/mainnet/invoice.macaroon
```

**Obtener el certificado TLS (opcional pero recomendado):**

```bash
base64 -w 0 ~/.lnd/tls.cert
```

**En tu `.env`:**

```env
LND_REST_URL=https://tu-nodo-lnd:8080
LND_MACAROON=hex-del-macaroon-aqui
LND_CERT=base64-del-certificado-aqui   # omitir desactiva verificación TLS
```

> Si tu nodo LND está en la misma máquina: `LND_REST_URL=https://localhost:8080`
> Sin `LND_CERT` el servidor desactiva la verificación TLS — aceptable para uso local.

---

### Opción C — Modo manual (sin configuración)

Si no configuras ninguna opción Lightning, el servidor corre en **modo manual**:

- Al terminar el quiz, la pantalla del presentador muestra el nombre del ganador
  y el número exacto de sats a pagar.
- El presentador paga desde su wallet directamente al ganador.

---

## ¿Puedo hostearlo en GitHub Pages?

**No.** GitHub Pages sólo sirve archivos estáticos. Esta aplicación requiere
un servidor Node.js con WebSockets (Socket.io) corriendo permanentemente.

**Opciones de hosting gratuito o económico:**

| Plataforma | Tier gratuito | Deploy desde GitHub |
|------------|---------------|---------------------|
| [Railway](https://railway.app) | Sí (con límite de uso) | Sí, un click |
| [Render](https://render.com) | Sí (se duerme tras inactividad) | Sí |
| [Fly.io](https://fly.io) | Sí (3 VMs pequeñas) | Sí, con CLI |
| VPS (DigitalOcean, Hetzner) | Desde ~$4/mes | Manual |

**Para meetups locales** no necesitas hosting externo: corre el servidor en tu laptop,
conecta el proyector, y todos los participantes en la misma red WiFi se conectan
a `http://<tu-ip-local>:3000`. Simple y sin depender de internet.

---

## Estructura del proyecto

```
bitcoin-quiz-live/
├── server/
│   ├── server.js        Servidor Express + Socket.io
│   ├── quizEngine.js    Estado de salas y jugadores en memoria
│   └── lightning.js     Integración NWC / LND REST
├── public/
│   ├── host.html        Panel del presentador (todas las pantallas)
│   ├── index.html       App del jugador (unirse → quiz → resultados)
│   ├── player.html      Alias → redirige a index.html
│   ├── styles.css       Estilos compartidos (tema naranja Bitcoin)
│   └── client.js        Utilidades JS compartidas
├── data/
│   └── questions.js     25 preguntas Bitcoin para principiantes
├── .env.example         Plantilla de configuración
├── LICENSE              GNU General Public License v3
└── package.json
```

---

## Personalizar preguntas

Edita `data/questions.js`. Cada pregunta tiene esta forma:

```js
{
  text: "¿Tu pregunta aquí?",
  options: ["Opción A", "Opción B", "Opción C", "Opción D"],
  correct: 1,          // índice base 0 de la respuesta correcta
  explanation: "Explicación que se muestra a todos al revelar la respuesta."
}
```

Puedes tener 3 o 4 opciones por pregunta.

---

## Variables de entorno

```env
PORT=3000                    # Puerto del servidor
BASE_URL=http://localhost:3000  # URL pública (para el QR)
QUESTION_TIME_LIMIT=15       # Segundos por pregunta
SAT_PER_POINT=1              # Sats por punto para la recompensa

# Lightning (elige UNA opción):
NWC_URL=nostr+walletconnect://...   # Opción A: NWC
LND_REST_URL=https://nodo:8080      # Opción B: LND
LND_MACAROON=hex...
LND_CERT=base64...
```

---

## Seguridad

- Los apodos tienen límite de 20 caracteres y se escapan antes de renderizarse.
- Cada jugador sólo puede responder una vez por pregunta (validado en el servidor).
- Las salas viven en memoria y se borran al reiniciar el servidor.
- Para un deploy público, coloca el servidor detrás de un proxy inverso (nginx/caddy) con HTTPS.

---

## Licencia

GNU General Public License v3.0 — ver [LICENSE](./LICENSE).

Este proyecto es software libre. Puedes usarlo, modificarlo y distribuirlo
siempre que mantengas la misma licencia en cualquier trabajo derivado.
Ningún fork puede volverse privativo. Las contribuciones son bienvenidas.
