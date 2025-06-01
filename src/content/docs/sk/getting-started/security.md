---
title: Security
description: >-
  Tento článok obsahuje informácie o bezpečnostných opatreniach, ktoré
  implementujeme a ktoré každoročne publikuje naša externá bezpečnostná firma.
sidebar:
  order: 6
---
# Prehľad zabezpečenia Wink

*Posledná aktualizácia: 7. septembra 2024*

*Verzia 1.0*

## Účel a rozsah

V rámci nášho trvalého záväzku k bezpečnosti a ochrane používateľských údajov vykonávame pravidelné penetračné testovanie našej webovej aplikácie. Tento dokument popisuje naše testovacie metodiky, poskytuje zhrnutie zistení a zdôrazňuje náš prístup k neustálemu zlepšovaniu bezpečnosti.

Tento dokument bude aktualizovaný pri vypracovaní nových správ alebo pri výskyte významných zmien.

Domény v rozsahu:\
\*.wink.cestovanie\
\*.trippay.io

## Frekvencia a harmonogram testovania

Naše penetračné testy sa vykonávajú každoročne a ďalšie testy sa plánujú podľa potreby po významných aktualizáciách aplikácie alebo infraštruktúry. Táto pravidelná frekvencia testov zabezpečuje, že máme náskok pred vyvíjajúcimi sa hrozbami a udržiavame bezpečné prostredie.

## Metodiky testovania

Naše penetračné testovanie je komplexné a pokrýva širokú škálu bezpečnostných aspektov vrátane, ale nie výlučne:

* **Top 10 OWASP:**&#x4E;aše testy sa zameriavajú najmä na najkritickejšie bezpečnostné riziká, ako sú napríklad injekcie, prerušená autentifikácia a skriptovanie medzi stránkami (XSS).
* **Testovanie čiernej a sivej skrinky:**&#x56; závislosti od rozsahu náš tím využíva tieto metodiky na simuláciu externých aj interných scenárov útokov.
* **Automatizované a manuálne testovanie:**&#x4E;a vykonávanie automatizovaných bezpečnostných kontrol a na podporu manuálnych testovacích techník s cieľom identifikovať komplexné zraniteľnosti a získať čo najlepšie pokrytie používame Burp Suite Pro, poprednú sadu nástrojov na testovanie bezpečnosti. Na presnejšiu identifikáciu zraniteľností používame niektoré špecializované nástroje, napr. SQLmap.

## Zhrnutie zistení

Nasleduje stručné zhrnutie našej najnovšej správy o penetračnom testovaní:

* **Celkový počet identifikovaných zraniteľností:**&#x32;
* **Rozdelenie závažnosti:**
  * Kritické: 2
* **Typy zistených zraniteľností:**
  * Nefunkčná kontrola prístupu
  * Neistý dizajn

Podrobné zistenia nájdete v celej správe.

### Hodnotenie rizika a vplyv

Obe nájdené zraniteľnosti sú hodnotené ako kritické, pretože obe mohli mať vážne finančné dopady. Prvá z nich umožnila škodlivému overenému používateľovi získať kontrolu nad platobným účtom Trippay inej spoločnosti. Druhá zraniteľnosť umožnila škodlivému používateľovi upraviť výšku platby požadovanej za rezerváciu.

### Úsilie o nápravu a zmiernenie rizík

Na riešenie identifikovaných zraniteľností sme podnikli nasledujúce kroky:

* **Okamžité záplaty:**&#x4B;ritické zraniteľnosti boli opravené do 48 hodín od ich objavenia.
* **Kontrola a sprísňovanie kódu:**&#x56;ývojový tím implementoval dodatočné bezpečnostné kontroly na základe našich odporúčaní.

## Neustále zlepšovanie

Penetračné testovanie je súčasťou našej širšej stratégie pre neustále zlepšovanie bezpečnosti. Zistenia z každého testu usmerňujú naše bezpečnostné politiky, ovplyvňujú vývojové postupy a podporujú vylepšenia našej bezpečnostnej architektúry.

## Odbornosť tímu

Naše penetračné testovanie vykonáva náš interný odborník s rozsiahlymi skúsenosťami v rôznych projektoch a odvetviach. Pomocou špičkových nástrojov a metód náš expert zabezpečuje, aby bola naša aplikácia dôkladne otestovaná na najnovšie bezpečnostné hrozby.

## Záväzok k bezpečnosti

Záleží nám na udržiavaní bezpečného aplikačného prostredia pre našich používateľov a zainteresované strany. Naše neustále úsilie v oblasti testovania a vylepšovania bezpečnosti dokazuje náš záväzok chrániť sa pred neustále sa vyvíjajúcimi hrozbami.

## Prístup k prehľadom a aktualizácie

Tento dokument bude priebežne aktualizovaný s vydaním nových správ o penetračných testoch. Ak chcete získať prístup k celej správe, kontaktujte nás prostredníctvom nižšie uvedeného e-mailu. Budúce aktualizácie budú zahŕňať novo identifikované zraniteľnosti, opatrenia na ich odstránenie a úpravy našich testovacích metodík.

V prípade ďalších otázok kontaktujte, prosím, security@wink.travel.

