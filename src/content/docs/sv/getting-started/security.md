---
title: Säkerhet
description: Denna artikel innehåller information om de säkerhetsåtgärder vi implementerar och som årligen publiceras av vårt externa säkerhetsföretag.
sidebar:
  order: 6
---

*Senast uppdaterad: 7 september 2024*

*Version 1.0*

## Syfte och omfattning

Som en del av vårt pågående engagemang för säkerhet och skydd av användardata genomför vi regelbundna penetrationstester på vår webbapplikation. Detta dokument beskriver våra testmetoder, ger en sammanfattning av resultaten och belyser vårt tillvägagångssätt för kontinuerlig säkerhetsförbättring.

Detta dokument kommer att uppdateras när nya rapporter tas fram eller när betydande förändringar sker.

Domäner inom omfattningen:  
\*.wink.travel  
\*.trippay.io

## Testfrekvens och schema

Våra penetrationstester genomförs årligen, med ytterligare tester planerade vid behov efter större uppdateringar av applikationen eller infrastrukturen. Denna regelbundna testcykel säkerställer att vi ligger steget före utvecklande hot och upprätthåller en säker miljö.

## Testmetoder

Våra penetrationstester är omfattande och täcker ett brett spektrum av säkerhetsaspekter, inklusive men inte begränsat till:

* **OWASP Top 10:** Våra tester riktar sig särskilt mot de mest kritiska säkerhetsriskerna, såsom Injection, Bruten autentisering och Cross-Site Scripting (XSS).  
* **Black Box och Grey Box-testning:** Beroende på omfattning använder vårt team dessa metoder för att simulera både externa och interna angreppsscenarier.  
* **Automatiserad och manuell testning:** Vi använder Burp Suite Pro, en ledande säkerhetstestningssvit, för att genomföra automatiska säkerhetsskanningar och för att stödja manuella testtekniker för att identifiera komplexa sårbarheter och få bästa möjliga täckning. För mer specifik sårbarhetsidentifiering används även specialiserade verktyg, t.ex. SQLmap.

## Sammanfattning av resultat

Följande är en övergripande sammanfattning av vår senaste penetrationstestrapport:

* **Totalt identifierade sårbarheter:** 2  
* **Allvarlighetsfördelning:**  
  * Kritisk: 2  
* **Typer av upptäckta sårbarheter:**  
  * Bruten åtkomstkontroll  
  * Osäker design

För detaljerade resultat, vänligen se fullständig rapport.

### Riskbedömningar och påverkan

Båda de upptäckta sårbarheterna bedöms som kritiska eftersom båda kunde ha haft allvarliga ekonomiska konsekvenser. Den första gjorde det möjligt för en illvillig autentiserad användare att ta kontroll över ett annat företags Trippay-betalningskonto. Den andra sårbarheten gjorde det möjligt för en illvillig användare att ändra det betalningsbelopp som krävs för en bokning.

### Åtgärder och mildrande insatser

Vi har vidtagit följande åtgärder för att hantera de identifierade sårbarheterna:

* **Omedelbara patchar:** De kritiska sårbarheterna har åtgärdats inom 48 timmar efter upptäckt.  
* **Kodgranskning och förstärkning:** Utvecklingsteamet har implementerat ytterligare säkerhetskontroller baserat på våra rekommendationer.

## Kontinuerlig förbättring

Penetrationstestning är en del av vår bredare strategi för kontinuerlig säkerhetsförbättring. Resultaten från varje test styr våra säkerhetspolicys, påverkar utvecklingspraxis och driver förbättringar i vår säkerhetsarkitektur.

## Teamets expertis

Våra penetrationstester utförs av en intern expert med omfattande erfarenhet från olika projekt och branscher. Med hjälp av ledande verktyg och metoder säkerställer vår expert att vår applikation testas noggrant mot de senaste säkerhetshoten.

## Engagemang för säkerhet

Vi är dedikerade till att upprätthålla en säker applikationsmiljö för våra användare och intressenter. Våra pågående insatser inom säkerhetstestning och förbättring visar vårt engagemang för att skydda mot utvecklande hot.

## Rapportåtkomst och uppdateringar

Detta dokument kommer att uppdateras kontinuerligt när nya penetrationstestrapporter publiceras. För att få tillgång till fullständig rapport, vänligen kontakta oss via e-post nedan. Framtida uppdateringar kommer att inkludera nyupptäckta sårbarheter, åtgärder och justeringar av våra testmetoder.

För ytterligare frågor, vänligen kontakta security@wink.travel.
