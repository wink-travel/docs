---
title: Okolja
description: Ta članek vsebuje informacije za testirce in razvijalce o tem, kako pridobiti dostop do naših različnih strežniških okolij.
sidebar:
  order: 8
---

V Wink-u ves čas upravljamo 2 okolji za vse, kar počnemo:

- Produkcija je naše stabilno okolje.
- Staging je naše okolje za certificiranje in testiranje.

Če ste integrator, hotel ali turistični agent, ki želi pripraviti certificiranje ali testirati platformo Wink, ustvarite račun v našem staging okolju, da začnete.

:::note
Staging okolje je na voljo na zahtevo. To pomeni, da se bo uspalo, če ni uporabe, in se bo ponovno zbudilo, ko bo uporaba. Prosimo za potrpežljivost, če ga prebujaš. Zagon vseh strežnikov traja približno minuto po prvi povezavi z enim od naših strežnikov ali aplikacij.
:::

## Strežniki

Spodaj je matrika z imeni naših strežnikov in njihovo uporabo.

| Funkcija | Staging | Produkcija
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikacije

Naše aplikacije imajo prav tako testna in produkcijska okolja za naše uporabnike.

| Aplikacija | Staging | Produkcija
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
