---
title: Medii
description: Acest articol conține informații pentru testeri și dezvoltatori despre cum să obțină acces la diferitele noastre medii de server.
sidebar:
  order: 8
---

La Wink, operăm 2 medii pentru tot ceea ce facem, în orice moment:

- Producția este mediul nostru stabil.
- Staging este mediul nostru de testare, și locul unde channel managerii și agenții de turism sunt certificați.

Dacă dorești să testezi platforma Wink, ca dezvoltator, hotel sau agent de turism, creează un cont în mediul nostru de staging pentru a începe. Channel managerii își desfășoară și ei [certificarea](/ro/guides/integrators/add-your-channel-manager/#certification) acolo.

Crearea unui cont în staging sau producție necesită acceptarea Termenilor și Condițiilor Wink și a Termenilor de Plată, iar această acceptare este obligatorie. Channel managerii și agenții de turism au nevoie, de asemenea, de certificare înainte de accesul în producție; toți ceilalți trec în producție pe cont propriu.

:::note
Mediul de staging este disponibil la cerere. Aceasta înseamnă că va intra în repaus dacă nu este utilizat și se va reactiva când este nevoie. Te rugăm să ai răbdare dacă îl trezești. Pornește toate serverele în aproximativ un minut după prima conectare cu unul dintre serverele sau aplicațiile noastre.
:::

## Servere

Mai jos este o matrice care conține numele serverelor noastre și utilizarea lor.

| Funcționalitate | Staging | Producție
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventar | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrări | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partener (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Plăți | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicații

Aplicațiile noastre au, de asemenea, medii de test și producție pentru clienții noștri.

| Aplicație | Staging | Producție
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Motor de rezervări | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
