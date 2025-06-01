---
title: Em poucas palavras
description: Este artigo explica tudo o que queria saber sobre o motor de reservas.
sidebar:
  order: 0
---
Veja como segmentamos a responsabilidade no Wink:

* [Extranet](/extranet/what-is-extranet) preocupa-se com os fornecedores a gerir estoque.
* [Estúdio](/studio/what-is-studio) preocupa-se com afiliados a gerir conteúdo.
* `Booking Engine` preocupa-se em tornar o conteúdo, criado em `Studio`, que teve por base o inventário criado em `Extranet` e torná-lo reservável.
* [Pagamento](/payment/what-is-trip-pay) preocupa-se em cobrar/reembolsar os viajantes que reservam \[através de plataformas como a Wink] e pagar aos fornecedores.

O motor de reservas é o cerne da nossa plataforma.

As suas responsabilidades incluem:

* Gerir moedas e manter as taxas de câmbio atualizadas.
* Oferecendo aos fornecedores de tarifas uma forma de nos enviarem dados de tarifas.
* Gerir dados de pesquisa. *por exemplo regiões, países, destinos, propriedades etc.*
* Gerir idiomas.
* Gerando análises com base nas interações do utilizador, eventos e chamadas de API.
* Fornecer inventário reservável no formato, idioma e moeda pretendidos, tais como:
  * UM [link partilhável](/studio/shareable-links) no Facebook.
  * Uma landing page de um hotel em https://ota.wink.travel com inventário desse hotel.
  * UM [cartão](/studio/cards) contendo inventário de afiliados.
  * UM [mapa](/studio/maps) no seu [WinkLinks](/link-manager/wink-links) conta.
  * Um [Chamada API](/developers/apis) de um sistema remoto de agente de viagens.
* Oferecendo aos viajantes uma forma de:
  * Pesquisar inventário de viagens.
  * Reserve o inventário disponível.
  * Gerir os seus [reservas e avaliações](/booking-engine/bookings).
  * Gerir os seus [lista de desejos](/booking-engine/bucket-list) de coisas para reservar no futuro.
  * Gerir os seus [perfil de viagem](/booking-engine/travel-preferences). *por exemplo Alergias, contacto de emergência etc.*

O motor de reservas é uma coleção de funcionalidades reutilizáveis que expomos através de https://ota.wink.travel; um site altamente personalizável para hotéis e afiliados venderem os seus produtos aos viajantes.

Os integradores que desejam ainda mais liberdade têm acesso a todos os mesmos recursos através do nosso [Plugin WordPress](/developers/wordpress/), [Componentes da Web](/developers/web-components) e [APIs](/developers/apis).

Continue nas próximas secções para ler mais sobre o que o motor de reservas tem para oferecer.

## Leitura adicional

* Leia sobre o nosso [Plugin WordPress](/developers/wordpress/).
* Leia sobre o nosso [Componentes da Web](/developers/web-components).
* Leia sobre o nosso [APIs](/developers/apis).

