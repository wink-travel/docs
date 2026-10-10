---
title: Entornos
description: Este artículo contiene información para testers y desarrolladores sobre cómo acceder a nuestros diferentes entornos de servidor.
sidebar:
  order: 8
---

En Wink, mantenemos 2 entornos para todo lo que hacemos en todo momento:

- Producción es nuestro entorno estable.
- Staging es nuestro entorno de pruebas, y donde se certifican los channel managers y agentes de viaje.

Si querés probar la plataforma Wink, como desarrollador, hotel o agente de viaje, creá una cuenta en nuestro entorno staging para comenzar. Los channel managers también realizan su [certificación](/es-AR/guides/integrators/add-your-channel-manager/#certification) allí.

Crear una cuenta en staging o producción requiere aceptar los Términos y Condiciones y los Términos de Pago de Wink, y esa aceptación es vinculante. Los channel managers y agentes de viaje también necesitan certificación antes del acceso a producción; el resto pasa a producción por su cuenta.

:::note
El entorno staging está disponible bajo pedido. Esto significa que se pondrá en modo suspensión si no hay uso y se activará nuevamente cuando lo haya. Por favor, tené paciencia si lo estás despertando. Tarda aproximadamente un minuto en iniciar todos los servidores después de conectarte por primera vez con uno de nuestros servidores o aplicaciones.
:::

## Servidores

A continuación, una matriz con los nombres de nuestros servidores y su uso.

| Función | Staging | Producción
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventario | https://staging-api.wink.travel | https://api.wink.travel | 
| Integraciones | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Pago | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicaciones

Nuestras aplicaciones también tienen entornos de prueba y producción para nuestros clientes.

| Aplicación | Staging | Producción
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Motor de reservas | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
