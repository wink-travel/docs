---
title: Priser
description: Det meste af Wink er gratis. Du betaler et lille gebyr pr. booking og et forbrugsgebyr for nogle få premiumfunktioner.
sidebar:
  order: 4
---

Wink har ingen abonnementer, ingen pladser og ingen opsætningsgebyrer. Størstedelen af platformen er gratis, og der er kun to ting, du nogensinde betaler for:

1. **En lille procentdel pr. booking** — kun når du rent faktisk tjener penge.
2. **Forbrugsgebyrer** — på nogle få premiumfunktioner, der koster os penge hver gang, de kører, hver med en gratis månedlig kvote.

## Hvad er gratis

Disse koster ingenting, for evigt, uden kvote og uden måling:

- **Bookingmotoren** — på dit eget site, på din WinkLinks-side eller hvor som helst du integrerer den.
- **Ejendomsadministration** — indhold, fotos, priser, prisplaner, tilgængelighed, kampagner og politikker.
- **Affiliate-værktøjer** — delbare links, kuraterede lister, grids, kort, kort og indlejrede widgets.
- **Rejsebureauværktøjer** — søgning, skræddersyede priser og booking på vegne af dine kunder.
- **WinkLinks** — gør krav på din vanity-URL, byg din side og publicer så ofte, du vil.
- **Manuelle opslag på sociale medier** — alt du selv skriver, på ethvert tilsluttet netværk.
- **Analytics, leaderboards, claims, indstillinger** og kontoadministration.
- **Consumer og Booking Engine API’er**, plus opslag og autocomplete-endpoints.

## Bookinger

Wink understøtter både merchant- og agentmodellerne.

### Model 1

Wink er merchant of record på tidspunktet for bookingen. Wink er ansvarlig for midlerne og har alle nødvendige licenser til at drive et rejsebureau.  
Denne model gælder for 95 % af alle bookinger.

Wink opkræver `5,5 % pr. booking` for at vedligeholde platformen.  
Det meste går til betalingsgatewayen (Visa, MasterCard osv.). En gennemsnitlig booking koster os `2,95 %` at erhverve; nogle gange helt op til `3,6 %`. Delvise refunderinger koster os yderligere, da betalingsgatewayen ser dette som en ny transaktion.  
Vi ønsker at være helt gennemsigtige omkring priserne nu for at spare alle tid, før man prøver at forhandle yderligere rabatter uden at have brugt Wink. Vores prismodel er mere end fair, og vi skal også kunne leve af det.

#### Opdeling

:::note[Behandlingsgebyr]
Wink opkræver et behandlingsgebyr på 1,5 % pr. booking. Dette dækker platformvedligeholdelse og gør det muligt for os at give alt det ovenstående gratis.
:::

:::note[Betalingsgebyr]
TripPay opkræver et betalingsgebyr på 4,0 % pr. booking. Dette dækker erhvervelsen af betalingen fra rejsende.
:::

:::note[Udbetaling af midler]
Der er gebyrer forbundet med at sende midler til din konto. Det afhænger af den udbetalingsmetode, du vælger. Vi understøtter i øjeblikket:

- **Bankoverførsel** Prisen afhænger af det land, du befinder dig i, og hvor midlerne sendes fra. Vi inkluderer en prisberegner, du kan bruge, når du har tilgængelige midler på din konto.

Hvis du ønsker, at vi understøtter en anden udbetalingsmetode, så send os en e-mail.
:::

### Model 2

Denne model er kun tilgængelig for rejsebureauer, der har en rejsebureaulicens i deres region og ønsker at være merchant of record. Nogle af vores registrerede rejsebureauer ønsker at være ansvarlige for håndtering af betaling og udbetaling af midler til hoteller. Under denne model er de ansvarlige for midlerne og har de nødvendige licenser til at operere i deres land.

#### Opdeling

:::note[Behandlingsgebyr]
Wink opkræver et behandlingsgebyr på 1,5 % pr. booking. Dette dækker platformvedligeholdelse og gør det muligt for os at give alt det ovenstående gratis.
:::

Ved brug af denne model betaler rejsebureauer kun Winks behandlingsgebyr, og Wink fakturerer rejsebureauet månedligt.

## Forbrug (pay-as-you-go)

Nogle få funktioner koster os penge hver gang, de kører — generativ AI, tredjeparts sociale API’er og levering af live-priser i stor skala. I stedet for at pakke dem ind i en månedlig plan, du måske ikke bruger, betaler du kun for det, du rent faktisk forbruger, og først efter du har brugt en gratis månedlig kvote.

| Funktion | Gratis pr. måned | Derefter | Faktureret enhed |
| -- | -- | -- | -- |
| Socialt opslag — billede | 1 | $1.50 | Ét publiceret opslag |
| Socialt opslag — AI-genereret billede | 0 | $2.50 | Ét publiceret opslag |
| Socialt opslag — video | 0 | $4.00 | Ét publiceret opslag |
| Socialt opslag — AI-genereret video | 0 | $14.00 | Ét publiceret opslag |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ét svar |
| Chatbot-svar | 5 | $0.05 | Ét svar |
| Partner API | 10.000 | $0.0001 | Én hotel-dag |
| Partner Media API | 1.000 | $0.0005 | Én hotels medier |

Priserne er i USD. Den gratis kvote gives **pr. konto**, ikke pr. bruger, og nulstilles den 1. i hver måned (UTC).

### Hvordan opslag prissættes

Opslag prissættes efter, hvad de indeholder, fordi det er det, det koster os at lave dem. Et stillbillede er billigt; en video er ikke; alt, vi genererer med AI, koster væsentligt mere end et foto, du selv har leveret.

- **Den gratis kvote dækker kun standard billedopslag.** Du får ét af dem pr. konto pr. måned. Videoopslag og AI-genereret medier faktureres fra det allerførste opslag — der er ingen gratis kvote på disse niveauer, så en ejendom, der poster video, skal forvente en afgift i sin første måned.
- **Video vinder.** Hvis et opslag indeholder nogen video overhovedet, faktureres hele opslaget til videopriser. Et opslag, der blander billede og video, er et videoopslag.
- **AI-oprindelse bestemmer niveauet.** Medier, du leverer — dine egne fotos og videoer eller noget fra dit Wink-indholdsbibliotek — faktureres til standardprisen. Medier, vi genererer for dig, faktureres til AI-prisen.

### Hvad der måles og ikke måles

- Kun et **genereret** opslag, der publiceres til et tredjepartsnetværk (Facebook, Instagram), er fakturerbart. Et opslag, du selv har skrevet, er gratis, uanset hvor det går hen.
- **Publicering til WinkLinks er altid gratis**, genereret eller ej.
- Du bliver opkrævet **ved publicering**, ikke pr. forsøg. At regenerere et udkast, indtil du er tilfreds, øger ikke din regning — du betaler kun én gang for det opslag, du rent faktisk sender. Forsøg er dog ikke ubegrænsede: hvert opslag tillader omkring 10 regenereringer for billeder og 3 for video, hvilket afspejler, hvad det koster os at producere dem. Du kan se, hvor mange du har tilbage, mens du arbejder.
- På Partner API er en **hotel-dag** et hotel prissat for én overnatning — *ikke* et API-kald. En søgning, der returnerer 20 hoteller for et 3-nætters ophold, er 60 hotel-dage fra én enkelt forespørgsel. Opslags- og autocomplete-endpoints er gratis og måles aldrig.
- På **Partner Media API** er en enhed ét hotel, hvis medier returneres til dig, uanset hvor mange fotos og videoer det bliver til. En batch-forespørgsel for 50 hoteller er 50 enheder — og hvis nogle af hotellerne ikke har noget, du har ret til at se, faktureres du kun for dem, der rent faktisk returnerede medier.

### Eksempel: en OTA, der cacher 90 dages priser

Lad os sige, at du er en OTA, en metasearch-side eller en rejsearrangør, og du ønsker 90 dages fremadrettede priser for **1.000 hoteller**, som hver publicerer **4 masterpriser**.

**En fuld opdatering af det hele er 90.000 hotel-dage — $9,00.**

Det er 1.000 hoteller × 90 dage. De 4 masterpriser koster dig ikke ekstra: en enkelt forespørgsel returnerer alle prisplaner, et hotel publicerer for den dato, så antallet af prisplaner, en ejendom har, er ikke en faktureringsdimension. Det er heller ikke, hvordan du opdeler forespørgslen — en periodeforespørgsel dækker op til 30 dage, så du ville lave 3 forespørgsler pr. hotel, og 3 × 30 dage faktureres præcis det samme som én 90-dages forespørgsel. Du faktureres for de priser, du bad om, ikke for den rute, du bad om det igennem.

Så hvad du betaler pr. måned, kommer ned til ét spørgsmål: hvor ofte opdaterer du?

| Opdateringsfrekvens | Hotel-dage / måned | Efter de 10.000 gratis | Månedlig pris |
| -- | -- | -- | -- |
| Én gang om måneden | 90.000 | 80.000 | **$8,00** |
| Ugentligt | 360.000 | 350.000 | **$35,00** |
| Dagligt | 2.700.000 | 2.690.000 | **$269,00** |
| To gange om dagen | 5.400.000 | 5.390.000 | **$539,00** |

At opdatere alle 1.000 hoteller hver eneste dag er 3.000 forespørgsler om dagen og svarer til cirka $9,00 om dagen. Den gratis kvote alene — 10.000 hotel-dage om måneden — er nok til at prissætte cirka 110 hoteller for en fuld 90-dages periode eller til at bygge og teste en hel integration uden at betale noget.

#### Hvad påvirker det tal

- **At bede om prisplaner én ad gangen.** En periodeforespørgsel returnerer den bedste pris pr. værelsestype på tværs af alle prisplaner på én gang. Hvis du filtrerer til én prisplan pr. forespørgsel for at se alle fire separat, laver du fire gange så mange forespørgsler og betaler fire gange så meget.
- **Ekstra belægninger, valutaer eller sprog.** Prissætning for 1 voksen og prissætning for 2 voksne er to forskellige forespørgsler, og hver faktureres. Det samme gælder for en anden visningsvaluta eller sprog.
- **Friskhed, du ikke behøver.** Intet siger, at alle 90 dage fortjener samme opdateringsfrekvens. Opdater de næste 14 dage dagligt og dage 15–90 ugentligt, og de samme 1.000 hoteller koster **$71,40** om måneden i stedet for $269,00 — de nærmeste datoer, hvor priserne faktisk bevæger sig, holdes friske.

### Sådan aktiveres det

Pay-as-you-go er som standard slået fra. Alle får den gratis kvote uden at gøre noget.

For at gå ud over kvoten aktiverer **ejeren** af en konto pay-as-you-go og vælger, hvilke af deres konti der skal måles. Forbrug fra alle dine aktiverede konti samles i en **enkelt månedlig faktura**, som du kan betale automatisk med kort eller modtage som faktura til selvbetaling.

Når det er aktiveret, måles dit forbrug, men **aldrig begrænses** — du rammer ikke en grænse for, hvor meget du kan bruge hos os.

:::note[Hvis du ikke aktiverer det]
Intet går i stykker, og intet bliver opkrævet. Du stopper blot ved den gratis kvote for den måned: genererede opslag vil ikke blive publiceret, og Partner API-kald returnerer en `429`, indtil kvoten nulstilles.
:::

### Faktureringsstatus

| Status | Hvad det betyder |
| -- | -- |
| Godkendt | Alt fungerer normalt. |
| Forfalden | En betaling mislykkedes og forsøges igen. Dine funktioner fortsætter med at virke i denne periode. |
| Suspenderet | En faktura er ikke betalt til tiden. Fakturerbare handlinger blokeres, indtil den er betalt; gratis funktioner fortsætter som normalt. |

:::tip[Live priser]
Enhedspriser og gratis kvoter vises altid i Portal, direkte fra vores faktureringssystem, så du kan tjekke dem, før du binder dig til noget. Se [Fakturering](/da/account/subscription) for at aktivere pay-as-you-go, vælge dine konti og følge måned-til-dato forbrug og fakturaer. Se [Social](/da/portal/social/what-is-social) for hvordan opslagvolumen påvirker dit forbrug.
:::

## Platformeffekt

Endelig, efterhånden som vi fortsætter med at vokse i både størrelse og bookinger, ønsker vi at kunne dele nogle af platformeffekterne med dig. Flere bookinger giver mulighed for volumenrabatter fra vores betalingsgateway, hvilket vil gøre det muligt for os at sænke vores behandlingsgebyr for alle.

Bliv medlem af Wink i dag og opdag en ny, lukrativ måde at drive forretning i hospitality-branchen!
