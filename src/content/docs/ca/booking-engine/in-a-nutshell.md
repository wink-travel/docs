---
title: En poques paraules
description: Aquest article t'explica tot el que volies saber sobre el motor de reserves.
sidebar:
  order: 0
---
Així és com segmentem la responsabilitat a Wink:

* [Extranet](/extranet/what-is-extranet) es preocupa pels proveïdors que gestionen l'inventari.
* [Estudi](/studio/what-is-studio) es preocupa pels afiliats que gestionen contingut.
* `Booking Engine`es preocupa de fer el contingut, creat en`Studio`, que es basava en l'inventari creat el`Extranet`i fent-ho reservable.
* [Pagament](/payment/what-is-trip-pay) es preocupa de cobrar/reemborsar els viatgers que reserven \[a través de plataformes com Wink] i de pagar els proveïdors.

El motor de reserves és el nucli de la nostra plataforma.

Les seves responsabilitats inclouen:

* Gestió de divises i manteniment actualitzat dels tipus de canvi.
* Donant als proveïdors de tarifes una manera d'enviar-nos dades de tarifes.
* Gestió de dades de cerca.*p. ex. regions, països, destinacions, propietats, etc.*
* Gestió d'idiomes.
* Generació d'analítiques basades en interaccions d'usuaris, esdeveniments i crides a l'API.
* Publicació d'inventari reservable en el format, l'idioma i la moneda desitjats, com ara:
  * Un [enllaç compartible](/studio/shareable-links) a Facebook.
  * Una pàgina de destinació d'un hotel a https://ota.wink.travel amb inventari per a aquest hotel.
  * Un [targeta](/studio/cards) que conté inventari d'afiliats.
  * Un [mapa](/studio/maps) al teu [mapa](/studio/maps) compte.
  * Un [Crida a l'API](/developers/apis) des d'un sistema d'agència de viatges remota.
* Oferir als viatgers una manera de:
  * Cerca d'inventari de viatges.
  * Reserva l'inventari disponible.
  * Gestionar els seus[reserves i ressenyes](/booking-engine/bookings).
  * Gestionar els seus [llista de desitjos](/booking-engine/bucket-list) de coses per reservar en el futur.
  * Gestionar els seus[perfil de viatge](/booking-engine/travel-preferences).*p. ex. al·lèrgies, contacte d'emergència, etc.*

El motor de reserves és un conjunt de funcionalitats reutilitzables que exposem a través de https://ota.wink.travel; un lloc web altament personalitzable perquè hotels i afiliats puguin vendre els seus productes als viatgers.

Els integradors que volen encara més llibertat tenen accés a totes les mateixes funcions a través de la nostra [Complement de WordPress](/developers/wordpress/), [Complement de WordPress](/developers/wordpress/) i[API](/developers/apis).

Continua a les següents seccions per llegir més sobre el que ofereix el motor de reserves.

## Lectures addicionals

* Llegeix sobre el nostre[Complement de WordPress](/developers/wordpress/).
* Llegeix sobre el nostre[Components web](/developers/web-components).
* Llegeix sobre el nostre[API](/developers/apis).

