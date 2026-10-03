---
title: Priser
description: Det meste af Wink er gratis. Du betaler et lille gebyr pr. booking og et forbrugsgebyr for nogle få premiumfunktioner.
sidebar:
  order: 4
---

Wink har ingen abonnementer, ingen pladser og ingen opsætningsgebyrer. Størstedelen af platformen er gratis, og der er kun to ting, du nogensinde betaler for:

1. **Et platformgebyr pr. booking plus kortbehandling til kostpris** — kun når en booking foretages.
2. **Forbrugsgebyrer** — på nogle få premiumfunktioner, der koster os penge hver gang, de kører, hver med en gratis månedlig kvote.

## Hvad er gratis

Disse koster ingenting, for evigt, uden kvote og uden måling:

- **Bookingmotoren** — på dit eget site, på din WinkLinks-side eller hvor som helst du integrerer den.
- **Ejendomsadministration** — indhold, fotos, priser, prisplaner, tilgængelighed, kampagner og politikker.
- **Affiliate-værktøjer** — delbare links, kuraterede lister, grids, kort, kort og indlejrede widgets.
- **Rejsebureauværktøjer** — søgning, skræddersyede priser og booking på vegne af dine kunder.
- **WinkLinks** — gør dit vanity-URL krav, byg din side og publicer så ofte du vil.
- **Manuelle opslag på sociale medier** — alt du selv skriver, på ethvert tilsluttet netværk.
- **Analytics, leaderboards, claims, indstillinger** og kontoadministration.
- **Consumer og Booking Engine API’er**, plus opslag og autocomplete-endpoints.

## Bookinger

Wink understøtter to modeller: Wink indsamler betalingen for hotellet, og et licenseret rejsebureau fungerer som merchant of record.

### Model 1 — Wink indsamler for hotellet

Wink indsamler gæstens betaling som hotellets begrænsede betalingsindsamlingsagent. Hotellet er merchant of record, og hotellets navn fremgår på gæstens kortudskrift.
Denne model gælder for 95 % af alle bookinger.

#### Opdeling

:::note[Platformgebyr]
Wink opkræver et platformgebyr på 1,5 % pr. booking. Dette dækker platformvedligeholdelse og er det, der gør det muligt for os at give alt det ovenstående gratis. Det opkræves ikke ved en annulleret booking.
:::

:::note[Kortbehandling]
Betalingsbehandlingsgebyret, der opkræves for at indsamle gæstens betaling, viderefaktureres til hotellet til kostpris uden fortjeneste. Det varierer med gæstens kort og betalingsmetode, og det præcise beløb fremgår i regnskabssektionen for hver booking. Hvis en booking annulleres eller refunderes, opkræves eventuelle gebyrer, som processor beholder stadig; hvis der ikke opkræves noget, gør vi det heller ikke.
:::

:::note[Udbetaling af midler]
Der er gebyrer forbundet med at sende midler til din konto. Dette afhænger af den udbetalingsmetode, du vælger. Vi understøtter i øjeblikket:

- **Bankoverførsel** — Omkostninger afhænger af det land, du befinder dig i, hvor midlerne sendes fra, og eventuel valutakonvertering undervejs. Udbetalingsgebyret og eventuelle konverteringsomkostninger betales af modtageren til kostpris. Vi inkluderer en tilbudsberegner, du kan bruge, når du har tilgængelige midler på din konto.

Hvis du ønsker, at vi understøtter en anden udbetalingsmetode, så send os en e-mail.
:::

### Model 2 — Rejsebureau som merchant of record

Denne model er kun tilgængelig for rejsebureauer, der har en rejsebureaulicens i deres region og ønsker at være merchant of record. Nogle af vores registrerede rejsebureauer ønsker at være ansvarlige for håndtering af betaling og udbetaling af midler til hoteller. Under denne model er de ansvarlige for midlerne og har de nødvendige licenser til at operere i deres land.

#### Opdeling

:::note[Platformgebyr]
Wink opkræver et platformgebyr på 1,5 % pr. booking. Dette dækker platformvedligeholdelse og er det, der gør det muligt for os at give alt det ovenstående gratis.
:::

Ved brug af denne model betaler rejsebureauer kun Winks platformgebyr, og Wink fakturerer rejsebureauet månedligt.

## Forbrug (pay-as-you-go)

Nogle få funktioner koster os penge hver eneste gang, de kører — generativ AI, tredjeparts sociale API’er og levering af live-priser i stor skala. I stedet for at pakke dem ind i en månedlig plan, du måske ikke bruger, betaler du kun for det, du faktisk forbruger, og først efter du har brugt en gratis månedlig kvote.

| Funktion | Gratis pr. måned | Derefter | Faktureret enhed |
| -- | -- | -- | -- |
| Socialt opslag — billede | 1 | $1.50 | Ét publiceret opslag |
| Socialt opslag — AI-genereret billede | 0 | $2.50 | Ét publiceret opslag |
| Socialt opslag — AI-forbedret video | 0 | $4.00 | Ét publiceret opslag |
| Socialt opslag — AI-genereret video | 0 | $14.00 | Ét publiceret opslag |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ét svar |
| Chatbot-svar | 5 | $0.05 | Ét svar |
| Partner API | 10.000 | $0.0001 | Ét hotelnat |

Priserne er i USD. Den gratis kvote gives **pr. konto**, ikke pr. bruger, og nulstilles den 1. i hver måned (UTC).

### Hvordan opslag prissættes

Opslag prissættes efter, hvad de indeholder, fordi det er det, det koster os at lave dem. Et stillbillede er billigt; en video er ikke; alt, vi genererer med AI, koster væsentligt mere end et foto, du selv har leveret.

- **Den gratis kvote dækker kun standard billedopslag.** Du får ét af dem pr. konto pr. måned. Videoopslag og AI-genereret medie faktureres fra det allerførste opslag — der er ingen gratis kvote på disse niveauer, så en ejendom, der poster video, bør forvente en afgift i sin første måned.
- **Video vinder.** Hvis et opslag indeholder nogen video overhovedet, faktureres hele opslaget til videopriser. Et opslag, der blander billede og video, er et videoopslag.
- **AI-oprindelse bestemmer niveauet.** Medier, du leverer — dine egne fotos og videoer eller noget fra dit Wink-indholdsbibliotek — faktureres til standardprisen. Medier, vi genererer for dig, faktureres til AI-prisen.

### Hvad der måles og ikke måles

- Kun et **genereret** opslag, der publiceres til et tredjepartsnetværk (Facebook, Instagram), er fakturerbart. Et opslag, du selv har skrevet, er gratis, uanset hvor det går hen.
- **Publicering til WinkLinks er altid gratis**, genereret eller ej.
- Du bliver opkrævet **ved publicering**, ikke pr. forsøg. At regenerere et udkast, indtil du er tilfreds, øger ikke din regning — du betaler kun én gang for det opslag, du faktisk sender. Forsøg er dog ikke ubegrænsede: hvert opslag tillader omkring 10 regenereringer for billeder og 3 for video, hvilket afspejler, hvad det koster os at producere dem. Du kan se, hvor mange du har tilbage, mens du arbejder.
- På Partner API er et **hotelnat** ét hotel prissat for én overnatning — *ikke* ét API-kald. Et søgning, der returnerer 20 hoteller for et 3-nætters ophold, er 60 hotelnætter fra én enkelt forespørgsel. Content og Lookup (destination søgning og autocomplete) kald koster én enhed hver, uanset hvad de returnerer. Kontoendpoints er gratis.

### Sådan aktiveres det

Pay-as-you-go er som standard slået fra. Alle får den gratis kvote uden at gøre noget.

For at gå ud over kvoten aktiverer **ejeren** af en konto pay-as-you-go og vælger, hvilke af deres konti der skal måles. Forbruget fra alle dine aktiverede konti samles i en **enkelt månedlig faktura**, som du kan betale automatisk med kort eller modtage som faktura til selvbetaling.

Når det er aktiveret, måles dit forbrug, men **aldrig begrænses** — du rammer ikke en grænse for, hvor meget du kan bruge hos os.

:::note[Hvis du ikke aktiverer det]
Intet går i stykker, og intet opkræves. Du stopper blot ved den gratis kvote for den måned: genererede opslag vil ikke blive publiceret, og Partner API-kald returnerer en `429`, indtil kvoten nulstilles.
:::

### Faktureringsstatus

| Status | Hvad det betyder |
| -- | -- |
| God status | Alt fungerer normalt. |
| Forfalden | En betaling mislykkedes og forsøges igen. Dine funktioner fortsætter med at virke i denne periode. |
| Suspenderet | En faktura er ikke betalt til tiden. Fakturerbare handlinger blokeres, indtil den er betalt; gratis funktioner fortsætter som normalt. |

:::tip[Live priser]
Enhedspriser og gratis kvoter vises altid i Portal, direkte fra vores faktureringssystem, så du kan tjekke dem, før du binder dig til noget. Se [Billing](/da/portal/plan) for at aktivere pay-as-you-go, vælge dine konti og følge måned-til-dato forbrug og fakturaer. Se [Social](/da/portal/social/what-is-social) for hvordan opslagvolumen påvirker dit forbrug.
:::

## Platformeffekt

Endelig, efterhånden som vi fortsætter med at vokse i både størrelse og bookinger, ønsker vi at kunne dele nogle af platformeffekterne med dig. Flere bookinger giver muligheder for mængderabatter fra vores betalingsprocessor. Fordi kortbehandling viderefaktureres til kostpris, går enhver besparelse, vi forhandler, direkte til hotellerne.

Bliv medlem af Wink i dag og opdag en ny, lukrativ måde at drive forretning i hotelbranchen på!
