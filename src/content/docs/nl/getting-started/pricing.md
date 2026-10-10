---
title: Prijzen
description: Het grootste deel van Wink is gratis. Je betaalt een kleine vergoeding per boeking en een pay-as-you-go gebruikskosten voor een aantal premium functies.
sidebar:
  order: 4
---

Wink heeft geen abonnementen, geen gebruikersplaatsen en geen opstartkosten. Het overgrote deel van het platform is gratis, en er zijn slechts twee dingen waarvoor je ooit betaalt:

1. **Een platformvergoeding per boeking, plus kaartverwerking tegen kostprijs** — alleen wanneer een boeking wordt gemaakt.
2. **Pay-as-you-go gebruikskosten** — voor een paar premium functies die ons geld kosten elke keer dat ze draaien, elk met een gratis maandelijkse limiet.

## Wat is gratis

Deze kosten niets, voor altijd, zonder limiet en zonder meting:

- De **boekingengine** — op je eigen site, in je WinkLinks-pagina, of waar je hem ook insluit.
- **Property management** — inhoud, foto’s, tarieven, tariefplannen, beschikbaarheid, promoties en voorwaarden.
- **Affiliate tools** — deelbare links, samengestelde lijsten, grids, kaarten en insluitbare widgets.
- **Reisbureau tools** — zoeken, op maat gemaakte tarieven en boeken namens je klanten.
- **WinkLinks** — claim je vanity URL, bouw je pagina en publiceer er zo vaak je wilt.
- **Handmatige social posts** — alles wat je zelf schrijft, op elk verbonden netwerk.
- **Analytics, leaderboards, claims, instellingen** en accountbeheer.
- De **Consumer en Booking Engine API’s**, inclusief hun lookup- en autocomplete-eindpunten. Bij de **Partner API** worden Lookup- en Content-aanroepen gemeten als één eenheid per stuk (zie [Gebruik](#wat-wordt-wel-en-niet-gemeten) hieronder).

## Boekingen

Wink ondersteunt twee modellen: Wink die de betaling voor het hotel incasseert, en een gelicentieerd reisbureau dat optreedt als merchant of record.

### Model 1 — Wink incasseert voor het hotel

Wink incasseert de betaling van de gast als de beperkte incassant van het hotel. Het hotel is de merchant of record en de naam van het hotel verschijnt op de afschrift van de gast.
Dit model geldt voor 95% van alle boekingen.

#### Uitsplitsing

:::note[Platformvergoeding]
Wink rekent een platformvergoeding van 1,5% per boeking. Dit dekt het onderhoud van het platform en maakt het mogelijk om alles hierboven gratis aan te bieden. Het wordt niet in rekening gebracht bij een geannuleerde boeking.
:::

:::note[Kaartverwerking]
De verwerkingskosten voor de betaling die worden gerekend om de betaling van de gast te incasseren, worden doorberekend aan het hotel tegen kostprijs, zonder marge. Dit varieert per kaart en betaalmethode van de gast, en het exacte bedrag staat in het boekhoudgedeelte van elke boeking. Als een boeking wordt geannuleerd of terugbetaald, worden eventuele kosten die de verwerker houdt nog steeds in rekening gebracht; als er niets wordt gerekend, doen wij dat ook niet.
:::

:::note[Uitbetaling van gelden]
Er zijn kosten verbonden aan het overmaken van gelden naar je rekening. Dit hangt af van de uitbetalingsmethode die je kiest. We ondersteunen momenteel:

- **Bankoverschrijving** — De kosten hangen af van het land waar je bent gevestigd, waar de gelden vandaan komen en eventuele valutaconversie onderweg. De uitbetalingskosten en eventuele conversiekosten worden door de ontvanger betaald, tegen kostprijs. We bieden een offertecalculator die je kunt gebruiken wanneer je beschikbare gelden op je account hebt.

Als je wilt dat we een andere uitbetalingsmethode ondersteunen, stuur ons dan een e-mail.
:::

### Model 2 — Reisbureau als merchant of record

Dit model is alleen beschikbaar voor reisbureaus die een reisbureaulicentie hebben in hun regio en die merchant of record willen zijn. Het is alleen beschikbaar voor API-partners, die boeken via de [Partner API](/nl/integrations/partner-api/), en vereist vooraf schriftelijke goedkeuring van Wink. Sommige van onze geregistreerde reisbureaus willen verantwoordelijk zijn voor het afhandelen van betalingen en het uitbetalen aan hotels. Onder dit model zijn zij verantwoordelijk voor de gelden en beschikken zij over de benodigde licenties om in hun land te opereren.

#### Uitsplitsing

:::note[Platformvergoeding]
Wink rekent een platformvergoeding van 1,5% per boeking. Dit dekt het onderhoud van het platform en maakt het mogelijk om alles hierboven gratis aan te bieden.
:::

Bij dit model betalen reisbureaus de 1,5% vergoeding van Wink plus eventuele Partner API-gebruikskosten boven de gratis limiet, die maandelijks worden gefactureerd.

## Wat partners betalen

Voor partners die boekingen aanleveren: creators, affiliates, platforms, ontwikkelaars en reisbureaus. Partnerschappen zijn niet-exclusief, zonder territoria.

| | Betaling geïncasseerd voor het hotel (meeste partners) | Jij bent merchant of record (alleen API-partners) |
|---|---|---|
| Licentie- of territoriumvergoeding | Geen | Geen |
| Opstartkosten | Geen | Geen |
| Abonnement of maandelijkse kosten | Geen | Geen |
| Minimale verplichting of termijn | Geen | Geen. Er geldt een kredietlimiet. |
| Partner API-toegang | 10.000 hotelnachten per maand gratis, daarna $0,0001 per hotelnacht. Pay-as-you-go staat standaard uit; bij de gratis limiet geven calls `429` terug. | Zelfde |
| Transactiekosten | Geen. Je verdient commissie (standaard 10%). | 1,5% boekingsvergoeding over de boekingswaarde, maandelijks gefactureerd in USD, binnen 15 dagen te betalen. Bij ingeschakelde pay-as-you-go komt Partner API-gebruik op een tweede maandelijkse factuur. |
| Ondersteuningskosten | Geen | Geen |
| Overige kosten | Uitbetalingskosten voor overboekingen, tegen kostprijs | Mogelijke vooruitbetaling of borg bij goedkeuring. Rente van 1,5% per maand alleen over achterstallige facturen. |
| Wanneer kosten wijzigen | 30 dagen vooraf; geldt alleen voor boekingen na de wijziging | Zelfde. Wink kan ook je kredietlimiet wijzigen met kennisgeving. |

De merchant-of-record route vereist vooraf schriftelijke goedkeuring van Wink. Zie [Model 2](#model-2--reisbureau-als-merchant-of-record) hierboven en de [Partner API](/nl/integrations/partner-api/) pagina.

## Gebruik (pay-as-you-go)

Een paar functies kosten ons geld elke keer dat ze draaien — generatieve AI, externe social API’s en het live aanbieden van prijzen op schaal. In plaats van die in een maandelijks abonnement te bundelen dat je misschien niet gebruikt, betaal je alleen voor wat je daadwerkelijk verbruikt, en alleen nadat je de gratis maandelijkse limiet hebt overschreden.

| Functie | Gratis per maand | Daarna | Gefactureerde eenheid |
| -- | -- | -- | -- |
| Social post — afbeelding | 1 | $1,50 | Eén gepubliceerde post |
| Social post — AI-gegenereerde afbeelding | 0 | $2,50 | Eén gepubliceerde post |
| Social post — AI-verrijkte video | 0 | $4,00 | Eén gepubliceerde post |
| Social post — AI-gegenereerde video | 0 | $14,00 | Eén gepubliceerde post |
| AI-reactie op een commentaar of DM | 5 | $0,05 | Eén reactie |
| Chatbot antwoord | 5 | $0,05 | Eén antwoord |
| Partner API | 10.000 | $0,0001 | Eén hotelnacht |

Prijzen zijn in USD. De gratis limiet wordt toegekend **per account**, niet per gebruiker, en wordt elke 1e van de maand (UTC) gereset.

### Hoe posts worden geprijsd

Posts worden geprijsd op basis van wat erin zit, omdat dat is wat het ons kost om ze te maken. Een stilstaande afbeelding is goedkoop; een video niet; alles wat we met AI genereren kost aanzienlijk meer dan een foto die je zelf aanlevert.

- **De gratis limiet geldt alleen voor standaard afbeeldingsposts.** Je krijgt er één per account per maand. Videoposts en AI-gegenereerde media worden vanaf de allereerste post in rekening gebracht — er is geen gratis limiet voor die categorieën, dus een accommodatie die video plaatst, moet in de eerste maand een vergoeding verwachten.
- **Video wint.** Als een post ook maar enige video bevat, wordt de hele post tegen het videotarief gefactureerd. Een post die een afbeelding en een video combineert, is een videopost.
- **AI-herkomst bepaalt het tarief.** Media die je zelf aanlevert — je eigen foto’s en video’s, of iets uit je Wink contentbibliotheek — worden tegen het standaardtarief gefactureerd. Media die wij voor je genereren, worden tegen het AI-tarief gefactureerd.

### Wat wel en niet wordt gemeten

- Alleen een **gegenereerde** post die wordt gepubliceerd op een extern netwerk (Facebook, Instagram) is betaalbaar. Een post die je zelf hebt geschreven is gratis, waar die ook wordt geplaatst.
- **Publiceren op WinkLinks is altijd gratis**, gegenereerd of niet.
- Je wordt **bij publicatie** gefactureerd, niet per poging. Het opnieuw genereren van een concept totdat je tevreden bent, verhoogt je factuur niet — je betaalt één keer voor de post die je daadwerkelijk publiceert. Pogingen zijn niet onbeperkt: elke post staat ongeveer 10 regeneraties toe voor afbeeldingen en 3 voor video, wat weerspiegelt wat het ons kost om ze te produceren. Je ziet hoeveel je nog over hebt terwijl je werkt.
- Bij de Partner API is een **hotelnacht** één hotel voor één overnachting — *niet* één API-aanroep. Een zoekopdracht die 20 hotels voor een verblijf van 3 nachten teruggeeft, is 60 hotelnachten uit één verzoek. Content- en Lookup-aanroepen (bestemmingszoek en autocomplete) kosten elk één eenheid, ongeacht wat ze teruggeven. Account-eindpunten zijn gratis.

### Inschakelen

Pay-as-you-go staat standaard uit. Iedereen krijgt de gratis limiet zonder iets te doen.

Om boven de limiet te gaan, schakelt de **eigenaar** van een account pay-as-you-go in en kiest welke van zijn accounts worden gemeten. Gebruik van al je ingeschakelde accounts wordt samengevoegd in één **maandelijkse factuur**, die je automatisch per kaart kunt laten afrekenen of als factuur kunt ontvangen om zelf te betalen.

Eenmaal ingeschakeld wordt je gebruik gemeten maar **nooit beperkt** — je loopt niet tegen een snelheidslimiet aan voor het uitgeven van geld bij ons.

:::note[Als je het niet inschakelt]
Er gaat niets mis en er worden geen kosten in rekening gebracht. Je stopt gewoon bij de gratis limiet voor die maand: gegenereerde posts worden niet gepubliceerd en Partner API-aanroepen geven een `429` terug totdat de limiet wordt gereset.
:::

### Facturatiestatus

| Status | Betekenis |
| -- | -- |
| In orde | Alles werkt normaal. |
| Achterstallig | Een betaling is mislukt en wordt opnieuw geprobeerd. Je functies blijven in deze periode werken. |
| Geschorst | Een factuur is niet betaald tot het einde. Betaalbare acties worden geblokkeerd totdat het is geregeld; gratis functies blijven normaal werken. |

:::tip[Live prijzen]
Eenheidsprijzen en gratis limieten worden altijd in Portal getoond, rechtstreeks uit ons facturatiesysteem, zodat je ze kunt controleren voordat je iets vastlegt. Zie [Facturering](/nl/portal/plan) om pay-as-you-go in te schakelen, je accounts te kiezen en het gebruik en facturen van de maand te volgen. Zie [Social](/nl/portal/social/what-is-social) voor hoe het aantal posts je uitgaven beïnvloedt.
:::

## Platformeffect

Tot slot, terwijl we blijven groeien in omvang en boekingen, willen we enkele platformeffecten met je delen. Meer boekingen brengen kansen voor volumekortingen bij onze betalingsverwerker. Omdat kaartverwerking tegen kostprijs wordt doorberekend, gaat elke besparing die we onderhandelen direct naar de hotels.

Word vandaag nog lid van Wink en ontdek een nieuwe, winstgevende manier om zaken te doen in de hospitality-industrie!
