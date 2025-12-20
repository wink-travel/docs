---
title: Sikkerhet
description: Denne artikkelen inneholder informasjon om sikkerhetstiltakene vi implementerer og som publiseres årlig av vårt eksterne sikkerhetsselskap.
sidebar:
  order: 6
---

# Wink Sikkerhet Oversiktsdokument

*Sist oppdatert: 7. september 2024*

*Versjon 1.0*

## Formål og Omfang

Som en del av vårt kontinuerlige engasjement for sikkerhet og beskyttelse av brukerdata, gjennomfører vi regelmessige penetrasjonstester på vår webapplikasjon. Dette dokumentet beskriver våre testmetodikker, gir en oppsummering av funn, og fremhever vår tilnærming til kontinuerlig sikkerhetsforbedring.

Dette dokumentet vil bli oppdatert når nye rapporter utarbeides eller ved vesentlige endringer.

Domener innenfor omfang:  
\*.wink.travel  
\*.trippay.io

## Testfrekvens og Planlegging

Våre penetrasjonstester gjennomføres årlig, med tilleggstester planlagt ved behov etter betydelige oppdateringer av applikasjonen eller infrastrukturen. Denne regelmessige testfrekvensen sikrer at vi ligger foran utviklende trusler og opprettholder et sikkert miljø.

## Testmetodikker

Våre penetrasjonstester er omfattende og dekker et bredt spekter av sikkerhetsaspekter, inkludert, men ikke begrenset til:

* **OWASP Top 10:** Våre tester retter seg spesielt mot de mest kritiske sikkerhetsrisikoene, som Injection, Broken Authentication og Cross-Site Scripting (XSS).  
* **Black Box og Grey Box Testing:** Avhengig av omfanget benytter teamet vårt disse metodene for å simulere både eksterne og interne angrepsscenarier.  
* **Automatisert og Manuell Testing:** Vi bruker Burp Suite Pro, et ledende verktøysett for sikkerhetstesting, for å gjennomføre automatiserte sikkerhetsskanninger og støtte manuelle testteknikker for å identifisere komplekse sårbarheter og oppnå best mulig dekning. For mer spesifikk sårbarhetsidentifisering benyttes enkelte spesialiserte verktøy, f.eks. SQLmap.

## Oppsummering av Funn

Følgende er en overordnet oppsummering av vår nyeste penetrasjonstestrapport:

* **Totalt antall identifiserte sårbarheter:** 2  
* **Alvorlighetsfordeling:**  
  * Kritisk: 2  
* **Typer sårbarheter oppdaget:**  
  * Broken Access Control  
  * Usikker design

For detaljerte funn, vennligst se full rapport.

### Risikovurderinger og Konsekvenser

Begge de funnet sårbarhetene er vurdert som kritiske, da begge kunne ha hatt alvorlige økonomiske konsekvenser. Den første tillot en ondsinnet autentisert bruker å få kontroll over en annen bedrifts Trippay betalingskonto. Den andre sårbarheten tillot en ondsinnet bruker å endre betalingsbeløpet som kreves for en booking.

### Utbedring og Avbøtende Tiltak

Vi har iverksatt følgende tiltak for å adressere de identifiserte sårbarhetene:

* **Umiddelbare oppdateringer:** De kritiske sårbarhetene ble tettet innen 48 timer etter oppdagelse.  
* **Kodegjennomgang og Forsterkning:** Utviklingsteamet har implementert ytterligere sikkerhetskontroller basert på våre anbefalinger.

## Kontinuerlig Forbedring

Penetrasjonstesting er en del av vår bredere strategi for kontinuerlig sikkerhetsforbedring. Funn fra hver test styrer våre sikkerhetspolicyer, påvirker utviklingspraksis og driver forbedringer i vår sikkerhetsarkitektur.

## Teamets Kompetanse

Våre penetrasjonstester utføres av en intern fagperson med omfattende erfaring fra ulike prosjekter og bransjer. Ved bruk av ledende verktøy og metoder sikrer vår ekspert at applikasjonen vår testes grundig mot de nyeste sikkerhetstruslene.

## Forpliktelse til Sikkerhet

Vi er dedikert til å opprettholde et sikkert applikasjonsmiljø for våre brukere og interessenter. Våre kontinuerlige innsats innen sikkerhetstesting og forbedring viser vårt engasjement for å beskytte mot utviklende trusler.

## Tilgang til Rapport og Oppdateringer

Dette dokumentet vil bli kontinuerlig oppdatert etter hvert som nye penetrasjonstestrapporter utgis. For å få tilgang til full rapport, vennligst kontakt oss via e-posten nedenfor. Fremtidige oppdateringer vil inkludere nylig identifiserte sårbarheter, utbedringstiltak og justeringer i våre testmetodikker.

For ytterligere henvendelser, vennligst kontakt security@wink.travel.
