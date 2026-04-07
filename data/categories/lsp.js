// Categoría: LSP (Lightning Service Providers) — liquidez y servicios Lightning

const questions = [
  {
    text: {
      es: "¿Qué es un LSP (Lightning Service Provider)?",
      en: "What is an LSP (Lightning Service Provider)?"
    },
    options: {
      es: [
        "Un proveedor que ofrece servicios de infraestructura y liquidez en Lightning",
        "Un exchange especializado en el intercambio de Bitcoin por Lightning",
        "Un tipo de nodo que valida transacciones en la blockchain principal",
        "Un protocolo estándar para conectar billeteras con nodos remotos"
      ],
      en: [
        "A provider offering infrastructure and liquidity services on Lightning",
        "An exchange specialized in swapping Bitcoin for Lightning",
        "A type of node that validates transactions on the main blockchain",
        "A standard protocol for connecting wallets to remote nodes"
      ]
    },
    correct: 0,
    explanation: {
      es: "Un LSP es un proveedor de servicios que ayuda a los usuarios a incorporarse a Lightning, ofreciendo apertura de canales, liquidez entrante y en algunos casos canales Just-In-Time. Cumplen un rol similar al de un ISP pero para la red Lightning.",
      en: "An LSP is a service provider that helps users onboard to Lightning by offering channel opening, inbound liquidity, and in some cases Just-In-Time channels. They play a role similar to an ISP but for the Lightning network."
    }
  },
  {
    text: {
      es: "¿Qué es la liquidez entrante (inbound liquidity)?",
      en: "What is inbound liquidity?"
    },
    options: {
      es: [
        "La cantidad de Bitcoin que puedes enviar desde tus canales activos",
        "La capacidad de tus canales para recibir pagos de otros nodos",
        "El total de fondos bloqueados en tus transacciones on-chain pendientes",
        "El monto de comisiones que cobras por enrutar pagos en tu nodo"
      ],
      en: [
        "The amount of Bitcoin you can send from your active channels",
        "The capacity of your channels to receive payments from other nodes",
        "The total funds locked in your pending on-chain transactions",
        "The fees you earn for routing payments on your node"
      ]
    },
    correct: 1,
    explanation: {
      es: "La liquidez entrante es el saldo del lado remoto de tus canales: lo que te pueden enviar. Un nuevo usuario que abre un canal hacia afuera tiene todo el saldo de su lado y cero liquidez entrante, por lo que no puede recibir pagos hasta que alguien abra un canal hacia él o pague primero.",
      en: "Inbound liquidity is the balance on the remote side of your channels: what others can send you. A new user who opens a channel outward has all the balance on their side and zero inbound liquidity, so they cannot receive payments until someone opens a channel toward them or they spend first."
    }
  },
  {
    text: {
      es: "¿Por qué un usuario nuevo en Lightning necesita liquidez entrante?",
      en: "Why does a new Lightning user need inbound liquidity?"
    },
    options: {
      es: [
        "Porque los canales nuevos no enrutan pagos hasta las primeras 6 confirmaciones",
        "Porque sin saldo del lado remoto en sus canales no puede recibir pagos",
        "Porque los nodos nuevos quedan bloqueados durante las primeras 24 horas",
        "Porque el protocolo exige liquidez entrante para abrir el primer canal"
      ],
      en: [
        "Because new channels cannot route payments until 6 confirmations",
        "Because without remote-side balance in their channels they cannot receive",
        "Because new nodes are blocked during the first 24 hours",
        "Because the protocol requires inbound liquidity to open the first channel"
      ]
    },
    correct: 1,
    explanation: {
      es: "Cuando abres tu primer canal, todos los fondos quedan de tu lado. Para recibir pagos necesitas que haya saldo del lado de tu contraparte (liquidez entrante). Los LSPs resuelven esto abriendo canales hacia el usuario o usando canales JIT.",
      en: "When you open your first channel, all funds are on your side. To receive payments you need balance on your counterparty's side (inbound liquidity). LSPs solve this by opening channels toward the user or using JIT channels."
    }
  },
  {
    text: {
      es: "¿Qué es un canal JIT (Just-In-Time) en el contexto de un LSP?",
      en: "What is a JIT (Just-In-Time) channel in the context of an LSP?"
    },
    options: {
      es: [
        "Un canal que se abre automáticamente al recibir el primer pago entrante",
        "Un canal de alta velocidad con confirmaciones en menos de un segundo",
        "Un canal de emergencia que se activa solo cuando falla el principal",
        "Un canal temporal que se cierra automáticamente después de 24 horas"
      ],
      en: [
        "A channel opened automatically when the first incoming payment arrives",
        "A high-speed channel with confirmations in under one second",
        "An emergency channel that activates only when the main one fails",
        "A temporary channel that closes automatically after 24 hours"
      ]
    },
    correct: 0,
    explanation: {
      es: "Con un canal JIT, el LSP espera a que llegue un pago real al usuario antes de abrir el canal. El LSP intercepta el pago, abre el canal en ese momento, y lo entrega al usuario en la misma operación. El usuario recibe liquidez entrante exactamente cuando la necesita.",
      en: "With a JIT channel, the LSP waits for a real payment to arrive before opening the channel. The LSP intercepts the payment, opens the channel at that moment, and delivers it to the user in the same operation. The user gets inbound liquidity exactly when they need it."
    }
  },
  {
    text: {
      es: "¿Qué es un wrapped invoice en el contexto de los LSPs?",
      en: "What is a wrapped invoice in the context of LSPs?"
    },
    options: {
      es: [
        "Una factura enviada en formato cifrado para mayor privacidad del receptor",
        "Una factura re-empaquetada por el LSP para habilitar canales JIT",
        "Una factura con múltiples rutas de pago alternativas incluidas",
        "Una factura con monto flexible que el emisor puede ajustar al pagar"
      ],
      en: [
        "An invoice sent in encrypted format for greater recipient privacy",
        "An invoice re-wrapped by the LSP to enable JIT channels",
        "An invoice with multiple alternative payment routes included",
        "An invoice with a flexible amount the sender can adjust when paying"
      ]
    },
    correct: 1,
    explanation: {
      es: "Cuando un usuario sin liquidez entrante quiere recibir, el LSP genera un wrapped invoice: la factura original del usuario se re-empaqueta para que el pago llegue primero al LSP. El LSP entonces abre el canal JIT y reenvía el pago al usuario.",
      en: "When a user without inbound liquidity wants to receive, the LSP generates a wrapped invoice: the user's original invoice is re-wrapped so the payment arrives at the LSP first. The LSP then opens the JIT channel and forwards the payment to the user."
    }
  },
  {
    text: {
      es: "¿Qué diferencia principal hay entre un LSP y un exchange?",
      en: "What is the main difference between an LSP and an exchange?"
    },
    options: {
      es: [
        "Los exchanges ofrecen tasas más bajas de comisión por transacción",
        "Un LSP provee liquidez y canales; un exchange convierte entre monedas",
        "Los LSPs requieren verificación de identidad y los exchanges no",
        "Un LSP solo trabaja con Bitcoin y un exchange con cualquier moneda"
      ],
      en: [
        "Exchanges offer lower fee rates per transaction",
        "An LSP provides liquidity and channels; an exchange converts currencies",
        "LSPs require identity verification while exchanges do not",
        "An LSP only works with Bitcoin while an exchange handles any currency"
      ]
    },
    correct: 1,
    explanation: {
      es: "Un exchange te permite comprar/vender Bitcoin o convertirlo a otras monedas. Un LSP, en cambio, te da infraestructura Lightning: canales, liquidez, conectividad y a veces enrutamiento. Algunos LSPs custodian fondos; otros son completamente no custodiales.",
      en: "An exchange lets you buy/sell Bitcoin or convert it to other currencies. An LSP, by contrast, gives you Lightning infrastructure: channels, liquidity, connectivity, and sometimes routing. Some LSPs are custodial; others are fully non-custodial."
    }
  },
  {
    text: {
      es: "¿Qué es un canal 0-conf (zero confirmation) en el contexto de los LSPs?",
      en: "What is a 0-conf (zero confirmation) channel in the context of LSPs?"
    },
    options: {
      es: [
        "Un canal usable de inmediato sin confirmaciones on-chain previas",
        "Un canal que opera sin cobrar comisiones de enrutamiento a sus usuarios",
        "Un canal de prueba sin fondos reales en una red de testnet de Lightning",
        "Un canal que acepta pagos de cero satoshis como señal de disponibilidad"
      ],
      en: [
        "A channel usable immediately without prior on-chain confirmations",
        "A channel that charges no routing fees to its users",
        "A test channel with no real funds on a Lightning testnet",
        "A channel that accepts zero-satoshi payments as an availability signal"
      ]
    },
    correct: 0,
    explanation: {
      es: "Un canal 0-conf se puede usar para enviar y recibir pagos Lightning antes de que la transacción de apertura on-chain haya recibido confirmaciones. El usuario asume cierto riesgo (el LSP podría hacer double-spend), pero la experiencia es instantánea. Los LSPs de confianza lo ofrecen.",
      en: "A 0-conf channel can be used to send and receive Lightning payments before the opening on-chain transaction has received any confirmations. The user takes on some risk (the LSP could double-spend), but the experience is instant. Trusted LSPs offer this."
    }
  },
  {
    text: {
      es: "¿Qué establece el LSPS (LSP Specification)?",
      en: "What does the LSPS (LSP Specification) establish?"
    },
    options: {
      es: [
        "El algoritmo de consenso alternativo propuesto para reemplazar Lightning",
        "Un conjunto de protocolos estandarizados para la interoperabilidad entre LSPs",
        "El formato oficial de los estados de canal en la red Lightning global",
        "Las reglas de gobernanza y votación entre nodos de la red Lightning"
      ],
      en: [
        "An alternative consensus algorithm proposed to replace Lightning",
        "A set of standardized protocols for interoperability between LSPs",
        "The official format of channel states on the global Lightning network",
        "The governance and voting rules among Lightning network nodes"
      ]
    },
    correct: 1,
    explanation: {
      es: "El LSPS es un conjunto de especificaciones abiertas (LSPS0, LSPS1, LSPS2…) que define cómo los clientes se comunican con los LSPs para solicitar canales, liquidez y otros servicios de forma estandarizada, sin depender de una implementación propietaria.",
      en: "The LSPS is a set of open specifications (LSPS0, LSPS1, LSPS2…) defining how clients communicate with LSPs to request channels, liquidity, and other services in a standardized way, without depending on a proprietary implementation."
    }
  }
];

module.exports = questions;
