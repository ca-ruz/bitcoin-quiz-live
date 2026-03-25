// Categoría: LSP (Lightning Service Providers) — liquidez y servicios Lightning

const questions = [
  {
    text: "¿Qué es un LSP (Lightning Service Provider)?",
    options: [
      "Un proveedor que ofrece servicios de infraestructura y liquidez en Lightning",
      "Un exchange especializado en el intercambio de Bitcoin por Lightning",
      "Un tipo de nodo que valida transacciones en la blockchain principal",
      "Un protocolo estándar para conectar billeteras con nodos remotos"
    ],
    correct: 0,
    explanation:
      "Un LSP es un proveedor de servicios que ayuda a los usuarios a incorporarse a Lightning, ofreciendo apertura de canales, liquidez entrante y en algunos casos canales Just-In-Time. Cumplen un rol similar al de un ISP pero para la red Lightning."
  },
  {
    text: "¿Qué es la liquidez entrante (inbound liquidity)?",
    options: [
      "La cantidad de Bitcoin que puedes enviar desde tus canales activos",
      "La capacidad de tus canales para recibir pagos de otros nodos",
      "El total de fondos bloqueados en tus transacciones on-chain pendientes",
      "El monto de comisiones que cobras por enrutar pagos en tu nodo"
    ],
    correct: 1,
    explanation:
      "La liquidez entrante es el saldo del lado remoto de tus canales: lo que te pueden enviar. Un nuevo usuario que abre un canal hacia afuera tiene todo el saldo de su lado y cero liquidez entrante, por lo que no puede recibir pagos hasta que alguien abra un canal hacia él o pague primero."
  },
  {
    text: "¿Por qué un usuario nuevo en Lightning necesita liquidez entrante?",
    options: [
      "Porque los canales nuevos no enrutan pagos hasta las primeras 6 confirmaciones",
      "Porque sin saldo del lado remoto en sus canales no puede recibir pagos",
      "Porque los nodos nuevos quedan bloqueados durante las primeras 24 horas",
      "Porque el protocolo exige tener liquidez entrante para abrir el primer canal"
    ],
    correct: 1,
    explanation:
      "Cuando abres tu primer canal, todos los fondos quedan de tu lado. Para recibir pagos necesitas que haya saldo del lado de tu contraparte (liquidez entrante). Los LSPs resuelven esto abriendo canales hacia el usuario o usando canales JIT."
  },
  {
    text: "¿Qué es un canal JIT (Just-In-Time) en el contexto de un LSP?",
    options: [
      "Un canal que se abre automáticamente al recibir el primer pago entrante",
      "Un canal de alta velocidad con confirmaciones en menos de un segundo",
      "Un canal de emergencia que se activa solo cuando falla el principal",
      "Un canal temporal que se cierra automáticamente después de 24 horas"
    ],
    correct: 0,
    explanation:
      "Con un canal JIT, el LSP espera a que llegue un pago real al usuario antes de abrir el canal. El LSP intercepta el pago, abre el canal en ese momento, y lo entrega al usuario en la misma operación. El usuario recibe liquidez entrante exactamente cuando la necesita."
  },
  {
    text: "¿Qué es un wrapped invoice en el contexto de los LSPs?",
    options: [
      "Una factura enviada en formato cifrado para mayor privacidad del receptor",
      "Una factura re-empaquetada por el LSP para habilitar canales JIT",
      "Una factura con múltiples rutas de pago alternativas incluidas",
      "Una factura con monto flexible que el emisor puede ajustar al pagar"
    ],
    correct: 1,
    explanation:
      "Cuando un usuario sin liquidez entrante quiere recibir, el LSP genera un wrapped invoice: la factura original del usuario se re-empaqueta para que el pago llegue primero al LSP. El LSP entonces abre el canal JIT y reenvía el pago al usuario."
  },
  {
    text: "¿Qué diferencia principal hay entre un LSP y un exchange?",
    options: [
      "Los exchanges ofrecen tasas más bajas de comisión por transacción",
      "Un LSP provee liquidez y canales; un exchange convierte entre monedas",
      "Los LSPs requieren verificación de identidad y los exchanges no",
      "Un LSP solo trabaja con Bitcoin y un exchange con cualquier moneda"
    ],
    correct: 1,
    explanation:
      "Un exchange te permite comprar/vender Bitcoin o convertirlo a otras monedas. Un LSP, en cambio, te da infraestructura Lightning: canales, liquidez, conectividad y a veces enrutamiento. Algunos LSPs custodian fondos; otros son completamente no custodiales."
  },
  {
    text: "¿Qué es un canal 0-conf (zero confirmation) en el contexto de los LSPs?",
    options: [
      "Un canal que no requiere confirmaciones on-chain para usarse de inmediato",
      "Un canal que opera sin cobrar comisiones de enrutamiento a sus usuarios",
      "Un canal de prueba sin fondos reales en una red de testnet de Lightning",
      "Un canal que acepta pagos de cero satoshis como señal de disponibilidad"
    ],
    correct: 0,
    explanation:
      "Un canal 0-conf se puede usar para enviar y recibir pagos Lightning antes de que la transacción de apertura on-chain haya recibido confirmaciones. El usuario asume cierto riesgo (el LSP podría hacer double-spend), pero la experiencia es instantánea. Los LSPs de confianza lo ofrecen."
  },
  {
    text: "¿Qué establece el LSPS (LSP Specification)?",
    options: [
      "El algoritmo de consenso alternativo propuesto para reemplazar Lightning",
      "Un conjunto de protocolos estandarizados para la interoperabilidad entre LSPs",
      "El formato oficial de los estados de canal en la red Lightning global",
      "Las reglas de gobernanza y votación entre nodos de la red Lightning"
    ],
    correct: 1,
    explanation:
      "El LSPS es un conjunto de especificaciones abiertas (LSPS0, LSPS1, LSPS2…) que define cómo los clientes se comunican con los LSPs para solicitar canales, liquidez y otros servicios de forma estandarizada, sin depender de una implementación propietaria."
  }
];

module.exports = questions;
