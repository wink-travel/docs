---
title: Precios
description: La mayor parte de Wink es gratis. Pagas una pequeña tarifa por reserva y una tarifa de uso por consumo en algunas funciones premium.
sidebar:
  order: 4
---

Wink no tiene suscripciones, ni asientos ni tarifas de configuración. La gran mayoría de la plataforma es gratuita, y solo hay dos cosas por las que pagarás:

1. **Una tarifa de plataforma por reserva, más el procesamiento de tarjeta al costo** — solo cuando se realiza una reserva.
2. **Tarifas de uso por consumo** — en algunas funciones premium que nos cuestan dinero cada vez que se usan, cada una con una asignación mensual gratuita.

## Qué es gratis

Estos no cuestan nada, para siempre, sin asignación ni medición:

- El **motor de reservas** — en tu propio sitio, en tu página WinkLinks o en cualquier otro lugar donde lo incrustes.
- **Gestión de propiedades** — contenido, fotos, tarifas, planes tarifarios, disponibilidad, promociones y políticas.
- **Herramientas para afiliados** — enlaces compartibles, listas seleccionadas, cuadrículas, mapas, tarjetas y widgets incrustables.
- **Herramientas para agentes de viajes** — búsqueda, tarifas personalizadas y reservas en nombre de tus clientes.
- **WinkLinks** — reclama tu URL personalizada, crea tu página y publícala tantas veces como quieras.
- **Publicaciones sociales manuales** — cualquier cosa que escribas tú mismo, en cualquier red conectada.
- **Analíticas, tablas de clasificación, reclamaciones, configuraciones** y gestión de cuenta.
- Las **APIs de consumidor y motor de reservas**, además de los endpoints de búsqueda y autocompletado.

## Reservas

Wink soporta dos modelos: Wink cobra el pago para el hotel, y un agente de viajes autorizado actúa como comerciante registrado.

### Modelo 1 — Wink cobra para el hotel

Wink cobra el pago del huésped como agente limitado de cobro para el hotel. El hotel es el comerciante registrado, y el nombre del hotel aparece en el estado de cuenta de la tarjeta del huésped.
Este modelo aplica al 95% de todas las reservas.

#### Desglose

:::note[Tarifa de plataforma]
Wink cobra una tarifa de plataforma del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba sin costo. No se cobra en una reserva cancelada.
:::

:::note[Procesamiento de tarjeta]
La tarifa por procesamiento de pago que se cobra para recolectar el pago del huésped se transfiere al hotel al costo, sin margen. Varía según la tarjeta y método de pago del huésped, y el monto exacto aparece en la sección de Contabilidad de cada reserva. Si una reserva se cancela o reembolsa, cualquier tarifa que el procesador retenga sigue siendo cobrada; si no cobra nada, nosotros tampoco.
:::

:::note[Desembolso de fondos]
Hay tarifas asociadas con el envío de fondos a tu cuenta. Esto depende del método de desembolso que elijas. Actualmente soportamos:

- **Transferencia bancaria** — El costo depende del país donde te encuentres, de dónde se envían los fondos y de cualquier conversión de moneda aplicada en el camino. La tarifa de pago y cualquier costo de conversión son pagados por el beneficiario, al costo. Incluimos una calculadora de cotización que puedes usar cuando tengas fondos disponibles en tu cuenta.

Si quieres que soportemos otro método de pago, envíanos un correo electrónico.
:::

### Modelo 2 — Agente de viajes como comerciante registrado

Este modelo solo está disponible para agencias de viajes que tengan licencia de agencia de viajes en su región y que deseen ser el comerciante registrado. Algunos de nuestros agentes de viajes registrados quieren ser responsables de manejar el pago y el desembolso de fondos a los hoteles. Bajo este modelo, ellos son responsables de los fondos y cuentan con las licencias necesarias para operar en su país.

#### Desglose

:::note[Tarifa de plataforma]
Wink cobra una tarifa de plataforma del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba.
:::

Con este modelo, los agentes de viajes solo pagan la tarifa de plataforma de Wink y Wink facturará al agente de viajes mensualmente.

## Uso (pago por consumo)

Algunas funciones nos cuestan dinero cada vez que se usan — IA generativa, APIs sociales de terceros y ofrecer precios en vivo a gran escala. En lugar de incluirlas en un plan mensual que tal vez no uses, pagas solo por lo que realmente consumes, y solo después de agotar una asignación mensual gratuita.

| Función | Gratis por mes | Después | Unidad facturada |
| -- | -- | -- | -- |
| Publicación social — imagen | 1 | $1.50 | Una publicación publicada |
| Publicación social — imagen generada por IA | 0 | $2.50 | Una publicación publicada |
| Publicación social — video mejorado por IA | 0 | $4.00 | Una publicación publicada |
| Publicación social — video generado por IA | 0 | $14.00 | Una publicación publicada |
| Respuesta IA a un comentario o DM | 5 | $0.05 | Una respuesta |
| Respuesta de chatbot | 5 | $0.05 | Una respuesta |
| API para socios | 10,000 | $0.0001 | Un hotel-día |

Los precios están en USD. La asignación gratuita se otorga **por cuenta**, no por usuario, y se reinicia el día 1 de cada mes (UTC).

### Cómo se cobran las publicaciones

Las publicaciones se cobran según lo que contienen, porque eso es lo que nos cuesta hacerlas. Una imagen fija es barata; un video no; cualquier cosa que generemos con IA cuesta materialmente más que una foto que tú mismo proporcionaste.

- **La asignación gratuita cubre solo publicaciones con imágenes estándar.** Obtienes una de esas por cuenta al mes. Las publicaciones de video y medios generados por IA se cobran desde la primera publicación — no hay asignación gratuita en esos niveles, así que una propiedad que publique video debe esperar un cargo en su primer mes.
- **El video gana.** Si una publicación contiene cualquier video, toda la publicación se cobra a la tarifa de video. Una publicación que mezcla imagen y video es una publicación de video.
- **La procedencia IA define el nivel.** Los medios que tú proporcionas — tus propias fotos y videos, o cualquier cosa de tu biblioteca de contenido Wink — se cobran a la tarifa estándar. Los medios que generamos para ti se cobran a la tarifa IA.

### Qué se mide y qué no

- Solo una publicación **generada** y publicada en una red de terceros (Facebook, Instagram) es facturable. Una publicación que escribiste tú mismo es gratis, donde sea que se publique.
- **Publicar en WinkLinks siempre es gratis**, generado o no.
- Se cobra **al publicar**, no por intento. Regenerar un borrador hasta que estés satisfecho no aumenta tu factura — pagas una vez por la publicación que realmente envías. Los intentos no son ilimitados: cada publicación permite alrededor de 10 regeneraciones para imágenes y 3 para video, lo que refleja lo que nos cuesta producirlas. Verás cuántas te quedan mientras trabajas.
- En la API para socios, un **hotel-día** es un hotel con precio para una noche de estancia — *no* una llamada API. Una búsqueda que devuelve 20 hoteles para una estancia de 3 noches son 60 hotel-días de una sola solicitud. Los endpoints de búsqueda y autocompletado son gratuitos y nunca se miden.

### Cómo activarlo

El pago por consumo está desactivado por defecto. Todos reciben la asignación gratuita sin hacer nada.

Para superar la asignación, el **propietario** de una cuenta habilita el pago por consumo y elige cuáles de sus cuentas se miden. El uso de todas tus cuentas habilitadas se consolida en una **única factura mensual**, que puedes pagar automáticamente con tarjeta o recibir como factura para pagar tú mismo.

Una vez habilitado, tu uso se mide pero **nunca se limita** — no alcanzarás un límite de tasa por gastar dinero con nosotros.

:::note[Si no lo habilitas]
Nada se rompe y no se cobra nada. Simplemente te detienes en la asignación gratuita para ese mes: las publicaciones generadas no se publicarán y las llamadas a la API para socios devolverán un `429` hasta que la asignación se reinicie.
:::

### Estado de facturación

| Estado | Qué significa |
| -- | -- |
| En buen estado | Todo funciona normalmente. |
| Vencido | Un pago falló y se está reintentando. Tus funciones siguen funcionando durante este periodo. |
| Suspendido | Una factura quedó impaga hasta el final. Las acciones facturables están bloqueadas hasta que se pague; las funciones gratuitas continúan normalmente. |

:::tip[Precios en vivo]
Los precios unitarios y las asignaciones gratuitas siempre se muestran en el Portal, directamente desde nuestro sistema de facturación, para que puedas revisarlos antes de comprometerte. Consulta [Facturación](/es-MX/portal/plan) para habilitar el pago por consumo, elegir tus cuentas y seguir el uso y facturas del mes. Consulta [Social](/es-MX/portal/social/what-is-social) para ver cómo el volumen de publicaciones afecta tu gasto.
:::

## Efecto de la plataforma

Finalmente, a medida que seguimos creciendo en tamaño y reservas, queremos poder compartir algunos de los efectos de la plataforma contigo. Más reservas traen oportunidades de descuentos por volumen con nuestro procesador de pagos. Como el procesamiento de tarjeta se transfiere al costo, cualquier ahorro que negociemos va directamente a los hoteles.

¡Únete a Wink hoy y descubre una forma nueva y lucrativa de hacer negocios en la industria hotelera!
