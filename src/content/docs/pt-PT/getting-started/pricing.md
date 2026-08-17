---
title: Preços
description: A maior parte do Wink é gratuita. Paga uma pequena taxa por reserva e uma taxa de utilização pay-as-you-go em algumas funcionalidades premium.
sidebar:
  order: 4
---

O Wink não tem subscrições, nem lugares nem taxas de configuração. A grande maioria da plataforma é gratuita, e só há duas coisas pelas quais alguma vez pagará:

1. **Uma pequena percentagem por reserva** — apenas quando realmente ganhar dinheiro.
2. **Taxas de utilização pay-as-you-go** — em algumas funcionalidades premium que nos custam dinheiro cada vez que são usadas, cada uma com uma franquia mensal gratuita.

## O que é gratuito

Estes não custam nada, para sempre, sem franquia nem medição:

- O **motor de reservas** — no seu próprio site, na sua página WinkLinks, ou em qualquer outro local onde o incorpore.
- **Gestão de propriedades** — conteúdo, fotos, tarifas, planos tarifários, disponibilidade, promoções e políticas.
- **Ferramentas de afiliados** — links partilháveis, listas selecionadas, grelhas, mapas, cartões e widgets incorporáveis.
- **Ferramentas para agentes de viagens** — pesquisa, tarifas personalizadas e reservas em nome dos seus clientes.
- **WinkLinks** — reivindique a sua URL personalizada, construa a sua página e publique nela sempre que quiser.
- **Publicações sociais manuais** — tudo o que escrever pessoalmente, em qualquer rede ligada.
- **Análises, quadros de líderes, reclamações, definições** e gestão de conta.
- As **APIs Consumer e Booking Engine**, além dos endpoints de pesquisa e autocompletar.

## Reservas

O Wink suporta tanto o modelo merchant como o modelo agent.

### Modelo 1

O Wink é o comerciante registado no momento em que a reserva ocorre. O Wink é responsável pelos fundos e detém todas as licenças necessárias para operar uma agência de viagens.
Este modelo aplica-se a 95% de todas as reservas.

O Wink cobra `5,5% por reserva` para manter a plataforma.
A maior parte disso vai para o gateway de pagamento (Visa, MasterCard, etc.). Uma reserva média custa-nos `2,95%` para adquirir; por vezes até `3,6%`. Reembolsos parciais custam-nos ainda mais, pois o gateway de pagamento vê isso como uma nova cobrança.
Queremos ser completamente transparentes sobre os preços desde já para poupar tempo a todos antes de tentarem negociar descontos adicionais sem terem usado o Wink. O nosso modelo de preços é mais do que justo e também precisamos de ganhar a vida.

#### Desagregação

:::note[Taxa de processamento]
O Wink cobra uma taxa de processamento de 1,5% por reserva. Isto cobre a manutenção da plataforma e permite-nos oferecer tudo o que está listado acima.
:::

:::note[Taxa de pagamento]
O TripPay cobra uma taxa de pagamento de 4,0% por reserva. Isto cobre a aquisição do pagamento do viajante.
:::

:::note[Transferência de fundos]
Existem taxas associadas ao envio de fundos para a sua conta. Isto depende do método de transferência que escolher. Atualmente suportamos:

- **Transferência bancária** O custo depende do país onde se encontra e de onde os fundos são enviados. Incluímos um calculador de orçamento que pode usar quando tiver fundos disponíveis na sua conta.

Se quiser que suportemos outro método de pagamento, envie-nos um e-mail.
:::

### Modelo 2

Este modelo está disponível apenas para agências de viagens que possuam licença de agência de viagens na sua região e que desejem ser o comerciante registado. Alguns dos nossos agentes de viagens registados querem ser responsáveis pelo processamento do pagamento e pela transferência de fundos para os hotéis. Neste modelo, eles são responsáveis pelos fundos e detêm as licenças necessárias para operar no seu país.

#### Desagregação

:::note[Taxa de processamento]
O Wink cobra uma taxa de processamento de 1,5% por reserva. Isto cobre a manutenção da plataforma e permite-nos oferecer tudo o que está listado acima.
:::

Neste modelo, os agentes de viagens pagam apenas a taxa de processamento do Wink e o Wink faturará o agente de viagens mensalmente.

## Utilização (pay-as-you-go)

Algumas funcionalidades custam-nos dinheiro cada vez que são usadas — IA generativa, APIs sociais de terceiros e fornecimento de preços em tempo real em grande escala. Em vez de incluir estas num plano mensal que pode não usar, paga apenas pelo que realmente consome, e só depois de esgotar a franquia mensal gratuita.

| Funcionalidade | Gratuito por mês | Depois | Unidade faturada |
| -- | -- | -- | -- |
| Publicação social — imagem | 1 | $1.50 | Uma publicação publicada |
| Publicação social — imagem gerada por IA | 0 | $2.50 | Uma publicação publicada |
| Publicação social — vídeo | 0 | $4.00 | Uma publicação publicada |
| Publicação social — vídeo gerado por IA | 0 | $14.00 | Uma publicação publicada |
| Resposta IA a um comentário ou DM | 5 | $0.05 | Uma resposta |
| Resposta de chatbot | 5 | $0.05 | Uma resposta |
| API Parceiro | 10,000 | $0.0001 | Um hotel-dia |
| API Media Parceiro | 1,000 | $0.0005 | Media de um hotel |

Os preços estão em USD. A franquia gratuita é concedida **por conta**, não por utilizador, e reinicia no dia 1 de cada mês (UTC).

### Como são precificados os posts

Os posts são precificados pelo que contêm, porque é isso que nos custa produzir. Uma imagem estática é barata; um vídeo não; qualquer coisa gerada por IA custa materialmente mais do que uma foto que forneceu.

- **A franquia gratuita cobre apenas publicações de imagem padrão.** Recebe uma dessas por conta por mês. Publicações de vídeo e media gerado por IA são faturadas desde a primeira publicação — não há franquia gratuita nesses níveis, por isso uma propriedade que publique vídeo deve esperar uma cobrança no primeiro mês.
- **O vídeo prevalece.** Se um post contiver qualquer vídeo, o post inteiro é faturado à tarifa de vídeo. Um post que mistura imagem e vídeo é um post de vídeo.
- **A proveniência IA define o nível.** Media que forneça — as suas próprias fotos e vídeos, ou qualquer coisa da sua biblioteca de conteúdos Wink — é faturada à tarifa padrão. Media que geramos para si é faturada à tarifa IA.

### O que é e não é medido

- Apenas um post **gerado** publicado numa rede de terceiros (Facebook, Instagram) é faturável. Um post que escreveu pessoalmente é gratuito, onde quer que seja publicado.
- **Publicar no WinkLinks é sempre gratuito**, gerado ou não.
- É cobrado **no momento da publicação**, não por tentativa. Regenerar um rascunho até ficar satisfeito não aumenta a sua fatura — paga uma vez pelo post que realmente publica. As tentativas não são ilimitadas, porém: cada post permite cerca de 10 regenerações para imagens e 3 para vídeo, o que reflete o custo que temos para os produzir. Verá quantas lhe restam enquanto trabalha.
- Na API Parceiro, um **hotel-dia** é um hotel com preço para uma noite de estadia — *não* uma chamada API. Uma pesquisa que retorna 20 hotéis para uma estadia de 3 noites são 60 hotel-dias numa única requisição. Endpoints de pesquisa e autocompletar são gratuitos e nunca medidos.
- Na **API Media Parceiro**, a unidade é um hotel cujo media lhe é devolvido, independentemente do número de fotos e vídeos. Uma requisição em lote para 50 hotéis são 50 unidades — e se alguns desses hotéis não tiverem media a que tem direito, só é faturado pelos que efetivamente retornaram media.

### Exemplo: um OTA a armazenar 90 dias de preços

Suponha que é um OTA, um site metapesquisa ou um operador turístico, e quer 90 dias de preços futuros para **1.000 hotéis**, cada um dos quais publica **4 tarifas principais**.

**Uma atualização completa de tudo isso são 90.000 hotel-dias — $9.00.**

São 1.000 hotéis × 90 dias. As 4 tarifas principais não custam nada extra: uma única requisição retorna todos os planos tarifários que um hotel publica para esse intervalo de datas, por isso o número de tarifas que uma propriedade tem não é uma dimensão de faturação. Também não importa como divide a requisição — uma requisição por período cobre até 30 dias, por isso faria 3 requisições por hotel, e 3 × 30 dias é faturado exatamente como uma requisição de 90 dias. É faturado pelo preço que pediu, não pela infraestrutura que usou.

Portanto, o que paga por mês depende de uma questão: com que frequência atualiza?

| Frequência de atualização | Hotel-dias / mês | Após os 10.000 gratuitos | Custo mensal |
| -- | -- | -- | -- |
| Uma vez por mês | 90.000 | 80.000 | **$8.00** |
| Semanalmente | 360.000 | 350.000 | **$35.00** |
| Diariamente | 2.700.000 | 2.690.000 | **$269.00** |
| Duas vezes por dia | 5.400.000 | 5.390.000 | **$539.00** |

Atualizar todos os 1.000 hotéis todos os dias são 3.000 requisições por dia e fica por cerca de $9.00 por dia. A franquia gratuita por si só — 10.000 hotel-dias por mês — é suficiente para precificar cerca de 110 hotéis para 90 dias completos, ou para construir e testar uma integração inteira sem pagar nada.

#### O que influencia esse número

- **Pedir planos tarifários um a um.** Uma requisição por período retorna o melhor preço por tipo de quarto em todos os planos tarifários de uma só vez. Se filtrar para um plano tarifário por requisição para ver os quatro separadamente, faz quatro vezes mais requisições e paga quatro vezes mais.
- **Ocupações, moedas ou idiomas adicionais.** Preços para 1 adulto e preços para 2 adultos são duas questões diferentes, e cada uma é faturada. O mesmo se aplica a uma segunda moeda de exibição ou idioma.
- **Atualizações que não precisa.** Nada obriga que os 90 dias tenham a mesma frequência de atualização. Atualize os próximos 14 dias diariamente e os dias 15–90 semanalmente e os mesmos 1.000 hotéis custam **$71.40** por mês em vez de $269.00 — as datas mais próximas, onde as tarifas realmente mudam, mantêm-se atualizadas.

### Ativação

O pay-as-you-go está desativado por defeito. Todos recebem a franquia gratuita sem fazer nada.

Para ultrapassar a franquia, o **proprietário** de uma conta ativa o pay-as-you-go e escolhe quais das suas contas são medidas. A utilização de todas as suas contas ativadas é consolidada numa **única fatura mensal**, que pode liquidar automaticamente por cartão ou receber como fatura para pagar manualmente.

Uma vez ativado, a sua utilização é medida mas **nunca limitada** — não atingirá um limite de taxa por gastar dinheiro connosco.

:::note[Se não ativar]
Nada deixa de funcionar e nada é cobrado. Simplesmente para na franquia gratuita desse mês: publicações geradas não serão publicadas e chamadas à API Parceiro retornam um `429` até a franquia ser reposta.
:::

### Estado da faturação

| Estado | O que significa |
| -- | -- |
| Em dia | Tudo funciona normalmente. |
| Em atraso | Um pagamento falhou e está a ser tentado novamente. As suas funcionalidades continuam a funcionar durante este período. |
| Suspenso | Uma fatura ficou por pagar até ao fim. Ações faturáveis são bloqueadas até ser liquidada; funcionalidades gratuitas continuam normalmente. |

:::tip[Preços em tempo real]
Os preços unitários e franquias gratuitas são sempre mostrados no Portal, diretamente do nosso sistema de faturação, para que possa consultá-los antes de se comprometer. Veja [Faturação](/pt-PT/account/subscription) para ativar o pay-as-you-go, escolher as suas contas e acompanhar a utilização e faturas do mês. Veja [Social](/pt-PT/portal/social/what-is-social) para saber como o volume de publicações afeta o que gasta.
:::

## Efeito da plataforma

Finalmente, à medida que continuamos a crescer em tamanho e reservas, queremos poder partilhar consigo alguns dos efeitos da plataforma. Mais reservas trazem oportunidades para descontos por volume do nosso gateway de pagamento, o que nos permitiria baixar a nossa taxa de processamento para todos.

Junte-se ao Wink hoje e descubra uma nova forma lucrativa de fazer negócios na indústria da hospitalidade!
