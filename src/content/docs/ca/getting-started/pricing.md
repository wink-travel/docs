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
- Les **APIs de Consumidor i Motor de Reserves**, més els endpoints de cerca i autocompleció.

## Reserves

Wink suporta dos models: que Wink reculli el pagament per a l’hotel, o que un agent de viatge autoritzat actuï com a comerciant registrat.

### Model 1 — Wink recull el pagament per a l’hotel

Wink recull el pagament del client com a agent limitat de cobrament de l’hotel. L’hotel és el comerciant registrat, i el nom de l’hotel apareix a l’estat de compte de la targeta del client.
Aquest model s’aplica al 95% de totes les reserves.

#### Desglossament

:::note[Comissió de plataforma]
Wink cobra una comissió del 1,5% per reserva. Això cobreix el manteniment de la plataforma i ens permet oferir tot el que s’ha llistat més amunt. No es cobra en una reserva cancel·lada.
:::

:::note[Processament de targetes]
La comissió pel processament del pagament que es cobra per recollir el pagament del client es traspassa a l’hotel al cost, sense marge. Varia segons la targeta i el mètode de pagament del client, i l’import exacte apareix a la secció de Comptabilitat de cada reserva. Si una reserva es cancel·la o es retorna, qualsevol comissió que el processador es quedi encara es cobra; si no cobra res, nosaltres tampoc.
:::

:::note[Desemborsament de fons]
Hi ha comissions associades a l’enviament de fons al teu compte. Això depèn del mètode de desemborsament que triïs. Actualment suportem:

- **Transferència bancària** — El cost depèn del país on estàs ubicat, d’on s’envien els fons i de qualsevol conversió de moneda aplicada pel camí. La comissió de pagament i qualsevol cost de conversió els paga el receptor, al cost. Incloem un calculador de pressupost que pots utilitzar quan tinguis fons disponibles al teu compte.

Si vols que suportem un altre mètode de pagament, envia’ns un correu electrònic.
:::

### Model 2 — Agent de viatge com a comerciant registrat

Aquest model només està disponible per a agències de viatge que tinguin llicència d’agència de viatges a la seva regió i que desitgin ser el comerciant registrat. Alguns dels nostres agents de viatge registrats volen ser responsables de gestionar el pagament i el desemborsament de fons als hotels. En aquest model, ells són responsables dels fons i disposen de les llicències necessàries per operar al seu país.

#### Desglossament

:::note[Comissió de plataforma]
Wink cobra una comissió del 1,5% per reserva. Això cobreix el manteniment de la plataforma i ens permet oferir tot el que s’ha llistat més amunt.
:::

Amb aquest model, els agents de viatge només paguen la comissió de plataforma de Wink i Wink facturarà a l’agent de viatge mensualment.

## Ús (pay-as-you-go)

Algunes funcions ens costen diners cada vegada que s’executen — IA generativa, APIs socials de tercers i oferir preus en viu a gran escala. En lloc d’incloure-les en un pla mensual que potser no utilitzes, només pagues pel que realment consumeixes, i només després d’haver esgotat la franquícia mensual gratuïta.

| Funció | Gratuït per mes | Després | Unitat facturada |
| -- | -- | -- | -- |
| Publicació social — imatge | 1 | 1,50 $ | Una publicació publicada |
| Publicació social — imatge generada per IA | 0 | 2,50 $ | Una publicació publicada |
| Publicació social — vídeo millorat per IA | 0 | 4,00 $ | Una publicació publicada |
| Publicació social — vídeo generat per IA | 0 | 14,00 $ | Una publicació publicada |
| Resposta IA a un comentari o DM | 5 | 0,05 $ | Una resposta |
| Resposta de chatbot | 5 | 0,05 $ | Una resposta |
| API de partner | 10.000 | 0,0001 $ | Un hotel-dia |

Els preus són en USD. La franquícia gratuïta s’atorga **per compte**, no per usuari, i es reinicia l’1 de cada mes (UTC).

### Com es preuen les publicacions

Les publicacions es preuen segons el que contenen, perquè això és el que ens costa fer-les. Una imatge estàtica és barata; un vídeo no; qualsevol cosa que generem amb IA costa molt més que una foto que tu mateix hagis proporcionat.

- **La franquícia gratuïta cobreix només publicacions d’imatges estàndard.** N’obtens una per compte i per mes. Les publicacions de vídeo i els mitjans generats per IA es facturen des de la primera publicació — no hi ha franquícia gratuïta en aquests nivells, així que una propietat que publiqui vídeo hauria d’esperar un càrrec el seu primer mes.
- **El vídeo guanya.** Si una publicació conté qualsevol vídeo, tota la publicació es factura a la tarifa de vídeo. Una publicació que combina imatge i vídeo és una publicació de vídeo.
- **La procedència IA determina el nivell.** Els mitjans que proporciones — les teves pròpies fotos i vídeos, o qualsevol cosa de la teva biblioteca de contingut Wink — es facturen a la tarifa estàndard. Els mitjans que generem per a tu es facturen a la tarifa IA.

### Què es mesura i què no

- Només una publicació **generada** publicada a una xarxa de tercers (Facebook, Instagram) és facturable. Una publicació que hagis escrit tu mateix és gratuïta, on sigui que es publiqui.
- **Publicar a WinkLinks sempre és gratuït**, generat o no.
- Se’t cobra **en publicar**, no per intent. Regenerar un esborrany fins que estiguis satisfet no afegeix a la factura — pagues una vegada per la publicació que realment envies. Els intents no són il·limitats, però: cada publicació permet unes 10 regeneracions per imatges i 3 per vídeo, que reflecteixen el que ens costa produir-les. Veureu quantes en queden mentre treballes.
- A l’API de partner, un **hotel-dia** és un hotel preuat per una nit d’estada — *no* una trucada API. Una cerca que retorna 20 hotels per una estada de 3 nits són 60 hotel-dies d’una sola petició. Els endpoints de cerca i autocompleció són gratuïts i mai es mesuren.

### Com activar-ho

El pay-as-you-go està desactivat per defecte. Tothom obté la franquícia gratuïta sense fer res.

Per superar la franquícia, el **propietari** d’un compte activa el pay-as-you-go i tria quins dels seus comptes es mesuren. L’ús de tots els comptes activats es consolida en una **única factura mensual**, que pots pagar automàticament amb targeta o rebre com a factura per pagar tu mateix.

Un cop activat, el teu ús es mesura però **mai es limita** — no arribaràs a un límit de despesa amb nosaltres.

:::note[Si no l’activeu]
No es trenca res i no es cobra res. Simplement t’atures a la franquícia gratuïta d’aquell mes: les publicacions generades no es publicaran i les trucades a l’API de partner retornaran un `429` fins que es reiniciï la franquícia.
:::

### Estat de la facturació

| Estat | Què significa |
| -- | -- |
| Bona situació | Tot funciona normalment. |
| Endarrerit | Un pagament ha fallat i s’està intentant de nou. Les teves funcions continuen funcionant durant aquest període. |
| Suspès | Una factura no s’ha pagat fins al final. Les accions facturables estan bloquejades fins que es resolgui; les funcions gratuïtes continuen com sempre. |

:::tip[Preus en viu]
Els preus per unitat i les franquícies gratuïtes sempre es mostren al Portal, directament del nostre sistema de facturació, perquè puguis comprovar-los abans de comprometre’t. Consulta [Facturació](/ca/portal/plan) per activar el pay-as-you-go, triar els teus comptes i fer el seguiment de l’ús i les factures del mes. Consulta [Social](/ca/portal/social/what-is-social) per saber com el volum de publicacions afecta la despesa.
:::

## Efecte de la plataforma

Finalment, a mesura que continuem creixent tant en mida com en reserves, volem poder compartir alguns dels efectes de la plataforma amb tu. Més reserves aporten oportunitats de descomptes per volum amb el nostre processador de pagaments. Com que el processament de targetes es traspassa al cost, qualsevol estalvi que negociem va directament als hotels.

Uneix-te a Wink avui i descobreix una nova manera rendible de fer negocis en la indústria de l’hostaleria!
