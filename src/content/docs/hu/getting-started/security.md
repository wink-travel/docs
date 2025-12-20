---
title: Biztonság
description: Ez a cikk tartalmazza az általunk bevezetett biztonsági intézkedéseket, amelyeket évente közzétesz harmadik fél biztonsági cége.
sidebar:
  order: 6
---

# Wink Biztonsági Áttekintő Dokumentum

*Utolsó frissítés: 2024. szeptember 7.*

*Verzió 1.0*

## Cél és Hatály

A biztonság és a felhasználói adatok védelme iránti folyamatos elkötelezettségünk részeként rendszeres behatolásvizsgálatokat végzünk webalkalmazásunkon. Ez a dokumentum ismerteti a tesztelési módszertanainkat, összefoglalja az eredményeket, és kiemeli a folyamatos biztonsági fejlesztéshez való hozzáállásunkat.

A dokumentumot frissítjük, amikor új jelentések készülnek, vagy jelentős változások történnek.

A hatályba tartozó domainek:  
\*.wink.travel  
\*.trippay.io

## Tesztelési Gyakoriság és Ütemezés

Befolyásvizsgálatainkat évente végezzük, további teszteket pedig szükség szerint ütemezünk az alkalmazás vagy az infrastruktúra jelentős frissítései után. Ez a rendszeres tesztelési ritmus biztosítja, hogy lépést tartsunk a fejlődő fenyegetésekkel, és biztonságos környezetet tartsunk fenn.

## Tesztelési Módszertanok

Befolyásvizsgálataink átfogóak, és számos biztonsági szempontot lefednek, többek között:

* **OWASP Top 10:** Tesztjeink kifejezetten a legkritikusabb biztonsági kockázatokra irányulnak, mint például az Injection, a Sérült hitelesítés és a Cross-Site Scripting (XSS).  
* **Black Box és Grey Box Tesztelés:** A hatókörtől függően csapatunk ezeket a módszereket alkalmazza, hogy szimulálja mind a külső, mind a belső támadási forgatókönyveket.  
* **Automatizált és Manuális Tesztelés:** A Burp Suite Pro, egy vezető biztonsági tesztelő eszközkészlet segítségével automatizált biztonsági vizsgálatokat végzünk, valamint támogatjuk a manuális tesztelési technikákat a komplex sebezhetőségek azonosítására és a lehető legjobb lefedettség elérésére. Specifikusabb sebezhetőség-azonosításhoz néhány speciális eszközt is használunk, pl. SQLmap.

## Eredmények Összefoglalása

Az alábbiakban a legutóbbi behatolásvizsgálati jelentésünk magas szintű összefoglalója található:

* **Összes azonosított sebezhetőség:** 2  
* **Súlyossági eloszlás:**  
  * Kritikus: 2  
* **Azonosított sebezhetőségek típusai:**  
  * Sérült hozzáférés-vezérlés  
  * Biztonságtalan tervezés

A részletes eredményekért kérjük, tekintse meg a teljes jelentést.

### Kockázati Értékelések és Hatás

Mindkét talált sebezhetőség kritikus besorolású, mivel mindkettő súlyos pénzügyi következményekkel járhatott volna. Az első lehetővé tette egy rosszindulatú, hitelesített felhasználó számára, hogy átvegye egy másik cég Trippay fizetési fiókjának irányítását. A második sebezhetőség lehetővé tette egy rosszindulatú felhasználó számára, hogy módosítsa a foglaláshoz szükséges fizetendő összeget.

### Javítási és Mérséklési Intézkedések

A következő lépéseket tettük az azonosított sebezhetőségek kezelésére:

* **Azonnali javítások:** A kritikus sebezhetőségeket 48 órán belül javítottuk a felfedezés után.  
* **Kódáttekintés és megerősítés:** A fejlesztőcsapat további biztonsági kontrollokat vezetett be ajánlásaink alapján.

## Folyamatos Fejlesztés

A behatolásvizsgálat a folyamatos biztonsági fejlesztés szélesebb stratégiájának része. Minden teszt eredményei irányt mutatnak biztonsági szabályzatainkhoz, befolyásolják a fejlesztési gyakorlatokat, és elősegítik biztonsági architektúránk fejlesztését.

## Csapat Szakértelme

Befolyásvizsgálatainkat egy házon belüli szakember végzi, aki széleskörű tapasztalattal rendelkezik különböző projektekben és iparágakban. Vezető eszközök és módszerek alkalmazásával szakértőnk biztosítja, hogy alkalmazásunk alaposan tesztelve legyen a legújabb biztonsági fenyegetések ellen.

## Elkötelezettség a Biztonság Mellett

Elkötelezettek vagyunk egy biztonságos alkalmazási környezet fenntartása iránt felhasználóink és érintettjeink számára. Folyamatos biztonsági tesztelési és fejlesztési erőfeszítéseink bizonyítják elkötelezettségünket a fejlődő fenyegetések elleni védelem iránt.

## Jelentés Hozzáférés és Frissítések

Ezt a dokumentumot folyamatosan frissítjük, amint új behatolásvizsgálati jelentések készülnek. A teljes jelentés eléréséhez kérjük, vegye fel velünk a kapcsolatot az alábbi e-mail címen. A jövőbeni frissítések tartalmazni fogják az újonnan azonosított sebezhetőségeket, a javítási intézkedéseket és a tesztelési módszertanok módosításait.

További kérdések esetén kérjük, írjon a security@wink.travel címre.
