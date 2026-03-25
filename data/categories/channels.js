// Categoría: Canales Lightning — apertura, cierre y gestión de liquidez

const questions = [
  {
    text: "¿Qué se necesita para abrir un canal Lightning?",
    options: [
      "Únicamente la dirección IP del nodo con quien deseas conectarte",
      "Una transacción on-chain que bloquea Bitcoin en un contrato multisig",
      "El permiso del LSP más cercano en la red Lightning global",
      "Tener al menos 10 canales existentes en tu nodo Lightning"
    ],
    correct: 1,
    explanation:
      "Abrir un canal requiere publicar una transacción en la blockchain que bloquea fondos en un contrato 2-de-2 multisig. Una vez confirmada, los pagos Lightning fluyen off-chain hasta que el canal se cierre con otra transacción on-chain."
  },
  {
    text: "¿Qué representa el saldo local en un canal Lightning?",
    options: [
      "La cantidad de Bitcoin que el canal puede recibir en pagos entrantes",
      "La cantidad de Bitcoin que puedes enviar desde tu lado del canal",
      "El total de fondos bloqueados por ambas partes en el canal",
      "El monto máximo que puede enrutar el canal en una sola transacción"
    ],
    correct: 1,
    explanation:
      "El saldo local es lo que puedes enviar: los fondos de tu lado del canal. El saldo remoto es lo que puedes recibir: los fondos del otro lado. Juntos suman la capacidad total del canal. Cada pago desplaza el balance de un lado al otro."
  },
  {
    text: "¿Qué representa el saldo remoto en un canal Lightning?",
    options: [
      "Los fondos que el nodo remoto puede enviarte a través del canal",
      "El total de liquidez disponible para terceros que enrutan por el canal",
      "La cantidad máxima que tu nodo puede enrutar en un solo salto",
      "Los Bitcoin que el canal ha procesado desde su apertura inicial"
    ],
    correct: 0,
    explanation:
      "El saldo remoto es el Bitcoin que está del lado de tu contraparte. Desde tu perspectiva, representa tu capacidad de recibir pagos: para que alguien te pague, ese saldo tiene que poder cruzar al tu lado."
  },
  {
    text: "¿Qué ocurre en un cierre forzado de canal Lightning?",
    options: [
      "Los fondos de ambas partes se pierden automáticamente si no hay acuerdo",
      "Ambas partes deben esperar un período de disputa para recuperar sus fondos",
      "Solo el nodo que inicia el cierre asume el costo de la comisión",
      "El canal se cierra sin registrar transacción on-chain para ahorrar comisiones"
    ],
    correct: 1,
    explanation:
      "En un cierre forzado, un nodo publica unilateralmente la última transacción de compromiso. Para proteger contra fraude, los fondos del nodo que cierra quedan bloqueados por un período de tiempo (to_self_delay), mientras el contraparte puede gastar los suyos de inmediato."
  },
  {
    text: "¿Qué es la reserva de canal (channel reserve)?",
    options: [
      "El mínimo que cada parte debe conservar sin gastar dentro del canal",
      "El fondo colectivo de liquidez compartida entre todos los canales del nodo",
      "La comisión de apertura que cobra el nodo remoto al crear el canal",
      "El límite máximo de pagos que puede enrutar el canal por hora"
    ],
    correct: 0,
    explanation:
      "La reserva de canal obliga a cada parte a mantener un mínimo de fondos (generalmente el 1% de la capacidad) sin poder gastar. Esto garantiza que siempre haya algo que perder ante un intento de fraude, desincentivando publicar estados antiguos."
  },
  {
    text: "¿Qué es el splicing de canales?",
    options: [
      "La división de un canal en dos canales más pequeños e independientes",
      "Agregar o retirar fondos de un canal sin cerrarlo ni interrumpirlo",
      "La fusión de dos canales existentes en uno solo de mayor capacidad",
      "El proceso de actualizar la versión del software del nodo Lightning"
    ],
    correct: 1,
    explanation:
      "El splicing permite modificar la capacidad de un canal —añadiendo o retirando fondos— mediante una nueva transacción on-chain, sin cerrar el canal ni interrumpir los pagos Lightning. El canal sigue operativo durante la confirmación del splice."
  },
  {
    text: "¿Qué caracteriza a un canal no anunciado (private channel) en Lightning?",
    options: [
      "Solo permite recibir pagos propios, sin poder enviar ni enrutar",
      "Sus datos no se publican en el grafo de la red Lightning",
      "Tiene un límite de capacidad menor que los canales anunciados",
      "Requiere autenticación adicional para cada pago que enruta"
    ],
    correct: 1,
    explanation:
      "Un canal privado no se anuncia mediante el protocolo gossip de Lightning. Solo sus dos participantes lo conocen. Esto mejora la privacidad del usuario: los demás nodos no saben que tienes ese canal ni con quién."
  },
  {
    text: "¿Qué es una anchor output en un canal Lightning?",
    options: [
      "Una salida extra en la transacción de compromiso para ajustar comisiones",
      "Un mecanismo que vincula el canal a un nodo de respaldo específico",
      "Una reserva adicional de Bitcoin bloqueada para cubrir futuros conflictos",
      "Un UTXO especial que permite a los watchtowers actuar en caso de fraude"
    ],
    correct: 0,
    explanation:
      "Las anchor outputs son salidas pequeñas (330 sats) añadidas a las transacciones de compromiso que permiten al nodo añadir comisiones vía CPFP en el momento del cierre, aunque las tasas de red hayan subido desde la última actualización del canal."
  },
  {
    text: "¿Qué pasa con los HTLCs pendientes en un cierre forzado de canal?",
    options: [
      "Se cancelan y los fondos regresan al emisor de cada HTLC inmediatamente",
      "Se resuelven on-chain usando sus timelocks y preimages correspondientes",
      "Se transfieren al watchtower activo más cercano para su custodia temporal",
      "Se fusionan en un único UTXO compartido hasta su resolución definitiva"
    ],
    correct: 1,
    explanation:
      "Cada HTLC pendiente se convierte en una salida on-chain separada. Si el receptor conoce el preimage, puede cobrar. Si no, expira el timelock y el emisor puede recuperar los fondos. Este proceso garantiza que los HTLCs se resuelvan correctamente incluso on-chain."
  },
  {
    text: "¿Qué es el balance de liquidez en un nodo Lightning?",
    options: [
      "El ratio entre los fondos en Lightning y los Bitcoin on-chain del nodo",
      "La proporción de saldo local vs remoto a través de todos sus canales",
      "El historial de pagos completados con éxito en los últimos 30 días",
      "El monto total de comisiones ganadas por enrutar pagos de terceros"
    ],
    correct: 1,
    explanation:
      "Un nodo bien balanceado tiene saldo tanto en el lado local como remoto de sus canales: puede enviar Y recibir. Si todo el saldo está en un lado, el canal está 'agotado' en esa dirección. El rebalanceo (via pagos circulares o swaps) redistribuye la liquidez."
  }
];

module.exports = questions;
