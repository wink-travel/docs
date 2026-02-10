---
title: Öryggi
description: Þessi grein inniheldur upplýsingar um þær öryggisráðstafanir sem við innleiðum og eru birtar árlega af þriðja aðila öryggisfyrirtæki okkar.
sidebar:
  order: 6
---

*Síðast uppfært: 7. september 2024*

*Útgáfa 1.0*

## Tilgangur og umfang

Sem hluti af okkar stöðugu skuldbindingu við öryggi og verndun notendagagna framkvæmum við reglulega innbrotaprófanir á vefumsókn okkar. Þessi skjöl lýsa prófunaraðferðum okkar, gefa yfirlit yfir niðurstöður og varpa ljósi á nálgun okkar við stöðuga öryggisbót.

Þessi skjöl verða uppfærð þegar nýjar skýrslur berast eða þegar verulegar breytingar eiga sér stað.

Lén innan umfangs:  
\*.wink.travel  
\*.trippay.io

## Tíðni og tímasetning prófana

Innbrotaprófanir okkar eru framkvæmdar árlega, auk þess sem frekari prófanir eru skipulagðar eftir þörfum eftir verulegar uppfærslur á umsókn eða innviðum. Þessi reglulega prófun tryggir að við séum á undan þróun ógnanna og viðhalda öruggu umhverfi.

## Prófunaraðferðir

Innbrotaprófanir okkar eru ítarlegar og ná yfir fjölbreytt öryggisatriði, þar á meðal en ekki takmarkað við:

* **OWASP Top 10:** Prófanir okkar beinast sérstaklega að þeim alvarlegustu öryggisógnum, svo sem Injection, Broken Authentication og Cross-Site Scripting (XSS).  
* **Black Box og Grey Box prófanir:** Fer eftir umfangi, notar teymið þessar aðferðir til að líkja eftir bæði ytri og innri árásarsviðum.  
* **Sjálfvirkar og handvirkar prófanir:** Við notum Burp Suite Pro, leiðandi öryggisprófunartól, til að framkvæma sjálfvirkar öryggisskönnanir og styðja við handvirkar prófanir til að greina flóknar veikleika og ná sem bestum árangri. Fyrir sértækari veikleikagreiningu eru notuð sérhæfð verkfæri, t.d. SQLmap.

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

Báðir veikleikarnir sem fundust eru metnir sem alvarlegir þar sem báðir gætu haft alvarleg fjárhagsleg áhrif. Sá fyrri leyfði illgjarnan auðkenndan notanda að ná stjórn á Trippay greiðslureikningi annars fyrirtækis. Sá seinni leyfði illgjarnan notanda að breyta greiðslufjárhæð fyrir bókun.

### Viðgerðir og bætur

Við höfum gripið til eftirfarandi aðgerða til að bregðast við þeim veikleikum sem fundust:

* **Strax viðgerðir:** Alvarlegu veikleikarnir voru lagaðir innan 48 klukkustunda frá uppgötvun.  
* **Endurskoðun kóða og styrking:** Þróunarteymið hefur innleitt auknar öryggisstýringar byggðar á okkar tillögum.

## Stöðugar umbætur

Innbrotaprófanir eru hluti af víðtækri stefnu okkar um stöðugar öryggisbætur. Niðurstöður hvers prófs leiðbeina öryggisstefnu okkar, hafa áhrif á þróunarvenjur og knýja fram endurbætur í öryggisarkitektúr okkar.

## Sérfræðiþekking teymis

Innbrotaprófanir okkar eru framkvæmdar af innanhúss sérfræðingi með víðtæka reynslu úr fjölmörgum verkefnum og atvinnugreinum. Með notkun leiðandi tækja og aðferða tryggir sérfræðingurinn að umsóknin sé ítarlega prófuð gegn nýjustu öryggisógnum.

## Skuldbinding við öryggi

Við erum staðráðin í að viðhalda öruggu umsóknarumhverfi fyrir notendur okkar og hagsmunaaðila. Stöðugar viðleitni okkar til öryggisprófana og umbóta sýnir skuldbindingu okkar til að vernda gegn síbreytilegum ógnunum.

## Aðgangur að skýrslum og uppfærslur

Þessi skjöl verða reglulega uppfærð þegar nýjar innbrotaprófunarskýrslur berast. Til að fá aðgang að fullri skýrslu, vinsamlegast hafið samband við okkur í gegnum netfangið hér að neðan. Framtíðaruppfærslur munu innihalda nýlega greinda veikleika, viðgerðir og breytingar á prófunaraðferðum okkar.

Fyrir frekari fyrirspurnir, vinsamlegast hafið samband við security@wink.travel.
