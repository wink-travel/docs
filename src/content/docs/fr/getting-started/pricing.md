---
title: Tarification
description: La majeure partie de Wink est gratuite. Vous payez une petite commission par réservation, ainsi qu’un tarif à l’usage pour quelques fonctionnalités premium.
sidebar:
  order: 4
---

Wink ne propose ni abonnement, ni places, ni frais d’installation. La grande majorité de la plateforme est gratuite, et il n’y a que deux choses pour lesquelles vous paierez :

1. **Une commission par réservation, plus les frais de traitement de carte au coût réel** — uniquement lorsqu’une réservation est effectuée.
2. **Des frais à l’usage** — sur quelques fonctionnalités premium qui nous coûtent de l’argent à chaque utilisation, chacune avec un quota mensuel gratuit.

## Ce qui est gratuit

Ces services ne coûtent rien, pour toujours, sans quota ni mesure :

- Le **moteur de réservation** — sur votre propre site, dans votre page WinkLinks, ou partout où vous l’intégrez.
- La **gestion des propriétés** — contenu, photos, tarifs, plans tarifaires, disponibilités, promotions et politiques.
- Les **outils affiliés** — liens partageables, listes sélectionnées, grilles, cartes, cartes et widgets intégrables.
- Les **outils pour agents de voyage** — recherche, tarifs personnalisés et réservation pour vos clients.
- **WinkLinks** — réclamez votre URL personnalisée, créez votre page et publiez autant que vous le souhaitez.
- **Publications sociales manuelles** — tout ce que vous écrivez vous-même, sur n’importe quel réseau connecté.
- **Analyses, classements, réclamations, paramètres** et gestion de compte.
- Les **API Consumer et Booking Engine**, y compris leurs points de terminaison de recherche et d’autocomplétion. Sur l’**API Partner**, les appels Lookup et Content sont mesurés à une unité chacun (voir [Usage](#what-is-and-isnt-metered) ci-dessous).

## Réservations

Wink prend en charge deux modèles : Wink collecte le paiement pour l’hôtel, ou un agent de voyage agréé agit en tant que commerçant officiel.

### Modèle 1 — Wink collecte pour l’hôtel

Wink collecte le paiement du client en tant qu’agent de collecte de paiement limité pour l’hôtel. L’hôtel est le commerçant officiel, et son nom apparaît sur le relevé bancaire du client.
Ce modèle s’applique à 95 % des réservations.

#### Détail

:::note[Commission plateforme]
Wink facture une commission de 1,5 % par réservation. Cela couvre la maintenance de la plateforme et nous permet d’offrir gratuitement tout ce qui est listé ci-dessus. Cette commission n’est pas facturée sur une réservation annulée.
:::

:::note[Frais de traitement de carte]
Les frais de traitement du paiement facturés pour collecter le paiement du client sont répercutés à l’hôtel au coût réel, sans marge. Ils varient selon la carte et le mode de paiement du client, et le montant exact apparaît dans la section Comptabilité de chaque réservation. Si une réservation est annulée ou remboursée, les frais conservés par le processeur sont toujours facturés ; s’il ne facture rien, nous ne facturons rien non plus.
:::

:::note[Versement des fonds]
Des frais sont associés à l’envoi des fonds sur votre compte. Cela dépend du mode de versement choisi. Nous supportons actuellement :

- **Virement bancaire** — Le coût dépend du pays où vous êtes situé, de l’origine des fonds et de toute conversion de devise appliquée en cours de route. Les frais de versement et les coûts de conversion éventuels sont à la charge du bénéficiaire, au coût réel. Nous incluons un calculateur de devis que vous pouvez utiliser lorsque vous avez des fonds disponibles sur votre compte.

Si vous souhaitez que nous supportions un autre mode de versement, envoyez-nous un e-mail.
:::

### Modèle 2 — Agent de voyage en tant que commerçant officiel

Ce modèle est uniquement disponible pour les agences de voyage titulaires d’une licence dans leur région et souhaitant être le commerçant officiel. Il est réservé aux partenaires API, réservant via l’[API Partner](/fr/integrations/partner-api/), et nécessite l’approbation écrite préalable de Wink. Certains de nos agents de voyage enregistrés souhaitent être responsables de la gestion des paiements et du versement des fonds aux hôtels. Dans ce modèle, ils sont responsables des fonds et disposent des licences nécessaires pour opérer dans leur pays.

#### Détail

:::note[Commission plateforme]
Wink facture une commission de 1,5 % par réservation. Cela couvre la maintenance de la plateforme et nous permet d’offrir gratuitement tout ce qui est listé ci-dessus.
:::

Avec ce modèle, les agents de voyage paient la commission de 1,5 % de Wink plus toute utilisation de l’API Partner au-delà du quota gratuit, facturée mensuellement.

## Ce que paient les partenaires

Pour les partenaires qui envoient des réservations : créateurs, affiliés, plateformes, développeurs et agents de voyage. Les partenariats sont non exclusifs, sans territoires.

| | Paiement collecté pour l’hôtel (la plupart des partenaires) | Vous êtes commerçant officiel (partenaires API uniquement) |
|---|---|---|
| Frais de licence ou de territoire | Aucun | Aucun |
| Frais d’installation | Aucun | Aucun |
| Abonnement ou frais mensuel | Aucun | Aucun |
| Engagement minimum ou durée | Aucun | Aucun. Une limite de crédit s’applique. |
| Accès API Partner | 10 000 nuitées d’hôtel par mois gratuites, puis 0,0001 $ par nuitée. Le paiement à l’usage est désactivé par défaut ; au-delà du quota gratuit, les appels retournent `429`. | Idem |
| Frais de transaction | Aucun. Vous gagnez une commission (10 % par défaut). | 1,5 % de commission sur la valeur de la réservation, facturée mensuellement en USD, payable sous 15 jours. Avec le paiement à l’usage activé, l’utilisation de l’API Partner est facturée sur une deuxième facture mensuelle. |
| Frais de support | Aucun | Aucun |
| Autres frais | Frais de transfert de paiement, au coût réel | Possible prépaiement ou dépôt à l’approbation. Intérêts de 1,5 % par mois sur factures impayées uniquement. |
| Modification des frais | Préavis de 30 jours ; s’applique uniquement aux réservations effectuées après le changement | Idem. Wink peut aussi modifier votre limite de crédit avec préavis. |

La voie commerçant officiel nécessite l’approbation écrite préalable de Wink. Voir [Modèle 2](#model-2--travel-agent-as-merchant-of-record) ci-dessus et la page [API Partner](/fr/integrations/partner-api/).

## Usage (paiement à l’usage)

Quelques fonctionnalités nous coûtent de l’argent à chaque utilisation — IA générative, API sociales tierces, et diffusion de tarifs en temps réel à grande échelle. Plutôt que de les inclure dans un forfait mensuel que vous n’utiliserez peut-être pas, vous ne payez que ce que vous consommez réellement, et seulement après avoir épuisé un quota mensuel gratuit.

| Fonctionnalité | Gratuit par mois | Puis | Unité facturée |
| -- | -- | -- | -- |
| Publication sociale — image | 1 | 1,50 $ | Une publication publiée |
| Publication sociale — image générée par IA | 0 | 2,50 $ | Une publication publiée |
| Publication sociale — vidéo améliorée par IA | 0 | 4,00 $ | Une publication publiée |
| Publication sociale — vidéo générée par IA | 0 | 14,00 $ | Une publication publiée |
| Réponse IA à un commentaire ou DM | 5 | 0,05 $ | Une réponse |
| Réponse chatbot | 5 | 0,05 $ | Une réponse |
| API Partner | 10 000 | 0,0001 $ | Une nuitée d’hôtel |

Les prix sont en USD. Le quota gratuit est accordé **par compte**, pas par utilisateur, et se réinitialise le 1er de chaque mois (UTC).

### Comment les publications sont tarifées

Les publications sont tarifées selon leur contenu, car c’est ce qui nous coûte à produire. Une image fixe est peu coûteuse ; une vidéo ne l’est pas ; tout ce que nous générons avec l’IA coûte nettement plus qu’une photo que vous fournissez vous-même.

- **Le quota gratuit couvre uniquement les publications d’images standard.** Vous en avez une par compte et par mois. Les publications vidéo et les médias générés par IA sont facturés dès la première publication — il n’y a pas de quota gratuit pour ces catégories, donc une propriété qui publie des vidéos doit s’attendre à une facturation dès son premier mois.
- **La vidéo prime.** Si une publication contient une vidéo, elle est facturée au tarif vidéo. Une publication mélangeant image et vidéo est une publication vidéo.
- **La provenance IA détermine le tarif.** Les médias que vous fournissez — vos propres photos et vidéos, ou tout contenu de la bibliothèque Wink — sont facturés au tarif standard. Les médias générés pour vous sont facturés au tarif IA.

### Ce qui est et n’est pas mesuré

- Seule une publication **générée** et publiée sur un réseau tiers (Facebook, Instagram) est facturable. Une publication que vous écrivez vous-même est gratuite, où qu’elle soit publiée.
- **Publier sur WinkLinks est toujours gratuit**, généré ou non.
- Vous êtes facturé **à la publication**, pas à chaque tentative. Régénérer un brouillon jusqu’à satisfaction ne fait pas augmenter la facture — vous payez une fois pour la publication finale. Les tentatives ne sont pas illimitées : chaque publication permet environ 10 régénérations pour les images et 3 pour la vidéo, ce qui reflète notre coût de production. Vous verrez combien il vous en reste en cours de travail.
- Sur l’API Partner, une **nuitée d’hôtel** correspond à un hôtel facturé pour une nuit de séjour — *pas* un appel API. Une recherche retournant 20 hôtels pour un séjour de 3 nuits correspond à 60 nuitées d’hôtel pour une seule requête. Les appels Content et Lookup (recherche de destination et autocomplétion) coûtent une unité chacun, quel que soit leur résultat. Les points de terminaison de compte sont gratuits.

### Activation

Le paiement à l’usage est désactivé par défaut. Tout le monde bénéficie du quota gratuit sans rien faire.

Pour dépasser ce quota, le **propriétaire** d’un compte active le paiement à l’usage et choisit quels comptes sont mesurés. L’usage de tous vos comptes activés est regroupé dans une **facture mensuelle unique**, que vous pouvez régler automatiquement par carte ou recevoir en facture à payer vous-même.

Une fois activé, votre usage est mesuré mais **jamais limité** — vous ne serez pas soumis à un plafond de dépenses.

:::note[Si vous ne l’activez pas]
Rien ne se casse et rien n’est facturé. Vous vous arrêtez simplement au quota gratuit pour ce mois : les publications générées ne seront pas publiées et les appels API Partner retourneront un `429` jusqu’à la réinitialisation du quota.
:::

### Statut de facturation

| Statut | Signification |
| -- | -- |
| En règle | Tout fonctionne normalement. |
| En retard | Un paiement a échoué et est en cours de nouvelle tentative. Vos fonctionnalités continuent de fonctionner pendant cette période. |
| Suspendu | Une facture est restée impayée jusqu’à son terme. Les actions facturables sont bloquées jusqu’au règlement ; les fonctionnalités gratuites continuent normalement. |

:::tip[Tarifs en temps réel]
Les prix unitaires et les quotas gratuits sont toujours affichés dans le Portail, directement depuis notre système de facturation, pour que vous puissiez les vérifier avant de vous engager. Voir [Facturation](/fr/portal/plan) pour activer le paiement à l’usage, choisir vos comptes et suivre l’usage et les factures du mois en cours. Voir [Social](/fr/portal/social/what-is-social) pour comprendre comment le volume de publications impacte vos dépenses.
:::

## Effet plateforme

Enfin, à mesure que nous continuons de grandir en taille et en nombre de réservations, nous souhaitons pouvoir partager certains effets de plateforme avec vous. Plus de réservations apportent des opportunités de remises sur volume auprès de notre processeur de paiement. Comme le traitement des cartes est répercuté au coût réel, toute économie négociée est directement reversée aux hôtels.

Rejoignez Wink dès aujourd’hui et découvrez une nouvelle manière lucrative de faire des affaires dans l’industrie hôtelière !
