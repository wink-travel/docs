---
title: In Sintesi
description: Questo articolo ti guida attraverso tutto ciò che volevi sapere sul motore di prenotazione.
sidebar:
  order: 0
---

Ecco come segmentiamo le responsabilità su Wink: 

- [Extranet](/it/extranet/what-is-extranet) si occupa dei fornitori che gestiscono l'inventario.
- [Studio](/it/studio/what-is-studio) si occupa degli affiliati che gestiscono i contenuti.
- `Booking Engine` si occupa di rendere prenotabile il contenuto, creato in `Studio`, basato sull'inventario creato in `Extranet`.
- [Payment](/it/payment/what-is-trip-pay) si occupa di addebitare / rimborsare i viaggiatori che prenotano [attraverso piattaforme come Wink], e di pagare i fornitori.

Il motore di prenotazione è al centro della nostra piattaforma.

Le sue responsabilità includono:

- Gestire le valute e mantenere aggiornati i tassi di cambio.
- Fornire ai fornitori di tariffe un modo per inviarci i dati delle tariffe.
- Gestire i dati di riferimento. *es. regioni, paesi, destinazioni, strutture ecc.*
- Gestire le lingue.
- Generare analisi basate sulle interazioni degli utenti, eventi e chiamate API.
- Fornire l'inventario prenotabile nel formato, lingua e valuta desiderati, come:
    - Un [link condivisibile](/it/studio/shareable-links) su Facebook.
    - Una pagina di destinazione hotel su https://ota.wink.travel con l'inventario per quell'hotel.
    - Una [card](/it/studio/cards) contenente l'inventario affiliato.
    - Una [mappa](/it/studio/maps) sul tuo account [WinkLinks](/it/link-manager/wink-links).
    - Una [chiamata API](/it/developers/apis) da un sistema di agenzia di viaggi remoto.
- Fornire ai viaggiatori un modo per: 
    - Cercare l'inventario di viaggio.
    - Prenotare l'inventario disponibile.
    - Gestire le loro [prenotazioni e recensioni](/it/booking-engine/bookings).
    - Gestire la loro [bucket list](/it/booking-engine/bucket-list) di cose da prenotare in futuro.
    - Gestire il loro [profilo di viaggio](/it/booking-engine/travel-preferences). *es. allergie, contatto di emergenza ecc.*

Il motore di prenotazione è una raccolta di funzionalità riutilizzabili che esponiamo tramite https://ota.wink.travel; un sito altamente personalizzabile per hotel e affiliati per vendere i loro servizi ai viaggiatori.

Gli integratori, che vogliono ancora più libertà, hanno accesso a tutte le stesse funzionalità tramite il nostro [plugin WordPress](/it/developers/wordpress/), [Web Components](/it/developers/web-components) e [API](/it/developers/apis).

Continua con le sezioni successive per leggere di più su cosa offre il motore di prenotazione.

## Ulteriori letture

- Leggi del nostro [plugin WordPress](/it/developers/wordpress/).
- Leggi dei nostri [Web Components](/it/developers/web-components).
- Leggi delle nostre [API](/it/developers/apis).
