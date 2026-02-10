---
title: Biztonság
description: Ez a cikk tartalmazza az általunk bevezetett biztonsági intézkedéseket, amelyeket évente közzétesz harmadik fél biztonsági cége.
sidebar:
  order: 6
---

*Utolsó frissítés: 2024. szeptember 7.*

*1.0 verzió*

## Cél és hatály

A biztonság és a felhasználói adatok védelme iránti folyamatos elkötelezettségünk részeként rendszeres behatolásvizsgálatokat végzünk webalkalmazásunkon. Ez a dokumentum ismerteti a tesztelési módszertanainkat, összefoglalja az eredményeket, és kiemeli a folyamatos biztonsági fejlesztéshez való hozzáállásunkat.

A dokumentumot frissítjük, amikor új jelentések készülnek, vagy jelentős változások történnek.

A hatályba tartozó domainek:  
\*.wink.travel  
\*.trippay.io

## Tesztelési gyakoriság és ütemezés

A behatolásvizsgálatokat évente végezzük, további teszteket pedig szükség szerint ütemezünk az alkalmazás vagy az infrastruktúra jelentős frissítései után. Ez a rendszeres tesztelési ritmus biztosítja, hogy lépést tartsunk a fejlődő fenyegetésekkel, és biztonságos környezetet tartsunk fenn.

## Tesztelési módszertanok

A behatolásvizsgálatunk átfogó, és számos biztonsági szempontot lefed, többek között, de nem kizárólagosan:

* **OWASP Top 10:** Tesztjeink kifejezetten a legkritikusabb biztonsági kockázatokra fókuszálnak, mint például az Injection, a Sérült hitelesítés és a Cross-Site Scripting (XSS).  
* **Black Box és Grey Box tesztelés:** A hatókörtől függően csapatunk ezeket a módszereket alkalmazza, hogy szimulálja mind külső, mind belső támadási forgatókönyveket.  
* **Automatizált és manuális tesztelés:** A Burp Suite Pro, egy vezető biztonsági tesztelő eszközkészlet segítségével automatizált biztonsági vizsgálatokat végzünk, valamint támogatjuk a manuális tesztelési technikákat, hogy azonosítsuk a komplex sebezhetőségeket és a lehető legjobb lefedettséget érjük el. Specifikusabb sebezhetőség-azonosításhoz néhány speciális eszközt is használunk, pl. SQLmap.

## Eredmények összefoglalása

Az alábbiakban a legutóbbi behatolásvizsgálati jelentésünk magas szintű összefoglalója található:

* **Összes azonosított sebezhetőség:** 2  
* **Súlyossági megoszlás:**  
  * Kritikus: 2  
* **Azonosított sebezhetőségek típusai:**  
  * Sérült hozzáférés-vezérlés  
  * Biztonságtalan tervezés

A részletes eredményekért kérjük, tekintse meg a teljes jelentést.

### Kockázati besorolások és hatás

Mindkét talált sebezhetőség kritikus besorolást kapott, mivel mindkettő súlyos pénzügyi következményekkel járhatott volna. Az első lehetővé tette egy rosszindulatú, hitelesített felhasználó számára, hogy átvegye egy másik cég Trippay fizetési fiókjának irányítását. A második sebezhetőség lehetővé tette egy rosszindulatú felhasználó számára, hogy módosítsa a foglaláshoz szükséges fizetendő összeget.

### Javítási és enyhítési intézkedések

A következő lépéseket tettük az azonosított sebezhetőségek kezelésére:

* **Azonnali javítások:** A kritikus sebezhetőségeket 48 órán belül javítottuk a felfedezés után.  
* **Kódáttekintés és megerősítés:** A fejlesztőcsapat további biztonsági kontrollokat vezetett be az ajánlásaink alapján.

## Folyamatos fejlesztés

A behatolásvizsgálat a folyamatos biztonsági fejlesztés szélesebb stratégiájának része. Minden teszt eredményei irányt mutatnak biztonsági szabályzatainkhoz, befolyásolják a fejlesztési gyakorlatokat, és elősegítik biztonsági architektúránk fejlesztését.

## Csapat szakértelme

Behatalomvizsgálatainkat egy házon belüli szakember végzi, aki széleskörű tapasztalattal rendelkezik különböző projektekben és iparágakban. Vezető eszközök és módszerek alkalmazásával szakértőnk biztosítja, hogy alkalmazásunk alaposan tesztelve legyen a legújabb biztonsági fenyegetések ellen.

## Elkötelezettség a biztonság mellett

Elkötelezettek vagyunk egy biztonságos alkalmazási környezet fenntartása iránt felhasználóink és érintettjeink számára. Folyamatos biztonsági tesztelési és fejlesztési erőfeszítéseink bizonyítják elkötelezettségünket a fejlődő fenyegetések elleni védelem iránt.

## Jelentés elérése és frissítések

Ezt a dokumentumot folyamatosan frissítjük, amint új behatolásvizsgálati jelentések készülnek. A teljes jelentés eléréséhez kérjük, vegye fel velünk a kapcsolatot az alábbi e-mail címen. A jövőbeni frissítések tartalmazni fogják az újonnan azonosított sebezhetőségeket, a javítási intézkedéseket és a tesztelési módszertanok módosításait.

További kérdések esetén kérjük, írjon a security@wink.travel címre.
