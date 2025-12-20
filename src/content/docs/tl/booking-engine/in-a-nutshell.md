---
title: Sa Buod
description: Tinuturuan ka ng artikulong ito tungkol sa lahat ng nais mong malaman tungkol sa booking engine.
sidebar:
  order: 0
---

Ganito namin hinahati ang responsibilidad sa Wink:

- Ang [Extranet](/tl/extranet/what-is-extranet) ay tumutok sa mga supplier na nagma-manage ng imbentaryo.
- Ang [Studio](/tl/studio/what-is-studio) ay tumutok sa mga affiliate na nagma-manage ng nilalaman.
- Ang `Booking Engine` ay tumutok sa paggawa ng nilalaman, na nilikha sa `Studio`, na nakabase sa imbentaryong nilikha sa `Extranet` at ginagawa itong ma-book.
- Ang [Payment](/tl/payment/what-is-trip-pay) ay tumutok sa pagsingil / pag-refund sa mga biyahero na nag-book [sa pamamagitan ng mga platform tulad ng Wink], at pagbabayad sa mga vendor.

Ang booking engine ang nasa puso ng aming platform.

Kabilang sa mga responsibilidad nito ang:

- Pamamahala ng mga pera at pagpapanatiling up-to-date ng mga exchange rate.
- Pagbibigay ng paraan sa mga rate provider para ipadala sa amin ang data ng rate.
- Pamamahala ng lookup data. *hal. mga rehiyon, bansa, destinasyon, mga property, atbp.*
- Pamamahala ng mga wika.
- Pagbuo ng analytics base sa mga interaksyon ng user, mga kaganapan, at mga tawag sa API.
- Pagseserbisyo ng bookable na imbentaryo sa nais na format, wika, at pera, tulad ng:
    - Isang [shareable link](/tl/studio/shareable-links) sa Facebook.
    - Isang hotel landing page sa https://ota.wink.travel na may imbentaryo para sa hotel na iyon.
    - Isang [card](/tl/studio/cards) na naglalaman ng affiliate inventory.
    - Isang [map](/tl/studio/maps) sa iyong [WinkLinks](/tl/link-manager/wink-links) account.
    - Isang [API call](/tl/developers/apis) mula sa isang remote travel agent system.
- Pagbibigay sa mga biyahero ng paraan upang:
    - Maghanap ng travel inventory.
    - Mag-book ng available na imbentaryo.
    - Pamahalaan ang kanilang [bookings and reviews](/tl/booking-engine/bookings).
    - Pamahalaan ang kanilang [bucket list](/tl/booking-engine/bucket-list) ng mga bagay na nais i-book sa hinaharap.
    - Pamahalaan ang kanilang [travel profile](/tl/booking-engine/travel-preferences). *hal. Allergies, emergency contact, atbp.*

Ang booking engine ay isang koleksyon ng mga reusable na functionality na aming inilalantad sa pamamagitan ng https://ota.wink.travel; isang lubos na nako-customize na website para sa mga hotel at affiliate upang ibenta ang kanilang mga produkto sa mga biyahero.

Ang mga integrator, na nais ng mas malawak na kalayaan, ay may access sa lahat ng parehong mga tampok sa pamamagitan ng aming [WordPress plugin](/tl/developers/wordpress/), [Web Components](/tl/developers/web-components) at [APIs](/tl/developers/apis).

Magpatuloy sa mga susunod na seksyon upang basahin pa ang tungkol sa mga inaalok ng booking engine.

## Karagdagang babasahin

- Basahin ang tungkol sa aming [WordPress plugin](/tl/developers/wordpress/).
- Basahin ang tungkol sa aming [Web Components](/tl/developers/web-components).
- Basahin ang tungkol sa aming [APIs](/tl/developers/apis).
