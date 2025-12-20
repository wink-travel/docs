---
title: Beveiliging
description: Dit artikel bevat informatie over de beveiligingsmaatregelen die wij implementeren en die jaarlijks worden gepubliceerd door ons externe beveiligingsbedrijf.
sidebar:
  order: 6
---

# Wink Beveiligingsoverzicht Document

*Laatst bijgewerkt: 7 september 2024*

*Versie 1.0*

## Doel en Reikwijdte

Als onderdeel van onze voortdurende inzet voor beveiliging en het beschermen van gebruikersgegevens, voeren wij regelmatig penetratietests uit op onze webapplicatie. Dit document beschrijft onze testmethodologieën, geeft een samenvatting van de bevindingen en belicht onze aanpak voor continue beveiligingsverbetering.

Dit document wordt bijgewerkt zodra er nieuwe rapporten worden geproduceerd of wanneer er significante wijzigingen plaatsvinden.

Domeinen binnen de scope:  
\*.wink.travel  
\*.trippay.io

## Testfrequentie en Planning

Onze penetratietests worden jaarlijks uitgevoerd, met extra tests indien nodig na belangrijke updates van de applicatie of infrastructuur. Deze regelmatige testcyclus zorgt ervoor dat we voorblijven op veranderende bedreigingen en een veilige omgeving behouden.

## Testmethodologieën

Onze penetratietests zijn uitgebreid en bestrijken een breed scala aan beveiligingsaspecten, waaronder maar niet beperkt tot:

* **OWASP Top 10:** Onze tests richten zich specifiek op de meest kritieke beveiligingsrisico’s, zoals Injection, Broken Authentication en Cross-Site Scripting (XSS).  
* **Black Box en Grey Box Testing:** Afhankelijk van de scope gebruikt ons team deze methodologieën om zowel externe als interne aanvalsscenario’s te simuleren.  
* **Geautomatiseerd en Handmatig Testen:** We gebruiken Burp Suite Pro, een toonaangevende set beveiligingstools, om geautomatiseerde beveiligingsscans uit te voeren en handmatige testtechnieken te ondersteunen om complexe kwetsbaarheden te identificeren en de best mogelijke dekking te krijgen. Voor meer specifieke kwetsbaarheidsidentificatie worden enkele gespecialiseerde tools gebruikt, bijvoorbeeld SQLmap.

## Samenvatting van Bevindingen

Hieronder volgt een overzicht op hoofdlijnen van ons meest recente penetratietestrapport:

* **Totaal Geïdentificeerde Kwetsbaarheden:** 2  
* **Verdeling naar Ernst:**  
  * Kritiek: 2  
* **Soorten Gevonden Kwetsbaarheden:**  
  * Broken Access Control  
  * Onveilige Ontwerpkeuzes

Voor gedetailleerde bevindingen verwijzen wij naar het volledige rapport.

### Risicobeoordelingen en Impact

Beide gevonden kwetsbaarheden zijn als kritiek beoordeeld omdat ze beide ernstige financiële gevolgen hadden kunnen hebben. De eerste maakte het een kwaadaardige geauthenticeerde gebruiker mogelijk om controle te krijgen over het Trippay-betaalaccount van een ander bedrijf. De tweede kwetsbaarheid stelde een kwaadaardige gebruiker in staat het te betalen bedrag voor een boeking aan te passen.

### Herstel- en Mitigatie-inspanningen

We hebben de volgende stappen ondernomen om de geïdentificeerde kwetsbaarheden aan te pakken:

* **Directe Patches:** De kritieke kwetsbaarheden zijn binnen 48 uur na ontdekking gepatcht.  
* **Code Review en Versterking:** Het ontwikkelingsteam heeft aanvullende beveiligingsmaatregelen geïmplementeerd op basis van onze aanbevelingen.

## Continue Verbetering

Penetratietesten maken deel uit van onze bredere strategie voor continue beveiligingsverbetering. Bevindingen uit elke test sturen onze beveiligingsbeleid, beïnvloeden ontwikkelpraktijken en stimuleren verbeteringen in onze beveiligingsarchitectuur.

## Team Expertise

Onze penetratietests worden uitgevoerd door een interne professional met uitgebreide ervaring in diverse projecten en sectoren. Met behulp van toonaangevende tools en methoden zorgt onze expert ervoor dat onze applicatie grondig wordt getest tegen de nieuwste beveiligingsdreigingen.

## Toewijding aan Beveiliging

Wij zijn toegewijd aan het handhaven van een veilige applicatieomgeving voor onze gebruikers en belanghebbenden. Onze voortdurende inspanningen op het gebied van beveiligingstesten en -verbetering tonen onze inzet om te beschermen tegen veranderende bedreigingen.

## Toegang tot Rapporten en Updates

Dit document wordt continu bijgewerkt zodra nieuwe penetratietestrapporten worden uitgebracht. Voor toegang tot het volledige rapport kunt u contact met ons opnemen via onderstaande e-mail. Toekomstige updates zullen nieuw geïdentificeerde kwetsbaarheden, herstelmaatregelen en aanpassingen in onze testmethodologieën bevatten.

Voor verdere vragen kunt u contact opnemen via security@wink.travel.
