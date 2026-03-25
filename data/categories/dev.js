// Categoría: Desarrollo — Bitcoin Script, BIPs, BOLTs y protocolos avanzados

const questions = [
  {
    text: "¿Qué es Bitcoin Script?",
    options: [
      "El lenguaje que define las condiciones para gastar un UTXO de Bitcoin",
      "Un conjunto de herramientas de línea de comandos para administrar nodos",
      "El protocolo de mensajería entre nodos en la red P2P de Bitcoin",
      "Un lenguaje de alto nivel para desarrollar aplicaciones sobre Bitcoin"
    ],
    correct: 0,
    explanation:
      "Bitcoin Script es un lenguaje de pila (stack-based), intencionalmente no Turing-completo, que define las condiciones bajo las cuales un UTXO puede ser gastado. El script de bloqueo (scriptPubKey) establece las condiciones; el script de desbloqueo (scriptSig / witness) las satisface."
  },
  {
    text: "¿Qué son las BIPs (Bitcoin Improvement Proposals)?",
    options: [
      "Documentos técnicos que proponen cambios o mejoras al protocolo Bitcoin",
      "Los informes financieros anuales publicados por la Fundación Bitcoin",
      "Las actualizaciones automáticas que el protocolo aplica cada 4 años",
      "Los acuerdos entre mineros para modificar las reglas de consenso"
    ],
    correct: 0,
    explanation:
      "Las BIPs son el proceso formal de propuesta y discusión de cambios en Bitcoin, inspiradas en las PEPs de Python. Cualquiera puede escribir una BIP. Algunas son estándares (como BIP39 para semillas, BIP32 para HD wallets), otras son informativas o de proceso."
  },
  {
    text: "¿Qué ventaja principal aportan las firmas Schnorr introducidas con Taproot?",
    options: [
      "Permiten transacciones más rápidas al eliminar la validación de bloques",
      "Agregan múltiples firmas en una sola, mejorando privacidad y eficiencia",
      "Reemplazan la Prueba de Trabajo por un mecanismo de menor consumo",
      "Hacen todas las transacciones completamente anónimas e inrastreables"
    ],
    correct: 1,
    explanation:
      "Las firmas Schnorr permiten la agregación de claves (MuSig): varias claves se combinan en una sola firma indistinguible de una firma individual. Esto hace que las transacciones multisig sean más baratas, más privadas y más compactas que con ECDSA."
  },
  {
    text: "¿Qué define el protocolo BOLT 11 en Lightning Network?",
    options: [
      "El protocolo de apertura y cierre de canales Lightning",
      "El formato estándar de las facturas (invoices) de Lightning",
      "El estándar de comunicación entre nodos Lightning en la red P2P",
      "El documento técnico que define los HTLCs en Lightning"
    ],
    correct: 1,
    explanation:
      "BOLT 11 especifica el formato de las facturas Lightning: una cadena codificada en bech32 que contiene el hash del pago, el importe, el nodo destino, el timestamp y la firma. Es el formato de invoice más ampliamente soportado hoy en día."
  },
  {
    text: "¿Qué mejora introduce BOLT 12 (Offers) sobre BOLT 11?",
    options: [
      "Facturas reutilizables y pagos recurrentes sin acción del receptor",
      "Un formato de factura más corto y fácil de compartir en redes sociales",
      "La posibilidad de incluir mensajes de texto dentro de los pagos Lightning",
      "Una nueva forma de calcular y distribuir las tarifas de enrutamiento"
    ],
    correct: 0,
    explanation:
      "BOLT 12 introduce los 'Offers': códigos estáticos reutilizables que permiten a un nodo generar facturas frescas bajo demanda. Soporta pagos recurrentes, donaciones de monto libre, y mejora la privacidad del receptor al no revelar directamente su nodo ID."
  },
  {
    text: "¿Qué es la red signet de Bitcoin?",
    options: [
      "La red principal de Bitcoin donde ocurren transacciones con valor real",
      "Una red de pruebas con bloques controlados, más estable que testnet",
      "Una red privada usada exclusivamente por desarrolladores de Bitcoin Core",
      "La red de pruebas original de Bitcoin, activa desde el año 2011"
    ],
    correct: 1,
    explanation:
      "Signet (BIP325) es una red de prueba donde los bloques deben ser firmados por una clave autorizada, eliminando los reorganizaciones caóticas de testnet. Es más predecible, lo que la hace ideal para probar wallets, nodos Lightning y aplicaciones."
  },
  {
    text: "¿Qué es un descriptor de billetera en el desarrollo de Bitcoin?",
    options: [
      "Una descripción legible del saldo y el estado actual de una billetera",
      "Una expresión que codifica completamente cómo derivar y gastar UTXOs",
      "Un formato de respaldo alternativo a la frase semilla de 24 palabras",
      "Un archivo de configuración que almacena las preferencias del usuario"
    ],
    correct: 1,
    explanation:
      "Los descriptores (BIP380–386) son expresiones como `wpkh([fingerprint/84'/0'/0']xpub.../0/*)` que especifican completamente el tipo de script, las claves y el path de derivación. Permiten importar/exportar billeteras entre distintas implementaciones sin ambigüedad."
  },
  {
    text: "¿Qué es el protocolo RGB en Bitcoin?",
    options: [
      "Un sistema de compresión de datos para reducir el tamaño de los bloques",
      "Un protocolo para emitir activos digitales sobre la blockchain de Bitcoin",
      "Un estándar de interfaz gráfica para aplicaciones de billetera Bitcoin",
      "Un mecanismo de sincronización de estado entre nodos Lightning remotos"
    ],
    correct: 1,
    explanation:
      "RGB es un protocolo de validación del lado del cliente que permite emitir y transferir activos (tokens, NFTs, identidades) anclados a UTXOs de Bitcoin. La lógica del contrato se ejecuta localmente por los participantes, sin publicar datos privados en la blockchain."
  },
  {
    text: "¿Qué es un DLC (Discreet Log Contract)?",
    options: [
      "Un contrato inteligente que usa un oráculo externo para resolver condiciones",
      "Un sistema de firma múltiple para pagos de alto valor en Bitcoin",
      "Un protocolo de privacidad que oculta los montos en transacciones on-chain",
      "Un mecanismo de canales de estado para contratos de larga duración"
    ],
    correct: 0,
    explanation:
      "Los DLCs permiten contratos financieros (apuestas, derivados, seguros) donde el resultado depende de datos externos provistos por un oráculo. El oráculo firma el resultado, pero no sabe que está siendo usado en un contrato ni quiénes son los participantes."
  },
  {
    text: "¿Qué es el protocolo Nostr en el ecosistema Bitcoin/Lightning?",
    options: [
      "Un estándar de comunicación descentralizada y resistente a la censura",
      "Un protocolo para sincronizar nodos Bitcoin en redes de baja latencia",
      "Un sistema de actualización automática para implementaciones de Lightning",
      "Un formato de archivo para exportar e importar configuraciones de nodo"
    ],
    correct: 0,
    explanation:
      "Nostr (Notes and Other Stuff Transmitted by Relays) es un protocolo de mensajería descentralizado basado en pares de claves criptográficas. Se integra con Lightning a través de Zaps (pagos Lightning adjuntos a publicaciones) y es popular en la comunidad Bitcoin por su resistencia a la censura."
  }
];

module.exports = questions;
