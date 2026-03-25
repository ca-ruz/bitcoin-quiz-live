// Categoría: Billeteras — claves, semillas y tipos de custodia

const questions = [
  {
    text: "¿Qué es una billetera HD (Hierarchical Deterministic)?",
    options: [
      "Una billetera que deriva múltiples claves desde una única semilla maestra",
      "Una billetera protegida con hardware físico y un PIN de seguridad",
      "Una billetera multifirma que necesita varias claves para autorizar gastos",
      "Una billetera en línea gestionada por un exchange o empresa externa"
    ],
    correct: 0,
    explanation:
      "Una billetera HD genera un árbol completo de claves y direcciones a partir de una única semilla maestra, siguiendo el estándar BIP32. Esto significa que basta con respaldar una sola frase semilla para recuperar todas las claves de la billetera."
  },
  {
    text: "¿Qué define el estándar BIP39?",
    options: [
      "El protocolo que especifica cómo funcionan los canales de Lightning",
      "El estándar para crear frases semilla de 12 a 24 palabras",
      "La especificación técnica del formato y estructura de los bloques",
      "El conjunto de reglas del protocolo que regula la emisión de Bitcoin"
    ],
    correct: 1,
    explanation:
      "BIP39 define cómo convertir entropía aleatoria en una lista de palabras legibles (mnemónico). Usa un vocabulario de 2,048 palabras en varios idiomas. Esta frase puede restaurar la billetera completa en cualquier software compatible."
  },
  {
    text: "¿Qué diferencia a una billetera caliente de una fría?",
    options: [
      "El precio de mercado y la marca reconocida del fabricante",
      "La velocidad con que cada tipo procesa y confirma transacciones",
      "Que la caliente está conectada a internet y la fría no",
      "El límite de direcciones que cada tipo de billetera puede almacenar"
    ],
    correct: 2,
    explanation:
      "Una billetera caliente (hot wallet) está conectada a internet: conveniente para pagos frecuentes pero más expuesta a ataques. Una billetera fría (cold wallet) mantiene las claves offline, ideal para guardar ahorros a largo plazo."
  },
  {
    text: "¿Qué es una billetera multisig?",
    options: [
      "Una billetera que solo acepta transacciones de montos muy grandes",
      "Una billetera que requiere varias firmas para autorizar un gasto",
      "Una billetera que genera múltiples direcciones de forma simultánea",
      "Una billetera compartida entre varios exchanges populares"
    ],
    correct: 1,
    explanation:
      "Una billetera multisig (multifirma) requiere que M de N claves privadas firmen una transacción para que sea válida (por ejemplo, 2 de 3). Elimina el punto único de fallo: ni un hackeo ni la pérdida de una sola clave compromete los fondos."
  },
  {
    text: "¿Qué tipo de dirección de Bitcoin comienza con 'bc1q'?",
    options: [
      "Una dirección Legacy (P2PKH)",
      "Una dirección SegWit nativa (Bech32 / P2WPKH)",
      "Una dirección de script P2SH",
      "Una dirección Taproot (P2TR)"
    ],
    correct: 1,
    explanation:
      "Las direcciones que empiezan con 'bc1q' son SegWit nativas (P2WPKH o P2WSH) en formato Bech32. Ofrecen comisiones más bajas que las Legacy ('1...') y P2SH ('3...') gracias a SegWit, y son más resistentes a errores de escritura."
  },
  {
    text: "¿Qué tipo de dirección de Bitcoin comienza con 'bc1p'?",
    options: [
      "Una dirección SegWit nativa (Bech32 / P2WPKH)",
      "Una dirección multisig P2SH",
      "Una dirección Taproot (Bech32m / P2TR)",
      "Una dirección Legacy (P2PKH)"
    ],
    correct: 2,
    explanation:
      "Las direcciones 'bc1p' son Taproot (P2TR) en formato Bech32m, disponibles desde la activación de Taproot en noviembre de 2021. Usan firmas Schnorr, mejoran la privacidad (los scripts complejos parecen pagos simples) y reducen comisiones."
  },
  {
    text: "¿Qué es una billetera de solo lectura (watch-only wallet)?",
    options: [
      "Una billetera que no permite recibir ninguna transacción nueva",
      "Una billetera que monitorea saldos pero no puede firmar gastos",
      "Una billetera de hardware con pantalla en modo de visualización",
      "Una billetera que solo guarda el historial de transacciones pasadas"
    ],
    correct: 1,
    explanation:
      "Una watch-only wallet conoce las claves públicas pero no las privadas. Puede ver saldos y recibir fondos, pero no puede firmar transacciones para gastar. Es ideal para monitorear fondos en almacenamiento frío sin exponer las claves privadas."
  },
  {
    text: "¿Qué añade una passphrase (contraseña) a una frase semilla de Bitcoin?",
    options: [
      "Una contraseña que reemplaza a las palabras de la frase semilla",
      "Una capa adicional de seguridad que genera una billetera completamente diferente",
      "Un mecanismo de recuperación si se pierden algunas palabras de la semilla",
      "Un sistema de cifrado que bloquea la billetera después de tres intentos"
    ],
    correct: 1,
    explanation:
      "Una passphrase actúa como una '25ª palabra' (o más). La misma frase semilla con distintas passphrases genera billeteras completamente distintas. Aunque alguien encuentre tu semilla, sin la passphrase no puede acceder a tus fondos."
  },
  {
    text: "¿Qué mejora principal introdujo Taproot en Bitcoin?",
    options: [
      "Un nuevo tipo de exchange descentralizado construido sobre Bitcoin",
      "Mejoras de privacidad y eficiencia usando firmas Schnorr y MAST",
      "Un hardware wallet de nueva generación con pantalla táctil integrada",
      "Un protocolo Lightning para canales de mayor capacidad de pago"
    ],
    correct: 1,
    explanation:
      "Taproot (activado en noviembre 2021) combina firmas Schnorr (que permiten agregar claves), MAST (Merklized Abstract Syntax Trees, que oculta ramas de scripts no usadas) y Tapscript. El resultado: transacciones más compactas, más privadas y con scripts más expresivos."
  },
  {
    text: "¿Qué es un descriptor de billetera (wallet descriptor)?",
    options: [
      "Una descripción legible del saldo y estado actual de una billetera",
      "Una expresión que codifica completamente cómo derivar y gastar UTXOs",
      "Un formato de respaldo alternativo a la frase semilla de 24 palabras",
      "Un archivo de configuración que almacena las preferencias del usuario"
    ],
    correct: 1,
    explanation:
      "Un descriptor (estándar BIP380+) especifica exactamente el tipo de scripts, las claves públicas y el path de derivación necesarios para encontrar y gastar todos los UTXOs de una billetera. Es especialmente útil para billeteras multisig y para exportar/importar entre distintos softwares."
  }
];

module.exports = questions;
