---
title: Security
description: >-
  Denne artikkelen inneholder informasjon om sikkerhetstiltakene vi
  implementerer, og som publiseres årlig av vårt tredjeparts sikkerhetsfirma.
sidebar:
  order: 6
---
# Oversiktsdokument for Wink-sikkerhet

*Sist oppdatert: 7. september 2024*

*Versjon 1.0*

## Formål og omfang

Som en del av vår kontinuerlige forpliktelse til sikkerhet og beskyttelse av brukerdata, utfører vi regelmessig penetrasjonstesting av webapplikasjonen vår. Dette dokumentet beskriver testmetodene våre, gir et sammendrag av funnene og fremhever vår tilnærming til kontinuerlig sikkerhetsforbedring.

Dette dokumentet vil bli oppdatert etter hvert som nye rapporter produseres eller når det skjer vesentlige endringer.

Domener innenfor omfanget:\
\*.wink.travel\
\*.trippay.io

## Testfrekvens og tidsplan

Penetrasjonstestene våre utføres årlig, med ytterligere tester planlagt etter behov etter betydelige oppdateringer av applikasjonen eller infrastrukturen. Denne regelmessige testfrekvensen sikrer at vi holder oss i forkant av utviklende trusler og opprettholder et sikkert miljø.

## Testmetoder

Penetrasjonstestingen vår er omfattende og dekker et bredt spekter av sikkerhetsaspekter, inkludert, men ikke begrenset til:

* **OWASP Topp 10:**&#x54;estene våre retter seg spesifikt mot de mest kritiske sikkerhetsrisikoene, som injeksjon, ødelagt autentisering og Cross-Site Scripting (XSS).
* **Testing av svart boks og grå boks:**&#x41;vhengig av omfanget bruker teamet vårt disse metodene for å simulere både eksterne og interne angrepsscenarier.
* **Automatisert og manuell testing:**&#x56;i bruker Burp Suite Pro, et ledende verktøysett for sikkerhetstesting, for å utføre automatiserte sikkerhetsskanninger og for å hjelpe manuelle testteknikker for å identifisere komplekse sårbarheter og få best mulig dekning. For mer spesifikk identifisering av sårbarheter brukes noen spesialiserte verktøy, f.eks. SQLmap.

## Sammendrag av funn

Følgende er et kort sammendrag av vår nyeste penetrasjonstestrapport:

* **Totalt antall identifiserte sårbarheter:**&#x32;
* **Alvorlighetsfordeling:**
  * Kritisk: 2
* **Typer av sårbarheter oppdaget:**
  * Brudd på tilgangskontrollen
  * Usikker design

For detaljerte funn, se den fullstendige rapporten.

### Risikovurderinger og innvirkning

Begge de oppdagede sårbarhetene er vurdert som kritiske, siden begge kunne ha hatt alvorlige økonomiske konsekvenser. Den første tillot en ondsinnet, autentisert bruker å få kontroll over et annet selskaps Trippay-betalingskonto. Den andre sårbarheten tillot en ondsinnet bruker å endre betalingsbeløpet som kreves for en bestilling.

### Tiltak for utbedring og avbøtende tiltak

Vi har tatt følgende skritt for å håndtere de identifiserte sårbarhetene:

* **Umiddelbare oppdateringer:**&#x44;e kritiske sårbarhetene ble rettet innen 48 timer etter oppdagelsen.
* **Kodegjennomgang og herding:**&#x55;tviklingsteamet har implementert ytterligere sikkerhetskontroller basert på våre anbefalinger.

## Kontinuerlig forbedring

Penetrasjonstesting er en del av vår bredere strategi for kontinuerlig sikkerhetsforbedring. Funn fra hver test veileder våre sikkerhetspolicyer, påvirker utviklingspraksis og driver forbedringer i vår sikkerhetsarkitektur.

## Teamekspertise

Penetrasjonstestingen vår utføres av en intern fagperson med bred erfaring på tvers av ulike prosjekter og bransjer. Ved hjelp av ledende verktøy og metoder sørger eksperten vår for at applikasjonen vår testes grundig mot de nyeste sikkerhetstruslene.

## Forpliktelse til sikkerhet

Vi er opptatt av å opprettholde et sikkert applikasjonsmiljø for våre brukere og interessenter. Vår kontinuerlige innsats innen sikkerhetstesting og forbedring viser vår forpliktelse til å beskytte mot stadig utviklende trusler.

## Rapporttilgang og oppdateringer

Dette dokumentet vil bli kontinuerlig oppdatert etter hvert som nye penetrasjonstestrapporter utstedes. For å få tilgang til hele rapporten, vennligst kontakt oss via e-postadressen nedenfor. Fremtidige oppdateringer vil inkludere nylig identifiserte sårbarheter, utbedringstiltak og justeringer av testmetodene våre.

For ytterligere henvendelser, vennligst kontakt security@wink.travel.

