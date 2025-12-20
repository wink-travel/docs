---
title: Okruženja
description: Ovaj članak sadrži informacije za testere i programere o tome kako pristupiti našim različitim serverskim okruženjima.
sidebar:
  order: 8
---

U Wink-u uvijek imamo 2 okruženja za sve što radimo:

- Production je naše stabilno okruženje.
- Staging je naše okruženje za certifikaciju i testiranje.

Ako ste integrator, hotel ili turistička agencija koja želi pripremiti certifikaciju ili testirati Wink platformu, kreirajte račun u našem staging okruženju da biste započeli.

:::note
Staging okruženje je dostupno na zahtjev. To znači da će ući u stanje mirovanja ako nema korištenja i ponovno se uključiti kada ga netko koristi. Molimo vas za strpljenje dok ga budite. Potrebno je oko minute da se svi serveri pokrenu nakon što se prvi put povežete s jednim od naših servera ili aplikacija.
:::

## Serveri

Ispod je matrica koja sadrži nazive naših servera i njihovu namjenu.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Payment | https://staging-api.trippay.io | https://api.trippay.io | 

## Aplikacije

Naše aplikacije također imaju testna i produkcijska okruženja za naše korisnike.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Corporate | https://staging-group.wink.travel | https://group.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
