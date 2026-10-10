---
title: Entornos
description: Este artículo contiene información para evaluadores y desarrolladores sobre cómo obtener acceso a nuestros diferentes entornos de servidor.
sidebar:
  order: 8
---

En Wink, operamos 2 entornos para todo lo que hacemos en todo momento:

- Producción es nuestro entorno estable.
- Staging es nuestro entorno de pruebas, y donde se certifican los channel managers y agentes de viaje.

Si quieres probar la plataforma Wink, como desarrollador, hotel o agente de viajes, crea una cuenta en nuestro entorno de staging para comenzar. Los channel managers también realizan su [certificación](/es-MX/guides/integrators/add-your-channel-manager/#certification) ahí.

Crear una cuenta en staging o producción requiere aceptar los Términos y Condiciones y los Términos de Pago de Wink, y esa aceptación es vinculante. Los channel managers y agentes de viaje también necesitan certificación antes del acceso a producción; todos los demás pasan a producción por su cuenta.

:::note
El entorno de staging está disponible bajo solicitud. Esto significa que entrará en modo de suspensión si no hay uso y se activará nuevamente cuando lo haya. Por favor, ten paciencia si lo estás despertando. Toma alrededor de un minuto iniciar todos los servidores después de conectarte por primera vez con uno de nuestros servidores o aplicaciones.
:::

## Servidores

A continuación hay una matriz que contiene los nombres de nuestros servidores y su uso.

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
