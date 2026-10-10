---
title: Середовища
description: Ця стаття містить інформацію для тестувальників і розробників про те, як отримати доступ до наших різних серверних середовищ.
sidebar:
  order: 8
---

У Wink ми постійно підтримуємо 2 середовища для всього, що робимо:

- Production — це наше стабільне середовище.
- Staging — це наше тестове середовище, де сертифікуються channel managers і турагенти.

Якщо ви хочете тестувати платформу Wink як розробник, готель або турагент, створіть обліковий запис у нашому staging-середовищі, щоб почати. Channel managers також проходять [сертифікацію](/uk/guides/integrators/add-your-channel-manager/#certification) там.

Створення облікового запису в staging або production вимагає прийняття Умов Wink і Умов оплати, і це прийняття є обов’язковим. Channel managers і турагенти також потребують сертифікації перед доступом до production; усі інші переходять у production самостійно.

:::note
Staging-середовище доступне за запитом. Це означає, що воно переходить у сплячий режим, якщо ним не користуються, і автоматично вмикається, коли з’являється активність. Будь ласка, будьте терплячі, якщо ви його пробуджуєте. Запуск усіх серверів після першого підключення до одного з наших серверів або додатків займає близько хвилини.
:::

## Сервери

Нижче наведена матриця з назвами наших серверів і їх призначенням.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Додатки

Наші додатки також мають тестове та production-середовища для наших клієнтів.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
