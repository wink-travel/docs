---
title: Bezpečnosť
description: Tento článok obsahuje informácie o bezpečnostných opatreniach, ktoré implementujeme a ktoré sú každoročne zverejňované našou externou bezpečnostnou firmou.
sidebar:
  order: 6
---

# Prehľad bezpečnosti Wink

*Posledná aktualizácia: 7. september 2024*

*Verzia 1.0*

## Účel a rozsah

V rámci nášho neustáleho záväzku k bezpečnosti a ochrane údajov používateľov vykonávame pravidelné penetračné testy našej webovej aplikácie. Tento dokument popisuje naše testovacie metodiky, poskytuje zhrnutie zistení a zdôrazňuje náš prístup k neustálemu zlepšovaniu bezpečnosti.

Tento dokument bude aktualizovaný vždy, keď budú vypracované nové správy alebo dôjde k významným zmenám.

Domény v rozsahu:  
\*.wink.travel  
\*.trippay.io

## Frekvencia a harmonogram testovania

Naše penetračné testy sa vykonávajú raz ročne, s ďalšími testami plánovanými podľa potreby po významných aktualizáciách aplikácie alebo infraštruktúry. Tento pravidelný testovací cyklus zabezpečuje, že sme o krok vpred pred vyvíjajúcimi sa hrozbami a udržiavame bezpečné prostredie.

## Testovacie metodiky

Naše penetračné testovanie je komplexné a pokrýva širokú škálu bezpečnostných aspektov, vrátane, ale nie výlučne:

* **OWASP Top 10:** Naše testy sa špecificky zameriavajú na najkritickejšie bezpečnostné riziká, ako sú Injection, Broken Authentication a Cross-Site Scripting (XSS).  
* **Black Box a Grey Box testovanie:** V závislosti od rozsahu náš tím využíva tieto metodiky na simuláciu externých aj interných útokov.  
* **Automatizované a manuálne testovanie:** Používame Burp Suite Pro, popredný nástroj na testovanie bezpečnosti, na vykonávanie automatizovaných bezpečnostných skenov a na podporu manuálnych testovacích techník na identifikáciu zložitých zraniteľností a dosiahnutie čo najlepšieho pokrytia. Pre špecifickejšiu identifikáciu zraniteľností sa používajú aj niektoré špecializované nástroje, napr. SQLmap.

## Zhrnutie zistení

Nižšie je uvedené vysokú úroveň zhrnutia našej najnovšej správy z penetračného testovania:

* **Celkový počet identifikovaných zraniteľností:** 2  
* **Rozdelenie závažnosti:**  
  * Kritické: 2  
* **Typy zraniteľností zistených:**  
  * Porušenie kontroly prístupu  
  * Nezabezpečený dizajn

Pre podrobné zistenia si prosím prečítajte celú správu.

### Hodnotenie rizík a dopad

Obe zistené zraniteľnosti sú hodnotené ako kritické, pretože obe mohli mať vážne finančné dopady. Prvá umožnila škodlivému autentifikovanému používateľovi získať kontrolu nad platobným účtom inej spoločnosti v Trippay. Druhá zraniteľnosť umožnila škodlivému používateľovi upraviť sumu platby požadovanej za rezerváciu.

### Opatrenia na nápravu a zmiernenie

Prijali sme nasledujúce kroky na riešenie identifikovaných zraniteľností:

* **Okamžité záplaty:** Kritické zraniteľnosti boli opravené do 48 hodín od ich zistenia.  
* **Kontrola kódu a spevnenie:** Vývojový tím implementoval ďalšie bezpečnostné kontroly na základe našich odporúčaní.

## Neustále zlepšovanie

Penetračné testovanie je súčasťou našej širšej stratégie neustáleho zlepšovania bezpečnosti. Zistenia z každého testu usmerňujú naše bezpečnostné politiky, ovplyvňujú vývojové postupy a poháňajú vylepšenia v našej bezpečnostnej architektúre.

## Odbornosť tímu

Naše penetračné testovanie vykonáva interný odborník s rozsiahlymi skúsenosťami z rôznych projektov a odvetví. Použitím popredných nástrojov a metód náš expert zabezpečuje, že naša aplikácia je dôkladne testovaná proti najnovším bezpečnostným hrozbám.

## Záväzok k bezpečnosti

Sme odhodlaní udržiavať bezpečné prostredie aplikácie pre našich používateľov a zainteresované strany. Naše neustále úsilie v oblasti testovania a zlepšovania bezpečnosti preukazuje náš záväzok chrániť pred vyvíjajúcimi sa hrozbami.

## Prístup k správe a aktualizácie

Tento dokument bude priebežne aktualizovaný, keď budú vydané nové správy z penetračných testov. Pre prístup k plnej správe nás prosím kontaktujte na nižšie uvedenom e-maile. Budúce aktualizácie budú obsahovať novo identifikované zraniteľnosti, opatrenia na nápravu a úpravy našich testovacích metodík.

Pre ďalšie otázky nás kontaktujte na security@wink.travel.
