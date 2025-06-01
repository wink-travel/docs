---
title: Security
description: >-
  Den här artikeln innehåller information om de säkerhetsåtgärder vi
  implementerar och publiceras årligen av vårt tredjepartssäkerhetsföretag.
sidebar:
  order: 6
---
# Översiktsdokument för Wink-säkerhet

*Senast uppdaterad: 7 september 2024*

*Version 1.0*

## Syfte och omfattning

Som en del av vårt kontinuerliga engagemang för säkerhet och skydd av användardata genomför vi regelbundna penetrationstester av vår webbapplikation. Detta dokument beskriver våra testmetoder, ger en sammanfattning av resultaten och belyser vår strategi för kontinuerlig säkerhetsförbättring.

Detta dokument kommer att uppdateras allt eftersom nya rapporter tas fram eller när väsentliga förändringar sker.

Domäner inom omfattning:\
\*.wink.travel\
\*.trippay.io

## Testfrekvens och schema

Våra penetrationstester genomförs årligen, med ytterligare tester schemalagda vid behov efter betydande uppdateringar av applikationen eller infrastrukturen. Denna regelbundna testfrekvens säkerställer att vi ligger steget före nya hot och upprätthåller en säker miljö.

## Testmetoder

Våra penetrationstest är omfattande och täcker ett brett spektrum av säkerhetsaspekter, inklusive men inte begränsat till:

* **OWASP Topp 10:**&#x56;åra tester riktar sig specifikt mot de mest kritiska säkerhetsriskerna, såsom injektion, trasig autentisering och Cross-Site Scripting (XSS).
* **Testning av svarta lådor och grå lådor:**&#x42;eroende på omfattningen använder vårt team dessa metoder för att simulera både externa och interna attackscenarier.
* **Automatiserad och manuell testning:**&#x56;i använder Burp Suite Pro, ett ledande verktyg för säkerhetstestning, för att utföra automatiserade säkerhetsskanningar och för att underlätta manuella testtekniker för att identifiera komplexa sårbarheter och få bästa möjliga täckning. För mer specifik identifiering av sårbarheter används några specialiserade verktyg, t.ex. SQLmap.

## Sammanfattning av resultaten

Följande är en översiktlig sammanfattning av vår senaste penetrationstestrapport:

* **Totalt antal identifierade sårbarheter:**&#x32;
* **Allvarlighetsgradsfördelning:**
  * Kritisk: 2
* **Typer av upptäckta sårbarheter:**
  * Trasig åtkomstkontroll
  * Osäker design

För detaljerade resultat, vänligen se den fullständiga rapporten.

### Riskklassificeringar och påverkan

Båda de funna sårbarheterna klassas som kritiska eftersom båda kunde ha haft allvarliga ekonomiska konsekvenser. Den första gjorde det möjligt för en illvillig autentiserad användare att få kontroll över ett annat företags Trippay-betalkonto. Den andra sårbarheten gjorde det möjligt för en illvillig användare att ändra betalningsbeloppet som krävs för en bokning.

### Åtgärder och begränsningsinsatser

Vi har vidtagit följande åtgärder för att åtgärda de identifierade sårbarheterna:

* **Omedelbara patchar:**&#x44;e kritiska sårbarheterna har åtgärdats inom 48 timmar efter upptäckten.
* **Kodgranskning och härdning:**&#x55;tvecklingsteamet har implementerat ytterligare säkerhetskontroller baserat på våra rekommendationer.

## Kontinuerlig förbättring

Penetrationstestning är en del av vår bredare strategi för kontinuerlig säkerhetsförbättring. Resultaten från varje test vägleder våra säkerhetspolicyer, påverkar utvecklingspraxis och driver förbättringar i vår säkerhetsarkitektur.

## Teamexpertis

Våra penetrationstester utförs av en intern expert med omfattande erfarenhet av olika projekt och branscher. Med hjälp av ledande verktyg och metoder säkerställer vår expert att vår applikation är noggrant testad mot de senaste säkerhetshoten.

## Engagemang för säkerhet

Vi är dedikerade till att upprätthålla en säker applikationsmiljö för våra användare och intressenter. Våra kontinuerliga ansträngningar inom säkerhetstestning och förbättring visar vårt engagemang för att skydda mot framväxande hot.

## Rapportåtkomst och uppdateringar

Detta dokument kommer att uppdateras kontinuerligt i takt med att nya rapporter om penetrationstest publiceras. För att få tillgång till hela rapporten, vänligen kontakta oss via e-postadressen nedan. Framtida uppdateringar kommer att inkludera nyligen identifierade sårbarheter, åtgärdsinsatser och justeringar av våra testmetoder.

För ytterligare frågor, vänligen kontakta security@wink.travel.

