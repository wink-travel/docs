---
title: Keskkonnad
description: See artikkel sisaldab teavet testijatele ja arendajatele selle kohta, kuidas saada juurdepääs meie erinevatele serverikeskkondadele.
sidebar:
  order: 8
---

Winkis haldame kõigi meie tegevuste jaoks pidevalt kahte keskkonda:

- Production on meie stabiilne keskkond.
- Staging on meie sertifitseerimise ja testimise keskkond.

Kui olete integreerija, hotell või reisibüroo, kes soovib valmistuda sertifitseerimiseks või testida Wink platvormi, looge konto meie staging-keskkonnas, et alustada.

:::note
Staging-keskkond on saadaval taotlusel. See tähendab, et kui seda ei kasutata, läheb see magama ja lülitub ise uuesti sisse, kui kasutus algab. Palun olge kannatlik, kui äratate selle. Kõik serverid käivituvad umbes minuti jooksul pärast esimest ühendust ühe meie serveri või rakendusega.
:::

## Serverid

Allpool on tabel, mis sisaldab meie serverite nimesid ja nende kasutusotstarvet.

| Funktsioon | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Rakendused

Meie rakendustel on samuti testimise ja tootmise keskkonnad meie klientidele.

| Rakendus | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
