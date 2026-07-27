---
title: Prostředí
description: Tento článek obsahuje informace pro testery a vývojáře o tom, jak získat přístup k našim různým serverovým prostředím.
sidebar:
  order: 8
---

Ve Wink provozujeme neustále 2 prostředí pro vše, co děláme:

- Production je naše stabilní prostředí.
- Staging je naše certifikační a testovací prostředí.

Pokud jste integrátor, hotel nebo cestovní agentura, která si přeje připravit se na certifikaci nebo otestovat platformu Wink, vytvořte si účet v našem staging prostředí, abyste mohli začít.

:::note
Staging prostředí je dostupné na vyžádání. To znamená, že se uspí, pokud není používáno, a znovu se aktivuje, když je potřeba. Buďte prosím trpěliví, pokud ho probouzíte. Spuštění všech serverů po prvním připojení k jednomu z našich serverů nebo aplikací trvá asi minutu.
:::

## Servery

Níže je matice obsahující názvy našich serverů a jejich využití.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikace

Naše aplikace mají také testovací a produkční prostředí pro naše zákazníky.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
