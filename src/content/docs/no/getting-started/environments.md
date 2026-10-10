---
title: Miljøer
description: Denne artikkelen inneholder informasjon for testere og utviklere om hvordan man får tilgang til våre ulike servermiljøer.
sidebar:
  order: 8
---

Hos Wink kjører vi 2 miljøer for alt vi gjør til enhver tid:

- Produksjon er vårt stabile miljø.
- Staging er vårt testmiljø, og der kanaladministratorer og reisebyråer blir sertifisert.

Hvis du vil teste Wink-plattformen, som utvikler, hotell eller reisebyrå, opprett en konto i vårt staging-miljø for å komme i gang. Kanaladministratorer kjører også sin [sertifisering](/no/guides/integrators/add-your-channel-manager/#certification) der.

Å opprette en konto i staging eller produksjon krever aksept av Winks vilkår og betalingsbetingelser, og denne aksepten er bindende. Kanaladministratorer og reisebyråer trenger også sertifisering før tilgang til produksjon; alle andre går over til produksjon på egen hånd.

:::note
Staging-miljøet er tilgjengelig på forespørselsbasis. Det betyr at det går i dvale hvis det ikke er bruk, og slår seg på igjen når det er. Vær tålmodig hvis du vekker det. Det tar omtrent ett minutt å starte alle serverne etter at du først kobler til en av våre servere eller apper.
:::

## Servere

Nedenfor er en matrise som inneholder navnene på våre servere og deres bruk.

| Funksjon | Staging | Produksjon
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applikasjoner

Våre applikasjoner har også test- og produksjonsmiljøer for våre kunder.

| Applikasjon | Staging | Produksjon
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
