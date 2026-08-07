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
- As **APIs Consumer e Booking Engine**, além dos endpoints de busca e autocompletar.

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

:::note[Envio de fundos]
Existem taxas associadas ao envio de fundos para sua conta. Isso depende do método de pagamento que você escolher. Atualmente, suportamos:

- **Transferência bancária** O custo depende do país onde você está localizado e de onde os fundos são enviados. Incluímos uma calculadora de cotações que você pode usar quando tiver fundos disponíveis em sua conta.

Se quiser que suportemos outro método de pagamento, envie-nos um e-mail.
:::

### Modelo 2

Este modelo está disponível apenas para agências de viagem que possuem licença para operar em sua região e que desejam ser o comerciante registrado. Alguns de nossos agentes de viagem registrados querem ser responsáveis pelo processamento do pagamento e pelo repasse dos fundos aos hotéis. Nesse modelo, eles são responsáveis pelos fundos e possuem as licenças necessárias para operar em seu país.

#### Detalhamento

:::note[Taxa de processamento]
O Wink cobra uma taxa de processamento de 1,5% por reserva. Isso cobre a manutenção da plataforma e é o que nos permite oferecer tudo listado acima gratuitamente.
:::

Usando este modelo, os agentes de viagem pagam apenas a taxa de processamento do Wink e o Wink faturará o agente mensalmente.

## Uso (pay-as-you-go)

Alguns recursos nos custam dinheiro toda vez que são usados — IA generativa, APIs sociais de terceiros e fornecimento de preços ao vivo em escala. Em vez de agrupar esses custos em um plano mensal que você pode não usar, você paga apenas pelo que realmente consome, e somente depois de esgotar a cota mensal gratuita.

| Recurso | Gratuito por mês | Depois | Unidade cobrada |
| -- | -- | -- | -- |
| Publicação social — imagem | 1 | $1,50 | Uma publicação publicada |
| Publicação social — imagem gerada por IA | 0 | $2,50 | Uma publicação publicada |
| Publicação social — vídeo | 0 | $4,00 | Uma publicação publicada |
| Publicação social — vídeo gerado por IA | 0 | $14,00 | Uma publicação publicada |
| Resposta de IA a um comentário ou DM | 5 | $0,05 | Uma resposta |
| Resposta de chatbot | 5 | $0,05 | Uma resposta |
| API Parceiro | 10.000 | $0,0001 | Um hotel-dia |
| API de Mídia Parceiro | 1.000 | $0,0005 | A mídia de um hotel |

Os preços estão em USD. A cota gratuita é concedida **por conta**, não por usuário, e é reiniciada no dia 1º de cada mês (UTC).

### Como as publicações são precificadas

As publicações são precificadas pelo que contêm, porque é isso que nos custa produzir. Uma imagem estática é barata; um vídeo não; qualquer coisa gerada por IA custa materialmente mais do que uma foto que você mesmo forneceu.

- **A cota gratuita cobre apenas publicações com imagens padrão.** Você recebe uma dessas por conta por mês. Publicações em vídeo e mídias geradas por IA são cobradas desde a primeira publicação — não há cota gratuita nesses níveis, então uma propriedade que publica vídeo deve esperar uma cobrança já no primeiro mês.
- **O vídeo prevalece.** Se uma publicação contém qualquer vídeo, toda a publicação é cobrada na tarifa de vídeo. Uma publicação que mistura imagem e vídeo é considerada uma publicação em vídeo.
- **A origem IA define o nível.** Mídia que você fornece — suas próprias fotos e vídeos, ou qualquer coisa da sua biblioteca de conteúdo Wink — é cobrada na tarifa padrão. Mídia que geramos para você é cobrada na tarifa IA.

### O que é e o que não é medido

- Apenas uma publicação **gerada** e publicada em uma rede de terceiros (Facebook, Instagram) é cobrável. Uma publicação que você escreveu por conta própria é gratuita, onde quer que seja publicada.
- **Publicar no WinkLinks é sempre gratuito**, gerada ou não.
- Você é cobrado **na publicação**, não por tentativa. Regenerar um rascunho até ficar satisfeito não aumenta sua conta — você paga uma vez pela publicação que realmente envia. Tentativas não são ilimitadas, porém: cada publicação permite cerca de 10 regenerações para imagens e 3 para vídeo, o que reflete o custo para nós de produzi-las. Você verá quantas restam enquanto trabalha.
- Na API Parceiro, um **hotel-dia** é um hotel precificado para uma noite de estadia — *não* uma chamada de API. Uma busca que retorna 20 hotéis para uma estadia de 3 noites é 60 hotel-dias em uma única requisição. Endpoints de busca e autocompletar são gratuitos e nunca medidos.
- Na **API de Mídia Parceiro**, a unidade é um hotel cuja mídia é retornada para você, independentemente de quantas fotos e vídeos sejam. Uma requisição em lote para 50 hotéis é 50 unidades — e se alguns desses hotéis não tiverem mídia que você possa ver, você só é cobrado pelos que realmente retornaram mídia.

### Exemplo: um OTA armazenando 90 dias de preços

Suponha que você seja um OTA, um site metabusca ou um operador turístico, e queira 90 dias de preços futuros para **1.000 hotéis**, cada um publicando **4 tarifas principais**.

**Uma atualização completa de tudo isso são 90.000 hotel-dias — $9,00.**

Isso é 1.000 hotéis × 90 dias. As 4 tarifas principais não custam nada a mais: uma única requisição retorna todos os planos tarifários que um hotel publica para aquele intervalo de datas, então o número de tarifas que uma propriedade oferece não é uma dimensão de cobrança. Nem é como você divide a requisição — uma requisição por período cobre até 30 dias, então você faria 3 requisições por hotel, e 3 × 30 dias cobra exatamente o mesmo que uma requisição de 90 dias. Você é cobrado pelo preço que solicitou, não pela infraestrutura que usou para isso.

Então, o que você paga por mês depende de uma pergunta: com que frequência você atualiza?

| Frequência de atualização | Hotel-dias / mês | Após os 10.000 gratuitos | Custo mensal |
| -- | -- | -- | -- |
| Uma vez por mês | 90.000 | 80.000 | **$8,00** |
| Semanalmente | 360.000 | 350.000 | **$35,00** |
| Diariamente | 2.700.000 | 2.690.000 | **$269,00** |
| Duas vezes por dia | 5.400.000 | 5.390.000 | **$539,00** |

Atualizar todos os 1.000 hotéis todos os dias são 3.000 requisições por dia e sai por cerca de $9,00 por dia. A cota gratuita por si só — 10.000 hotel-dias por mês — é suficiente para precificar cerca de 110 hotéis por 90 dias completos, ou para construir e testar uma integração inteira sem pagar nada.

#### O que influencia esse número

- **Solicitar planos tarifários um por um.** Uma requisição por período retorna o melhor preço por tipo de quarto em todos os planos tarifários de uma vez. Se você filtrar para um plano tarifário por requisição para ver os quatro separadamente, fará quatro vezes mais requisições e pagará quatro vezes mais.
- **Ocupações extras, moedas ou idiomas.** Preço para 1 adulto e preço para 2 adultos são duas perguntas diferentes, e cada uma é cobrada. O mesmo vale para uma segunda moeda de exibição ou idioma.
- **Atualizações que você não precisa.** Nada diz que todos os 90 dias merecem a mesma frequência de atualização. Atualize os próximos 14 dias diariamente e os dias 15–90 semanalmente e os mesmos 1.000 hotéis custarão **$71,40** por mês em vez de $269,00 — as datas de curto prazo, onde as tarifas realmente mudam, permanecem atualizadas.

### Como ativar

O pay-as-you-go está desativado por padrão. Todos recebem a cota gratuita sem fazer nada.

Para ultrapassar a cota, o **proprietário** da conta ativa o pay-as-you-go e escolhe quais de suas contas serão medidas. O uso de todas as suas contas ativadas é consolidado em uma **única fatura mensal**, que você pode pagar automaticamente por cartão ou receber como fatura para pagar manualmente.

Uma vez ativado, seu uso é medido, mas **nunca limitado** — você não atingirá um limite de taxa por gastar dinheiro conosco.

:::note[Se você não ativar]
Nada quebra e nada é cobrado. Você simplesmente para na cota gratuita daquele mês: publicações geradas não serão publicadas e chamadas à API Parceiro retornarão um `429` até a cota ser renovada.
:::

### Status de faturamento

| Status | O que significa |
| -- | -- |
| Em dia | Tudo funciona normalmente. |
| Em atraso | Um pagamento falhou e está sendo tentado novamente. Seus recursos continuam funcionando durante esse período. |
| Suspenso | Uma fatura ficou sem pagamento até o final. Ações cobradas são bloqueadas até o pagamento; recursos gratuitos continuam normalmente. |

:::tip[Preços ao vivo]
Os preços unitários e cotas gratuitas são sempre exibidos no Portal, diretamente do nosso sistema de faturamento, para que você possa consultá-los antes de se comprometer. Veja [Faturamento](/pt-BR/account/subscription) para ativar o pay-as-you-go, escolher suas contas e acompanhar o uso e faturas do mês. Veja [Social](/pt-BR/portal/social/what-is-social) para entender como o volume de publicações afeta seus gastos.
:::

## Efeito da plataforma

Por fim, à medida que continuamos a crescer em tamanho e reservas, queremos poder compartilhar alguns dos efeitos da plataforma com você. Mais reservas trazem oportunidades de descontos por volume da nossa gateway de pagamento, o que nos permitiria reduzir nossa taxa de processamento para todos.

Junte-se ao Wink hoje e descubra uma nova forma lucrativa de fazer negócios na indústria da hospitalidade!
