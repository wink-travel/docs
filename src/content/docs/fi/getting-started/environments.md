---
title: Ympäristöt
description: Tässä artikkelissa on tietoa testaajille ja kehittäjille siitä, miten pääset käsiksi eri palvelinympäristöihimme.
sidebar:
  order: 8
---

Winkillä meillä on jatkuvasti käytössä 2 ympäristöä kaikkeen toimintaamme:

- Production on vakaa ympäristömme.
- Staging on sertifiointi- ja testausympäristömme.

Jos olet integraattori, hotelli tai matkatoimisto, joka haluaa valmistautua sertifiointiin tai testata Wink-alustaa, luo tili staging-ympäristössämme aloittaaksesi.

:::note
Staging-ympäristö on saatavilla pyynnöstä. Tämä tarkoittaa, että se menee lepotilaan, jos sitä ei käytetä, ja käynnistyy uudelleen, kun käyttöä on. Ole kärsivällinen, kun herätät sitä. Kaikkien palvelimien käynnistäminen kestää noin minuutin sen jälkeen, kun olet ensimmäistä kertaa yhdistänyt johonkin palvelimistamme tai sovelluksistamme.
:::

## Palvelimet

Alla on matriisi, joka sisältää palvelimiemme nimet ja niiden käyttötarkoitukset.

| Ominaisuus | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Payment | https://staging-api.trippay.io | https://api.trippay.io | 

## Sovellukset

Myös sovelluksillamme on testaus- ja tuotantoympäristöt asiakkaillemme.

| Sovellus | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Corporate | https://staging-group.wink.travel | https://group.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
