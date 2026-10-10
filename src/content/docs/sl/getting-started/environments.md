---
title: Okolja
description: Ta članek vsebuje informacije za testirce in razvijalce o tem, kako pridobiti dostop do naših različnih strežniških okolij.
sidebar:
  order: 8
---

V Wink vedno hkrati upravljamo 2 okolji za vse, kar počnemo:

- Produkcija je naše stabilno okolje.
- Staging je naše testno okolje, kjer potekajo certifikacije za channel managerje in potovalne agencije.

Če želite preizkusiti platformo Wink kot razvijalec, hotel ali potovalna agencija, ustvarite račun v našem staging okolju, da začnete. Channel managerji prav tako izvajajo svojo [certifikacijo](/sl/guides/integrators/add-your-channel-manager/#certification) tam.

Ustvarjanje računa v staging ali produkciji zahteva sprejem pogojev uporabe Wink in plačilnih pogojev, pri čemer je ta sprejem zavezujoč. Channel managerji in potovalne agencije prav tako potrebujejo certifikacijo pred dostopom do produkcije; vsi ostali pa se v produkcijo premaknejo sami.

:::note
Staging okolje je na voljo na zahtevo. To pomeni, da se bo uspavalo, če ni uporabe, in se bo samo ponovno zagnalo, ko bo uporaba spet prisotna. Prosimo za potrpežljivost, če ga prebujaš. Zagon vseh strežnikov traja približno minuto po prvi povezavi z enim od naših strežnikov ali aplikacij.
:::

## Strežniki

Spodaj je matrika z imeni naših strežnikov in njihovo uporabo.

| Funkcija | Staging | Produkcija
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikacije

Naše aplikacije imajo prav tako testna in produkcijska okolja za naše stranke.

| Aplikacija | Staging | Produkcija
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
