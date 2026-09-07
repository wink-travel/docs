---
title: Prissättning
description: Största delen av Wink är gratis. Du betalar en liten avgift per bokning och en pay-as-you-go-avgift för användning av ett fåtal premiumfunktioner.
sidebar:
  order: 4
---

Wink har inga prenumerationer, inga platser och inga installationsavgifter. Den stora majoriteten av plattformen är gratis, och det finns bara två saker du någonsin betalar för:

1. **En liten procentandel per bokning** — endast när du faktiskt tjänar pengar.
2. **Pay-as-you-go-användningsavgifter** — på några premiumfunktioner som kostar oss pengar varje gång de används, var och en med en gratis månadsgräns.

## Vad som är gratis

Dessa kostar ingenting, för alltid, utan någon gräns och utan mätning:

- **Bokningsmotorn** — på din egen webbplats, på din WinkLinks-sida eller var som helst du bäddar in den.
- **Fastighetshantering** — innehåll, foton, priser, prisplaner, tillgänglighet, kampanjer och policyer.
- **Affiliate-verktyg** — delbara länkar, kuraterade listor, rutnät, kartor, kort och inbäddningsbara widgets.
- **Resebyråverktyg** — sökning, skräddarsydda priser och bokning för dina kunders räkning.
- **WinkLinks** — gör anspråk på din vanity-URL, bygg din sida och publicera så ofta du vill.
- **Manuella sociala inlägg** — allt du skriver själv, på vilket anslutet nätverk som helst.
- **Analys, topplistor, anspråk, inställningar** och kontohantering.
- **Consumer och Booking Engine APIs**, plus sök- och autokompletteringsendpoints.

## Bokningar

Wink stödjer både merchant- och agentmodellerna.

### Modell 1

Wink är registrerad handlare vid tidpunkten för bokningen. Wink ansvarar för medlen och innehar alla nödvändiga licenser för att driva en resebyrå.  
Denna modell gäller för 95 % av alla bokningar.

Wink tar ut `5,5 % per bokning` för att underhålla plattformen.  
Största delen går till betalningsgatewayen (Visa, MasterCard etc). En genomsnittlig bokning kostar oss `2,95 %` att förvärva; ibland upp till `3,6 %`. Delåterbetalningar kostar oss ytterligare eftersom betalningsgatewayen ser detta som en ny avgift.  
Vi vill vara helt transparenta med prissättningen nu för att spara tid för alla innan man försöker förhandla fram ytterligare rabatter utan att ha använt Wink. Vår prismodell är mer än rättvis och vi behöver också kunna leva på det.

#### Uppdelning

:::note[Behandlingsavgift]
Wink tar ut en behandlingsavgift på 1,5 % per bokning. Detta täcker plattformsunderhåll och gör att vi kan erbjuda allt som listas ovan gratis.
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
Wink tar ut en behandlingsavgift på 1,5 % per bokning. Detta täcker plattformsunderhåll och gör att vi kan erbjuda allt som listas ovan gratis.
:::

Med denna modell betalar resebyråerna endast Winks behandlingsavgift och Wink fakturerar resebyrån månadsvis.

## Användning (pay-as-you-go)

Några funktioner kostar oss pengar varje gång de används — generativ AI, tredjeparts sociala API:er och att leverera live-priser i stor skala. Istället för att bunta ihop dessa i en månadsplan som du kanske inte använder, betalar du bara för det du faktiskt förbrukar, och först efter att du använt upp en gratis månadsgräns.

| Funktion | Gratis per månad | Därefter | Faktureringsenhet |
| -- | -- | -- | -- |
| Socialt inlägg — bild | 1 | $1.50 | Ett publicerat inlägg |
| Socialt inlägg — AI-genererad bild | 0 | $2.50 | Ett publicerat inlägg |
| Socialt inlägg — AI-förbättrad video | 0 | $4.00 | Ett publicerat inlägg |
| Socialt inlägg — AI-genererad video | 0 | $14.00 | Ett publicerat inlägg |
| AI-svar på kommentar eller DM | 5 | $0.05 | Ett svar |
| Chatbot-svar | 5 | $0.05 | Ett svar |
| Partner API | 10,000 | $0.0001 | En hotell-dag |

Priserna är i USD. Den fria gränsen ges **per konto**, inte per användare, och återställs den 1:a varje månad (UTC).

### Hur inlägg prissätts

Inlägg prissätts efter vad de innehåller, eftersom det är vad de kostar oss att skapa. En stillbild är billig; en video är inte; allt vi genererar med AI kostar avsevärt mer än ett foto du själv tillhandahållit.

- **Den fria gränsen täcker endast standardbildsinlägg.** Du får ett sådant per konto och månad. Videoinlägg och AI-genererat media debiteras från första inlägget — det finns ingen gratisgräns för dessa nivåer, så en fastighet som postar video bör räkna med en avgift redan första månaden.
- **Video vinner.** Om ett inlägg innehåller någon video alls, debiteras hela inlägget till videopriset. Ett inlägg som blandar bild och video räknas som ett videoinlägg.
- **AI-ursprung bestämmer nivån.** Media du tillhandahåller — dina egna foton och videor, eller något från ditt Wink-innehållsbibliotek — debiteras till standardpris. Media vi genererar åt dig debiteras till AI-pris.

### Vad som mäts och inte mäts

- Endast ett **genererat** inlägg publicerat på ett tredjepartsnätverk (Facebook, Instagram) är debiterbart. Ett inlägg du skrivit själv är gratis, oavsett var det publiceras.
- **Publicering till WinkLinks är alltid gratis**, genererat eller inte.
- Du debiteras **vid publicering**, inte per försök. Att regenerera ett utkast tills du är nöjd lägger inte till på din faktura — du betalar en gång för det inlägg du faktiskt skickar. Försök är dock inte obegränsade: varje inlägg tillåter cirka 10 regenereringar för bilder och 3 för video, vilket speglar vad det kostar oss att producera dem. Du ser hur många du har kvar medan du arbetar.
- På Partner API är en **hotell-dag** ett hotell prissatt för en natt — *inte* ett API-anrop. En sökning som returnerar 20 hotell för en 3-nätters vistelse är 60 hotell-dagar från en enda förfrågan. Sök- och autokompletteringsendpoints är gratis och mäts aldrig.

### Att aktivera det

Pay-as-you-go är avstängt som standard. Alla får den fria gränsen utan att göra något.

För att gå utöver gränsen aktiverar **kontots ägare** pay-as-you-go och väljer vilka av sina konton som ska mätas. Användning från alla dina aktiverade konton samlas i en **enkel månadsfaktura**, som du kan betala automatiskt med kort eller få som faktura att betala själv.

När det är aktiverat mäts din användning men **begränsas aldrig** — du kommer inte att träffa någon gräns för hur mycket du kan spendera hos oss.

:::note[Om du inte aktiverar det]
Inget går sönder och inget debiteras. Du stannar helt enkelt vid den fria gränsen för den månaden: genererade inlägg publiceras inte och Partner API-anrop returnerar en `429` tills gränsen återställs.
:::

### Faktureringsstatus

| Status | Vad det betyder |
| -- | -- |
| God status | Allt fungerar normalt. |
| Förfallen | En betalning misslyckades och försöks igen. Dina funktioner fortsätter fungera under denna period. |
| Avstängd | En faktura har inte betalats i tid. Debiterbara åtgärder blockeras tills den är reglerad; gratisfunktioner fortsätter som vanligt. |

:::tip[Live-priser]
Enhetspriser och fria gränser visas alltid i Portal, direkt från vårt faktureringssystem, så att du kan kontrollera dem innan du binder dig till något. Se [Billing](/sv/portal/plan) för att aktivera pay-as-you-go, välja dina konton och följa månadens användning och fakturor. Se [Social](/sv/portal/social/what-is-social) för hur inläggsvolym påverkar dina kostnader.
:::

## Plattformseffekt

Slutligen, när vi fortsätter att växa både i storlek och bokningar, vill vi kunna dela några av plattformseffekterna med dig. Fler bokningar ger möjligheter till volymrabatter från vår betalningsgateway, vilket skulle göra det möjligt för oss att sänka vår behandlingsavgift för alla.

Gå med i Wink idag och upptäck ett nytt, lönsamt sätt att bedriva verksamhet inom hotell- och besöksnäringen!
