---
title: Saugumas
description: Šiame straipsnyje pateikta informacija apie saugumo priemones, kurias įgyvendiname, ir kurios kasmet skelbiamos mūsų trečiosios šalies saugumo įmonės.
sidebar:
  order: 6
---

# Wink saugumo apžvalgos dokumentas

*Paskutinį kartą atnaujinta: 2024 m. rugsėjo 7 d.*

*Versija 1.0*

## Tikslas ir apimtis

Kaip dalis mūsų nuolatinio įsipareigojimo saugumui ir naudotojų duomenų apsaugai, reguliariai atliekame įsiskverbimo testavimą mūsų internetinėje programoje. Šiame dokumente aprašomos mūsų testavimo metodikos, pateikiama rezultatų santrauka ir pabrėžiamas mūsų požiūris į nuolatinį saugumo tobulinimą.

Šis dokumentas bus atnaujinamas, kai bus parengtos naujos ataskaitos arba įvyks reikšmingi pokyčiai.

Apimties domenai:  
\*.wink.travel  
\*.trippay.io

## Testavimo dažnumas ir tvarkaraštis

Mūsų įsiskverbimo testai atliekami kasmet, o papildomi testai planuojami pagal poreikį po reikšmingų programos ar infrastruktūros atnaujinimų. Šis reguliarus testavimo ritmas užtikrina, kad mes išliktume žingsniu priekyje nuo kintančių grėsmių ir palaikytume saugią aplinką.

## Testavimo metodikos

Mūsų įsiskverbimo testavimas yra išsamus ir apima platų saugumo aspektų spektrą, įskaitant, bet neapsiribojant:

* **OWASP Top 10:** Mūsų testai specialiai taikomi svarbiausioms saugumo rizikoms, tokioms kaip injekcija, pažeista autentifikacija ir kryžminis svetainių skriptavimas (XSS).  
* **Juodojo ir pilkojo lango testavimas:** Priklausomai nuo apimties, mūsų komanda naudoja šias metodikas, kad simuliuotų tiek išorinius, tiek vidinius atakų scenarijus.  
* **Automatizuotas ir rankinis testavimas:** Naudojame Burp Suite Pro – pirmaujančią saugumo testavimo įrankių rinkinį, kad atliktume automatizuotus saugumo skenavimus ir padėtume rankiniams testavimo metodams identifikuoti sudėtingas spragas bei užtikrinti kuo geresnį aprėptį. Dėl specifinių pažeidžiamumų identifikavimo naudojami kai kurie specializuoti įrankiai, pvz., SQLmap.

## Rezultatų santrauka

Žemiau pateikiama aukšto lygio mūsų naujausios įsiskverbimo testavimo ataskaitos santrauka:

* **Iš viso nustatyta pažeidžiamumų:** 2  
* **Rimties pasiskirstymas:**  
  * Kritiniai: 2  
* **Nustatytų pažeidžiamumų tipai:**  
  * Pažeista prieigos kontrolė  
  * Nesaugus dizainas

Išsamesniems rezultatams žr. visą ataskaitą.

### Rizikos įvertinimai ir poveikis

Abu rastieji pažeidžiamumai įvertinti kaip kritiniai, nes abu galėjo turėti rimtų finansinių pasekmių. Pirmasis leido piktavaliui autentifikuotam naudotojui perimti kitos įmonės Trippay mokėjimo paskyros kontrolę. Antrasis pažeidžiamumas leido piktavaliui naudotojui pakeisti užsakymo mokėjimo sumą.

### Šalinimo ir mažinimo priemonės

Imtasi šių veiksmų, siekiant pašalinti nustatytus pažeidžiamumus:

* **Skubūs pataisymai:** Kritiniai pažeidžiamumai buvo ištaisyti per 48 valandas nuo jų nustatymo.  
* **Kodo peržiūra ir stiprinimas:** Kūrėjų komanda įdiegė papildomas saugumo priemones pagal mūsų rekomendacijas.

## Nuolatinis tobulinimas

Įsiskverbimo testavimas yra mūsų platesnės nuolatinio saugumo tobulinimo strategijos dalis. Kiekvieno testo rezultatai formuoja mūsų saugumo politiką, daro įtaką kūrimo praktikoms ir skatina patobulinimus mūsų saugumo architektūroje.

## Komandos kompetencija

Mūsų įsiskverbimo testavimą atlieka vidinis specialistas, turintis didelę patirtį įvairiuose projektuose ir pramonės šakose. Naudodamas pirmaujančius įrankius ir metodus, mūsų ekspertas užtikrina, kad mūsų programa būtų kruopščiai patikrinta prieš naujausias saugumo grėsmes.

## Įsipareigojimas saugumui

Esame pasiryžę palaikyti saugią programos aplinką mūsų naudotojams ir suinteresuotosioms šalims. Mūsų nuolatiniai saugumo testavimo ir tobulinimo veiksmai rodo mūsų įsipareigojimą apsaugoti nuo kintančių grėsmių.

## Ataskaitos prieiga ir atnaujinimai

Šis dokumentas bus nuolat atnaujinamas, kai bus išleistos naujos įsiskverbimo testų ataskaitos. Norėdami gauti visą ataskaitą, susisiekite su mumis per žemiau nurodytą el. paštą. Būsimi atnaujinimai apims naujai nustatytus pažeidžiamumus, šalinimo veiksmus ir mūsų testavimo metodikų koregavimus.

Dėl papildomų klausimų prašome kreiptis el. paštu security@wink.travel.
