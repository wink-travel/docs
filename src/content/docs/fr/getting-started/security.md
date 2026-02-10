---
title: Sécurité
description: Cet article contient des informations sur les mesures de sécurité que nous mettons en œuvre et qui sont publiées annuellement par notre cabinet de sécurité tiers.
sidebar:
  order: 6
---

*Dernière mise à jour : 7 septembre 2024*

*Version 1.0*

## Objectif et portée

Dans le cadre de notre engagement continu en matière de sécurité et de protection des données utilisateurs, nous réalisons régulièrement des tests d’intrusion sur notre application web. Ce document décrit nos méthodologies de test, fournit un résumé des résultats et met en avant notre approche d’amélioration continue de la sécurité.

Ce document sera mis à jour à mesure que de nouveaux rapports seront produits ou lorsqu’un changement significatif interviendra.

Domaines concernés :  
\*.wink.travel  
\*.trippay.io

## Fréquence et calendrier des tests

Nos tests d’intrusion sont réalisés annuellement, avec des tests supplémentaires programmés si nécessaire après des mises à jour majeures de l’application ou de l’infrastructure. Ce rythme régulier de tests nous permet de rester en avance sur l’évolution des menaces et de maintenir un environnement sécurisé.

## Méthodologies de test

Nos tests d’intrusion sont complets et couvrent un large éventail d’aspects de sécurité, notamment mais sans s’y limiter :

* **OWASP Top 10 :** Nos tests ciblent spécifiquement les risques de sécurité les plus critiques, tels que l’injection, l’authentification défaillante et le Cross-Site Scripting (XSS).  
* **Tests en boîte noire et boîte grise :** Selon le périmètre, notre équipe utilise ces méthodologies pour simuler des scénarios d’attaque externes et internes.  
* **Tests automatisés et manuels :** Nous utilisons Burp Suite Pro, un ensemble d’outils de test de sécurité de premier plan, pour réaliser des scans automatisés et pour assister les techniques de test manuel afin d’identifier des vulnérabilités complexes et obtenir la meilleure couverture possible. Pour une identification plus spécifique des vulnérabilités, certains outils spécialisés sont utilisés, par exemple SQLmap.

## Résumé des résultats

Voici un résumé de haut niveau de notre rapport de test d’intrusion le plus récent :

* **Nombre total de vulnérabilités identifiées :** 2  
* **Répartition par gravité :**  
  * Critique : 2  
* **Types de vulnérabilités détectées :**  
  * Contrôle d’accès défaillant  
  * Conception non sécurisée

Pour les résultats détaillés, veuillez consulter le rapport complet.

### Évaluation des risques et impact

Les deux vulnérabilités trouvées sont classées critiques car elles auraient pu avoir des impacts financiers graves. La première permettait à un utilisateur authentifié malveillant de prendre le contrôle du compte de paiement Trippay d’une autre entreprise. La seconde vulnérabilité permettait à un utilisateur malveillant de modifier le montant du paiement requis pour une réservation.

### Efforts de remédiation et d’atténuation

Nous avons pris les mesures suivantes pour traiter les vulnérabilités identifiées :

* **Correctifs immédiats :** Les vulnérabilités critiques ont été corrigées dans les 48 heures suivant leur découverte.  
* **Revue de code et renforcement :** L’équipe de développement a mis en place des contrôles de sécurité supplémentaires basés sur nos recommandations.

## Amélioration continue

Les tests d’intrusion font partie de notre stratégie globale d’amélioration continue de la sécurité. Les résultats de chaque test orientent nos politiques de sécurité, influencent les pratiques de développement et stimulent les améliorations de notre architecture de sécurité.

## Expertise de l’équipe

Nos tests d’intrusion sont réalisés par un professionnel interne disposant d’une vaste expérience sur divers projets et secteurs. Grâce à des outils et méthodes de pointe, notre expert s’assure que notre application est rigoureusement testée face aux menaces de sécurité les plus récentes.

## Engagement en matière de sécurité

Nous nous engageons à maintenir un environnement applicatif sécurisé pour nos utilisateurs et parties prenantes. Nos efforts continus en matière de tests et d’amélioration de la sécurité témoignent de notre volonté de protéger contre les menaces évolutives.

## Accès au rapport et mises à jour

Ce document sera mis à jour en continu à mesure que de nouveaux rapports de tests d’intrusion seront publiés. Pour accéder au rapport complet, veuillez nous contacter via l’adresse email ci-dessous. Les futures mises à jour incluront les nouvelles vulnérabilités identifiées, les efforts de remédiation et les ajustements de nos méthodologies de test.

Pour toute question, veuillez contacter security@wink.travel.
