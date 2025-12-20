---
title: Em poucas palavras
description: Este artigo explica tudo o que queria saber sobre o motor de reservas.
sidebar:
  order: 0
---

Aqui está como segmentamos a responsabilidade na Wink: 

- [Extranet](/pt-PT/extranet/what-is-extranet) trata dos fornecedores que gerem o inventário.
- [Studio](/pt-PT/studio/what-is-studio) trata dos afiliados que gerem o conteúdo.
- `Booking Engine` trata de tornar o conteúdo, criado no `Studio`, que foi baseado no inventário criado na `Extranet`, reservável.
- [Payment](/pt-PT/payment/what-is-trip-pay) trata de cobrar / reembolsar os viajantes que reservam [através de plataformas como a Wink], e pagar os fornecedores.

O motor de reservas está no centro da nossa plataforma.

As suas responsabilidades incluem:

- Gerir moedas e manter as taxas de câmbio atualizadas.
- Dar aos fornecedores de tarifas uma forma de nos enviar dados de tarifas.
- Gerir dados de consulta. *ex. regiões, países, destinos, propriedades, etc.*
- Gerir idiomas.
- Gerar análises baseadas em interações de utilizadores, eventos e chamadas API.
- Fornecer inventário reservável no formato, idioma e moeda desejados, tais como:
    - Um [link partilhável](/pt-PT/studio/shareable-links) no Facebook.
    - Uma página de destino de hotel em https://ota.wink.travel com inventário para esse hotel.
    - Um [cartão](/pt-PT/studio/cards) contendo inventário de afiliados.
    - Um [mapa](/pt-PT/studio/maps) na sua conta [WinkLinks](/pt-PT/link-manager/wink-links).
    - Uma [chamada API](/pt-PT/developers/apis) a partir de um sistema remoto de agentes de viagem.
- Proporcionar aos viajantes uma forma de: 
    - Pesquisar inventário de viagens.
    - Reservar inventário disponível.
    - Gerir as suas [reservas e avaliações](/pt-PT/booking-engine/bookings).
    - Gerir a sua [lista de desejos](/pt-PT/booking-engine/bucket-list) de coisas para reservar no futuro.
    - Gerir o seu [perfil de viagem](/pt-PT/booking-engine/travel-preferences). *ex. alergias, contacto de emergência, etc.*

O motor de reservas é um conjunto de funcionalidades reutilizáveis que expomos através de https://ota.wink.travel; um website altamente personalizável para hotéis e afiliados venderem os seus produtos aos viajantes.

Os integradores, que querem ainda mais liberdade, têm acesso a todas as mesmas funcionalidades através do nosso [plugin WordPress](/pt-PT/developers/wordpress/), [Web Components](/pt-PT/developers/web-components) e [APIs](/pt-PT/developers/apis).

Continue para as próximas secções para ler mais sobre o que o motor de reservas tem para oferecer.

## Leitura adicional

- Leia sobre o nosso [plugin WordPress](/pt-PT/developers/wordpress/).
- Leia sobre os nossos [Web Components](/pt-PT/developers/web-components).
- Leia sobre as nossas [APIs](/pt-PT/developers/apis).
