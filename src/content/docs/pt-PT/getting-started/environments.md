---
title: Ambientes
description: Este artigo contém informações para testadores e desenvolvedores sobre como obter acesso aos nossos diferentes ambientes de servidor.
sidebar:
  order: 8
---

Na Wink, mantemos 2 ambientes para tudo o que fazemos em todos os momentos:

- Produção é o nosso ambiente estável.
- Staging é o nosso ambiente de testes, e onde os channel managers e agentes de viagem são certificados.

Se quiser testar a plataforma Wink, como desenvolvedor, hotel ou agente de viagens, crie uma conta no nosso ambiente de staging para começar. Os channel managers também realizam a sua [certificação](/pt-PT/guides/integrators/add-your-channel-manager/#certification) lá.

Criar uma conta em staging ou produção requer a aceitação dos Termos e Condições da Wink e dos Termos de Pagamento, e essa aceitação é vinculativa. Os channel managers e agentes de viagem também precisam de certificação antes do acesso à produção; todos os outros passam para produção por sua conta.

:::note
O ambiente de staging está disponível mediante pedido. Isso significa que ele entra em modo de suspensão se não houver uso e liga-se novamente quando houver. Por favor, seja paciente se estiver a acordá-lo. Demora cerca de um minuto para iniciar todos os servidores após a primeira ligação a um dos nossos servidores ou aplicações.
:::

## Servidores

Abaixo está uma matriz contendo os nomes dos nossos servidores e a sua utilização.

| Feature | Staging | Produção
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplicações

As nossas aplicações também têm ambientes de teste e produção para os nossos clientes.

| Application | Staging | Produção
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
