// ~30 preguntas sobre Bitcoin para principiantes — bilingüe ES / EN
// Each question: text, options, correct index (base 0), explanation — all bilingual objects.
// Option lengths within each language are kept similar so players can't guess by length.

const questions = [
  {
    text: {
      es: "¿Qué es Bitcoin?",
      en: "What is Bitcoin?"
    },
    options: {
      es: [
        "Una moneda digital controlada por bancos centrales",
        "Una moneda digital descentralizada sin autoridad central",
        "Una criptomoneda emitida y respaldada por un gobierno",
        "Un sistema de pagos en línea de una empresa privada"
      ],
      en: [
        "A digital currency controlled by central banks",
        "A decentralized digital currency with no central authority",
        "A cryptocurrency issued and backed by a government",
        "An online payment system owned by a private company"
      ]
    },
    correct: 1,
    explanation: {
      es: "Bitcoin es una moneda digital descentralizada: ningún gobierno ni banco la controla. Funciona en una red de igual a igual (peer-to-peer) con miles de computadoras en todo el mundo.",
      en: "Bitcoin is a decentralized digital currency: no government or bank controls it. It runs on a peer-to-peer network of thousands of computers around the world."
    }
  },
  {
    text: {
      es: "¿Quién creó Bitcoin?",
      en: "Who created Bitcoin?"
    },
    options: {
      es: ["Elon Musk", "Vitalik Buterin", "Satoshi Nakamoto", "Bill Gates"],
      en: ["Elon Musk", "Vitalik Buterin", "Satoshi Nakamoto", "Bill Gates"]
    },
    correct: 2,
    explanation: {
      es: "Bitcoin fue creado por una persona o grupo bajo el seudónimo Satoshi Nakamoto. Su verdadera identidad sigue siendo un misterio hasta hoy.",
      en: "Bitcoin was created by a person or group under the pseudonym Satoshi Nakamoto. Their true identity remains a mystery to this day."
    }
  },
  {
    text: {
      es: "¿Cuántos Bitcoin existirán en total?",
      en: "How many Bitcoin will ever exist?"
    },
    options: {
      es: ["1,000 millones", "100 millones", "21 millones", "Ilimitados"],
      en: ["1 billion", "100 million", "21 million", "Unlimited"]
    },
    correct: 2,
    explanation: {
      es: "Solo existirán 21 millones de Bitcoin. Esta oferta fija está programada en el código y hace que Bitcoin sea escaso, como el oro digital.",
      en: "Only 21 million Bitcoin will ever exist. This fixed supply is programmed into the code, making Bitcoin scarce — like digital gold."
    }
  },
  {
    text: {
      es: "¿Qué es una blockchain (cadena de bloques)?",
      en: "What is a blockchain?"
    },
    options: {
      es: [
        "Un tipo de billetera digital para guardar criptomonedas",
        "Un registro de transacciones distribuido en muchas computadoras",
        "Una máquina especializada para resolver cálculos de minería",
        "Una plataforma para intercambiar Bitcoin por otras monedas"
      ],
      en: [
        "A type of digital wallet for storing cryptocurrencies",
        "A distributed transaction ledger spread across many computers",
        "A specialized machine for solving mining calculations",
        "A platform for exchanging Bitcoin for other currencies"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una blockchain es un libro contable compartido e inmutable, almacenado en miles de computadoras. Ninguna entidad puede modificar los registros pasados, lo que lo hace resistente a la manipulación.",
      en: "A blockchain is a shared, immutable ledger stored across thousands of computers. No entity can alter past records, making it tamper-resistant."
    }
  },
  {
    text: {
      es: "¿Qué hacen los mineros de Bitcoin?",
      en: "What do Bitcoin miners do?"
    },
    options: {
      es: [
        "Imprimen Bitcoin nuevo como lo hace un banco central",
        "Hackean billeteras para robar fondos ajenos",
        "Validan transacciones y las agregan a la blockchain",
        "Intercambian Bitcoin por efectivo en cajeros automáticos"
      ],
      en: [
        "Print new Bitcoin the way a central bank prints money",
        "Hack wallets to steal other people's funds",
        "Validate transactions and add them to the blockchain",
        "Exchange Bitcoin for cash at ATMs"
      ]
    },
    correct: 2,
    explanation: {
      es: "Los mineros usan poder computacional para resolver acertijos matemáticos complejos. Al hacerlo, validan transacciones y aseguran la red, ganando Bitcoin como recompensa.",
      en: "Miners use computing power to solve complex mathematical puzzles. In doing so, they validate transactions and secure the network, earning Bitcoin as a reward."
    }
  },
  {
    text: {
      es: "¿Qué recompensa reciben los mineros al encontrar un bloque?",
      en: "What reward do miners receive for finding a block?"
    },
    options: {
      es: [
        "Subsidios del gobierno y descuentos en el pago de impuestos",
        "Bitcoin recién creados más las comisiones de las transacciones",
        "Intereses calculados en función de las horas de minería activa",
        "Tokens de otras criptomonedas como Ethereum o Litecoin"
      ],
      en: [
        "Government subsidies and tax discounts",
        "Newly created Bitcoin plus transaction fees",
        "Interest calculated based on active mining hours",
        "Tokens from other cryptocurrencies such as Ethereum or Litecoin"
      ]
    },
    correct: 1,
    explanation: {
      es: "Los mineros reciben Bitcoin recién emitidos (el subsidio de bloque) más todas las comisiones de transacción incluidas en el bloque que minaron.",
      en: "Miners receive newly issued Bitcoin (the block subsidy) plus all transaction fees included in the block they mined."
    }
  },
  {
    text: {
      es: "¿Qué es el halving de Bitcoin?",
      en: "What is the Bitcoin halving?"
    },
    options: {
      es: [
        "Cuando el precio de Bitcoin baja exactamente a la mitad",
        "Cuando la recompensa de minería se reduce a la mitad cada 4 años",
        "Cuando un Bitcoin se divide en dos monedas separadas iguales",
        "Cuando la velocidad de la red cae repentinamente a la mitad"
      ],
      en: [
        "When the price of Bitcoin drops exactly in half",
        "When the mining reward is cut in half every 4 years",
        "When one Bitcoin splits into two equal separate coins",
        "When the network speed suddenly drops to half"
      ]
    },
    correct: 1,
    explanation: {
      es: "Cada ~210,000 bloques (aproximadamente 4 años), la recompensa de minería se reduce a la mitad. Esto desacelera la creación de nuevos Bitcoin y los vuelve más escasos con el tiempo.",
      en: "Every ~210,000 blocks (roughly 4 years), the mining reward is cut in half. This slows the creation of new Bitcoin and makes them scarcer over time."
    }
  },
  {
    text: {
      es: "¿Qué es una clave privada?",
      en: "What is a private key?"
    },
    options: {
      es: [
        "La contraseña de tu billetera digital guardada por el banco",
        "Un código secreto que prueba la propiedad y permite gastar Bitcoin",
        "La contraseña para iniciar sesión en tu cuenta del exchange",
        "Un número de identificación de Bitcoin asignado por el gobierno"
      ],
      en: [
        "The password to your digital wallet stored by the bank",
        "A secret code that proves ownership and lets you spend Bitcoin",
        "The password to log into your exchange account",
        "A Bitcoin identification number assigned by the government"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una clave privada es un número secreto derivado de criptografía. Quien la posee controla los Bitcoin en esa dirección. ¡Nunca la compartas con nadie!",
      en: "A private key is a secret number derived from cryptography. Whoever holds it controls the Bitcoin at that address. Never share it with anyone!"
    }
  },
  {
    text: {
      es: "¿Qué es una dirección de Bitcoin?",
      en: "What is a Bitcoin address?"
    },
    options: {
      es: [
        "Tu dirección postal física vinculada a tu billetera de Bitcoin",
        "El código secreto que necesitas para autorizar y gastar Bitcoin",
        "Un código público que otras personas usan para enviarte Bitcoin",
        "Tu número de cuenta bancaria registrado en un exchange"
      ],
      en: [
        "Your physical mailing address linked to your Bitcoin wallet",
        "The secret code you need to authorize and spend Bitcoin",
        "A public code that others use to send you Bitcoin",
        "Your bank account number registered at an exchange"
      ]
    },
    correct: 2,
    explanation: {
      es: "Una dirección de Bitcoin es como un correo electrónico: puedes compartirla públicamente para que otros te envíen Bitcoin. Se deriva de tu clave pública.",
      en: "A Bitcoin address is like an email address: you can share it publicly so others can send you Bitcoin. It is derived from your public key."
    }
  },
  {
    text: {
      es: "¿Qué significa 'Not your keys, not your coins' (sin tus llaves, no son tus monedas)?",
      en: "What does 'Not your keys, not your coins' mean?"
    },
    options: {
      es: [
        "Necesitas llevar llaves físicas de metal para acceder a Bitcoin",
        "Si no controlas tus claves privadas, realmente no posees tus Bitcoin",
        "Las claves de Bitcoin deben guardarse en una bóveda bancaria",
        "Necesitas aprobación gubernamental para tener y usar Bitcoin"
      ],
      en: [
        "You need physical metal keys to access your Bitcoin wallet",
        "Without your private keys, you don't truly own your Bitcoin",
        "Your Bitcoin keys must be stored in a bank vault",
        "You need government approval to hold and use Bitcoin legally"
      ]
    },
    correct: 1,
    explanation: {
      es: "Si guardas Bitcoin en un exchange, ellos tienen las claves privadas. Si son hackeados, quiebran o congelan retiros, podrías perderlo todo.",
      en: "If you store Bitcoin on an exchange, they hold the private keys. If they get hacked, go bankrupt, or freeze withdrawals, you could lose everything."
    }
  },
  {
    text: {
      es: "¿Puede revertirse una transacción de Bitcoin confirmada?",
      en: "Can a confirmed Bitcoin transaction be reversed?"
    },
    options: {
      es: [
        "Sí, dentro de las primeras 24 horas",
        "Sí, si contactas al soporte técnico",
        "No — las transacciones de Bitcoin son irreversibles",
        "Sí, con aprobación de la mayoría de la red"
      ],
      en: [
        "Yes, within the first 24 hours",
        "Yes, if you contact technical support",
        "No — Bitcoin transactions are irreversible",
        "Yes, with approval from the majority of the network"
      ]
    },
    correct: 2,
    explanation: {
      es: "Una transacción sin confirmar puede reemplazarse usando RBF (Replace-By-Fee) antes de que un minero la incluya en un bloque. Pero una vez confirmada, es prácticamente imposible revertirla. ¡Verifica siempre la dirección antes de enviar!",
      en: "An unconfirmed transaction can be replaced using RBF (Replace-By-Fee) before a miner includes it in a block. But once confirmed, it is practically impossible to reverse. Always verify the address before sending!"
    }
  },
  {
    text: {
      es: "¿Qué es la autocustodia en Bitcoin?",
      en: "What is self-custody in Bitcoin?"
    },
    options: {
      es: [
        "Guardar tu Bitcoin en un exchange por comodidad y seguridad",
        "Dejar que un banco regulado custodie y administre tu Bitcoin",
        "Controlar tus propias claves privadas y tu Bitcoin directamente",
        "Contratar a un asesor financiero certificado para manejar tu Bitcoin"
      ],
      en: [
        "Storing your Bitcoin on an exchange for convenience and security",
        "Letting a regulated bank custody and manage your Bitcoin",
        "Controlling your own private keys and your Bitcoin directly",
        "Hiring a certified financial advisor to manage your Bitcoin"
      ]
    },
    correct: 2,
    explanation: {
      es: "La autocustodia significa que tú controlas tus claves privadas. Eres tu propio banco: ningún tercero puede congelar, confiscar ni perder tus fondos.",
      en: "Self-custody means you control your own private keys. You are your own bank: no third party can freeze, seize, or lose your funds."
    }
  },
  {
    text: {
      es: "¿Qué es la Red Lightning (Lightning Network)?",
      en: "What is the Lightning Network?"
    },
    options: {
      es: [
        "Un equipo especializado para minar nuevos bloques de Bitcoin",
        "Una capa 2 sobre Bitcoin que permite pagos instantáneos y baratos",
        "Una criptomoneda alternativa que compite directamente con Bitcoin",
        "Un sistema de pagos digitales administrado por un gobierno"
      ],
      en: [
        "Specialized hardware for mining new Bitcoin blocks",
        "A layer 2 on Bitcoin that enables instant, low-cost payments",
        "An alternative cryptocurrency that competes directly with Bitcoin",
        "A digital payment system managed by a government"
      ]
    },
    correct: 1,
    explanation: {
      es: "La Red Lightning está construida sobre Bitcoin. Usa canales de pago para permitir micropagos instantáneos, ideal para compras cotidianas como café, propinas y más.",
      en: "The Lightning Network is built on top of Bitcoin. It uses payment channels to enable instant micropayments, ideal for everyday purchases like coffee, tips, and more."
    }
  },
  {
    text: {
      es: "¿Por qué los pagos por Lightning Network son tan rápidos?",
      en: "Why are Lightning Network payments so fast?"
    },
    options: {
      es: [
        "Liquidan fuera de la cadena, sin esperar confirmaciones de bloques",
        "Los bancos asociados al protocolo los verifican en tiempo real",
        "Las transacciones de Bitcoin en cadena son ahora completamente instantáneas",
        "Algoritmos de inteligencia artificial optimizan y aceleran la blockchain"
      ],
      en: [
        "They settle off-chain, without waiting for block confirmations",
        "Partner banks verify them in real time",
        "On-chain Bitcoin transactions are now completely instant",
        "Artificial intelligence algorithms optimize and speed up the blockchain"
      ]
    },
    correct: 0,
    explanation: {
      es: "Lightning abre canales de pago entre partes. Los fondos se mueven instantáneamente fuera de la cadena; solo la apertura y cierre del canal toca la blockchain.",
      en: "Lightning opens payment channels between parties. Funds move instantly off-chain; only opening and closing the channel touches the blockchain."
    }
  },
  {
    text: {
      es: "¿Qué es un satoshi?",
      en: "What is a satoshi?"
    },
    options: {
      es: [
        "El seudónimo del programador que creó la red Ethereum",
        "Un exchange de Bitcoin fundado en Japón en el año 2010",
        "La unidad mínima de Bitcoin, equivalente a 0.00000001 BTC",
        "Un modelo de hardware de minería ASIC de alta potencia"
      ],
      en: [
        "The pseudonym of the programmer who created Ethereum",
        "A Bitcoin exchange founded in Japan in 2010",
        "The smallest unit of Bitcoin, equal to 0.00000001 BTC",
        "A high-powered ASIC mining hardware model"
      ]
    },
    correct: 2,
    explanation: {
      es: "Un satoshi (sat) es 0.00000001 BTC. Su nombre honra al creador de Bitcoin. Los pagos por Lightning frecuentemente se denominan en sats.",
      en: "A satoshi (sat) is 0.00000001 BTC. Its name honors Bitcoin's creator. Lightning payments are often denominated in sats."
    }
  },
  {
    text: {
      es: "¿Qué hace descentralizado a Bitcoin?",
      en: "What makes Bitcoin decentralized?"
    },
    options: {
      es: [
        "Es controlado por un consorcio internacional de grandes bancos",
        "Ninguna persona, empresa o gobierno puede controlar la red",
        "Bitcoin es supervisado y administrado por las Naciones Unidas",
        "Una organización sin fines de lucro mantiene la blockchain central"
      ],
      en: [
        "It is controlled by an international consortium of large banks",
        "No person, company, or government can control the network",
        "Bitcoin is overseen and managed by the United Nations",
        "A nonprofit organization maintains the central blockchain"
      ]
    },
    correct: 1,
    explanation: {
      es: "Bitcoin corre en decenas de miles de computadoras en todo el mundo. Nadie puede apagarlo, censurar transacciones ni cambiar las reglas unilateralmente.",
      en: "Bitcoin runs on tens of thousands of computers worldwide. Nobody can shut it down, censor transactions, or unilaterally change the rules."
    }
  },
  {
    text: {
      es: "¿Cuándo se minó el bloque génesis de Bitcoin (el primer bloque)?",
      en: "When was the Bitcoin genesis block (the first block) mined?"
    },
    options: {
      es: [
        "3 de enero de 2009",
        "1 de enero de 2000",
        "31 de octubre de 2008",
        "15 de marzo de 2010"
      ],
      en: [
        "January 3, 2009",
        "January 1, 2000",
        "October 31, 2008",
        "March 15, 2010"
      ]
    },
    correct: 0,
    explanation: {
      es: "El bloque génesis fue minado el 3 de enero de 2009. Satoshi incrustó un titular del Times: 'Chancellor on brink of second bailout for banks' — una crítica sutil al sistema financiero tradicional.",
      en: "The genesis block was mined on January 3, 2009. Satoshi embedded a Times headline: 'Chancellor on brink of second bailout for banks' — a subtle critique of the traditional financial system."
    }
  },
  {
    text: {
      es: "¿Qué es una billetera de hardware (hardware wallet)?",
      en: "What is a hardware wallet?"
    },
    options: {
      es: [
        "Un dispositivo físico que almacena tus claves privadas sin internet",
        "Una memoria USB que contiene tus credenciales de acceso al exchange",
        "Una tarjeta de crédito recargable que almacena tu saldo en Bitcoin",
        "Un cajero automático especializado para comprar y vender Bitcoin"
      ],
      en: [
        "A physical device that stores your private keys offline",
        "A USB drive that contains your exchange login credentials",
        "A rechargeable credit card that stores your Bitcoin balance",
        "A specialized ATM for buying and selling Bitcoin"
      ]
    },
    correct: 0,
    explanation: {
      es: "Las billeteras de hardware (como Coldcard, Trezor o Ledger) guardan las claves privadas en un chip seguro y desconectado de internet, protegiéndolas de hackers y malware.",
      en: "Hardware wallets (such as Coldcard, Trezor, or Ledger) store private keys on a secure chip disconnected from the internet, protecting them from hackers and malware."
    }
  },
  {
    text: {
      es: "¿Qué es una frase semilla (seed phrase o frase de recuperación)?",
      en: "What is a seed phrase (recovery phrase)?"
    },
    options: {
      es: [
        "La contraseña secreta de tu cuenta en un exchange de Bitcoin",
        "12 a 24 palabras que restauran tu billetera en cualquier dispositivo",
        "Un código especial de transacción para enviar Bitcoin de forma anónima",
        "El código que usan los mineros para validar y firmar nuevos bloques"
      ],
      en: [
        "The secret password to your Bitcoin exchange account",
        "12 to 24 words that restore your wallet on any device",
        "A special transaction code for sending Bitcoin anonymously",
        "The code miners use to validate and sign new blocks"
      ]
    },
    correct: 1,
    explanation: {
      es: "Una frase semilla es un respaldo legible de la clave maestra de tu billetera. Escríbela en papel y guárdala en un lugar seguro; quien la tenga puede acceder a todos tus fondos.",
      en: "A seed phrase is a human-readable backup of your wallet's master key. Write it on paper and keep it somewhere safe; anyone who has it can access all your funds."
    }
  },
  {
    text: {
      es: "¿Qué es la Prueba de Trabajo (Proof of Work)?",
      en: "What is Proof of Work?"
    },
    options: {
      es: [
        "Un certificado oficial del gobierno que acredita la propiedad de Bitcoin",
        "Un mecanismo donde los mineros gastan energía para validar transacciones",
        "Un documento legal obligatorio para realizar grandes transferencias de Bitcoin",
        "Un sistema criptográfico para recuperar billeteras y Bitcoin perdidos"
      ],
      en: [
        "An official government certificate proving Bitcoin ownership",
        "A mechanism where miners expend energy to validate transactions",
        "A mandatory legal document for large Bitcoin transfers",
        "A cryptographic system for recovering lost wallets and Bitcoin"
      ]
    },
    correct: 1,
    explanation: {
      es: "La Prueba de Trabajo exige que los mineros realicen un trabajo computacional real (gastando electricidad) para agregar un bloque. Este costo hace que atacar la red sea prohibitivamente caro.",
      en: "Proof of Work requires miners to perform real computational work (spending electricity) to add a block. This cost makes attacking the network prohibitively expensive."
    }
  },
  {
    text: {
      es: "¿Cómo evita Bitcoin el doble gasto?",
      en: "How does Bitcoin prevent double spending?"
    },
    options: {
      es: [
        "Los bancos centrales verifican y aprueban en tiempo real cada transacción de Bitcoin",
        "El gobierno autoriza y registra de forma oficial todas las transferencias de Bitcoin",
        "La blockchain y el consenso de red impiden gastar el mismo Bitcoin dos veces",
        "Bitcoin funciona como el efectivo físico, por lo que no puede copiarse ni duplicarse"
      ],
      en: [
        "Central banks verify and approve every Bitcoin transaction in real time",
        "The government officially authorizes and records all Bitcoin transfers",
        "The blockchain and network consensus prevent spending the same Bitcoin twice",
        "Bitcoin works like physical cash, so it cannot be copied or duplicated"
      ]
    },
    correct: 2,
    explanation: {
      es: "Cada transacción se transmite a la red. Los mineros solo incluyen transacciones válidas con monedas no gastadas. Una vez confirmada, cualquier intento de reenvío es rechazado por todos los nodos.",
      en: "Every transaction is broadcast to the network. Miners only include valid transactions with unspent coins. Once confirmed, any attempt to rebroadcast it is rejected by all nodes."
    }
  },
  {
    text: {
      es: "¿Qué es un nodo de Bitcoin?",
      en: "What is a Bitcoin node?"
    },
    options: {
      es: [
        "Una máquina ASIC diseñada exclusivamente para minar nuevos bloques",
        "Una computadora que almacena la blockchain completa y valida transacciones",
        "Un cajero automático especializado para comprar y vender Bitcoin en efectivo",
        "Un servidor central que los exchanges usan para gestionar los fondos"
      ],
      en: [
        "An ASIC machine designed exclusively for mining new blocks",
        "A computer that stores the full blockchain and validates transactions",
        "A specialized ATM for buying and selling Bitcoin with cash",
        "A central server that exchanges use to manage funds"
      ]
    },
    correct: 1,
    explanation: {
      es: "Cualquiera puede correr un nodo de Bitcoin. Los nodos hacen cumplir las reglas de la red y validan cada transacción y bloque de forma independiente, sin necesidad de confiar en terceros.",
      en: "Anyone can run a Bitcoin node. Nodes enforce the network rules and independently validate every transaction and block, without needing to trust anyone."
    }
  },
  {
    text: {
      es: "¿Cuál fue la primera compra documentada en el mundo real con Bitcoin?",
      en: "What was the first documented real-world purchase made with Bitcoin?"
    },
    options: {
      es: [
        "Un auto comprado por 1,000 BTC",
        "Dos pizzas compradas por 10,000 BTC",
        "Una casa adquirida por 100 BTC",
        "Un café comprado por 1 BTC"
      ],
      en: [
        "A car purchased for 1,000 BTC",
        "Two pizzas purchased for 10,000 BTC",
        "A house bought for 100 BTC",
        "A coffee bought for 1 BTC"
      ]
    },
    correct: 1,
    explanation: {
      es: "El 22 de mayo de 2010 (hoy conocido como el 'Bitcoin Pizza Day'), Laszlo Hanyecz pagó 10,000 BTC por dos pizzas. Esas monedas valdrían cientos de millones de dólares hoy.",
      en: "On May 22, 2010 (now known as 'Bitcoin Pizza Day'), Laszlo Hanyecz paid 10,000 BTC for two pizzas. Those coins would be worth hundreds of millions of dollars today."
    }
  },
  {
    text: {
      es: "¿Qué significa 'HODL' en la cultura Bitcoin?",
      en: "What does 'HODL' mean in Bitcoin culture?"
    },
    options: {
      es: [
        "Vender todo tu Bitcoin inmediatamente cuando el precio empieza a caer",
        "Operar Bitcoin activamente usando apalancamiento y contratos de futuros",
        "Conservar Bitcoin a largo plazo y resistir la tentación de vender",
        "Un formato estándar de billetera para almacenar Bitcoin de forma offline"
      ],
      en: [
        "Selling all your Bitcoin immediately when the price starts to drop",
        "Actively trading Bitcoin using leverage and futures contracts",
        "Holding Bitcoin long-term and resisting the urge to sell",
        "A standard wallet format for storing Bitcoin offline"
      ]
    },
    correct: 2,
    explanation: {
      es: "HODL nació como un error tipográfico de 'HOLD' en un foro en 2013 durante una caída del precio. Se convirtió en el mantra de quienes mantienen Bitcoin a pesar de la volatilidad.",
      en: "HODL started as a typo of 'HOLD' on a forum in 2013 during a price crash. It became the mantra of those who hold Bitcoin despite volatility."
    }
  },
  {
    text: {
      es: "¿Qué pasa con la recompensa de minería de Bitcoin a largo plazo?",
      en: "What happens to the Bitcoin mining reward in the long run?"
    },
    options: {
      es: [
        "Aumenta progresivamente para compensar la mayor dificultad de minería en la red",
        "Se mantiene fija para siempre, sin variaciones ni cambios previstos en el protocolo",
        "Cae a la mitad cada ~4 años hasta que no queden Bitcoin por emitir",
        "El gobierno ajusta el calendario de recompensas según las condiciones económicas del momento"
      ],
      en: [
        "It increases progressively to compensate for higher mining difficulty",
        "It stays fixed forever, with no changes planned in the protocol",
        "It drops in half every ~4 years until no Bitcoin remain",
        "The government adjusts the reward schedule based on current economic conditions"
      ]
    },
    correct: 2,
    explanation: {
      es: "Después de que se minen los 21 millones de Bitcoin (alrededor del año 2140), los mineros solo ganarán comisiones de transacción. El calendario de oferta fija de Bitcoin está impuesto por el código, no por la política.",
      en: "After all 21 million Bitcoin are mined (around the year 2140), miners will only earn transaction fees. Bitcoin's fixed supply schedule is enforced by code, not policy."
    }
  },

  // ── Trap questions ────────────────────────────────────────────────────────────

  {
    text: {
      es: "¿Cuál de estas afirmaciones sobre Bitcoin es FALSA?",
      en: "Which of these statements about Bitcoin is FALSE?"
    },
    options: {
      es: [
        "El suministro total de Bitcoin está limitado a 21 millones",
        "Las transacciones de Bitcoin son completamente anónimas",
        "Cualquiera puede verificar transacciones en la blockchain",
        "Los mineros reciben recompensas por añadir bloques a la cadena"
      ],
      en: [
        "Bitcoin's total supply is limited to 21 million",
        "Bitcoin transactions are completely anonymous",
        "Anyone can verify transactions on the blockchain",
        "Miners receive rewards for adding blocks to the chain"
      ]
    },
    correct: 1,
    explanation: {
      es: "Bitcoin es seudónimo, no anónimo. Todas las transacciones son públicas y rastreables en la blockchain. Lo que se oculta es la identidad real detrás de cada dirección, no los movimientos de fondos.",
      en: "Bitcoin is pseudonymous, not anonymous. All transactions are public and traceable on the blockchain. What is hidden is the real identity behind each address, not the movement of funds."
    }
  },
  {
    text: {
      es: "¿Qué NO puede hacer alguien que solo conoce tu dirección de Bitcoin?",
      en: "What CAN'T someone do if they only know your Bitcoin address?"
    },
    options: {
      es: [
        "Ver el historial completo de transacciones de esa dirección",
        "Consultar el saldo actual de Bitcoin en esa billetera",
        "Gastar o mover los Bitcoin que hay en esa billetera",
        "Enviarte Bitcoin directamente a esa dirección sin tu permiso"
      ],
      en: [
        "View the complete transaction history of that address",
        "Check the current Bitcoin balance in that wallet",
        "Spend or move the Bitcoin in that wallet",
        "Send Bitcoin directly to that address without your permission"
      ]
    },
    correct: 2,
    explanation: {
      es: "La blockchain es pública: cualquiera puede ver el saldo e historial de una dirección, y cualquiera puede enviarte fondos. Pero para gastar o mover esos Bitcoin se necesita la clave privada, que solo tú debes tener.",
      en: "The blockchain is public: anyone can see an address's balance and history, and anyone can send you funds. But spending or moving those Bitcoin requires the private key, which only you should have."
    }
  },
  {
    text: {
      es: "Envías Bitcoin a una dirección incorrecta por error. ¿Qué ocurre?",
      en: "You accidentally send Bitcoin to the wrong address. What happens?"
    },
    options: {
      es: [
        "El sistema lo detecta y revierte la transacción automáticamente",
        "Puedes recuperarlos contactando a los mineros que procesaron el bloque",
        "Los Bitcoin se pierden si nadie más controla esa dirección",
        "La transacción queda pendiente hasta que la dirección esté activa"
      ],
      en: [
        "The system detects it and automatically reverses the transaction",
        "You can recover them by contacting the miners who processed the block",
        "The Bitcoin are lost if no one else controls that address",
        "The transaction stays pending until the address becomes active"
      ]
    },
    correct: 2,
    explanation: {
      es: "Bitcoin no tiene soporte técnico ni reversiones automáticas. Si la dirección no existe o nadie tiene su clave privada, los fondos son irrecuperables. Esto refuerza por qué hay que verificar siempre la dirección destino.",
      en: "Bitcoin has no technical support or automatic reversals. If the address doesn't exist or no one has its private key, the funds are unrecoverable. This is why you should always verify the destination address."
    }
  },
  {
    text: {
      es: "Pierdes tu dispositivo y no guardaste tu frase semilla. ¿Qué pasa con tus Bitcoin?",
      en: "You lose your device and never saved your seed phrase. What happens to your Bitcoin?"
    },
    options: {
      es: [
        "Puedes recuperarlos con el correo electrónico de tu cuenta de exchange",
        "El soporte técnico del fabricante de tu billetera puede ayudarte",
        "Se pierden permanentemente, pues nadie más puede acceder a ellos",
        "Vuelven automáticamente a la dirección del emisor o del exchange"
      ],
      en: [
        "You can recover them with your exchange account email",
        "Your wallet manufacturer's technical support can help you",
        "They are permanently lost, since no one else can access them",
        "They automatically return to the sender's address or exchange"
      ]
    },
    correct: 2,
    explanation: {
      es: "Sin la frase semilla no hay forma de recuperar una billetera de autocustodia. Ningún fabricante, ningún soporte técnico ni ningún gobierno puede ayudarte. Por eso es crucial guardar la frase semilla en papel, en un lugar seguro y offline.",
      en: "Without the seed phrase there is no way to recover a self-custody wallet. No manufacturer, no technical support, and no government can help you. That is why it is crucial to write your seed phrase on paper and keep it somewhere safe and offline."
    }
  },
  {
    text: {
      es: "Cuando ya no queden Bitcoin por minar (~2140), ¿de qué vivirán los mineros?",
      en: "When there are no more Bitcoin left to mine (~2140), how will miners earn income?"
    },
    options: {
      es: [
        "Las transacciones se volverán gratuitas al no haber más recompensas",
        "Los gobiernos deberán subsidiarlos para mantener la red funcionando",
        "Seguirán ganando dinero cobrando las comisiones de cada transacción",
        "La red Bitcoin dejará de funcionar por falta de incentivos económicos"
      ],
      en: [
        "Transactions will become free since there are no more block rewards",
        "Governments will need to subsidize them to keep the network running",
        "They will keep earning money by collecting transaction fees",
        "The Bitcoin network will stop working due to lack of economic incentives"
      ]
    },
    correct: 2,
    explanation: {
      es: "Cuando se agoten los 21 millones, el subsidio de bloque desaparecerá pero los mineros seguirán ganando las comisiones que los usuarios pagan por incluir sus transacciones. El protocolo está diseñado para que este incentivo sostenga la red a largo plazo.",
      en: "When all 21 million are mined, the block subsidy will disappear but miners will continue earning the fees users pay to have their transactions included. The protocol is designed so this incentive sustains the network in the long run."
    }
  }
];

module.exports = questions;
