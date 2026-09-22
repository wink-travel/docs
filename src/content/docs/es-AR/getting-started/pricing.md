---
title: Precios
description: La mayor parte de Wink es gratis. Pagás una pequeña comisión por reserva y una tarifa por uso en algunas funciones premium.
sidebar:
  order: 4
---

Wink no tiene suscripciones, ni asientos ni cargos de configuración. La gran mayoría de la plataforma es gratuita, y solo hay dos cosas por las que alguna vez vas a pagar:

1. **Una comisión por plataforma por reserva, más el costo del procesamiento con tarjeta** — solo cuando se realiza una reserva.
2. **Tarifas por uso** — en algunas funciones premium que nos cuestan dinero cada vez que se usan, cada una con un cupo mensual gratuito.

## Qué es gratis

Estos no cuestan nada, para siempre, sin cupo ni medición:

- El **motor de reservas** — en tu propio sitio, en tu página de WinkLinks o en cualquier otro lugar donde lo insertes.
- **Gestión de propiedades** — contenido, fotos, tarifas, planes tarifarios, disponibilidad, promociones y políticas.
- **Herramientas para afiliados** — enlaces compartibles, listas seleccionadas, cuadrículas, mapas, tarjetas y widgets embebibles.
- **Herramientas para agentes de viajes** — búsqueda, tarifas personalizadas y reservas en nombre de tus clientes.
- **WinkLinks** — reclamá tu URL personalizada, armá tu página y publicá en ella tantas veces como quieras.
- **Publicaciones sociales manuales** — cualquier cosa que escribas vos mismo, en cualquier red conectada.
- **Analíticas, tablas de posiciones, reclamos, configuraciones** y gestión de cuenta.
- Las **APIs de consumidor y motor de reservas**, más los endpoints de búsqueda y autocompletado.

## Reservas

Wink soporta dos modelos: Wink cobra el pago para el hotel, o un agente de viajes autorizado actúa como comerciante registrado.

### Modelo 1 — Wink cobra para el hotel

Wink cobra el pago del huésped como agente limitado de cobro para el hotel. El hotel es el comerciante registrado, y el nombre del hotel aparece en el resumen de la tarjeta del huésped.
Este modelo aplica al 95% de todas las reservas.

#### Desglose

:::note[Comisión por plataforma]
Wink cobra una comisión del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba. No se cobra en reservas canceladas.
:::

:::note[Procesamiento con tarjeta]
La tarifa por procesamiento de pago que se cobra para cobrar al huésped se traslada al hotel al costo, sin margen. Varía según la tarjeta y método de pago del huésped, y el monto exacto aparece en la sección de Contabilidad de cada reserva. Si una reserva se cancela o reembolsa, cualquier tarifa que retenga el procesador se sigue cobrando; si no cobra nada, nosotros tampoco.
:::

:::note[Desembolso de fondos]
Hay tarifas asociadas con el envío de fondos a tu cuenta. Esto depende del método de desembolso que elijas. Actualmente soportamos:

- **Transferencia bancaria** — El costo depende del país donde estés, de dónde se envían los fondos y de cualquier conversión de moneda aplicada en el camino. La tarifa de pago y cualquier costo de conversión los paga el beneficiario, al costo. Incluimos una calculadora de cotización que podés usar cuando tengas fondos disponibles en tu cuenta.

Si querés que soportemos otro método de pago, enviános un correo.
:::

### Modelo 2 — Agente de viajes como comerciante registrado

Este modelo está disponible solo para agencias de viajes que tengan licencia en su región y que deseen ser el comerciante registrado. Algunos de nuestros agentes de viajes registrados quieren ser responsables de manejar el pago y el desembolso de fondos a los hoteles. Bajo este modelo, ellos son responsables de los fondos y cuentan con las licencias necesarias para operar en su país.

#### Desglose

:::note[Comisión por plataforma]
Wink cobra una comisión del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba.
:::

Con este modelo, los agentes de viajes solo pagan la comisión por plataforma de Wink y Wink facturará al agente de viajes mensualmente.

## Uso (pago por consumo)

Algunas funciones nos cuestan dinero cada vez que se usan — IA generativa, APIs sociales de terceros y mostrar precios en vivo a gran escala. En lugar de incluirlas en un plan mensual que tal vez no uses, pagás solo por lo que realmente consumís, y solo después de agotar un cupo mensual gratuito.

| Función | Gratis por mes | Luego | Unidad facturada |
| -- | -- | -- | -- |
| Publicación social — imagen | 1 | $1.50 | Una publicación publicada |
| Publicación social — imagen generada por IA | 0 | $2.50 | Una publicación publicada |
| Publicación social — video mejorado por IA | 0 | $4.00 | Una publicación publicada |
| Publicación social — video generado por IA | 0 | $14.00 | Una publicación publicada |
| Respuesta IA a un comentario o DM | 5 | $0.05 | Una respuesta |
| Respuesta de chatbot | 5 | $0.05 | Una respuesta |
| API para socios | 10,000 | $0.0001 | Un hotel-día |

Los precios están en USD. El cupo gratuito se otorga **por cuenta**, no por usuario, y se reinicia el día 1 de cada mes (UTC).

### Cómo se valoran las publicaciones

Las publicaciones se valoran según lo que contienen, porque eso es lo que nos cuesta hacerlas. Una imagen fija es barata; un video no; cualquier cosa que generemos con IA cuesta mucho más que una foto que vos mismo hayas provisto.

- **El cupo gratuito cubre solo publicaciones con imagen estándar.** Tenés una por cuenta por mes. Las publicaciones con video y medios generados por IA se facturan desde la primera publicación — no hay cupo gratuito en esos niveles, así que una propiedad que publique videos debe esperar un cargo en su primer mes.
- **El video gana.** Si una publicación contiene cualquier video, toda la publicación se factura a la tarifa de video. Una publicación que mezcla imagen y video es una publicación de video.
- **La procedencia IA define el nivel.** Los medios que vos proveas — tus propias fotos y videos, o cualquier cosa de tu biblioteca de contenido Wink — se facturan a la tarifa estándar. Los medios que generamos para vos se facturan a la tarifa IA.

### Qué se mide y qué no

- Solo una publicación **generada** y publicada en una red externa (Facebook, Instagram) es facturable. Una publicación que escribiste vos mismo es gratis, donde sea que se publique.
- **Publicar en WinkLinks siempre es gratis**, generada o no.
- Se cobra **al publicar**, no por intento. Regenerar un borrador hasta que estés conforme no suma a tu factura — pagás una vez por la publicación que realmente envías. Los intentos no son ilimitados: cada publicación permite unas 10 regeneraciones para imágenes y 3 para video, lo que refleja lo que nos cuesta producirlas. Verás cuántas te quedan mientras trabajás.
- En la API para socios, un **hotel-día** es un hotel con precio para una noche de estadía — *no* una llamada a la API. Una búsqueda que devuelve 20 hoteles para una estadía de 3 noches son 60 hotel-días de una sola solicitud. Los endpoints de búsqueda y autocompletado son gratis y nunca se miden.

### Cómo activarlo

El pago por consumo está desactivado por defecto. Todos reciben el cupo gratuito sin hacer nada.

Para superar el cupo, el **propietario** de una cuenta activa el pago por consumo y elige cuáles de sus cuentas se miden. El uso de todas tus cuentas habilitadas se consolida en una **única factura mensual**, que podés pagar automáticamente con tarjeta o recibir como factura para pagar vos mismo.

Una vez activado, tu uso se mide pero **nunca se limita** — no vas a alcanzar un límite de velocidad por gastar dinero con nosotros.

:::note[Si no lo activás]
Nada se rompe y no se cobra nada. Simplemente te quedás en el cupo gratuito de ese mes: las publicaciones generadas no se publicarán y las llamadas a la API para socios devolverán un `429` hasta que se reinicie el cupo.
:::

### Estado de facturación

| Estado | Qué significa |
| -- | -- |
| En buen estado | Todo funciona normalmente. |
| Vencido | Un pago falló y se está reintentando. Tus funciones siguen funcionando durante este período. |
| Suspendido | Una factura quedó impaga hasta el final. Las acciones facturables están bloqueadas hasta que se pague; las funciones gratuitas continúan normalmente. |

:::tip[Precios en vivo]
Los precios unitarios y los cupos gratuitos siempre se muestran en el Portal, directamente desde nuestro sistema de facturación, para que puedas consultarlos antes de comprometerte. Ve [Facturación](/es-AR/portal/plan) para activar el pago por consumo, elegir tus cuentas y seguir el uso y las facturas del mes. Ve [Social](/es-AR/portal/social/what-is-social) para ver cómo el volumen de publicaciones afecta lo que gastás.
:::

## Efecto de la plataforma

Finalmente, a medida que seguimos creciendo en tamaño y reservas, queremos poder compartir algunos de los efectos de la plataforma con vos. Más reservas traen oportunidades de descuentos por volumen con nuestro procesador de pagos. Como el procesamiento con tarjeta se traslada al costo, cualquier ahorro que negociemos va directo a los hoteles.

¡Sumate a Wink hoy y descubrí una forma nueva y rentable de hacer negocios en la industria hotelera!
