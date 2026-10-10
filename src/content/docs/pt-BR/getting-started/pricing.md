---
title: Preços
description: A maior parte do Wink é gratuita. Você paga uma pequena taxa por reserva e uma taxa de uso pay-as-you-go em alguns recursos premium.
sidebar:
  order: 4
---

O Wink não tem assinaturas, nem assentos, nem taxas de configuração. A grande maioria da plataforma é gratuita, e há apenas duas coisas pelas quais você pagará:

1. **Uma taxa de plataforma por reserva, mais o custo do processamento do cartão** — somente quando uma reserva é feita.
2. **Taxas de uso pay-as-you-go** — em alguns recursos premium que nos custam dinheiro toda vez que são usados, cada um com uma cota mensal gratuita.

## O que é gratuito

Estes não custam nada, para sempre, sem cota e sem medição:

- O **motor de reservas** — no seu próprio site, na sua página WinkLinks ou em qualquer outro lugar onde você o incorpore.
- **Gestão de propriedades** — conteúdo, fotos, tarifas, planos tarifários, disponibilidade, promoções e políticas.
- **Ferramentas de afiliados** — links compartilháveis, listas selecionadas, grades, mapas, cartões e widgets incorporáveis.
- **Ferramentas para agentes de viagem** — busca, tarifas personalizadas e reserva em nome dos seus clientes.
- **WinkLinks** — reivindique sua URL personalizada, construa sua página e publique nela quantas vezes quiser.
- **Publicações manuais em redes sociais** — qualquer coisa que você escreva, em qualquer rede conectada.
- **Análises, rankings, reivindicações, configurações** e gerenciamento de conta.
- As **APIs Consumer e Booking Engine**, incluindo seus endpoints de busca e autocompletar. Na **Partner API**, as chamadas Lookup e Content são medidas em uma unidade cada (veja [Uso](#o-que-é-e-o-que-não-é-medido) abaixo).

## Reservas

O Wink suporta dois modelos: Wink coletando o pagamento para o hotel, e um agente de viagens licenciado atuando como comerciante registrado.

### Modelo 1 — Wink coleta para o hotel

O Wink coleta o pagamento do hóspede como agente limitado de coleta de pagamento do hotel. O hotel é o comerciante registrado, e o nome do hotel aparece no extrato do cartão do hóspede.
Este modelo se aplica a 95% de todas as reservas.

#### Detalhamento

:::note[Taxa de plataforma]
O Wink cobra uma taxa de plataforma de 1,5% por reserva. Isso cobre a manutenção da plataforma e é o que nos permite oferecer tudo listado acima gratuitamente. Não é cobrada em reservas canceladas.
:::

:::note[Processamento de cartão]
A taxa de processamento do pagamento cobrada para coletar o pagamento do hóspede é repassada ao hotel pelo custo, sem margem. Varia conforme o cartão e método de pagamento do hóspede, e o valor exato aparece na seção de Contabilidade de cada reserva. Se uma reserva for cancelada ou reembolsada, qualquer taxa retida pelo processador ainda é cobrada; se não cobrar nada, nós também não cobramos.
:::

:::note[Envio de fundos]
Existem taxas associadas ao envio de fundos para sua conta. Isso depende do método de pagamento que você escolher. Atualmente suportamos:

- **Transferência bancária** — O custo depende do país onde você está, de onde os fundos são enviados e de qualquer conversão de moeda aplicada no caminho. A taxa de pagamento e qualquer custo de conversão são pagos pelo recebedor, pelo custo. Incluímos uma calculadora de cotação que você pode usar quando tiver fundos disponíveis na sua conta.

Se desejar que suportemos outro método de pagamento, envie-nos um e-mail.
:::

### Modelo 2 — Agente de viagens como comerciante registrado

Este modelo está disponível apenas para agências de viagem que possuem licença de agência de viagens em sua região e que desejam ser o comerciante registrado. Está disponível somente para parceiros da API, reservando através da [Partner API](/pt-BR/integrations/partner-api/), e precisa da aprovação prévia por escrito do Wink. Alguns de nossos agentes de viagem registrados querem ser responsáveis pelo manuseio do pagamento e repasse dos fundos aos hotéis. Sob este modelo, eles são responsáveis pelos fundos e possuem as licenças necessárias para operar em seu país.

#### Detalhamento

:::note[Taxa de plataforma]
O Wink cobra uma taxa de plataforma de 1,5% por reserva. Isso cobre a manutenção da plataforma e é o que nos permite oferecer tudo listado acima gratuitamente.
:::

Usando este modelo, os agentes de viagem pagam a taxa de 1,5% do Wink mais qualquer uso da Partner API acima da cota gratuita, faturado mensalmente.

## O que os parceiros pagam

Para parceiros que enviam reservas: criadores, afiliados, plataformas, desenvolvedores e agentes de viagem. As parcerias são não exclusivas, sem territórios.

| | Pagamento coletado para o hotel (a maioria dos parceiros) | Você é o comerciante registrado (apenas parceiros API) |
|---|---|---|
| Taxa de licença ou território | Nenhuma | Nenhuma |
| Taxa de configuração | Nenhuma | Nenhuma |
| Assinatura ou taxa mensal | Nenhuma | Nenhuma |
| Compromisso mínimo ou prazo | Nenhum | Nenhum. Aplica-se limite de crédito. |
| Acesso à Partner API | 10.000 diárias de hotel por mês grátis, depois $0,0001 por diária. Pay-as-you-go está desligado por padrão; na cota gratuita, chamadas retornam `429`. | Igual |
| Taxa de transação | Nenhuma. Você ganha comissão (10% padrão). | 1,5% de taxa de reserva sobre o valor da reserva, faturada mensalmente em USD, com vencimento em 15 dias. Com pay-as-you-go ativado, o uso da Partner API vem em uma segunda fatura mensal. |
| Taxa de suporte | Nenhuma | Nenhuma |
| Outras cobranças | Taxas de transferência de pagamento, pelo custo | Possível pré-pagamento ou depósito na aprovação. Juros de 1,5% ao mês apenas em faturas vencidas. |
| Quando as taxas mudam | Aviso de 30 dias; aplica-se apenas a reservas feitas após a mudança | Igual. O Wink também pode variar seu limite de crédito com aviso. |

A rota de comerciante registrado precisa da aprovação prévia por escrito do Wink. Veja [Modelo 2](#modelo-2--agente-de-viagens-como-comerciante-registrado) acima e a página da [Partner API](/pt-BR/integrations/partner-api/).

## Uso (pay-as-you-go)

Alguns recursos nos custam dinheiro toda vez que são usados — IA generativa, APIs sociais de terceiros e fornecimento de preços ao vivo em escala. Em vez de agrupar esses custos em um plano mensal que você pode não usar, você paga apenas pelo que realmente consome, e somente depois de usar a cota mensal gratuita.

| Recurso | Gratuito por mês | Depois | Unidade faturada |
| -- | -- | -- | -- |
| Publicação social — imagem | 1 | $1,50 | Uma publicação publicada |
| Publicação social — imagem gerada por IA | 0 | $2,50 | Uma publicação publicada |
| Publicação social — vídeo aprimorado por IA | 0 | $4,00 | Uma publicação publicada |
| Publicação social — vídeo gerado por IA | 0 | $14,00 | Uma publicação publicada |
| Resposta de IA a um comentário ou DM | 5 | $0,05 | Uma resposta |
| Resposta de chatbot | 5 | $0,05 | Uma resposta |
| Partner API | 10.000 | $0,0001 | Uma diária de hotel |

Os preços são em USD. A cota gratuita é concedida **por conta**, não por usuário, e reinicia no dia 1º de cada mês (UTC).

### Como as publicações são precificadas

As publicações são precificadas pelo que contêm, porque é isso que nos custa produzir. Uma imagem estática é barata; um vídeo não; qualquer coisa gerada por IA custa materialmente mais do que uma foto que você forneceu.

- **A cota gratuita cobre apenas publicações com imagem padrão.** Você recebe uma dessas por conta por mês. Publicações em vídeo e mídia gerada por IA são cobradas desde a primeira publicação — não há cota gratuita nesses níveis, então uma propriedade que publica vídeo deve esperar uma cobrança já no primeiro mês.
- **O vídeo prevalece.** Se uma publicação contém qualquer vídeo, toda a publicação é cobrada na tarifa de vídeo. Uma publicação que mistura imagem e vídeo é considerada uma publicação de vídeo.
- **A origem IA define o nível.** Mídia que você fornece — suas próprias fotos e vídeos, ou qualquer coisa da sua biblioteca de conteúdo Wink — é cobrada na tarifa padrão. Mídia que geramos para você é cobrada na tarifa de IA.

### O que é e o que não é medido

- Apenas uma publicação **gerada** e publicada em uma rede de terceiros (Facebook, Instagram) é cobrável. Uma publicação que você escreveu é gratuita, onde quer que seja publicada.
- **Publicar no WinkLinks é sempre gratuito**, gerado ou não.
- Você é cobrado **na publicação**, não por tentativa. Regenerar um rascunho até ficar satisfeito não aumenta sua conta — você paga uma vez pela publicação que realmente envia. Tentativas não são ilimitadas, porém: cada publicação permite cerca de 10 regenerações para imagens e 3 para vídeo, o que reflete o custo para nós de produzi-las. Você verá quantas restam enquanto trabalha.
- Na Partner API, uma **diária de hotel** é um hotel precificado para uma noite de estadia — *não* uma chamada de API. Uma busca que retorna 20 hotéis para uma estadia de 3 noites é 60 diárias de hotel em uma única requisição. Chamadas Content e Lookup (busca de destino e autocompletar) custam uma unidade cada, independentemente do que retornam. Endpoints de conta são gratuitos.

### Como ativar

Pay-as-you-go está desligado por padrão. Todos recebem a cota gratuita sem fazer nada.

Para ultrapassar a cota, o **proprietário** da conta ativa o pay-as-you-go e escolhe quais de suas contas serão medidas. O uso de todas as suas contas ativadas é consolidado em uma **única fatura mensal**, que você pode pagar automaticamente por cartão ou receber como fatura para pagar manualmente.

Uma vez ativado, seu uso é medido, mas **nunca limitado** — você não atingirá um limite de taxa por gastar dinheiro conosco.

:::note[Se você não ativar]
Nada quebra e nada é cobrado. Você simplesmente para na cota gratuita daquele mês: publicações geradas não serão publicadas e chamadas da Partner API retornarão `429` até a cota ser renovada.
:::

### Status de faturamento

| Status | O que significa |
| -- | -- |
| Em dia | Tudo funciona normalmente. |
| Atrasado | Um pagamento falhou e está sendo tentado novamente. Seus recursos continuam funcionando durante esse período. |
| Suspenso | Uma fatura ficou sem pagamento até o final. Ações faturáveis são bloqueadas até o pagamento; recursos gratuitos continuam normalmente. |

:::tip[Preços ao vivo]
Os preços unitários e cotas gratuitas são sempre exibidos no Portal, diretamente do nosso sistema de faturamento, para que você possa consultá-los antes de se comprometer. Veja [Faturamento](/pt-BR/portal/plan) para ativar o pay-as-you-go, escolher suas contas e acompanhar o uso e faturas do mês. Veja [Social](/pt-BR/portal/social/what-is-social) para entender como o volume de publicações afeta seus gastos.
:::

## Efeito da plataforma

Por fim, à medida que continuamos a crescer em tamanho e reservas, queremos poder compartilhar alguns dos efeitos da plataforma com você. Mais reservas trazem oportunidades de descontos por volume com nosso processador de pagamentos. Como o processamento de cartão é repassado pelo custo, qualquer economia que negociarmos vai direto para os hotéis.

Junte-se ao Wink hoje e descubra uma nova forma lucrativa de fazer negócios na indústria da hospitalidade!
