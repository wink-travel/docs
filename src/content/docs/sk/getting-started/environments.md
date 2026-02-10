---
title: Prostredia
description: Tento článok obsahuje informácie pre testerov a vývojárov o tom, ako získať prístup k našim rôznym serverovým prostrediam.
sidebar:
  order: 8
---

Vo Wink prevádzkujeme neustále 2 prostredia pre všetko, čo robíme:

- Produkcia je naše stabilné prostredie.
- Staging je naše certifikačné a testovacie prostredie.

Ak ste integrátor, hotel alebo cestovná kancelária, ktorá chce pripraviť certifikáciu alebo otestovať platformu Wink, vytvorte si účet v našom staging prostredí, aby ste mohli začať.

:::note
Staging prostredie je dostupné na základe požiadavky. Znamená to, že sa uspí, ak nie je používané, a znovu sa zapne, keď sa začne používať. Prosíme o trpezlivosť, ak ho prebúdzate. Spustenie všetkých serverov po prvom pripojení k jednému z našich serverov alebo aplikácií trvá približne minútu.
:::

## Servery

Nižšie je matica obsahujúca názvy našich serverov a ich využitie.

| Funkcia | Staging | Produkcia
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikácie

Naše aplikácie majú tiež testovacie a produkčné prostredia pre našich zákazníkov.

| Aplikácia | Staging | Produkcia
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Rezervačný engine | https://staging-ota.wink.travel | https://ota.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| Môj účet | https://staging-my.wink.travel | https://my.wink.travel | 
| Platba | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
