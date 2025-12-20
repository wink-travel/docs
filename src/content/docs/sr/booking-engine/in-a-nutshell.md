---
title: Ukratko
description: Ovaj članak vas vodi kroz sve što ste želeli da znate o booking engine-u.
sidebar:
  order: 0
---

Evo kako delimo odgovornosti na Wink-u:

- [Extranet](/sr/extranet/what-is-extranet) se bavi dobavljačima koji upravljaju inventarom.
- [Studio](/sr/studio/what-is-studio) se bavi afilijatima koji upravljaju sadržajem.
- `Booking Engine` se bavi pravljenjem sadržaja, kreiranog u `Studio`, koji je zasnovan na inventaru kreiranom u `Extranet` i omogućava njegovo rezervisanje.
- [Payment](/sr/payment/what-is-trip-pay) se bavi naplatom / povraćajem novca putnicima koji rezervišu [kroz platforme poput Wink-a], i plaćanjem dobavljačima.

Booking engine je u srcu naše platforme.

Njegove odgovornosti uključuju:

- Upravljanje valutama i održavanje ažurnih kurseva.
- Omogućavanje provajderima cena da nam šalju podatke o cenama.
- Upravljanje podacima za pretragu. *npr. regioni, zemlje, destinacije, objekti itd.*
- Upravljanje jezicima.
- Generisanje analitike na osnovu korisničkih interakcija, događaja i API poziva.
- Prikazivanje rezervabilnog inventara u željenom formatu, jeziku i valuti, kao što su:
    - [deljivi link](/sr/studio/shareable-links) na Facebook-u.
    - Landing stranica hotela na https://ota.wink.travel sa inventarom za taj hotel.
    - [kartica](/sr/studio/cards) koja sadrži afilijatski inventar.
    - [mapa](/sr/studio/maps) na vašem [WinkLinks](/sr/link-manager/wink-links) nalogu.
    - [API poziv](/sr/developers/apis) iz udaljenog sistema turističke agencije.
- Omogućavanje putnicima da:
    - Pretražuju turistički inventar.
    - Rezervišu dostupan inventar.
    - Upravljaju svojim [rezervacijama i recenzijama](/sr/booking-engine/bookings).
    - Upravljaju svojom [bucket list-om](/sr/booking-engine/bucket-list) stvari koje žele da rezervišu u budućnosti.
    - Upravljaju svojim [putnim profilom](/sr/booking-engine/travel-preferences). *npr. alergije, kontakt za hitne slučajeve itd.*

Booking engine je skup ponovo upotrebljivih funkcionalnosti koje izlažemo preko https://ota.wink.travel; visoko prilagodljivog sajta za hotele i afilijate da prodaju svoje usluge putnicima.

Integratori, koji žele još veću slobodu, imaju pristup svim istim funkcijama putem našeg [WordPress plugina](/sr/developers/wordpress/), [Web Components](/sr/developers/web-components) i [API-ja](/sr/developers/apis).

Nastavite na sledeće sekcije da biste saznali više o tome šta booking engine nudi.

## Dalje čitanje

- Pročitajte o našem [WordPress pluginu](/sr/developers/wordpress/).
- Pročitajte o našim [Web Components](/sr/developers/web-components).
- Pročitajte o našim [API-jima](/sr/developers/apis).
