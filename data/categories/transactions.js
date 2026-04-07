// Categoría: Transacciones — estructura, comisiones y opcodes

const questions = [
  {
    text: {
      es: "¿Qué son las entradas (inputs) de una transacción Bitcoin?",
      en: "What are the inputs of a Bitcoin transaction?"
    },
    options: {
      es: [
        "Los destinatarios que recibirán los Bitcoin enviados en la tx",
        "Las referencias a UTXOs previos no gastados que se van a consumir",
        "Los mineros que van a validar y procesar la transacción",
        "Las comisiones incluidas para incentivar la minería del bloque"
      ],
      en: [
        "The recipients who will receive the Bitcoin sent in the tx",
        "References to previous unspent UTXOs that will be consumed",
        "The miners who will validate and process the transaction",
        "The fees included to incentivize block mining"
      ]
    },
    correct: 1,
    explanation: {
      es: "Las entradas de una transacción apuntan a UTXOs anteriores. Cada entrada incluye una referencia al UTXO (txid + índice) y una firma que demuestra el derecho a gastarlo. No se pueden gastar UTXOs parcialmente: se gastan completos y el cambio vuelve como nueva salida.",
      en: "Transaction inputs point to previous UTXOs. Each input includes a reference to the UTXO (txid + index) and a signature proving the right to spend it. UTXOs cannot be partially spent: they are spent in full and change returns as a new output."
    }
  },
  {
    text: {
      es: "¿Cómo se calculan las comisiones de una transacción Bitcoin?",
      en: "How are Bitcoin transaction fees calculated?"
    },
    options: {
      es: [
        "Como un porcentaje fijo y estándar del monto total que se envía",
        "En función del tamaño en bytes de la transacción, no del monto",
        "Como una tarifa plana estándar de exactamente 1 satoshi por operación",
        "En función del número total de destinatarios incluidos en la transacción"
      ],
      en: [
        "As a fixed standard percentage of the total amount sent",
        "Based on the transaction size in bytes, not the amount sent",
        "As a flat standard fee of exactly 1 satoshi per operation",
        "Based on the total number of recipients in the transaction"
      ]
    },
    correct: 1,
    explanation: {
      es: "Las comisiones son la diferencia entre el total de entradas y el total de salidas. Se expresan en sat/vByte (satoshis por byte virtual). Una transacción más compleja (más entradas/salidas) ocupa más espacio y por tanto paga más comisión.",
      en: "Fees are the difference between total inputs and total outputs. They are expressed in sat/vByte (satoshis per virtual byte). A more complex transaction (more inputs/outputs) takes more space and therefore pays a higher fee."
    }
  },
  {
    text: {
      es: "¿Qué mejora introdujo SegWit (Segregated Witness) en Bitcoin?",
      en: "What improvement did SegWit (Segregated Witness) introduce to Bitcoin?"
    },
    options: {
      es: [
        "Un nuevo algoritmo de hash más rápido para la Prueba de Trabajo",
        "La separación de los datos de firma del cuerpo de la transacción",
        "La posibilidad de crear transacciones privadas sin revelar el monto",
        "Un nuevo tipo de dirección completamente incompatible con versiones anteriores"
      ],
      en: [
        "A new faster hash algorithm for Proof of Work",
        "Separating signature data from the transaction body",
        "The ability to create private transactions without revealing the amount",
        "A new address type fully incompatible with older versions"
      ]
    },
    correct: 1,
    explanation: {
      es: "SegWit mueve las firmas (el 'testigo') fuera del cuerpo principal de la transacción. Esto resuelve la maleabilidad de transacciones (necesaria para Lightning), reduce el tamaño efectivo en bytes y permite más transacciones por bloque.",
      en: "SegWit moves signatures (the 'witness') outside the main transaction body. This fixes transaction malleability (required by Lightning), reduces the effective byte size, and allows more transactions per block."
    }
  },
  {
    text: {
      es: "¿Qué es CPFP (Child Pays For Parent)?",
      en: "What is CPFP (Child Pays For Parent)?"
    },
    options: {
      es: [
        "Acelerar una tx atascada creando una hija con mayor comisión",
        "Un protocolo en que los mineros heredan recompensas de bloques anteriores",
        "Una técnica para dividir transacciones grandes en varias más pequeñas",
        "Un sistema de compensación entre nodos de canales Lightning"
      ],
      en: [
        "Accelerating a stuck tx by attaching a higher-fee child transaction",
        "A protocol where miners inherit rewards from previous blocks",
        "A technique for splitting large transactions into smaller ones",
        "A fee-compensation system between Lightning channel nodes"
      ]
    },
    correct: 0,
    explanation: {
      es: "Si una transacción está atascada en el mempool por comisión baja, puedes crear una nueva transacción que gaste uno de sus outputs y pague una comisión suficientemente alta. Los mineros incluirán ambas juntas para cobrar la comisión combinada.",
      en: "If a transaction is stuck in the mempool due to a low fee, you can create a new transaction that spends one of its outputs and pays a high enough fee. Miners will include both together to collect the combined fee."
    }
  },
  {
    text: {
      es: "¿Qué es RBF (Replace-By-Fee)?",
      en: "What is RBF (Replace-By-Fee)?"
    },
    options: {
      es: [
        "Una técnica para reducir las comisiones en transacciones ya confirmadas",
        "Reemplazar una transacción pendiente por otra con mayor comisión",
        "El protocolo para reemplazar nodos inactivos dentro de la red Bitcoin",
        "El mecanismo con que los mineros sustituyen bloques huérfanos en la cadena"
      ],
      en: [
        "A technique for reducing fees on already confirmed transactions",
        "Replacing a pending transaction with one that pays a higher fee",
        "The protocol for replacing inactive nodes in the Bitcoin network",
        "The mechanism miners use to substitute orphaned blocks in the chain"
      ]
    },
    correct: 1,
    explanation: {
      es: "Si marcas una transacción como RBF antes de enviarla, puedes reemplazarla antes de que sea confirmada pagando una comisión más alta. Es útil cuando el mempool se congestiona y necesitas que tu pago se confirme antes.",
      en: "If you mark a transaction as RBF before sending, you can replace it before confirmation by paying a higher fee. This is useful when the mempool is congested and you need your payment confirmed sooner."
    }
  },
  {
    text: {
      es: "¿Qué es una transacción coinbase en Bitcoin?",
      en: "What is a coinbase transaction in Bitcoin?"
    },
    options: {
      es: [
        "La primera transacción de cada bloque que crea el Bitcoin nuevo",
        "Una operación enviada directamente desde la plataforma Coinbase al usuario",
        "Una transacción que combina múltiples UTXOs de una misma dirección",
        "Una transacción con tiempo de bloqueo vinculado al próximo halving"
      ],
      en: [
        "The first transaction of each block that creates new Bitcoin",
        "An operation sent directly from the Coinbase platform to the user",
        "A transaction that combines multiple UTXOs from the same address",
        "A transaction with a timelock tied to the next halving"
      ]
    },
    correct: 0,
    explanation: {
      es: "La transacción coinbase es la primera en cada bloque. No tiene entradas reales: crea Bitcoin nuevo (el subsidio de bloque) y lo suma a las comisiones de las demás transacciones del bloque. Solo el minero que encuentra el bloque puede crearla.",
      en: "The coinbase transaction is the first in every block. It has no real inputs: it creates new Bitcoin (the block subsidy) and adds it to the fees from all other transactions in the block. Only the miner who finds the block can create it."
    }
  },
  {
    text: {
      es: "¿Qué mide el sat/vByte en el contexto de las transacciones Bitcoin?",
      en: "What does sat/vByte measure in the context of Bitcoin transactions?"
    },
    options: {
      es: [
        "El precio en satoshis por cada byte virtual de espacio en el bloque",
        "El número de satoshis bloqueados en cada UTXO de la transacción",
        "La velocidad en bytes por segundo con la que la tx se propaga por la red",
        "El tamaño máximo permitido en bytes para una transacción estándar"
      ],
      en: [
        "The price in satoshis per virtual byte of block space",
        "The number of satoshis locked in each UTXO of the transaction",
        "The speed in bytes per second at which the tx propagates",
        "The maximum allowed size in bytes for a standard transaction"
      ]
    },
    correct: 0,
    explanation: {
      es: "sat/vByte (satoshis por byte virtual) es la tasa de comisión. Un 'byte virtual' o vByte tiene en cuenta el descuento de SegWit: los datos del testigo cuentan menos. Más congestionado el mempool → más sat/vByte necesitas para que tu tx sea incluida pronto.",
      en: "sat/vByte (satoshis per virtual byte) is the fee rate. A 'virtual byte' accounts for the SegWit discount: witness data counts less. A more congested mempool → you need more sat/vByte for your tx to be included quickly."
    }
  },
  {
    text: {
      es: "¿Qué es el timelock CLTV (CheckLockTimeVerify) en Bitcoin?",
      en: "What is the CLTV (CheckLockTimeVerify) timelock in Bitcoin?"
    },
    options: {
      es: [
        "Un sistema de verificación de identidad requerido en transacciones grandes",
        "Un protocolo que paraliza los canales Lightning durante disputas",
        "Una función que limita las transacciones incluidas por bloque",
        "Un bloqueo que impide gastar un UTXO hasta cierta altura de bloque"
      ],
      en: [
        "An identity verification system required on large transactions",
        "A protocol that freezes Lightning channels during disputes",
        "A function that limits the transactions included per block",
        "A lock preventing UTXO spending until a specific block height"
      ]
    },
    correct: 3,
    explanation: {
      es: "CLTV (BIP65) es un opcode de Bitcoin Script que hace que un output sea gastable solo después de que la blockchain alcance una altura de bloque específica o un timestamp Unix. Es fundamental para los HTLCs de Lightning y los contratos con vencimiento.",
      en: "CLTV (BIP65) is a Bitcoin Script opcode that makes an output spendable only after the blockchain reaches a specific block height or Unix timestamp. It is fundamental to Lightning HTLCs and time-bounded contracts."
    }
  },
  {
    text: {
      es: "¿Qué es el batching de transacciones?",
      en: "What is transaction batching?"
    },
    options: {
      es: [
        "Combinar múltiples pagos en una sola transacción para reducir comisiones",
        "El proceso de dividir una transacción grande en varias más pequeñas",
        "Una técnica de minería que agrupa transacciones en paquetes de cien",
        "El sistema automático que prioriza transacciones urgentes en el mempool"
      ],
      en: [
        "Combining multiple payments into one transaction to reduce fees",
        "The process of splitting a large transaction into smaller ones",
        "A mining technique that groups transactions into batches of a hundred",
        "The automatic system that prioritizes urgent transactions in the mempool"
      ]
    },
    correct: 0,
    explanation: {
      es: "En lugar de crear una transacción por cada pago, el batching agrupa múltiples pagos en una sola transacción con varias salidas. Como los campos fijos de cabecera se comparten, el costo total en comisiones se reduce significativamente. Es una práctica común en exchanges.",
      en: "Instead of creating one transaction per payment, batching groups multiple payments into a single transaction with several outputs. Since fixed header fields are shared, the total fee cost is significantly reduced. It is common practice at exchanges."
    }
  },
  {
    text: {
      es: "¿Qué es OP_RETURN en Bitcoin Script?",
      en: "What is OP_RETURN in Bitcoin Script?"
    },
    options: {
      es: [
        "Un comando que revierte una transacción fallida a su estado original",
        "Un opcode que permite adjuntar datos arbitrarios a una transacción",
        "El operador que libera fondos automáticamente al superar un timelock",
        "Una instrucción que transfiere el control a un script multifirma"
      ],
      en: [
        "A command that reverts a failed transaction to its original state",
        "An opcode that allows attaching arbitrary data to a transaction",
        "The operator that automatically releases funds after a timelock",
        "An instruction that transfers control to a multisig script"
      ]
    },
    correct: 1,
    explanation: {
      es: "OP_RETURN marca una salida como provablemente no gastable (nadie puede reclamarla). Permite incrustar hasta 80 bytes de datos arbitrarios en la blockchain sin aumentar el conjunto de UTXOs. Se usa para timestamping, protocolos de activos y mensajes.",
      en: "OP_RETURN marks an output as provably unspendable (no one can claim it). It allows embedding up to 80 bytes of arbitrary data in the blockchain without growing the UTXO set. It is used for timestamping, asset protocols, and messages."
    }
  }
];

module.exports = questions;
