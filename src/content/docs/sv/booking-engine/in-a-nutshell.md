---
title: Kortfattat
description: Den här artikeln guidar dig genom allt du ville veta om bokningsmotorn.
sidebar:
  order: 0
---

Så här delar vi upp ansvaret på Wink:

- [Extranet](/sv/extranet/what-is-extranet) hanterar leverantörer som sköter inventarier.
- [Studio](/sv/studio/what-is-studio) hanterar affiliates som sköter innehåll.
- `Booking Engine` ansvarar för att göra innehållet, skapat i `Studio`, som baserades på inventariet skapat i `Extranet`, bokningsbart.
- [Payment](/sv/payment/what-is-trip-pay) ansvarar för att debitera / återbetala resenärer som bokar [genom plattformar som Wink], och betala leverantörer.

Bokningsmotorn är kärnan i vår plattform.

Dess ansvarsområden inkluderar:

- Hantera valutor och hålla växelkurser uppdaterade.
- Ge prisleverantörer ett sätt att skicka oss prisdata.
- Hantera uppslagsdata. *t.ex. regioner, länder, destinationer, boenden etc.*
- Hantera språk.
- Generera analyser baserat på användarinteraktioner, händelser och API-anrop.
- Tillhandahålla bokningsbart inventarie i önskat format, språk och valuta, såsom:
    - En [delbar länk](/sv/studio/shareable-links) på Facebook.
    - En hotelllandningssida på https://ota.wink.travel med inventarie för det hotellet.
    - Ett [kort](/sv/studio/cards) som innehåller affiliate-inventarie.
    - En [karta](/sv/studio/maps) på ditt [WinkLinks](/sv/link-manager/wink-links)-konto.
    - Ett [API-anrop](/sv/developers/apis) från ett fjärrstyrt resebyråsystem.
- Ge resenärer ett sätt att:
    - Söka efter reseinventarie.
    - Boka tillgängligt inventarie.
    - Hantera sina [bokningar och recensioner](/sv/booking-engine/bookings).
    - Hantera sin [bucket list](/sv/booking-engine/bucket-list) med saker att boka i framtiden.
    - Hantera sin [reseprofil](/sv/booking-engine/travel-preferences). *t.ex. allergier, nödkontakt etc.*

Bokningsmotorn är en samling återanvändbar funktionalitet som vi exponerar via https://ota.wink.travel; en mycket anpassningsbar webbplats för hotell och affiliates att sälja sina tjänster till resenärer.

Integratörer som vill ha ännu mer frihet har tillgång till alla samma funktioner via vår [WordPress-plugin](/sv/developers/wordpress/), [Web Components](/sv/developers/web-components) och [APIs](/sv/developers/apis).

Fortsätt till nästa avsnitt för att läsa mer om vad bokningsmotorn har att erbjuda.

## Vidare läsning

- Läs om vår [WordPress-plugin](/sv/developers/wordpress/).
- Läs om våra [Web Components](/sv/developers/web-components).
- Läs om våra [APIs](/sv/developers/apis).
