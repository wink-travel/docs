---
title: Ukratko
description: Ovaj članak vodi vas kroz sve što ste željeli znati o booking engineu.
sidebar:
  order: 0
---

Evo kako dijelimo odgovornosti na Wink:

- [Extranet](/hr/extranet/what-is-extranet) se bavi dobavljačima koji upravljaju inventarom.
- [Studio](/hr/studio/what-is-studio) se bavi partnerima koji upravljaju sadržajem.
- `Booking Engine` se bavi stvaranjem sadržaja, kreiranog u `Studio`, koji je baziran na inventaru kreiranom u `Extranet` i omogućava njegovo rezerviranje.
- [Payment](/hr/payment/what-is-trip-pay) se bavi naplatom / povratom novca putnicima koji rezerviraju [kroz platforme poput Wink], te plaćanjem dobavljačima.

Booking engine je u središtu naše platforme.

Njegove odgovornosti uključuju:

- Upravljanje valutama i održavanje tečajeva ažurnima.
- Omogućavanje pružateljima cijena da nam šalju podatke o cijenama.
- Upravljanje podacima za pretraživanje. *npr. regije, zemlje, destinacije, objekti itd.*
- Upravljanje jezicima.
- Generiranje analitike na temelju korisničkih interakcija, događaja i API poziva.
- Prikazivanje rezervabilnog inventara u željenom formatu, jeziku i valuti, kao što su:
    - [dijeljivi link](/hr/studio/shareable-links) na Facebooku.
    - Početna stranica hotela na https://ota.wink.travel s inventarom za taj hotel.
    - [kartica](/hr/studio/cards) koja sadrži inventar partnera.
    - [karta](/hr/studio/maps) na vašem [WinkLinks](/hr/link-manager/wink-links) računu.
    - [API poziv](/hr/developers/apis) iz udaljenog sustava turističke agencije.
- Omogućavanje putnicima da:
    - Pretražuju turistički inventar.
    - Rezerviraju dostupni inventar.
    - Upravljaju svojim [rezervacijama i recenzijama](/hr/booking-engine/bookings).
    - Upravljaju svojim [bucket listom](/hr/booking-engine/bucket-list) stvari za buduće rezervacije.
    - Upravljaju svojim [putnim profilom](/hr/booking-engine/travel-preferences). *npr. alergije, kontakt u hitnim slučajevima itd.*

Booking engine je skup ponovo upotrebljivih funkcionalnosti koje izlažemo putem https://ota.wink.travel; visoko prilagodljive web stranice za hotele i partnere za prodaju njihovih usluga putnicima.

Integratori, koji žele još veću slobodu, imaju pristup svim istim značajkama putem našeg [WordPress plugina](/hr/developers/wordpress/), [Web Components](/hr/developers/web-components) i [API-ja](/hr/developers/apis).

Nastavite na sljedeće odjeljke kako biste saznali više o tome što booking engine nudi.

## Daljnje čitanje

- Pročitajte o našem [WordPress pluginu](/hr/developers/wordpress/).
- Pročitajte o našim [Web Components](/hr/developers/web-components).
- Pročitajte o našim [API-jima](/hr/developers/apis).
