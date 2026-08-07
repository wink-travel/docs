---
title: Hinnoittelu
description: Suurin osa Winkistä on ilmaista. Maksat pienen maksun per varaus ja käytön mukaan veloitettavan maksun muutamista premium-ominaisuuksista.
sidebar:
  order: 4
---

Winkissä ei ole tilauksia, paikkoja tai aloitusmaksuja. Suurin osa alustasta on ilmaista, ja maksat vain kahdesta asiasta:

1. **Pieni prosenttiosuus per varaus** — vain silloin, kun teet oikeasti rahaa.
2. **Käytön mukaan veloitettavat maksut** — muutamista premium-ominaisuuksista, jotka maksavat meille rahaa joka kerta, kun niitä käytetään, jokaisella on ilmainen kuukausittainen kiintiö.

## Mikä on ilmaista

Nämä eivät maksa mitään, ikuisesti, ilman kiintiötä tai mittausta:

- **Varauskone** — omalla sivustollasi, WinkLinks-sivullasi tai missä tahansa muualla, johon upotat sen.
- **Kiinteistöhallinta** — sisältö, valokuvat, hinnat, hintasuunnitelmat, saatavuus, kampanjat ja säännöt.
- **Affiliate-työkalut** — jaettavat linkit, kuratoidut listat, ruudukot, kartat, kortit ja upotettavat widgetit.
- **Matkatoimiston työkalut** — haku, räätälöidyt hinnat ja varaaminen asiakkaidesi puolesta.
- **WinkLinks** — varaa oma vanity-URL-osoitteesi, rakenna sivusi ja julkaise niin usein kuin haluat.
- **Manuaaliset somejulkaisut** — kaikki, mitä kirjoitat itse, millä tahansa yhdistetyllä verkostolla.
- **Analytiikka, tulostaulut, vaatimukset, asetukset** ja tilinhallinta.
- **Kuluttaja- ja varausteknologia-API:t**, sekä hakemisto- ja automaattitäydennysrajapinnat.

## Varaukset

Wink tukee sekä kauppias- että agenttimallia.

### Malli 1

Wink on kauppias varauksen tapahtuessa. Wink vastaa varoista ja kantaa kaikki tarvittavat matkatoimistoluvat.
Tämä malli koskee 95 % kaikista varauksista.

Wink veloittaa `5,5 % per varaus` alustan ylläpidosta.
Suurin osa tästä menee maksunvälittäjälle (Visa, MasterCard jne.). Keskimääräinen varaus maksaa meille `2,95 %`; joskus jopa `3,6 %`. Osittaiset hyvitykset aiheuttavat lisäkustannuksia, koska maksunvälittäjä käsittelee ne uutena maksuna.
Haluamme olla täysin läpinäkyviä hinnoittelussa nyt, jotta säästämme kaikkien aikaa ennen kuin yritetään neuvotella lisäalennuksia ennen Winkin käyttöä. Hinnoittelumallimme on enemmän kuin reilu ja meidänkin on ansaittava elanto.

#### Erittely

:::note[Käsittelymaksu]
Wink veloittaa 1,5 % käsittelymaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa kaiken yllä mainitun tarjoamisen ilmaiseksi.
:::

:::note[Maksumaksu]
TripPay veloittaa 4,0 % maksumaksun per varaus. Tämä kattaa maksun vastaanottamisen matkustajalta.
:::

:::note[Varojen siirto]
Tilillesi lähetettävistä varoista peritään maksuja. Tämä riippuu valitsemastasi maksutavasta. Tällä hetkellä tuemme:

- **Pankkisiirto** Maksu riippuu maasta, jossa olet ja mistä varat lähetetään. Tarjoamme hintalaskurin, jota voit käyttää, kun tililläsi on käytettävissä varoja.

Jos haluat, että tuemme toisen maksutavan, lähetä meille sähköpostia.
:::

### Malli 2

Tämä malli on saatavilla vain matkatoimistoille, joilla on matkatoimistolupa alueellaan ja jotka haluavat olla kauppiaita. Jotkut rekisteröidyt matkatoimistomme haluavat vastata maksujen käsittelystä ja varojen jakamisesta hotelleille. Tässä mallissa he vastaavat varoista ja kantavat tarvittavat luvat toimia maassaan.

#### Erittely

:::note[Käsittelymaksu]
Wink veloittaa 1,5 % käsittelymaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa kaiken yllä mainitun tarjoamisen ilmaiseksi.
:::

Tässä mallissa matkatoimistot maksavat vain Winkille käsittelymaksun, ja Wink laskuttaa matkatoimistoa kuukausittain.

## Käyttö (pay-as-you-go)

Muutamat ominaisuudet maksavat meille rahaa joka kerta, kun niitä käytetään — generatiivinen tekoäly, kolmansien osapuolien some-API:t ja reaaliaikainen hinnoittelu suuressa mittakaavassa. Sen sijaan, että nämä sisällytettäisiin kuukausimaksuun, jota et välttämättä käytä, maksat vain siitä, mitä todella kulutat, ja vasta kun olet käyttänyt ilmaisen kuukausikiintiön.

| Ominaisuus | Ilmainen kuukaudessa | Sen jälkeen | Laskutusyksikkö |
| -- | -- | -- | -- |
| Somejulkaisu — kuva | 1 | $1.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma kuva | 0 | $2.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — video | 0 | $4.00 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma video | 0 | $14.00 | Yksi julkaistu julkaisu |
| Tekoälyvastaus kommenttiin tai yksityisviestiin | 5 | $0.05 | Yksi vastaus |
| Chatbot-vastaus | 5 | $0.05 | Yksi vastaus |
| Partner API | 10,000 | $0.0001 | Yksi hotelli-päivä |
| Partner Media API | 1,000 | $0.0005 | Yhden hotellin media |

Hinnat ovat USD. Ilmainen kiintiö myönnetään **tiliä kohden**, ei käyttäjää kohden, ja se nollautuu kuukauden ensimmäisenä päivänä (UTC).

### Miten julkaisut hinnoitellaan

Julkaisut hinnoitellaan niiden sisällön mukaan, koska se on meille kustannus niiden tekemisessä. Staattinen kuva on halpa; video ei ole; kaikki tekoälyllä tuotettu maksaa huomattavasti enemmän kuin itse toimittamasi valokuva.

- **Ilmainen kiintiö kattaa vain tavalliset kuvajulkaisut.** Saat yhden tällaisen per tili kuukaudessa. Videot ja tekoälyn luoma media veloitetaan heti ensimmäisestä julkaisusta — näillä tasoilla ei ole ilmaista kiintiötä, joten kiinteistön, joka julkaisee videoita, tulee odottaa maksua jo ensimmäiseltä kuukaudelta.
- **Video voittaa.** Jos julkaisussa on lainkaan videota, koko julkaisu veloitetaan videohinnan mukaan. Julkaisu, jossa on sekä kuva että video, on videopostaus.
- **Tekoälyn alkuperä määrittää tason.** Sinun toimittamasi media — omat valokuvasi ja videosi tai mikä tahansa Wink-sisältökirjastostasi — veloitetaan normaalihinnalla. Meidän tuottamamme media veloitetaan tekoälyhinnalla.

### Mikä mitataan ja mikä ei

- Vain **generoitu** julkaisu, joka julkaistaan kolmannen osapuolen verkostoon (Facebook, Instagram), on laskutettava. Itse kirjoittamasi julkaisu on ilmainen, minne tahansa se meneekin.
- **Julkaiseminen WinkLinksiin on aina ilmaista**, generoitu tai ei.
- Sinulta veloitetaan **julkaisun yhteydessä**, ei yritystä kohden. Luonnoksen uudelleenluonti, kunnes olet tyytyväinen, ei lisää laskutusta — maksat kerran siitä julkaisusta, jonka oikeasti lähetät. Yritykset eivät ole rajattomia: jokainen julkaisu sallii noin 10 uudelleenluontia kuville ja 3 videoille, mikä vastaa niiden tuottamisen kustannuksia. Näet jäljellä olevien määrän työskennellessäsi.
- Partner API:ssa **hotelli-päivä** tarkoittaa yhtä hotellia yhden yön majoituksella — *ei* yhtä API-kutsua. Haku, joka palauttaa 20 hotellia kolmen yön ajalle, on 60 hotelli-päivää yhdestä pyynnöstä. Hakemisto- ja automaattitäydennysrajapinnat ovat ilmaisia eivätkä koskaan mittaudu.
- Partner Media API:ssa yksikkö on yksi hotelli, jonka media palautetaan sinulle, riippumatta siitä, kuinka monta valokuvaa ja videota se on. Eräpyyntö 50 hotellille on 50 yksikköä — ja jos joillakin hotelleilla ei ole mediaa, johon sinulla on oikeus, sinulta veloitetaan vain niistä, jotka todella palauttivat mediaa.

### Esimerkki: OTA, joka välimuistittaa 90 päivän hinnat

Oletetaan, että olet OTA, metahakusivusto tai matkanjärjestäjä ja haluat 90 päivän eteenpäin suuntautuvat hinnat **1 000 hotellille**, joista jokainen julkaisee **4 päähintaa**.

**Yksi täydellinen päivitys kaikesta on 90 000 hotelli-päivää — $9.00.**

Se on 1 000 hotellia × 90 päivää. Neljä päähintaa ei maksa sinulle mitään ylimääräistä: yksi pyyntö palauttaa kaikki hotellin kyseiselle ajanjaksolle julkaistut hintasuunnitelmat, joten kiinteistön kantamien hintasuunnitelmien määrä ei ole laskutuksen mittari. Eikä myöskään se, miten jaat pyynnön — ajanjakson pyyntö kattaa enintään 30 päivää, joten tekisit 3 pyyntöä per hotelli, ja 3 × 30 päivää laskutetaan täsmälleen samalla tavalla kuin yksi 90 päivän pyyntö. Sinulta veloitetaan pyytämästäsi hinnoittelusta, ei siitä, miten pyysit sitä.

Joten kuukausittainen maksusi riippuu yhdestä kysymyksestä: kuinka usein päivität?

| Päivitystiheys | Hotelli-päiviä / kk | 10 000 ilmaisen jälkeen | Kuukausikustannus |
| -- | -- | -- | -- |
| Kerran kuukaudessa | 90 000 | 80 000 | **$8.00** |
| Viikoittain | 360 000 | 350 000 | **$35.00** |
| Päivittäin | 2 700 000 | 2 690 000 | **$269.00** |
| Kaksi kertaa päivässä | 5 400 000 | 5 390 000 | **$539.00** |

Kaikkien 1 000 hotellin päivittäinen päivitys tarkoittaa 3 000 pyyntöä päivässä ja maksaa noin $9.00 päivässä. Ilmainen kiintiö — 10 000 hotelli-päivää kuukaudessa — riittää hinnoittelemaan noin 110 hotellia täyden 90 päivän ajalle tai rakentamaan ja testaamaan koko integraation ilman maksua.

#### Mikä vaikuttaa tähän määrään

- **Hintasuunnitelmien pyytäminen yksi kerrallaan.** Ajanjakson pyyntö palauttaa parhaan hinnan huonetyypille kaikista hintasuunnitelmista kerralla. Jos suodatat yhteen hintasuunnitelmaan per pyyntö nähdäksesi kaikki neljä erikseen, teet neljä kertaa enemmän pyyntöjä ja maksat neljä kertaa enemmän.
- **Lisähenkilöt, valuutat tai kielet.** Hinta yhdelle aikuiselle ja kahdelle aikuiselle ovat kaksi eri kysymystä, ja kumpikin laskutetaan. Sama koskee toista näyttövaluuttaa tai kieltä.
- **Tarpeeton päivitystiheys.** Ei ole pakko päivittää kaikkia 90 päivää samalla tiheydellä. Päivitä seuraavat 14 päivää päivittäin ja päivät 15–90 viikoittain, jolloin samat 1 000 hotellia maksavat **$71.40** kuukaudessa $269.00 sijaan — lähiajan päivät, joissa hinnat oikeasti liikkuvat, pysyvät tuoreina.

### Käytön kytkeminen päälle

Pay-as-you-go on oletuksena pois päältä. Kaikki saavat ilmaisen kiintiön ilman toimenpiteitä.

Kiintiön ylittämiseksi **tilin omistaja** ottaa pay-as-you-go -toiminnon käyttöön ja valitsee, mitkä tilit mitataan. Kaikkien käytössä olevien tiliesi käyttö kerätään yhteen **kuukausilaskuun**, jonka voit maksaa automaattisesti kortilla tai vastaanottaa laskuna maksettavaksi itse.

Kun toiminto on käytössä, käyttö mitataan mutta **ei koskaan rajoiteta** — et kohtaa kulutusrajaa rahankäytössä kanssamme.

:::note[Jos et ota sitä käyttöön]
Mikään ei mene rikki eikä mitään veloiteta. Pysyt vain ilmaisen kiintiön rajoissa kyseisen kuukauden ajan: generoituja julkaisuja ei julkaista ja Partner API -kutsut palauttavat `429`-virheen, kunnes kiintiö nollautuu.
:::

### Laskutustila

| Tila | Mitä se tarkoittaa |
| -- | -- |
| Hyvä tila | Kaikki toimii normaalisti. |
| Myöhässä | Maksu epäonnistui ja yritetään uudelleen. Ominaisuudet toimivat tämän ajan. |
| Keskeytetty | Laskua ei ole maksettu loppuun asti. Laskutettavat toiminnot estetään, ilmaiset ominaisuudet jatkuvat normaalisti. |

:::tip[Reaaliaikaiset hinnat]
Yksikköhinnat ja ilmaiset kiintiöt näkyvät aina Portaalissa suoraan laskutusjärjestelmästämme, joten voit tarkistaa ne ennen sitoutumista. Katso [Billing](/fi/account/subscription) ottaaksesi pay-as-you-go käyttöön, valitaksesi tilisi ja seurata kuukausittaista käyttöä ja laskuja. Katso [Social](/fi/portal/social/what-is-social) nähdäksesi, miten julkaisumäärä vaikuttaa kulutukseesi.
:::

## Alustan vaikutus

Lopuksi, kun kasvamme sekä koossa että varauksissa, haluamme jakaa kanssasi joitakin alustan vaikutuksia. Lisää varauksia tuo mahdollisuuksia saada volyymialennuksia maksunvälittäjältämme, mikä mahdollistaisi käsittelymaksumme alentamisen kaikille.

Liity Winkiin jo tänään ja löydä uusi, tuottoisa tapa tehdä liiketoimintaa majoitusalalla!
