---
title: Prising
description: Det meste av Wink er gratis. Du betaler en liten avgift per booking, og en bruk-basert avgift på noen få premiumfunksjoner.
sidebar:
  order: 4
---

Wink har ingen abonnementer, ingen seter og ingen oppstartsavgifter. Det aller meste av plattformen er gratis, og det er bare to ting du noen gang betaler for:

1. **En liten prosentandel per booking** — kun når du faktisk tjener penger.
2. **Bruk-basert avgift** — på noen få premiumfunksjoner som koster oss penger hver gang de brukes, hver med en gratis månedlig kvote.

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

Wink støtter både merchant- og agentmodellen.

### Modell 1

Wink er merchant of record når bookingen skjer. Wink er ansvarlig for midlene og innehar alle nødvendige lisenser for å drive et reisebyrå.  
Denne modellen gjelder for 95 % av alle bookinger.

Wink tar `5,5 % per booking` for å vedlikeholde plattformen.  
Det meste av dette går til betalingsgatewayen (Visa, MasterCard osv.). En gjennomsnittlig booking koster oss `2,95 %` å erverve; noen ganger så mye som `3,6 %`. Delvise refusjoner koster oss mer siden betalingsgatewayen ser dette som en ny transaksjon.  
Vi ønsker å være helt åpne om prisingen nå for å spare alle tid før man prøver å forhandle frem ytterligere rabatter uten å ha brukt Wink. Vår prismodell er mer enn rettferdig, og vi må også tjene til livets opphold.

#### Fordeling

:::note[Behandlingsgebyr]
Wink tar et behandlingsgebyr på 1,5 % per booking. Dette dekker vedlikehold av plattformen og gjør at vi kan gi bort alt som er listet ovenfor.
:::

:::note[Betalingsgebyr]
TripPay tar et betalingsgebyr på 4,0 % per booking. Dette dekker innkrevingen av betalingen fra reisende.
:::

:::note[Utbetaling av midler]
Det påløper gebyrer for å sende midler til din konto. Dette avhenger av utbetalingsmetoden du velger. Vi støtter for øyeblikket:

- **Bankoverføring** Kostnaden avhenger av landet du befinner deg i og hvor midlene sendes fra. Vi inkluderer en kalkulator for pristilbud som du kan bruke når du har tilgjengelige midler på kontoen din.

Hvis du ønsker at vi skal støtte en annen utbetalingsmetode, send oss en e-post.
:::

### Modell 2

Denne modellen er kun tilgjengelig for reisebyråer som har reisebyrålisens i sin region og som ønsker å være merchant of record. Noen av våre registrerte reisebyråer ønsker å være ansvarlige for håndtering av betaling og utbetaling av midler til hoteller. Under denne modellen er de ansvarlige for midlene og innehar nødvendige lisenser for å operere i sitt land.

#### Fordeling

:::note[Behandlingsgebyr]
Wink tar et behandlingsgebyr på 1,5 % per booking. Dette dekker vedlikehold av plattformen og gjør at vi kan gi bort alt som er listet ovenfor.
:::

Ved bruk av denne modellen betaler reisebyråene kun Winks behandlingsgebyr, og Wink fakturerer reisebyrået månedlig.

## Bruk (pay-as-you-go)

Noen få funksjoner koster oss penger hver gang de brukes — generativ AI, tredjeparts sosiale API-er og levering av live-priser i stor skala. I stedet for å pakke disse inn i en månedlig plan du kanskje ikke bruker, betaler du kun for det du faktisk forbruker, og først etter at du har brukt opp en gratis månedlig kvote.

| Funksjon | Gratis per måned | Deretter | Faktureringsenhet |
| -- | -- | -- | -- |
| Sosialt innlegg — bilde | 1 | $1.50 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert bilde | 0 | $2.50 | Ett publisert innlegg |
| Sosialt innlegg — AI-forbedret video | 0 | $4.00 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert video | 0 | $14.00 | Ett publisert innlegg |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ett svar |
| Chatbot-svar | 5 | $0.05 | Ett svar |
| Partner API | 10 000 | $0.0001 | Én hotell-dag |

Prisene er i USD. Den gratis kvoten gis **per konto**, ikke per bruker, og nullstilles den 1. i hver måned (UTC).

### Hvordan innlegg prises

Innlegg prises etter hva de inneholder, fordi det er det som koster oss å lage dem. Et stillbilde er billig; en video er ikke; alt vi genererer med AI koster betydelig mer enn et bilde du selv har levert.

- **Den gratis kvoten dekker kun standard bildeinnlegg.** Du får ett slikt per konto per måned. Video-innlegg og AI-generert media faktureres fra første innlegg — det finnes ingen gratis kvote på disse nivåene, så en eiendom som poster video må regne med en kostnad i sin første måned.
- **Video vinner.** Hvis et innlegg inneholder video i det hele tatt, faktureres hele innlegget til videoprisen. Et innlegg som blander bilde og video er et video-innlegg.
- **AI-opprinnelse bestemmer nivået.** Media du leverer — dine egne bilder og videoer, eller noe fra ditt Wink-innholdsbibliotek — faktureres til standard pris. Media vi genererer for deg faktureres til AI-pris.

### Hva som måles og ikke måles

- Kun et **generert** innlegg publisert til et tredjepartsnettverk (Facebook, Instagram) er fakturerbart. Et innlegg du har skrevet selv er gratis, uansett hvor det publiseres.
- **Publisering til WinkLinks er alltid gratis**, generert eller ikke.
- Du blir belastet **ved publisering**, ikke per forsøk. Å regenerere et utkast til du er fornøyd, øker ikke regningen — du betaler kun for innlegget du faktisk publiserer. Forsøk er ikke ubegrenset: hvert innlegg tillater rundt 10 regenereringer for bilder og 3 for video, noe som reflekterer hva det koster oss å produsere dem. Du vil se hvor mange du har igjen mens du jobber.
- På Partner API er en **hotell-dag** ett hotell priset for én natt — *ikke* ett API-kall. Et søk som returnerer 20 hoteller for 3 netter er 60 hotell-dager fra én enkelt forespørsel. Oppslags- og autofullfør-endepunkter er gratis og måles aldri.

### Slik aktiverer du det

Pay-as-you-go er som standard av. Alle får den gratis kvoten uten å gjøre noe.

For å gå utover kvoten må **eieren** av en konto aktivere pay-as-you-go og velge hvilke av sine kontoer som skal måles. Bruk fra alle dine aktiverte kontoer samles i en **enkel månedlig faktura**, som du kan betale automatisk med kort eller motta som faktura for manuell betaling.

Når det er aktivert, måles bruken din, men **aldri begrenses** — du vil ikke treffe noen grense for hvor mye du kan bruke hos oss.

:::note[Hvis du ikke aktiverer det]
Ingenting brytes og ingenting belastes. Du stopper bare ved den gratis kvoten for den måneden: genererte innlegg vil ikke publiseres og Partner API-kall returnerer en `429` til kvoten nullstilles.
:::

### Faktureringsstatus

| Status | Hva det betyr |
| -- | -- |
| God standing | Alt fungerer som normalt. |
| Forfalt | En betaling feilet og forsøkes på nytt. Dine funksjoner fungerer fortsatt i denne perioden. |
| Suspendert | En faktura ble ikke betalt innen fristen. Fakturerbare handlinger blokkeres til den er betalt; gratis funksjoner fortsetter som normalt. |

:::tip[Live priser]
Enhetspriser og gratis kvoter vises alltid i Portal, direkte fra vårt faktureringssystem, slik at du kan sjekke dem før du binder deg til noe. Se [Billing](/no/account/subscription) for å aktivere pay-as-you-go, velge kontoer og følge måned-til-dato bruk og fakturaer. Se [Social](/no/portal/social/what-is-social) for hvordan postvolum påvirker hva du bruker.
:::

## Plattform-effekt

Til slutt, etter hvert som vi vokser i både størrelse og antall bookinger, ønsker vi å kunne dele noen av plattform-effektene med deg. Flere bookinger gir muligheter for volumrabatter fra vår betalingsgateway, noe som vil gjøre det mulig for oss å senke behandlingsgebyret for alle.

Bli med i Wink i dag og oppdag en ny, lønnsom måte å drive virksomhet i reiselivsbransjen på!
