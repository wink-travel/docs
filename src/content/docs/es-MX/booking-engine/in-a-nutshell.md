---
title: En resumen
description: Este artículo te guía a través de todo lo que querías saber sobre el motor de reservas.
sidebar:
  order: 0
---

Así es como segmentamos la responsabilidad en Wink:

- [Extranet](/es-MX/extranet/what-is-extranet) se encarga de que los proveedores gestionen el inventario.
- [Studio](/es-MX/studio/what-is-studio) se encarga de que los afiliados gestionen el contenido.
- `Booking Engine` se encarga de hacer que el contenido, creado en `Studio`, que se basó en el inventario creado en `Extranet`, sea reservable.
- [Payment](/es-MX/payment/what-is-trip-pay) se encarga de cobrar / reembolsar a los viajeros que reservan [a través de plataformas como Wink], y de pagar a los proveedores.

El motor de reservas está en el núcleo de nuestra plataforma.

Sus responsabilidades incluyen:

- Gestionar monedas y mantener las tasas de cambio actualizadas.
- Dar a los proveedores de tarifas una forma de enviarnos datos de tarifas.
- Gestionar datos de consulta. *por ejemplo, regiones, países, destinos, propiedades, etc.*
- Gestionar idiomas.
- Generar análisis basados en interacciones de usuarios, eventos y llamadas API.
- Proveer inventario reservable en el formato, idioma y moneda deseados, tales como:
    - Un [enlace compartible](/es-MX/studio/shareable-links) en Facebook.
    - Una página de aterrizaje de hotel en https://ota.wink.travel con inventario para ese hotel.
    - Una [tarjeta](/es-MX/studio/cards) que contiene inventario afiliado.
    - Un [mapa](/es-MX/studio/maps) en tu cuenta de [WinkLinks](/es-MX/link-manager/wink-links).
    - Una [llamada API](/es-MX/developers/apis) desde un sistema remoto de agentes de viaje.
- Proveer a los viajeros una forma de:
    - Buscar inventario de viajes.
    - Reservar inventario disponible.
    - Gestionar sus [reservas y reseñas](/es-MX/booking-engine/bookings).
    - Gestionar su [lista de deseos](/es-MX/booking-engine/bucket-list) de cosas para reservar en el futuro.
    - Gestionar su [perfil de viaje](/es-MX/booking-engine/travel-preferences). *por ejemplo, alergias, contacto de emergencia, etc.*

El motor de reservas es una colección de funcionalidades reutilizables que exponemos a través de https://ota.wink.travel; un sitio web altamente personalizable para que hoteles y afiliados vendan sus productos a los viajeros.

Los integradores, que quieren aún más libertad, tienen acceso a todas las mismas funciones mediante nuestro [plugin de WordPress](/es-MX/developers/wordpress/), [Web Components](/es-MX/developers/web-components) y [APIs](/es-MX/developers/apis).

Continúa con las siguientes secciones para leer más sobre lo que el motor de reservas tiene para ofrecer.

## Lectura adicional

- Lee sobre nuestro [plugin de WordPress](/es-MX/developers/wordpress/).
- Lee sobre nuestros [Web Components](/es-MX/developers/web-components).
- Lee sobre nuestras [APIs](/es-MX/developers/apis).
