---
title: Kort fortalt
description: Denne artikel guider dig gennem alt, hvad du ønskede at vide om bookingmotoren.
sidebar:
  order: 0
---

Sådan opdeler vi ansvaret på Wink:

- [Extranet](/da/extranet/what-is-extranet) beskæftiger sig med leverandører, der administrerer lager.
- [Studio](/da/studio/what-is-studio) beskæftiger sig med affiliates, der administrerer indhold.
- `Booking Engine` beskæftiger sig med at gøre det indhold, der er oprettet i `Studio`, baseret på lageret oprettet i `Extranet`, bookbart.
- [Payment](/da/payment/what-is-trip-pay) beskæftiger sig med at opkræve/refundere rejsende, der booker [gennem platforme som Wink], og betale leverandører.

Bookingmotoren er kernen i vores platform.

Dens ansvarsområder inkluderer:

- At administrere valutaer og holde valutakurser opdaterede.
- At give rateudbydere en måde at sende os ratedata på.
- At administrere opslagdata. *f.eks. regioner, lande, destinationer, ejendomme osv.*
- At administrere sprog.
- At generere analyser baseret på brugerinteraktioner, begivenheder og API-kald.
- At levere bookbart lager i det ønskede format, sprog og valuta, såsom:
    - Et [delbart link](/da/studio/shareable-links) på Facebook.
    - En hotel-landingsside på https://ota.wink.travel med lager for det pågældende hotel.
    - Et [kort](/da/studio/cards) indeholdende affiliate-lager.
    - Et [kort](/da/studio/maps) på din [WinkLinks](/da/link-manager/wink-links) konto.
    - Et [API-kald](/da/developers/apis) fra et eksternt rejsebureau-system.
- At give rejsende en måde at:
    - Søge efter rejselager.
    - Booke tilgængeligt lager.
    - Administrere deres [bookinger og anmeldelser](/da/booking-engine/bookings).
    - Administrere deres [bucket list](/da/booking-engine/bucket-list) over ting, de vil booke i fremtiden.
    - Administrere deres [rejseprofil](/da/booking-engine/travel-preferences). *f.eks. allergier, nød-kontaktperson osv.*

Bookingmotoren er en samling af genanvendelig funktionalitet, som vi eksponerer gennem https://ota.wink.travel; et højt tilpasseligt website for hoteller og affiliates til at sælge deres varer til rejsende.

Integratører, der ønsker endnu mere frihed, har adgang til alle de samme funktioner via vores [WordPress plugin](/da/developers/wordpress/), [Web Components](/da/developers/web-components) og [APIs](/da/developers/apis).

Fortsæt til de næste sektioner for at læse mere om, hvad bookingmotoren har at tilbyde.

## Yderligere læsning

- Læs om vores [WordPress plugin](/da/developers/wordpress/).
- Læs om vores [Web Components](/da/developers/web-components).
- Læs om vores [APIs](/da/developers/apis).
