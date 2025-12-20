---
title: Resumo
description: Este artigo explica tudo o que você queria saber sobre o motor de reservas.
sidebar:
  order: 0
---

Aqui está como segmentamos a responsabilidade no Wink:

- [Extranet](/pt-BR/extranet/what-is-extranet) cuida dos fornecedores que gerenciam o inventário.
- [Studio](/pt-BR/studio/what-is-studio) cuida dos afiliados que gerenciam o conteúdo.
- `Booking Engine` cuida de tornar o conteúdo, criado no `Studio`, que foi baseado no inventário criado na `Extranet`, reservável.
- [Payment](/pt-BR/payment/what-is-trip-pay) cuida de cobrar / reembolsar os viajantes que reservam [através de plataformas como o Wink], e pagar os fornecedores.

O motor de reservas está no centro da nossa plataforma.

Suas responsabilidades incluem:

- Gerenciar moedas e manter as taxas de câmbio atualizadas.
- Oferecer aos provedores de tarifas uma forma de nos enviar dados de tarifas.
- Gerenciar dados de consulta. *ex.: regiões, países, destinos, propriedades etc.*
- Gerenciar idiomas.
- Gerar análises baseadas em interações de usuários, eventos e chamadas de API.
- Fornecer inventário reservável no formato, idioma e moeda desejados, como:
    - Um [link compartilhável](/pt-BR/studio/shareable-links) no Facebook.
    - Uma página de destino de hotel em https://ota.wink.travel com inventário para esse hotel.
    - Um [card](/pt-BR/studio/cards) contendo inventário de afiliados.
    - Um [mapa](/pt-BR/studio/maps) na sua conta [WinkLinks](/pt-BR/link-manager/wink-links).
    - Uma [chamada de API](/pt-BR/developers/apis) de um sistema remoto de agente de viagens.
- Oferecer aos viajantes uma forma de:
    - Pesquisar inventário de viagens.
    - Reservar inventário disponível.
    - Gerenciar suas [reservas e avaliações](/pt-BR/booking-engine/bookings).
    - Gerenciar sua [lista de desejos](/pt-BR/booking-engine/bucket-list) de coisas para reservar no futuro.
    - Gerenciar seu [perfil de viagem](/pt-BR/booking-engine/travel-preferences). *ex.: alergias, contato de emergência etc.*

O motor de reservas é uma coleção de funcionalidades reutilizáveis que expomos através do https://ota.wink.travel; um site altamente personalizável para hotéis e afiliados venderem seus produtos aos viajantes.

Integradores, que desejam ainda mais liberdade, têm acesso a todos os mesmos recursos via nosso [plugin WordPress](/pt-BR/developers/wordpress/), [Web Components](/pt-BR/developers/web-components) e [APIs](/pt-BR/developers/apis).

Continue para as próximas seções para ler mais sobre o que o motor de reservas tem a oferecer.

## Leitura adicional

- Leia sobre nosso [plugin WordPress](/pt-BR/developers/wordpress/).
- Leia sobre nossos [Web Components](/pt-BR/developers/web-components).
- Leia sobre nossas [APIs](/pt-BR/developers/apis).
