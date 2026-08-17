---
title: Окружения
description: В этой статье содержится информация для тестировщиков и разработчиков о том, как получить доступ к нашим различным серверным окружениям.
sidebar:
  order: 8
---

В Wink мы постоянно используем 2 окружения для всего, что делаем:

- Production — это наше стабильное окружение.
- Staging — это наше окружение для сертификации и тестирования.

Если вы интегратор, отель или туристическое агентство, желающие подготовиться к сертификации или протестировать платформу Wink, создайте аккаунт в нашем staging-окружении, чтобы начать.

:::note
Окружение staging доступно по запросу. Это означает, что оно уходит в спящий режим при отсутствии использования и автоматически включается при появлении активности. Пожалуйста, будьте терпеливы, если вы его пробуждаете. Запуск всех серверов после первого подключения к одному из наших серверов или приложений занимает около минуты.
:::

## Серверы

Ниже приведена таблица с названиями наших серверов и их назначением.

| Функция | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Приложения

Наши приложения также имеют тестовые и продуктивные окружения для наших клиентов.

| Приложение | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
