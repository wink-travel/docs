---
title: Em poucas palavras
description: >-
  Este artigo explica tudo o que você queria saber sobre o mecanismo de
  reservas.
sidebar:
  order: 0
---
Veja como segmentamos a responsabilidade no Wink:

* [Extranet](/extranet/what-is-extranet)se preocupa com fornecedores gerenciando estoque.
* [Estúdio](/studio/what-is-studio)se preocupa com afiliados gerenciando conteúdo.
* `Booking Engine`preocupa-se em tornar o conteúdo, criado em`Studio`, que foi baseado no inventário criado em`Extranet`e torná-lo reservável.
* [Pagamento](/payment/what-is-trip-pay)se preocupa em cobrar/reembolsar viajantes que reservam \[por meio de plataformas como Wink] e pagar fornecedores.

O mecanismo de reservas é o cerne da nossa plataforma.

Suas responsabilidades incluem:

* Gerenciar moedas e manter as taxas de câmbio atualizadas.
* Oferecendo aos provedores de tarifas uma maneira de nos enviar dados de tarifas.
* Gerenciando dados de pesquisa.*por exemplo regiões, países, destinos, propriedades etc.*
* Gerenciando idiomas.
* Gerando análises com base em interações do usuário, eventos e chamadas de API.
* Fornecer inventário reservável no formato, idioma e moeda desejados, como:
  * Um [link compartilhável](/studio/shareable-links) no Facebook.
  * Uma landing page de hotel em https://ota.wink.travel com inventário daquele hotel.
  * Um [cartão](/studio/cards) contendo inventário de afiliados.
  * Um [mapa](/studio/maps) no seu[WinkLinks](/link-manager/wink-links) conta.
  * Um [Chamada de API](/developers/apis) de um sistema remoto de agente de viagens.
* Oferecendo aos viajantes uma maneira de:
  * Pesquisar inventário de viagens.
  * Reserve o inventário disponível.
  * Gerenciar seus[reservas e avaliações](/booking-engine/bookings).
  * Gerenciar seus [lista de desejos](/booking-engine/bucket-list) de coisas para reservar no futuro.
  * Gerenciar seus[perfil de viagem](/booking-engine/travel-preferences).*por exemplo alergias, contato de emergência etc.*

O mecanismo de reservas é uma coleção de funcionalidades reutilizáveis que expomos por meio de https://ota.wink.travel; um site altamente personalizável para hotéis e afiliados venderem seus produtos aos viajantes.

Os integradores que desejam ainda mais liberdade têm acesso a todos os mesmos recursos por meio do nosso [Plugin do WordPress](/developers/wordpress/),[Componentes da Web](/developers/web-components) e [APIs](/developers/apis).

Continue nas próximas seções para ler mais sobre o que o mecanismo de reservas tem a oferecer.

## Leitura adicional

* Leia sobre nosso[Plugin do WordPress](/developers/wordpress/).
* Leia sobre nosso[Componentes da Web](/developers/web-components).
* Leia sobre nosso[APIs](/developers/apis).

