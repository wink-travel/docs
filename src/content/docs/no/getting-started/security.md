---
title: Sikkerhet
description: Denne artikkelen inneholder informasjon om sikkerhetstiltakene vi implementerer og som publiseres årlig av vårt eksterne sikkerhetsselskap.
sidebar:
  order: 6
---

*Sist oppdatert: 7. september 2024*

*Versjon 1.0*

## Formål og omfang

Som en del av vårt kontinuerlige engasjement for sikkerhet og beskyttelse av brukerdata, gjennomfører vi regelmessige penetrasjonstester på vår webapplikasjon. Dette dokumentet beskriver våre testmetodikker, gir en oppsummering av funn, og fremhever vår tilnærming til kontinuerlig sikkerhetsforbedring.

Dette dokumentet vil bli oppdatert når nye rapporter utarbeides eller ved vesentlige endringer.

Domener innenfor omfang:  
\*.wink.travel  
\*.trippay.io

## Testfrekvens og tidsplan

Våre penetrasjonstester gjennomføres årlig, med tilleggstester planlagt ved behov etter betydelige oppdateringer av applikasjonen eller infrastrukturen. Denne regelmessige testsyklusen sikrer at vi ligger i forkant av utviklende trusler og opprettholder et sikkert miljø.

## Testmetodikker

Våre penetrasjonstester er omfattende og dekker et bredt spekter av sikkerhetsaspekter, inkludert, men ikke begrenset til:

* **OWASP Top 10:** Våre tester retter seg spesielt mot de mest kritiske sikkerhetsrisikoene, som Injection, Broken Authentication og Cross-Site Scripting (XSS).  
* **Black Box og Grey Box Testing:** Avhengig av omfanget benytter teamet vårt disse metodene for å simulere både eksterne og interne angrepsscenarier.  
* **Automatisert og manuell testing:** Vi bruker Burp Suite Pro, et ledende verktøysett for sikkerhetstesting, for å gjennomføre automatiserte sikkerhetsskanninger og støtte manuelle testteknikker for å identifisere komplekse sårbarheter og oppnå best mulig dekning. For mer spesifikk sårbarhetsidentifisering benyttes enkelte spesialiserte verktøy, f.eks. SQLmap.

## Oppsummering av funn

Følgende er en overordnet oppsummering av vår siste penetrasjonstestrapport:

* **Totalt antall identifiserte sårbarheter:** 2  
* **Alvorlighetsfordeling:**  
  * Kritisk: 2  
* **Typer sårbarheter oppdaget:**  
  * Broken Access Control  
  * Usikker design

For detaljerte funn, vennligst se fullstendig rapport.

### Risikovurderinger og konsekvenser

Begge de funnet sårbarhetene er vurdert som kritiske, da begge kunne ha hatt alvorlige økonomiske konsekvenser. Den første tillot en ondsinnet autentisert bruker å få kontroll over en annen bedrifts Trippay betalingskonto. Den andre sårbarheten tillot en ondsinnet bruker å endre betalingsbeløpet som kreves for en booking.

### Utbedring og avbøtende tiltak

Vi har iverksatt følgende tiltak for å adressere de identifiserte sårbarhetene:

* **Umiddelbare oppdateringer:** De kritiske sårbarhetene ble utbedret innen 48 timer etter oppdagelse.  
* **Kodegjennomgang og styrking:** Utviklingsteamet har implementert ytterligere sikkerhetskontroller basert på våre anbefalinger.

## Kontinuerlig forbedring

Penetrasjonstesting er en del av vår bredere strategi for kontinuerlig sikkerhetsforbedring. Funn fra hver test styrer våre sikkerhetspolicyer, påvirker utviklingspraksis og driver forbedringer i vår sikkerhetsarkitektur.

## Teamets kompetanse

Våre penetrasjonstester utføres av en intern fagperson med omfattende erfaring fra ulike prosjekter og bransjer. Ved bruk av ledende verktøy og metoder sikrer vår ekspert at applikasjonen vår testes grundig mot de nyeste sikkerhetstruslene.

## Forpliktelse til sikkerhet

Vi er dedikert til å opprettholde et sikkert applikasjonsmiljø for våre brukere og interessenter. Våre kontinuerlige innsats innen sikkerhetstesting og forbedring viser vårt engasjement for å beskytte mot utviklende trusler.

## Tilgang til rapporter og oppdateringer

Dette dokumentet vil bli kontinuerlig oppdatert etter hvert som nye penetrasjonstestrapporter utgis. For å få tilgang til fullstendig rapport, vennligst kontakt oss via e-post nedenfor. Fremtidige oppdateringer vil inkludere nylig identifiserte sårbarheter, utbedringstiltak og justeringer i våre testmetodikker.

For ytterligere henvendelser, vennligst kontakt security@wink.travel.
