---
title: V skratke
description: Tento článok vás prevedie všetkým, čo ste chceli vedieť o booking engine.
sidebar:
  order: 0
---

Takto rozdeľujeme zodpovednosti vo Wink:

- [Extranet](/sk/extranet/what-is-extranet) sa zaoberá dodávateľmi spravujúcimi inventár.
- [Studio](/sk/studio/what-is-studio) sa zaoberá pridruženými partnermi spravujúcimi obsah.
- `Booking Engine` sa zaoberá tým, aby obsah vytvorený v `Studio`, ktorý bol založený na inventári vytvorenom v `Extranet`, spravil rezervovateľným.
- [Payment](/sk/payment/what-is-trip-pay) sa zaoberá účtovaním / vrátením peňazí cestujúcim, ktorí si rezervujú [prostredníctvom platforiem ako Wink], a platením dodávateľom.

Booking engine je jadrom našej platformy.

Jeho zodpovednosti zahŕňajú:

- Spravovanie mien a udržiavanie aktuálnych výmenných kurzov.
- Poskytnutie spôsobu pre poskytovateľov cien, ako nám posielať cenové údaje.
- Spravovanie vyhľadávacích údajov. *napr. regióny, krajiny, destinácie, objekty atď.*
- Spravovanie jazykov.
- Generovanie analytiky na základe interakcií používateľov, udalostí a API volaní.
- Poskytovanie rezervovateľného inventára v požadovanom formáte, jazyku a mene, ako napríklad:
    - [zdieľateľný odkaz](/sk/studio/shareable-links) na Facebooku.
    - Hotelová vstupná stránka na https://ota.wink.travel s inventárom pre daný hotel.
    - [karta](/sk/studio/cards) obsahujúca inventár pridružených partnerov.
    - [mapa](/sk/studio/maps) vo vašom účte [WinkLinks](/sk/link-manager/wink-links).
    - [API volanie](/sk/developers/apis) z diaľkového systému cestovnej agentúry.
- Poskytovanie cestujúcim spôsobu, ako:
    - Vyhľadávať cestovný inventár.
    - Rezervovať dostupný inventár.
    - Spravovať svoje [rezervácie a recenzie](/sk/booking-engine/bookings).
    - Spravovať svoj [bucket list](/sk/booking-engine/bucket-list) vecí na rezervovanie v budúcnosti.
    - Spravovať svoj [cestovný profil](/sk/booking-engine/travel-preferences). *napr. alergie, kontaktná osoba pre núdzové situácie atď.*

Booking engine je zbierka znovupoužiteľnej funkcionality, ktorú sprístupňujeme cez https://ota.wink.travel; vysoko prispôsobiteľnú webovú stránku pre hotely a pridružených partnerov na predaj ich ponúk cestujúcim.

Integrátori, ktorí chcú ešte väčšiu slobodu, majú prístup ku všetkým rovnakým funkciám cez náš [WordPress plugin](/sk/developers/wordpress/), [Web Components](/sk/developers/web-components) a [APIs](/sk/developers/apis).

Pokračujte do ďalších sekcií, aby ste sa dozvedeli viac o tom, čo booking engine ponúka.

## Ďalšie čítanie

- Prečítajte si o našom [WordPress plugine](/sk/developers/wordpress/).
- Prečítajte si o našich [Web Components](/sk/developers/web-components).
- Prečítajte si o našich [APIs](/sk/developers/apis).
