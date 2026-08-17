---
title: Környezetek
description: Ez a cikk információkat tartalmaz tesztelők és fejlesztők számára arról, hogyan férhetnek hozzá különböző szerverkörnyezetünkhöz.
sidebar:
  order: 8
---

A Winknél mindig két környezetet futtatunk minden tevékenységünkhöz:

- A Production a stabil környezetünk.
- A Staging a tanúsítási és tesztelési környezetünk.

Ha integrátor, szálloda vagy utazási ügynök vagy, aki fel szeretne készülni a tanúsításra vagy tesztelni szeretné a Wink platformot, hozz létre egy fiókot a staging környezetünkben a kezdéshez.

:::note
A staging környezet kérésre érhető el. Ez azt jelenti, hogy ha nincs használatban, akkor „elalszik”, és újra bekapcsol, amikor használatba veszik. Kérjük, légy türelemmel, ha ébreszted. Körülbelül egy percbe telik, amíg az összes szerver elindul, miután először csatlakozol valamelyik szerverünkhöz vagy alkalmazásunkhoz.
:::

## Szerverek

Az alábbi táblázat tartalmazza szervereink nevét és azok használatát.

| Funkció | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Alkalmazások

Ügyfeleink számára alkalmazásaink is rendelkeznek teszt- és éles környezettel.

| Alkalmazás | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Foglalási motor | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
