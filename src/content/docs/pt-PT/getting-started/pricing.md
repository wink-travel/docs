---
title: Preços
description: A maior parte do Wink é gratuita. Paga uma pequena taxa por reserva e uma taxa de utilização pay-as-you-go em algumas funcionalidades premium.
sidebar:
  order: 4
---

O Wink não tem subscrições, lugares nem taxas de configuração. A grande maioria da plataforma é gratuita, e só há duas coisas pelas quais alguma vez pagará:

1. **Uma taxa de plataforma por reserva, mais o custo do processamento do cartão** — apenas quando uma reserva é efetuada.
2. **Taxas de utilização pay-as-you-go** — em algumas funcionalidades premium que nos custam dinheiro cada vez que são usadas, cada uma com uma franquia mensal gratuita.

## O que é gratuito

Estes não custam nada, para sempre, sem franquia nem medição:

- O **motor de reservas** — no seu próprio site, na sua página WinkLinks, ou em qualquer outro local onde o incorpore.
- **Gestão de propriedades** — conteúdo, fotos, tarifas, planos tarifários, disponibilidade, promoções e políticas.
- **Ferramentas de afiliados** — links partilháveis, listas selecionadas, grelhas, mapas, cartões e widgets incorporáveis.
- **Ferramentas para agentes de viagens** — pesquisa, tarifas personalizadas e reservas em nome dos seus clientes.
- **WinkLinks** — reivindique a sua URL personalizada, construa a sua página e publique nela tantas vezes quanto quiser.
- **Publicações sociais manuais** — tudo o que escrever pessoalmente, em qualquer rede ligada.
- **Análises, quadros de líderes, reclamações, definições** e gestão de conta.
- As **APIs Consumer e Booking Engine**, incluindo os seus endpoints de pesquisa e autocompletar. Na **Partner API**, as chamadas Lookup e Content são medidas a uma unidade cada (veja [Utilização](#what-is-and-isnt-metered) abaixo).

## Reservas

O Wink suporta dois modelos: o Wink a recolher o pagamento para o hotel, e um agente de viagens licenciado a atuar como comerciante registado.

### Modelo 1 — Wink recolhe para o hotel

O Wink recolhe o pagamento do hóspede como agente limitado de recolha de pagamentos do hotel. O hotel é o comerciante registado, e o nome do hotel aparece no extrato do cartão do hóspede.
Este modelo aplica-se a 95% de todas as reservas.

#### Detalhes

:::note[Taxa de plataforma]
O Wink cobra uma taxa de plataforma de 1,5% por reserva. Esta taxa cobre a manutenção da plataforma e permite-nos oferecer tudo o que está listado acima. Não é cobrada numa reserva cancelada.
:::

:::note[Processamento de cartão]
A taxa de processamento do pagamento cobrada para recolher o pagamento do hóspede é repassada ao hotel ao custo, sem margem. Varia consoante o cartão e o método de pagamento do hóspede, e o valor exato aparece na secção de Contabilidade de cada reserva. Se uma reserva for cancelada ou reembolsada, qualquer taxa retida pelo processador é ainda cobrada; se não cobrar nada, nós também não cobramos.
:::

:::note[Transferência de fundos]
Existem taxas associadas ao envio de fundos para a sua conta. Isto depende do método de transferência que escolher. Atualmente suportamos:

- **Transferência bancária** — O custo depende do país onde se encontra, de onde os fundos são enviados e de qualquer conversão de moeda aplicada no processo. A taxa de pagamento e qualquer custo de conversão são pagos pelo beneficiário, ao custo. Incluímos um calculador de orçamento que pode usar quando tiver fundos disponíveis na sua conta.

Se desejar que suportemos outro método de pagamento, envie-nos um e-mail.
:::

### Modelo 2 — Agente de viagens como comerciante registado

Este modelo está disponível apenas para agências de viagens que possuam licença de agência de viagens na sua região e que desejem ser o comerciante registado. Está disponível apenas para parceiros API, reservando através da [Partner API](/pt-PT/integrations/partner-api/), e necessita da aprovação prévia por escrito do Wink. Alguns dos nossos agentes de viagens registados querem ser responsáveis pelo processamento do pagamento e pela transferência de fundos para os hotéis. Neste modelo, eles são responsáveis pelos fundos e possuem as licenças necessárias para operar no seu país.

#### Detalhes

:::note[Taxa de plataforma]
O Wink cobra uma taxa de plataforma de 1,5% por reserva. Esta taxa cobre a manutenção da plataforma e permite-nos oferecer tudo o que está listado acima.
:::

Neste modelo, os agentes de viagens pagam a taxa de 1,5% do Wink mais qualquer utilização da Partner API acima da franquia gratuita, faturada mensalmente.

## O que os parceiros pagam

Para parceiros que enviam reservas: criadores, afiliados, plataformas, desenvolvedores e agentes de viagens. As parcerias são não exclusivas, sem territórios.

| | Pagamento recolhido para o hotel (a maioria dos parceiros) | Você é o comerciante registado (apenas parceiros API) |
|---|---|---|
| Taxa de licença ou território | Nenhuma | Nenhuma |
| Taxa de configuração | Nenhuma | Nenhuma |
| Subscrição ou taxa mensal | Nenhuma | Nenhuma |
| Compromisso mínimo ou prazo | Nenhum | Nenhum. Aplica-se um limite de crédito. |
| Acesso à Partner API | 10.000 noites de hotel por mês grátis, depois $0,0001 por noite de hotel. Pay-as-you-go está desligado por defeito; na franquia gratuita, as chamadas retornam `429`. | Igual |
| Taxa de transação | Nenhuma. Ganha comissão (10% por defeito). | 1,5% de taxa de reserva sobre o valor da reserva, faturada mensalmente em USD, com pagamento em 15 dias. Com pay-as-you-go ativado, a utilização da Partner API vem numa segunda fatura mensal. |
| Taxa de suporte | Nenhuma | Nenhuma |
| Outras cobranças | Taxas de transferência de pagamento, ao custo | Possível pré-pagamento ou depósito na aprovação. Juros de 1,5% ao mês apenas em faturas em atraso. |
| Quando as taxas mudam | Aviso de 30 dias; aplica-se apenas a reservas feitas após a alteração | Igual. O Wink pode também alterar o seu limite de crédito com aviso. |

O caminho do comerciante registado necessita da aprovação prévia por escrito do Wink. Veja [Modelo 2](#model-2--travel-agent-as-merchant-of-record) acima e a página da [Partner API](/pt-PT/integrations/partner-api/).

## Utilização (pay-as-you-go)

Algumas funcionalidades custam-nos dinheiro cada vez que são usadas — IA generativa, APIs sociais de terceiros e fornecimento de preços em tempo real à escala. Em vez de incluir estas num plano mensal que pode não usar, paga apenas pelo que realmente consome, e só depois de esgotar a franquia mensal gratuita.

| Funcionalidade | Gratuito por mês | Depois | Unidade faturada |
| -- | -- | -- | -- |
| Publicação social — imagem | 1 | $1,50 | Uma publicação publicada |
| Publicação social — imagem gerada por IA | 0 | $2,50 | Uma publicação publicada |
| Publicação social — vídeo melhorado por IA | 0 | $4,00 | Uma publicação publicada |
| Publicação social — vídeo gerado por IA | 0 | $14,00 | Uma publicação publicada |
| Resposta IA a um comentário ou DM | 5 | $0,05 | Uma resposta |
| Resposta de chatbot | 5 | $0,05 | Uma resposta |
| Partner API | 10.000 | $0,0001 | Uma noite de hotel |

Os preços estão em USD. A franquia gratuita é concedida **por conta**, não por utilizador, e reinicia no dia 1 de cada mês (UTC).

### Como as publicações são tarifadas

As publicações são tarifadas pelo que contêm, porque é isso que nos custa produzir. Uma imagem estática é barata; um vídeo não; qualquer coisa que geremos com IA custa materialmente mais do que uma foto que forneceu.

- **A franquia gratuita cobre apenas publicações com imagem padrão.** Recebe uma dessas por conta por mês. Publicações em vídeo e media gerada por IA são faturadas desde a primeira publicação — não há franquia gratuita nestes níveis, por isso uma propriedade que publique vídeo deve esperar uma cobrança no primeiro mês.
- **O vídeo prevalece.** Se uma publicação contiver qualquer vídeo, a publicação inteira é faturada à tarifa de vídeo. Uma publicação que misture imagem e vídeo é uma publicação de vídeo.
- **A proveniência IA define o nível.** Media que forneça — as suas próprias fotos e vídeos, ou qualquer coisa da sua biblioteca de conteúdos Wink — é faturada à tarifa padrão. Media que geramos para si é faturada à tarifa IA.

### O que é e não é medido

- Apenas uma publicação **gerada** e publicada numa rede de terceiros (Facebook, Instagram) é faturável. Uma publicação que escreveu pessoalmente é gratuita, onde quer que seja publicada.
- **Publicar no WinkLinks é sempre gratuito**, gerada ou não.
- É cobrado **no momento da publicação**, não por tentativa. Regenerar um rascunho até ficar satisfeito não aumenta a sua fatura — paga uma vez pela publicação que realmente envia. As tentativas não são ilimitadas, porém: cada publicação permite cerca de 10 regenerações para imagens e 3 para vídeo, o que reflete o custo que temos para as produzir. Verá quantas lhe restam enquanto trabalha.
- Na Partner API, uma **noite de hotel** é um hotel tarifado para uma noite de estadia — *não* uma chamada API. Uma pesquisa que retorna 20 hotéis para uma estadia de 3 noites são 60 noites de hotel numa única requisição. Chamadas Content e Lookup (pesquisa de destino e autocompletar) custam uma unidade cada, independentemente do que retornem. Endpoints de conta são gratuitos.

### Ativação

O pay-as-you-go está desligado por defeito. Todos recebem a franquia gratuita sem fazer nada.

Para ultrapassar a franquia, o **proprietário** de uma conta ativa o pay-as-you-go e escolhe quais das suas contas são medidas. A utilização de todas as suas contas ativadas é consolidada numa **única fatura mensal**, que pode liquidar automaticamente por cartão ou receber como fatura para pagar manualmente.

Uma vez ativado, a sua utilização é medida mas **nunca limitada** — não atingirá um limite de taxa por gastar dinheiro connosco.

:::note[Se não ativar]
Nada deixa de funcionar e nada é cobrado. Simplesmente para na franquia gratuita desse mês: publicações geradas não serão publicadas e chamadas à Partner API retornam `429` até a franquia ser reposta.
:::

### Estado da faturação

| Estado | O que significa |
| -- | -- |
| Em dia | Tudo funciona normalmente. |
| Em atraso | Um pagamento falhou e está a ser tentado novamente. As suas funcionalidades continuam a funcionar durante este período. |
| Suspenso | Uma fatura ficou por pagar até ao fim. Ações faturáveis são bloqueadas até ser liquidada; funcionalidades gratuitas continuam normalmente. |

:::tip[Preços em tempo real]
Os preços unitários e franquias gratuitas são sempre mostrados no Portal, diretamente do nosso sistema de faturação, para que possa consultá-los antes de se comprometer. Veja [Faturação](/pt-PT/portal/plan) para ativar o pay-as-you-go, escolher as suas contas e acompanhar a utilização e faturas do mês. Veja [Social](/pt-PT/portal/social/what-is-social) para saber como o volume de publicações afeta os seus gastos.
:::

## Efeito da plataforma

Finalmente, à medida que continuamos a crescer em tamanho e reservas, queremos poder partilhar consigo alguns dos efeitos da plataforma. Mais reservas trazem oportunidades para descontos por volume junto do nosso processador de pagamentos. Como o processamento de cartões é repassado ao custo, qualquer poupança que negociarmos reverte diretamente para os hotéis.

Junte-se ao Wink hoje e descubra uma nova forma lucrativa de fazer negócios na indústria da hospitalidade!
