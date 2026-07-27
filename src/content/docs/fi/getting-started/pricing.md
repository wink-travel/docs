---
title: Hinnoittelu
description: Suurin osa Winkistä on ilmaista. Maksat pienen maksun per varaus sekä käytön mukaan veloitettavan maksun muutamista premium-ominaisuuksista.
sidebar:
  order: 4
---

Winkissä ei ole tilauksia, paikkoja tai aloitusmaksuja. Suurin osa alustasta on ilmaista, ja maksat vain kahdesta asiasta:

1. **Pieni prosenttiosuus per varaus** — vain silloin, kun teet oikeasti rahaa.
2. **Käytön mukaan veloitettavat maksut** — muutamista premium-ominaisuuksista, jotka maksavat meille rahaa joka kerta, kun niitä käytetään, jokaisella on ilmainen kuukausittainen kiintiö.

## Mikä on ilmaista

Nämä eivät maksa mitään, ikuisesti, ilman kiintiötä tai mittausta:

- **Varauskone** — omalla sivustollasi, WinkLinks-sivullasi tai missä tahansa, mihin upotat sen.
- **Kiinteistöhallinta** — sisältö, valokuvat, hinnat, hintasuunnitelmat, saatavuus, kampanjat ja säännöt.
- **Affiliate-työkalut** — jaettavat linkit, kuratoidut listat, ruudukot, kartat, kortit ja upotettavat widgetit.
- **Matkatoimiston työkalut** — haku, räätälöidyt hinnat ja varaaminen asiakkaidesi puolesta.
- **WinkLinks** — varaa oma vanity-URL-osoitteesi, rakenna sivusi ja julkaise niin usein kuin haluat.
- **Manuaaliset somejulkaisut** — kaikki, mitä kirjoitat itse, millä tahansa yhdistetyllä verkostolla.
- **Analytiikka, tulostaulut, vaatimukset, asetukset** ja tilinhallinta.
- **Kuluttaja- ja varausteknologia-API:t**, sekä hakemisto- ja automaattisen täydennyksen päätepisteet.

## Varaukset

Wink tukee sekä kauppias- että agenttimallia.

### Malli 1

Wink on kauppias varauksen tapahtuessa. Wink vastaa varoista ja kantaa kaikki tarvittavat matkatoimistoluvat.
Tämä malli koskee 95 % kaikista varauksista.

Wink veloittaa `5,5 % per varaus` alustan ylläpidosta.
Suurin osa tästä menee maksunvälittäjälle (Visa, MasterCard jne.). Keskimääräinen varaus maksaa meille `2,95 %`; joskus jopa `3,6 %`. Osittaiset hyvitykset aiheuttavat lisäkustannuksia, koska maksunvälittäjä käsittelee ne uutena maksuna.
Haluamme olla täysin läpinäkyviä hinnoittelussa nyt, jotta säästämme kaikkien aikaa ennen kuin yritetään neuvotella lisäalennuksia ennen Winkin käyttöä. Hinnoittelumallimme on enemmän kuin reilu ja meidänkin täytyy elää.

#### Erittely

:::note[Käsittelymaksu]
Wink veloittaa 1,5 % käsittelymaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa kaiken yllä mainitun tarjoamisen ilmaiseksi.
:::

:::note[Maksumaksu]
TripPay veloittaa 4,0 % maksumaksun per varaus. Tämä kattaa maksun vastaanoton matkustajalta.
:::

:::note[Varojen siirto]
Tilillesi siirrettävistä varoista peritään maksuja. Tämä riippuu valitsemastasi maksutavasta. Tällä hetkellä tuemme:

- **Pankkisiirto** Maksu riippuu maasta, jossa olet ja mistä varat lähetetään. Tarjoamme hintalaskurin, jota voit käyttää, kun tililläsi on käytettävissä varoja.

Jos haluat, että tuemme toisen maksutavan, lähetä meille sähköpostia.
:::

### Malli 2

Tämä malli on saatavilla vain matkatoimistoille, joilla on matkatoimistolupa omalla alueellaan ja jotka haluavat olla kauppiaita. Jotkut rekisteröidyt matkatoimistomme haluavat vastata maksujen käsittelystä ja varojen jakamisesta hotelleille. Tässä mallissa he ovat vastuussa varoista ja kantavat tarvittavat luvat toimia maassaan.

#### Erittely

:::note[Käsittelymaksu]
Wink veloittaa 1,5 % käsittelymaksun per varaus. Tämä kattaa alustan ylläpidon ja mahdollistaa kaiken yllä mainitun tarjoamisen ilmaiseksi.
:::

Tässä mallissa matkatoimistot maksavat vain Winkille käsittelymaksun, ja Wink laskuttaa matkatoimistoa kuukausittain.

## Käyttö (pay-as-you-go)

Muutamat ominaisuudet maksavat meille rahaa joka kerta, kun niitä käytetään — generatiivinen tekoäly, kolmansien osapuolien some-API:t ja reaaliaikainen hinnoittelu suuressa mittakaavassa. Sen sijaan, että nämä sisällytettäisiin kuukausipakettiin, jota et välttämättä käytä, maksat vain siitä, mitä todella kulutat, ja vasta kun olet käyttänyt ilmaisen kuukausikiintiön.

| Ominaisuus | Ilmainen kuukaudessa | Sen jälkeen | Laskutettava yksikkö |
| -- | -- | -- | -- |
| Somejulkaisu — kuva | 1 | $1.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma kuva | 0 | $2.50 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn parantama video | 0 | $4.00 | Yksi julkaistu julkaisu |
| Somejulkaisu — tekoälyn luoma video | 0 | $14.00 | Yksi julkaistu julkaisu |
| Tekoälyvastaus kommenttiin tai yksityisviestiin | 5 | $0.05 | Yksi vastaus |
| Chatbot-vastaus | 5 | $0.05 | Yksi vastaus |
| Partner-API | 10 000 | $0.0001 | Yksi hotelli-yö |

Hinnat ovat USD-määräisiä. Ilmainen kiintiö myönnetään **tiliä kohden**, ei käyttäjää kohden, ja se nollautuu joka kuukauden 1. päivänä (UTC).

### Miten julkaisut hinnoitellaan

Julkaisut hinnoitellaan niiden sisällön mukaan, koska se on meille kustannus niiden tekemisestä. Staattinen kuva on halpa; video ei ole; kaikki tekoälyn tuottama media maksaa selvästi enemmän kuin itse toimittamasi valokuva.

- **Ilmainen kiintiö kattaa vain tavalliset kuvajulkaisut.** Saat yhden tällaisen per tili kuukaudessa. Videot ja tekoälyn luoma media veloitetaan heti ensimmäisestä julkaisusta — näillä tasoilla ei ole ilmaista kiintiötä, joten kiinteistön, joka julkaisee videoita, tulee odottaa maksua jo ensimmäiseltä kuukaudeltaan.
- **Video voittaa.** Jos julkaisussa on lainkaan videota, koko julkaisu veloitetaan videohinnalla. Julkaisu, jossa on sekä kuva että video, on videopostaus.
- **Tekoälyperäisyys määrää tason.** Sinun toimittamasi media — omat valokuvasi ja videosi tai mikä tahansa Wink-sisältökirjastostasi — veloitetaan normaalihinnalla. Meidän tuottamamme media veloitetaan tekoälyhinnalla.

### Mikä mitataan ja mikä ei

- Vain **generoitu** julkaisu, joka julkaistaan kolmannen osapuolen verkostossa (Facebook, Instagram), on laskutettava. Itse kirjoittamasi julkaisu on ilmainen, minne tahansa se meneekin.
- **Julkaiseminen WinkLinksiin on aina ilmaista**, generoitu tai ei.
- Sinulta veloitetaan **julkaisun yhteydessä**, ei yritystä kohden. Luonnoksen uudelleenluonti, kunnes olet tyytyväinen, ei lisää laskua — maksat kerran siitä julkaisusta, jonka oikeasti lähetät. Yritykset eivät kuitenkaan ole rajattomia: jokainen julkaisu sallii noin 10 uudelleenluontia kuville ja 3 videoille, mikä vastaa niiden tuottamisen kustannuksia. Näet jäljellä olevien määrän työskennellessäsi.
- Partner-API:ssa **hotelli-yö** tarkoittaa yhden hotellin hinnoittelua yhdelle yölle — *ei* yhtä API-kutsua. Haku, joka palauttaa 20 hotellia kolmen yön oleskelulle, on 60 hotelli-yötä yhdestä pyynnöstä. Hakemisto- ja automaattisen täydennyksen päätepisteet ovat ilmaisia eivätkä niitä mitata.

### Käytön kytkeminen päälle

Pay-as-you-go on oletuksena pois päältä. Kaikki saavat ilmaisen kiintiön ilman toimenpiteitä.

Kiintiön ylittämiseksi **tilin omistaja** ottaa pay-as-you-go -käytön käyttöön ja valitsee, mitkä tilit mitataan. Kaikkien käytössä olevien tiliesi käyttö yhdistetään **yhdeksi kuukausilaskuksi**, jonka voit maksaa automaattisesti kortilla tai vastaanottaa laskuna maksettavaksi itse.

Kun käytön seuranta on päällä, käyttöä mitataan, mutta sitä **ei koskaan rajoiteta** — et kohtaa kulutusrajoitusta rahankäytössä.

:::note[Jos et ota käyttöön]
Mikään ei mene rikki eikä mitään veloiteta. Pysyt vain ilmaisen kiintiön rajoissa kyseiseltä kuukaudelta: generoituja julkaisuja ei julkaista ja Partner-API-kutsut palauttavat `429`-virheen, kunnes kiintiö nollautuu.
:::

### Laskutustila

| Tila | Mitä se tarkoittaa |
| -- | -- |
| Hyvässä asemassa | Kaikki toimii normaalisti. |
| Myöhässä | Maksu epäonnistui ja yritetään uudelleen. Ominaisuudet toimivat tämän ajan. |
| Keskeytetty | Laskua ei ole maksettu loppuun asti. Laskutettavat toiminnot estetään, kunnes maksu on suoritettu; ilmaiset ominaisuudet jatkuvat normaalisti. |

:::tip[Reaaliaikaiset hinnat]
Yksikköhinnat ja ilmaiset kiintiöt näkyvät aina Portaalissa suoraan laskutusjärjestelmästämme, joten voit tarkistaa ne ennen sitoutumista. Katso [Billing](/fi/portal/plan) ottaaksesi pay-as-you-go käyttöön, valitaksesi tilisi ja seurata kuukausittaista käyttöä ja laskuja. Katso [Social](/fi/portal/social/what-is-social) nähdäksesi, miten julkaisumäärä vaikuttaa kulutukseesi.
:::

## Alustan vaikutus

Lopuksi, kun kasvamme sekä koossa että varauksissa, haluamme pystyä jakamaan kanssasi joitakin alustan vaikutuksia. Lisää varauksia tuo mahdollisuuksia saada volyymialennuksia maksunvälittäjältämme, mikä mahdollistaisi käsittelymaksumme alentamisen kaikille.

Liity Winkiin jo tänään ja löydä uusi, kannattava tapa tehdä liiketoimintaa majoitusalalla!
