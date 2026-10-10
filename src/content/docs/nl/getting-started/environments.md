---
title: Omgevingen
description: Dit artikel bevat informatie voor testers en ontwikkelaars over hoe toegang te krijgen tot onze verschillende serveromgevingen.
sidebar:
  order: 8
---

Bij Wink draaien we te allen tijde 2 omgevingen voor alles wat we doen:

- Productie is onze stabiele omgeving.
- Staging is onze testomgeving, en waar channel managers en reisagenten gecertificeerd worden.

Als je het Wink-platform wilt testen, als ontwikkelaar, hotel of reisagent, maak dan een account aan in onze staging-omgeving om te beginnen. Channel managers voeren daar ook hun [certificering](/nl/guides/integrators/add-your-channel-manager/#certification) uit.

Een account aanmaken in staging of productie vereist het accepteren van de Wink-voorwaarden en betalingsvoorwaarden, en die acceptatie is bindend. Channel managers en reisagenten hebben ook certificering nodig voordat ze toegang krijgen tot productie; iedereen anders gaat op eigen initiatief naar productie.

:::note
De staging-omgeving is op aanvraag beschikbaar. Dit betekent dat deze in slaapstand gaat als er geen gebruik is en zichzelf weer aanzet wanneer dat wel het geval is. Wees geduldig als je deze wakker maakt. Het duurt ongeveer een minuut om alle servers te starten nadat je voor het eerst verbinding maakt met een van onze servers of apps.
:::

## Servers

Hieronder staat een matrix met de namen van onze servers en hun gebruik.

| Functie | Staging | Productie
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integraties | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Betaling | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applicaties

Onze applicaties hebben ook test- en productieomgevingen voor onze klanten.

| Applicatie | Staging | Productie
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Boekingsengine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
