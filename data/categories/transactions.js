// Categoría: Transacciones — estructura, comisiones y opcodes

const questions = [
  {
    text: "¿Qué son las entradas (inputs) de una transacción Bitcoin?",
    options: [
      "Los destinatarios que recibirán los Bitcoin enviados en la tx",
      "Las referencias a UTXOs previos no gastados que se van a consumir",
      "Los mineros que van a validar y procesar la transacción",
      "Las comisiones incluidas para incentivar la minería del bloque"
    ],
    correct: 1,
    explanation:
      "Las entradas de una transacción apuntan a UTXOs anteriores. Cada entrada incluye una referencia al UTXO (txid + índice) y una firma que demuestra el derecho a gastarlo. No se pueden gastar UTXOs parcialmente: se gastan completos y el cambio vuelve como nueva salida."
  },
  {
    text: "¿Cómo se calculan las comisiones de una transacción Bitcoin?",
    options: [
      "Como un porcentaje fijo y estándar del monto total que se envía",
      "En función del tamaño en bytes de la transacción, no del monto",
      "Como una tarifa plana estándar de exactamente 1 satoshi por operación",
      "En función del número total de destinatarios incluidos en la transacción"
    ],
    correct: 1,
    explanation:
      "Las comisiones son la diferencia entre el total de entradas y el total de salidas. Se expresan en sat/vByte (satoshis por byte virtual). Una transacción más compleja (más entradas/salidas) ocupa más espacio y por tanto paga más comisión."
  },
  {
    text: "¿Qué mejora introdujo SegWit (Segregated Witness) en Bitcoin?",
    options: [
      "Un nuevo algoritmo de hash más rápido para la Prueba de Trabajo",
      "La separación de los datos de firma del cuerpo de la transacción",
      "La posibilidad de crear transacciones privadas sin revelar el monto",
      "Un nuevo tipo de dirección completamente incompatible con versiones anteriores"
    ],
    correct: 1,
    explanation:
      "SegWit mueve las firmas (el 'testigo') fuera del cuerpo principal de la transacción. Esto resuelve la maleabilidad de transacciones (necesaria para Lightning), reduce el tamaño efectivo en bytes y permite más transacciones por bloque."
  },
  {
    text: "¿Qué es CPFP (Child Pays For Parent)?",
    options: [
      "Acelerar una transacción atascada creando una hija con mayor comisión",
      "Un protocolo en que los mineros heredan recompensas de bloques anteriores",
      "Una técnica para dividir transacciones grandes en varias más pequeñas",
      "Un sistema de compensación de comisiones entre nodos de canales Lightning"
    ],
    correct: 0,
    explanation:
      "Si una transacción está atascada en el mempool por comisión baja, puedes crear una nueva transacción que gaste uno de sus outputs y pague una comisión suficientemente alta. Los mineros incluirán ambas juntas para cobrar la comisión combinada."
  },
  {
    text: "¿Qué es RBF (Replace-By-Fee)?",
    options: [
      "Una técnica para reducir las comisiones en transacciones ya confirmadas",
      "Reemplazar una transacción pendiente por otra con mayor comisión",
      "El protocolo para reemplazar nodos inactivos dentro de la red Bitcoin",
      "El mecanismo con que los mineros sustituyen bloques huérfanos en la cadena"
    ],
    correct: 1,
    explanation:
      "Si marcas una transacción como RBF antes de enviarla, puedes reemplazarla antes de que sea confirmada pagando una comisión más alta. Es útil cuando el mempool se congestiona y necesitas que tu pago se confirme antes."
  },
  {
    text: "¿Qué es una transacción coinbase en Bitcoin?",
    options: [
      "La primera transacción de cada bloque que crea el Bitcoin nuevo",
      "Una operación enviada directamente desde la plataforma Coinbase al usuario",
      "Una transacción que combina múltiples UTXOs de una misma dirección",
      "Una transacción con tiempo de bloqueo asociado al próximo halving"
    ],
    correct: 0,
    explanation:
      "La transacción coinbase es la primera en cada bloque. No tiene entradas reales: crea Bitcoin nuevo (el subsidio de bloque) y lo suma a las comisiones de las demás transacciones del bloque. Solo el minero que encuentra el bloque puede crearla."
  },
  {
    text: "¿Qué mide el sat/vByte en el contexto de las transacciones Bitcoin?",
    options: [
      "El precio en satoshis por cada byte virtual de espacio en el bloque",
      "El número de satoshis bloqueados en cada UTXO de la transacción",
      "La velocidad en bytes por segundo con la que la tx se propaga por la red",
      "El tamaño máximo permitido en bytes para una transacción estándar"
    ],
    correct: 0,
    explanation:
      "sat/vByte (satoshis por byte virtual) es la tasa de comisión. Un 'byte virtual' o vByte tiene en cuenta el descuento de SegWit: los datos del testigo cuentan menos. Más congestionado el mempool → más sat/vByte necesitas para que tu tx sea incluida pronto."
  },
  {
    text: "¿Qué es el timelock CLTV (CheckLockTimeVerify) en Bitcoin?",
    options: [
      "Un sistema de verificación de identidad requerido en transacciones de gran valor",
      "Un protocolo que paraliza los canales Lightning durante períodos de disputa",
      "Una función del protocolo que limita las transacciones incluidas por bloque",
      "Un bloqueo que impide gastar un UTXO hasta cierta altura de bloque o tiempo"
    ],
    correct: 3,
    explanation:
      "CLTV (BIP65) es un opcode de Bitcoin Script que hace que un output sea gastable solo después de que la blockchain alcance una altura de bloque específica o un timestamp Unix. Es fundamental para los HTLCs de Lightning y los contratos con vencimiento."
  },
  {
    text: "¿Qué es el batching de transacciones?",
    options: [
      "Combinar múltiples pagos en una sola transacción para reducir comisiones",
      "El proceso de dividir una transacción grande en varias más pequeñas",
      "Una técnica de minería que agrupa transacciones en paquetes de cien",
      "El sistema automático que prioriza las transacciones urgentes en el mempool"
    ],
    correct: 0,
    explanation:
      "En lugar de crear una transacción por cada pago, el batching agrupa múltiples pagos en una sola transacción con varias salidas. Como los campos fijos de cabecera se comparten, el costo total en comisiones se reduce significativamente. Es una práctica común en exchanges."
  },
  {
    text: "¿Qué es OP_RETURN en Bitcoin Script?",
    options: [
      "Un comando que revierte una transacción fallida a su estado original",
      "Un opcode que permite adjuntar datos arbitrarios a una transacción",
      "El operador que libera fondos automáticamente al superar un timelock",
      "Una instrucción que transfiere el control a un script de firma múltiple"
    ],
    correct: 1,
    explanation:
      "OP_RETURN marca una salida como provablemente no gastable (nadie puede reclamarla). Permite incrustar hasta 80 bytes de datos arbitrarios en la blockchain sin aumentar el conjunto de UTXOs. Se usa para timestamping, protocolos de activos y mensajes."
  }
];

module.exports = questions;
