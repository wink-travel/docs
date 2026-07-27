---
title: Preços
description: A maior parte do Wink é gratuita. Você paga uma pequena taxa por reserva e uma taxa de uso pay-as-you-go em alguns recursos premium.
sidebar:
  order: 4
---

O Wink não tem assinaturas, nem assentos, nem taxas de configuração. A grande maioria da plataforma é gratuita, e há apenas duas coisas pelas quais você pagará:

1. **Uma pequena porcentagem por reserva** — somente quando você realmente ganhar dinheiro.
2. **Taxas de uso pay-as-you-go** — em alguns recursos premium que nos custam dinheiro toda vez que são usados, cada um com uma cota mensal gratuita.

## O que é gratuito

Estes não custam nada, para sempre, sem cota e sem medição:

- O **motor de reservas** — no seu próprio site, na sua página WinkLinks ou em qualquer outro lugar onde você o incorpore.
- **Gestão de propriedades** — conteúdo, fotos, tarifas, planos tarifários, disponibilidade, promoções e políticas.
- **Ferramentas de afiliados** — links compartilháveis, listas selecionadas, grades, mapas, cartões e widgets incorporáveis.
- **Ferramentas para agentes de viagem** — busca, tarifas personalizadas e reservas em nome dos seus clientes.
- **WinkLinks** — reivindique sua URL personalizada, construa sua página e publique nela quantas vezes quiser.
- **Publicações manuais em redes sociais** — qualquer coisa que você escreva por conta própria, em qualquer rede conectada.
- **Análises, rankings, reivindicações, configurações** e gerenciamento de conta.
- As **APIs do Consumidor e do Motor de Reservas**, além dos endpoints de busca e autocompletar.

## Reservas

O Wink suporta tanto o modelo merchant quanto o modelo agente.

### Modelo 1

O Wink é o comerciante registrado no momento em que a reserva ocorre. O Wink é responsável pelos fundos e possui todas as licenças necessárias para operar uma agência de viagens.
Este modelo se aplica a 95% de todas as reservas.

O Wink cobra `5,5% por reserva` para manter a plataforma.
A maior parte disso vai para a gateway de pagamento (Visa, MasterCard etc). Uma reserva média nos custa `2,95%` para adquirir; às vezes chega a `3,6%`. Reembolsos parciais nos custam ainda mais, pois a gateway de pagamento vê isso como uma nova cobrança.
Queremos ser completamente transparentes sobre preços agora para economizar tempo de todos antes de tentar negociar descontos adicionais sem ter usado o Wink. Nosso modelo de preços é mais do que justo e também precisamos ganhar a vida.

#### Detalhamento

:::note[Taxa de processamento]
O Wink cobra uma taxa de processamento de 1,5% por reserva. Isso cobre a manutenção da plataforma e é o que nos permite oferecer tudo listado acima gratuitamente.
:::

:::note[Taxa de pagamento]
O TripPay cobra uma taxa de pagamento de 4,0% por reserva. Isso cobre a aquisição do pagamento do viajante.
:::

:::note[Distribuição de fundos]
Existem taxas associadas ao envio de fundos para sua conta. Isso depende do método de distribuição que você escolher. Atualmente, suportamos:

- **Transferência bancária** O custo depende do país onde você está localizado e de onde os fundos são enviados. Incluímos uma calculadora de cotações que você pode usar quando tiver fundos disponíveis em sua conta.

Se quiser que suportemos outro método de pagamento, envie-nos um e-mail.
:::

### Modelo 2

Este modelo está disponível apenas para agências de viagem que possuem licença de agência de viagens em sua região e que desejam ser o comerciante registrado. Alguns de nossos agentes de viagem registrados querem ser responsáveis pelo processamento do pagamento e pela distribuição dos fundos para os hotéis. Sob este modelo, eles são responsáveis pelos fundos e possuem as licenças necessárias para operar em seu país.

#### Detalhamento

:::note[Taxa de processamento]
O Wink cobra uma taxa de processamento de 1,5% por reserva. Isso cobre a manutenção da plataforma e é o que nos permite oferecer tudo listado acima gratuitamente.
:::

Usando este modelo, os agentes de viagem pagam apenas a taxa de processamento do Wink e o Wink faturará o agente de viagem mensalmente.

## Uso (pay-as-you-go)

Alguns recursos nos custam dinheiro toda vez que são usados — IA generativa, APIs sociais de terceiros e fornecimento de preços ao vivo em escala. Em vez de agrupar esses custos em um plano mensal que você pode não usar, você paga apenas pelo que realmente consome, e somente depois de usar a cota mensal gratuita.

| Recurso | Gratuito por mês | Depois | Unidade cobrada |
| -- | -- | -- | -- |
| Publicação social — imagem | 1 | $1,50 | Uma publicação publicada |
| Publicação social — imagem gerada por IA | 0 | $2,50 | Uma publicação publicada |
| Publicação social — vídeo aprimorado por IA | 0 | $4,00 | Uma publicação publicada |
| Publicação social — vídeo gerado por IA | 0 | $14,00 | Uma publicação publicada |
| Resposta de IA a um comentário ou DM | 5 | $0,05 | Uma resposta |
| Resposta do chatbot | 5 | $0,05 | Uma resposta |
| API Parceira | 10.000 | $0,0001 | Um hotel-dia |

Os preços estão em USD. A cota gratuita é concedida **por conta**, não por usuário, e é reiniciada no dia 1º de cada mês (UTC).

### Como as publicações são precificadas

As publicações são precificadas pelo que contêm, porque é isso que nos custa para produzir. Uma imagem estática é barata; um vídeo não; qualquer coisa gerada por IA custa materialmente mais do que uma foto que você forneceu.

- **A cota gratuita cobre apenas publicações de imagem padrão.** Você recebe uma dessas por conta por mês. Publicações em vídeo e mídia gerada por IA são cobradas desde a primeira publicação — não há cota gratuita nesses níveis, então uma propriedade que publica vídeo deve esperar uma cobrança já no primeiro mês.
- **O vídeo prevalece.** Se uma publicação contém qualquer vídeo, toda a publicação é cobrada na tarifa de vídeo. Uma publicação que mistura imagem e vídeo é considerada uma publicação de vídeo.
- **A origem IA define o nível.** Mídia que você fornece — suas próprias fotos e vídeos, ou qualquer coisa da sua biblioteca de conteúdo Wink — é cobrada na tarifa padrão. Mídia que geramos para você é cobrada na tarifa de IA.

### O que é e o que não é medido

- Apenas uma publicação **gerada** e publicada em uma rede de terceiros (Facebook, Instagram) é cobrável. Uma publicação que você escreveu por conta própria é gratuita, onde quer que seja publicada.
- **Publicar no WinkLinks é sempre gratuito**, gerado ou não.
- Você é cobrado **na publicação**, não por tentativa. Regenerar um rascunho até ficar satisfeito não aumenta sua conta — você paga uma vez pela publicação que realmente envia. Tentativas não são ilimitadas, porém: cada publicação permite cerca de 10 regenerações para imagens e 3 para vídeo, o que reflete o custo para nós de produzi-las. Você verá quantas restam enquanto trabalha.
- Na API Parceira, um **hotel-dia** é um hotel precificado para uma noite de estadia — *não* uma chamada de API. Uma busca que retorna 20 hotéis para uma estadia de 3 noites é 60 hotel-dias a partir de uma única solicitação. Endpoints de busca e autocompletar são gratuitos e nunca medidos.

### Como ativar

O pay-as-you-go está desativado por padrão. Todos recebem a cota gratuita sem fazer nada.

Para ultrapassar a cota, o **proprietário** de uma conta ativa o pay-as-you-go e escolhe quais de suas contas serão medidas. O uso de todas as suas contas ativadas é consolidado em uma **única fatura mensal**, que você pode pagar automaticamente por cartão ou receber como fatura para pagar manualmente.

Uma vez ativado, seu uso é medido, mas **nunca limitado** — você não atingirá um limite de taxa por gastar dinheiro conosco.

:::note[Se você não ativar]
Nada quebra e nada é cobrado. Você simplesmente para na cota gratuita daquele mês: publicações geradas não serão publicadas e chamadas da API Parceira retornarão um `429` até a cota ser renovada.
:::

### Status de faturamento

| Status | O que significa |
| -- | -- |
| Em dia | Tudo funciona normalmente. |
| Atrasado | Um pagamento falhou e está sendo tentado novamente. Seus recursos continuam funcionando durante esse período. |
| Suspenso | Uma fatura ficou sem pagamento até o final. Ações cobradas são bloqueadas até o pagamento; recursos gratuitos continuam normalmente. |

:::tip[Preços ao vivo]
Os preços unitários e cotas gratuitas são sempre exibidos no Portal, diretamente do nosso sistema de faturamento, para que você possa consultá-los antes de se comprometer. Veja [Faturamento](/pt-BR/portal/plan) para ativar o pay-as-you-go, escolher suas contas e acompanhar o uso e as faturas do mês. Veja [Social](/pt-BR/portal/social/what-is-social) para entender como o volume de publicações afeta seus gastos.
:::

## Efeito da plataforma

Por fim, à medida que continuamos a crescer em tamanho e reservas, queremos poder compartilhar alguns dos efeitos da plataforma com você. Mais reservas trazem oportunidades de descontos por volume da nossa gateway de pagamento, o que nos permitiria reduzir nossa taxa de processamento para todos.

Junte-se ao Wink hoje e descubra uma nova forma lucrativa de fazer negócios na indústria da hospitalidade!
