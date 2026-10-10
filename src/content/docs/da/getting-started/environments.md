---
title: Miljøer
description: Denne artikel indeholder information til testere og udviklere om, hvordan man får adgang til vores forskellige servermiljøer.
sidebar:
  order: 8
---

Hos Wink kører vi 2 miljøer for alt, hvad vi laver, hele tiden:

- Produktion er vores stabile miljø.
- Staging er vores testmiljø, og hvor channel managers og rejsebureauer bliver certificeret.

Hvis du vil teste Wink-platformen som udvikler, hotel eller rejsebureau, skal du oprette en konto i vores staging-miljø for at komme i gang. Channel managers kører også deres [certificering](/da/guides/integrators/add-your-channel-manager/#certification) der.

Oprettelse af en konto i staging eller produktion kræver accept af Winks vilkår og betalingsbetingelser, og denne accept er bindende. Channel managers og rejsebureauer skal også have certificering før adgang til produktion; alle andre går selv over til produktion.

:::note
Staging-miljøet er tilgængeligt efter anmodning. Det betyder, at det går i dvale, hvis der ikke er brug, og tænder sig selv igen, når der er. Vær venlig at have tålmodighed, hvis du vækker det. Det tager cirka et minut at starte alle servere, efter du først har forbindelse til en af vores servere eller apps.
:::

## Servere

Nedenfor er en matrix med navnene på vores servere og deres anvendelse.

| Funktion | Staging | Produktion
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applikationer

Vores applikationer har også test- og produktionsmiljøer for vores kunder.

| Applikation | Staging | Produktion
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
