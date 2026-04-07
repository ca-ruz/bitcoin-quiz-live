// Categoría: Canales Lightning — apertura, cierre y gestión de liquidez

const questions = [
  {
    text: {
      es: "¿Qué se necesita para abrir un canal Lightning?",
      en: "What is needed to open a Lightning channel?"
    },
    options: {
      es: [
        "Únicamente la dirección IP del nodo con quien deseas conectarte",
        "Una transacción on-chain que bloquea Bitcoin en un contrato multisig",
        "El permiso del LSP más cercano en la red Lightning global",
        "Tener al menos 10 canales existentes en tu nodo Lightning"
      ],
      en: [
        "Only the IP address of the node you want to connect to",
        "An on-chain transaction locking Bitcoin in a multisig contract",
        "Permission from the nearest LSP on the global Lightning network",
        "Having at least 10 existing channels on your Lightning node"
      ]
    },
    correct: 1,
    explanation: {
      es: "Abrir un canal requiere publicar una transacción en la blockchain que bloquea fondos en un contrato 2-de-2 multisig. Una vez confirmada, los pagos Lightning fluyen off-chain hasta que el canal se cierre con otra transacción on-chain.",
      en: "Opening a channel requires publishing a transaction on the blockchain that locks funds in a 2-of-2 multisig contract. Once confirmed, Lightning payments flow off-chain until the channel is closed with another on-chain transaction."
    }
  },
  {
    text: {
      es: "¿Qué representa el saldo local en un canal Lightning?",
      en: "What does the local balance represent in a Lightning channel?"
    },
    options: {
      es: [
        "La cantidad de Bitcoin que el canal puede recibir en pagos entrantes",
        "La cantidad de Bitcoin que puedes enviar desde tu lado del canal",
        "El total de fondos bloqueados por ambas partes en el canal",
        "El monto máximo que puede enrutar el canal en una sola transacción"
      ],
      en: [
        "The amount of Bitcoin the channel can receive in incoming payments",
        "The amount of Bitcoin you can send from your side of the channel",
        "The total funds locked by both parties in the channel",
        "The maximum amount the channel can route in a single transaction"
      ]
    },
    correct: 1,
    explanation: {
      es: "El saldo local es lo que puedes enviar: los fondos de tu lado del canal. El saldo remoto es lo que puedes recibir: los fondos del otro lado. Juntos suman la capacidad total del canal. Cada pago desplaza el balance de un lado al otro.",
      en: "The local balance is what you can send: the funds on your side of the channel. The remote balance is what you can receive: the funds on the other side. Together they equal the total channel capacity. Each payment shifts the balance from one side to the other."
    }
  },
  {
    text: {
      es: "¿Qué representa el saldo remoto en un canal Lightning?",
      en: "What does the remote balance represent in a Lightning channel?"
    },
    options: {
      es: [
        "Los fondos que el nodo remoto puede enviarte a través del canal",
        "El total de liquidez disponible para terceros que enrutan por el canal",
        "La cantidad máxima que tu nodo puede enrutar en un solo salto",
        "Los Bitcoin que el canal ha procesado desde su apertura inicial"
      ],
      en: [
        "The funds the remote node can send you through the channel",
        "The total liquidity available to third parties routing through the channel",
        "The maximum your node can route in a single hop",
        "The Bitcoin the channel has processed since it was opened"
      ]
    },
    correct: 0,
    explanation: {
      es: "El saldo remoto es el Bitcoin que está del lado de tu contraparte. Desde tu perspectiva, representa tu capacidad de recibir pagos: para que alguien te pague, ese saldo tiene que poder cruzar al tu lado.",
      en: "The remote balance is the Bitcoin on your counterparty's side. From your perspective, it represents your capacity to receive payments: for someone to pay you, that balance must be able to shift to your side."
    }
  },
  {
    text: {
      es: "¿Qué ocurre en un cierre forzado de canal Lightning?",
      en: "What happens in a Lightning channel force-close?"
    },
    options: {
      es: [
        "Los fondos de ambas partes se pierden automáticamente si no hay acuerdo",
        "Ambas partes deben esperar un período de disputa para recuperar fondos",
        "Solo el nodo que inicia el cierre asume el costo de la comisión",
        "El canal se cierra sin registrar transacción on-chain para ahorrar comisiones"
      ],
      en: [
        "Both parties' funds are automatically lost if there is no agreement",
        "Both parties must wait through a dispute period to recover funds",
        "Only the node that initiates the close bears the fee cost",
        "The channel closes without an on-chain transaction to save fees"
      ]
    },
    correct: 1,
    explanation: {
      es: "En un cierre forzado, un nodo publica unilateralmente la última transacción de compromiso. Para proteger contra fraude, los fondos del nodo que cierra quedan bloqueados por un período de tiempo (to_self_delay), mientras el contraparte puede gastar los suyos de inmediato.",
      en: "In a force-close, one node unilaterally publishes the last commitment transaction. To protect against fraud, the closing node's funds are locked for a time period (to_self_delay), while the counterparty can spend their funds immediately."
    }
  },
  {
    text: {
      es: "¿Qué es la reserva de canal (channel reserve)?",
      en: "What is the channel reserve?"
    },
    options: {
      es: [
        "El mínimo que cada parte debe conservar sin gastar dentro del canal",
        "El fondo colectivo de liquidez compartida entre todos los canales del nodo",
        "La comisión de apertura que cobra el nodo remoto al crear el canal",
        "El límite máximo de pagos que puede enrutar el canal por hora"
      ],
      en: [
        "The minimum each party must keep unspent inside the channel",
        "The collective liquidity pool shared across all of a node's channels",
        "The opening fee charged by the remote node when creating the channel",
        "The maximum number of payments the channel can route per hour"
      ]
    },
    correct: 0,
    explanation: {
      es: "La reserva de canal obliga a cada parte a mantener un mínimo de fondos (generalmente el 1% de la capacidad) sin poder gastar. Esto garantiza que siempre haya algo que perder ante un intento de fraude, desincentivando publicar estados antiguos.",
      en: "The channel reserve requires each party to keep a minimum amount (typically 1% of capacity) that cannot be spent. This ensures there is always something to lose in a fraud attempt, discouraging the publication of old channel states."
    }
  },
  {
    text: {
      es: "¿Qué es el splicing de canales?",
      en: "What is channel splicing?"
    },
    options: {
      es: [
        "La división de un canal en dos canales más pequeños e independientes",
        "Agregar o retirar fondos de un canal sin cerrarlo ni interrumpirlo",
        "La fusión de dos canales existentes en uno de mayor capacidad",
        "El proceso de actualizar el software del nodo Lightning"
      ],
      en: [
        "Splitting a channel into two smaller independent channels",
        "Adding or removing funds from a channel without closing it",
        "Merging two existing channels into one with higher capacity",
        "The process of updating the Lightning node software"
      ]
    },
    correct: 1,
    explanation: {
      es: "El splicing permite modificar la capacidad de un canal —añadiendo o retirando fondos— mediante una nueva transacción on-chain, sin cerrar el canal ni interrumpir los pagos Lightning. El canal sigue operativo durante la confirmación del splice.",
      en: "Splicing lets you modify a channel's capacity — adding or removing funds — via a new on-chain transaction, without closing the channel or interrupting Lightning payments. The channel stays operational during splice confirmation."
    }
  },
  {
    text: {
      es: "¿Qué caracteriza a un canal no anunciado (private channel) en Lightning?",
      en: "What characterizes a private (unannounced) channel in Lightning?"
    },
    options: {
      es: [
        "Solo permite recibir pagos propios, sin poder enviar ni enrutar",
        "Sus datos no se publican en el grafo de la red Lightning",
        "Tiene un límite de capacidad menor que los canales anunciados",
        "Requiere autenticación adicional para cada pago que enruta"
      ],
      en: [
        "It only allows receiving your own payments, not sending or routing",
        "Its data is not published in the Lightning network graph",
        "It has a lower capacity limit than announced channels",
        "It requires additional authentication for each payment it routes"
      ]
    },
    correct: 1,
    explanation: {
      es: "Un canal privado no se anuncia mediante el protocolo gossip de Lightning. Solo sus dos participantes lo conocen. Esto mejora la privacidad del usuario: los demás nodos no saben que tienes ese canal ni con quién.",
      en: "A private channel is not announced via the Lightning gossip protocol. Only its two participants know about it. This improves user privacy: other nodes do not know you have that channel or who it is with."
    }
  },
  {
    text: {
      es: "¿Qué es una anchor output en un canal Lightning?",
      en: "What is an anchor output in a Lightning channel?"
    },
    options: {
      es: [
        "Una salida extra en la tx de compromiso para ajustar comisiones",
        "Un mecanismo que vincula el canal a un nodo de respaldo específico",
        "Una reserva adicional de Bitcoin para cubrir futuros conflictos",
        "Un UTXO especial que permite a los watchtowers actuar ante fraude"
      ],
      en: [
        "An extra output in the commitment tx to adjust fees via CPFP",
        "A mechanism tying the channel to a specific backup node",
        "An extra Bitcoin reserve to cover future disputes",
        "A special UTXO that allows watchtowers to act on fraud"
      ]
    },
    correct: 0,
    explanation: {
      es: "Las anchor outputs son salidas pequeñas (330 sats) añadidas a las transacciones de compromiso que permiten al nodo añadir comisiones vía CPFP en el momento del cierre, aunque las tasas de red hayan subido desde la última actualización del canal.",
      en: "Anchor outputs are small outputs (330 sats) added to commitment transactions that allow a node to add fees via CPFP at close time, even if network fee rates have risen since the channel's last update."
    }
  },
  {
    text: {
      es: "¿Qué pasa con los HTLCs pendientes en un cierre forzado de canal?",
      en: "What happens to pending HTLCs in a Lightning channel force-close?"
    },
    options: {
      es: [
        "Se cancelan y los fondos regresan al emisor de cada HTLC de inmediato",
        "Se resuelven on-chain usando sus timelocks y preimages correspondientes",
        "Se transfieren al watchtower más cercano para custodia temporal",
        "Se fusionan en un único UTXO compartido hasta su resolución definitiva"
      ],
      en: [
        "They are cancelled and funds return to each HTLC sender immediately",
        "They are resolved on-chain using their timelocks and preimages",
        "They are transferred to the nearest watchtower for temporary custody",
        "They are merged into a single shared UTXO until final resolution"
      ]
    },
    correct: 1,
    explanation: {
      es: "Cada HTLC pendiente se convierte en una salida on-chain separada. Si el receptor conoce el preimage, puede cobrar. Si no, expira el timelock y el emisor puede recuperar los fondos. Este proceso garantiza que los HTLCs se resuelvan correctamente incluso on-chain.",
      en: "Each pending HTLC becomes a separate on-chain output. If the recipient knows the preimage, they can claim it. If not, the timelock expires and the sender can recover the funds. This ensures HTLCs resolve correctly even on-chain."
    }
  },
  {
    text: {
      es: "¿Qué es el balance de liquidez en un nodo Lightning?",
      en: "What is the liquidity balance of a Lightning node?"
    },
    options: {
      es: [
        "El ratio entre los fondos en Lightning y los Bitcoin on-chain del nodo",
        "La proporción de saldo local vs remoto a través de todos sus canales",
        "El historial de pagos completados con éxito en los últimos 30 días",
        "El monto total de comisiones ganadas por enrutar pagos de terceros"
      ],
      en: [
        "The ratio between Lightning funds and on-chain Bitcoin on the node",
        "The proportion of local vs remote balance across all its channels",
        "The history of successfully completed payments in the last 30 days",
        "The total fees earned by routing third-party payments"
      ]
    },
    correct: 1,
    explanation: {
      es: "Un nodo bien balanceado tiene saldo tanto en el lado local como remoto de sus canales: puede enviar Y recibir. Si todo el saldo está en un lado, el canal está 'agotado' en esa dirección. El rebalanceo (via pagos circulares o swaps) redistribuye la liquidez.",
      en: "A well-balanced node has funds on both the local and remote sides of its channels: it can send AND receive. If all balance is on one side, the channel is 'depleted' in that direction. Rebalancing (via circular payments or swaps) redistributes liquidity."
    }
  }
];

module.exports = questions;
