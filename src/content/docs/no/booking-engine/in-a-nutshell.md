---
title: Kort fortalt
description: Denne artikkelen tar deg gjennom alt du ønsket å vite om bookingmotoren.
sidebar:
  order: 0
---

Slik deler vi ansvaret i Wink:

- [Extranet](/no/extranet/what-is-extranet) handler om leverandører som administrerer inventar.
- [Studio](/no/studio/what-is-studio) handler om tilknyttede partnere som administrerer innhold.
- `Booking Engine` handler om å gjøre innholdet, opprettet i `Studio`, som var basert på inventaret opprettet i `Extranet`, bookbart.
- [Payment](/no/payment/what-is-trip-pay) handler om å belaste / refundere reisende som booker [gjennom plattformer som Wink], og betale leverandører.

Bookingmotoren er kjernen i plattformen vår.

Dens ansvarsområder inkluderer:

- Administrere valutaer og holde valutakurser oppdatert.
- Gi prisleverandører en måte å sende oss prisdata på.
- Administrere oppslagsdata. *f.eks. regioner, land, destinasjoner, eiendommer osv.*
- Administrere språk.
- Generere analyser basert på brukerinteraksjoner, hendelser og API-kall.
- Levere bookbart inventar i ønsket format, språk og valuta, slik som:
    - En [delbar lenke](/no/studio/shareable-links) på Facebook.
    - En hotell-landingsside på https://ota.wink.travel med inventar for det hotellet.
    - Et [kort](/no/studio/cards) som inneholder tilknyttet inventar.
    - Et [kart](/no/studio/maps) på din [WinkLinks](/no/link-manager/wink-links)-konto.
    - Et [API-kall](/no/developers/apis) fra et eksternt reisebyråsystem.
- Gi reisende en måte å:
    - Søke etter reiseinventar.
    - Booke tilgjengelig inventar.
    - Administrere sine [bookinger og anmeldelser](/no/booking-engine/bookings).
    - Administrere sin [bucket list](/no/booking-engine/bucket-list) over ting å booke i fremtiden.
    - Administrere sin [reiseprofil](/no/booking-engine/travel-preferences). *f.eks. allergier, nød-kontakt osv.*

Bookingmotoren er en samling av gjenbrukbar funksjonalitet som vi eksponerer gjennom https://ota.wink.travel; et svært tilpassbart nettsted for hoteller og tilknyttede partnere for å selge sine tjenester til reisende.

Integratører som ønsker enda mer frihet, har tilgang til alle de samme funksjonene via vår [WordPress-plugin](/no/developers/wordpress/), [Web Components](/no/developers/web-components) og [API-er](/no/developers/apis).

Fortsett til neste seksjoner for å lese mer om hva bookingmotoren har å tilby.

## Videre lesning

- Les om vår [WordPress-plugin](/no/developers/wordpress/).
- Les om våre [Web Components](/no/developers/web-components).
- Les om våre [API-er](/no/developers/apis).
