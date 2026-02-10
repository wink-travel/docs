---
title: Sikkerhed
description: Denne artikel indeholder information om de sikkerhedsforanstaltninger, vi implementerer, og som årligt offentliggøres af vores eksterne sikkerhedsfirma.
sidebar:
  order: 6
---

*Sidst opdateret: 7. september 2024*

*Version 1.0*

## Formål og Omfang

Som en del af vores løbende engagement i sikkerhed og beskyttelse af brugerdata gennemfører vi regelmæssige penetrationstest på vores webapplikation. Dette dokument beskriver vores testmetoder, giver et resumé af resultaterne og fremhæver vores tilgang til kontinuerlig sikkerhedsforbedring.

Dette dokument opdateres, når nye rapporter udarbejdes, eller når der sker væsentlige ændringer.

Domæner inden for omfang:  
\*.wink.travel  
\*.trippay.io

## Testfrekvens og Tidsplan

Vores penetrationstest udføres årligt, med yderligere tests planlagt efter behov i forbindelse med væsentlige opdateringer af applikationen eller infrastrukturen. Denne regelmæssige testrytme sikrer, at vi er på forkant med udviklende trusler og opretholder et sikkert miljø.

## Testmetoder

Vores penetrationstest er omfattende og dækker en bred vifte af sikkerhedsaspekter, herunder men ikke begrænset til:

* **OWASP Top 10:** Vores tests fokuserer specifikt på de mest kritiske sikkerhedsrisici, såsom Injection, Broken Authentication og Cross-Site Scripting (XSS).  
* **Black Box og Grey Box Testing:** Afhængigt af omfanget anvender vores team disse metoder til at simulere både eksterne og interne angrebsscenarier.  
* **Automatiseret og Manuel Test:** Vi bruger Burp Suite Pro, et førende sikkerhedstestværktøj, til at udføre automatiserede sikkerhedsscanninger og understøtte manuelle testteknikker for at identificere komplekse sårbarheder og opnå den bedst mulige dækning. Til mere specifik sårbarhedsidentifikation anvendes også specialiserede værktøjer, f.eks. SQLmap.

## Resumé af Resultater

Følgende er et overordnet resumé af vores seneste penetrationstest-rapport:

* **Antal Identificerede Sårbarheder:** 2  
* **Alvorlighedsfordeling:**  
  * Kritisk: 2  
* **Typer af Opdagede Sårbarheder:**  
  * Broken Access Control  
  * Usikker Design

For detaljerede resultater henvises til den fulde rapport.

### Risikovurdering og Indvirkning

Begge fundne sårbarheder er vurderet som kritiske, da begge kunne have haft alvorlige økonomiske konsekvenser. Den første gjorde det muligt for en ondsindet autentificeret bruger at få kontrol over en anden virksomheds Trippay betalingskonto. Den anden sårbarhed gjorde det muligt for en ondsindet bruger at ændre det betalingsbeløb, der kræves for en booking.

### Afhjælpning og Begrænsningstiltag

Vi har taget følgende skridt for at adressere de identificerede sårbarheder:

* **Øjeblikkelige Patches:** De kritiske sårbarheder er blevet rettet inden for 48 timer efter opdagelsen.  
* **Kodegennemgang og Forstærkning:** Udviklingsteamet har implementeret yderligere sikkerhedskontroller baseret på vores anbefalinger.

## Kontinuerlig Forbedring

Penetrationstest er en del af vores bredere strategi for kontinuerlig sikkerhedsforbedring. Resultater fra hver test styrer vores sikkerhedspolitikker, påvirker udviklingspraksis og driver forbedringer i vores sikkerhedsarkitektur.

## Teamets Ekspertise

Vores penetrationstest udføres af en intern professionel med omfattende erfaring på tværs af forskellige projekter og brancher. Ved brug af førende værktøjer og metoder sikrer vores ekspert, at vores applikation bliver grundigt testet mod de nyeste sikkerhedstrusler.

## Engagement i Sikkerhed

Vi er dedikerede til at opretholde et sikkert applikationsmiljø for vores brugere og interessenter. Vores løbende indsats inden for sikkerhedstest og forbedring demonstrerer vores engagement i at beskytte mod udviklende trusler.

## Adgang til Rapport og Opdateringer

Dette dokument opdateres løbende, efterhånden som nye penetrationstest-rapporter udgives. For at få adgang til den fulde rapport, kontakt os venligst via nedenstående e-mail. Fremtidige opdateringer vil inkludere nyligt identificerede sårbarheder, afhjælpningstiltag og justeringer af vores testmetoder.

For yderligere forespørgsler, kontakt venligst security@wink.travel.
