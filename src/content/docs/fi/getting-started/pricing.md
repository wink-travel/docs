---
title: Hinnoittelu
description: Suurin osa Winkistä on ilmaista. Maksat pienen maksun per varaus sekä käytön mukaan veloitettavan maksun muutamista premium-ominaisuuksista.
sidebar:
  order: 4
---

Winkissä ei ole tilauksia, paikkoja tai aloitusmaksuja. Suurin osa alustasta on ilmaista, ja maksat vain kahdesta asiasta:

1. **Alustamaksu per varaus sekä kortinkäsittelykustannukset** — vain varauksen yhteydessä.
2. **Käytön mukaan veloitettavat maksut** — muutamista premium-ominaisuuksista, jotka maksavat meille joka kerta kun niitä käytetään, jokaisella on ilmainen kuukausittainen kiintiö.

## Mikä on ilmaista

Nämä eivät maksa mitään, ikuisesti, ilman kiintiötä tai mittausta:

- **Varauskone** — omalla sivustollasi, WinkLinks-sivullasi tai missä tahansa muussa upotat sen.
- **Kiinteistöhallinta** — sisältö, kuvat, hinnat, hintasuunnitelmat, saatavuus, kampanjat ja säännöt.
- **Affiliate-työkalut** — jaettavat linkit, kuratoidut listat, ruudukot, kartat, kortit ja upotettavat widgetit.
- **Matkatoimiston työkalut** — haku, räätälöidyt hinnat ja varaaminen asiakkaiden puolesta.
- **WinkLinks** — varaa oma vanity-URL, rakenna sivusi ja julkaise niin usein kuin haluat.
- **Manuaaliset somejulkaisut** — kaikki mitä kirjoitat itse, millä tahansa yhdistetyllä verkostolla.
- **Analytiikka, tulostaulut, vaatimukset, asetukset** ja tilinhallinta.
- **Kuluttaja- ja varauskoneen API:t**, sekä hakemisto- ja automaattitäyte-päätepisteet.

## Varaukset

Wink tukee kahta mallia: Wink kerää maksun hotellille tai lisensoitu matkatoimisto toimii kauppiaana.

### Malli 1 — Wink kerää hotellin puolesta

Wink kerää vieraan maksun hotellin rajoitettuna maksunkerääjänä. Hotelli on kauppias ja hotellin nimi näkyy vieraan korttilaskussa.
Tämä malli koskee 95 % kaikista varauksista.

#### Erittely

:::note[Alustamaksu]
Wink veloittaa 1,5 % alustamaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa yllä mainittujen ilmaisten ominaisuuksien tarjoamisen. Maksua ei veloiteta perutusta varauksesta.
:::

:::note[Kortinkäsittely]
Vieraan maksun käsittelymaksu veloitetaan hotellille kustannushintaan ilman katetta. Se vaihtelee vieraan kortin ja maksutavan mukaan, ja tarkka summa näkyy kunkin varauksen kirjanpito-osiossa. Jos varaus perutaan tai hyvitetään, maksunvälittäjän pidättämä maksu veloitetaan silti; jos maksunvälittäjä ei veloita mitään, emme mekkään.
:::

:::note[Varojen siirto]
Tilillesi lähetettävistä varoista peritään maksuja. Tämä riippuu valitsemastasi maksutavasta. Tällä hetkellä tuemme:

- **Pankkisiirto** — Kustannus riippuu sijaintimaastasi, mistä varat lähetetään ja mahdollisista valuutanvaihtokuluista. Maksu ja valuutanvaihtokulut maksaa vastaanottaja kustannushintaan. Tarjoamme hintalaskurin, jota voit käyttää, kun tililläsi on käytettävissä varoja.

Jos haluat, että tuemme toisen maksutavan, lähetä meille sähköpostia.
:::

### Malli 2 — Matkatoimisto kauppiaana

Tämä malli on saatavilla vain matkatoimistoille, joilla on matkatoimistolupa alueellaan ja jotka haluavat toimia kauppiaana. Jotkut rekisteröidyt matkatoimistomme haluavat vastata maksujen käsittelystä ja varojen jakamisesta hotelleille. Tässä mallissa he ovat vastuussa varoista ja heillä on tarvittavat luvat toimia maassaan.

#### Erittely

:::note[Alustamaksu]
Wink veloittaa 1,5 % alustamaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa yllä mainittujen ilmaisten ominaisuuksien tarjoamisen.
:::

Tässä mallissa matkatoimistot maksavat vain Wink-alustamaksun, ja Wink laskuttaa matkatoimistoa kuukausittain.

## Käyttö (pay-as-you-go)

Muutamat ominaisuudet maksavat meille rahaa joka kerta kun niitä käytetään — generatiivinen tekoäly, kolmansien osapuolien some-API:t ja reaaliaikainen hinnoittelu suuressa mittakaavassa. Sen sijaan, että nämä sisällytettäisiin kuukausimaksuun, jota et välttämättä käytä, maksat vain siitä, mitä todella kulutat, ja vasta kun olet käyttänyt ilmaisen kuukausikiintiön.

| Ominaisuus | Ilmainen kuukaudessa | Sen jälkeen | Laskutusyksikkö |
| -- | -- | -- | -- |
| Somejulkaisu — kuva | 1 | $1.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma kuva | 0 | $2.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn parantama video | 0 | $4.00 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma video | 0 | $14.00 | Yksi julkaistu julkaisu |
| Tekoälyvastaus kommenttiin tai yksityisviestiin | 5 | $0.05 | Yksi vastaus |
| Chatbot-vastaus | 5 | $0.05 | Yksi vastaus |
| Partner API | 10,000 | $0.0001 | Yksi hotelli-päivä |

Hinnat ovat USD-määräisiä. Ilmainen kiintiö myönnetään **tiliä kohden**, ei käyttäjää kohden, ja se nollautuu kuukauden 1. päivänä (UTC).

### Miten julkaisut hinnoitellaan

Julkaisut hinnoitellaan niiden sisällön mukaan, koska se on meille kustannus. Staattinen kuva on halpa; video ei ole; kaikki tekoälyn tuottama media maksaa huomattavasti enemmän kuin itse toimittamasi kuva.

- **Ilmainen kiintiö kattaa vain tavalliset kuvajulkaisut.** Saat yhden tällaisen per tili kuukaudessa. Videojulkaisut ja tekoälyn luoma media veloitetaan heti ensimmäisestä julkaisusta — niillä tasoilla ei ole ilmaista kiintiötä, joten kiinteistön, joka julkaisee videoita, tulee odottaa veloitusta jo ensimmäiseltä kuukaudelta.
- **Video voittaa.** Jos julkaisussa on lainkaan videota, koko julkaisu veloitetaan videohinnalla. Julkaisu, jossa on sekä kuva että video, on videopostaus.
- **Tekoälyperäisyys määrittää tason.** Itse toimittamasi media — omat kuvasi ja videosi tai mikä tahansa Wink-sisältökirjastostasi — veloitetaan normaalihinnalla. Meidän tuottamamme media veloitetaan tekoälyhinnalla.

### Mikä mitataan ja mikä ei

- Vain **generoitu** julkaisu, joka julkaistaan kolmannen osapuolen verkostossa (Facebook, Instagram), on laskutettava. Itse kirjoittamasi julkaisu on ilmainen, minne tahansa se meneekin.
- **Julkaiseminen WinkLinksiin on aina ilmaista**, generoitu tai ei.
- Sinulta veloitetaan **julkaisun yhteydessä**, ei yritystä kohden. Luonnoksen uudelleenluonti, kunnes olet tyytyväinen, ei lisää laskua — maksat kerran siitä julkaisusta, jonka oikeasti lähetät. Yritykset eivät ole rajattomia: jokainen julkaisu sallii noin 10 uudelleenluontia kuville ja 3 videoille, mikä vastaa niiden tuottamisen kustannuksia. Näet jäljellä olevien määrän työskennellessäsi.
- Partner API:ssa **hotelli-päivä** tarkoittaa yhden hotellin hinnoittelua yhdeltä yöpymiseltä — *ei* yhtä API-kutsua. Haku, joka palauttaa 20 hotellia kolmen yön yöpymiselle, on 60 hotelli-päivää yhdestä pyynnöstä. Hakemisto- ja automaattitäyte-päätepisteet ovat ilmaisia eivätkä koskaan mittaudu.

### Käytön kytkeminen päälle

Pay-as-you-go on oletuksena pois päältä. Kaikki saavat ilmaisen kiintiön ilman toimenpiteitä.

Kiintiön ylittämiseksi **tilin omistaja** ottaa pay-as-you-go -käytön käyttöön ja valitsee, mitkä tilit mitataan. Kaikkien käytössä olevien tiliesi käyttö kerätään **yhteen kuukausittaiseen laskuun**, jonka voit maksaa automaattisesti kortilla tai vastaanottaa laskuna maksaaksesi itse.

Kun käytön mittaus on päällä, käyttöä mitataan mutta **ei koskaan rajoiteta** — et kohtaa kulutusrajoitusta.

:::note[Jos et ota käyttöön]
Mikään ei mene rikki eikä mitään veloiteta. Pysyt vain kyseisen kuukauden ilmaisen kiintiön rajoissa: generoituja julkaisuja ei julkaista ja Partner API -kutsut palauttavat `429` kunnes kiintiö nollautuu.
:::

### Laskutustila

| Tila | Mitä se tarkoittaa |
| -- | -- |
| Hyvässä asemassa | Kaikki toimii normaalisti. |
| Myöhässä | Maksu epäonnistui ja yritetään uudelleen. Ominaisuudet toimivat tämän ajan. |
| Keskeytetty | Laskua ei ole maksettu loppuun asti. Laskutettavat toiminnot estetään kunnes maksetaan; ilmaiset ominaisuudet jatkuvat normaalisti. |

:::tip[Reaaliaikaiset hinnat]
Yksikköhinnat ja ilmaiset kiintiöt näkyvät aina Portaalissa suoraan laskutusjärjestelmästämme, joten voit tarkistaa ne ennen sitoutumista. Katso [Billing](/fi/portal/plan) ottaaksesi pay-as-you-go käyttöön, valitaksesi tilisi ja seurata kuukauden käyttöä ja laskuja. Katso [Social](/fi/portal/social/what-is-social) nähdäksesi, miten julkaisumäärä vaikuttaa kulutukseesi.
:::

## Alustan vaikutus

Lopuksi, kun kasvamme sekä koossa että varauksissa, haluamme jakaa kanssasi joitakin alustan tuomia etuja. Lisää varauksia tuo mahdollisuuksia saada volyymialennuksia maksunvälittäjältämme. Koska kortinkäsittely veloitetaan kustannushintaan, kaikki neuvottelemani säästöt menevät suoraan hotelleille.

Liity Winkiin jo tänään ja löydä uusi, kannattava tapa tehdä liiketoimintaa majoitusalalla!
