---
title: Security
description: >-
  Denne artikel indeholder oplysninger om de sikkerhedsforanstaltninger, vi
  implementerer, og som offentliggøres årligt af vores tredjeparts
  sikkerhedsfirma.
sidebar:
  order: 6
---
# Dokument om oversigt over Wink-sikkerhed

*Sidst opdateret: 7. september 2024*

*Version 1.0*

## Formål og omfang

Som en del af vores løbende engagement i sikkerhed og beskyttelse af brugerdata udfører vi regelmæssige penetrationstests på vores webapplikation. Dette dokument beskriver vores testmetoder, giver et resumé af resultaterne og fremhæver vores tilgang til løbende sikkerhedsforbedring.

Dette dokument vil blive opdateret, når nye rapporter udarbejdes, eller når der sker væsentlige ændringer.

Domæner inden for rækkevidde:\
\*.blink.rejse\
\*.trippay.io

## Testfrekvens og tidsplan

Vores penetrationstest udføres årligt, og yderligere test planlægges efter behov efter væsentlige opdateringer af applikationen eller infrastrukturen. Denne regelmæssige testfrekvens sikrer, at vi er på forkant med udviklende trusler og opretholder et sikkert miljø.

## Testmetoder

Vores penetrationstest er omfattende og dækker en bred vifte af sikkerhedsaspekter, herunder, men ikke begrænset til:

* **OWASP Top 10:**&#x56;ores tests er specifikt rettet mod de mest kritiske sikkerhedsrisici, såsom injektion, ødelagt godkendelse og Cross-Site Scripting (XSS).
* **Test af sorte bokse og grå bokse:**&#x41;fhængigt af omfanget bruger vores team disse metoder til at simulere både eksterne og interne angrebsscenarier.
* **Automatiseret og manuel testning:**&#x56;i bruger Burp Suite Pro, et førende værktøjssæt til sikkerhedstestning, til at udføre automatiserede sikkerhedsscanninger og til at understøtte manuelle testteknikker for at identificere komplekse sårbarheder og få den bedst mulige dækning. Til mere specifik identifikation af sårbarheder anvendes nogle specialiserede værktøjer, f.eks. SQLmap.

## Resumé af resultater

Følgende er et overordnet resumé af vores seneste penetrationstestrapport:

* **Samlet antal identificerede sårbarheder:**&#x32;
* **Sværhedsgradsfordeling:**
  * Kritisk: 2
* **Typer af sårbarheder opdaget:**
  * Defekt adgangskontrol
  * Usikkert design

For detaljerede resultater henvises til den fulde rapport.

### Risikovurderinger og påvirkning

Begge de fundne sårbarheder er vurderet som kritiske, da de begge kunne have haft alvorlige økonomiske konsekvenser. Den første tillod en ondsindet, autentificeret bruger at få kontrol over en anden virksomheds Trippay-betalingskonto. Den anden sårbarhed tillod en ondsindet bruger at ændre det beløb, der kræves for en booking.

### Afhjælpnings- og afbødende indsatser

Vi har taget følgende skridt for at håndtere de identificerede sårbarheder:

* **Øjeblikkelige programrettelser:**&#x44;e kritiske sårbarheder er blevet rettet inden for 48 timer efter opdagelsen.
* **Kodegennemgang og -hærdning:**&#x55;dviklingsteamet har implementeret yderligere sikkerhedskontroller baseret på vores anbefalinger.

## Løbende forbedring

Penetrationstest er en del af vores bredere strategi for løbende sikkerhedsforbedring. Resultaterne fra hver test styrer vores sikkerhedspolitikker, påvirker udviklingspraksis og driver forbedringer i vores sikkerhedsarkitektur.

## Teamekspertise

Vores penetrationstest udføres af en intern professionel med omfattende erfaring på tværs af forskellige projekter og brancher. Ved hjælp af førende værktøjer og metoder sikrer vores ekspert, at vores applikation er grundigt testet mod de nyeste sikkerhedstrusler.

## Forpligtelse til sikkerhed

Vi er dedikerede til at opretholde et sikkert applikationsmiljø for vores brugere og interessenter. Vores løbende indsats for sikkerhedstestning og -forbedring demonstrerer vores engagement i at beskytte mod nye trusler.

## Rapportadgang og opdateringer

Dette dokument vil løbende blive opdateret, efterhånden som nye penetrationstestrapporter udstedes. For at få adgang til den fulde rapport, bedes du kontakte os via nedenstående e-mail. Fremtidige opdateringer vil omfatte nyligt identificerede sårbarheder, afhjælpningsindsatser og justeringer af vores testmetoder.

For yderligere spørgsmål, kontakt venligst security@wink.travel.

