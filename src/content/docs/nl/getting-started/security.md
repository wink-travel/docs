---
title: Security
description: >-
  Dit artikel bevat informatie over de beveiligingsmaatregelen die wij
  implementeren en die jaarlijks door ons externe beveiligingsbedrijf worden
  gepubliceerd.
sidebar:
  order: 6
---
# Wink-beveiligingsoverzichtdocument

*Laatst bijgewerkt: 7 september 2024*

*Versie 1.0*

## Doel en reikwijdte

Als onderdeel van onze voortdurende inzet voor beveiliging en de bescherming van gebruikersgegevens voeren we regelmatig penetratietests uit op onze webapplicatie. Dit document beschrijft onze testmethodologieën, geeft een samenvatting van de bevindingen en benadrukt onze aanpak voor continue beveiligingsverbetering.

Dit document wordt bijgewerkt wanneer er nieuwe rapporten worden uitgebracht of wanneer er belangrijke wijzigingen optreden.

Domeinen binnen het toepassingsgebied:\
\*.wink.travel\
\*.trippay.io

## Testfrequentie en -schema

Onze penetratietests worden jaarlijks uitgevoerd, met extra tests indien nodig na belangrijke updates van de applicatie of infrastructuur. Deze regelmatige testcyclus zorgt ervoor dat we evoluerende bedreigingen voorblijven en een veilige omgeving behouden.

## Testmethodologieën

Onze penetratietesten zijn uitgebreid en bestrijken een breed scala aan beveiligingsaspecten, waaronder maar niet beperkt tot:

* **OWASP Top 10:**&#x4F;nze tests zijn specifiek gericht op de meest kritieke beveiligingsrisico's, zoals injectie, verbroken authenticatie en Cross-Site Scripting (XSS).
* **Black Box- en Grey Box-testen:**&#x41;fhankelijk van de omvang maakt ons team gebruik van deze methodologieën om zowel externe als interne aanvalsscenario's te simuleren.
* **Geautomatiseerde en handmatige tests:**&#x57;e gebruiken Burp Suite Pro, een toonaangevende toolkit voor beveiligingstests, om geautomatiseerde beveiligingsscans uit te voeren en handmatige testtechnieken te ondersteunen bij het identificeren van complexe kwetsbaarheden en het verkrijgen van de best mogelijke dekking. Voor meer specifieke kwetsbaarheidsidentificatie gebruiken we gespecialiseerde tools, zoals SQLmap.

## Samenvatting van de bevindingen

Hieronder vindt u een samenvatting van ons meest recente rapport over penetratietesten:

* **Totaal aantal geïdentificeerde kwetsbaarheden:**&#x32;
* **Ernstverdeling:**
  * Kritisch: 2
* **Soorten gedetecteerde kwetsbaarheden:**
  * Gebroken toegangscontrole
  * Onveilig ontwerp

Voor gedetailleerde bevindingen verwijzen wij u naar het volledige rapport.

### Risicobeoordelingen en impact

Beide gevonden kwetsbaarheden worden als kritiek beoordeeld, omdat ze allebei ernstige financiële gevolgen kunnen hebben. De eerste kwetsbaarheid stelde een kwaadwillende, geauthenticeerde gebruiker in staat de controle over de Trippay-betaalrekening van een ander bedrijf over te nemen. De tweede kwetsbaarheid stelde een kwaadwillende gebruiker in staat het vereiste betalingsbedrag voor een boeking te wijzigen.

### Sanerings- en mitigatie-inspanningen

We hebben de volgende stappen ondernomen om de geïdentificeerde kwetsbaarheden te verhelpen:

* **Onmiddellijke patches:**&#x44;e kritieke kwetsbaarheden zijn binnen 48 uur na ontdekking gepatcht.
* **Codebeoordeling en verharding:**&#x48;et ontwikkelteam heeft aanvullende beveiligingsmaatregelen geïmplementeerd op basis van onze aanbevelingen.

## Continue verbetering

Penetratietesten maken deel uit van onze bredere strategie voor continue beveiligingsverbetering. De bevindingen van elke test vormen de basis voor ons beveiligingsbeleid, beïnvloeden ontwikkelpraktijken en stimuleren verbeteringen in onze beveiligingsarchitectuur.

## Teamexpertise

Onze penetratietests worden uitgevoerd door een interne professional met ruime ervaring in diverse projecten en sectoren. Met behulp van toonaangevende tools en methoden zorgt onze expert ervoor dat onze applicatie grondig wordt getest tegen de nieuwste beveiligingsdreigingen.

## Toewijding aan veiligheid

We streven ernaar een veilige applicatieomgeving te creëren voor onze gebruikers en stakeholders. Onze voortdurende inspanningen op het gebied van beveiligingstests en -verbeteringen tonen onze toewijding aan bescherming tegen evoluerende bedreigingen.

## Rapporttoegang en updates

Dit document wordt continu bijgewerkt naarmate er nieuwe penetratietestrapporten verschijnen. Voor het volledige rapport kunt u contact met ons opnemen via onderstaand e-mailadres. Toekomstige updates zullen nieuw geïdentificeerde kwetsbaarheden, herstelmaatregelen en aanpassingen aan onze testmethodologieën bevatten.

Voor verdere vragen kunt u contact opnemen met security@wink.travel.

