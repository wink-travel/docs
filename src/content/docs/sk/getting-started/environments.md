---
title: Prostredia
description: Tento článok obsahuje informácie pre testerov a vývojárov o tom, ako získať prístup k našim rôznym serverovým prostrediam.
sidebar:
  order: 8
---

Vo Wink prevádzkujeme neustále 2 prostredia pre všetko, čo robíme:

- Produkcia je naše stabilné prostredie.
- Staging je naše testovacie prostredie, kde sa certifikujú channel manageri a cestovné kancelárie.

Ak chcete testovať platformu Wink ako vývojár, hotel alebo cestovná kancelária, vytvorte si účet v našom staging prostredí, aby ste mohli začať. Channel manageri tiež vykonávajú svoju [certifikáciu](/sk/guides/integrators/add-your-channel-manager/#certification) tam.

Vytvorenie účtu v staging alebo produkcii vyžaduje akceptovanie Podmienok Wink a Platobných podmienok, a toto akceptovanie je záväzné. Channel manageri a cestovné kancelárie tiež potrebujú certifikáciu pred prístupom do produkcie; ostatní prechádzajú do produkcie sami.

:::note
Staging prostredie je dostupné na základe požiadavky. Znamená to, že sa uspí, ak nie je používané, a znovu sa zapne, keď je potrebné. Prosíme o trpezlivosť, ak ho prebúdzate. Spustenie všetkých serverov po prvom pripojení k jednému z našich serverov alebo aplikácií trvá približne minútu.
:::

## Servery

Nižšie je matica obsahujúca názvy našich serverov a ich použitie.

| Funkcia | Staging | Produkcia
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikácie

Naše aplikácie majú tiež testovacie a produkčné prostredia pre našich zákazníkov.

| Aplikácia | Staging | Produkcia
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervačný engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
