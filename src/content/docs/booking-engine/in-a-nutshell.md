---
title: In a Nutshell
description: This article walks you through everything you wanted to know about the booking engine.
sidebar:
  order: 0
---

Here's how we segment responsibility on Wink: 

- [Extranet](/extranet/what-is-extranet) concerns itself with suppliers managing inventory.
- [Studio](/studio/what-is-studio) concerns itself with affiliates managing content.
- `Booking Engine` concerns itself with making the content, created in `Studio`, that was based on the inventory created in `Extranet` and making it bookable.
- [Payment](/payment/what-is-trip-pay) concerns itself with charging / refunding travelers that book [through platforms like Wink], and paying vendors.

The booking engine is at the core of our platform.

Its responsibilities include:

- Managing currencies and keeping exchange rates up-to-date.
- Giving rate providers a way to send us rate data.
- Managing lookup data. *e.g. regions, countries, destinations, properties etc.*
- Managing languages.
- Generating analytics based on user interactions, events and API calls.
- Serving up bookable inventory in the desired format, language and currency, such as:
    - A [shareable link](/studio/shareable-links) on Facebook.
    - A hotel landing page on https://ota.wink.travel with inventory for that hotel.
    - A [card](/studio/cards) containing affiliate inventory.
    - A [map](/studio/maps) on your [WinkLinks](/link-manager/wink-links) account.
    - An [API call](/developers/apis) from a remote travel agent system.
- Providing travelers with a way to: 
    - Search for travel inventory.
    - Book available inventory.
    - Manage their [bookings and reviews](/booking-engine/bookings).
    - Manage their [bucket list](/booking-engine/bucket-list) of things to book in the future.
    - Manage their [travel profile](/booking-engine/travel-preferences). *e.g. Allergies, emergency contact etc.*

The booking engine is a collection of re-usable functionality that we expose through https://ota.wink.travel; a highly customizable website for hotels and affiliates to sell their wares to travelers.

Integrators, that want even more freedom, have access to all the same features via our [WordPress plugin](/developers/wordpress/), [Web Components](/developers/web-components) and [APIs](/developers/apis).

Continue on to the next sections to read more about what the booking engine has to offer.

## Further reading

- Read about our [WordPress plugin](/developers/wordpress/).
- Read about our [Web Components](/developers/web-components).
- Read about our [APIs](/developers/apis).
