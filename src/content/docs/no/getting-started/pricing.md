---
title: Prising
description: Det meste av Wink er gratis. Du betaler et lite gebyr per booking, og et forbruksbasert gebyr på noen få premiumfunksjoner.
sidebar:
  order: 4
---

Wink har ingen abonnementer, ingen seter og ingen oppstartsgebyrer. Det aller meste av plattformen er gratis, og det er bare to ting du noen gang betaler for:

1. **Et plattformgebyr per booking, pluss kortbehandling til kostpris** — kun når en booking gjennomføres.
2. **Forbruksbaserte gebyrer** — på noen få premiumfunksjoner som koster oss penger hver gang de brukes, hver med en gratis månedlig kvote.

## Hva som er gratis

Disse koster ingenting, for alltid, uten kvote og uten måling:

- **Bookingmotoren** — på ditt eget nettsted, på din WinkLinks-side eller hvor som helst du legger den inn.
- **Eiendomsadministrasjon** — innhold, bilder, priser, prisplaner, tilgjengelighet, kampanjer og retningslinjer.
- **Affiliate-verktøy** — delbare lenker, kuraterte lister, rutenett, kart, kort og innebygde widgets.
- **Reisebyråverktøy** — søk, skreddersydde priser og booking på vegne av dine kunder.
- **WinkLinks** — reserver din egen vanity-URL, bygg siden din og publiser så ofte du vil.
- **Manuelle sosiale innlegg** — alt du skriver selv, på hvilket som helst tilkoblet nettverk.
- **Analyse, topplister, krav, innstillinger** og kontoadministrasjon.
- **Consumer og Booking Engine API-er**, inkludert deres oppslags- og autofullfør-endepunkter. På **Partner API** er Lookup og Content-kall målt til én enhet hver (se [Bruk](#what-is-and-isnt-metered) nedenfor).

## Bookinger

Wink støtter to modeller: Wink som samler inn betaling for hotellet, og et lisensiert reisebyrå som fungerer som betalingsmottaker.

### Modell 1 — Wink samler inn for hotellet

Wink samler inn gjestens betaling som hotellets begrensede betalingsinnsamlingsagent. Hotellet er betalingsmottaker, og hotellets navn vises på gjestens kortutskrift.  
Denne modellen gjelder for 95 % av alle bookinger.

#### Fordeling

:::note[Plattformgebyr]
Wink tar 1,5 % plattformgebyr per booking. Dette dekker vedlikehold av plattformen og gjør at vi kan gi bort alt som er listet ovenfor. Det belastes ikke på en kansellert booking.
:::

:::note[Kortbehandling]
Gebyr for betalingsbehandling som belastes for å samle inn gjestens betaling, viderefaktureres hotellet til kostpris, uten påslag. Det varierer med gjestens kort og betalingsmetode, og det eksakte beløpet vises i regnskapsdelen for hver booking. Hvis en booking kanselleres eller refunderes, belastes eventuelle gebyrer som betalingsprosessoren beholder fortsatt; hvis den ikke belaster noe, gjør heller ikke vi det.
:::

:::note[Utbetaling av midler]
Det påløper gebyrer for å sende midler til kontoen din. Dette avhenger av utbetalingsmetoden du velger. Vi støtter for øyeblikket:

- **Bankoverføring** — Kostnaden avhenger av landet du befinner deg i, hvor midlene sendes fra, og eventuell valutakonvertering underveis. Utbetalingsgebyret og eventuelle konverteringskostnader betales av mottakeren, til kostpris. Vi inkluderer en kalkulator for tilbud du kan bruke når du har tilgjengelige midler på kontoen din.

Hvis du ønsker at vi skal støtte en annen utbetalingsmetode, send oss en e-post.
:::

### Modell 2 — Reisebyrå som betalingsmottaker

Denne modellen er kun tilgjengelig for reisebyråer som har reisebyrålisens i sin region og som ønsker å være betalingsmottaker. Den er kun tilgjengelig for API-partnere, booking via [Partner API](/no/integrations/partner-api/), og krever Winks forhåndsgodkjenning skriftlig. Noen av våre registrerte reisebyråer ønsker å være ansvarlige for håndtering av betaling og utbetaling til hoteller. Under denne modellen er de ansvarlige for midlene og har nødvendige lisenser for å operere i sitt land.

#### Fordeling

:::note[Plattformgebyr]
Wink tar 1,5 % plattformgebyr per booking. Dette dekker vedlikehold av plattformen og gjør at vi kan gi bort alt som er listet ovenfor.
:::

Ved bruk av denne modellen betaler reisebyråer Winks 1,5 % gebyr pluss eventuell Partner API-bruk over den gratis kvoten, fakturert månedlig.

## Hva partnere betaler

For partnere som sender bookinger: skapere, affiliates, plattformer, utviklere og reisebyråer. Partnerskap er ikke-eksklusive, uten territorier.

| | Betaling samlet inn for hotellet (de fleste partnere) | Du er betalingsmottaker (kun API-partnere) |
|---|---|---|
| Lisens- eller territoriegebyr | Ingen | Ingen |
| Oppstartsgebyr | Ingen | Ingen |
| Abonnement eller månedlig gebyr | Ingen | Ingen |
| Minimumsforpliktelse eller bindingstid | Ingen | Ingen. En kredittgrense gjelder. |
| Partner API-tilgang | 10 000 hotellnetter per måned gratis, deretter $0,0001 per hotellnatt. Forbruksbasert er som standard av; ved gratis kvote returnerer kall `429`. | Samme |
| Transaksjonsgebyr | Ingen. Du tjener provisjon (10 % standard). | 1,5 % bookinggebyr på bookingverdi, fakturert månedlig i USD, forfall innen 15 dager. Med forbruksbasert påslått kommer Partner API-bruk på en egen månedlig faktura. |
| Supportgebyr | Ingen | Ingen |
| Andre kostnader | Utbetalingsgebyrer, til kostpris | Mulig forskuddsbetaling eller depositum ved godkjenning. Renter på 1,5 % per måned på forfalte fakturaer. |
| Når gebyrer endres | 30 dagers varsel; gjelder kun bookinger gjort etter endringen | Samme. Wink kan også endre kredittgrensen med varsel. |

Betalingsmottaker-modellen krever Winks forhåndsgodkjenning skriftlig. Se [Modell 2](#model-2--travel-agent-as-merchant-of-record) ovenfor og siden for [Partner API](/no/integrations/partner-api/).

## Bruk (forbruksbasert)

Noen få funksjoner koster oss penger hver gang de brukes — generativ AI, tredjeparts sosiale API-er og levering av live-priser i stor skala. I stedet for å pakke disse inn i en månedlig plan du kanskje ikke bruker, betaler du kun for det du faktisk forbruker, og først etter at du har brukt opp en gratis månedlig kvote.

| Funksjon | Gratis per måned | Deretter | Fakturert enhet |
| -- | -- | -- | -- |
| Sosialt innlegg — bilde | 1 | $1,50 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert bilde | 0 | $2,50 | Ett publisert innlegg |
| Sosialt innlegg — AI-forbedret video | 0 | $4,00 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert video | 0 | $14,00 | Ett publisert innlegg |
| AI-svar på kommentar eller DM | 5 | $0,05 | Ett svar |
| Chatbot-svar | 5 | $0,05 | Ett svar |
| Partner API | 10 000 | $0,0001 | Én hotellnatt |

Prisene er i USD. Den gratis kvoten gis **per konto**, ikke per bruker, og nullstilles den 1. i hver måned (UTC).

### Hvordan innlegg prises

Innlegg prises etter hva de inneholder, fordi det er det som koster oss å lage dem. Et stillbilde er billig; en video er ikke; alt vi genererer med AI koster betydelig mer enn et bilde du selv har levert.

- **Den gratis kvoten dekker kun standard bildeinnlegg.** Du får ett av disse per konto per måned. Video-innlegg og AI-generert media faktureres fra første innlegg — det finnes ingen gratis kvote på disse nivåene, så en eiendom som poster video må regne med kostnad allerede i sin første måned.
- **Video vinner.** Hvis et innlegg inneholder video i det hele tatt, faktureres hele innlegget til videoprisen. Et innlegg som blander bilde og video er et video-innlegg.
- **AI-opprinnelse bestemmer nivået.** Media du leverer — dine egne bilder og videoer, eller noe fra Wink sitt innholdsbibliotek — faktureres til standard pris. Media vi genererer for deg faktureres til AI-pris.

### Hva som måles og ikke måles

- Kun et **generert** innlegg publisert til et tredjepartsnettverk (Facebook, Instagram) er fakturerbart. Et innlegg du har skrevet selv er gratis, uansett hvor det publiseres.
- **Publisering til WinkLinks er alltid gratis**, generert eller ikke.
- Du belastes **ved publisering**, ikke per forsøk. Å regenerere et utkast til du er fornøyd, øker ikke regningen — du betaler kun for innlegget du faktisk publiserer. Forsøk er ikke ubegrenset: hvert innlegg tillater rundt 10 regenereringer for bilder og 3 for video, noe som reflekterer hva det koster oss å produsere dem. Du ser hvor mange du har igjen mens du jobber.
- På Partner API er en **hotellnatt** ett hotell priset for én natt opphold — *ikke* ett API-kall. Et søk som returnerer 20 hoteller for 3 netter er 60 hotellnetter fra én enkelt forespørsel. Content og Lookup (destinasjonssøk og autofullfør) koster én enhet hver, uansett hva de returnerer. Konto-endepunkter er gratis.

### Slik aktiverer du det

Forbruksbasert er som standard av. Alle får den gratis kvoten uten å gjøre noe.

For å gå utover kvoten, må **eieren** av en konto aktivere forbruksbasert og velge hvilke av sine kontoer som skal måles. Bruk fra alle dine aktiverte kontoer samles i en **enkel månedlig faktura**, som du kan betale automatisk med kort eller motta som faktura for egen betaling.

Når aktivert, måles bruken din, men den **begrenses aldri** — du vil ikke treffe en grense for hvor mye du kan bruke hos oss.

:::note[Hvis du ikke aktiverer det]
Ingenting brytes og ingenting belastes. Du stopper bare ved den gratis kvoten for den måneden: genererte innlegg publiseres ikke, og Partner API-kall returnerer `429` til kvoten nullstilles.
:::

### Fakturastatus

| Status | Hva det betyr |
| -- | -- |
| God standing | Alt fungerer som normalt. |
| Forfalt | En betaling feilet og forsøkes på nytt. Dine funksjoner fungerer fortsatt i denne perioden. |
| Suspendert | En faktura er ubetalt til forfall. Fakturerbare handlinger blokkeres til den er betalt; gratis funksjoner fortsetter som normalt. |

:::tip[Live-priser]
Enhetspriser og gratis kvoter vises alltid i Portal, direkte fra vårt faktureringssystem, slik at du kan sjekke dem før du binder deg til noe. Se [Fakturering](/no/portal/plan) for å aktivere forbruksbasert, velge kontoer og følge måned-til-dato bruk og fakturaer. Se [Sosialt](/no/portal/social/what-is-social) for hvordan volum av innlegg påvirker hva du bruker.
:::

## Plattform-effekt

Til slutt, etter hvert som vi vokser i både størrelse og antall bookinger, ønsker vi å kunne dele noen av plattform-effektene med deg. Flere bookinger gir muligheter for volumrabatter fra vår betalingsprosessor. Fordi kortbehandling viderefaktureres til kostpris, går enhver besparelse vi forhandler direkte til hotellene.

Bli med i Wink i dag og oppdag en ny, lønnsom måte å drive virksomhet i reiselivsbransjen på!
