---
title: En pocas palabras
description: Este artículo te guía por todo lo que querías saber sobre el motor de reservas.
sidebar:
  order: 0
---

Así segmentamos la responsabilidad en Wink: 

- [Extranet](/es-AR/extranet/what-is-extranet) se ocupa de los proveedores que gestionan el inventario.
- [Studio](/es-AR/studio/what-is-studio) se ocupa de los afiliados que gestionan el contenido.
- `Booking Engine` se ocupa de hacer que el contenido, creado en `Studio`, que se basó en el inventario creado en `Extranet`, sea reservable.
- [Payment](/es-AR/payment/what-is-trip-pay) se ocupa de cobrar / reembolsar a los viajeros que reservan [a través de plataformas como Wink], y de pagar a los proveedores.

El motor de reservas está en el núcleo de nuestra plataforma.

Sus responsabilidades incluyen:

- Gestionar monedas y mantener las tasas de cambio actualizadas.
- Brindar a los proveedores de tarifas una forma de enviarnos datos de tarifas.
- Gestionar datos de consulta. *por ejemplo, regiones, países, destinos, propiedades, etc.*
- Gestionar idiomas.
- Generar análisis basados en interacciones de usuarios, eventos y llamadas API.
- Ofrecer inventario reservable en el formato, idioma y moneda deseados, tales como:
    - Un [enlace compartible](/es-AR/studio/shareable-links) en Facebook.
    - Una página de destino de hotel en https://ota.wink.travel con inventario para ese hotel.
    - Una [tarjeta](/es-AR/studio/cards) que contiene inventario afiliado.
    - Un [mapa](/es-AR/studio/maps) en tu cuenta de [WinkLinks](/es-AR/link-manager/wink-links).
    - Una [llamada API](/es-AR/developers/apis) desde un sistema remoto de agencia de viajes.
- Proporcionar a los viajeros una forma de: 
    - Buscar inventario de viajes.
    - Reservar inventario disponible.
    - Gestionar sus [reservas y reseñas](/es-AR/booking-engine/bookings).
    - Gestionar su [lista de deseos](/es-AR/booking-engine/bucket-list) de cosas para reservar en el futuro.
    - Gestionar su [perfil de viaje](/es-AR/booking-engine/travel-preferences). *por ejemplo, alergias, contacto de emergencia, etc.*

El motor de reservas es una colección de funcionalidades reutilizables que exponemos a través de https://ota.wink.travel; un sitio web altamente personalizable para que hoteles y afiliados vendan sus productos a los viajeros.

Los integradores, que quieren aún más libertad, tienen acceso a todas las mismas funciones a través de nuestro [plugin de WordPress](/es-AR/developers/wordpress/), [Web Components](/es-AR/developers/web-components) y [APIs](/es-AR/developers/apis).

Continúa con las siguientes secciones para leer más sobre lo que el motor de reservas tiene para ofrecer.

## Lecturas adicionales

- Lee sobre nuestro [plugin de WordPress](/es-AR/developers/wordpress/).
- Lee sobre nuestros [Web Components](/es-AR/developers/web-components).
- Lee sobre nuestras [APIs](/es-AR/developers/apis).
