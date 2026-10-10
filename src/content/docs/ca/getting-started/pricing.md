---
title: Preus
description: La major part de Wink és gratuïta. Pagues una petita comissió per reserva i una tarifa d’ús pay-as-you-go en algunes funcions premium.
sidebar:
  order: 4
---

Wink no té subscripcions, ni places ni despeses d’instal·lació. La gran majoria de la plataforma és gratuïta, i només hi ha dues coses per les quals mai pagaràs:

1. **Una comissió per reserva a la plataforma, més el cost del processament de targetes** — només quan es fa una reserva.
2. **Tarifes d’ús pay-as-you-go** — en algunes funcions premium que ens costen diners cada vegada que s’executen, cadascuna amb una franquícia mensual gratuïta.

## Què és gratuït

Això no costa res, mai, sense franquícia ni mesurament:

- El **motor de reserves** — al teu propi lloc web, a la teva pàgina WinkLinks o a qualsevol altre lloc on l’integriis.
- **Gestió de propietats** — contingut, fotos, tarifes, plans tarifaris, disponibilitat, promocions i polítiques.
- **Eines d’afiliats** — enllaços compartibles, llistes seleccionades, graelles, mapes, targetes i widgets integrables.
- **Eines per a agents de viatge** — cerca, tarifes personalitzades i reserva en nom dels teus clients.
- **WinkLinks** — reclama la teva URL personalitzada, crea la teva pàgina i publica-hi tantes vegades com vulguis.
- **Publicacions manuals a xarxes socials** — qualsevol cosa que escriguis tu mateix, a qualsevol xarxa connectada.
- **Analítiques, classificacions, reclamacions, configuracions** i gestió del compte.
- Les **APIs de Consumidor i del Motor de Reserves**, incloent els seus punts d’accés de cerca i autocompletat. A l’**API de Partner**, les crides Lookup i Content es mesuren a una unitat cadascuna (vegeu [Ús](#què-es-i-què-no-es-mesura) més avall).

## Reserves

Wink suporta dos models: Wink recull el pagament per a l’hotel, o un agent de viatge autoritzat actua com a comerciant registrat.

### Model 1 — Wink recull el pagament per a l’hotel

Wink recull el pagament del client com a agent limitat de cobrament de l’hotel. L’hotel és el comerciant registrat, i el nom de l’hotel apareix a l’estat de compte de la targeta del client.
Aquest model s’aplica al 95% de totes les reserves.

#### Desglossament

:::note[Comissió de plataforma]
Wink cobra una comissió de plataforma de l’1,5% per reserva. Això cobreix el manteniment de la plataforma i ens permet oferir tot el que s’ha llistat més amunt. No es cobra en una reserva cancel·lada.
:::

:::note[Processament de targetes]
La comissió pel processament del pagament que es cobra per recollir el pagament del client es traspassa a l’hotel al cost, sense marge. Varia segons la targeta i el mètode de pagament del client, i l’import exacte apareix a la secció de Comptabilitat de cada reserva. Si una reserva es cancel·la o es retorna, qualsevol comissió que es quedi el processador encara es cobra; si no cobra res, nosaltres tampoc.
:::

:::note[Desemborsament de fons]
Hi ha comissions associades a l’enviament de fons al teu compte. Això depèn del mètode de desemborsament que triïs. Actualment suportem:

- **Transferència bancària** — El cost depèn del país on estàs, d’on s’envien els fons i de qualsevol conversió de moneda aplicada pel camí. La comissió de pagament i qualsevol cost de conversió els paga el receptor, al cost. Incloem un calculador de pressupost que pots utilitzar quan tinguis fons disponibles al teu compte.

Si vols que suportem un altre mètode de pagament, envia’ns un correu electrònic.
:::

### Model 2 — Agent de viatge com a comerciant registrat

Aquest model només està disponible per a agències de viatge que tinguin llicència d’agència de viatges a la seva regió i que desitgin ser el comerciant registrat. Està disponible només per a socis API, reservant a través de la [Partner API](/ca/integrations/partner-api/), i necessita l’aprovació prèvia per escrit de Wink. Alguns dels nostres agents de viatge registrats volen ser responsables de gestionar el pagament i el desemborsament de fons als hotels. En aquest model, ells són responsables dels fons i disposen de les llicències necessàries per operar al seu país.

#### Desglossament

:::note[Comissió de plataforma]
Wink cobra una comissió de plataforma de l’1,5% per reserva. Això cobreix el manteniment de la plataforma i ens permet oferir tot el que s’ha llistat més amunt.
:::

Amb aquest model, els agents de viatge paguen la comissió de l’1,5% de Wink més qualsevol ús de la Partner API per sobre de la franquícia gratuïta, facturat mensualment.

## Què paguen els socis

Per a socis que envien reserves: creadors, afiliats, plataformes, desenvolupadors i agents de viatge. Les col·laboracions són no exclusives, sense territoris.

| | Pagament recollit per a l’hotel (la majoria de socis) | Ets comerciant registrat (només socis API) |
|---|---|---|
| Llicència o comissió territorial | Cap | Cap |
| Comissió d’instal·lació | Cap | Cap |
| Subscripció o quota mensual | Cap | Cap |
| Compromís mínim o termini | Cap | Cap. Aplica un límit de crèdit. |
| Accés a Partner API | 10.000 nits d’hotel al mes gratuïtes, després $0.0001 per nit d’hotel. Pay-as-you-go està desactivat per defecte; a la franquícia gratuïta, les crides retornen `429`. | Igual |
| Comissió per transacció | Cap. Guanyes comissió (10% per defecte). | Comissió de reserva de l’1,5% sobre el valor de la reserva, facturada mensualment en USD, pagament en 15 dies. Amb pay-as-you-go activat, l’ús de Partner API es factura en una segona factura mensual. |
| Comissió de suport | Cap | Cap |
| Altres càrrecs | Comissions de transferència de pagaments, al cost | Possible pagament anticipat o dipòsit a l’aprovació. Interès de l’1,5% mensual només en factures vençudes. |
| Quan canvien les comissions | Avís de 30 dies; només s’aplica a reserves fetes després del canvi | Igual. Wink també pot variar el teu límit de crèdit amb avís. |

La via de comerciant registrat necessita l’aprovació prèvia per escrit de Wink. Vegeu [Model 2](#model-2--agent-de-viatge-com-a-comerciant-registrat) més amunt i la pàgina de la [Partner API](/ca/integrations/partner-api/).

## Ús (pay-as-you-go)

Algunes funcions ens costen diners cada vegada que s’executen — IA generativa, APIs socials de tercers i servir preus en viu a gran escala. En lloc d’incloure-les en un pla mensual que potser no utilitzes, només pagues pel que realment consumeixes, i només després d’haver esgotat una franquícia mensual gratuïta.

| Funció | Gratuït al mes | Després | Unitat facturada |
| -- | -- | -- | -- |
| Publicació social — imatge | 1 | $1.50 | Una publicació publicada |
| Publicació social — imatge generada per IA | 0 | $2.50 | Una publicació publicada |
| Publicació social — vídeo millorat per IA | 0 | $4.00 | Una publicació publicada |
| Publicació social — vídeo generat per IA | 0 | $14.00 | Una publicació publicada |
| Resposta IA a un comentari o DM | 5 | $0.05 | Una resposta |
| Resposta de chatbot | 5 | $0.05 | Una resposta |
| Partner API | 10.000 | $0.0001 | Una nit d’hotel |

Els preus són en USD. La franquícia gratuïta s’atorga **per compte**, no per usuari, i es reinicia l’1 de cada mes (UTC).

### Com es precia les publicacions

Les publicacions es preuen segons el que contenen, perquè això és el que ens costa fer-les. Una imatge fixa és barata; un vídeo no; qualsevol cosa que generem amb IA costa molt més que una foto que tu mateix hagis proporcionat.

- **La franquícia gratuïta cobreix només publicacions d’imatges estàndard.** N’obtens una per compte i mes. Les publicacions de vídeo i els mitjans generats per IA es facturen des de la primera publicació — no hi ha franquícia gratuïta en aquests nivells, així que una propietat que publiqui vídeo hauria d’esperar un càrrec el seu primer mes.
- **El vídeo guanya.** Si una publicació conté qualsevol vídeo, tota la publicació es factura a la tarifa de vídeo. Una publicació que combina imatge i vídeo és una publicació de vídeo.
- **La procedència IA determina el nivell.** Els mitjans que proporciones — les teves pròpies fotos i vídeos, o qualsevol cosa de la teva biblioteca de contingut Wink — es facturen a la tarifa estàndard. Els mitjans que generem per a tu es facturen a la tarifa IA.

### Què es mesura i què no

- Només una publicació **generada** i publicada a una xarxa de tercers (Facebook, Instagram) és facturable. Una publicació que hagis escrit tu mateix és gratuïta, on sigui que es publiqui.
- **Publicar a WinkLinks sempre és gratuït**, generat o no.
- Se’t cobra **en publicar**, no per intent. Regenerar un esborrany fins que estiguis satisfet no afegeix a la factura — pagues una vegada per la publicació que realment envies. Els intents no són il·limitats, però: cada publicació permet unes 10 regeneracions per imatges i 3 per vídeo, que reflecteixen el que ens costa produir-les. Veureu quantes en queden mentre treballes.
- A la Partner API, una **nit d’hotel** és un hotel preuat per una nit d’estada — *no* una crida API. Una cerca que retorna 20 hotels per 3 nits d’estada són 60 nits d’hotel d’una sola petició. Les crides Content i Lookup (cerca de destinació i autocompletat) costen una unitat cadascuna, passi el que passi. Els punts d’accés de compte són gratuïts.

### Com activar-ho

Pay-as-you-go està desactivat per defecte. Tothom obté la franquícia gratuïta sense fer res.

Per superar la franquícia, el **propietari** d’un compte activa pay-as-you-go i tria quins dels seus comptes es mesuren. L’ús de tots els comptes activats es consolida en una **única factura mensual**, que pots pagar automàticament amb targeta o rebre com a factura per pagar tu mateix.

Un cop activat, el teu ús es mesura però **mai es limita** — no arribaràs a un límit de velocitat per gastar diners amb nosaltres.

:::note[Si no l’activeu]
No es trenca res i no es cobra res. Simplement t’atures a la franquícia gratuïta d’aquell mes: les publicacions generades no es publicaran i les crides a la Partner API retornaran un `429` fins que es reiniciï la franquícia.
:::

### Estat de facturació

| Estat | Què significa |
| -- | -- |
| En bon estat | Tot funciona normalment. |
| Endarrerit | Un pagament ha fallat i s’està intentant de nou. Les teves funcions continuen funcionant durant aquest període. |
| Suspès | Una factura no s’ha pagat fins al final. Les accions facturables estan bloquejades fins que es resolgui; les funcions gratuïtes continuen com sempre. |

:::tip[Preus en viu]
Els preus per unitat i les franquícies gratuïtes es mostren sempre al Portal, directament del nostre sistema de facturació, perquè puguis comprovar-los abans de comprometre’t. Consulta [Facturació](/ca/portal/plan) per activar pay-as-you-go, triar els teus comptes i fer el seguiment de l’ús i les factures del mes. Consulta [Social](/ca/portal/social/what-is-social) per saber com el volum de publicacions afecta la despesa.
:::

## Efecte de la plataforma

Finalment, a mesura que continuem creixent tant en mida com en reserves, volem poder compartir alguns dels efectes de la plataforma amb tu. Més reserves aporten oportunitats de descomptes per volum amb el nostre processador de pagaments. Com que el processament de targetes es traspassa al cost, qualsevol estalvi que negociem va directament als hotels.

Uneix-te a Wink avui i descobreix una nova manera rendible de fer negocis en la indústria de l’hostaleria!
