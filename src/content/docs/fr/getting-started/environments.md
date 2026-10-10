---
title: Environnements
description: Cet article contient des informations pour les testeurs et développeurs sur la manière d'accéder à nos différents environnements serveurs.
sidebar:
  order: 8
---

Chez Wink, nous exploitons 2 environnements pour tout ce que nous faisons en permanence :

- La production est notre environnement stable.
- La préproduction est notre environnement de test, et c’est là que les channel managers et les agents de voyage sont certifiés.

Si vous souhaitez tester la plateforme Wink, en tant que développeur, hôtelier ou agent de voyage, créez un compte dans notre environnement de préproduction pour commencer. Les channel managers y effectuent également leur [certification](/fr/guides/integrators/add-your-channel-manager/#certification).

Créer un compte en préproduction ou en production nécessite d’accepter les Conditions générales et les Conditions de paiement de Wink, et cette acceptation est contraignante. Les channel managers et agents de voyage doivent aussi être certifiés avant d’accéder à la production ; tous les autres passent en production de leur propre initiative.

:::note
L’environnement de préproduction est disponible sur demande. Cela signifie qu’il se met en veille s’il n’est pas utilisé et se réactive lorsqu’il y a une utilisation. Merci de faire preuve de patience lors de son réveil. Il faut environ une minute pour démarrer tous les serveurs après votre première connexion à l’un de nos serveurs ou applications.
:::

## Serveurs

Voici un tableau contenant les noms de nos serveurs et leur usage.

| Fonctionnalité | Préproduction | Production
| -------------- | ------------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventaire | https://staging-api.wink.travel | https://api.wink.travel | 
| Intégrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partenaire (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Paiement | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applications

Nos applications disposent également d’environnements de test et de production pour nos clients.

| Application | Préproduction | Production
| ----------- | ------------- | ---------- |
| Portail | https://staging-app.wink.travel | https://app.wink.travel | 
| Moteur de réservation | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
