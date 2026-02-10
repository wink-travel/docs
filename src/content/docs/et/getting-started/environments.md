---
title: Keskkonnad
description: See artikkel sisaldab teavet testijatele ja arendajatele selle kohta, kuidas saada juurdepääs meie erinevatele serverikeskkondadele.
sidebar:
  order: 8
---

Winkis haldame kõigi meie tegevuste jaoks pidevalt kahte keskkonda:

- Production on meie stabiilne keskkond.
- Staging on meie sertifitseerimise ja testimise keskkond.

Kui olete integreerija, hotell või reisibüroo, kes soovib valmistuda sertifitseerimiseks või testida Wink platvormi, looge konto meie staging keskkonnas, et alustada.

:::note
Staging keskkond on saadaval taotlusel. See tähendab, et see läheb magama, kui seda ei kasutata, ja lülitub ise uuesti sisse, kui kasutus algab. Palun olge kannatlik, kui te selle äratate. Kõik serverid käivituvad umbes minuti jooksul pärast esimest ühendust ühe meie serveri või rakendusega.
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

Meie rakendustel on samuti test- ja tootmiskeskkonnad meie klientidele.

| Rakendus | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Booking engine | https://staging-ota.wink.travel | https://ota.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| My Account | https://staging-my.wink.travel | https://my.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
