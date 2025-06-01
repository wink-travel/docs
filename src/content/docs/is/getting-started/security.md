---
title: Security
description: >-
  Þessi grein inniheldur upplýsingar um öryggisráðstafanir sem við innleiðum og
  eru birtar árlega af þriðja aðila öryggisfyrirtæki okkar.
sidebar:
  order: 6
---
# Yfirlitsskjal um öryggi Wink

*Síðast uppfært: 7. september 2024*

*Útgáfa 1.0*

## Tilgangur og gildissvið

Sem hluti af áframhaldandi skuldbindingu okkar við öryggi og verndun notendagagna framkvæmum við reglulegar öryggisprófanir á vefforriti okkar. Þetta skjal lýsir prófunaraðferðum okkar, veitir samantekt á niðurstöðum og varpar ljósi á aðferðir okkar við stöðugar öryggisbætur.

Þetta skjal verður uppfært þegar nýjar skýrslur eru gefnar út eða þegar verulegar breytingar eiga sér stað.

Lén innan gildissviðs:\
\*.wink.travel\
\*.trippay.io

## Prófunartíðni og áætlun

Prófanir okkar eru framkvæmdar árlega og viðbótarprófanir eru áætlaðar eftir þörfum í kjölfar verulegra uppfærslna á forritum eða innviðum. Þessi reglulega prófunartíðni tryggir að við séum á undan síbreytilegum ógnum og viðhöldum öruggu umhverfi.

## Prófunaraðferðir

Öryggisprófanir okkar eru ítarlegar og ná yfir fjölbreytt úrval öryggisþátta, þar á meðal en ekki takmarkað við:

* **OWASP topp 10:**&#x50;rófanir okkar beinast sérstaklega að mikilvægustu öryggisáhættu, svo sem innspýtingu, bilaðri auðkenningu og skriftum á milli vefsíðna (XSS).
* **Prófun á svörtum kassa og gráum kassa:**&#x45;ftir umfangi notar teymið okkar þessar aðferðafræði til að herma eftir bæði ytri og innri árásarsviðsmyndum.
* **Sjálfvirk og handvirk prófun:**&#x56;ið notum Burp Suite Pro, leiðandi öryggisprófunartól, til að framkvæma sjálfvirkar öryggisskannanir og til að aðstoða handvirkar prófunaraðferðir til að bera kennsl á flóknar veikleika og fá bestu mögulegu umfjöllun. Til að greina veikleika ítarlegar eru sérstök verkfæri notuð, t.d. SQLmap.

## Yfirlit yfir niðurstöður

Eftirfarandi er samantekt á nýjustu skýrslu okkar um skarpskyggnisprófanir:

* **Heildarfjöldi veikleika sem greindir voru:**&#x32;
* **Alvarleikadreifing:**
  * Mikilvægt: 2
* **Tegundir öryggisgalla sem greindar voru:**
  * Biluð aðgangsstýring
  * Óörugg hönnun

Fyrir ítarlegri niðurstöður, vinsamlegast vísið til skýrslunnar í heild sinni.

### Áhættumat og áhrif

Báðir fundnu veikleikarnir eru flokkaðir sem alvarlegir þar sem báðir hefðu getað haft alvarleg fjárhagsleg áhrif. Sá fyrsti gerði illgjarnum, auðkenndum notanda kleift að fá stjórn á Trippay greiðslureikningi annars fyrirtækis. Seinni veikleikinn gerði illgjarnum notanda kleift að breyta greiðsluupphæð sem krafist er fyrir bókun.

### Úrbætur og mótvægisaðgerðir

Við höfum gripið til eftirfarandi aðgerða til að bregðast við þeim veikleikum sem komu í ljós:

* **Tafarlausar uppfærslur:**&#x4D;ikilvægustu veikleikarnir hafa verið lagfærðir innan 48 klukkustunda frá því að þeir uppgötvuðust.
* **Kóðaendurskoðun og herðing:**&#xDE;róunarteymið hefur innleitt viðbótaröryggisráðstafanir byggðar á tillögum okkar.

## Stöðug framför

Öryggisprófanir eru hluti af víðtækari stefnu okkar til stöðugra öryggisbóta. Niðurstöður hverrar prófunar leiðbeina öryggisstefnu okkar, hafa áhrif á þróunaraðferðir og knýja áfram úrbætur í öryggisarkitektúr okkar.

## Sérfræðiþekking teymisins

Öryggisprófanir okkar eru framkvæmdar af sérfræðingi innan fyrirtækisins með mikla reynslu af ýmsum verkefnum og atvinnugreinum. Sérfræðingur okkar notar leiðandi verkfæri og aðferðir til að tryggja að forrit okkar sé vandlega prófað gegn nýjustu öryggisógnum.

## Skuldbinding til öryggis

Við leggjum okkur fram um að viðhalda öruggu forritaumhverfi fyrir notendur okkar og hagsmunaaðila. Stöðug viðleitni okkar í öryggisprófunum og umbótum sýnir fram á skuldbindingu okkar til að vernda gegn sífellt vaxandi ógnum.

## Aðgangur að skýrslum og uppfærslur

Þetta skjal verður stöðugt uppfært þegar nýjar skýrslur um prófun á öryggi eru gefnar út. Til að fá aðgang að allri skýrslunni, vinsamlegast hafið samband við okkur í gegnum netfangið hér að neðan. Framtíðaruppfærslur munu innihalda nýgreinda veikleika, úrbætur og breytingar á prófunaraðferðum okkar.

Fyrir frekari fyrirspurnir, vinsamlegast hafið samband við security@wink.travel.

