---
title: Turvalisus
description: See artikkel sisaldab teavet turvameetmete kohta, mida rakendame, ning mida avaldab igal aastal meie kolmanda osapoole turbefirma.
sidebar:
  order: 6
---

# Wink turvalisuse ülevaatedokument

*Viimati uuendatud: 7. september 2024*

*Versioon 1.0*

## Eesmärk ja ulatus

Osana meie pidevast pühendumusest turvalisusele ja kasutajate andmete kaitsele viime läbi regulaarselt sissetungimise testimist meie veebirakendusel. See dokument kirjeldab meie testimismetoodikaid, annab kokkuvõtte leidudest ning toob esile meie lähenemise pidevale turvalisuse parandamisele.

Dokumenti uuendatakse, kui valmivad uued aruanded või toimuvad olulised muudatused.

Kaasatud domeenid:  
\*.wink.travel  
\*.trippay.io

## Testimise sagedus ja ajakava

Meie sissetungimise testid viiakse läbi kord aastas ning lisatestid ajastatakse vajadusel pärast olulisi rakenduse või infrastruktuuri uuendusi. See regulaarne testimistsükkel tagab, et hoiame sammu muutuvate ohtudega ja säilitame turvalise keskkonna.

## Testimismetoodikad

Meie sissetungimise testimine on põhjalik ja hõlmab laia valikut turvaaspekte, sealhulgas, kuid mitte ainult:

* **OWASP Top 10:** Meie testid keskenduvad kõige kriitilisematele turvariskidele, nagu süstimine, katkenud autentimine ja rist-saidiline skriptimine (XSS).  
* **Must kasti ja halli kasti testimine:** Sõltuvalt ulatusest kasutab meie meeskond neid metoodikaid, et simuleerida nii väliseid kui ka sisemisi ründe stsenaariume.  
* **Automatiseeritud ja manuaalne testimine:** Kasutame Burp Suite Pro, juhtivat turvatestimise tööriistakomplekti, et läbi viia automatiseeritud turvaskaneeringuid ning toetada manuaalseid testimistehnikaid keerukate haavatavuste tuvastamiseks ja parima katvuse saavutamiseks. Mõne spetsiifilisema haavatavuse tuvastamiseks kasutatakse ka spetsialiseeritud tööriistu, nt SQLmap.

## Leidude kokkuvõte

Järgmine on meie viimase sissetungimise testimise aruande kõrgetasemeline kokkuvõte:

* **Kokku tuvastatud haavatavused:** 2  
* **Tõsiduse jaotus:**  
  * Kriitiline: 2  
* **Tuvastatud haavatavuste tüübid:**  
  * Katkenud juurdepääsukontroll  
  * Ebaturvaline disain

Üksikasjalike leidude jaoks palun vaadake täielikku aruannet.

### Riskihinnangud ja mõju

Mõlemad leitud haavatavused on hinnatud kriitilisteks, kuna mõlemad võisid põhjustada tõsiseid rahalisi tagajärgi. Esimene võimaldas pahatahtlikul autentitud kasutajal kontrollida teise ettevõtte Trippay maksekontot. Teine haavatavus võimaldas pahatahtlikul kasutajal muuta broneeringu maksmiseks nõutavat summat.

### Parandus- ja leevendusmeetmed

Oleme võtnud järgmised sammud tuvastatud haavatavuste kõrvaldamiseks:

* **Kohesed plaastrid:** Kriitilised haavatavused parandati 48 tunni jooksul pärast avastamist.  
* **Koodi ülevaatus ja tugevdamine:** Arendusmeeskond on rakendanud täiendavaid turvakontrolle meie soovituste põhjal.

## Pidev parendamine

Sissetungimise testimine on osa meie laiemast strateegiast pidevaks turvalisuse parandamiseks. Iga testi leiud juhivad meie turvapoliitikaid, mõjutavad arenduspraktikaid ja suunavad turvarajatiste täiustamist.

## Meeskonna ekspertteadmised

Meie sissetungimise testid viib läbi siseekspert, kellel on ulatuslik kogemus erinevate projektide ja tööstusharude alal. Kasutades juhtivaid tööriistu ja meetodeid, tagab meie ekspert, et meie rakendus on põhjalikult testitud uusimate turvaohtude vastu.

## Pühendumus turvalisusele

Oleme pühendunud turvalise rakenduskeskkonna säilitamisele oma kasutajatele ja sidusrühmadele. Meie pidevad jõupingutused turvatestimisel ja parendamisel näitavad meie pühendumust kaitsta muutuvate ohtude eest.

## Aruandele juurdepääs ja uuendused

Seda dokumenti uuendatakse pidevalt, kui väljastatakse uusi sissetungimise testimise aruandeid. Täieliku aruande saamiseks võtke palun ühendust alloleva e-posti aadressi kaudu. Tulevased uuendused sisaldavad uusi tuvastatud haavatavusi, parandusmeetmeid ja meie testimismetoodikate kohandusi.

Lisaküsimuste korral palun võtke ühendust aadressil security@wink.travel.
