---
title: Security
description: >-
  Ta članek vsebuje informacije o varnostnih ukrepih, ki jih izvajamo in jih
  vsako leto objavlja naše zunanje varnostno podjetje.
sidebar:
  order: 6
---
# Pregledni dokument o varnosti Wink

*Zadnja posodobitev: 7. september 2024*

*Različica 1.0*

## Namen in področje uporabe

Kot del naše nenehne zavezanosti varnosti in zaščiti uporabniških podatkov redno izvajamo testiranje penetracije naše spletne aplikacije. Ta dokument opisuje naše metodologije testiranja, vsebuje povzetek ugotovitev in poudarja naš pristop k nenehnemu izboljševanju varnosti.

Ta dokument bo posodobljen, ko bodo pripravljena nova poročila ali ko bodo prišlo do večjih sprememb.

Domene v obsegu:\
\*.wink.travel\
\*.trippay.io

## Pogostost in urnik testiranja

Naši testi penetracije se izvajajo letno, dodatni testi pa so načrtovani po potrebi po večjih posodobitvah aplikacije ali infrastrukture. Ta redna kadenca testiranja zagotavlja, da smo korak pred razvijajočimi se grožnjami in ohranjamo varno okolje.

## Metodologije testiranja

Naše testiranje penetracije je celovito in zajema širok spekter varnostnih vidikov, vključno z, vendar ne omejeno na:

* **Najboljših 10 na lestvici OWASP:**&#x4E;aši testi so posebej usmerjeni na najkritičnejša varnostna tveganja, kot so vbrizgavanje, prekinjena avtentikacija in medspletno skriptanje (XSS).
* **Testiranje črne in sive škatle:**&#x47;lede na obseg naša ekipa uporablja te metodologije za simulacijo zunanjih in notranjih scenarijev napadov.
* **Avtomatizirano in ročno testiranje:**&#x5A;a izvajanje avtomatiziranih varnostnih pregledov in kot pomoč pri tehnikah ročnega testiranja za prepoznavanje kompleksnih ranljivosti in doseganje najboljše možne pokritosti uporabljamo Burp Suite Pro, vodilni nabor orodij za varnostno testiranje. Za natančnejšo identifikacijo ranljivosti uporabljamo nekatera specializirana orodja, npr. SQLmap.

## Povzetek ugotovitev

Sledi povzetek našega najnovejšega poročila o testiranju penetracije:

* **Skupno število ugotovljenih ranljivosti:**&#x32;
* **Porazdelitev resnosti:**
  * Kritično: 2
* **Vrste zaznanih ranljivosti:**
  * Prekinjen nadzor dostopa
  * Nevarna zasnova

Za podrobnejše ugotovitve glejte celotno poročilo.

### Ocene tveganja in vpliv

Obe najdeni ranljivosti sta ocenjeni kot kritični, saj bi lahko imeli resne finančne posledice. Prva je zlonamernemu overjenemu uporabniku omogočila, da je pridobil nadzor nad plačilnim računom Trippay drugega podjetja. Druga ranljivost je zlonamernemu uporabniku omogočila, da je spremenil znesek plačila, zahtevanega za rezervacijo.

### Prizadevanja za sanacijo in blaženje

Za odpravo ugotovljenih ranljivosti smo sprejeli naslednje ukrepe:

* **Takojšnji popravki:**&#x4B;ritične ranljivosti so bile odpravljene v 48 urah po odkritju.
* **Pregled in utrjevanje kode:**&#x52;azvojna ekipa je na podlagi naših priporočil uvedla dodatne varnostne kontrole.

## Nenehno izboljševanje

Testiranje vdora je del naše širše strategije za nenehno izboljševanje varnosti. Ugotovitve vsakega testa usmerjajo naše varnostne politike, vplivajo na razvojne prakse in spodbujajo izboljšave naše varnostne arhitekture.

## Strokovno znanje ekipe

Naše testiranje penetracije izvaja interni strokovnjak z bogatimi izkušnjami na različnih projektih in v različnih panogah. Z uporabo vodilnih orodij in metod naš strokovnjak zagotavlja, da je naša aplikacija temeljito preizkušena glede najnovejših varnostnih groženj.

## Zavezanost varnosti

Predani smo vzdrževanju varnega aplikacijskega okolja za naše uporabnike in deležnike. Naša nenehna prizadevanja za varnostno testiranje in izboljšanje dokazujejo našo zavezanost zaščiti pred nenehno razvijajočimi se grožnjami.

## Dostop do poročil in posodobitve

Ta dokument se bo nenehno posodabljal, ko bodo izdana nova poročila o penetracijskih testih. Za dostop do celotnega poročila nas kontaktirajte na spodnji e-poštni naslov. Prihodnje posodobitve bodo vključevale na novo odkrite ranljivosti, prizadevanja za odpravo napak in prilagoditve naših metodologij testiranja.

Za dodatna vprašanja se obrnite na security@wink.travel.

