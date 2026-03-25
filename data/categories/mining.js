// Categoría: Minería — hardware, dificultad, pools y recompensas

const questions = [
  {
    text: "¿Qué mide el hash rate de un minero?",
    options: [
      "Su velocidad para calcular hashes por segundo",
      "La temperatura máxima de operación del equipo de minería",
      "El consumo total de electricidad en vatios del hardware",
      "El número acumulado de bloques encontrados a lo largo del tiempo"
    ],
    correct: 0,
    explanation:
      "El hash rate mide cuántos hashes por segundo puede calcular un minero. Más hash rate significa más intentos por segundo de encontrar el hash válido que permite minar el siguiente bloque."
  },
  {
    text: "¿Qué es un ASIC en el contexto de la minería de Bitcoin?",
    options: [
      "Un protocolo de comunicación entre nodos mineros de la red",
      "Un hardware especializado diseñado exclusivamente para minar Bitcoin",
      "Un algoritmo de consenso alternativo a la Prueba de Trabajo",
      "Un pool de minería de gran escala operado en Europa"
    ],
    correct: 1,
    explanation:
      "ASIC significa Application-Specific Integrated Circuit. A diferencia de las GPUs o CPUs, un ASIC minero está diseñado para hacer una sola cosa: calcular SHA-256 lo más rápido posible. Son órdenes de magnitud más eficientes que el hardware genérico."
  },
  {
    text: "¿Qué función hash utiliza Bitcoin en su Prueba de Trabajo?",
    options: [
      "MD5",
      "Keccak-256",
      "SHA-256",
      "RIPEMD-160"
    ],
    correct: 2,
    explanation:
      "Bitcoin usa doble SHA-256 (SHA-256 aplicado dos veces) en su Prueba de Trabajo. Los mineros buscan un hash cuyo resultado sea menor que el objetivo de dificultad actual."
  },
  {
    text: "¿Cuánto vale la recompensa de bloque actual de Bitcoin (desde el halving de abril 2024)?",
    options: [
      "6.25 BTC por bloque",
      "12.5 BTC por bloque",
      "3.125 BTC por bloque",
      "1.5625 BTC por bloque"
    ],
    correct: 2,
    explanation:
      "El cuarto halving ocurrió en abril de 2024, reduciendo la recompensa de 6.25 BTC a 3.125 BTC por bloque. Cada halving reduce a la mitad el ritmo de emisión de nuevo Bitcoin."
  },
  {
    text: "¿Qué es un bloque huérfano (stale block)?",
    options: [
      "Un bloque con transacciones inválidas rechazado por la red completa",
      "Un bloque válido que queda fuera al superarlo otra cadena más larga",
      "Un bloque vacío sin ninguna transacción, minado involuntariamente",
      "Un bloque especial que señala el inicio de un período de halving"
    ],
    correct: 1,
    explanation:
      "Cuando dos mineros encuentran un bloque válido casi simultáneamente, la red temporalmente tiene dos cadenas. La más corta queda huérfana: el minero que la encontró pierde la recompensa. Por eso los pools usan latencia mínima."
  },
  {
    text: "¿Qué es un pool de minería?",
    options: [
      "Un grupo de mineros que comparten poder de cómputo y recompensas",
      "Una plataforma de comercio para comprar y vender equipos de minería",
      "El software que usan los nodos completos para validar bloques nuevos",
      "Un fondo de inversión especializado en empresas de minería de criptomonedas"
    ],
    correct: 0,
    explanation:
      "En un pool de minería, muchos mineros combinan su hash rate. Aunque cada uno tiene poca probabilidad de encontrar un bloque solo, al cooperar reciben pagos pequeños y frecuentes proporcionales a su contribución."
  },
  {
    text: "¿Qué consume principalmente la minería de Bitcoin?",
    options: [
      "Grandes cantidades de ancho de banda de internet",
      "Enormes volúmenes de agua para enfriar los equipos",
      "Mucho almacenamiento en disco para guardar la blockchain",
      "Grandes cantidades de electricidad para alimentar los ASIC"
    ],
    correct: 3,
    explanation:
      "Los ASIC de minería requieren cantidades significativas de electricidad. Este costo energético es intencional: es lo que hace que atacar la red sea económicamente inviable. La Prueba de Trabajo ancla la seguridad de Bitcoin a energía real."
  },
  {
    text: "¿Qué es el nonce en un bloque de Bitcoin?",
    options: [
      "La dirección pública del minero que encontró y publicó el bloque",
      "El número exacto de transacciones incluidas dentro del bloque",
      "Un número que el minero varía hasta encontrar un hash válido",
      "El identificador único de la versión del software de minería usada"
    ],
    correct: 2,
    explanation:
      "El nonce (Number used Once) es un campo de 32 bits en la cabecera del bloque. Los mineros lo incrementan millones de veces por segundo buscando un hash que cumpla el objetivo de dificultad. Si se agota, cambian otros campos como el timestamp."
  },
  {
    text: "¿Qué ocurre cuando dos mineros encuentran un bloque válido al mismo tiempo?",
    options: [
      "La red se detiene completamente hasta que los desarrolladores decidan cuál es válido",
      "Se crea una bifurcación temporal y la red elige la cadena más larga",
      "Ambos bloques se fusionan automáticamente y las recompensas se dividen por igual",
      "El bloque con el mayor número de transacciones incluidas gana automáticamente"
    ],
    correct: 1,
    explanation:
      "Se produce una bifurcación temporal. Los nodos siguen trabajando sobre el bloque que recibieron primero. Cuando uno de los dos bloques consigue el siguiente bloque encima, la otra cadena queda huérfana y todos los nodos convergen."
  },
  {
    text: "¿Qué es el subsidio de bloque (block subsidy)?",
    options: [
      "Las comisiones que los usuarios pagan por incluir sus transacciones",
      "Bitcoin nuevo creado y entregado al minero por encontrar un bloque",
      "El porcentaje que cobra el pool de minería sobre la recompensa total",
      "El bono extra que recibe el primer nodo en validar el nuevo bloque"
    ],
    correct: 1,
    explanation:
      "El subsidio de bloque es Bitcoin creado de la nada y entregado al minero ganador. Es la única forma en que existen nuevos Bitcoin. Se reduce a la mitad en cada halving y desaparecerá alrededor del año 2140."
  },
  {
    text: "¿Qué es el coinbase en el contexto de la minería (no el exchange)?",
    options: [
      "La plataforma más popular para comprar Bitcoin en Estados Unidos",
      "La primera transacción de cada bloque que crea el Bitcoin nuevo",
      "El hash de referencia que conecta un bloque con el anterior",
      "El campo de datos libre que el minero puede incluir en el bloque"
    ],
    correct: 1,
    explanation:
      "La transacción coinbase es especial: no tiene entradas reales (crea Bitcoin de la nada) y entrega al minero el subsidio de bloque más las comisiones de todas las transacciones del bloque. También puede incluir datos arbitrarios en su campo de entrada."
  }
];

module.exports = questions;
