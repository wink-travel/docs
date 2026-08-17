---
title: Ambientes
description: Este artigo contém informações para testadores e desenvolvedores sobre como aceder aos nossos diferentes ambientes de servidor.
sidebar:
  order: 8
---

Na Wink, operamos 2 ambientes para tudo o que fazemos em todos os momentos:

- Produção é o nosso ambiente estável.
- Staging é o nosso ambiente de certificação e testes.

Se é um integrador, um hotel ou agente de viagens que deseja preparar-se para a certificação ou testar a plataforma Wink, crie uma conta no nosso ambiente de staging para começar.

:::note
O ambiente de staging está disponível mediante pedido. Isso significa que ele entra em modo de suspensão se não houver utilização e liga-se novamente quando houver. Por favor, seja paciente se estiver a acordá-lo. Demora cerca de um minuto a iniciar todos os servidores após a sua primeira ligação a um dos nossos servidores ou aplicações.
:::

## Servidores

Abaixo está uma matriz contendo os nomes dos nossos servidores e a sua utilização.

| Funcionalidade | Staging | Produção
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventário | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrações | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Pagamento | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicações

As nossas aplicações também têm ambientes de teste e produção para os nossos clientes.

| Aplicação | Staging | Produção
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Motor de reservas | https://staging-book.wink.travel | https://book.wink.travel | 
| Gestor de Links | https://staging-i.trvl.as | https://i.trvl.as |
