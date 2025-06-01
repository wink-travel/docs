---
title: Environments
description: >-
  See artikkel sisaldab testijatele ja arendajatele mõeldud teavet selle kohta,
  kuidas pääseda ligi meie erinevatele serverikeskkondadele.
sidebar:
  order: 8
---
Winkis haldame alati kahte keskkonda kõige jaoks, mida teeme:

* Tootmine on meie stabiilne keskkond.
* Staging on meie sertifitseerimis- ja testimiskeskkond.

Kui olete integraator, hotell või reisibüroo, kes soovib valmistuda sertifitseerimiseks või Winki platvormi testida, looge alustamiseks konto meie testimiskeskkonnas.

:::note
Lavastuskeskkond on saadaval päringu alusel. See tähendab, et see läheb magama, kui seda ei kasutata, ja lülitub uuesti sisse, kui seda kasutatakse. Palun olge kannatlik, kui te seda äratate. Pärast esimest ühenduse loomist ühe meie serveri või rakendusega võtab kõigi serverite käivitamine umbes minuti.
:::

## Serverid

Allpool on maatriks, mis sisaldab meie serverite nimesid ja nende kasutust.

| Funktsioonid | Lavastus | Tootmine
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| Laoseisud | https://staging-api.wink.travel | https://api.wink.travel |
| Integratsioonid | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| Makse | https://staging-api.trippay.io | https://api.trippay.io |

## Rakendused

Meie rakendustel on klientidele ka testimis- ja tootmiskeskkonnad.

| Taotlus | Lavastus | Tootmine
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel |
| Ettevõte | https://staging-group.wink.travel | https://group.wink.travel |
| Ekstranet | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| Makse | https://staging-pay.wink.travel | https://pay.wink.travel |
| Stuudio | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

