---
title: Околни среди
description: Тази статия съдържа информация за тестери и разработчици относно достъпа до различните ни сървърни среди.
sidebar:
  order: 8
---

В Wink поддържаме 2 среди за всичко, което правим, по всяко време:

- Production е нашата стабилна среда.
- Staging е нашата тестова среда, където се сертифицират channel managers и туристически агенти.

Ако искате да тествате платформата Wink като разработчик, хотел или туристически агент, създайте акаунт в нашата staging среда, за да започнете. Channel managers също провеждат своята [сертификация](/bg/guides/integrators/add-your-channel-manager/#certification) там.

Създаването на акаунт в staging или production изисква приемане на Общите условия и Условията за плащане на Wink, като това приемане е обвързващо. Channel managers и туристическите агенти също се нуждаят от сертификация преди достъп до production; всички останали преминават към production сами.

:::note
Staging средата е достъпна при поискване. Това означава, че тя ще заспи, ако няма активност, и ще се събуди, когато има. Моля, бъдете търпеливи, ако я събуждате. Отнема около минута, за да стартират всички сървъри след първото ви свързване с някой от нашите сървъри или приложения.
:::

## Сървъри

По-долу е матрица с имената на нашите сървъри и тяхното предназначение.

| Функция | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Приложения

Нашите приложения също имат тестова и продукционна среда за нашите клиенти.

| Приложение | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
