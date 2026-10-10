---
title: Prostředí
description: Tento článek obsahuje informace pro testery a vývojáře o tom, jak získat přístup k našim různým serverovým prostředím.
sidebar:
  order: 8
---

Ve Wink provozujeme neustále 2 prostředí pro vše, co děláme:

- Produkce je naše stabilní prostředí.
- Staging je naše testovací prostředí, kde jsou certifikováni channel manageři a cestovní agenti.

Pokud chcete testovat platformu Wink jako vývojář, hotel nebo cestovní agent, vytvořte si účet v našem staging prostředí, abyste mohli začít. Channel manageři také provádějí svou [certifikaci](/cs/guides/integrators/add-your-channel-manager/#certification) tam.

Vytvoření účtu ve staging nebo produkci vyžaduje přijetí Podmínek Wink a Platebních podmínek, a toto přijetí je závazné. Channel manageři a cestovní agenti také potřebují certifikaci před přístupem do produkce; všichni ostatní přecházejí do produkce sami.

:::note
Staging prostředí je dostupné na vyžádání. To znamená, že se uspí, pokud není používáno, a znovu se zapne, když je potřeba. Buďte prosím trpěliví, pokud ho probouzíte. Spuštění všech serverů po prvním připojení k jednomu z našich serverů nebo aplikací trvá asi minutu.
:::

## Servery

Níže je matice obsahující názvy našich serverů a jejich využití.

| Funkce | Staging | Produkce
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikace

Naše aplikace mají také testovací a produkční prostředí pro naše zákazníky.

| Aplikace | Staging | Produkce
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervační engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
