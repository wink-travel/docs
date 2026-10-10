---
title: Entorns
description: Aquest article conté informació per a testers i desenvolupadors sobre com accedir als nostres diferents entorns de servidor.
sidebar:
  order: 8
---

A Wink, gestionem 2 entorns per a tot el que fem en tot moment:

- Producció és el nostre entorn estable.
- Staging és el nostre entorn de proves, i on es certifiquen els channel managers i agents de viatges.

Si vols provar la plataforma Wink, com a desenvolupador, hotel o agent de viatges, crea un compte al nostre entorn staging per començar. Els channel managers també fan la seva [certificació](/ca/guides/integrators/add-your-channel-manager/#certification) allà.

Crear un compte a staging o producció requereix acceptar els Termes i Condicions i els Termes de Pagament de Wink, i aquesta acceptació és vinculant. Els channel managers i agents de viatges també necessiten la certificació abans d’accedir a producció; la resta d’usuaris passen a producció pel seu compte.

:::note
L’entorn staging està disponible sota demanda. Això vol dir que s’apaga si no hi ha ús i es torna a encendre quan n’hi ha. Si l’estàs despertant, si us plau, tingues paciència. Triga aproximadament un minut a iniciar tots els servidors després de connectar-te per primera vegada a un dels nostres servidors o aplicacions.
:::

## Servidors

A continuació hi ha una matriu amb els noms dels nostres servidors i el seu ús.

| Feature | Staging | Producció
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicacions

Les nostres aplicacions també tenen entorns de prova i producció per als nostres clients.

| Aplicació | Staging | Producció
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
