---
title: Окружения
description: В этой статье содержится информация для тестировщиков и разработчиков о том, как получить доступ к нашим различным серверным окружениям.
sidebar:
  order: 8
---

В Wink мы постоянно используем 2 окружения для всего, что делаем:

- Production — это наше стабильное окружение.
- Staging — это наше тестовое окружение, где проходят сертификацию channel managers и туристические агенты.

Если вы хотите протестировать платформу Wink, будь то разработчик, отель или туристический агент, создайте аккаунт в нашем staging-окружении, чтобы начать работу. Channel managers также проводят свою [сертификацию](/ru/guides/integrators/add-your-channel-manager/#certification) там.

Создание аккаунта в staging или production требует принятия Условий использования Wink и Условий оплаты, и это принятие является обязательным. Channel managers и туристические агенты также должны пройти сертификацию перед доступом в production; все остальные переходят в production самостоятельно.

:::note
Staging-окружение доступно по запросу. Это означает, что оно уходит в спящий режим при отсутствии использования и автоматически включается при необходимости. Пожалуйста, будьте терпеливы, если вы его пробуждаете. Запуск всех серверов после первого подключения к одному из наших серверов или приложений занимает около минуты.
:::

## Серверы

Ниже приведена таблица с названиями наших серверов и их назначением.

| Функция | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Приложения

Наши приложения также имеют тестовые и production-окружения для наших клиентов.

| Приложение | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
