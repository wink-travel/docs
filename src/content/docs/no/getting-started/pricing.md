---
title: Prising
description: Det meste av Wink er gratis. Du betaler et lite gebyr per booking, og et forbruksbasert gebyr på noen få premiumfunksjoner.
sidebar:
  order: 4
---

Wink har ingen abonnementer, ingen seter og ingen oppstartsgebyrer. Det aller meste av plattformen er gratis, og det er bare to ting du noen gang betaler for:

1. **En liten prosentandel per booking** — bare når du faktisk tjener penger.
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
- **Consumer- og Booking Engine-APIer**, pluss oppslags- og autofullfør-endepunkter.

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

## Forbruk (pay-as-you-go)

Noen få funksjoner koster oss penger hver gang de brukes — generativ AI, tredjeparts sosiale APIer og levering av live-priser i stor skala. I stedet for å pakke disse inn i en månedlig plan du kanskje ikke bruker, betaler du kun for det du faktisk forbruker, og først etter at du har brukt opp en gratis månedlig kvote.

| Funksjon | Gratis per måned | Deretter | Faktureringsenhet |
| -- | -- | -- | -- |
| Sosialt innlegg — bilde | 1 | $1.50 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert bilde | 0 | $2.50 | Ett publisert innlegg |
| Sosialt innlegg — video | 0 | $4.00 | Ett publisert innlegg |
| Sosialt innlegg — AI-generert video | 0 | $14.00 | Ett publisert innlegg |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ett svar |
| Chatbot-svar | 5 | $0.05 | Ett svar |
| Partner-API | 10,000 | $0.0001 | Én hotell-dag |
| Partner Media API | 1,000 | $0.0005 | Én hotells media |

Prisene er i USD. Den gratis kvoten gis **per konto**, ikke per bruker, og nullstilles den 1. i hver måned (UTC).

### Hvordan innlegg prises

Innlegg prises etter hva de inneholder, fordi det er det som koster oss å lage dem. Et stillbilde er billig; en video er ikke; alt vi genererer med AI koster betydelig mer enn et bilde du selv har levert.

- **Den gratis kvoten dekker kun standard bildeinnlegg.** Du får ett slikt per konto per måned. Video- og AI-generert media faktureres fra første innlegg — det finnes ingen gratis kvote på disse nivåene, så en eiendom som legger ut video må regne med kostnad allerede i sin første måned.
- **Video vinner.** Hvis et innlegg inneholder video i det hele tatt, faktureres hele innlegget til videoprisen. Et innlegg som blander bilde og video er et videoinnlegg.
- **AI-opprinnelse bestemmer nivået.** Media du leverer — dine egne bilder og videoer, eller noe fra Wink-innholdsbiblioteket — faktureres til standardpris. Media vi genererer for deg faktureres til AI-pris.

### Hva som måles og ikke

- Kun et **generert** innlegg publisert til et tredjepartsnettverk (Facebook, Instagram) er fakturerbart. Et innlegg du har skrevet selv er gratis, uansett hvor det publiseres.
- **Publisering til WinkLinks er alltid gratis**, generert eller ikke.
- Du blir belastet **ved publisering**, ikke per forsøk. Å regenerere et utkast til du er fornøyd, øker ikke regningen — du betaler kun for innlegget du faktisk publiserer. Forsøk er ikke ubegrenset: hvert innlegg tillater rundt 10 regenereringer for bilder og 3 for video, noe som reflekterer hva det koster oss å produsere dem. Du vil se hvor mange du har igjen mens du jobber.
- På Partner-API er en **hotell-dag** ett hotell priset for én natt — *ikke* ett API-kall. Et søk som returnerer 20 hoteller for 3 netter er 60 hotell-dager fra én enkelt forespørsel. Oppslags- og autofullfør-endepunkter er gratis og måles aldri.
- På **Partner Media API** er en enhet ett hotell hvis media returneres til deg, uansett hvor mange bilder og videoer det er. En batch-forespørsel for 50 hoteller er 50 enheter — og hvis noen av hotellene ikke har media du har rett til å se, faktureres du kun for de som faktisk returnerte media.

### Eksempel: en OTA som cacher 90 dager med priser

Si at du er en OTA, en metasesøkeside eller en turoperatør, og du ønsker 90 dager med fremtidige priser for **1 000 hoteller**, hver med **4 masterpriser**.

**En full oppdatering av alt dette er 90 000 hotell-dager — $9,00.**

Det er 1 000 hoteller × 90 dager. De 4 masterprisene koster deg ingenting ekstra: én enkelt forespørsel returnerer alle prisplaner et hotell publiserer for den datoen, så antall prisplaner en eiendom har, er ikke en faktureringsdimensjon. Det er heller ikke hvordan du deler opp forespørselen — en periodeforespørsel dekker opptil 30 dager, så du vil gjøre 3 forespørsler per hotell, og 3 × 30 dager faktureres nøyaktig det samme som én 90-dagers forespørsel. Du faktureres for prisene du ba om, ikke for rørleggingen du ba det gjennom.

Så hva du betaler per måned kommer ned til ett spørsmål: hvor ofte oppdaterer du?

| Oppdateringsfrekvens | Hotell-dager / måned | Etter de 10 000 gratis | Månedskostnad |
| -- | -- | -- | -- |
| Én gang i måneden | 90 000 | 80 000 | **$8,00** |
| Ukentlig | 360 000 | 350 000 | **$35,00** |
| Daglig | 2 700 000 | 2 690 000 | **$269,00** |
| To ganger daglig | 5 400 000 | 5 390 000 | **$539,00** |

Å oppdatere alle 1 000 hoteller hver eneste dag er 3 000 forespørsler per dag og koster omtrent $9,00 per dag. Den gratis kvoten alene — 10 000 hotell-dager per måned — er nok til å prise omtrent 110 hoteller for hele 90 dager, eller til å bygge og teste en hel integrasjon uten å betale noe.

#### Hva som påvirker tallet

- **Å be om prisplaner én om gangen.** En periodeforespørsel returnerer den beste prisen per romtype på tvers av alle prisplaner samtidig. Hvis du filtrerer til én prisplan per forespørsel for å se alle fire separat, gjør du fire ganger så mange forespørsler og betaler fire ganger så mye.
- **Ekstra belegg, valutaer eller språk.** Prising for 1 voksen og prising for 2 voksne er to forskjellige spørsmål, og hver faktureres. Det samme gjelder for en ekstra visningsvaluta eller språk.
- **Ferskhet du ikke trenger.** Ingenting sier at alle 90 dagene fortjener samme oppdateringsfrekvens. Oppdater de neste 14 dagene daglig og dag 15–90 ukentlig, og de samme 1 000 hotellene koster **$71,40** i måneden i stedet for $269,00 — de nærmeste datoene, hvor prisene faktisk endres, holdes ferske.

### Slå det på

Forbruksbasert betaling er av som standard. Alle får den gratis kvoten uten å gjøre noe.

For å gå utover kvoten, må **eieren** av en konto aktivere pay-as-you-go og velge hvilke av sine kontoer som skal måles. Forbruk fra alle dine aktiverte kontoer samles i en **enkel månedlig faktura**, som du kan betale automatisk med kort eller motta som faktura for manuell betaling.

Når det er aktivert, måles forbruket ditt, men **aldri begrenses** — du vil ikke nå en grense for hvor mye du kan bruke hos oss.

:::note[Hvis du ikke aktiverer det]
Ingenting brytes og ingenting belastes. Du stopper bare ved den gratis kvoten for den måneden: genererte innlegg vil ikke publiseres, og Partner API-kall returnerer en `429` til kvoten nullstilles.
:::

### Faktureringsstatus

| Status | Hva det betyr |
| -- | -- |
| God standing | Alt fungerer som normalt. |
| Forfalt | En betaling feilet og prøves på nytt. Dine funksjoner fungerer fortsatt i denne perioden. |
| Suspendert | En faktura ble ikke betalt til fristen. Fakturerbare handlinger blokkeres til den er betalt; gratis funksjoner fortsetter som normalt. |

:::tip[Live priser]
Enhetspriser og gratis kvoter vises alltid i Portal, direkte fra vårt faktureringssystem, slik at du kan sjekke dem før du forplikter deg til noe. Se [Fakturering](/no/account/subscription) for å aktivere pay-as-you-go, velge kontoer og følge med på forbruk og fakturaer måned til dato. Se [Sosialt](/no/portal/social/what-is-social) for hvordan volum av innlegg påvirker hva du bruker.
:::

## Plattform-effekt

Til slutt, mens vi fortsetter å vokse både i størrelse og antall bookinger, ønsker vi å kunne dele noen av plattform-effektene med deg. Flere bookinger gir muligheter for volumrabatter fra vår betalingsgateway, noe som vil gjøre det mulig for oss å senke behandlingsgebyret for alle.

Bli med i Wink i dag og oppdag en ny, lønnsom måte å drive virksomhet i reiselivsbransjen på!
