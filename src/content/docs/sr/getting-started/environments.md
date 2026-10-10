---
title: Okruženja
description: Ovaj članak sadrži informacije za testere i programere o tome kako dobiti pristup našim različitim serverskim okruženjima.
sidebar:
  order: 8
---

U Wink-u, uvek imamo 2 okruženja za sve što radimo:

- Production je naše stabilno okruženje.
- Staging je naše testno okruženje, i mesto gde se sertifikuju channel manageri i turističke agencije.

Ako želite da testirate Wink platformu, kao programer, hotel ili turistička agencija, napravite nalog u našem staging okruženju da biste započeli. Channel manageri takođe tamo obavljaju svoju [sertifikaciju](/sr/guides/integrators/add-your-channel-manager/#certification).

Kreiranje naloga u staging ili production okruženju zahteva prihvatanje Wink-ovih Uslova i Uslova plaćanja, a to prihvatanje je obavezujuće. Channel manageri i turističke agencije takođe moraju proći sertifikaciju pre pristupa production okruženju; svi ostali prelaze u production samostalno.

:::note
Staging okruženje je dostupno na zahtev. To znači da će otići u stanje mirovanja ako nema korišćenja i ponovo se uključiti kada ga neko koristi. Molimo vas za strpljenje dok ga budite. Potrebno je oko minut da se svi serveri pokrenu nakon što se prvi put povežete sa jednim od naših servera ili aplikacija.
:::

## Serveri

Ispod je matrica koja sadrži nazive naših servera i njihovu namenu.

| Funkcija | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikacije

Naše aplikacije takođe imaju testna i produkciona okruženja za naše korisnike.

| Aplikacija | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
