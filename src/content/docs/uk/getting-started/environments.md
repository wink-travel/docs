---
title: Середовища
description: Ця стаття містить інформацію для тестувальників і розробників про те, як отримати доступ до наших різних серверних середовищ.
sidebar:
  order: 8
---

У Wink ми постійно підтримуємо 2 середовища для всього, що робимо:

- Production — це наше стабільне середовище.
- Staging — це наше середовище для сертифікації та тестування.

Якщо ви інтегратор, готель або туристичний агент, який хоче підготуватися до сертифікації або протестувати платформу Wink, створіть обліковий запис у нашому staging-середовищі, щоб почати.

:::note
Середовище staging доступне за запитом. Це означає, що воно переходить у сплячий режим, якщо ним не користуються, і автоматично вмикається, коли з’являється активність. Будь ласка, будьте терплячі, якщо ви його пробуджуєте. Запуск усіх серверів після першого підключення до одного з наших серверів або додатків займає близько хвилини.
:::

## Сервери

Нижче наведена матриця з назвами наших серверів та їх призначенням.

| Функція | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Додатки

Наші додатки також мають тестове та продуктивне середовища для наших клієнтів.

| Додаток | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Booking engine | https://staging-ota.wink.travel | https://ota.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| My Account | https://staging-my.wink.travel | https://my.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
