---
title: Precios
description: La mayor parte de Wink es gratis. Pagas una pequeña comisión por reserva y una tarifa de uso según consumo en algunas funciones premium.
sidebar:
  order: 4
---

Wink no tiene suscripciones, ni plazas ni tarifas de configuración. La gran mayoría de la plataforma es gratuita, y solo hay dos cosas por las que pagarás:

1. **Un pequeño porcentaje por reserva** — solo cuando realmente ganas dinero.
2. **Tarifas de uso según consumo** — en algunas funciones premium que nos cuestan dinero cada vez que se usan, cada una con una asignación mensual gratuita.

## Qué es gratis

Estos no cuestan nada, nunca, sin asignación ni medición:

- El **motor de reservas** — en tu propio sitio, en tu página WinkLinks o en cualquier otro lugar donde lo incrustes.
- **Gestión de propiedades** — contenido, fotos, tarifas, planes tarifarios, disponibilidad, promociones y políticas.
- **Herramientas para afiliados** — enlaces compartibles, listas seleccionadas, cuadrículas, mapas, tarjetas y widgets embebibles.
- **Herramientas para agentes de viajes** — búsqueda, tarifas personalizadas y reservas en nombre de tus clientes.
- **WinkLinks** — reclama tu URL personalizada, crea tu página y publícala tantas veces como quieras.
- **Publicaciones sociales manuales** — cualquier cosa que escribas tú mismo, en cualquier red conectada.
- **Analíticas, tablas de clasificación, reclamaciones, configuraciones** y gestión de cuenta.
- Las **APIs de consumidor y motor de reservas**, además de los endpoints de búsqueda y autocompletado.

## Reservas

Wink soporta tanto el modelo de comerciante como el de agente.

### Modelo 1

Wink es el comerciante registrado en el momento en que se realiza la reserva. Wink es responsable de los fondos y posee todas las licencias necesarias para operar una agencia de viajes.
Este modelo aplica al 95% de todas las reservas.

Wink cobra un `5.5% por reserva` para mantener la plataforma.
La mayor parte va al gateway de pago (Visa, MasterCard, etc.). Una reserva promedio nos cuesta `2.95%` adquirir; a veces hasta `3.6%`. Los reembolsos parciales nos afectan más porque el gateway de pago lo considera un nuevo cargo.
Queremos ser completamente transparentes con los precios desde ahora para ahorrar tiempo a todos antes de intentar negociar descuentos adicionales sin haber usado Wink. Nuestro modelo de precios es más que justo y también necesitamos ganarnos la vida.

#### Desglose

:::note[Tarifa de procesamiento]
Wink cobra una tarifa de procesamiento del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba de forma gratuita.
:::

:::note[Tarifa de pago]
TripPay cobra una tarifa de pago del 4.0% por reserva. Esto cubre la adquisición del pago del viajero.
:::

:::note[Desembolso de fondos]
Hay tarifas asociadas con el envío de fondos a tu cuenta. Esto depende del método de desembolso que elijas. Actualmente soportamos:

- **Transferencia bancaria** El costo depende del país donde te encuentres y de dónde se envíen los fondos. Incluimos una calculadora de cotizaciones que puedes usar cuando tengas fondos disponibles en tu cuenta.

Si quieres que soportemos otro método de pago, envíanos un correo electrónico.
:::

### Modelo 2

Este modelo está disponible solo para agencias de viajes que posean licencia de agencia de viajes en su región y que deseen ser el comerciante registrado. Algunos de nuestros agentes de viajes registrados quieren ser responsables de manejar el pago y el desembolso de fondos a los hoteles. Bajo este modelo, ellos son responsables de los fondos y poseen las licencias necesarias para operar en su país.

#### Desglose

:::note[Tarifa de procesamiento]
Wink cobra una tarifa de procesamiento del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba de forma gratuita.
:::

Con este modelo, los agentes de viajes solo pagan la tarifa de procesamiento de Wink y Wink facturará al agente de viajes mensualmente.

## Uso (pago según consumo)

Algunas funciones nos cuestan dinero cada vez que se usan — IA generativa, APIs sociales de terceros y ofrecer precios en vivo a gran escala. En lugar de incluirlas en un plan mensual que tal vez no uses, pagas solo por lo que realmente consumes, y solo después de agotar una asignación mensual gratuita.

| Función | Gratis por mes | Luego | Unidad facturada |
| -- | -- | -- | -- |
| Publicación social — imagen | 1 | $1.50 | Una publicación publicada |
| Publicación social — imagen generada por IA | 0 | $2.50 | Una publicación publicada |
| Publicación social — video mejorado por IA | 0 | $4.00 | Una publicación publicada |
| Publicación social — video generado por IA | 0 | $14.00 | Una publicación publicada |
| Respuesta IA a un comentario o DM | 5 | $0.05 | Una respuesta |
| Respuesta de chatbot | 5 | $0.05 | Una respuesta |
| API de socios | 10,000 | $0.0001 | Un hotel-día |

Los precios están en USD. La asignación gratuita se otorga **por cuenta**, no por usuario, y se reinicia el día 1 de cada mes (UTC).

### Cómo se valoran las publicaciones

Las publicaciones se valoran según lo que contienen, porque eso es lo que nos cuesta producirlas. Una imagen fija es barata; un video no; cualquier cosa generada con IA cuesta materialmente más que una foto que tú mismo hayas proporcionado.

- **La asignación gratuita cubre solo publicaciones con imágenes estándar.** Obtienes una por cuenta al mes. Las publicaciones de video y medios generados por IA se facturan desde la primera publicación — no hay asignación gratuita en esos niveles, por lo que una propiedad que publique video debe esperar un cargo en su primer mes.
- **El video gana.** Si una publicación contiene cualquier video, toda la publicación se factura a la tarifa de video. Una publicación que mezcla imagen y video es una publicación de video.
- **La procedencia IA determina el nivel.** Los medios que tú suministras — tus propias fotos y videos, o cualquier cosa de tu biblioteca de contenido Wink — se facturan a la tarifa estándar. Los medios que generamos para ti se facturan a la tarifa IA.

### Qué se mide y qué no

- Solo una publicación **generada** y publicada en una red de terceros (Facebook, Instagram) es facturable. Una publicación que escribiste tú mismo es gratis, donde sea que se publique.
- **Publicar en WinkLinks siempre es gratis**, generado o no.
- Se cobra **al publicar**, no por intento. Regenerar un borrador hasta que estés satisfecho no aumenta tu factura — pagas una vez por la publicación que realmente envías. Los intentos no son ilimitados: cada publicación permite unas 10 regeneraciones para imágenes y 3 para video, lo que refleja lo que nos cuesta producirlas. Verás cuántas te quedan mientras trabajas.
- En la API de socios, un **hotel-día** es un hotel valorado por una noche de estancia — *no* una llamada API. Una búsqueda que devuelve 20 hoteles para una estancia de 3 noches son 60 hotel-días de una sola solicitud. Los endpoints de búsqueda y autocompletado son gratuitos y nunca se miden.

### Cómo activarlo

El pago según consumo está desactivado por defecto. Todos reciben la asignación gratuita sin hacer nada.

Para superar la asignación, el **propietario** de una cuenta activa el pago según consumo y elige cuáles de sus cuentas se miden. El uso de todas tus cuentas habilitadas se agrupa en una **única factura mensual**, que puedes pagar automáticamente con tarjeta o recibir como factura para pagar tú mismo.

Una vez activado, tu uso se mide pero **nunca se limita** — no alcanzarás un límite de gasto con nosotros.

:::note[Si no lo activas]
Nada se rompe y no se cobra nada. Simplemente te detienes en la asignación gratuita de ese mes: las publicaciones generadas no se publicarán y las llamadas a la API de socios devolverán un `429` hasta que se reinicie la asignación.
:::

### Estado de facturación

| Estado | Qué significa |
| -- | -- |
| En buen estado | Todo funciona normalmente. |
| Vencido | Un pago falló y se está reintentando. Tus funciones siguen funcionando durante este periodo. |
| Suspendido | Una factura quedó impaga hasta el final. Las acciones facturables están bloqueadas hasta que se pague; las funciones gratuitas continúan normalmente. |

:::tip[Precios en vivo]
Los precios unitarios y las asignaciones gratuitas siempre se muestran en el Portal, directamente desde nuestro sistema de facturación, para que puedas consultarlos antes de comprometerte. Consulta [Facturación](/es/portal/plan) para activar el pago según consumo, elegir tus cuentas y seguir el uso y las facturas del mes. Consulta [Social](/es/portal/social/what-is-social) para ver cómo el volumen de publicaciones afecta tu gasto.
:::

## Efecto de la plataforma

Finalmente, a medida que seguimos creciendo en tamaño y reservas, queremos poder compartir algunos de los efectos de la plataforma contigo. Más reservas traen oportunidades de descuentos por volumen de nuestro gateway de pago, lo que nos permitiría reducir nuestra tarifa de procesamiento para todos.

¡Únete a Wink hoy y descubre una forma nueva y lucrativa de hacer negocios en la industria hotelera!
