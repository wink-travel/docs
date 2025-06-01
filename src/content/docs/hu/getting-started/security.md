---
title: Security
description: >-
  Ez a cikk információkat tartalmaz az általunk végrehajtott biztonsági
  intézkedésekről, amelyeket harmadik féltől származó biztonsági cégünk évente
  tesz közzé.
sidebar:
  order: 6
---
# Wink biztonsági áttekintési dokumentum

*Utolsó frissítés: 2024. szeptember 7.*

*1.0 verzió*

## Cél és hatókör

A biztonság és a felhasználói adatok védelme iránti folyamatos elkötelezettségünk részeként rendszeres behatolásvizsgálatot végzünk webes alkalmazásunkon. Ez a dokumentum felvázolja tesztelési módszereinket, összefoglalja az eredményeket, és kiemeli a folyamatos biztonságfejlesztéshez való hozzáállásunkat.

Ez a dokumentum frissülni fog, amint új jelentések készülnek, vagy jelentős változások történnek.

Hatályon belüli tartományok:\
\*.wink.travel\
\*.trippay.io

## Tesztelési gyakoriság és ütemezés

Penetrációs tesztjeinket évente végezzük, további teszteket pedig szükség szerint ütemezünk az alkalmazás vagy az infrastruktúra jelentős frissítéseit követően. Ez a rendszeres tesztelési ütem biztosítja, hogy lépést tartsunk a fejlődő fenyegetésekkel, és biztonságos környezetet tartsunk fenn.

## Tesztelési módszerek

Penetrációs tesztelésünk átfogó, és a biztonsági szempontok széles skáláját fedi le, beleértve, de nem kizárólagosan:

* **OWASP Top 10:**&#x54;esztjeink kifejezetten a legkritikusabb biztonsági kockázatokat célozzák meg, mint például az injektálás, a hibás hitelesítés és a webhelyeken belüli szkriptelés (XSS).
* **Fekete doboz és szürke doboz tesztelése:**&#x41; hatókörtől függően csapatunk ezeket a módszertanokat használja mind külső, mind belső támadási forgatókönyvek szimulálására.
* **Automatizált és manuális tesztelés:**&#x41; Burp Suite Pro nevű vezető biztonsági tesztelőeszközkészletet használjuk automatizált biztonsági vizsgálatok elvégzéséhez és a manuális tesztelési technikák támogatásához, hogy azonosítsuk az összetett sebezhetőségeket és a lehető legjobb lefedettséget érjük el. A konkrétabb sebezhetőség-azonosításhoz speciális eszközöket használunk, például az SQLmap-et.

## Az eredmények összefoglalása

Az alábbiakban a legfrissebb penetrációs tesztelési jelentésünk rövid összefoglalása olvasható:

* **Azonosított sebezhetőségek összesen:**&#x32;
* **Súlyossági eloszlás:**
  * Kritikus: 2
* **Az észlelt sebezhetőségek típusai:**
  * Hibás hozzáférés-vezérlés
  * Bizonytalan tervezés

A részletes megállapításokért kérjük, tekintse meg a teljes jelentést.

### Kockázatértékelések és hatás

Mindkét talált sebezhetőséget kritikusnak minősítették, mivel mindkettő súlyos pénzügyi következményekkel járhatott. Az első lehetővé tette egy rosszindulatú, hitelesített felhasználó számára, hogy átvegye az irányítást egy másik cég Trippay fizetési számlája felett. A második sebezhetőség lehetővé tette egy rosszindulatú felhasználó számára, hogy módosítsa a foglaláshoz szükséges fizetési összeget.

### Kármentesítési és mérséklési erőfeszítések

A következő lépéseket tettük meg az azonosított sebezhetőségek kezelése érdekében:

* **Azonnali javítások:**&#x41; kritikus sebezhetőségeket a felfedezésüket követő 48 órán belül javították.
* **Kód áttekintése és megerősítése:**&#x41; fejlesztőcsapat további biztonsági ellenőrzéseket vezetett be a javaslataink alapján.

## Folyamatos fejlesztés

A behatolásvizsgálat a folyamatos biztonságfejlesztésre irányuló tágabb stratégiánk része. Az egyes tesztek eredményei irányítják biztonsági szabályzatainkat, befolyásolják a fejlesztési gyakorlatot, és ösztönzik biztonsági architektúránk fejlesztését.

## Csapat szakértelme

Penetrációs tesztelésünket házon belüli szakember végzi, aki széleskörű tapasztalattal rendelkezik különféle projektekben és iparágakban. Vezető eszközöket és módszereket használva szakértőnk biztosítja, hogy alkalmazásunkat alaposan teszteljük a legújabb biztonsági fenyegetésekkel szemben.

## Elkötelezettség a biztonság iránt

Elkötelezettek vagyunk amellett, hogy biztonságos alkalmazáskörnyezetet biztosítsunk felhasználóink ​​és érdekelt feleink számára. A biztonsági tesztelés és fejlesztés terén tett folyamatos erőfeszítéseink bizonyítják elkötelezettségünket a folyamatosan változó fenyegetések elleni védelem iránt.

## Jelentéshozzáférés és frissítések

Ez a dokumentum folyamatosan frissülni fog, amint új penetrációs tesztjelentések jelennek meg. A teljes jelentés eléréséhez kérjük, vegye fel velünk a kapcsolatot az alábbi e-mail címen. A jövőbeli frissítések tartalmazni fogják az újonnan azonosított sebezhetőségeket, a javítási erőfeszítéseket és a tesztelési módszertanaink módosításait.

További kérdésekkel kérjük, vegye fel a kapcsolatot a security@wink.travel címen.

