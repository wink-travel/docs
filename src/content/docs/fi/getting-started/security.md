---
title: Security
description: >-
  Tämä artikkeli sisältää tietoa turvatoimistamme, joita kolmannen osapuolen
  tietoturvayrityksemme julkaisee vuosittain.
sidebar:
  order: 6
---
# Wink Securityn yleiskatsausasiakirja

*Viimeksi päivitetty: 7. syyskuuta 2024*

*Versio 1.0*

## Tarkoitus ja soveltamisala

Osana jatkuvaa sitoutumistamme tietoturvaan ja käyttäjätietojen suojaamiseen suoritamme säännöllisiä penetraatiotestejä verkkosovelluksellemme. Tässä asiakirjassa esitetään testausmenetelmämme, esitetään yhteenveto tuloksista ja korostetaan lähestymistapaamme jatkuvaan tietoturvan parantamiseen.

Tätä asiakirjaa päivitetään sitä mukaa, kun uusia raportteja tuotetaan tai tapahtuu merkittäviä muutoksia.

Alueet, joihin sovelletaan:\
\*.wink.travel\
\*.trippay.io

## Testaustiheys ja -aikataulu

Tunkeutumistestimme suoritetaan vuosittain, ja lisätestejä ajoitetaan tarpeen mukaan sovelluksen tai infrastruktuurin merkittävien päivitysten jälkeen. Tämä säännöllinen testaustiheys varmistaa, että pysymme kehittyvien uhkien edellä ja ylläpidämme turvallisen ympäristön.

## Testausmenetelmät

Tunkeutumistestauksemme on kattavaa ja kattaa laajan kirjon tietoturva-alueita, mukaan lukien, mutta ei rajoittuen:

* **OWASPin kymmenen parasta:**&#x54;estimme kohdistuvat erityisesti kriittisimpiin tietoturvariskeihin, kuten injektointiin, rikkoutuneeseen todennukseen ja sivustojen väliseen komentosarjahyökkäykseen (XSS).
* **Mustan laatikon ja harmaan laatikon testaus:**&#x4C;aajuudesta riippuen tiimimme käyttää näitä menetelmiä simuloidakseen sekä ulkoisia että sisäisiä hyökkäysskenaarioita.
* **Automaattinen ja manuaalinen testaus:**&#x4B;äytämme Burp Suite Prota, johtavaa tietoturvatestaustyökalusarjaa, automatisoitujen tietoturvaskannausten suorittamiseen ja manuaalisten testaustekniikoiden tukena monimutkaisten haavoittuvuuksien tunnistamiseksi ja parhaan mahdollisen kattavuuden saavuttamiseksi. Tarkempaan haavoittuvuuksien tunnistamiseen käytämme erikoistyökaluja, kuten SQLmapia.

## Yhteenveto löydöksistä

Seuraavassa on yleiskatsaus viimeisimmästä penetraatiotestausraportistamme:

* **Havaittujen haavoittuvuuksien kokonaismäärä:**&#x32;
* **Vakavuusjakauma:**
  * Kriittinen: 2
* **Havaittujen haavoittuvuuksien tyypit:**
  * Rikkoutunut pääsynhallinta
  * Epävarma suunnittelu

Yksityiskohtaiset havainnot löytyvät koko raportista.

### Riskiluokitukset ja vaikutukset

Molemmat löydetyt haavoittuvuudet on luokiteltu kriittisiksi, koska molemmilla olisi voinut olla vakavia taloudellisia vaikutuksia. Ensimmäinen haavoittuvuus mahdollisti haitallisen todennetun käyttäjän haltuunsa toisen yrityksen Trippay-maksutilin. Toinen haavoittuvuus mahdollisti haitallisen käyttäjän muokata varauksen maksusummaa.

### Korjaavat ja lieventävät toimet

Olemme ryhtyneet seuraaviin toimenpiteisiin havaittujen haavoittuvuuksien korjaamiseksi:

* **Välittömät korjaukset:**&#x4B;riittiset haavoittuvuudet on korjattu 48 tunnin kuluessa niiden löytämisestä.
* **Koodin tarkistus ja koventaminen:**&#x4B;ehitystiimi on ottanut käyttöön lisäturvatoimia suosituksiemme perusteella.

## Jatkuva parantaminen

Tunkeutumistestaus on osa laajempaa strategiaamme jatkuvaan tietoturvan parantamiseen. Kunkin testin tulokset ohjaavat tietoturvakäytäntöjämme, vaikuttavat kehityskäytäntöihin ja edistävät tietoturva-arkkitehtuurimme parannuksia.

## Tiimin asiantuntemus

Tunkeutumistestauksen suorittaa sisäinen ammattilainen, jolla on laaja kokemus erilaisista projekteista ja toimialoilta. Käyttämällä johtavia työkaluja ja menetelmiä asiantuntijamme varmistavat, että sovelluksemme testataan perusteellisesti uusimpia tietoturvauhkia vastaan.

## Sitoutuminen turvallisuuteen

Olemme sitoutuneet ylläpitämään turvallisen sovellusympäristön käyttäjillemme ja sidosryhmillemme. Jatkuvat ponnistelumme tietoturvatestauksen ja -parannuksen parissa osoittavat sitoutumisemme suojautumiseen kehittyviltä uhilta.

## Raporttien käyttöoikeudet ja päivitykset

Tätä asiakirjaa päivitetään jatkuvasti sitä mukaa, kun uusia penetraatiotestausraportteja julkaistaan. Saadaksesi koko raportin, ota meihin yhteyttä alla olevan sähköpostin kautta. Tulevat päivitykset sisältävät uusia tunnistettuja haavoittuvuuksia, korjaustoimenpiteitä ja testausmenetelmiemme muutoksia.

Lisätietoja varten ota yhteyttä osoitteeseen security@wink.travel.

