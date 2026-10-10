---
title: Ympäristöt
description: Tässä artikkelissa on tietoa testaajille ja kehittäjille siitä, miten pääset käsiksi eri palvelinympäristöihimme.
sidebar:
  order: 8
---

Winkillä ylläpidämme jatkuvasti kahta ympäristöä kaikkeen toimintaamme:

- Production on vakaa ympäristömme.
- Staging on testausympäristömme, jossa kanavanhallinnoijat ja matkatoimistot suorittavat sertifiointinsa.

Jos haluat testata Wink-alustaa kehittäjänä, hotellina tai matkatoimistona, luo tili staging-ympäristössämme aloittaaksesi. Kanavanhallinnoijat suorittavat myös [sertifiointinsa](/fi/guides/integrators/add-your-channel-manager/#certification) siellä.

Tilin luominen staging- tai production-ympäristöön edellyttää Wink:n käyttöehtojen ja maksuehtojen hyväksymistä, ja hyväksyntä on sitova. Kanavanhallinnoijat ja matkatoimistot tarvitsevat myös sertifioinnin ennen pääsyä productioniin; muut siirtyvät productioniin itsenäisesti.

:::note
Staging-ympäristö on käytettävissä pyynnöstä. Tämä tarkoittaa, että se menee lepotilaan, jos sitä ei käytetä, ja käynnistyy uudelleen käytön alkaessa. Ole kärsivällinen, kun herätät sitä. Kaikkien palvelimien käynnistäminen kestää noin minuutin, kun yhdistät ensimmäisen kerran johonkin palvelimistamme tai sovelluksistamme.
:::

## Palvelimet

Alla on taulukko, joka sisältää palvelimiemme nimet ja niiden käyttötarkoitukset.

| Ominaisuus | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Sovellukset

Myös sovelluksillamme on testaus- ja tuotantoympäristöt asiakkaillemme.

| Sovellus | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Varauskone | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
