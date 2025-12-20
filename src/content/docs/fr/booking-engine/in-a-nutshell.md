---
title: En Bref
description: Cet article vous guide à travers tout ce que vous vouliez savoir sur le moteur de réservation.
sidebar:
  order: 0
---

Voici comment nous segmentons les responsabilités sur Wink : 

- [Extranet](/fr/extranet/what-is-extranet) concerne les fournisseurs qui gèrent l'inventaire.
- [Studio](/fr/studio/what-is-studio) concerne les affiliés qui gèrent le contenu.
- `Booking Engine` concerne la création du contenu, réalisé dans `Studio`, basé sur l'inventaire créé dans `Extranet` et le rend bookable.
- [Payment](/fr/payment/what-is-trip-pay) concerne la facturation / le remboursement des voyageurs qui réservent [via des plateformes comme Wink], et le paiement des fournisseurs.

Le moteur de réservation est au cœur de notre plateforme.

Ses responsabilités incluent :

- Gérer les devises et maintenir les taux de change à jour.
- Offrir aux fournisseurs de tarifs un moyen de nous envoyer des données tarifaires.
- Gérer les données de référence. *ex. régions, pays, destinations, établissements, etc.*
- Gérer les langues.
- Générer des analyses basées sur les interactions utilisateurs, événements et appels API.
- Fournir l'inventaire bookable dans le format, la langue et la devise souhaités, tels que :
    - Un [lien partageable](/fr/studio/shareable-links) sur Facebook.
    - Une page d’accueil d’hôtel sur https://ota.wink.travel avec l’inventaire de cet hôtel.
    - Une [carte](/fr/studio/cards) contenant l’inventaire affilié.
    - Une [carte](/fr/studio/maps) sur votre compte [WinkLinks](/fr/link-manager/wink-links).
    - Un [appel API](/fr/developers/apis) depuis un système d’agence de voyage distant.
- Offrir aux voyageurs un moyen de : 
    - Rechercher de l’inventaire de voyage.
    - Réserver l’inventaire disponible.
    - Gérer leurs [réservations et avis](/fr/booking-engine/bookings).
    - Gérer leur [liste de souhaits](/fr/booking-engine/bucket-list) des choses à réserver à l’avenir.
    - Gérer leur [profil de voyage](/fr/booking-engine/travel-preferences). *ex. allergies, contact d’urgence, etc.*

Le moteur de réservation est un ensemble de fonctionnalités réutilisables que nous exposons via https://ota.wink.travel ; un site web hautement personnalisable pour que les hôtels et affiliés vendent leurs offres aux voyageurs.

Les intégrateurs, qui souhaitent encore plus de liberté, ont accès à toutes les mêmes fonctionnalités via notre [plugin WordPress](/fr/developers/wordpress/), [Web Components](/fr/developers/web-components) et [APIs](/fr/developers/apis).

Continuez vers les sections suivantes pour en savoir plus sur ce que le moteur de réservation a à offrir.

## Pour aller plus loin

- Lisez à propos de notre [plugin WordPress](/fr/developers/wordpress/).
- Lisez à propos de nos [Web Components](/fr/developers/web-components).
- Lisez à propos de nos [APIs](/fr/developers/apis).
