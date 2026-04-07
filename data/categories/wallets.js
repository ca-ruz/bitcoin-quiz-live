// Categoría: Billeteras — claves, semillas y tipos de custodia

const questions = [
  {
    text: {
      es: "¿Qué es una billetera HD (Hierarchical Deterministic)?",
      en: "What is an HD (Hierarchical Deterministic) wallet?"
    },
    options: {
      es: [
        "Una billetera que deriva múltiples claves desde una única semilla maestra",
        "Una billetera protegida con hardware físico y un PIN de seguridad",
        "Una billetera multifirma que necesita varias claves para autorizar gastos",
        "Una billetera en línea gestionada por un exchange o empresa externa"
      ],
      en: [
        "A wallet that derives multiple keys from a single master seed",
        "A wallet protected by physical hardware and a security PIN",
        "A multisig wallet that requires several keys to authorize spending",
        "An online wallet managed by an exchange or external company"
      ]
    },
    correct: 0,
    explanation: {
      es: "Una billetera HD genera un árbol completo de claves y direcciones a partir de una única semilla maestra, siguiendo el estándar BIP32. Esto significa que basta con respaldar una sola frase semilla para recuperar todas las claves de la billetera.",
      en: "An HD wallet generates a full tree of keys and addresses from a single master seed, following the BIP32 standard. This means backing up one seed phrase is enough to recover all keys in the wallet."
    }
  },
  {
    text: {
      es: "¿Qué define el estándar BIP39?",
      en: "What does the BIP39 standard define?"
    },
    options: {
      es: [
        "El protocolo que especifica cómo funcionan los canales de Lightning",
        "El estándar para crear frases semilla de 12 a 24 palabras",
        "La especificación técnica del formato y estructura de los bloques",
        "El conjunto de reglas del protocolo que regula la emisión de Bitcoin"
      ],
      en: [
        "The protocol specifying how Lightning channels work",
        "The standard for creating 12 to 24 word seed phrases",
        "The technical specification for block format and structure",
        "The set of protocol rules governing Bitcoin issuance"
      ]
    },
    correct: 1,
    explanation: {
      es: "BIP39 define cómo convertir entropía aleatoria en una lista de palabras legibles (mnemónico). Usa un vocabulario de 2,048 palabras en varios idiomas. Esta frase puede restaurar la billetera completa en cualquier software compatible.",
      en: "BIP39 defines how to convert random entropy into a human-readable word list (mnemonic). It uses a vocabulary of 2,048 words in multiple languages. This phrase can restore the full wallet in any compatible software."
    }
  },
  {
    text: {
      es: "¿Qué diferencia a una billetera caliente de una fría?",
      en: "What distinguishes a hot wallet from a cold wallet?"
    },
    options: {
      es: [
        "El precio de mercado y la marca reconocida del fabricante",
        "La velocidad con que cada tipo procesa y confirma transacciones",
        "Que la caliente está conectada a internet y la fría no",
        "El límite de direcciones que cada tipo de billetera puede almacenar"
      ],
      en: [
        "The market price and brand recognition of the manufacturer",
        "The speed at which each type processes and confirms transactions",
        "The hot wallet is internet-connected; the cold wallet is not",
        "The address limit each wallet type can store"
      ]
    },
    correct: 2,
    explanation: {
      es: "Una billetera caliente (hot wallet) está conectada a internet: conveniente para pagos frecuentes pero más expuesta a ataques. Una billetera fría (cold wallet) mantiene las claves offline, ideal para guardar ahorros a largo plazo.",
      en: "A hot wallet is internet-connected: convenient for frequent payments but more exposed to attacks. A cold wallet keeps keys offline, ideal for storing long-term savings."
    }
  },
  {
    text: {
      es: "¿Qué es una billetera multisig?",
      en: "What is a multisig wallet?"
    },
    options: {
      es: [
        "Una billetera que solo acepta transacciones de montos muy grandes",
        "Una billetera que requiere varias firmas para autorizar un gasto",
        "Una billetera que genera múltiples direcciones de forma simultánea",
        "Una billetera compartida entre varios exchanges populares"
      ],
      en: [
        "A wallet that only accepts very large transactions",
        "A wallet that requires multiple signatures to authorize spending",
        "A wallet that generates multiple addresses simultaneously",
        "A wallet shared among several popular exchanges"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una billetera multisig (multifirma) requiere que M de N claves privadas firmen una transacción para que sea válida (por ejemplo, 2 de 3). Elimina el punto único de fallo: ni un hackeo ni la pérdida de una sola clave compromete los fondos.",
      en: "A multisig wallet requires M of N private keys to sign a transaction before it is valid (e.g., 2 of 3). It eliminates single points of failure: neither a hack nor losing one key alone compromises the funds."
    }
  },
  {
    text: {
      es: "¿Qué tipo de dirección de Bitcoin comienza con 'bc1q'?",
      en: "What type of Bitcoin address starts with 'bc1q'?"
    },
    options: {
      es: [
        "Una dirección Legacy (P2PKH)",
        "Una dirección SegWit nativa (Bech32 / P2WPKH)",
        "Una dirección de script P2SH",
        "Una dirección Taproot (P2TR)"
      ],
      en: [
        "A Legacy base58 address (P2PKH)",
        "A native SegWit address (Bech32 / P2WPKH)",
        "A P2SH script address",
        "A Taproot address (P2TR)"
      ]
    },
    correct: 1,
    explanation: {
      es: "Las direcciones que empiezan con 'bc1q' son SegWit nativas (P2WPKH o P2WSH) en formato Bech32. Ofrecen comisiones más bajas que las Legacy ('1...') y P2SH ('3...') gracias a SegWit, y son más resistentes a errores de escritura.",
      en: "Addresses starting with 'bc1q' are native SegWit (P2WPKH or P2WSH) in Bech32 format. They offer lower fees than Legacy ('1...') and P2SH ('3...') addresses thanks to SegWit, and are more resistant to transcription errors."
    }
  },
  {
    text: {
      es: "¿Qué tipo de dirección de Bitcoin comienza con 'bc1p'?",
      en: "What type of Bitcoin address starts with 'bc1p'?"
    },
    options: {
      es: [
        "Una dirección SegWit nativa (Bech32 / P2WPKH)",
        "Una dirección multisig P2SH",
        "Una dirección Taproot (Bech32m / P2TR)",
        "Una dirección Legacy (P2PKH)"
      ],
      en: [
        "A native SegWit address (Bech32 / P2WPKH)",
        "A P2SH multisig address",
        "A Taproot address (Bech32m / P2TR)",
        "A Legacy address (P2PKH)"
      ]
    },
    correct: 2,
    explanation: {
      es: "Las direcciones 'bc1p' son Taproot (P2TR) en formato Bech32m, disponibles desde la activación de Taproot en noviembre de 2021. Usan firmas Schnorr, mejoran la privacidad (los scripts complejos parecen pagos simples) y reducen comisiones.",
      en: "'bc1p' addresses are Taproot (P2TR) in Bech32m format, available since Taproot activated in November 2021. They use Schnorr signatures, improve privacy (complex scripts look like simple payments), and reduce fees."
    }
  },
  {
    text: {
      es: "¿Qué es una billetera de solo lectura (watch-only wallet)?",
      en: "What is a watch-only wallet?"
    },
    options: {
      es: [
        "Una billetera que no permite recibir ninguna transacción nueva",
        "Una billetera que monitorea saldos pero no puede firmar gastos",
        "Una billetera de hardware con pantalla en modo de visualización",
        "Una billetera que solo guarda el historial de transacciones pasadas"
      ],
      en: [
        "A wallet that cannot receive any new transactions",
        "A wallet that monitors balances but cannot sign spending",
        "A hardware wallet with a screen in display-only mode",
        "A wallet that only stores past transaction history"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una watch-only wallet conoce las claves públicas pero no las privadas. Puede ver saldos y recibir fondos, pero no puede firmar transacciones para gastar. Es ideal para monitorear fondos en almacenamiento frío sin exponer las claves privadas.",
      en: "A watch-only wallet knows the public keys but not the private keys. It can view balances and receive funds, but cannot sign transactions to spend. It is ideal for monitoring cold storage funds without exposing private keys."
    }
  },
  {
    text: {
      es: "¿Qué añade una passphrase (contraseña) a una frase semilla de Bitcoin?",
      en: "What does a passphrase add to a Bitcoin seed phrase?"
    },
    options: {
      es: [
        "Una contraseña que reemplaza a las palabras de la frase semilla",
        "Una capa adicional de seguridad que genera una billetera completamente diferente",
        "Un mecanismo de recuperación si se pierden algunas palabras de la semilla",
        "Un sistema de cifrado que bloquea la billetera después de tres intentos"
      ],
      en: [
        "A password that replaces the words of the seed phrase",
        "An extra security layer that generates a completely different wallet",
        "A recovery mechanism if some seed words are lost",
        "An encryption system that locks the wallet after three attempts"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una passphrase actúa como una '25ª palabra' (o más). La misma frase semilla con distintas passphrases genera billeteras completamente distintas. Aunque alguien encuentre tu semilla, sin la passphrase no puede acceder a tus fondos.",
      en: "A passphrase acts as a '25th word' (or more). The same seed phrase with different passphrases generates completely different wallets. Even if someone finds your seed, without the passphrase they cannot access your funds."
    }
  },
  {
    text: {
      es: "¿Qué mejora principal introdujo Taproot en Bitcoin?",
      en: "What main improvement did Taproot introduce to Bitcoin?"
    },
    options: {
      es: [
        "Un nuevo tipo de exchange descentralizado construido sobre Bitcoin",
        "Mejoras de privacidad y eficiencia usando firmas Schnorr y MAST",
        "Un hardware wallet de nueva generación con pantalla táctil integrada",
        "Un protocolo Lightning para canales de mayor capacidad de pago"
      ],
      en: [
        "A new type of decentralized exchange built on Bitcoin",
        "Privacy and efficiency improvements using Schnorr signatures and MAST",
        "A next-generation hardware wallet with integrated touch screen",
        "A Lightning protocol for higher-capacity payment channels"
      ]
    },
    correct: 1,
    explanation: {
      es: "Taproot (activado en noviembre 2021) combina firmas Schnorr (que permiten agregar claves), MAST (Merklized Abstract Syntax Trees, que oculta ramas de scripts no usadas) y Tapscript. El resultado: transacciones más compactas, más privadas y con scripts más expresivos.",
      en: "Taproot (activated November 2021) combines Schnorr signatures (enabling key aggregation), MAST (Merklized Abstract Syntax Trees, hiding unused script branches), and Tapscript. The result: more compact, more private transactions with more expressive scripts."
    }
  },
  {
    text: {
      es: "¿Qué es un descriptor de billetera (wallet descriptor)?",
      en: "What is a wallet descriptor?"
    },
    options: {
      es: [
        "Una descripción legible del saldo y estado actual de una billetera",
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
      es: "Un descriptor (estándar BIP380+) especifica exactamente el tipo de scripts, las claves públicas y el path de derivación necesarios para encontrar y gastar todos los UTXOs de una billetera. Es especialmente útil para billeteras multisig y para exportar/importar entre distintos softwares.",
      en: "A descriptor (BIP380+ standard) specifies exactly the script type, public keys, and derivation path needed to find and spend all UTXOs in a wallet. It is especially useful for multisig wallets and for exporting/importing between different software implementations."
    }
  }
];

module.exports = questions;
