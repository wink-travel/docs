---
title: En poques paraules
description: Aquest article t'explica tot el que volies saber sobre el motor de reserves.
sidebar:
  order: 0
---

Així és com segmentem la responsabilitat a Wink: 

- [Extranet](/ca/extranet/what-is-extranet) s'ocupa dels proveïdors que gestionen l'inventari.
- [Studio](/ca/studio/what-is-studio) s'ocupa dels afiliats que gestionen el contingut.
- `Booking Engine` s'ocupa de fer que el contingut, creat a `Studio`, que es basa en l'inventari creat a `Extranet`, sigui reservable.
- [Payment](/ca/payment/what-is-trip-pay) s'ocupa de cobrar / reemborsar els viatgers que reserven [a través de plataformes com Wink], i de pagar els proveïdors.

El motor de reserves és al cor de la nostra plataforma.

Les seves responsabilitats inclouen:

- Gestionar les monedes i mantenir els tipus de canvi actualitzats.
- Donar als proveïdors de tarifes una manera d'enviar-nos dades de tarifes.
- Gestionar dades de consulta. *per exemple regions, països, destinacions, establiments, etc.*
- Gestionar idiomes.
- Generar anàlisis basades en les interaccions d'usuaris, esdeveniments i crides API.
- Oferir inventari reservable en el format, idioma i moneda desitjats, com ara:
    - Un [enllaç compartible](/ca/studio/shareable-links) a Facebook.
    - Una pàgina d'aterratge d'hotel a https://ota.wink.travel amb inventari per a aquest hotel.
    - Una [targeta](/ca/studio/cards) que conté inventari d'afiliats.
    - Un [mapa](/ca/studio/maps) al teu compte de [WinkLinks](/ca/link-manager/wink-links).
    - Una [crida API](/ca/developers/apis) des d'un sistema remot d'agència de viatges.
- Proporcionar als viatgers una manera de: 
    - Cercar inventari de viatges.
    - Reservar inventari disponible.
    - Gestionar les seves [reserves i ressenyes](/ca/booking-engine/bookings).
    - Gestionar la seva [llista de desitjos](/ca/booking-engine/bucket-list) de coses per reservar en el futur.
    - Gestionar el seu [perfil de viatge](/ca/booking-engine/travel-preferences). *per exemple al·lèrgies, contacte d'emergència, etc.*

El motor de reserves és una col·lecció de funcionalitats reutilitzables que exposem a través de https://ota.wink.travel; un lloc web altament personalitzable perquè hotels i afiliats venguin els seus productes als viatgers.

Els integradors, que volen encara més llibertat, tenen accés a totes les mateixes funcions a través del nostre [plugin de WordPress](/ca/developers/wordpress/), [Web Components](/ca/developers/web-components) i [APIs](/ca/developers/apis).

Continua a les següents seccions per llegir més sobre el que ofereix el motor de reserves.

## Lectures complementàries

- Llegeix sobre el nostre [plugin de WordPress](/ca/developers/wordpress/).
- Llegeix sobre els nostres [Web Components](/ca/developers/web-components).
- Llegeix sobre les nostres [APIs](/ca/developers/apis).
