// Categoría: Lightning Network — pagos, nodos y protocolo

const questions = [
  {
    text: "¿Qué es una factura (invoice) de Lightning?",
    options: [
      "Un contrato legal entre dos partes que usan canales de pago",
      "Un comprobante de pago emitido y registrado en la blockchain",
      "Una solicitud de pago con importe, destino y tiempo de expiración",
      "Un registro permanente de todos los pagos de un nodo Lightning"
    ],
    correct: 2,
    explanation:
      "Una invoice Lightning (formato BOLT 11) codifica el importe, el nodo destino, un hash de pago secreto y un tiempo de expiración. El pagador usa estos datos para encontrar una ruta y enviar el pago de forma atómica."
  },
  {
    text: "¿Qué permite hacer el enrutamiento de pagos en Lightning?",
    options: [
      "Abrir canales con cualquier nodo sin necesidad de depósito previo",
      "Pagar a un nodo con el que no tienes un canal directo",
      "Confirmar transacciones en la blockchain en menos de un segundo",
      "Recuperar fondos de un canal cerrado de forma forzada"
    ],
    correct: 1,
    explanation:
      "No necesitas un canal directo con el destinatario. El pago viaja por una ruta de nodos intermedios, cada uno con canales hacia el siguiente. Gracias a los HTLCs, el proceso es atómico: o el pago llega completo o no sale nada."
  },
  {
    text: "¿Qué es un HTLC (Hash Time-Locked Contract)?",
    options: [
      "Un tipo de billetera multifirma para fondos bloqueados en Lightning",
      "Un contrato inteligente que garantiza pagos atómicos entre nodos",
      "Un protocolo para cerrar canales de forma cooperativa y segura",
      "Un acuerdo entre LSPs para compartir liquidez en la red"
    ],
    correct: 1,
    explanation:
      "Un HTLC garantiza que el pago se entregue de forma atómica: el receptor revela un secreto (preimage) para cobrar, y ese secreto se propaga hacia atrás por toda la ruta, desbloqueando cada salto. Si algo falla, los fondos regresan al emisor."
  },
  {
    text: "¿Qué determina la capacidad máxima de envío en un canal Lightning?",
    options: [
      "La velocidad de conexión a internet del nodo emisor",
      "El número de nodos conectados a la red Lightning global",
      "La cantidad de Bitcoin bloqueados al abrir el canal",
      "El número de transacciones procesadas anteriormente por el canal"
    ],
    correct: 2,
    explanation:
      "La capacidad total del canal es fija desde su apertura: es el Bitcoin bloqueado en la transacción on-chain. Dentro de ese total, el saldo se redistribuye entre local y remoto con cada pago, pero nunca puede superarse el total."
  },
  {
    text: "¿Qué es un watchtower en Lightning Network?",
    options: [
      "Un nodo que vigila canales y actúa si detecta una transacción de fraude",
      "Un servicio de análisis que mide la actividad global de la red Lightning",
      "Un tipo de canal con mayor capacidad y menor tarifa de enrutamiento",
      "Un protocolo que garantiza la apertura automática de canales nuevos"
    ],
    correct: 0,
    explanation:
      "Si tu nodo está offline, un contraparte deshonesta podría publicar un estado antiguo del canal para robar fondos. Un watchtower monitorea la blockchain en tu nombre y publica automáticamente la transacción de penalización si detecta fraude."
  },
  {
    text: "¿Qué ocurre en un cierre cooperativo de canal Lightning?",
    options: [
      "Los fondos quedan bloqueados durante un período de resolución de disputas",
      "Ambas partes acuerdan y los fondos regresan a la blockchain sin demoras",
      "Solo el nodo que cierra primero recupera sus fondos de inmediato",
      "La transacción de cierre requiere aprobación de mineros especializados"
    ],
    correct: 1,
    explanation:
      "En un cierre cooperativo, ambos nodos firman juntos la transacción de cierre final con los saldos actualizados. Los fondos llegan a la blockchain sin períodos de espera adicionales. Es la forma preferida de cerrar un canal."
  },
  {
    text: "¿Qué es un swap submarino (submarine swap)?",
    options: [
      "Un intercambio entre Bitcoin on-chain y Bitcoin en Lightning",
      "Una transferencia de fondos entre dos blockchains completamente distintas",
      "Una forma de minar Bitcoin usando nodos Lightning como validadores",
      "Un tipo de canal privado sin ningún anuncio público en la red"
    ],
    correct: 0,
    explanation:
      "Un swap submarino usa HTLCs para intercambiar Bitcoin on-chain por Bitcoin en Lightning (o viceversa) sin necesidad de confiar en un tercero. Son útiles para rebalancear canales o mover fondos entre la capa base y Lightning."
  },
  {
    text: "¿Qué son las tarifas de enrutamiento en Lightning?",
    options: [
      "Los costos que cobran los mineros por confirmar transacciones de Lightning",
      "Las comisiones que cobra un nodo intermediario por reenviar pagos",
      "Los impuestos gubernamentales aplicados a los pagos en Lightning",
      "Los cargos del exchange al convertir sats de Lightning a Bitcoin on-chain"
    ],
    correct: 1,
    explanation:
      "Cada nodo que enruta un pago puede cobrar una pequeña tarifa: generalmente una base fija más un porcentaje del monto (ppm, partes por millón). Las tarifas suelen ser fracciones de satoshi, haciendo los micropagos viables."
  },
  {
    text: "¿Qué significa que un canal Lightning sea privado (no anunciado)?",
    options: [
      "Solo permite recibir pagos propios, sin poder enviar ni enrutar",
      "Sus datos no se publican en el grafo de la red Lightning",
      "Tiene un límite de capacidad menor que los canales anunciados",
      "Requiere autenticación adicional para cada pago que enruta"
    ],
    correct: 1,
    explanation:
      "Un canal privado no se anuncia al resto de la red, por lo que no aparece en el grafo de canales que usan otros nodos para encontrar rutas. Solo los dos nodos del canal lo conocen. Es útil para usuarios finales que solo quieren enviar/recibir."
  },
  {
    text: "¿Cuántos participantes conecta directamente un canal Lightning básico?",
    options: [
      "Uno solo, para pagos circulares dentro del mismo nodo",
      "Exactamente dos nodos, uno en cada extremo del canal",
      "Tres o más, según el tipo de canal y la implementación del nodo",
      "Ilimitados, dependiendo de la versión del protocolo Lightning"
    ],
    correct: 1,
    explanation:
      "Un canal Lightning básico es siempre entre exactamente dos nodos. Para pagar a nodos sin canal directo se usa enrutamiento a través de nodos intermedios. Los canales multiparte (como en fábricas de canales) son investigación aún experimental."
  },
  {
    text: "¿Qué es el grafo de canales en Lightning Network?",
    options: [
      "Un mapa visual de las transacciones confirmadas en la blockchain",
      "La estructura de datos que describe todos los canales públicos de la red",
      "El registro histórico de todos los pagos que pasaron por un nodo",
      "El conjunto de nodos que un LSP mantiene como respaldo de liquidez"
    ],
    correct: 1,
    explanation:
      "El grafo de canales es la 'hoja de ruta' de Lightning: cada nodo anuncia sus canales públicos al resto de la red usando el protocolo gossip. Con este mapa, los nodos calculan rutas de pago usando algoritmos como Dijkstra o pathfinding personalizado."
  }
];

module.exports = questions;
