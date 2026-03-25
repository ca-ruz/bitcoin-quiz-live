// 25 preguntas sobre Bitcoin para principiantes — en español
// Cada pregunta incluye: texto, opciones, índice correcto (base 0) y explicación.
// Las opciones dentro de cada pregunta tienen longitudes similares para que
// los jugadores no puedan identificar la correcta solo por su extensión.

const questions = [
  {
    text: "¿Qué es Bitcoin?",
    options: [
      "Una moneda digital controlada por bancos centrales",
      "Una moneda digital descentralizada sin autoridad central",
      "Una criptomoneda emitida y respaldada por un gobierno",
      "Un sistema de pagos en línea de una empresa privada"
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
      "Un tipo de billetera digital para guardar criptomonedas",
      "Un registro de transacciones distribuido en muchas computadoras",
      "Una máquina especializada para resolver cálculos de minería",
      "Una plataforma para intercambiar Bitcoin por otras monedas"
    ],
    correct: 1,
    explanation:
      "Una blockchain es un libro contable compartido e inmutable, almacenado en miles de computadoras. Ninguna entidad puede modificar los registros pasados, lo que lo hace resistente a la manipulación."
  },
  {
    text: "¿Qué hacen los mineros de Bitcoin?",
    options: [
      "Imprimen Bitcoin nuevo como lo hace un banco central",
      "Hackean billeteras para robar fondos ajenos",
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
      "Subsidios del gobierno y descuentos en el pago de impuestos",
      "Bitcoin recién creados más las comisiones de las transacciones",
      "Intereses calculados en función de las horas de minería activa",
      "Tokens de otras criptomonedas como Ethereum o Litecoin"
    ],
    correct: 1,
    explanation:
      "Los mineros reciben Bitcoin recién emitidos (el subsidio de bloque) más todas las comisiones de transacción incluidas en el bloque que minaron."
  },
  {
    text: "¿Qué es el halving de Bitcoin?",
    options: [
      "Cuando el precio de Bitcoin baja exactamente a la mitad",
      "Cuando la recompensa de minería se reduce a la mitad cada 4 años",
      "Cuando un Bitcoin se divide en dos monedas separadas iguales",
      "Cuando la velocidad de la red cae repentinamente a la mitad"
    ],
    correct: 1,
    explanation:
      "Cada ~210,000 bloques (aproximadamente 4 años), la recompensa de minería se reduce a la mitad. Esto desacelera la creación de nuevos Bitcoin y los vuelve más escasos con el tiempo."
  },
  {
    text: "¿Qué es una clave privada?",
    options: [
      "La contraseña de tu billetera digital guardada por el banco",
      "Un código secreto que prueba la propiedad y permite gastar Bitcoin",
      "La contraseña para iniciar sesión en tu cuenta del exchange",
      "Un número de identificación de Bitcoin asignado por el gobierno"
    ],
    correct: 1,
    explanation:
      "Una clave privada es un número secreto derivado de criptografía. Quien la posee controla los Bitcoin en esa dirección. ¡Nunca la compartas con nadie!"
  },
  {
    text: "¿Qué es una dirección de Bitcoin?",
    options: [
      "Tu dirección postal física vinculada a tu billetera de Bitcoin",
      "El código secreto que necesitas para autorizar y gastar Bitcoin",
      "Un código público que otras personas usan para enviarte Bitcoin",
      "Tu número de cuenta bancaria registrado en un exchange"
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
      "Necesitas aprobación gubernamental para tener y usar Bitcoin"
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
      "Una transacción sin confirmar puede reemplazarse usando RBF (Replace-By-Fee) antes de que un minero la incluya en un bloque. Pero una vez confirmada, es prácticamente imposible revertirla. ¡Verifica siempre la dirección antes de enviar!"
  },
  {
    text: "¿Qué es la autocustodia en Bitcoin?",
    options: [
      "Guardar tu Bitcoin en un exchange por comodidad y seguridad",
      "Dejar que un banco regulado custodie y administre tu Bitcoin",
      "Controlar tus propias claves privadas y tu Bitcoin directamente",
      "Contratar a un asesor financiero certificado para manejar tu Bitcoin"
    ],
    correct: 2,
    explanation:
      "La autocustodia significa que tú controlas tus claves privadas. Eres tu propio banco: ningún tercero puede congelar, confiscar ni perder tus fondos."
  },
  {
    text: "¿Qué es la Red Lightning (Lightning Network)?",
    options: [
      "Un equipo especializado para minar nuevos bloques de Bitcoin",
      "Una capa 2 sobre Bitcoin que permite pagos instantáneos y baratos",
      "Una criptomoneda alternativa que compite directamente con Bitcoin",
      "Un sistema de pagos digitales administrado por un gobierno"
    ],
    correct: 1,
    explanation:
      "La Red Lightning está construida sobre Bitcoin. Usa canales de pago para permitir micropagos instantáneos, ideal para compras cotidianas como café, propinas y más."
  },
  {
    text: "¿Por qué los pagos por Lightning Network son tan rápidos?",
    options: [
      "Liquidan fuera de la cadena, sin esperar confirmaciones de bloques",
      "Los bancos asociados al protocolo los verifican en tiempo real",
      "Las transacciones de Bitcoin en cadena son ahora completamente instantáneas",
      "Algoritmos de inteligencia artificial optimizan y aceleran la blockchain"
    ],
    correct: 0,
    explanation:
      "Lightning abre canales de pago entre partes. Los fondos se mueven instantáneamente fuera de la cadena; solo la apertura y cierre del canal toca la blockchain."
  },
  {
    text: "¿Qué es un satoshi?",
    options: [
      "El seudónimo del programador que creó la red Ethereum",
      "Un exchange de Bitcoin fundado en Japón en el año 2010",
      "La unidad mínima de Bitcoin, equivalente a 0.00000001 BTC",
      "Un modelo de hardware de minería ASIC de alta potencia"
    ],
    correct: 2,
    explanation:
      "Un satoshi (sat) es 0.00000001 BTC. Su nombre honra al creador de Bitcoin. Los pagos por Lightning frecuentemente se denominan en sats."
  },
  {
    text: "¿Qué hace descentralizado a Bitcoin?",
    options: [
      "Es controlado por un consorcio internacional de grandes bancos",
      "Ninguna persona, empresa o gobierno puede controlar la red",
      "Bitcoin es supervisado y administrado por las Naciones Unidas",
      "Una organización sin fines de lucro mantiene la blockchain central"
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
      "Un dispositivo físico que almacena tus claves privadas sin internet",
      "Una memoria USB que contiene tus credenciales de acceso al exchange",
      "Una tarjeta de crédito recargable que almacena tu saldo en Bitcoin",
      "Un cajero automático especializado para comprar y vender Bitcoin"
    ],
    correct: 0,
    explanation:
      "Las billeteras de hardware (como Coldcard, Trezor o Ledger) guardan las claves privadas en un chip seguro y desconectado de internet, protegiéndolas de hackers y malware."
  },
  {
    text: "¿Qué es una frase semilla (seed phrase o frase de recuperación)?",
    options: [
      "La contraseña secreta de tu cuenta en un exchange de Bitcoin",
      "12 a 24 palabras que restauran tu billetera en cualquier dispositivo",
      "Un código especial de transacción para enviar Bitcoin de forma anónima",
      "El código que usan los mineros para validar y firmar nuevos bloques"
    ],
    correct: 1,
    explanation:
      "Una frase semilla es un respaldo legible de la clave maestra de tu billetera. Escríbela en papel y guárdala en un lugar seguro; quien la tenga puede acceder a todos tus fondos."
  },
  {
    text: "¿Qué es la Prueba de Trabajo (Proof of Work)?",
    options: [
      "Un certificado oficial del gobierno que acredita la propiedad de Bitcoin",
      "Un mecanismo donde los mineros gastan energía para validar transacciones",
      "Un documento legal obligatorio para realizar grandes transferencias de Bitcoin",
      "Un sistema criptográfico para recuperar billeteras y Bitcoin perdidos"
    ],
    correct: 1,
    explanation:
      "La Prueba de Trabajo exige que los mineros realicen un trabajo computacional real (gastando electricidad) para agregar un bloque. Este costo hace que atacar la red sea prohibitivamente caro."
  },
  {
    text: "¿Cómo evita Bitcoin el doble gasto?",
    options: [
      "Los bancos centrales verifican y aprueban en tiempo real cada transacción de Bitcoin",
      "El gobierno autoriza y registra de forma oficial todas las transferencias de Bitcoin",
      "La blockchain y el consenso de red impiden gastar el mismo Bitcoin dos veces",
      "Bitcoin funciona como el efectivo físico, por lo que no puede copiarse ni duplicarse"
    ],
    correct: 2,
    explanation:
      "Cada transacción se transmite a la red. Los mineros solo incluyen transacciones válidas con monedas no gastadas. Una vez confirmada, cualquier intento de reenvío es rechazado por todos los nodos."
  },
  {
    text: "¿Qué es un nodo de Bitcoin?",
    options: [
      "Una máquina ASIC diseñada exclusivamente para minar nuevos bloques",
      "Una computadora que almacena la blockchain completa y valida transacciones",
      "Un cajero automático especializado para comprar y vender Bitcoin en efectivo",
      "Un servidor central que los exchanges usan para gestionar los fondos"
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
      "Vender todo tu Bitcoin inmediatamente cuando el precio empieza a caer",
      "Operar Bitcoin activamente usando apalancamiento y contratos de futuros",
      "Conservar Bitcoin a largo plazo y resistir la tentación de vender",
      "Un formato estándar de billetera para almacenar Bitcoin de forma offline"
    ],
    correct: 2,
    explanation:
      "HODL nació como un error tipográfico de 'HOLD' en un foro en 2013 durante una caída del precio. Se convirtió en el mantra de quienes mantienen Bitcoin a pesar de la volatilidad."
  },
  {
    text: "¿Qué pasa con la recompensa de minería de Bitcoin a largo plazo?",
    options: [
      "Aumenta progresivamente para compensar la mayor dificultad de minería en la red",
      "Se mantiene fija para siempre, sin variaciones ni cambios previstos en el protocolo",
      "Cae a la mitad cada ~4 años hasta que no queden Bitcoin por emitir",
      "El gobierno ajusta el calendario de recompensas según las condiciones económicas del momento"
    ],
    correct: 2,
    explanation:
      "Después de que se minen los 21 millones de Bitcoin (alrededor del año 2140), los mineros solo ganarán comisiones de transacción. El calendario de oferta fija de Bitcoin está impuesto por el código, no por la política."
  },
  // ── Preguntas trampa ─────────────────────────────────────────────────────────

  {
    text: "¿Cuál de estas afirmaciones sobre Bitcoin es FALSA?",
    options: [
      "El suministro total de Bitcoin está limitado a 21 millones",
      "Las transacciones de Bitcoin son completamente anónimas",
      "Cualquiera puede verificar transacciones en la blockchain",
      "Los mineros reciben recompensas por añadir bloques a la cadena"
    ],
    correct: 1,
    explanation:
      "Bitcoin es seudónimo, no anónimo. Todas las transacciones son públicas y rastreables en la blockchain. Lo que se oculta es la identidad real detrás de cada dirección, no los movimientos de fondos."
  },
  {
    text: "¿Qué NO puede hacer alguien que solo conoce tu dirección de Bitcoin?",
    options: [
      "Ver el historial completo de transacciones de esa dirección",
      "Consultar el saldo actual de Bitcoin en esa billetera",
      "Gastar o mover los Bitcoin que hay en esa billetera",
      "Enviarte Bitcoin directamente a esa dirección sin tu permiso"
    ],
    correct: 2,
    explanation:
      "La blockchain es pública: cualquiera puede ver el saldo e historial de una dirección, y cualquiera puede enviarte fondos. Pero para gastar o mover esos Bitcoin se necesita la clave privada, que solo tú debes tener."
  },
  {
    text: "Envías Bitcoin a una dirección incorrecta por error. ¿Qué ocurre?",
    options: [
      "El sistema lo detecta y revierte la transacción automáticamente",
      "Puedes recuperarlos contactando a los mineros que procesaron el bloque",
      "Los Bitcoin se pierden si nadie más controla esa dirección",
      "La transacción queda pendiente hasta que la dirección esté activa"
    ],
    correct: 2,
    explanation:
      "Bitcoin no tiene soporte técnico ni reversiones automáticas. Si la dirección no existe o nadie tiene su clave privada, los fondos son irrecuperables. Esto refuerza por qué hay que verificar siempre la dirección destino."
  },
  {
    text: "Pierdes tu dispositivo y no guardaste tu frase semilla. ¿Qué pasa con tus Bitcoin?",
    options: [
      "Puedes recuperarlos con el correo electrónico de tu cuenta de exchange",
      "El soporte técnico del fabricante de tu billetera puede ayudarte",
      "Se pierden permanentemente, pues nadie más puede acceder a ellos",
      "Vuelven automáticamente a la dirección del emisor o del exchange"
    ],
    correct: 2,
    explanation:
      "Sin la frase semilla no hay forma de recuperar una billetera de autocustodia. Ningún fabricante, ningún soporte técnico ni ningún gobierno puede ayudarte. Por eso es crucial guardar la frase semilla en papel, en un lugar seguro y offline."
  },
  {
    text: "Cuando ya no queden Bitcoin por minar (~2140), ¿de qué vivirán los mineros?",
    options: [
      "Las transacciones se volverán gratuitas al no haber más recompensas",
      "Los gobiernos deberán subsidiarlos para mantener la red funcionando",
      "Seguirán ganando dinero cobrando las comisiones de cada transacción",
      "La red Bitcoin dejará de funcionar por falta de incentivos económicos"
    ],
    correct: 2,
    explanation:
      "Cuando se agoten los 21 millones, el subsidio de bloque desaparecerá pero los mineros seguirán ganando las comisiones que los usuarios pagan por incluir sus transacciones. El protocolo está diseñado para que este incentivo sostenga la red a largo plazo."
  }
];

module.exports = questions;
