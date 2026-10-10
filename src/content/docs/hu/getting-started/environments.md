---
title: Környezetek
description: Ez a cikk információkat tartalmaz tesztelők és fejlesztők számára arról, hogyan férhetnek hozzá különböző szerverkörnyezetünkhöz.
sidebar:
  order: 8
---

A Winknél mindig 2 környezetet működtetünk mindenhez:

- A Production a stabil környezetünk.
- A Staging a tesztkörnyezetünk, ahol a csatornamenedzserek és az utazási ügynökök tanúsítványt szereznek.

Ha tesztelni szeretnéd a Wink platformot fejlesztőként, szállodaként vagy utazási ügynökként, hozz létre egy fiókot a staging környezetünkben a kezdéshez. A csatornamenedzserek is itt végzik a [tanúsítványuk megszerzését](/hu/guides/integrators/add-your-channel-manager/#certification).

Fiók létrehozása a staging vagy a production környezetben a Wink Általános Szerződési Feltételeinek és Fizetési Feltételeinek elfogadását igényli, és ez az elfogadás kötelező érvényű. A csatornamenedzsereknek és az utazási ügynököknek a production hozzáférés előtt tanúsítványt kell szerezniük; mindenki más saját maga lép át a production környezetbe.

:::note
A staging környezet kérésre érhető el. Ez azt jelenti, hogy ha nincs használatban, akkor „elalszik”, és újra bekapcsol, amikor használatba veszik. Kérjük, légy türelemmel, ha ébreszted. Körülbelül egy percbe telik, amíg az összes szerver elindul, miután először csatlakozol valamelyik szerverünkhöz vagy alkalmazásunkhoz.
:::

## Szerverek

Az alábbi táblázat tartalmazza szervereink nevét és felhasználási területüket.

| Funkció | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Alkalmazások

Ügyfeleink számára alkalmazásaink is rendelkeznek teszt- és éles környezettel.

| Alkalmazás | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Foglalási motor | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
