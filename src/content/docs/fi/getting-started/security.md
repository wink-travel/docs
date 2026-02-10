---
title: Turvallisuus
description: Tässä artikkelissa on tietoa käyttämistämme turvallisuustoimenpiteistä, jotka kolmannen osapuolen turvallisuusyrityksemme julkaisee vuosittain.
sidebar:
  order: 6
---

*Viimeksi päivitetty: 7. syyskuuta 2024*

*Versio 1.0*

## Tarkoitus ja laajuus

Osana jatkuvaa sitoutumistamme turvallisuuteen ja käyttäjätietojen suojaamiseen suoritamme säännöllisesti penetraatiotestejä verkkosovelluksessamme. Tämä asiakirja kuvaa testausmenetelmämme, tarjoaa yhteenvedon havainnoista ja korostaa lähestymistapaamme jatkuvaan turvallisuuden parantamiseen.

Tätä asiakirjaa päivitetään uusien raporttien valmistuessa tai merkittävien muutosten tapahtuessa.

Laajuuteen kuuluvat domainit:  
\*.wink.travel  
\*.trippay.io

## Testauksen tiheys ja aikataulu

Penetraatiotestimme suoritetaan vuosittain, ja lisätestejä ajoitetaan tarpeen mukaan sovelluksen tai infrastruktuurin merkittävien päivitysten jälkeen. Tämä säännöllinen testausrytmi varmistaa, että pysymme kehityksessä uhkien edellä ja ylläpidämme turvallista ympäristöä.

## Testausmenetelmät

Penetraatiotestauksemme on kattavaa ja kattaa laajan valikoiman turvallisuusnäkökohtia, mukaan lukien mutta ei rajoittuen:

* **OWASP Top 10:** Testimme kohdistuvat erityisesti kriittisimpiin turvallisuusriskeihin, kuten Injection, Broken Authentication ja Cross-Site Scripting (XSS).  
* **Black Box ja Grey Box -testaus:** Laajuudesta riippuen tiimimme käyttää näitä menetelmiä simuloidakseen sekä ulkoisia että sisäisiä hyökkäysskenaarioita.  
* **Automaattinen ja manuaalinen testaus:** Käytämme Burp Suite Pro -työkalua, joka on johtava turvallisuustestaustyökalupaketti, suorittaaksemme automaattisia turvallisuusskannauksia ja tukeaksemme manuaalisia testausmenetelmiä monimutkaisten haavoittuvuuksien tunnistamiseksi ja parhaan mahdollisen kattavuuden saavuttamiseksi. Joidenkin erityisten haavoittuvuuksien tunnistamiseen käytetään myös erikoistyökaluja, kuten SQLmap.

## Yhteenveto havainnoista

Seuraavassa on yleiskatsaus viimeisimmästä penetraatiotestiraportistamme:

* **Löydettyjen haavoittuvuuksien kokonaismäärä:** 2  
* **Vakavuusjakauma:**  
  * Kriittinen: 2  
* **Havaitut haavoittuvuustyypit:**  
  * Rikottu pääsynvalvonta  
  * Turvaton suunnittelu

Yksityiskohtaisiin havaintoihin tutustu koko raporttiin.

### Riskiluokitukset ja vaikutukset

Molemmat löydetyt haavoittuvuudet on luokiteltu kriittisiksi, koska molemmat olisivat voineet aiheuttaa vakavia taloudellisia vaikutuksia. Ensimmäinen mahdollisti haitallisen todennetun käyttäjän hallita toisen yrityksen Trippay-maksutiliä. Toinen haavoittuvuus antoi haitalliselle käyttäjälle mahdollisuuden muuttaa varauksen maksun määrää.

### Korjaus- ja lieventämistoimet

Olemme ryhtyneet seuraaviin toimiin havaittujen haavoittuvuuksien korjaamiseksi:

* **Välittömät korjaukset:** Kriittiset haavoittuvuudet on korjattu 48 tunnin kuluessa niiden löytämisestä.  
* **Koodikatselmointi ja vahvistaminen:** Kehitystiimi on ottanut käyttöön lisäturvatoimia suositustemme pohjalta.

## Jatkuva parantaminen

Penetraatiotestaus on osa laajempaa strategiaamme jatkuvaan turvallisuuden parantamiseen. Jokaisen testin havainnot ohjaavat turvallisuuspolitiikkaamme, vaikuttavat kehityskäytäntöihin ja edistävät turvallisuusarkkitehtuurimme parannuksia.

## Tiimin asiantuntemus

Penetraatiotestauksemme suorittaa talon sisäinen ammattilainen, jolla on laaja kokemus eri projekteista ja toimialoilta. Käyttäen johtavia työkaluja ja menetelmiä asiantuntijamme varmistaa, että sovelluksemme testataan perusteellisesti uusimpia turvallisuusuhkia vastaan.

## Sitoutuminen turvallisuuteen

Olemme sitoutuneet ylläpitämään turvallista sovellusympäristöä käyttäjillemme ja sidosryhmillemme. Jatkuvat ponnistelumme turvallisuustestauksessa ja parantamisessa osoittavat sitoutumisemme suojautua kehittyviä uhkia vastaan.

## Raportin saatavuus ja päivitykset

Tätä asiakirjaa päivitetään jatkuvasti uusien penetraatiotestiraporttien julkaisemisen myötä. Koko raportin saamiseksi ota yhteyttä alla olevaan sähköpostiosoitteeseen. Tulevat päivitykset sisältävät uusia tunnistettuja haavoittuvuuksia, korjaustoimia ja testausmenetelmien tarkistuksia.

Lisätietoja varten ota yhteyttä osoitteeseen security@wink.travel.
