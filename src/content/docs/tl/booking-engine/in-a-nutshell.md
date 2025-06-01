---
title: Sa madaling sabi
description: >-
  Gagabayan ka ng artikulong ito sa lahat ng gusto mong malaman tungkol sa
  booking engine.
sidebar:
  order: 0
---
Narito kung paano namin i-segment ang responsibilidad sa Wink:

* [Extranet](/extranet/what-is-extranet) nag-aalala mismo sa mga supplier na namamahala ng imbentaryo.
* [Studio](/studio/what-is-studio) nag-aalala mismo sa mga kaakibat na namamahala ng nilalaman.
* `Booking Engine` nag-aalala mismo sa paggawa ng nilalaman, na ginawa sa `Studio`, na batay sa imbentaryo na ginawa sa `Extranet` at ginagawa itong bookable.
* [Pagbabayad](/payment/what-is-trip-pay) nag-aalala mismo sa pagsingil / pag-refund sa mga manlalakbay na nagbu-book \[sa pamamagitan ng mga platform tulad ng Wink], at nagbabayad na mga vendor.

Ang booking engine ay nasa core ng aming platform.

Kasama sa mga responsibilidad nito ang:

* Pamamahala ng mga pera at pagpapanatiling napapanahon ang mga halaga ng palitan.
* Ang pagbibigay sa mga provider ng rate ng paraan upang magpadala sa amin ng data ng rate.
* Pamamahala ng data ng paghahanap. *hal. rehiyon, bansa, destinasyon, ari-arian atbp.*
* Pamamahala ng mga wika.
* Bumubuo ng analytics batay sa mga pakikipag-ugnayan ng user, mga kaganapan at mga tawag sa API.
* Naghahatid ng mai-book na imbentaryo sa gustong format, wika at pera, gaya ng:
  * A [maibabahaging link](/studio/shareable-links) sa Facebook.
  * Isang landing page ng hotel sa https://ota.wink.travel na may imbentaryo para sa hotel na iyon.
  * A [card](/studio/cards) naglalaman ng imbentaryo ng kaakibat.
  * A [mapa](/studio/maps) sa iyong [WinkLinks](/link-manager/wink-links) account.
  * An [API na tawag](/developers/apis) mula sa isang remote travel agent system.
* Pagbibigay sa mga manlalakbay ng paraan upang:
  * Maghanap ng imbentaryo ng paglalakbay.
  * Mag-book ng available na imbentaryo.
  * Pamahalaan ang kanilang [mga booking at review](/booking-engine/bookings).
  * Pamahalaan ang kanilang [listahan ng bucket](/booking-engine/bucket-list) ng mga bagay na i-book sa hinaharap.
  * Pamahalaan ang kanilang [profile sa paglalakbay](/booking-engine/travel-preferences). *hal. Allergy, emergency contact atbp.*

Ang booking engine ay isang koleksyon ng magagamit muli na functionality na inilalantad namin sa pamamagitan ng https://ota.wink.travel; isang lubos na nako-customize na website para sa mga hotel at mga kaakibat upang ibenta ang kanilang mga paninda sa mga manlalakbay.

Ang mga integrator, na gusto ng higit pang kalayaan, ay may access sa lahat ng parehong mga tampok sa pamamagitan ng aming [WordPress plugin](/developers/wordpress/), [Mga Bahagi ng Web](/developers/web-components) at [Mga API](/developers/apis).

Magpatuloy sa susunod na mga seksyon upang magbasa nang higit pa tungkol sa kung ano ang inaalok ng booking engine.

## Karagdagang pagbabasa

* Basahin ang tungkol sa aming [WordPress plugin](/developers/wordpress/).
* Basahin ang tungkol sa aming [Mga Bahagi ng Web](/developers/web-components).
* Basahin ang tungkol sa aming [Mga API](/developers/apis).

