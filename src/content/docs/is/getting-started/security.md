---
title: Öryggi
description: Þessi grein inniheldur upplýsingar um öryggisráðstafanir sem við innleiðum og eru birtar árlega af þriðja aðila öryggisfyrirtæki okkar.
sidebar:
  order: 6
---

# Yfirlitsskjal um öryggi Wink

*Síðast uppfært: 7. september 2024*

*Útgáfa 1.0*

## Tilgangur og umfang

Sem hluti af okkar stöðugu skuldbindingu við öryggi og verndun notendagagna framkvæmum við reglulega innbrotaprófanir á vefumsókn okkar. Þetta skjal lýsir prófunaraðferðum okkar, gefur yfirlit yfir niðurstöður og dregur fram nálgun okkar á stöðuga öryggisbót.

Þetta skjal verður uppfært þegar nýjar skýrslur berast eða þegar verulegar breytingar eiga sér stað.

Lén innan umfangs:  
\*.wink.travel  
\*.trippay.io

## Tíðni og tímasetning prófana

Innbrotaprófanir okkar eru framkvæmdar árlega, með viðbótarprófum eftir þörfum eftir verulegar uppfærslur á umsókn eða innviðum. Þessi reglulega prófunarhraði tryggir að við förum á undan þróun ógnanna og viðhalda öruggu umhverfi.

## Prófunaraðferðir

Innbrotaprófanir okkar eru ítarlegar og ná yfir fjölbreytt öryggisatriði, þar á meðal en ekki takmarkað við:

* **OWASP Top 10:** Prófanir okkar beinast sérstaklega að alvarlegustu öryggisógnum, svo sem Injection, Broken Authentication og Cross-Site Scripting (XSS).  
* **Black Box og Grey Box prófanir:** Fer eftir umfangi, notar teymið þessar aðferðir til að líkja eftir bæði ytri og innri árásarsviðum.  
* **Sjálfvirkar og handvirkar prófanir:** Við notum Burp Suite Pro, leiðandi öryggisprófunartól, til að framkvæma sjálfvirkar öryggisskönnanir og styðja við handvirkar prófanir til að greina flókin veikleika og ná sem bestum yfirgrips. Fyrir sértækari veikleikagreiningu eru notuð sérhæfð verkfæri, t.d. SQLmap.

## Yfirlit yfir niðurstöður

Hér að neðan er yfirlit yfir nýjustu innbrotaprófunarskýrslu okkar:

* **Heildarfjöldi veikleika:** 2  
* **Alvarleikadreifing:**  
  * Alvarleg: 2  
* **Tegundir veikleika sem greindust:**  
  * Brot á aðgangsstýringu  
  * Óörugg hönnun

Fyrir nákvæmar niðurstöður, vinsamlegast skoðið fulla skýrslu.

### Áhættumat og áhrif

Báðir veikleikarnir sem fundust eru metnir sem alvarlegir þar sem báðir gætu haft alvarleg fjárhagsleg áhrif. Sá fyrri leyfði illgjarnan staðfestum notanda að ná stjórn á Trippay greiðslureikningi annars fyrirtækis. Sá seinni leyfði illgjarnan notanda að breyta greiðslufjárhæð fyrir bókun.

### Viðbrögð og úrbætur

Við höfum gripið til eftirfarandi aðgerða til að bregðast við greindum veikleikum:

* **Strax viðgerðir:** Alvarlegu veikleikarnir voru lagfærðir innan 48 klukkustunda frá uppgötvun.  
* **Endurskoðun kóða og styrking:** Þróunarteymið hefur innleitt auknar öryggisstýringar byggðar á tillögum okkar.

## Stöðugar umbætur

Innbrotaprófanir eru hluti af víðtækri stefnu okkar um stöðugar öryggisbætur. Niðurstöður hvers prófs leiðbeina öryggisstefnu okkar, hafa áhrif á þróunarvenjur og knýja fram endurbætur í öryggisarkitektúr okkar.

## Sérfræðiþekking teymis

Innbrotaprófanir eru framkvæmdar af innanhúss sérfræðingi með víðtæka reynslu úr fjölmörgum verkefnum og atvinnugreinum. Með notkun leiðandi tækja og aðferða tryggir sérfræðingurinn að umsóknin sé ítarlega prófuð gegn nýjustu öryggisógnum.

## Skuldbinding við öryggi

Við erum staðráðin í að viðhalda öruggu umsóknarumhverfi fyrir notendur okkar og hagsmunaaðila. Stöðugar viðleitni okkar til öryggisprófana og umbóta sýnir skuldbindingu okkar til að verjast síbreytilegum ógnunum.

## Aðgangur að skýrslum og uppfærslur

Þetta skjal verður reglulega uppfært þegar nýjar innbrotaprófunarskýrslur berast. Til að fá aðgang að fullri skýrslu, vinsamlegast hafið samband við okkur í gegnum netfangið hér að neðan. Framtíðaruppfærslur munu innihalda nýgreinda veikleika, úrbætur og breytingar á prófunaraðferðum okkar.

Fyrir frekari fyrirspurnir, vinsamlegast hafið samband við security@wink.travel.
