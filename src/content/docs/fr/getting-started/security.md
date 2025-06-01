---
title: Security
description: >-
  Cet article contient des informations sur les mesures de sécurité que nous
  mettons en œuvre et sont publiées chaque année par notre société de sécurité
  tierce.
sidebar:
  order: 6
---
# Document de présentation de la sécurité Wink

*Dernière mise à jour : 7 septembre 2024*

*Version 1.0*

## Objet et portée

Dans le cadre de notre engagement continu en matière de sécurité et de protection des données utilisateur, nous effectuons régulièrement des tests d'intrusion sur notre application web. Ce document décrit nos méthodologies de test, fournit un résumé des résultats et met en avant notre approche d'amélioration continue de la sécurité.

Ce document sera mis à jour à mesure que de nouveaux rapports seront produits ou lorsque des changements importants se produiront.

Domaines d'application :\
\*.wink.travel\
\*.trippay.io

## Fréquence et calendrier des tests

Nos tests d'intrusion sont réalisés chaque année, et des tests supplémentaires sont programmés si nécessaire suite à des mises à jour importantes de l'application ou de l'infrastructure. Cette cadence de tests régulière nous permet de rester à l'affût des menaces en constante évolution et de maintenir un environnement sécurisé.

## Méthodologies de test

Nos tests de pénétration sont complets et couvrent un large éventail d'aspects de sécurité, y compris, mais sans s'y limiter :

* **Top 10 de l'OWASP :**&#x4E;os tests ciblent spécifiquement les risques de sécurité les plus critiques, tels que l'injection, l'authentification rompue et les scripts intersites (XSS).
* **Tests de boîte noire et de boîte grise :**&#x45;n fonction de la portée, notre équipe utilise ces méthodologies pour simuler des scénarios d’attaque externes et internes.
* **Tests automatisés et manuels :**&#x4E;ous utilisons Burp Suite Pro, un outil de test de sécurité de pointe, pour réaliser des analyses de sécurité automatisées et soutenir les techniques de test manuel afin d'identifier les vulnérabilités complexes et d'obtenir la meilleure couverture possible. Pour une identification plus précise des vulnérabilités, nous utilisons des outils spécialisés, comme SQLmap.

## Résumé des résultats

Voici un résumé de haut niveau de notre rapport de test de pénétration le plus récent :

* **Total des vulnérabilités identifiées :**&#x32;
* **Répartition de la gravité :**
  * Critique : 2
* **Types de vulnérabilités détectées :**
  * Contrôle d'accès brisé
  * Conception non sécurisée

Pour des conclusions détaillées, veuillez vous référer au rapport complet.

### Cotes de risque et impact

Les deux vulnérabilités découvertes sont considérées comme critiques, car elles auraient pu avoir de graves conséquences financières. La première a permis à un utilisateur authentifié malveillant de prendre le contrôle du compte de paiement Trippay d'une autre entreprise. La seconde a permis à un utilisateur malveillant de modifier le montant du paiement requis pour une réservation.

### Efforts d'assainissement et d'atténuation

Nous avons pris les mesures suivantes pour remédier aux vulnérabilités identifiées :

* **Correctifs immédiats :**&#x4C;es vulnérabilités critiques ont été corrigées dans les 48 heures suivant leur découverte.
* **Révision et renforcement du code :**&#x4C;'équipe de développement a mis en place des contrôles de sécurité supplémentaires basés sur nos recommandations.

## Amélioration continue

Les tests d'intrusion s'inscrivent dans notre stratégie globale d'amélioration continue de la sécurité. Les résultats de chaque test orientent nos politiques de sécurité, influencent nos pratiques de développement et favorisent l'amélioration de notre architecture de sécurité.

## Expertise de l'équipe

Nos tests d'intrusion sont réalisés par un professionnel interne possédant une vaste expérience dans divers projets et secteurs. Grâce à des outils et méthodes de pointe, notre expert garantit que notre application est rigoureusement testée contre les dernières menaces de sécurité.

## Engagement en matière de sécurité

Nous nous engageons à maintenir un environnement applicatif sécurisé pour nos utilisateurs et nos parties prenantes. Nos efforts continus en matière de tests et d'amélioration de la sécurité témoignent de notre engagement à vous protéger contre les menaces en constante évolution.

## Accès aux rapports et mises à jour

Ce document sera mis à jour régulièrement à mesure que de nouveaux rapports de tests d'intrusion seront publiés. Pour accéder au rapport complet, veuillez nous contacter à l'adresse e-mail ci-dessous. Les prochaines mises à jour incluront les vulnérabilités nouvellement identifiées, les mesures correctives et les ajustements apportés à nos méthodologies de test.

Pour toute question complémentaire, veuillez contacter security@wink.travel.

