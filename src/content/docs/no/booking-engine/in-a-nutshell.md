---
title: I et nøtteskall
description: Denne artikkelen tar deg gjennom alt du ønsket å vite om bookingmotoren.
sidebar:
  order: 0
---
Slik segmenterer vi ansvaret på Wink:

* [Ekstranett](/extranet/what-is-extranet)bekymrer seg for leverandører som administrerer lagerbeholdning.
* [Studio](/studio/what-is-studio)bekymrer seg for tilknyttede selskaper som administrerer innhold.
* `Booking Engine`opptar seg med å lage innholdet, skapt i`Studio`, som var basert på varelageret som ble opprettet i`Extranet`og gjøre det bestillbart.
* [Betaling](/payment/what-is-trip-pay)driver med å belaste/refusjonere reisende som bestiller \[gjennom plattformer som Wink], og betale leverandører.

Bookingmotoren er kjernen i plattformen vår.

Ansvaret omfatter:

* Valutahåndtering og oppdaterte valutakurser.
* Gi prisleverandører en måte å sende oss prisdata.
* Administrere oppslagsdata.*f.eks. regioner, land, destinasjoner, eiendommer osv.*
* Administrere språk.
* Generere analyser basert på brukerinteraksjoner, hendelser og API-kall.
* Vise bestillbar beholdning i ønsket format, språk og valuta, for eksempel:
  * En[delbar lenke](/studio/shareable-links)på Facebook.
  * En hotelllandingsside på https://ota.wink.travel med inventar for det hotellet.
  * En[kort](/studio/cards)som inneholder tilknyttet beholdning.
  * En[kart](/studio/maps)på din[WinkLinks](/link-manager/wink-links)konto.
  * En[API-kall](/developers/apis)fra et eksternt reisebyråsystem.
* Å gi reisende en måte å:
  * Søk etter reiseinventar.
  * Bestill tilgjengelig inventar.
  * Administrer deres[bestillinger og anmeldelser](/booking-engine/bookings).
  * Administrer deres[ønskeliste](/booking-engine/bucket-list)ting å bestille i fremtiden.
  * Administrer deres[reiseprofil](/booking-engine/travel-preferences).*f.eks. allergier, nødkontakt osv.*

Bestillingsmotoren er en samling av gjenbrukbar funksjonalitet som vi eksponerer gjennom https://ota.wink.travel; et svært tilpassbart nettsted for hoteller og samarbeidspartnere for å selge varene sine til reisende.

Integratorer som ønsker enda mer frihet har tilgang til alle de samme funksjonene via vår[WordPress-plugin](/developers/wordpress/),[Nettkomponenter](/developers/web-components)og[API-er](/developers/apis).

Fortsett til de neste avsnittene for å lese mer om hva bookingmotoren har å tilby.

## Videre lesning

* Les om våre[WordPress-plugin](/developers/wordpress/).
* Les om våre[Nettkomponenter](/developers/web-components).
* Les om våre[API-er](/developers/apis).

