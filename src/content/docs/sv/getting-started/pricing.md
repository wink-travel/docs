---
title: Prissättning
description: Största delen av Wink är gratis. Du betalar en liten avgift per bokning och en användningsavgift efter förbrukning för ett fåtal premiumfunktioner.
sidebar:
  order: 4
---

Wink har inga prenumerationer, inga platser och inga startavgifter. Den stora majoriteten av plattformen är gratis, och det finns bara två saker du någonsin betalar för:

1. **En liten procentandel per bokning** — endast när du faktiskt tjänar pengar.
2. **Användningsavgifter efter förbrukning** — på några premiumfunktioner som kostar oss pengar varje gång de används, var och en med en gratis månadsgräns.

## Vad som är gratis

Dessa kostar ingenting, för alltid, utan någon gräns och utan mätning:

- **Bokningsmotorn** — på din egen webbplats, på din WinkLinks-sida eller var som helst du bäddar in den.
- **Fastighetshantering** — innehåll, foton, priser, prisplaner, tillgänglighet, kampanjer och policyer.
- **Affiliate-verktyg** — delbara länkar, kuraterade listor, rutnät, kartor, kort och bäddbara widgets.
- **Resebyråverktyg** — sökning, skräddarsydda priser och bokning för dina kunders räkning.
- **WinkLinks** — gör anspråk på din vanity-URL, bygg din sida och publicera så ofta du vill.
- **Manuella sociala inlägg** — allt du skriver själv, på vilket anslutet nätverk som helst.
- **Analys, topplistor, anspråk, inställningar** och kontohantering.
- **Consumer och Booking Engine APIs**, plus uppslags- och autokompletteringsendpoints.

## Bokningar

Wink stödjer både merchant- och agentmodellerna.

### Modell 1

Wink är registrerad handlare vid tidpunkten för bokningen. Wink ansvarar för medlen och innehar alla nödvändiga licenser för att driva en resebyrå.
Denna modell gäller för 95 % av alla bokningar.

Wink tar ut `5,5 % per bokning` för att underhålla plattformen.
Största delen går till betalningsgatewayen (Visa, MasterCard etc.). En genomsnittlig bokning kostar oss `2,95 %` att förvärva; ibland upp till `3,6 %`. Delåterbetalningar kostar oss ytterligare eftersom betalningsgatewayen ser detta som en ny avgift.
Vi vill vara helt transparenta med prissättningen nu för att spara tid för alla innan man försöker förhandla fram ytterligare rabatter utan att ha använt Wink. Vår prismodell är mer än rättvis och vi behöver också kunna leva på det.

#### Uppdelning

:::note[Behandlingsavgift]
Wink tar ut en behandlingsavgift på 1,5 % per bokning. Detta täcker plattformsunderhåll och är vad som gör att vi kan erbjuda allt ovan gratis.
:::

:::note[Betalningsavgift]
TripPay tar ut en betalningsavgift på 4,0 % per bokning. Detta täcker förvärv av betalningen från resenären.
:::

:::note[Utbetalning av medel]
Det finns avgifter förknippade med att skicka medel till ditt konto. Detta beror på vilken utbetalningsmetod du väljer. Vi stödjer för närvarande:

- **Banköverföring** Kostnaden beror på vilket land du befinner dig i och varifrån medlen skickas. Vi inkluderar en offertkalkylator som du kan använda när du har tillgängliga medel på ditt konto.

Om du vill att vi ska stödja en annan utbetalningsmetod, skicka ett e-postmeddelande till oss.
:::

### Modell 2

Denna modell är endast tillgänglig för resebyråer som innehar resebyrålicens i sin region och som önskar vara registrerad handlare. Vissa av våra registrerade resebyråer vill själva hantera betalningen och utbetalning av medel till hotell. Under denna modell ansvarar de för medlen och innehar nödvändiga licenser för att verka i sitt land.

#### Uppdelning

:::note[Behandlingsavgift]
Wink tar ut en behandlingsavgift på 1,5 % per bokning. Detta täcker plattformsunderhåll och är vad som gör att vi kan erbjuda allt ovan gratis.
:::

Med denna modell betalar resebyråerna endast Winks behandlingsavgift och Wink fakturerar resebyrån månadsvis.

## Användning (pay-as-you-go)

Några funktioner kostar oss pengar varje gång de används — generativ AI, tredjeparts sociala API:er och att leverera live-priser i stor skala. Istället för att bunta ihop dessa i en månadsplan som du kanske inte använder, betalar du bara för det du faktiskt förbrukar, och först efter att du använt upp en gratis månadsgräns.

| Funktion | Gratis per månad | Därefter | Faktureringsenhet |
| -- | -- | -- | -- |
| Socialt inlägg — bild | 1 | $1.50 | Ett publicerat inlägg |
| Socialt inlägg — AI-genererad bild | 0 | $2.50 | Ett publicerat inlägg |
| Socialt inlägg — video | 0 | $4.00 | Ett publicerat inlägg |
| Socialt inlägg — AI-genererad video | 0 | $14.00 | Ett publicerat inlägg |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ett svar |
| Chatbot-svar | 5 | $0.05 | Ett svar |
| Partner API | 10,000 | $0.0001 | En hotell-dag |
| Partner Media API | 1,000 | $0.0005 | En hotells media |

Priserna är i USD. Den fria gränsen ges **per konto**, inte per användare, och återställs den 1:a varje månad (UTC).

### Hur inlägg prissätts

Inlägg prissätts efter vad de innehåller, eftersom det är vad de kostar oss att skapa. En stillbild är billig; en video är inte; allt vi genererar med AI kostar avsevärt mer än ett foto du själv tillhandahållit.

- **Den fria gränsen täcker endast standardbildsinlägg.** Du får ett sådant per konto och månad. Videoinlägg och AI-genererat media debiteras från första inlägget — det finns ingen gratisgräns för dessa nivåer, så en fastighet som postar video bör räkna med en avgift redan första månaden.
- **Video vinner.** Om ett inlägg innehåller någon video alls, debiteras hela inlägget till videopriset. Ett inlägg som blandar bild och video räknas som ett videoinlägg.
- **AI-ursprung bestämmer nivån.** Media du tillhandahåller — dina egna foton och videor, eller något från ditt Wink-innehållsbibliotek — debiteras till standardpris. Media vi genererar åt dig debiteras till AI-pris.

### Vad som mäts och inte mäts

- Endast ett **genererat** inlägg publicerat på ett tredjepartsnätverk (Facebook, Instagram) är debiterbart. Ett inlägg du skrivit själv är gratis, oavsett var det publiceras.
- **Publicering till WinkLinks är alltid gratis**, genererat eller inte.
- Du debiteras **vid publicering**, inte per försök. Att generera om ett utkast tills du är nöjd ökar inte din faktura — du betalar en gång för det inlägg du faktiskt skickar. Försök är dock inte obegränsade: varje inlägg tillåter cirka 10 omgenereringar för bilder och 3 för video, vilket speglar vad det kostar oss att producera dem. Du ser hur många du har kvar medan du arbetar.
- På Partner API är en **hotell-dag** ett hotell prissatt för en natt — *inte* ett API-anrop. En sökning som returnerar 20 hotell för en 3-nätters vistelse är 60 hotell-dagar från en enda förfrågan. Uppslags- och autokompletteringsendpoints är gratis och mäts aldrig.
- På **Partner Media API** är en enhet ett hotell vars media returneras till dig, oavsett hur många foton och videor det blir. En batchförfrågan för 50 hotell är 50 enheter — och om några av dessa hotell inte har något du har rätt att se, debiteras du bara för de som faktiskt returnerade media.

### Exempel: en OTA som cachar 90 dagars prissättning

Säg att du är en OTA, en metasearch-sida eller en researrangör, och du vill ha 90 dagars framåtblickande prissättning för **1 000 hotell**, var och en med **4 masterpriser**.

**En fullständig uppdatering av allt detta är 90 000 hotell-dagar — $9.00.**

Det är 1 000 hotell × 90 dagar. De 4 masterpriserna kostar dig inget extra: en enda förfrågan returnerar varje prisplan ett hotell publicerar för det datumintervallet, så antalet prisplaner en fastighet har är inte en faktureringsdimension. Inte heller hur du delar upp förfrågan — en periodförfrågan täcker upp till 30 dagar, så du skulle göra 3 förfrågningar per hotell, och 3 × 30 dagar faktureras exakt lika mycket som en 90-dagarsförfrågan. Du debiteras för den prissättning du efterfrågat, inte för infrastrukturen du frågat igenom.

Så vad du betalar per månad kommer ner till en fråga: hur ofta uppdaterar du?

| Uppdateringsfrekvens | Hotell-dagar / månad | Efter de 10 000 gratis | Månadskostnad |
| -- | -- | -- | -- |
| En gång i månaden | 90 000 | 80 000 | **$8.00** |
| Veckovis | 360 000 | 350 000 | **$35.00** |
| Dagligen | 2 700 000 | 2 690 000 | **$269.00** |
| Två gånger om dagen | 5 400 000 | 5 390 000 | **$539.00** |

Att uppdatera alla 1 000 hotell varje dag är 3 000 förfrågningar per dag och kostar ungefär $9.00 per dag. Den fria gränsen på 10 000 hotell-dagar per månad räcker för att prissätta ungefär 110 hotell för hela 90 dagar, eller för att bygga och testa en hel integration utan kostnad.

#### Vad som påverkar det numret

- **Att fråga efter prisplaner en i taget.** En periodförfrågan returnerar det bästa priset per rumstyp över alla prisplaner samtidigt. Om du filtrerar till en prisplan per förfrågan för att se alla fyra separat, gör du fyra gånger så många förfrågningar och betalar fyra gånger så mycket.
- **Extra beläggningar, valutor eller språk.** Prissättning för 1 vuxen och prissättning för 2 vuxna är två olika frågor, och var och en debiteras. Detsamma gäller för en andra visningsvaluta eller språk.
- **Färskhet du inte behöver.** Inget säger att alla 90 dagar förtjänar samma uppdateringsfrekvens. Uppdatera de närmaste 14 dagarna dagligen och dag 15–90 veckovis så kostar samma 1 000 hotell **$71.40** per månad istället för $269.00 — de närmaste datumen, där priserna faktiskt ändras, hålls färska.

### Att aktivera det

Pay-as-you-go är avstängt som standard. Alla får den fria gränsen utan att göra något.

För att gå utöver gränsen aktiverar **kontots ägare** pay-as-you-go och väljer vilka av sina konton som ska mätas. Användning från alla dina aktiverade konton samlas i en **enkel månadsfaktura**, som du kan betala automatiskt med kort eller få som faktura att betala själv.

När det är aktiverat mäts din användning men **begränsas aldrig** — du kommer inte att träffa någon hastighetsgräns för att spendera pengar hos oss.

:::note[Om du inte aktiverar det]
Inget går sönder och inget debiteras. Du stannar helt enkelt vid den fria gränsen för den månaden: genererade inlägg publiceras inte och Partner API-anrop returnerar en `429` tills gränsen återställs.
:::

### Faktureringsstatus

| Status | Vad det betyder |
| -- | -- |
| God status | Allt fungerar normalt. |
| Förfallen | En betalning misslyckades och försöker igen. Dina funktioner fortsätter fungera under denna period. |
| Avstängd | En faktura har inte betalats i tid. Fakturerbara åtgärder blockeras tills den är reglerad; gratisfunktioner fortsätter som vanligt. |

:::tip[Live-priser]
Enhetspriser och fria gränser visas alltid i Portal, direkt från vårt faktureringssystem, så att du kan kontrollera dem innan du binder dig till något. Se [Billing](/sv/account/subscription) för att aktivera pay-as-you-go, välja dina konton och följa månadens användning och fakturor. Se [Social](/sv/portal/social/what-is-social) för hur inläggsvolym påverkar dina kostnader.
:::

## Plattformseffekt

Slutligen, när vi fortsätter att växa både i storlek och bokningar, vill vi kunna dela några av plattformseffekterna med dig. Fler bokningar ger möjligheter till volymrabatter från vår betalningsgateway, vilket skulle göra det möjligt för oss att sänka vår behandlingsavgift för alla.

Gå med i Wink idag och upptäck ett nytt, lönsamt sätt att bedriva verksamhet inom hotell- och besöksnäringen!
