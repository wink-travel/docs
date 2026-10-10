---
title: Precios
description: La mayor parte de Wink es gratis. Pagás una pequeña comisión por reserva y una tarifa por uso en algunas funciones premium.
sidebar:
  order: 4
---

Wink no tiene suscripciones, ni asientos ni cargos de configuración. La gran mayoría de la plataforma es gratuita, y solo hay dos cosas por las que alguna vez vas a pagar:

1. **Una comisión por plataforma por reserva, más el costo del procesamiento con tarjeta** — solo cuando se realiza una reserva.
2. **Tarifas por uso según consumo** — en algunas funciones premium que nos cuestan dinero cada vez que se usan, cada una con una asignación mensual gratuita.

## Qué es gratis

Estos no cuestan nada, para siempre, sin asignación ni medición:

- El **motor de reservas** — en tu propio sitio, en tu página de WinkLinks o en cualquier otro lugar donde lo insertes.
- **Gestión de propiedades** — contenido, fotos, tarifas, planes tarifarios, disponibilidad, promociones y políticas.
- **Herramientas para afiliados** — enlaces compartibles, listas seleccionadas, cuadrículas, mapas, tarjetas y widgets embebibles.
- **Herramientas para agentes de viajes** — búsqueda, tarifas personalizadas y reservas en nombre de tus clientes.
- **WinkLinks** — reclamá tu URL personalizada, armá tu página y publicá en ella tantas veces como quieras.
- **Publicaciones sociales manuales** — cualquier cosa que escribas vos mismo, en cualquier red conectada.
- **Analíticas, tablas de líderes, reclamos, configuraciones** y gestión de cuenta.
- Las **APIs de Consumidor y Motor de Reservas**, incluyendo sus endpoints de búsqueda y autocompletado. En la **API para Partners**, las llamadas de Búsqueda y Contenido se miden a una unidad cada una (ver [Uso](#qué-se-mide-y-qué-no) abajo).

## Reservas

Wink soporta dos modelos: Wink cobra el pago para el hotel, y un agente de viajes autorizado actúa como comerciante registrado.

### Modelo 1 — Wink cobra para el hotel

Wink cobra el pago del huésped como agente limitado de cobro para el hotel. El hotel es el comerciante registrado, y el nombre del hotel aparece en el resumen de la tarjeta del huésped.
Este modelo aplica al 95% de todas las reservas.

#### Desglose

:::note[Comisión por plataforma]
Wink cobra una comisión del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba. No se cobra en reservas canceladas.
:::

:::note[Procesamiento con tarjeta]
La tarifa por procesamiento de pago que se cobra para recolectar el pago del huésped se transfiere al hotel al costo, sin margen. Varía según la tarjeta y método de pago del huésped, y el monto exacto aparece en la sección de Contabilidad de cada reserva. Si una reserva se cancela o reembolsa, cualquier tarifa que retenga el procesador se sigue cobrando; si no cobra nada, nosotros tampoco.
:::

:::note[Desembolso de fondos]
Hay cargos asociados con el envío de fondos a tu cuenta. Esto depende del método de desembolso que elijas. Actualmente soportamos:

- **Transferencia bancaria** — El costo depende del país donde estés, de dónde se envían los fondos y de cualquier conversión de moneda aplicada en el camino. La tarifa de pago y cualquier costo de conversión los paga el beneficiario, al costo. Incluimos una calculadora de cotización que podés usar cuando tengas fondos disponibles en tu cuenta.

Si querés que soportemos otro método de pago, enviános un correo.
:::

### Modelo 2 — Agente de viajes como comerciante registrado

Este modelo está disponible solo para agencias de viajes que tengan licencia en su región y que deseen ser el comerciante registrado. Está disponible solo para partners de API, reservando a través de la [API para Partners](/es-AR/integrations/partner-api/), y requiere la aprobación previa por escrito de Wink. Algunos de nuestros agentes de viajes registrados quieren ser responsables de manejar el pago y el desembolso de fondos a los hoteles. Bajo este modelo, ellos son responsables de los fondos y cuentan con las licencias necesarias para operar en su país.

#### Desglose

:::note[Comisión por plataforma]
Wink cobra una comisión del 1.5% por reserva. Esto cubre el mantenimiento de la plataforma y es lo que nos permite ofrecer todo lo listado arriba.
:::

Usando este modelo, los agentes de viajes pagan la comisión del 1.5% de Wink más cualquier uso de la API para Partners que supere la asignación gratuita, facturado mensualmente.

## Qué pagan los partners

Para partners que envían reservas: creadores, afiliados, plataformas, desarrolladores y agentes de viajes. Las asociaciones no son exclusivas, sin territorios.

| | Pago recolectado para el hotel (la mayoría de los partners) | Sos comerciante registrado (solo partners API) |
|---|---|---|
| Licencia o tarifa territorial | Ninguna | Ninguna |
| Cargo de configuración | Ninguno | Ninguno |
| Suscripción o tarifa mensual | Ninguna | Ninguna |
| Compromiso mínimo o plazo | Ninguno | Ninguno. Aplica límite de crédito. |
| Acceso a API para Partners | 10.000 noches-hotel al mes gratis, luego $0.0001 por noche-hotel. El pago por uso está desactivado por defecto; al superar la asignación gratuita, las llamadas devuelven `429`. | Igual |
| Comisión por transacción | Ninguna. Ganás comisión (10% por defecto). | 1.5% de comisión por reserva sobre el valor, facturado mensualmente en USD, con vencimiento a 15 días. Con pago por uso activado, el uso de la API para Partners se factura en una segunda factura mensual. |
| Cargo por soporte | Ninguno | Ninguno |
| Otros cargos | Tarifas de transferencia de pago, al costo | Posible prepago o depósito al aprobar. Interés del 1.5% mensual solo en facturas vencidas. |
| Cuando cambian las tarifas | Aviso con 30 días; aplica solo a reservas hechas después del cambio | Igual. Wink también puede variar tu límite de crédito con aviso. |

La vía de comerciante registrado requiere aprobación previa por escrito de Wink. Ver [Modelo 2](#modelo-2--agente-de-viajes-como-comerciante-registrado) arriba y la página de [API para Partners](/es-AR/integrations/partner-api/).

## Uso (pago por consumo)

Algunas funciones nos cuestan dinero cada vez que se usan — IA generativa, APIs sociales de terceros y ofrecer precios en vivo a escala. En lugar de incluirlas en un plan mensual que tal vez no uses, pagás solo por lo que realmente consumís, y solo después de agotar una asignación mensual gratuita.

| Función | Gratis por mes | Luego | Unidad facturada |
| -- | -- | -- | -- |
| Publicación social — imagen | 1 | $1.50 | Una publicación publicada |
| Publicación social — imagen generada por IA | 0 | $2.50 | Una publicación publicada |
| Publicación social — video mejorado por IA | 0 | $4.00 | Una publicación publicada |
| Publicación social — video generado por IA | 0 | $14.00 | Una publicación publicada |
| Respuesta IA a un comentario o DM | 5 | $0.05 | Una respuesta |
| Respuesta de chatbot | 5 | $0.05 | Una respuesta |
| API para Partners | 10.000 | $0.0001 | Una noche-hotel |

Los precios están en USD. La asignación gratuita se otorga **por cuenta**, no por usuario, y se reinicia el día 1 de cada mes (UTC).

### Cómo se valoran las publicaciones

Las publicaciones se valoran según lo que contienen, porque eso es lo que nos cuesta producirlas. Una imagen fija es barata; un video no; cualquier cosa que generemos con IA cuesta materialmente más que una foto que vos mismo proveas.

- **La asignación gratuita cubre solo publicaciones con imagen estándar.** Tenés una por cuenta por mes. Las publicaciones con video y medios generados por IA se facturan desde la primera publicación — no hay asignación gratuita en esos niveles, así que una propiedad que publique video debe esperar un cargo en su primer mes.
- **El video gana.** Si una publicación contiene cualquier video, toda la publicación se factura a la tarifa de video. Una publicación que mezcla imagen y video es una publicación de video.
- **La procedencia IA define el nivel.** Los medios que proveas — tus propias fotos y videos, o cualquier cosa de tu biblioteca de contenido Wink — se facturan a la tarifa estándar. Los medios que generemos para vos se facturan a la tarifa IA.

### Qué se mide y qué no

- Solo una publicación **generada** y publicada en una red de terceros (Facebook, Instagram) es facturable. Una publicación que escribiste vos mismo es gratis, donde sea que vaya.
- **Publicar en WinkLinks siempre es gratis**, generado o no.
- Se cobra **al publicar**, no por intento. Regenerar un borrador hasta que estés conforme no suma a tu factura — pagás una vez por la publicación que realmente envías. Los intentos no son ilimitados: cada publicación permite unas 10 regeneraciones para imágenes y 3 para video, lo que refleja lo que nos cuesta producirlas. Verás cuántas te quedan mientras trabajás.
- En la API para Partners, una **noche-hotel** es un hotel con precio para una noche de estadía — *no* una llamada API. Una búsqueda que devuelve 20 hoteles para 3 noches es 60 noches-hotel de una sola solicitud. Las llamadas de Contenido y Búsqueda (búsqueda de destino y autocompletado) cuestan una unidad cada una, sin importar lo que devuelvan. Los endpoints de cuenta son gratis.

### Cómo activarlo

El pago por consumo está desactivado por defecto. Todos reciben la asignación gratuita sin hacer nada.

Para superar la asignación, el **propietario** de una cuenta activa el pago por consumo y elige cuáles de sus cuentas se miden. El uso de todas tus cuentas habilitadas se consolida en una **única factura mensual**, que podés pagar automáticamente con tarjeta o recibir como factura para pagar vos mismo.

Una vez activado, tu uso se mide pero **nunca se limita** — no vas a alcanzar un límite de velocidad por gastar dinero con nosotros.

:::note[Si no lo activás]
Nada se rompe y no se cobra nada. Simplemente te quedás en la asignación gratuita para ese mes: las publicaciones generadas no se publicarán y las llamadas a la API para Partners devolverán un `429` hasta que se reinicie la asignación.
:::

### Estado de facturación

| Estado | Qué significa |
| -- | -- |
| En buen estado | Todo funciona normalmente. |
| Vencido | Un pago falló y se está reintentando. Tus funciones siguen funcionando durante este período. |
| Suspendido | Una factura quedó impaga hasta el final. Las acciones facturables están bloqueadas hasta que se pague; las funciones gratuitas continúan normalmente. |

:::tip[Precios en vivo]
Los precios unitarios y las asignaciones gratuitas siempre se muestran en el Portal, directamente desde nuestro sistema de facturación, para que puedas verificarlos antes de comprometerte. Ve [Facturación](/es-AR/portal/plan) para activar el pago por consumo, elegir tus cuentas y seguir el uso y las facturas del mes. Ve [Social](/es-AR/portal/social/what-is-social) para entender cómo el volumen de publicaciones afecta lo que gastás.
:::

## Efecto de la plataforma

Finalmente, a medida que seguimos creciendo en tamaño y reservas, queremos poder compartir algunos de los efectos de la plataforma con vos. Más reservas traen oportunidades de descuentos por volumen con nuestro procesador de pagos. Como el procesamiento con tarjeta se transfiere al costo, cualquier ahorro que negociemos va directo a los hoteles.

¡Sumate a Wink hoy y descubrí una forma nueva y rentable de hacer negocios en la industria hotelera!
