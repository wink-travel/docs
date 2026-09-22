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
- **WinkLinks** — krev ditt eget vanity-URL, bygg siden din og publiser så ofte du vil.
- **Manuelle sosiale innlegg** — alt du skriver selv, på hvilket som helst tilkoblet nettverk.
- **Analyse, topplister, krav, innstillinger** og kontoadministrasjon.
- **Consumer og Booking Engine API-er**, pluss oppslags- og autofullfør-endepunkter.

## Bookinger

Wink støtter to modeller: Wink som samler inn betaling for hotellet, og et lisensiert reisebyrå som fungerer som betalingsmottaker.

### Modell 1 — Wink samler inn for hotellet

Wink samler inn gjestens betaling som hotellets begrensede betalingsinnsamlingsagent. Hotellet er betalingsmottaker, og hotellets navn vises på gjestens kortutskrift.
Denne modellen gjelder for 95 % av alle bookinger.

#### Detaljer

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

Denne modellen er kun tilgjengelig for reisebyråer som har reisebyrålisens i sin region og som ønsker å være betalingsmottaker. Noen av våre registrerte reisebyråer ønsker å være ansvarlige for håndtering av betaling og utbetaling av midler til hoteller. Under denne modellen er de ansvarlige for midlene og har nødvendige lisenser for å operere i sitt land.

#### Detaljer

:::note[Plattformgebyr]
Wink tar 1,5 % plattformgebyr per booking. Dette dekker vedlikehold av plattformen og gjør at vi kan gi bort alt som er listet ovenfor.
:::

Med denne modellen betaler reisebyråene kun Wink sitt plattformgebyr, og Wink fakturerer reisebyrået månedlig.

## Forbruk (pay-as-you-go)

Noen få funksjoner koster oss penger hver gang de brukes — generativ AI, tredjeparts sosiale API-er og levering av live-priser i stor skala. I stedet for å pakke disse inn i en månedlig plan du kanskje ikke bruker, betaler du kun for det du faktisk forbruker, og først etter at du har brukt opp en gratis månedlig kvote.

| Funksjon | Gratis per måned | Deretter | Faktureringsenhet |
| -- | -- | -- | -- |
| Sosialt innlegg — bilde | 1 | $1.50 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert bilde | 0 | $2.50 | Ett publisert innlegg |
| Sosialt innlegg — AI-forbedret video | 0 | $4.00 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert video | 0 | $14.00 | Ett publisert innlegg |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ett svar |
| Chatbot-svar | 5 | $0.05 | Ett svar |
| Partner API | 10,000 | $0.0001 | Én hotell-dag |

Prisene er i USD. Den gratis kvoten gis **per konto**, ikke per bruker, og nullstilles den 1. i hver måned (UTC).

### Hvordan innlegg prises

Innlegg prises etter hva de inneholder, fordi det er det som koster oss å lage dem. Et stillbilde er billig; en video er ikke; alt vi genererer med AI koster betydelig mer enn et bilde du selv har levert.

- **Den gratis kvoten dekker kun standard bildeinnlegg.** Du får ett av disse per konto per måned. Videoinnlegg og AI-generert media faktureres fra første innlegg — det finnes ingen gratis kvote på disse nivåene, så en eiendom som legger ut video må regne med kostnad allerede i sin første måned.
- **Video vinner.** Hvis et innlegg inneholder video i det hele tatt, faktureres hele innlegget til videoprisen. Et innlegg som blander bilde og video regnes som videoinnlegg.
- **AI-opprinnelse bestemmer nivået.** Media du leverer — dine egne bilder og videoer, eller noe fra Wink sitt innholdsbibliotek — faktureres til standard pris. Media vi genererer for deg faktureres til AI-pris.

### Hva som måles og ikke måles

- Kun et **generert** innlegg publisert til et tredjepartsnettverk (Facebook, Instagram) er fakturerbart. Et innlegg du har skrevet selv er gratis, uansett hvor det publiseres.
- **Publisering til WinkLinks er alltid gratis**, generert eller ikke.
- Du blir belastet **ved publisering**, ikke per forsøk. Å regenerere et utkast til du er fornøyd, øker ikke regningen — du betaler kun for innlegget du faktisk publiserer. Forsøk er ikke ubegrenset: hvert innlegg tillater rundt 10 regenereringer for bilder og 3 for video, noe som reflekterer hva det koster oss å produsere dem. Du vil se hvor mange du har igjen mens du jobber.
- På Partner API er en **hotell-dag** ett hotell priset for én natt — *ikke* én API-forespørsel. Et søk som returnerer 20 hoteller for 3 netter er 60 hotell-dager fra én enkelt forespørsel. Oppslags- og autofullfør-endepunkter er gratis og måles aldri.

### Slik aktiverer du det

Pay-as-you-go er som standard av. Alle får den gratis kvoten uten å gjøre noe.

For å gå utover kvoten må **eieren** av en konto aktivere pay-as-you-go og velge hvilke av sine kontoer som skal måles. Forbruk fra alle dine aktiverte kontoer samles i en **enkel månedlig faktura**, som du kan betale automatisk med kort eller motta som faktura for manuell betaling.

Når det er aktivert, måles forbruket ditt, men **aldri begrenses** — du vil ikke treffe noen grense for hvor mye du kan bruke hos oss.

:::note[Hvis du ikke aktiverer det]
Ingenting brytes og ingenting belastes. Du stopper bare ved den gratis kvoten for den måneden: genererte innlegg vil ikke publiseres, og Partner API-kall returnerer en `429` til kvoten nullstilles.
:::

### Faktureringsstatus

| Status | Hva det betyr |
| -- | -- |
| God standing | Alt fungerer som normalt. |
| Forfalt | En betaling feilet og forsøkes på nytt. Dine funksjoner fungerer fortsatt i denne perioden. |
| Suspendert | En faktura er ubetalt til fristens slutt. Fakturerbare handlinger blokkeres til den er betalt; gratis funksjoner fortsetter som normalt. |

:::tip[Live priser]
Enhetspriser og gratis kvoter vises alltid i Portal, direkte fra vårt faktureringssystem, slik at du kan sjekke dem før du binder deg til noe. Se [Billing](/no/portal/plan) for å aktivere pay-as-you-go, velge kontoer og følge månedlig forbruk og fakturaer. Se [Social](/no/portal/social/what-is-social) for hvordan postvolum påvirker hva du betaler.
:::

## Plattform-effekt

Til slutt, mens vi fortsetter å vokse i både størrelse og antall bookinger, ønsker vi å kunne dele noen av plattform-effektene med deg. Flere bookinger gir muligheter for volumrabatter fra vår betalingsprosessor. Fordi kortbehandling viderefaktureres til kostpris, går enhver besparelse vi forhandler direkte til hotellene.

Bli med i Wink i dag og oppdag en ny, lønnsom måte å drive virksomhet i reiselivsbransjen på!
