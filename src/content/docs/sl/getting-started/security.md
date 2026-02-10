---
title: Varnost
description: Ta članek vsebuje informacije o varnostnih ukrepih, ki jih izvajamo, in jih vsako leto objavi naša zunanja varnostna družba.
sidebar:
  order: 6
---

*Zadnja posodobitev: 7. september 2024*

*Različica 1.0*

## Namen in obseg

Kot del naše stalne zaveze k varnosti in zaščiti uporabniških podatkov redno izvajamo penetracijsko testiranje naše spletne aplikacije. Ta dokument opisuje naše metode testiranja, povzema ugotovitve in izpostavlja naš pristop k nenehnemu izboljševanju varnosti.

Dokument bo posodobljen, ko bodo na voljo novi poročili ali ob pomembnih spremembah.

Domena v obsegu:  
\*.wink.travel  
\*.trippay.io

## Pogostost in razpored testiranja

Naše penetracijsko testiranje poteka letno, dodatni testi pa so načrtovani po potrebi, zlasti po pomembnih posodobitvah aplikacije ali infrastrukture. Ta redni ritem testiranja zagotavlja, da smo korak pred spreminjajočimi se grožnjami in ohranjamo varno okolje.

## Metode testiranja

Naše penetracijsko testiranje je celovito in zajema širok spekter varnostnih vidikov, vključno, a ne omejeno na:

* **OWASP Top 10:** Naši testi so posebej usmerjeni na najpomembnejša varnostna tveganja, kot so Injection, Broken Authentication in Cross-Site Scripting (XSS).  
* **Black Box in Grey Box testiranje:** Glede na obseg naš tim uporablja ti metodi za simulacijo zunanjih in notranjih napadov.  
* **Avtomatizirano in ročno testiranje:** Uporabljamo Burp Suite Pro, vodilno orodje za varnostno testiranje, za izvajanje avtomatiziranih varnostnih pregledov in podporo ročnim tehnikam za odkrivanje zapletenih ranljivosti ter doseganje najboljše možne pokritosti. Za specifično identifikacijo ranljivosti uporabljamo tudi specializirana orodja, npr. SQLmap.

## Povzetek ugotovitev

Spodaj je visok nivo povzetka našega najnovejšega poročila o penetracijskem testiranju:

* **Skupno odkritih ranljivosti:** 2  
* **Razporeditev po resnosti:**  
  * Kritične: 2  
* **Vrste odkritih ranljivosti:**  
  * Prekinjena kontrola dostopa  
  * Nevarna zasnova

Za podrobne ugotovitve si oglejte celotno poročilo.

### Ocene tveganj in vpliv

Obe najdeni ranljivosti sta ocenjeni kot kritični, saj bi obe lahko imeli hude finančne posledice. Prva je omogočila zlonamernemu avtenticiranemu uporabniku prevzem nadzora nad Trippay plačilnim računom drugega podjetja. Druga ranljivost je omogočila zlonamernemu uporabniku spreminjanje zneska plačila, potrebnega za rezervacijo.

### Ukrepi za odpravo in ublažitev

Sprejeli smo naslednje ukrepe za odpravo odkritih ranljivosti:

* **Takojšnje popravke:** Kritične ranljivosti so bile odpravljene v 48 urah po odkritju.  
* **Pregled kode in utrjevanje:** Razvojna ekipa je na podlagi naših priporočil uvedla dodatne varnostne kontrole.

## Nenehno izboljševanje

Penetracijsko testiranje je del naše širše strategije za nenehno izboljševanje varnosti. Ugotovitve vsakega testa usmerjajo naše varnostne politike, vplivajo na razvojne prakse in spodbujajo izboljšave v naši varnostni arhitekturi.

## Strokovnost ekipe

Naše penetracijsko testiranje izvaja notranji strokovnjak z obsežnimi izkušnjami na različnih projektih in v panogah. Z uporabo vodilnih orodij in metod naš strokovnjak zagotavlja temeljito testiranje aplikacije proti najnovejšim varnostnim grožnjam.

## Zavezanost varnosti

Zavezani smo k vzdrževanju varnega okolja aplikacije za naše uporabnike in deležnike. Naša stalna prizadevanja pri varnostnem testiranju in izboljšavah dokazujejo našo zavezanost zaščiti pred spreminjajočimi se grožnjami.

## Dostop do poročila in posodobitve

Ta dokument bo nenehno posodabljan z izdajo novih poročil o penetracijskem testiranju. Za dostop do celotnega poročila nas kontaktirajte na spodnji e-poštni naslov. Prihodnje posodobitve bodo vključevale novo odkrite ranljivosti, ukrepe za odpravo in prilagoditve naših metod testiranja.

Za dodatna vprašanja nas kontaktirajte na security@wink.travel.
