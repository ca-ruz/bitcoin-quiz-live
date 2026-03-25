// Categoría: Blockchain — estructura, bloques y consenso

const questions = [
  {
    text: "¿Qué es el hash de un bloque de Bitcoin?",
    options: [
      "La firma digital del minero que procesó ese bloque",
      "Un identificador único del bloque generado por su contenido",
      "El número exacto de transacciones incluidas en el bloque",
      "La fecha y hora exacta en que el bloque fue minado"
    ],
    correct: 1,
    explanation:
      "Cada bloque tiene un hash único calculado a partir de todos sus datos. Si cualquier dato cambia, el hash cambia completamente, lo que garantiza la integridad del bloque."
  },
  {
    text: "¿Qué vincula cada bloque con el anterior en la blockchain?",
    options: [
      "El nombre del minero que encontró y publicó el bloque",
      "Una firma digital emitida por un servidor central",
      "El hash del bloque anterior incluido en su cabecera",
      "La fecha y hora exacta de creación del bloque"
    ],
    correct: 2,
    explanation:
      "Cada bloque incluye el hash del bloque anterior en su cabecera. Esto crea una cadena criptográfica: si modificas un bloque, su hash cambia y rompe el enlace con todos los bloques siguientes."
  },
  {
    text: "¿Qué es el Árbol de Merkle en un bloque de Bitcoin?",
    options: [
      "Una lista cronológica de todos los nodos conectados a la red",
      "Una estructura que condensa todas las transacciones en un solo hash",
      "El árbol de decisiones que usan los mineros al seleccionar transacciones",
      "Un registro histórico comprimido de todos los bloques anteriores"
    ],
    correct: 1,
    explanation:
      "El Árbol de Merkle combina los hashes de todas las transacciones del bloque en un único hash raíz (Merkle root). Permite verificar eficientemente si una transacción está en un bloque sin descargarlo completo."
  },
  {
    text: "¿Qué es un UTXO (Unspent Transaction Output)?",
    options: [
      "Un bloque especial que agrupa y cierra un ciclo de transacciones",
      "Una recompensa pendiente de recibir por los mineros de la red",
      "Una salida no gastada que actúa como entrada en futuras transacciones",
      "Un error de validación detectado y rechazado por los nodos"
    ],
    correct: 2,
    explanation:
      "Bitcoin no tiene 'saldos' como un banco. En cambio, rastrea UTXOs: salidas de transacciones anteriores aún no gastadas. Cuando envías Bitcoin, consumes UTXOs como entradas y creas nuevos como salidas."
  },
  {
    text: "¿Qué es un soft fork en Bitcoin?",
    options: [
      "Un cambio de reglas compatible con versiones anteriores del protocolo",
      "Una actualización que divide la blockchain en dos cadenas permanentes",
      "Un error de software que provoca una bifurcación temporal de la red",
      "Un acuerdo entre mineros para cambiar el algoritmo de minería"
    ],
    correct: 0,
    explanation:
      "Un soft fork endurece las reglas del protocolo de forma que los nodos antiguos aún aceptan los nuevos bloques como válidos. SegWit y Taproot se implementaron como soft forks en Bitcoin."
  },
  {
    text: "¿Qué es un hard fork en Bitcoin?",
    options: [
      "Una simple actualización de software sin cambios en las reglas",
      "Un cambio incompatible de reglas que puede generar una nueva cadena",
      "Una mejora en la velocidad de validación de los nodos completos",
      "Un acuerdo informal entre desarrolladores para corregir un error"
    ],
    correct: 1,
    explanation:
      "Un hard fork relaja o cambia las reglas de forma incompatible: los nodos que no actualizan rechazan los nuevos bloques. Si parte de la red no actualiza, pueden coexistir dos cadenas separadas (como ocurrió con Bitcoin Cash)."
  },
  {
    text: "¿Cada cuánto tiempo se mina un nuevo bloque de Bitcoin en promedio?",
    options: [
      "Cada 10 minutos",
      "Cada 1 hora",
      "Cada 2.5 minutos",
      "Cada 10 segundos"
    ],
    correct: 0,
    explanation:
      "El protocolo de Bitcoin apunta a un bloque cada 10 minutos. La dificultad de minería se ajusta automáticamente cada 2,016 bloques para mantener ese ritmo independientemente de cuántos mineros haya."
  },
  {
    text: "¿Cada cuántos bloques se ajusta la dificultad de minería en Bitcoin?",
    options: [
      "Cada 100 bloques (~1 día)",
      "Cada 2,016 bloques (~2 semanas)",
      "Cada 210,000 bloques (~4 años)",
      "Cada 1,000 bloques (~1 semana)"
    ],
    correct: 1,
    explanation:
      "Cada 2,016 bloques (~2 semanas), todos los nodos recalculan la dificultad comparando el tiempo real con el objetivo de 10 minutos por bloque. Si los bloques llegaron más rápido, la dificultad sube; si más lento, baja."
  },
  {
    text: "¿Qué es el mempool (memory pool)?",
    options: [
      "El espacio de almacenamiento que usa un nodo para guardar la blockchain",
      "La memoria RAM que utiliza el software de minería ASIC",
      "El área de espera donde viven las transacciones no confirmadas",
      "El conjunto de nodos que forman el núcleo de la red Bitcoin"
    ],
    correct: 2,
    explanation:
      "El mempool es la sala de espera de transacciones: cuando envías Bitcoin, tu transacción entra al mempool de los nodos hasta que un minero la incluye en un bloque. Con alta demanda, el mempool se llena y las comisiones suben."
  },
  {
    text: "¿Qué garantiza que la blockchain sea inmutable?",
    options: [
      "Una normativa internacional que prohíbe modificar los registros históricos",
      "El cifrado de los bloques con la clave privada del creador del protocolo",
      "El encadenamiento de hashes que invalida toda la cadena al alterar un bloque",
      "Las copias de seguridad automáticas en miles de servidores descentralizados"
    ],
    correct: 2,
    explanation:
      "Alterar un bloque cambia su hash, lo que rompe el enlace con el siguiente bloque, y así sucesivamente. Para reescribir la historia, un atacante necesitaría rehacer la Prueba de Trabajo de todos los bloques posteriores más rápido que el resto de la red."
  },
  {
    text: "¿Qué contiene la cabecera (header) de un bloque de Bitcoin?",
    options: [
      "El hash del bloque anterior, la raíz de Merkle y el nonce",
      "Los nombres de todos los mineros que participaron en el bloque",
      "Las claves privadas de las transacciones incluidas en el bloque",
      "El saldo actualizado de cada dirección afectada por el bloque"
    ],
    correct: 0,
    explanation:
      "La cabecera del bloque contiene: el hash del bloque anterior, la raíz de Merkle de las transacciones, el timestamp, la dificultad objetivo, y el nonce. Es sobre estos 80 bytes que los mineros calculan su hash repetidamente."
  }
];

module.exports = questions;
