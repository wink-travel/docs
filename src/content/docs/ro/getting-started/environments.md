---
title: Medii
description: Acest articol conține informații pentru testeri și dezvoltatori despre cum să obțină acces la diferitele noastre medii de server.
sidebar:
  order: 8
---

La Wink, rulăm 2 medii pentru tot ceea ce facem în orice moment:

- Producție este mediul nostru stabil.
- Staging este mediul nostru de certificare și testare.

Dacă sunteți integrator, hotel sau agent de turism care dorește să se pregătească pentru certificare sau să testeze platforma Wink, creați un cont în mediul nostru de staging pentru a începe.

:::note
Mediul de staging este disponibil la cerere. Aceasta înseamnă că va intra în repaus dacă nu este utilizat și se va reactiva când este folosit. Vă rugăm să aveți răbdare dacă îl treziți. Este nevoie de aproximativ un minut pentru a porni toate serverele după ce vă conectați prima dată la unul dintre serverele sau aplicațiile noastre.
:::

## Servere

Mai jos este o matrice care conține numele serverelor noastre și utilizarea lor.

| Funcționalitate | Staging | Producție
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicații

Aplicațiile noastre au, de asemenea, medii de test și producție pentru clienții noștri.

| Aplicație | Staging | Producție
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
