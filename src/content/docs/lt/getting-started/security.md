---
title: Security
description: >-
  Šiame straipsnyje pateikiama informacija apie mūsų įgyvendinamas saugumo
  priemones, kurias kasmet skelbia mūsų trečiosios šalies saugos įmonė.
sidebar:
  order: 6
---
# „Wink“ saugumo apžvalgos dokumentas

*Paskutinį kartą atnaujinta: 2024 m. rugsėjo 7 d.*

*1.0 versija*

## Tikslas ir taikymo sritis

Kadangi esame nuolat įsipareigoję užtikrinti saugumą ir apsaugoti naudotojų duomenis, reguliariai atliekame savo žiniatinklio programos įsiskverbimo testavimą. Šiame dokumente aprašomos mūsų testavimo metodikos, pateikiama išvadų santrauka ir pabrėžiamas mūsų požiūris į nuolatinį saugumo gerinimą.

Šis dokumentas bus atnaujinamas, kai bus parengtos naujos ataskaitos arba įvyks reikšmingų pakeitimų.

Aprėpties sritys:\
\*.wink.travel\
\*.trippay.io

## Testavimo dažnumas ir grafikas

Mūsų įsiskverbimo testai atliekami kasmet, o papildomi testai planuojami pagal poreikį, atlikus reikšmingus programos ar infrastruktūros atnaujinimus. Toks reguliarus testavimo dažnumas užtikrina, kad neatsiliktume nuo besivystančių grėsmių ir palaikytume saugią aplinką.

## Testavimo metodikos

Mūsų skverbties testavimas yra išsamus ir apima platų saugumo aspektų spektrą, įskaitant, bet neapsiribojant:

* **OWASP 10 geriausiųjų:**&#x4D;ūsų testai yra specialiai skirti svarbiausioms saugumo rizikoms, tokioms kaip injekcija, sugadinta autentifikacija ir kelių svetainių scenarijų apdorojimas (XSS).
* **Juodosios ir pilkosios dėžės testavimas:**&#x50;riklausomai nuo apimties, mūsų komanda naudoja šias metodikas išorinių ir vidinių atakų scenarijams imituoti.
* **Automatinis ir rankinis testavimas:**&#x4D;es naudojame „Burp Suite Pro“ – pirmaujantį saugumo testavimo įrankių rinkinį, skirtą automatizuotiems saugumo nuskaitymams atlikti ir rankinio testavimo metodams palengvinti, siekiant nustatyti sudėtingus pažeidžiamumus ir gauti geriausią įmanomą aprėptį. Tikslesniam pažeidžiamumų identifikavimui naudojami specializuoti įrankiai, pvz., „SQLmap“.

## Išvadų santrauka

Toliau pateikiama trumpa mūsų naujausios įsiskverbimo testavimo ataskaitos santrauka:

* **Iš viso nustatytų pažeidžiamumų:**&#x32;
* **Sunkumo pasiskirstymas:**
  * Kritinis: 2
* **Aptiktų pažeidžiamumų tipai:**
  * Sugedusi prieigos kontrolė
  * Nesaugus dizainas

Išsamesnės išvados pateikiamos išsamioje ataskaitoje.

### Rizikos įvertinimai ir poveikis

Abu rasti pažeidžiamumai įvertinti kaip kritiniai, nes abu galėjo turėti rimtų finansinių pasekmių. Pirmasis leido kenkėjiškam autentifikuotam vartotojui perimti kitos įmonės „Trippay“ mokėjimo sąskaitos valdymą. Antrasis pažeidžiamumas leido kenkėjiškam vartotojui pakeisti užsakymui reikalingą mokėjimo sumą.

### Pastangos ištaisyti ir sumažinti žalą

Ėmėmės šių veiksmų, kad pašalintume nustatytus pažeidžiamumus:

* **Momentiniai pataisymai:**&#x4B;ritinės spragos buvo ištaisytos per 48 valandas nuo aptikimo.
* **Kodo peržiūra ir grūdinimas:**&#x52;emdamasi mūsų rekomendacijomis, kūrimo komanda įdiegė papildomas saugumo kontrolės priemones.

## Nuolatinis tobulėjimas

Skverbties testavimas yra mūsų platesnės nuolatinio saugumo gerinimo strategijos dalis. Kiekvieno testo rezultatai lemia mūsų saugumo politiką, daro įtaką kūrimo praktikai ir skatina tobulinti mūsų saugumo architektūrą.

## Komandos kompetencija

Mūsų įsiskverbimo testavimą atlieka mūsų įmonės specialistas, turintis didelę patirtį įvairiuose projektuose ir pramonės šakose. Naudodamas pažangiausius įrankius ir metodus, mūsų ekspertas užtikrina, kad mūsų programa būtų kruopščiai patikrinta nuo naujausių saugumo grėsmių.

## Įsipareigojimas saugumui

Esame pasiryžę palaikyti saugią programų aplinką savo vartotojams ir suinteresuotosioms šalims. Nuolatinės pastangos testuoti ir tobulinti saugumą rodo mūsų įsipareigojimą apsisaugoti nuo besikeičiančių grėsmių.

## Prieiga prie ataskaitų ir atnaujinimai

Šis dokumentas bus nuolat atnaujinamas, kai bus paskelbtos naujos įsiskverbimo testų ataskaitos. Norėdami gauti visą ataskaitą, susisiekite su mumis toliau nurodytu el. pašto adresu. Būsimuose atnaujinimuose bus nurodyti naujai nustatyti pažeidžiamumai, taisomieji veiksmai ir mūsų testavimo metodikų pakeitimai.

Dėl papildomų klausimų kreipkitės el. paštu security@wink.travel.

