---
title: Hinnoittelu
description: Suurin osa Winkistä on ilmaista. Maksat pienen maksun per varaus sekä käytön mukaan veloitettavan maksun muutamista premium-ominaisuuksista.
sidebar:
  order: 4
---

Winkissä ei ole tilauksia, paikkoja tai aloitusmaksuja. Suurin osa alustasta on ilmaista, ja maksat vain kahdesta asiasta:

1. **Alustamaksu per varaus sekä kortinkäsittelykustannukset** — vain varauksen yhteydessä.
2. **Käytön mukaan veloitettavat maksut** — muutamista premium-ominaisuuksista, jotka aiheuttavat meille kustannuksia aina käytettäessä, jokaisella on ilmainen kuukausittainen kiintiö.

## Mikä on ilmaista

Nämä eivät maksa mitään, ikuisesti, ilman kiintiötä tai mittausta:

- **Varauskone** — omalla sivustollasi, WinkLinks-sivullasi tai missä tahansa, johon upotat sen.
- **Kiinteistöhallinta** — sisältö, kuvat, hinnat, hintasuunnitelmat, saatavuus, kampanjat ja säännöt.
- **Affiliate-työkalut** — jaettavat linkit, kuratoidut listat, ruudukot, kartat, kortit ja upotettavat widgetit.
- **Matkatoimiston työkalut** — haku, räätälöidyt hinnat ja varaaminen asiakkaiden puolesta.
- **WinkLinks** — varaa oma vanity-URL-osoitteesi, rakenna sivusi ja julkaise niin usein kuin haluat.
- **Manuaaliset somejulkaisut** — kaikki, mitä kirjoitat itse, millä tahansa yhdistetyllä verkostolla.
- **Analytiikka, tulostaulut, vaatimukset, asetukset** ja tilinhallinta.
- **Kuluttaja- ja varausteknologian API:t**, sekä hakutoiminnot ja automaattinen täydennys.

## Varaukset

Wink tukee kahta mallia: Wink kerää maksun hotellille tai lisensoitu matkatoimisto toimii kauppiaana.

### Malli 1 — Wink kerää hotellin puolesta

Wink kerää vieraan maksun hotellin rajoitettuna maksunkerääjänä. Hotelli on kauppias, ja hotellin nimi näkyy vieraan korttilaskussa.
Tämä malli koskee 95 % kaikista varauksista.

#### Erittely

:::note[Alustamaksu]
Wink veloittaa 1,5 % alustamaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa yllä mainittujen ilmaisten ominaisuuksien tarjoamisen. Maksua ei veloiteta perutusta varauksesta.
:::

:::note[Kortinkäsittely]
Maksun käsittelykulu, joka veloitetaan vieraan maksun keräämiseksi, siirretään hotellille kustannushintaan ilman katetta. Se vaihtelee vieraan kortin ja maksutavan mukaan, ja tarkka summa näkyy kunkin varauksen kirjanpidossa. Jos varaus perutaan tai hyvitetään, prosessorin pidättämä maksu veloitetaan silti; jos prosessori ei veloita mitään, emme mekkään.
:::

:::note[Varojen siirto]
Tilillesi lähetettävistä varoista aiheutuu maksuja. Tämä riippuu valitsemastasi maksutavasta. Tällä hetkellä tuemme:

- **Pankkisiirto** — Kustannus riippuu sijaintimaastasi, mistä varat lähetetään ja mahdollisista valuutanvaihtokuluista. Maksu ja valuutanvaihtokulut maksaa vastaanottaja kustannushintaan. Tarjoamme laskurin, jota voit käyttää, kun tililläsi on käytettävissä varoja.

Jos haluat, että tuemme toisen maksutavan, lähetä meille sähköpostia.
:::

### Malli 2 — Matkatoimisto kauppiaana

Tämä malli on saatavilla vain matkatoimistoille, joilla on matkatoimistolisenssi alueellaan ja jotka haluavat toimia kauppiaana. Jotkut rekisteröidyt matkatoimistomme haluavat vastata maksujen käsittelystä ja varojen jakamisesta hotelleille. Tässä mallissa he ovat vastuussa varoista ja heillä on tarvittavat luvat toimia maassaan.

#### Erittely

:::note[Alustamaksu]
Wink veloittaa 1,5 % alustamaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa yllä mainittujen ilmaisten ominaisuuksien tarjoamisen.
:::

Tässä mallissa matkatoimistot maksavat vain Wink-alustamaksun, ja Wink laskuttaa matkatoimistoa kuukausittain.

## Käyttö (pay-as-you-go)

Muutamat ominaisuudet aiheuttavat meille kustannuksia joka kerta, kun niitä käytetään — generatiivinen tekoäly, kolmansien osapuolien some-API:t ja reaaliaikainen hinnoittelu suuressa mittakaavassa. Sen sijaan, että nämä sisällytettäisiin kuukausipakettiin, jota et välttämättä käytä, maksat vain siitä, mitä todella kulutat, ja vasta kun olet käyttänyt ilmaisen kuukausikiintiön.

| Ominaisuus | Ilmainen kuukaudessa | Sen jälkeen | Laskutusyksikkö |
| -- | -- | -- | -- |
| Somejulkaisu — kuva | 1 | $1.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma kuva | 0 | $2.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn parantama video | 0 | $4.00 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma video | 0 | $14.00 | Yksi julkaistu julkaisu |
| Tekoälyvastaus kommenttiin tai yksityisviestiin | 5 | $0.05 | Yksi vastaus |
| Chatbot-vastaus | 5 | $0.05 | Yksi vastaus |
| Partner API | 10 000 | $0.0001 | Yksi hotelliyö |

Hinnat ovat USD-valuutassa. Ilmainen kiintiö myönnetään **tiliä kohden**, ei käyttäjää kohden, ja se nollautuu kuukauden ensimmäisenä päivänä (UTC).

### Miten julkaisut hinnoitellaan

Julkaisut hinnoitellaan niiden sisällön mukaan, koska se on meille kustannus. Staattinen kuva on halpa; video ei ole; kaikki tekoälyn tuottama media maksaa huomattavasti enemmän kuin itse toimittamasi kuva.

- **Ilmainen kiintiö kattaa vain tavalliset kuvajulkaisut.** Saat yhden tällaisen per tili kuukaudessa. Videot ja tekoälyn luoma media veloitetaan heti ensimmäisestä julkaisusta — näillä tasoilla ei ole ilmaista kiintiötä, joten kiinteistön, joka julkaisee videoita, tulee odottaa maksua ensimmäiseltä kuukaudeltaan.
- **Video voittaa.** Jos julkaisussa on lainkaan videota, koko julkaisu hinnoitellaan videon mukaan. Julkaisu, jossa on sekä kuva että video, on videopostaus.
- **Tekoälyperäisyys määrittää tason.** Itse toimittamasi media — omat valokuvasi ja videosi tai mikä tahansa Wink-sisältökirjastostasi — veloitetaan normaalihinnalla. Meidän tuottamamme media veloitetaan tekoälyhinnalla.

### Mitä mitataan ja mitä ei

- Vain **generoitu** julkaisu, joka julkaistaan kolmannen osapuolen verkostossa (Facebook, Instagram), on laskutettava. Itse kirjoittamasi julkaisu on ilmainen, minne tahansa se meneekin.
- **Julkaiseminen WinkLinksiin on aina ilmaista**, generoitu tai ei.
- Sinulta veloitetaan **julkaisun yhteydessä**, ei yritystä kohden. Luonnoksen uudelleenluonti, kunnes olet tyytyväinen, ei lisää laskua — maksat kerran siitä julkaisusta, jonka lopulta julkaiset. Yritykset eivät ole rajattomia: jokainen julkaisu sallii noin 10 uudelleenluontia kuville ja 3 videoille, mikä vastaa niiden tuottamisen kustannuksia. Näet jäljellä olevien määrän työskennellessäsi.
- Partner API:ssa **hotelliyö** tarkoittaa yhden hotellin hinnoittelua yhdeltä yöpymiseltä — *ei* yhtä API-kutsua. Haku, joka palauttaa 20 hotellia kolmen yön ajalle, on 60 hotelliyötä yhdestä pyynnöstä. Sisältö- ja hakutoiminnot (kohdehaku ja automaattinen täydennys) maksavat yhden yksikön per kutsu, riippumatta palautetusta määrästä. Tilin API-päätepisteet ovat ilmaisia.

### Käytön kytkeminen päälle

Pay-as-you-go on oletuksena pois päältä. Kaikki saavat ilmaisen kiintiön ilman toimenpiteitä.

Jotta voit ylittää kiintiön, **tilin omistaja** ottaa pay-as-you-go -toiminnon käyttöön ja valitsee, mitkä tilit mitataan. Kaikkien käytössä olevien tiliesi käyttö kerätään yhteen **kuukausittaiseen laskuun**, jonka voit maksaa automaattisesti kortilla tai vastaanottaa laskuna maksettavaksi itse.

Kun toiminto on käytössä, käyttö mitataan, mutta **ei koskaan rajoiteta** — et kohtaa kulutusrajaa rahankäytössä.

:::note[Jos et ota sitä käyttöön]
Mikään ei mene rikki eikä mitään veloiteta. Pysyt vain kyseisen kuukauden ilmaisen kiintiön rajoissa: generoituja julkaisuja ei julkaista ja Partner API -kutsut palauttavat `429`-virheen, kunnes kiintiö nollautuu.
:::

### Laskutustila

| Tila | Mitä se tarkoittaa |
| -- | -- |
| Hyvä tila | Kaikki toimii normaalisti. |
| Myöhässä | Maksu epäonnistui ja yritetään uudelleen. Ominaisuudet toimivat tämän ajan. |
| Keskeytetty | Laskua ei ole maksettu loppuun asti. Laskutettavat toiminnot estetään, ilmaiset ominaisuudet jatkuvat normaalisti. |

:::tip[Reaaliaikaiset hinnat]
Yksikköhinnat ja ilmaiset kiintiöt näkyvät aina Portaalissa suoraan laskutusjärjestelmästämme, joten voit tarkistaa ne ennen sitoutumista. Katso [Billing](/fi/portal/plan) ottaaksesi pay-as-you-go käyttöön, valitaksesi tilisi ja seurata kuukauden käyttöä ja laskuja. Katso [Social](/fi/portal/social/what-is-social) nähdäksesi, miten julkaisumäärä vaikuttaa kulutukseesi.
:::

## Alustan vaikutus

Lopuksi, kun kasvamme sekä koossa että varauksissa, haluamme jakaa kanssasi joitakin alustan tuomia etuja. Lisää varauksia tuo mahdollisuuksia saada volyymialennuksia maksunvälittäjältämme. Koska kortinkäsittely veloitetaan kustannushintaan, kaikki neuvottelemani säästöt menevät suoraan hotelleille.

Liity Winkiin jo tänään ja löydä uusi, kannattava tapa tehdä liiketoimintaa majoitusalalla!
