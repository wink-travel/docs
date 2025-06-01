---
title: Security
description: >-
  See artikkel sisaldab teavet meie rakendatavate turvameetmete kohta, mida meie
  kolmanda osapoole turvafirma igal aastal avaldab.
sidebar:
  order: 6
---
# Winki turvalisuse ülevaate dokument

*Viimati uuendatud: 7. september 2024*

*Versioon 1.0*

## Eesmärk ja ulatus

Osana meie jätkuvast pühendumusest turvalisusele ja kasutajaandmete kaitsmisele viime oma veebirakenduses regulaarselt läbitungimistesti läbi. See dokument kirjeldab meie testimismetoodikaid, annab kokkuvõtte tulemustest ja toob esile meie lähenemisviisi pidevale turvalisuse täiustamisele.

Seda dokumenti ajakohastatakse uute aruannete koostamisel või oluliste muudatuste tegemisel.

Valdkonnad, mis kuuluvad ulatusse:\
\*.wink.travel\
\*.trippay.io

## Testimise sagedus ja ajakava

Meie penetratsioonitestid viiakse läbi igal aastal ning vajadusel planeeritakse täiendavaid teste pärast rakenduse või infrastruktuuri olulisi uuendusi. See regulaarne testimise sagedus tagab, et oleme arenevate ohtudega sammu pidanud ja säilitame turvalise keskkonna.

## Testimismetoodikad

Meie penetratsioonitestimine on põhjalik ja hõlmab laia valikut turvaaspekte, sealhulgas, kuid mitte ainult:

* **OWASP 10 parimat:**&#x4D;eie testid on suunatud just kõige kriitilisematele turvariskidele, nagu näiteks süstimine, katkine autentimine ja saidiülene skriptimine (XSS).
* **Musta ja halli kasti testimine:**&#x53;õltuvalt ulatusest kasutab meie meeskond neid metoodikaid nii väliste kui ka sisemiste rünnakustsenaariumide simuleerimiseks.
* **Automatiseeritud ja käsitsi testimine:**&#x4B;asutame Burp Suite Pro-d, mis on juhtiv turvatestimise tööriistakomplekt, automatiseeritud turvaskannide tegemiseks ja käsitsi testimise tehnikate abistamiseks keeruliste haavatavuste tuvastamiseks ja parima võimaliku ulatuse saavutamiseks. Täpsemaks haavatavuste tuvastamiseks kasutame spetsiaalseid tööriistu, näiteks SQLmap.

## Järelduste kokkuvõte

Järgnev on meie viimase penetratsioonitestimise aruande lühikokkuvõte:

* **Tuvastatud haavatavuste koguarv:**&#x32;
* **Raskusastme jaotus:**
  * Kriitiline: 2
* **Tuvastatud haavatavuste tüübid:**
  * Katkine juurdepääsu kontroll
  * Ebakindel disain

Üksikasjalike järelduste saamiseks vaadake palun täispikka aruannet.

### Riskihinnangud ja mõju

Mõlemad leitud haavatavused on hinnatud kriitilisteks, kuna mõlemal võis olla tõsine rahaline mõju. Esimene võimaldas pahatahtlikul autentitud kasutajal saada kontrolli teise ettevõtte Trippay maksekonto üle. Teine haavatavus võimaldas pahatahtlikul kasutajal muuta broneeringu eest nõutavat maksesummat.

### Parandus- ja leevendamismeetmed

Oleme tuvastatud haavatavuste kõrvaldamiseks astunud järgmisi samme:

* **Kohesed parandused:**&#x4B;riitilised haavatavused parandati 48 tunni jooksul pärast avastamist.
* **Koodi ülevaatamine ja karastamine:**&#x41;rendusmeeskond on meie soovituste põhjal rakendanud täiendavaid turvakontrolle.

## Pidev täiustamine

Tungimistestid on osa meie laiemast pideva turvalisuse täiustamise strateegiast. Iga testi tulemused suunavad meie turvapoliitikat, mõjutavad arendustavasid ja edendavad meie turvaarhitektuuri täiustamist.

## Meeskonna asjatundlikkus

Meie penetratsioonitestimist viib läbi ettevõttesisene professionaal, kellel on ulatuslikud kogemused erinevates projektides ja tööstusharudes. Kasutades juhtivaid tööriistu ja meetodeid, tagab meie ekspert, et meie rakendust testitakse põhjalikult uusimate turvaohtude suhtes.

## Pühendumus turvalisusele

Oleme pühendunud oma kasutajate ja sidusrühmade jaoks turvalise rakenduskeskkonna säilitamisele. Meie pidevad jõupingutused turvalisuse testimisel ja täiustamisel näitavad meie pühendumust kaitsmisele arenevate ohtude eest.

## Aruannete juurdepääs ja värskendused

Seda dokumenti uuendatakse pidevalt uute penetratsioonitestide aruannete avaldamisel. Täieliku aruande saamiseks võtke meiega ühendust alloleva e-posti teel. Tulevased värskendused hõlmavad uusi tuvastatud haavatavusi, parandusmeetmeid ja meie testimismetoodikate kohandusi.

Lisaküsimuste korral võtke ühendust aadressil security@wink.travel.

