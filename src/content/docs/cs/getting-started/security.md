---
title: Bezpečnost
description: Tento článek obsahuje informace o bezpečnostních opatřeních, která implementujeme, a která jsou každoročně zveřejňována naší externí bezpečnostní firmou.
sidebar:
  order: 6
---

*Poslední aktualizace: 7. září 2024*

*Verze 1.0*

## Účel a rozsah

V rámci našeho trvalého závazku k bezpečnosti a ochraně uživatelských dat provádíme pravidelné penetrační testování naší webové aplikace. Tento dokument popisuje naše testovací metodiky, poskytuje shrnutí zjištění a zdůrazňuje náš přístup k neustálému zlepšování bezpečnosti.

Tento dokument bude aktualizován, jakmile budou vypracovány nové zprávy nebo dojde k významným změnám.

Domény v rozsahu:  
\*.wink.travel  
\*.trippay.io

## Frekvence a harmonogram testování

Naše penetrační testy se provádějí jednou ročně, s dalšími testy plánovanými podle potřeby po významných aktualizacích aplikace nebo infrastruktury. Tento pravidelný testovací cyklus nám umožňuje předcházet vyvíjejícím se hrozbám a udržovat bezpečné prostředí.

## Testovací metodiky

Naše penetrační testování je komplexní a pokrývá širokou škálu bezpečnostních aspektů, včetně, ale nejen:

* **OWASP Top 10:** Naše testy se zaměřují na nejkritičtější bezpečnostní rizika, jako jsou Injection, Broken Authentication a Cross-Site Scripting (XSS).  
* **Black Box a Grey Box testování:** V závislosti na rozsahu náš tým využívá tyto metodiky k simulaci externích i interních útoků.  
* **Automatizované a manuální testování:** Používáme Burp Suite Pro, přední nástroj pro bezpečnostní testování, k provádění automatizovaných bezpečnostních skenů a k podpoře manuálních testovacích technik pro identifikaci složitých zranitelností a dosažení co nejlepšího pokrytí. Pro specifickou identifikaci zranitelností jsou používány i specializované nástroje, např. SQLmap.

## Shrnutí zjištění

Následuje přehled nejnovější zprávy z penetračního testování:

* **Celkový počet zjištěných zranitelností:** 2  
* **Rozdělení závažnosti:**  
  * Kritické: 2  
* **Typy zjištěných zranitelností:**  
  * Broken Access Control  
  * Insecure Design

Pro podrobné výsledky prosím nahlédněte do úplné zprávy.

### Hodnocení rizik a dopad

Obě nalezené zranitelnosti jsou hodnoceny jako kritické, protože mohly mít závažné finanční dopady. První umožnila škodlivému autentizovanému uživateli získat kontrolu nad platebním účtem jiné společnosti v Trippay. Druhá zranitelnost umožnila škodlivému uživateli upravit částku platby požadovanou za rezervaci.

### Opatření k nápravě a zmírnění

Pro řešení zjištěných zranitelností jsme podnikli následující kroky:

* **Okamžité záplaty:** Kritické zranitelnosti byly opraveny do 48 hodin od jejich objevení.  
* **Revize kódu a zpevnění:** Vývojový tým implementoval další bezpečnostní kontroly na základě našich doporučení.

## Neustálé zlepšování

Penetrační testování je součástí naší širší strategie neustálého zlepšování bezpečnosti. Zjištění z každého testu ovlivňují naše bezpečnostní politiky, vývojové postupy a vedou k vylepšením v naší bezpečnostní architektuře.

## Odbornost týmu

Naše penetrační testování provádí interní odborník s rozsáhlými zkušenostmi napříč různými projekty a odvětvími. Používáním předních nástrojů a metod zajišťuje, že naše aplikace je důkladně testována proti nejnovějším bezpečnostním hrozbám.

## Závazek k bezpečnosti

Jsme odhodláni udržovat bezpečné prostředí aplikace pro naše uživatele a zainteresované strany. Naše trvalé úsilí v oblasti bezpečnostního testování a zlepšování dokládá náš závazek chránit před vyvíjejícími se hrozbami.

## Přístup ke zprávám a aktualizace

Tento dokument bude průběžně aktualizován s vydáváním nových zpráv z penetračního testování. Pro přístup k úplné zprávě nás prosím kontaktujte na níže uvedeném e-mailu. Budoucí aktualizace budou zahrnovat nově identifikované zranitelnosti, nápravná opatření a úpravy našich testovacích metodik.

Pro další dotazy kontaktujte security@wink.travel.
