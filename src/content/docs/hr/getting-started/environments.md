---
title: Okruženja
description: Ovaj članak sadrži informacije za testere i programere o tome kako dobiti pristup našim različitim serverskim okruženjima.
sidebar:
  order: 8
---

U Wink-u, uvijek imamo 2 okruženja za sve što radimo:

- Production je naše stabilno okruženje.
- Staging je naše testno okruženje, i mjesto gdje se certificiraju channel manageri i turističke agencije.

Ako želite testirati Wink platformu, kao programer, hotel ili turistička agencija, kreirajte račun u našem staging okruženju da biste započeli. Channel manageri također tamo obavljaju svoju [certifikaciju](/hr/guides/integrators/add-your-channel-manager/#certification).

Kreiranje računa u staging ili production zahtijeva prihvaćanje Wink-ovih Uvjeta i Uvjeta plaćanja, a to prihvaćanje je obvezujuće. Channel manageri i turističke agencije također trebaju certifikaciju prije pristupa production okruženju; svi ostali prelaze u production samostalno.

:::note
Staging okruženje je dostupno na zahtjev. To znači da će otići u stanje mirovanja ako nema korištenja i ponovno se uključiti kada ga netko koristi. Molimo budite strpljivi ako ga budite. Potrebno je oko minute da se svi serveri pokrenu nakon što se prvi put povežete s jednim od naših servera ili aplikacija.
:::

## Serveri

Ispod je matrica koja sadrži nazive naših servera i njihovu namjenu.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikacije

Naše aplikacije također imaju testna i produkcijska okruženja za naše korisnike.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
