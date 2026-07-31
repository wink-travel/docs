---
title: Precios
description: La mayor parte de Wink es gratis. Pagás una pequeña comisión por reserva y una tarifa por uso en algunas funciones premium.
sidebar:
  order: 4
---

Wink no tiene suscripciones, ni asientos ni cargos de configuración. La gran mayoría de la plataforma es gratuita, y solo hay dos cosas por las que alguna vez vas a pagar:

1. **Un pequeño porcentaje por reserva** — solo cuando realmente ganás dinero.
2. **Tarifas por uso** — en algunas funciones premium que nos cuestan dinero cada vez que se usan, cada una con una asignación mensual gratuita.

## Qué es gratis

Estos no cuestan nada, para siempre, sin asignación ni medición:

- El **motor de reservas** — en tu propio sitio, en tu página de WinkLinks o en cualquier otro lugar donde lo insertes.
- **Gestión de propiedades** — contenido, fotos, tarifas, planes tarifarios, disponibilidad, promociones y políticas.
- **Herramientas para afiliados** — enlaces compartibles, listas seleccionadas, cuadrículas, mapas, tarjetas y widgets embebibles.
- **Herramientas para agentes de viajes** — búsqueda, tarifas personalizadas y reservas en nombre de tus clientes.
- **WinkLinks** — reclamá tu URL personalizada, armá tu página y publicá en ella tantas veces como quieras.
- **Publicaciones sociales manuales** — cualquier cosa que escribas vos mismo, en cualquier red conectada.
- **Analíticas, tablas de líderes, reclamos, configuraciones** y gestión de cuenta.
- Las **APIs de consumidor y motor de reservas**, además de endpoints de búsqueda y autocompletado.

## Reservas

Wink soporta tanto el modelo merchant como el de agente.

### Modelo 1

Wink es el merchant de registro en el momento en que se realiza la reserva. Wink es responsable de los fondos y posee todas las licencias necesarias para operar una agencia de viajes.
Este modelo aplica al 95% de todas las reservas.

Wink cobra un `5.5% por reserva` para mantener la plataforma.
La mayor parte de eso va al gateway de pagos (Visa, MasterCard, etc.). Una reserva promedio nos cuesta `2.95%` adquirir; a veces hasta `3.6%`. Los reembolsos parciales nos afectan más porque el gateway de pagos lo considera un nuevo cargo.
Queremos ser completamente transparentes con los precios ahora para ahorrar tiempo a todos antes de intentar negociar descuentos adicionales sin haber usado Wink. Nuestro modelo de precios es más que justo y nosotros también necesitamos vivir.

#### Desglose

:::note[Tarifa de procesamiento]
Wink cobra una tarifa de procesamiento del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba de forma gratuita.
:::

:::note[Tarifa de pago]
TripPay cobra una tarifa de pago del 4.0% por reserva. Esto cubre la adquisición del pago del viajero.
:::

:::note[Desembolso de fondos]
Hay tarifas asociadas con el envío de fondos a tu cuenta. Esto depende del método de desembolso que elijas. Actualmente soportamos:

- **Transferencia bancaria** El costo depende del país en el que estés ubicado y de dónde se envían los fondos. Incluimos una calculadora de cotización que podés usar cuando tengas fondos disponibles en tu cuenta.

Si querés que soportemos otro método de pago, enviános un correo electrónico.
:::

### Modelo 2

Este modelo está disponible solo para agencias de viajes que tengan licencia para operar en su región y que deseen ser el merchant de registro. Algunos de nuestros agentes de viajes registrados quieren ser responsables de manejar el pago y el desembolso de fondos a los hoteles. Bajo este modelo, ellos son responsables de los fondos y poseen las licencias necesarias para operar en su país.

#### Desglose

:::note[Tarifa de procesamiento]
Wink cobra una tarifa de procesamiento del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba de forma gratuita.
:::

Con este modelo, los agentes de viajes solo pagan la tarifa de procesamiento de Wink y Wink les factura mensualmente.

## Uso (pago por consumo)

Algunas funciones nos cuestan dinero cada vez que se usan — IA generativa, APIs sociales de terceros y ofrecer precios en vivo a gran escala. En lugar de incluirlas en un plan mensual que tal vez no uses, pagás solo por lo que realmente consumís, y solo después de agotar una asignación mensual gratuita.

| Función | Gratis por mes | Luego | Unidad facturada |
| -- | -- | -- | -- |
| Publicación social — imagen | 1 | $1.50 | Una publicación publicada |
| Publicación social — imagen generada por IA | 0 | $2.50 | Una publicación publicada |
| Publicación social — video mejorado por IA | 0 | $4.00 | Una publicación publicada |
| Publicación social — video generado por IA | 0 | $14.00 | Una publicación publicada |
| Respuesta IA a un comentario o DM | 5 | $0.05 | Una respuesta |
| Respuesta de chatbot | 5 | $0.05 | Una respuesta |
| API para socios | 10,000 | $0.0001 | Un hotel-día |

Los precios están en USD. La asignación gratuita se otorga **por cuenta**, no por usuario, y se reinicia el día 1 de cada mes (UTC).

### Cómo se valoran las publicaciones

Las publicaciones se valoran según lo que contienen, porque eso es lo que nos cuesta producirlas. Una imagen fija es barata; un video no; cualquier cosa que generemos con IA cuesta materialmente más que una foto que vos mismo hayas proporcionado.

- **La asignación gratuita cubre solo publicaciones estándar con imagen.** Tenés una por cuenta por mes. Las publicaciones con video y medios generados por IA se facturan desde la primera publicación — no hay asignación gratuita en esos niveles, así que una propiedad que publique videos debe esperar un cargo en su primer mes.
- **El video gana.** Si una publicación contiene cualquier video, toda la publicación se factura a la tarifa de video. Una publicación que mezcla imagen y video es una publicación de video.
- **La procedencia IA define el nivel.** Los medios que vos suministrás — tus propias fotos y videos, o cualquier cosa de tu biblioteca de contenido Wink — se facturan a la tarifa estándar. Los medios que generamos para vos se facturan a la tarifa IA.

### Qué se mide y qué no

- Solo una publicación **generada** y publicada en una red de terceros (Facebook, Instagram) es facturable. Una publicación que escribiste vos mismo es gratis, donde sea que se publique.
- **Publicar en WinkLinks siempre es gratis**, generada o no.
- Se cobra **al publicar**, no por intento. Regenerar un borrador hasta que estés conforme no suma a tu factura — pagás una vez por la publicación que realmente envías. Los intentos no son ilimitados: cada publicación permite unas 10 regeneraciones para imágenes y 3 para video, lo que refleja lo que nos cuesta producirlas. Verás cuántas te quedan mientras trabajás.
- En la API para socios, un **hotel-día** es un hotel con precio para una noche de estadía — *no* una llamada a la API. Una búsqueda que devuelve 20 hoteles para una estadía de 3 noches son 60 hotel-días de una sola solicitud. Los endpoints de búsqueda y autocompletado son gratuitos y nunca se miden.

### Cómo activarlo

El pago por consumo está desactivado por defecto. Todos reciben la asignación gratuita sin hacer nada.

Para superar la asignación, el **propietario** de una cuenta habilita el pago por consumo y elige cuáles de sus cuentas se miden. El uso de todas tus cuentas habilitadas se consolida en una **única factura mensual**, que podés pagar automáticamente con tarjeta o recibir como factura para pagar vos mismo.

Una vez habilitado, tu uso se mide pero **nunca se limita** — no vas a alcanzar un límite de gasto con nosotros.

:::note[Si no lo habilitás]
Nada se rompe y no se cobra nada. Simplemente te quedás en la asignación gratuita para ese mes: las publicaciones generadas no se publicarán y las llamadas a la API para socios devolverán un `429` hasta que se reinicie la asignación.
:::

### Estado de facturación

| Estado | Qué significa |
| -- | -- |
| En buen estado | Todo funciona normalmente. |
| Vencido | Un pago falló y se está reintentando. Tus funciones siguen funcionando durante este período. |
| Suspendido | Una factura quedó impaga hasta el final. Las acciones facturables están bloqueadas hasta que se pague; las funciones gratuitas continúan normalmente. |

:::tip[Precios en vivo]
Los precios unitarios y las asignaciones gratuitas siempre se muestran en el Portal, directamente desde nuestro sistema de facturación, para que puedas consultarlos antes de comprometerte. Ve [Facturación](/es-AR/account/subscription) para habilitar el pago por consumo, elegir tus cuentas y seguir el uso y las facturas del mes. Ve [Social](/es-AR/portal/social/what-is-social) para entender cómo el volumen de publicaciones afecta lo que gastás.
:::

## Efecto de la plataforma

Finalmente, a medida que seguimos creciendo en tamaño y reservas, queremos poder compartir algunos de los efectos de la plataforma con vos. Más reservas traen oportunidades de descuentos por volumen de nuestro gateway de pagos, lo que nos permitiría bajar nuestra tarifa de procesamiento para todos.

¡Sumate a Wink hoy y descubrí una forma nueva y rentable de hacer negocios en la industria hotelera!
