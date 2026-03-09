// 25 preguntas sobre Bitcoin para principiantes — en español
// Cada pregunta incluye: texto, opciones, índice correcto (base 0) y explicación.

const questions = [
  {
    text: "¿Qué es Bitcoin?",
    options: [
      "Una moneda digital controlada por bancos centrales",
      "Una moneda digital descentralizada sin autoridad central",
      "Una criptomoneda emitida por un gobierno",
      "Un sistema de pagos en línea propiedad de una empresa tecnológica"
    ],
    correct: 1,
    explanation:
      "Bitcoin es una moneda digital descentralizada: ningún gobierno ni banco la controla. Funciona en una red de igual a igual (peer-to-peer) con miles de computadoras en todo el mundo."
  },
  {
    text: "¿Quién creó Bitcoin?",
    options: [
      "Elon Musk",
      "Vitalik Buterin",
      "Satoshi Nakamoto",
      "Bill Gates"
    ],
    correct: 2,
    explanation:
      "Bitcoin fue creado por una persona o grupo bajo el seudónimo Satoshi Nakamoto. Su verdadera identidad sigue siendo un misterio hasta hoy."
  },
  {
    text: "¿Cuántos Bitcoin existirán en total?",
    options: [
      "1,000 millones",
      "100 millones",
      "21 millones",
      "Ilimitados"
    ],
    correct: 2,
    explanation:
      "Solo existirán 21 millones de Bitcoin. Esta oferta fija está programada en el código y hace que Bitcoin sea escaso, como el oro digital."
  },
  {
    text: "¿Qué es una blockchain (cadena de bloques)?",
    options: [
      "Un tipo de billetera de criptomonedas",
      "Un registro compartido de transacciones distribuido en muchas computadoras",
      "Una máquina de minería",
      "Una plataforma de intercambio de Bitcoin"
    ],
    correct: 1,
    explanation:
      "Una blockchain es un libro contable compartido e inmutable, almacenado en miles de computadoras. Ninguna entidad puede modificar los registros pasados, lo que lo hace resistente a la manipulación."
  },
  {
    text: "¿Qué hacen los mineros de Bitcoin?",
    options: [
      "Imprimen nuevos Bitcoin como lo hace un gobierno con el dinero",
      "Hackean billeteras para robar Bitcoin",
      "Validan transacciones y las agregan a la blockchain",
      "Intercambian Bitcoin por efectivo en cajeros automáticos"
    ],
    correct: 2,
    explanation:
      "Los mineros usan poder computacional para resolver acertijos matemáticos complejos. Al hacerlo, validan transacciones y aseguran la red, ganando Bitcoin como recompensa."
  },
  {
    text: "¿Qué recompensa reciben los mineros al encontrar un bloque?",
    options: [
      "Subsidios gubernamentales y exenciones fiscales",
      "Bitcoin recién creados más las comisiones de transacción del bloque",
      "Pagos de intereses bancarios",
      "Tokens de Ethereum"
    ],
    correct: 1,
    explanation:
      "Los mineros reciben Bitcoin recién emitidos (el subsidio de bloque) más todas las comisiones de transacción incluidas en el bloque que minaron."
  },
  {
    text: "¿Qué es el halving de Bitcoin?",
    options: [
      "Cuando el precio de Bitcoin cae a la mitad",
      "Cuando la recompensa de minería se reduce a la mitad aproximadamente cada 4 años",
      "Cuando un Bitcoin se divide en dos monedas",
      "Cuando la red experimenta una ralentización"
    ],
    correct: 1,
    explanation:
      "Cada ~210,000 bloques (aproximadamente 4 años), la recompensa de minería se reduce a la mitad. Esto desacelera la creación de nuevos Bitcoin y los vuelve más escasos con el tiempo."
  },
  {
    text: "¿Qué es una clave privada?",
    options: [
      "La contraseña de tu billetera guardada por el banco",
      "Un número criptográfico secreto que prueba la propiedad y permite gastar Bitcoin",
      "La contraseña para iniciar sesión en un exchange",
      "Un número de identificación de Bitcoin emitido por el gobierno"
    ],
    correct: 1,
    explanation:
      "Una clave privada es un número secreto derivado de criptografía. Quien la posee controla los Bitcoin en esa dirección. ¡Nunca la compartas con nadie!"
  },
  {
    text: "¿Qué es una dirección de Bitcoin?",
    options: [
      "Tu dirección física vinculada a tu billetera",
      "El código secreto para gastar Bitcoin",
      "Un identificador compartible que otros usan para enviarte Bitcoin",
      "Tu número de cuenta en un exchange"
    ],
    correct: 2,
    explanation:
      "Una dirección de Bitcoin es como un correo electrónico: puedes compartirla públicamente para que otros te envíen Bitcoin. Se deriva de tu clave pública."
  },
  {
    text: "¿Qué significa 'Not your keys, not your coins' (sin tus llaves, no son tus monedas)?",
    options: [
      "Necesitas llevar llaves físicas de metal para acceder a Bitcoin",
      "Si no controlas tus claves privadas, realmente no posees tus Bitcoin",
      "Las claves de Bitcoin deben guardarse en una bóveda bancaria",
      "Necesitas aprobación gubernamental para tener Bitcoin"
    ],
    correct: 1,
    explanation:
      "Si guardas Bitcoin en un exchange, ellos tienen las claves privadas. Si son hackeados, quiebran o congelan retiros, podrías perderlo todo."
  },
  {
    text: "¿Puede revertirse una transacción de Bitcoin confirmada?",
    options: [
      "Sí, dentro de las primeras 24 horas",
      "Sí, si contactas al soporte técnico",
      "No — las transacciones de Bitcoin son irreversibles",
      "Sí, con aprobación de la mayoría de la red"
    ],
    correct: 2,
    explanation:
      "Una vez que una transacción se confirma en la blockchain, no puede deshacerse. ¡Verifica siempre tres veces la dirección del destinatario antes de enviar!"
  },
  {
    text: "¿Qué es la autocustodia en Bitcoin?",
    options: [
      "Guardar Bitcoin en un exchange por conveniencia",
      "Dejar que un banco regulado administre tu Bitcoin",
      "Tener tus propias claves privadas y controlar tu Bitcoin directamente",
      "Contratar a un asesor financiero para administrar tu Bitcoin"
    ],
    correct: 2,
    explanation:
      "La autocustodia significa que tú controlas tus claves privadas. Eres tu propio banco: ningún tercero puede congelar, confiscar ni perder tus fondos."
  },
  {
    text: "¿Qué es la Red Lightning (Lightning Network)?",
    options: [
      "Un tipo de equipo de minería de Bitcoin",
      "Una red de pagos de capa 2 que permite pagos de Bitcoin instantáneos y casi gratuitos",
      "Una criptomoneda que compite con Bitcoin",
      "Un sistema de pagos administrado por el gobierno"
    ],
    correct: 1,
    explanation:
      "La Red Lightning está construida sobre Bitcoin. Usa canales de pago para permitir micropagos instantáneos, ideal para compras cotidianas como café, propinas y más."
  },
  {
    text: "¿Por qué los pagos por Lightning Network son tan rápidos?",
    options: [
      "Usan canales de pago que liquidan fuera de la cadena, sin esperar confirmaciones de bloques",
      "Los bancos los procesan en tiempo real",
      "Las transacciones de Bitcoin en cadena se volvieron instantáneas recientemente",
      "Algoritmos de inteligencia artificial aceleran la blockchain"
    ],
    correct: 0,
    explanation:
      "Lightning abre canales de pago entre partes. Los fondos se mueven instantáneamente fuera de la cadena; solo la apertura y cierre del canal toca la blockchain."
  },
  {
    text: "¿Qué es un satoshi?",
    options: [
      "El creador de Ethereum",
      "Un exchange de Bitcoin con sede en Japón",
      "La unidad más pequeña de Bitcoin — una cienmillonésima parte (0.00000001 BTC)",
      "Un tipo de hardware de minería ASIC"
    ],
    correct: 2,
    explanation:
      "Un satoshi (sat) es 0.00000001 BTC. Su nombre honra al creador de Bitcoin. Los pagos por Lightning frecuentemente se denominan en sats."
  },
  {
    text: "¿Qué hace descentralizado a Bitcoin?",
    options: [
      "Es controlado por un consorcio de grandes bancos",
      "Ninguna persona, empresa o gobierno controla la red",
      "Bitcoin es administrado por las Naciones Unidas",
      "Una sola organización sin fines de lucro mantiene la blockchain"
    ],
    correct: 1,
    explanation:
      "Bitcoin corre en decenas de miles de computadoras en todo el mundo. Nadie puede apagarlo, censurar transacciones ni cambiar las reglas unilateralmente."
  },
  {
    text: "¿Cuándo se minó el bloque génesis de Bitcoin (el primer bloque)?",
    options: [
      "3 de enero de 2009",
      "1 de enero de 2000",
      "31 de octubre de 2008",
      "15 de marzo de 2010"
    ],
    correct: 0,
    explanation:
      "El bloque génesis fue minado el 3 de enero de 2009. Satoshi incrustó un titular del Times: 'Chancellor on brink of second bailout for banks' — una crítica sutil al sistema financiero tradicional."
  },
  {
    text: "¿Qué es una billetera de hardware (hardware wallet)?",
    options: [
      "Un dispositivo físico que almacena tus claves privadas sin conexión a internet",
      "Una memoria USB con los datos de acceso a tu exchange",
      "Una tarjeta de crédito con saldo en Bitcoin",
      "Un cajero automático de Bitcoin"
    ],
    correct: 0,
    explanation:
      "Las billeteras de hardware (como Coldcard, Trezor o Ledger) guardan las claves privadas en un chip seguro y desconectado de internet, protegiéndolas de hackers y malware."
  },
  {
    text: "¿Qué es una frase semilla (seed phrase o frase de recuperación)?",
    options: [
      "La contraseña de tu cuenta en un exchange",
      "12 a 24 palabras que pueden restaurar toda tu billetera Bitcoin en cualquier dispositivo compatible",
      "Un formato especial de transacción de Bitcoin",
      "El código que usan los mineros para validar nuevos bloques"
    ],
    correct: 1,
    explanation:
      "Una frase semilla es un respaldo legible de la clave maestra de tu billetera. Escríbela en papel y guárdala en un lugar seguro; quien la tenga puede acceder a todos tus fondos."
  },
  {
    text: "¿Qué es la Prueba de Trabajo (Proof of Work)?",
    options: [
      "Un certificado gubernamental que prueba la propiedad de Bitcoin",
      "Un mecanismo de consenso donde los mineros gastan energía real para validar transacciones",
      "Un documento legal requerido para transacciones grandes de Bitcoin",
      "Un método para recuperar Bitcoin perdidos"
    ],
    correct: 1,
    explanation:
      "La Prueba de Trabajo exige que los mineros realicen un trabajo computacional real (gastando electricidad) para agregar un bloque. Este costo hace que atacar la red sea prohibitivamente caro."
  },
  {
    text: "¿Cómo evita Bitcoin el doble gasto?",
    options: [
      "Los bancos verifican y aprueban cada transacción",
      "El gobierno autoriza todas las transferencias",
      "La blockchain descentralizada y las reglas de consenso hacen imposible gastar el mismo Bitcoin dos veces",
      "Bitcoin se mueve físicamente entre billeteras como el efectivo"
    ],
    correct: 2,
    explanation:
      "Cada transacción se transmite a la red. Los mineros solo incluyen transacciones válidas con monedas no gastadas. Una vez confirmada, cualquier intento de reenvío es rechazado por todos los nodos."
  },
  {
    text: "¿Qué es un nodo de Bitcoin?",
    options: [
      "Una máquina de minería ASIC",
      "Una computadora que almacena una copia completa de la blockchain y valida todas las transacciones de forma independiente",
      "Un cajero automático de Bitcoin",
      "Un servidor de un exchange"
    ],
    correct: 1,
    explanation:
      "Cualquiera puede correr un nodo de Bitcoin. Los nodos hacen cumplir las reglas de la red y validan cada transacción y bloque de forma independiente, sin necesidad de confiar en terceros."
  },
  {
    text: "¿Cuál fue la primera compra documentada en el mundo real con Bitcoin?",
    options: [
      "Un auto comprado por 1,000 BTC",
      "Dos pizzas compradas por 10,000 BTC",
      "Una casa adquirida por 100 BTC",
      "Un café comprado por 1 BTC"
    ],
    correct: 1,
    explanation:
      "El 22 de mayo de 2010 (hoy conocido como el 'Bitcoin Pizza Day'), Laszlo Hanyecz pagó 10,000 BTC por dos pizzas. Esas monedas valdrían cientos de millones de dólares hoy."
  },
  {
    text: "¿Qué significa 'HODL' en la cultura Bitcoin?",
    options: [
      "Vender inmediatamente cuando el precio baja",
      "Una estrategia de trading con apalancamiento",
      "Mantener tu Bitcoin a largo plazo y resistir el pánico de vender",
      "Un formato de billetera Bitcoin"
    ],
    correct: 2,
    explanation:
      "HODL nació como un error tipográfico de 'HOLD' en un foro en 2013 durante una caída del precio. Se convirtió en el mantra de quienes mantienen Bitcoin a pesar de la volatilidad."
  },
  {
    text: "¿Qué pasa con la recompensa de minería de Bitcoin a largo plazo?",
    options: [
      "Aumenta para mantener incentivados a los mineros conforme sube la dificultad",
      "Se mantiene igual para siempre",
      "Se reduce a la mitad cada ~4 años hasta que no se cree más Bitcoin alrededor del año 2140",
      "El gobierno controla el calendario de recompensas"
    ],
    correct: 2,
    explanation:
      "Después de que se minen los 21 millones de Bitcoin (alrededor del año 2140), los mineros solo ganarán comisiones de transacción. El calendario de oferta fija de Bitcoin está impuesto por el código, no por la política."
  }
];

module.exports = questions;
