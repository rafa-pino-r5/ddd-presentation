export interface SlideData {
  id: number;
  category: string;
  title: string;
  pitch: string;
  image?: string;
  patterns?: Array<{ title: string; description: string; image: string }>;
}

export const slides: SlideData[] = [
  {
    id: 1,
    category: 'intro',
    title: 'Introducción - Implementación efectiva de Domain-Driven Design',
    pitch: `> Domain-Driven Design (DDD) es una metodología fundamental para construir sistemas de seguros que realmente reflejen cómo funciona el negocio. DDD es una filosofía de desarrollo de software que se centra en el dominio del negocio y en la colaboración entre expertos del dominio y desarrolladores. Su objetivo principal es crear un modelo de software que refleje fielmente la complejidad del negocio.

**El Problema:** El Gap de Comunicación

_"El software a menudo falla porque existe una brecha de comunicación entre el negocio (quien entiende el problema) y la tecnología (quien construye la solución)."_

Esta guía introduce los conceptos para entender cómo aplicar DDD en el negocio de seguros, especialmente en productos como SOAT, donde la complejidad del dominio y las reglas de negocio que lo constityen requiere un modelado preciso.`,
  },
  {
    id: 2,
    category: 'intro',
    title: 'Introducción - El software que construimos debe representar el negocio',
    pitch: `**Principio Fundamental:**
"El software debe hablar el lenguaje del negocio."

> En el sector asegurador, el reto es enorme: Debemos construir software que represente fielmente procesos complejos como la cotización y  emisión de pólizas al usuario apropiado, el cálculo de primas, tarifas, comisiones, para el caso de las aseguradoras, la gestión de siniestros y el cumplimiento regulatorio. **El software no es solo código**, es una representación digital de cómo funciona el negocio de seguros. Si el código no refleja conceptos como "Tomador", "Asegurado", "Vigencia" o "Cobertura", "Póliza", "Vehículo", etc. se pierde  la oportunidad de que el software hable el mismo lenguaje que el negocio y por ende evolucione en armonía con el mismo.

**Ejemplo:**
Una aseguradora de SOAT procesa 60,000 pólizas mensuales. Si el código habla de "registros", "tablas" y "campos" en lugar de "pólizas", "tomadores" y "vehículos", los desarrolladores y expertos del negocio nunca se entenderán completamente.`,
  },
  {
    id: 3,
    category: 'intro',
    title: 'Introducción - ¿Qué es Domain-Driven Design?',
    pitch: `> Formulado por Eric Evans en 2003, DDD es una metodología que busca manejar la complejidad de las aplicaciones de negocio alineando el desarrollo de software con el dominio del negocio. En seguros, esto significa que tu arquitectura de software debe reflejar cómo realmente funciona la operación de emisión, renovación, siniestros y cumplimiento normativo.

**En el contexto de seguros:**
DDD te ayuda a construir sistemas donde conceptos como "Póliza SOAT", "Prima", "Tarifa", "Comisión", "Vehículo" y "Pago" son ciudadanos de primera clase en el código, no solo registros en una base de datos o en algún sistema de almacenamiento.`,
    image: '/images/ddd_book.jpg',
  },
  {
    id: 4,
    category: 'intro',
    title: 'Introducción - Estrategia vs Táctica',
    pitch: `> En las organizaciones existen dos tipos de personas: las que orientan, dirigen y establecen la estrategia y las que plantean la táctica.  DDD no es ageno a esta realidad y por eso contempla 2 dimensiones or niveles que son complementarios.

**Estratégico:**
- Metas a largo plazo: ¿Cómo estructurar toda la operación de seguros?
- Cómo alinear diferentes áreas: Venta, Emisión, Cancelación, Renovación, Pagos, Actualización, Cumplimiento, Ingresos, Egresos, Riesgos.
- Visión global del sistema. Entendiendo el negocio como un sistema.

**Táctico:**
- Pasos concretos: ¿Cómo implementar el modelo de venta y emisión de una póliza SOAT?
- Planes específicos: Patrones de diseño dentro de cada contexto
- Recursos concretos: Entities, Value Objects, Aggregates

**Ejemplo en seguros:**
- Estratégico: Decidir que "Emisión SOAT" y "Promoción y Venta" son contextos separados
- Táctico: Cómo modelar la entidad Póliza con sus atributos (Prima, Vigencia, Cobertura)`,
  },
  {
    id: 5,
    category: 'intro',
    title: 'Introducción - DDD in a Nutshell',
    pitch: `> Este mapa visual muestra todos los conceptos de DDD divididos en sus dos dimensiones. En la parte estratégica (inferior) vemos conceptos como Core Domain, Bounded Context, Context Map y los patrones de integración. En la parte táctica (superior) encontramos los building blocks: Entities, Value Objects, Aggregates, Repositories, Domain Events, Services y Factories.

**Para seguros:**
- **Estratégico:** Definir que "Gestión de Venta","Emisión SOAT" y "Cumplimiento SARLAFT" son contextos separados
- **Táctico:** Dentro de "Emisión SOAT", modelar la Póliza como un Aggregate con Entities (Póliza) y Value Objects (Prima, DatosVehiculo, Vigencia)`,
    image: '/images/ddd.png',
  },
  {
    id: 6,
    category: 'modeling',
    title: 'Proceso de Modelado - Domain-Driven Design Starter Modeling Process',
    pitch: `> Este diagrama muestra el proceso iterativo de DDD. Comenzamos alineando con el negocio (Align), descubrimos el dominio visualmente (Discover), lo descomponemos en subdominios (Decompose), identificamos el core diferenciador (Strategize), conectamos los subdominios (Connect), organizamos equipos (Organize), definimos responsabilidades (Define) y finalmente codificamos (Code).

**Los 8 Pasos del Proceso**

El proceso de modelado se compone de 8 pasos iterativos que pueden agruparse en 4 fases sociotécnicas:

1. **Align & Understand** (Alinear y Entender)
2. **Strategic Architecture** (Arquitectura Estratégica)
3. **Strategy & Org Design** (Estrategia y Diseño Organizacional)
4. **Tactical Architecture** (Arquitectura Táctica)

**En seguros:**
Para una aseguradora ó un broker de SOAT, comenzamos entendiendo las necesidades del negocio (vender 60K pólizas/mes), descubriendo procesos (cotización, validación RUNT, emisión, cobranza), descomponiendo en subdominios (Ventas, Emisión, Pagos, Cumplimiento), y finalmente implementando cada contexto con patrones tácticos.`,
    image: '/images/ddd-starter-modelling-process-colored.png',
  },
  {
    id: 7,
    category: 'modeling',
    title: 'Paso 1: Understand (Alineación)',
    pitch: `**Objetivo:** Alinear el enfoque con el modelo de negocio de la organización, las necesidades de los usuarios, y los objetivos a corto, mediano y largo plazo.

Toda decisión sobre arquitectura, código u organización tiene consecuencias empresariales y para los usuarios. Para diseñar y construir sistemas de software efectivamente, nuestras decisiones deben crear el impacto empresarial óptimo.

**Herramientas Recomendadas:**
- Impact Mapping
- The Business Model Canvas
- The Product Strategy Canvas
- Wardley Mapping
- User Story Mapping

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio
- Personas que entienden la estrategia de producto y negocio
- Usuarios finales reales`,
  },
  {
    id: 8,
    category: 'modeling',
    title: 'Paso 2: Discover (Descubrimiento)',
    pitch: `**Objetivo:** Descubrir el dominio visual y colaborativamente.

Este es el aspecto más crucial de DDD. No debe saltarse el descubrimiento. Si todo el equipo no construye una buena comprensión del dominio, todas las decisiones de software serán mal orientadas.

Difundir el conocimiento del dominio en todo el equipo crea una comprensión compartida, permitiendo que los desarrolladores construyan un sistema de software alineado con el dominio que sea más flexible para cambios empresariales futuros.

> **Principio Clave:** El descubrimiento es continuo. Los equipos exitosos con DDD practican técnicas de descubrimiento frecuentemente.

**Herramientas Recomendadas:**
- Domain Storytelling
- Example Mapping
- EventStorming
- User Journey Mapping
- User Story Mapping

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio
- Personas que entienden la estrategia de producto y negocio
- Personas que entienden las necesidades y problemas de los clientes
- Usuarios finales reales`,
  },
  {
    id: 9,
    category: 'modeling',
    title: 'Paso 3: Decompose (Descomposición)',
    pitch: `**Objetivo:** Descomponer el dominio en subdominios débilmente acoplados.

Descomponemos un dominio problemático grande en subdominios por razones clave:
- **Reducir la carga cognitiva:** Razonar sobre partes del dominio independientemente
- **Dar autonomía a los equipos:** Trabajar en partes separadas de la solución
- **Identificar acoplamiento débil y alta cohesión:** Que se traslada a la arquitectura de software y estructura de equipos

**Herramientas Recomendadas:**
- Business Capability Modelling
- Design Heuristics
- EventStorming con subdominios
- Independent Service Heuristics
- Visualizing Sociotechnical Architecture with Context Maps

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio`,
  },
  {
    id: 10,
    category: 'modeling',
    title: 'Paso 4: Strategize (Estrategia)',
    pitch: `**Objetivo:** Mapear estratégicamente tus subdominios para identificar dominios centrales (Core Domains).

El tiempo y los recursos son limitados, por lo que entender qué partes del dominio enfocarse es crítico para entregar el impacto empresarial óptimo.

> Analizando los dominios centrales, es posible tener una mejor idea de cuánta calidad y rigor se requiere para construir cada parte del sistema, permitiendo decisiones informadas de construir vs comprar vs externalizar.

**Herramientas Recomendadas:**
- Core Domain Charts
- Purpose Alignment Model
- Wardley Mapping

**Participantes:**
- Personas que entienden la estrategia de producto y negocio
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio`,
  },
  {
    id: 11,
    category: 'modeling',
    title: 'Paso 5: Connect (Conectar)',
    pitch: `**Objetivo:** Conectar los subdominios en una arquitectura débilmente acoplada que cumpla casos de uso empresariales de extremo a extremo.

> Es imperativo no solo descomponer un dominio grande en partes, sino también diseñar cuidadosamente las interacciones entre esas partes para minimizar el acoplamiento no deseado y la complejidad.

**Herramientas Recomendadas:**
- Business Process Model and Notation
- Domain Message Flow Modelling
- Process Modelling EventStorming
- Sequence Diagrams

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio`,
  },
  {
    id: 12,
    category: 'modeling',
    title: 'Paso 6: Organize (Organización)',
    pitch: `**Objetivo:** Organizar equipos autónomos optimizados para flujo rápido y alineados con límites de contextos.

Los equipos necesitan organizarse para tener autonomía, objetivos claros y sentido de propósito. Para lograr esto, debemos considerar restricciones organizacionales para que los equipos se organicen para flujo rápido.

Optimizar cómo colaboran las personas requiere alinear equipos con límites de contextos, considerando talento disponible, carga cognitiva, sobrecarga de comunicación y factor de autobús.

> **Principio Clave:** La organización no se hace a los equipos, sino que los equipos deben participar en definir sus límites, interacciones y responsabilidades.

**Herramientas Recomendadas:**
- Dynamic Reteaming
- Explorers, Villagers & Town Planners
- Team Topologies
- Visualizing Sociotechnical Architecture with Context Maps

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio
- Personas que entienden la estrategia de producto y negocio`,
  },
  {
    id: 13,
    category: 'modeling',
    title: 'Paso 7: Define (Definición)',
    pitch: `**Objetivo:** Definir los roles y responsabilidades de cada contexto delimitado.

Antes de comprometerse con un diseño, haz explícitas las decisiones que pueden tener impacto significativo en el diseño general. Ten estas conversaciones temprano mientras sea fácil cambiar de opinión y explorar modelos alternativos.

> Es importante diseñar colaborativa y visualmente, comenzando a considerar limitaciones técnicas para descubrir restricciones u oportunidades.

**Herramientas Recomendadas:**
- Bounded Context Canvas
- C4 System Context Diagram
- Quality Storming

**Participantes:**
- Personas que diseñan, construyen y prueban software
- Personas con conocimiento del dominio
- Personas responsables del producto`,
  },
  {
    id: 14,
    category: 'modeling',
    title: 'Paso 8: Code (Codificación)',
    pitch: `**Objetivo:** Codificar el modelo de dominio.

Alinear el código con el dominio lo hace más fácil de cambiar cuando el dominio cambia. Al modelar colaborativamente el espacio del problema con expertos, los desarrolladores tienen la oportunidad de aprender sobre el dominio y minimizar malentendidos.

**Herramientas Recomendadas:**
- Aggregate Design Canvas
- C4 Component Diagrams
- Design-Level EventStorming
- Event Modeling
- Hexagonal Architecture
- Mob Programming
- Model Exploration Whirlpool
- Onion Architecture
- Unified Modelling Language

**Participantes:**
- Personas que diseñan, construyen y prueban software`,
  },
  {
    id: 15,
    category: 'strategic',
    title: 'DDD Estratégico - Experto de dominio',
    pitch: `> El experto de dominio es quien realmente entiende cómo funciona el negocio de seguros, especialmente de brokering. No es necesariamente quien usa el sistema diariamente (operador de emisión), sino quien comprende las reglas del negocio, las regulaciones de Superfinanciera, y los conceptos clave del dominio asegurador.

**Ejemplo en SOAT:**
- ✅ Un especialista en productos de seguros que entiende cómo se calculan las primas según tipo de vehículo y zona
- ✅ Un actuario que conoce las tablas de riesgo
- ❌ Un operador de call center que solo captura datos en el sistema`,
  },
  {
    id: 16,
    category: 'strategic',
    title: 'DDD Estratégico - Tipos de Subdominios',
    pitch: `> No todos los subdominios son igual de importantes. DDD los clasifica en tres tipos:

**Core Domain:**
El diferenciador de tu negocio. En una aseguradora SOAT, podría ser:
- Emisión automatizada ultra-rápida (60K pólizas/mes)
- Motor de cálculo de primas optimizado
- Prevención de fraude con ML

**Supporting (De Soporte):**
Funciones directamente relacionadas al negocio, pero no diferenciadoras:
- Gestión de clientes (CRM)
- Portal de autoservicio
- Notificaciones

**Generic (Genérico):**
Capacidades que cualquier organización necesita:
- Autenticación y autorización
- Auditoría
- Métricas y logging
- Sistema de pagos

**Estrategia de inversión:**
Invierte el 70% de tu esfuerzo en el Core, 20% en Supporting, 10% en Generic (considera comprar o usar SaaS para lo genérico).`,
  },
  {
    id: 17,
    category: 'strategic',
    title: 'DDD Estratégico - Core Domain Chart',
    pitch: `Este gráfico permite clasificar subdominios en dos dimensiones:

**Eje Y (Model Complexity):** ¿Qué tan complejo es el modelo?
**Eje X (Business Differentiation):** ¿Qué tanto diferencia tu negocio?

**Cuadrantes:**
- **CORE:** Alta complejidad + Alta diferenciación → Tu ventaja competitiva
- **SUPPORTING:** Baja-Media complejidad + Media-Alta diferenciación → Importante pero no crítico
- **GENERIC:** Baja complejidad + Baja diferenciación → Compra o terceriza

**Ejemplo:**
- **CORE:** Motor de cálculo de primas con reglas complejas + optimización de velocidad de emisión
- **SUPPORTING:** Portal de autoemisión para clientes finales
- **GENERIC:** Sistema de notificaciones por email/SMS`,
    image: '/images/core-domain-chart.jpg',
  },
  {
    id: 18,
    category: 'strategic',
    title: 'DDD Estratégico - Lenguaje Ubicuo (Ubiquitous Language)',
    pitch: `> El mismo concepto puede significar cosas diferentes según el contexto. En seguros, una "póliza" significa una cosa en Emisión (un contrato a emitir), otra en Contabilidad (un ingreso a registrar), y otra en Siniestros (una cobertura a validar). El lenguaje ubicuo busca que dentro de cada contexto delimitado, todos usen los mismos términos con el mismo significado.

**Ejemplo:**
En el contexto de "Emisión SOAT":
- **Tomador:** Persona que contrata el seguro
- **Asegurado:** Persona cubierta por el seguro
- **Vehículo Asegurable:** Vehículo que cumple requisitos para ser asegurado
- **Prima:** Valor a pagar por la cobertura
- **Vigencia:** Período de cobertura del seguro

Estos términos deben usarse consistentemente en conversaciones, código, documentos y la base de datos (mecanismos de persistencia de datos).`,
  },
  {
    id: 19,
    category: 'strategic',
    title: 'DDD Estratégico - Bounded Context (Contextos Delimitados)',
    pitch: `> Un Bounded Context es un límite explícito donde el lenguaje ubicuo es consistente. Dentro de ese límite, los conceptos tienen significado claro y no ambiguo. En seguros, "Emisión SOAT" es un contexto diferente a "Gestión de Siniestros", aunque ambos trabajen con pólizas.

Un Contexto Delimitado (BC) es una frontera lógica dentro de la cual un modelo de dominio particular es consistente y único.

**Componentes:**
- Frontera: Define dónde termina un modelo y comienza otro.
- Coherencia conceptual: Todos entienden lo mismo por "Póliza Vigente"
- Vocabulario común: Tomador, Asegurado, Prima, Cobertura
- Aislamiento: Los modelos en diferentes BCs pueden usar el mismo término para significar cosas diferentes., No comparten código ni base de datos con otros contextos

**Ejemplo:**
- En "Emisión SOAT", una póliza puede estar en estados: Cotizada, Pagada, Emitida.
- En "Gestión de Siniestros", una póliza solo existe si está Vigente o Vencida.
Estas son dos vistas diferentes del mismo concepto de negocio.`,
  },
  {
    id: 20,
    category: 'strategic',
    title: 'DDD Estratégico - Context Map (Mapa de Contextos)',
    pitch: `> Una vez identificados los Bounded Contexts, se deben describir cómo estos se relacionan. El Context Map visualiza las dependencias y patrones de integración/interacción entre contextos. En una aseguradora, "Emisión SOAT" debe comunicarse con "Cobranza", "Validación RUNT" y "Reportes a Superfinanciera".

**Ejemplo:**
- **Emisión SOAT** → **Cobranza**: Cuando se emite una póliza, se notifica a cobranza
- **Emisión SOAT** → **RUNT** (sistema externo): Para validar datos del vehículo
- **Emisión SOAT** → **Reportes Regulatorios**: Para cumplimiento con Superfinanciera`,
    image: '/images/ContextMap-Illustration-1.png',
  },
  {
    id: 21,
    category: 'strategic',
    title: 'DDD Estratégico - Patrones de conexión/integración entre contextos',
    pitch: `> No todos los contextos se relacionan igual. DDD define patrones específicos para integración. Cada patrón resuelve un tipo específico de relación.`,
    patterns: [
      {
        title: 'Customer/Supplier (Cliente/Proveedor)',
        description: 'Un contexto es cliente del otro. El proveedor define la interfaz que el cliente necesita.',
        image: '/images/customer-supplier.jpg',
      },
      {
        title: 'Conformist (Conformista)',
        description: 'El contexto cliente se adapta al modelo del proveedor sin negociar.',
        image: '/images/cf.jpg',
      },
      {
        title: 'Anti-Corruption Layer (ACL)',
        description: 'Capa de traducción que protege el modelo propio del cliente de cambios externos.',
        image: '/images/acl.jpg',
      },
      {
        title: 'Shared Kernel (Núcleo Compartido)',
        description: 'Ambos contextos comparten un modelo común. Cambios requieren coordinación.',
        image: '/images/shared-kernel.jpg',
      },
      {
        title: 'Partnership',
        description: 'Dos contextos colaboran en igualdad de condiciones para resolver problemas comunes.',
        image: '/images/partnership.jpg',
      },
      {
        title: 'Published Language',
        description: 'Se define un lenguaje común publicado para la comunicación entre contextos.',
        image: '/images/published-language.jpg',
      },
      {
        title: 'Open Host Service',
        description: 'El contexto proveedor expone un servicio abierto para múltiples clientes.',
        image: '/images/ohs.jpg',
      },
      {
        title: 'Separate Ways',
        description: 'Los contextos son completamente independientes. No hay integración.',
        image: '/images/separate-ways.jpg',
      },
      {
        title: 'Big Ball of Mud',
        description: 'Contextos sin fronteras claras. Situación a evitar en nuevos diseños.',
        image: '/images/bbom.jpg',
      },
    ],
  },
  {
    id: 22,
    category: 'strategic',
    title: 'DDD Estratégico - Relaciones entre equipos',
    pitch: `Los contextos delimitados están representados por equipos. Cada equipo tiene un objetivo y una responsabilidad clara en función y con los demás.

En DDD, existen 3 tipos de relaciones:
- **Upstream/Downstream:** Dependencia unidireccional
- **Mutually Dependent (Mutua dependencia):** Dependencia bidireccional
- **Free (Independencia):** Sin dependencias`,
    patterns: [
      {
        title: 'Ejemplo 1',
        description: 'Mapa de equipos mostrando relaciones upstream/downstream y dependencias mutuas',
        image: '/images/TeamMap-Illustration-1.png',
      },
      {
        title: 'Ejemplo 2',
        description: 'Otro ejemplo de mapa de equipos con diferentes patrones de colaboración',
        image: '/images/TeamMap-Illustration-2.png',
      },
    ],
  },
  {
    id: 23,
    category: 'strategic',
    title: 'DDD Estratégico - Relaciones entre equipos - Mutuamente dependientes',
    image: '/images/mutual-dependent.jpg',
    pitch: `> Cuando dos equipos trabajan en contextos que deben entregarse juntos, tienen una relación de **mutua dependencia**. Sus artefactos de software necesitan desplegarse conjuntamente para funcionar correctamente.

Dos equipos dependen mutuamente el uno del otro. Requiere coordinación constante.

**Ejemplo SOAT:**
El equipo de "Emisión Web" y el equipo de "Emisión App Móvil" podrían ser mutuamente dependientes si comparten el mismo motor de reglas de negocio para cálculo de tarifas y comisiones.`,
  },
  {
    id: 24,
    category: 'strategic',
    title: 'DDD Estratégico - Upstream/Downstream',
    image: '/images/upstream-downstream.jpg',
    pitch: `> En una relación Upstream/Downstream, las acciones del equipo aguas arriba (upstream) afectan al equipo aguas abajo (downstream), pero no al revés. El equipo upstream es agnóstico a lo que haga el downstream.

Un equipo (upstream) proporciona servicios que otro equipo (downstream) consume.

**Ejemplo asegurador:**
- **Upstream:** Sistema de "Tarifas y Productos" que define las primas de SOAT
- **Downstream:** Sistema de "Emisión" que consume esas tarifas

Si Tarifas cambia la estructura de sus datos, Emisión debe adaptarse.`,
  },
  {
    id: 25,
    category: 'strategic',
    title: 'DDD Estratégico - Free (Relación Libre)',
    image: '/images/free.jpg',
    pitch: `> Dos contextos tienen una relación **Free** cuando no tienen ninguna dependencia técnica ni funcional entre ellos. Los cambios en uno no afectan al otro.

Los equipos son independientes. Pueden trabajar sin coordinación.

**Ejemplo:**
El contexto de "Emisión SOAT" y el contexto de "Seguros de Vida" son completamente independientes.`,
  },
  {
    id: 26,
    category: 'tactical',
    title: 'DDD Táctico: Los bloques de Construcción',
    pitch: `> DDD propone 5 bloques de construcción principales que forman el núcleo del modelo de software. Cada bloque tiene un propósito específico y se usa en diferentes contextos.

**Domain Events:**
Algo significativo que ocurrió en el dominio.
Ejemplos: PólizaEmitida, SiniestroReportado

**Entidades:**
Tienen identidad única y persistente (ej. Póliza, Cliente).

**Value Objects:**
Se definen por sus atributos, no por identidad (ej. Dirección, Prima).
Son inmutables.

**Agregados:**
Cluster de Entidades y Value Objects tratados como unidad.

**Patrones adicionales:**
- Factories
- Repositories`,
  },
  {
    id: 27,
    category: 'tactical',
    title: 'DDD Táctico - Patrones de integración',
    pitch: `> A continuación veremos los patrones específicos que DDD propone para conectar contextos delimitados. Estos patrones son como un vocabulario común para describir las relaciones entre sistemas.`,
  },
  {
    id: 28,
    category: 'tactical',
    title: 'DDD Táctico - Open Host Service',
    image: '/images/ohs.jpg',
    pitch: `> Un Open Host Service es un protocolo que expone un subsistema como un conjunto de servicios, generalmente en posición upstream. Múltiples clientes downstream pueden consumir estos servicios.

**Ejemplo SOAT:**
El contexto de "Emisión SOAT" podría exponer endpoints como:
- \`POST /api/polizas\` - Emitir póliza
- \`GET /api/polizas/{id}\` - Consultar póliza

Consumidores: Portal Web, App móvil, Call center, Partners`,
  },
  {
    id: 29,
    category: 'tactical',
    title: 'DDD Táctico - Conformist (Conformista)',
    image: '/images/cf.jpg',
    pitch: `> El patrón Conformist elimina la complejidad de traducir entre contextos al someterse completamente al modelo del equipo upstream. Simplifica la integración, pero se pierde control sobre el modelo interno.

**Ejemplo en seguros:**
El sistema de "Emisión SOAT" adopta el modelo de la pasarela de pagos sin traducción.

**Trade-off:** Se gana simplicidad, se pierde expresividad en el dominio.`,
  },
  {
    id: 30,
    category: 'tactical',
    title: 'DDD Táctico - Anti-Corruption Layer (ACL)',
    image: '/images/acl.jpg',
    pitch: `> Un ACL es una capa de traducción que protege el modelo de dominio de ser contaminado por sistemas externos. Es especialmente útil cuando se requieren integraciones con sistemas legacy o con modelos pobres.

**Ejemplo SOAT con RUNT:**
El RUNT (Registro Único Nacional de Tránsito) tiene un modelo legacy con campos como:
- \`PLACA_VEHICULO\`
- \`COD_TIPO_VEH\`
- \`NOM_PROPIETARIO_1\`, \`NOM_PROPIETARIO_2\`

Un ACL traduciría esto a tu modelo limpio:

\`\`\`typescript
// RUNT → Tu Modelo
{
  placa: "ABC123",
  tipo: TipoVehiculo.AUTOMOVIL,
  propietario: new Propietario({
    nombreCompleto: "Juan Pérez"
  })
}
\`\`\`

El dominio SOAT nunca ve el modelo del RUNT.`,
  },
  {
    id: 31,
    category: 'tactical',
    title: 'DDD Táctico - Shared Kernel (Núcleo Compartido)',
    image: '/images/shared-kernel.jpg',
    pitch: `> Un Shared Kernel es un subset del modelo de dominio que dos equipos/contexto acuerdan compartir, incluyendo código o el diseño de base de datos. Requiere alta coordinación pero reduce duplicación.

**Ejemplo:**
Los contextos "Emisión SOAT" y "Renovación SOAT" comparten:
- Modelo de datos de Vehículo
- Value Objects de Vigencia
- Reglas de validación de placa

Ambos equipos acuerdan que cualquier cambio requiere aprobación mutua.`,
  },
  {
    id: 32,
    category: 'tactical',
    title: 'DDD Táctico - Partnership',
    image: '/images/partnership.jpg',
    pitch: `> En un Partnership, dos equipos tienen una dependencia bidireccional donde el fallo de cualquiera causa el fallo del otro. Las funcionalidades interdependientes deben coordinarse para entregas conjuntas.

**Ejemplo:**
El equipo de "Cotizador Multiaseguradora" (que integra precios de Varias Aseguradoras) y el equipo de "Pricing y Comisiones" tienen un Partnership:
- Cotizador no puede ofrecer una nueva aseguradora sin que Pricing y Comisiones tenga configuradas las reglas de comisión para ese proveedor
- Pricing y Comisiones no puede modificar su estructura de comisiones sin que Cotizador actualice cómo presenta el precio final al cliente (prima + comisión broker + fees transaccionales)
- Si Pricing y Comisiones falla al calcular la comisión, Cotizador no puede cerrar la venta (no sabe qué cobrarle al cliente)
- Ambos coordinan releases cuando hay cambios en modelos de comisión o nuevos convenios con aseguradoras

**Dependencia bidireccional:** Ni Cotizador puede vender sin saber comisiones, ni Pricing y Comisiones puede cobrar sin datos de la cotización confirmada.`,
  },
  {
    id: 33,
    category: 'tactical',
    title: 'DDD Táctico - Published Language',
    image: '/images/published-language.jpg',
    pitch: `> Published Language es un lenguaje común bien documentado que formaliza la traducción entre contextos. Usualmente se combina con Open Host Service.

**Ejemplo:**
El contexto de "Emisión SOAT" podría publicar un contrato JSON Schema que define exactamente cómo se representa una póliza:

\`\`\`json
{
  "poliza": {
    "numero": "string",
    "tomador": {
      "tipoDocumento": "CC|NIT|CE",
      "numeroDocumento": "string",
      "nombreCompleto": "string"
    },
    "vehiculo": {
      "placa": "string",
      "clase": "AUTOMOVIL|MOTOCICLETA|..."
    },
    "vigencia": {
      "inicio": "ISO-8601",
      "fin": "ISO-8601"
    }
  }
}
\`\`\`

Este Published Language sirve como contrato formal con todos los consumidores.`,
  },
  {
    id: 34,
    category: 'tactical',
    title: 'DDD Táctico - Big Ball of Mud',
    image: '/images/bbom.jpg',
    pitch: `> Un Big Ball of Mud es una parte del sistema con modelos mezclados y límites inconsistentes. Debe identificarse y aislarse para evitar que contamine otros contextos.

**Ejemplo:**
Sistema legacy mainframe que maneja pólizas, contabilidad, cobranza, todo mezclado en COBOL.

**Estrategia:**
1. Identificarlo en el Context Map
2. Crear ACLs para integraciones
3. No arreglarlo, solo aislarlo y reemplazarlo gradualmente`,
  },
  {
    id: 35,
    category: 'tools',
    title: 'Herramientas DDD - Event Storming',
    pitch: `> Event Storming es una técnica de taller colaborativo creada por Alberto Brandolini. Se usan post-its de colores en una pared larga para descubrir el dominio visualmente. Es especialmente útil para:
> - Entender procesos de negocio complejos
> - Identificar eventos importantes del dominio
> - Descubrir bounded contexts
> - Alinear equipos técnicos con expertos de negocio

**Fases:**
1. **Big Picture:** Visión general del dominio
2. **Process Modeling:** Detalle de procesos específicos
3. **Software Design:** Identificación de agregados`,
    image: '/images/bigpicture-event-storming.png',
  },
  {
    id: 36,
    category: 'tools',
    title: 'Herramientas DDD - Elementos de Event Storming',
    pitch: `> Event Storming usa una notación visual con post-its de colores:

**🟧 Domain Event (Naranja):**
Algo que pasó. Verbo en pasado.
Ejemplos: "PólizaEmitida", "PagoRecibido"

**🟦 Command (Azul):**
Intención. Verbo en imperativo.
Ejemplos: "EmitirPóliza", "ValidarVehiculo"

**🟨 Actor (Amarillo):**
Quien ejecuta un comando.
Ejemplos: "Cliente", "AgenteSeguros"

**🟪 Policy (Lila):**
Regla de negocio automática.

**🟩 Read Model (Verde):**
Información necesaria para decisiones.

**🟥 Hot Spot (Morado):**
Conflicto o incertidumbre.`,
    image: '/images/elements-event-storming.png',
  },
  {
    id: 37,
    category: 'tools',
    title: 'Herramientas DDD - Políticas, Comandos y Read Models',
    pitch: `**🟣 Políticas:**
Se colocan entre un evento y un comando. Representan reglas de negocio.

**🔵 Comandos:**
Pueden ser manuales (actor) o automáticos (política).

**🟢 Query Model:**
Información necesaria para tomar decisiones.

Ejemplo: Para "AprobarEmisión", se necesita "ResultadoValidaciónRUNT"`,
  },
  {
    id: 38,
    category: 'tools',
    title: 'Herramientas DDD - Software Design Picture',
    pitch: `> Este diagrama muestra el flujo completo con todos los elementos conectados. Representa cómo un proceso de negocio se traduce en un flujo de comandos, eventos, políticas y consultas.

**Lectura del flujo:**
1. Actor observa información (Read Model)
2. Actor ejecuta un comando
3. Comando puede invocar sistema externo
4. Sistema produce un Domain Event
5. Event puede activar una Policy
6. Policy genera nuevo comando`,
    image: '/images/software-picture.jpg',
  },
  {
    id: 39,
    category: 'tools',
    title: 'Herramientas DDD - Agregados (Aggregates)',
    pitch: `> Un Aggregate es un cluster de objetos del dominio (entities y value objects) que se tratan como una unidad para cambios de datos. El aggregate tiene una entidad raíz (Aggregate Root) que es el único punto de entrada.

**Responsabilidades:**
- Recibe comandos
- Valida reglas de negocio (invariantes)
- Produce Domain Events
- Agrupa eventos relacionados

Todo acceso se hace a través de la raíz del agregado.`,
  },
  {
    id: 40,
    category: 'tools',
    title: 'Herramientas DDD - Aggregate Design Canvas',
    pitch: `> El Aggregate Design Canvas es una herramienta para diseñar agregados de forma estructurada. Contiene 9 secciones:

1. **Name:** Nombre del aggregate
2. **Description:** Responsabilidad
3. **State Transitions:** Diagrama de estados
4. **Enforced Invariants:** Reglas de negocio
5. **Corrective Policies:** Qué hacer cuando falla
6. **Handled Commands:** Comandos que procesa
7. **Created Events:** Eventos que emite
8. **Throughput:** Métricas de rendimiento
9. **Size:** Tamaño estimado`,
    image: '/images/aggregate-design-canvas-v1.1.png',
  },
  {
    id: 41,
    category: 'tools',
    title: 'Ejemplo Aggregate Design Canvas - Póliza SOAT',
    pitch: `**1. Name:** Póliza SOAT

**2. Description:**
Contrato de seguro SOAT que cubre responsabilidad civil.

**3. State Transitions:**
Cotizada → Pagada → Emitida → Vigente → Vencida (o Cancelada)

**4. Enforced Invariants:**
- Póliza solo se emite si pago confirmado
- Vigencia exactamente 1 año
- Vehículo validado en RUNT
- No duplicados

**5. Handled Commands:**
CotizarPóliza, EmitirPóliza, CancelarPóliza, EndosarPóliza

**6. Created Events:**
PólizaCotizada, PólizaEmitida, PólizaCancelada, PólizaVencida`,
  },
  {
    id: 42,
    category: 'tools',
    title: 'Herramientas DDD - Aggregates agrupados en Bounded Context',
    pitch: `> Los agregados no viven aislados. Se agrupan dentro de bounded contexts según cohesión funcional.

**Bounded Context "Emisión SOAT":**
- Aggregate: Cotización
- Aggregate: Póliza
- Aggregate: Validación

**Bounded Context "Gestión Siniestros":**
- Aggregate: Siniestro
- Aggregate: Peritaje
- Aggregate: Indemnización`,
  },
  {
    id: 43,
    category: 'tools',
    title: 'Herramientas DDD - Entity vs Value Object',
    pitch: `**Entity:**
- Identidad única constante
- Es mutable
- Tiene ciclo de vida propio
- Ejemplo: Póliza SOAT con ID \`POL-SOAT-2025-000123\`

**Value Object:**
- Identidad por su valor
- Es inmutable
- No tiene ciclo de vida independiente
- Ejemplos: \`Prima(250000, 'COP')\`, \`Vigencia('2025-01-01', '2026-01-01')\`, \`Placa('ABC123')\`

Si cambias la prima, creas un nuevo Value Object, no modificas el existente.`,
  },
  {
    id: 44,
    category: 'tools',
    title: 'Herramientas DDD - Aggregate Root (Entidad Raíz)',
    pitch: `La Aggregate Root es la entidad principal y el único punto de acceso al agregado.

**Principios:**
- Todo uso de elementos internos se hace a través de la raíz
- Garantiza "Least Knowledge" (Ley de Demeter)
- Reduce acoplamiento
- Controla consistencia transaccional

**Ejemplo:**
Nadie fuera del aggregate puede acceder directamente a \`vehiculo\` o \`coberturas\`. Todo pasa por la raíz Póliza.`,
  },
  {
    id: 45,
    category: 'tools',
    title: 'Herramientas DDD - Nunca comunicar dos agregados directamente',
    pitch: `> **Regla de oro:** Un aggregate nunca debe tener una referencia directa a otro aggregate. Solo debe guardar el ID del otro aggregate.

**❌ Incorrecto:**
\`\`\`typescript
class PolizaSOAT {
  private cliente: Cliente; // Referencia directa
}
\`\`\`

**✅ Correcto:**
\`\`\`typescript
class PolizaSOAT {
  private clienteId: ClienteId; // Solo el ID
}
\`\`\`

**Razones:**
- Evita cargas innecesarias
- Límites transaccionales claros
- Reduce acoplamiento
- Facilita distribución`,
  },
  {
    id: 46,
    category: 'conclusions',
    title: 'Conclusión',
    pitch: `> Domain-Driven Design no es solo una técnica de programación, es una filosofía de diseño que pone el dominio del negocio en el centro.

**Nivel Estratégico:**
- Define bounded contexts claros
- Mapea integraciones
- Identifica tu Core Domain

**Nivel Táctico:**
- Modela agregados ricos
- Usa Value Objects
- Captura eventos del dominio
- Aplica patrones probados

**El resultado:**
Software que habla el lenguaje del negocio de seguros, es mantenible, escalable y representa cómo funciona tu operación.`,
  },
  {
    id: 47,
    category: 'glossary',
    title: 'Glosario de Términos de Seguros',
    pitch: `**Términos SOAT específicos:**
- **SOAT:** Seguro Obligatorio de Accidentes de Tránsito
- **Tomador:** Persona que contrata el seguro
- **Asegurado:** Persona cubierta por el seguro
- **Prima:** Valor a pagar por la cobertura
- **Vigencia:** Período de cobertura (1 año para SOAT)
- **Endoso:** Modificación a una póliza ya emitida
- **RUNT:** Registro Único Nacional de Tránsito
- **FOSYGA:** Fondo de Solidaridad y Garantía

**Términos regulatorios:**
- **Superfinanciera:** Superintendencia Financiera de Colombia
- **SARLAFT:** Sistema de Administración del Riesgo de Lavado de Activos
- **SARO:** Sistema de Administración de Riesgo Operativo`,
  },
];
