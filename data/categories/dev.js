// Categoría: Desarrollo — Bitcoin Script, BIPs, BOLTs y protocolos avanzados

const questions = [
  {
    text: {
      es: "¿Qué es Bitcoin Script?",
      en: "What is Bitcoin Script?"
    },
    options: {
      es: [
        "El lenguaje que define las condiciones para gastar un UTXO de Bitcoin",
        "Un conjunto de herramientas de línea de comandos para administrar nodos",
        "El protocolo de mensajería entre nodos en la red P2P de Bitcoin",
        "Un lenguaje de alto nivel para desarrollar aplicaciones sobre Bitcoin"
      ],
      en: [
        "The language that defines the conditions for spending a Bitcoin UTXO",
        "A set of command-line tools for administering Bitcoin nodes",
        "The messaging protocol between nodes in the Bitcoin P2P network",
        "A high-level language for building applications on top of Bitcoin"
      ]
    },
    correct: 0,
    explanation: {
      es: "Bitcoin Script es un lenguaje de pila (stack-based), intencionalmente no Turing-completo, que define las condiciones bajo las cuales un UTXO puede ser gastado. El script de bloqueo (scriptPubKey) establece las condiciones; el script de desbloqueo (scriptSig / witness) las satisface.",
      en: "Bitcoin Script is a stack-based language, intentionally not Turing-complete, that defines the conditions under which a UTXO can be spent. The locking script (scriptPubKey) sets the conditions; the unlocking script (scriptSig / witness) satisfies them."
    }
  },
  {
    text: {
      es: "¿Qué son las BIPs (Bitcoin Improvement Proposals)?",
      en: "What are BIPs (Bitcoin Improvement Proposals)?"
    },
    options: {
      es: [
        "Documentos técnicos que proponen cambios o mejoras al protocolo Bitcoin",
        "Los informes financieros anuales publicados por la Fundación Bitcoin",
        "Las actualizaciones automáticas que el protocolo aplica cada 4 años",
        "Los acuerdos entre mineros para modificar las reglas de consenso"
      ],
      en: [
        "Technical documents proposing changes or improvements to Bitcoin",
        "Annual financial reports published by the Bitcoin Foundation",
        "Automatic updates the protocol applies every 4 years",
        "Miner agreements to modify consensus rules"
      ]
    },
    correct: 0,
    explanation: {
      es: "Las BIPs son el proceso formal de propuesta y discusión de cambios en Bitcoin, inspiradas en las PEPs de Python. Cualquiera puede escribir una BIP. Algunas son estándares (como BIP39 para semillas, BIP32 para HD wallets), otras son informativas o de proceso.",
      en: "BIPs are the formal process for proposing and discussing changes to Bitcoin, inspired by Python's PEPs. Anyone can write a BIP. Some are standards (like BIP39 for seeds, BIP32 for HD wallets); others are informational or process-oriented."
    }
  },
  {
    text: {
      es: "¿Qué ventaja principal aportan las firmas Schnorr introducidas con Taproot?",
      en: "What main advantage do Schnorr signatures introduced with Taproot provide?"
    },
    options: {
      es: [
        "Permiten transacciones más rápidas al eliminar la validación de bloques",
        "Agregan múltiples firmas en una sola, mejorando privacidad y eficiencia",
        "Reemplazan la Prueba de Trabajo por un mecanismo de menor consumo",
        "Hacen todas las transacciones completamente anónimas e inrastreables"
      ],
      en: [
        "They allow faster transactions by eliminating block validation",
        "They aggregate multiple signatures into one, improving privacy and efficiency",
        "They replace Proof of Work with a lower-energy mechanism",
        "They make all transactions completely anonymous and untraceable"
      ]
    },
    correct: 1,
    explanation: {
      es: "Las firmas Schnorr permiten la agregación de claves (MuSig): varias claves se combinan en una sola firma indistinguible de una firma individual. Esto hace que las transacciones multisig sean más baratas, más privadas y más compactas que con ECDSA.",
      en: "Schnorr signatures enable key aggregation (MuSig): multiple keys combine into a single signature indistinguishable from an individual one. This makes multisig transactions cheaper, more private, and more compact than with ECDSA."
    }
  },
  {
    text: {
      es: "¿Qué define el protocolo BOLT 11 en Lightning Network?",
      en: "What does the BOLT 11 protocol define in Lightning Network?"
    },
    options: {
      es: [
        "El protocolo de apertura y cierre de canales Lightning",
        "El formato estándar de las facturas (invoices) de Lightning",
        "El estándar de comunicación entre nodos Lightning en la red P2P",
        "El documento técnico que define los HTLCs en Lightning"
      ],
      en: [
        "The protocol for opening and closing Lightning channels",
        "The standard format for Lightning invoices",
        "The communication standard between Lightning nodes on the P2P network",
        "The technical document defining HTLCs in Lightning"
      ]
    },
    correct: 1,
    explanation: {
      es: "BOLT 11 especifica el formato de las facturas Lightning: una cadena codificada en bech32 que contiene el hash del pago, el importe, el nodo destino, el timestamp y la firma. Es el formato de invoice más ampliamente soportado hoy en día.",
      en: "BOLT 11 specifies the Lightning invoice format: a bech32-encoded string containing the payment hash, amount, destination node, timestamp, and signature. It is the most widely supported invoice format today."
    }
  },
  {
    text: {
      es: "¿Qué mejora introduce BOLT 12 (Offers) sobre BOLT 11?",
      en: "What improvement does BOLT 12 (Offers) introduce over BOLT 11?"
    },
    options: {
      es: [
        "Facturas reutilizables y pagos recurrentes sin acción del receptor",
        "Un formato de factura más corto y fácil de compartir en redes sociales",
        "La posibilidad de incluir mensajes de texto dentro de los pagos Lightning",
        "Una nueva forma de calcular y distribuir las tarifas de enrutamiento"
      ],
      en: [
        "Reusable invoices and recurring payments without receiver action",
        "A shorter invoice format easier to share on social media",
        "The ability to include text messages inside Lightning payments",
        "A new way to calculate and distribute routing fees"
      ]
    },
    correct: 0,
    explanation: {
      es: "BOLT 12 introduce los 'Offers': códigos estáticos reutilizables que permiten a un nodo generar facturas frescas bajo demanda. Soporta pagos recurrentes, donaciones de monto libre, y mejora la privacidad del receptor al no revelar directamente su nodo ID.",
      en: "BOLT 12 introduces 'Offers': reusable static codes that let a node generate fresh invoices on demand. It supports recurring payments, amount-free donations, and improves recipient privacy by not directly revealing their node ID."
    }
  },
  {
    text: {
      es: "¿Qué es la red signet de Bitcoin?",
      en: "What is the Bitcoin signet network?"
    },
    options: {
      es: [
        "La red principal de Bitcoin donde ocurren transacciones con valor real",
        "Una red de pruebas con bloques controlados, más estable que testnet",
        "Una red privada usada exclusivamente por desarrolladores de Bitcoin Core",
        "La red de pruebas original de Bitcoin, activa desde el año 2011"
      ],
      en: [
        "The main Bitcoin network where transactions have real value",
        "A test network with controlled blocks, more stable than testnet",
        "A private network used exclusively by Bitcoin Core developers",
        "The original Bitcoin test network, active since 2011"
      ]
    },
    correct: 1,
    explanation: {
      es: "Signet (BIP325) es una red de prueba donde los bloques deben ser firmados por una clave autorizada, eliminando las reorganizaciones caóticas de testnet. Es más predecible, lo que la hace ideal para probar wallets, nodos Lightning y aplicaciones.",
      en: "Signet (BIP325) is a test network where blocks must be signed by an authorized key, eliminating the chaotic reorganizations of testnet. It is more predictable, making it ideal for testing wallets, Lightning nodes, and applications."
    }
  },
  {
    text: {
      es: "¿Qué es un descriptor de billetera en el desarrollo de Bitcoin?",
      en: "What is a wallet descriptor in Bitcoin development?"
    },
    options: {
      es: [
        "Una descripción legible del saldo y el estado actual de una billetera",
        "Una expresión que codifica completamente cómo derivar y gastar UTXOs",
        "Un formato de respaldo alternativo a la frase semilla de 24 palabras",
        "Un archivo de configuración que almacena las preferencias del usuario"
      ],
      en: [
        "A human-readable description of a wallet's balance and current state",
        "An expression that fully encodes how to derive and spend UTXOs",
        "An alternative backup format to the 24-word seed phrase",
        "A configuration file storing the user's preferences"
      ]
    },
    correct: 1,
    explanation: {
      es: "Los descriptores (BIP380–386) son expresiones como `wpkh([fingerprint/84'/0'/0']xpub.../0/*)` que especifican completamente el tipo de script, las claves y el path de derivación. Permiten importar/exportar billeteras entre distintas implementaciones sin ambigüedad.",
      en: "Descriptors (BIP380–386) are expressions like `wpkh([fingerprint/84'/0'/0']xpub.../0/*)` that fully specify the script type, keys, and derivation path. They allow wallets to be imported/exported between different implementations without ambiguity."
    }
  },
  {
    text: {
      es: "¿Qué es el protocolo RGB en Bitcoin?",
      en: "What is the RGB protocol on Bitcoin?"
    },
    options: {
      es: [
        "Un sistema de compresión de datos para reducir el tamaño de los bloques",
        "Un protocolo para emitir activos digitales sobre la blockchain de Bitcoin",
        "Un estándar de interfaz gráfica para aplicaciones de billetera Bitcoin",
        "Un mecanismo de sincronización de estado entre nodos Lightning remotos"
      ],
      en: [
        "A data compression system to reduce block size",
        "A protocol for issuing digital assets on the Bitcoin blockchain",
        "A graphical interface standard for Bitcoin wallet applications",
        "A state synchronization mechanism between remote Lightning nodes"
      ]
    },
    correct: 1,
    explanation: {
      es: "RGB es un protocolo de validación del lado del cliente que permite emitir y transferir activos (tokens, NFTs, identidades) anclados a UTXOs de Bitcoin. La lógica del contrato se ejecuta localmente por los participantes, sin publicar datos privados en la blockchain.",
      en: "RGB is a client-side validation protocol that allows issuing and transferring assets (tokens, NFTs, identities) anchored to Bitcoin UTXOs. Contract logic is executed locally by participants, without publishing private data on the blockchain."
    }
  },
  {
    text: {
      es: "¿Qué es un DLC (Discreet Log Contract)?",
      en: "What is a DLC (Discreet Log Contract)?"
    },
    options: {
      es: [
        "Un contrato inteligente que usa un oráculo externo para resolver condiciones",
        "Un sistema de firma múltiple para pagos de alto valor en Bitcoin",
        "Un protocolo de privacidad que oculta los montos en transacciones on-chain",
        "Un mecanismo de canales de estado para contratos de larga duración"
      ],
      en: [
        "A smart contract that uses an external oracle to resolve conditions",
        "A multisig system for high-value Bitcoin payments",
        "A privacy protocol that hides amounts in on-chain transactions",
        "A state channel mechanism for long-duration contracts"
      ]
    },
    correct: 0,
    explanation: {
      es: "Los DLCs permiten contratos financieros (apuestas, derivados, seguros) donde el resultado depende de datos externos provistos por un oráculo. El oráculo firma el resultado, pero no sabe que está siendo usado en un contrato ni quiénes son los participantes.",
      en: "DLCs enable financial contracts (bets, derivatives, insurance) whose outcome depends on external data provided by an oracle. The oracle signs the outcome but does not know it is being used in a contract or who the participants are."
    }
  },
  {
    text: {
      es: "¿Qué es el protocolo Nostr en el ecosistema Bitcoin/Lightning?",
      en: "What is the Nostr protocol in the Bitcoin/Lightning ecosystem?"
    },
    options: {
      es: [
        "Un estándar de comunicación descentralizada y resistente a la censura",
        "Un protocolo para sincronizar nodos Bitcoin en redes de baja latencia",
        "Un sistema de actualización automática para implementaciones de Lightning",
        "Un formato de archivo para exportar e importar configuraciones de nodo"
      ],
      en: [
        "A decentralized, censorship-resistant communication standard",
        "A protocol for syncing Bitcoin nodes on low-latency networks",
        "An automatic update system for Lightning implementations",
        "A file format for exporting and importing node configurations"
      ]
    },
    correct: 0,
    explanation: {
      es: "Nostr (Notes and Other Stuff Transmitted by Relays) es un protocolo de mensajería descentralizado basado en pares de claves criptográficas. Se integra con Lightning a través de Zaps (pagos Lightning adjuntos a publicaciones) y es popular en la comunidad Bitcoin por su resistencia a la censura.",
      en: "Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized messaging protocol based on cryptographic key pairs. It integrates with Lightning via Zaps (Lightning payments attached to posts) and is popular in the Bitcoin community for its censorship resistance."
    }
  }
];

module.exports = questions;
