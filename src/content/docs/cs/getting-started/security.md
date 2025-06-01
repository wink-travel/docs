---
title: Security
description: >-
  Tento článek obsahuje informace o bezpečnostních opatřeních, která
  implementujeme, a každoročně je zveřejňuje naše externí bezpečnostní firma.
sidebar:
  order: 6
---
# Přehled zabezpečení Wink

*Poslední aktualizace: 7. září 2024*

*Verze 1.0*

## Účel a rozsah

V rámci našeho trvalého závazku k bezpečnosti a ochraně uživatelských dat provádíme pravidelné penetrační testy naší webové aplikace. Tento dokument shrnuje naše testovací metodiky, poskytuje shrnutí zjištění a zdůrazňuje náš přístup k neustálému zlepšování bezpečnosti.

Tento dokument bude aktualizován s ohledem na nové zprávy nebo významné změny.

Domény v rozsahu:\
\*.wink.travel\*\
\*.trippay.io\*

## Frekvence a harmonogram testování

Naše penetrační testy provádíme každoročně a další testy plánujeme dle potřeby po významných aktualizacích aplikace nebo infrastruktury. Tato pravidelná testovací frekvence zajišťuje, že máme náskok před vyvíjejícími se hrozbami a udržujeme bezpečné prostředí.

## Metodiky testování

Naše penetrační testování je komplexní a zahrnuje širokou škálu bezpečnostních aspektů, mimo jiné včetně:

* **Top 10 OWASP:**&#x4E;aše testy se konkrétně zaměřují na nejkritičtější bezpečnostní rizika, jako je injection, přerušené ověřování a cross-site scripting (XSS).
* **Testování černé a šedé skříňky:**&#x56; závislosti na rozsahu náš tým využívá tyto metodologie k simulaci scénářů útoků jak zvenčí, tak zvenčí.
* **Automatizované a manuální testování:**&#x50;oužíváme Burp Suite Pro, přední sadu nástrojů pro bezpečnostní testování, k provádění automatizovaných bezpečnostních skenů a na podporu manuálních testovacích technik k identifikaci složitých zranitelností a získání co nejlepšího pokrytí. Pro přesnější identifikaci zranitelností používáme některé specializované nástroje, např. SQLmap.

## Shrnutí zjištění

Následuje stručné shrnutí naší nejnovější zprávy o penetračním testování:

* **Celkový počet identifikovaných zranitelností:**&#x32;
* **Rozložení závažnosti:**
  * Kritický: 2
* **Typy zjištěných zranitelností:**
  * Nefunkční řízení přístupu
  * Nejistý design

Podrobná zjištění naleznete v celé zprávě.

### Hodnocení rizik a dopad

Obě nalezené zranitelnosti jsou hodnoceny jako kritické, protože obě mohly mít vážné finanční dopady. První z nich umožnila ověřenému uživateli se zlými úmysly získat kontrolu nad platebním účtem Trippay jiné společnosti. Druhá zranitelnost umožnila uživateli se zlými úmysly upravit výši platby požadované pro rezervaci.

### Sanační a zmírňující opatření

K řešení zjištěných zranitelností jsme podnikli následující kroky:

* **Okamžité záplaty:**&#x4B;ritické zranitelnosti byly opraveny do 48 hodin od jejich objevení.
* **Kontrola a zpevnění kódu:**&#x56;ývojový tým implementoval dodatečné bezpečnostní kontroly na základě našich doporučení.

## Neustálé zlepšování

Penetrační testování je součástí naší širší strategie pro neustálé zlepšování bezpečnosti. Zjištění z každého testu usměrňují naše bezpečnostní zásady, ovlivňují vývojové postupy a vedou k vylepšením naší bezpečnostní architektury.

## Odbornost týmu

Naše penetrační testování provádí náš interní odborník s rozsáhlými zkušenostmi v různých projektech a odvětvích. Pomocí předních nástrojů a metod naši experti zajišťují, aby naše aplikace byla důkladně otestována na nejnovější bezpečnostní hrozby.

## Závazek k bezpečnosti

Záleží nám na udržování bezpečného aplikačního prostředí pro naše uživatele a zúčastněné strany. Naše neustálé úsilí v oblasti testování a vylepšování zabezpečení dokazuje náš závazek chránit před neustále se vyvíjejícími hrozbami.

## Přístup k přehledům a aktualizace

Tento dokument bude průběžně aktualizován s vydáváním nových zpráv o penetračních testech. Chcete-li získat přístup k celé zprávě, kontaktujte nás prosím prostřednictvím níže uvedeného e-mailu. Budoucí aktualizace budou zahrnovat nově identifikované zranitelnosti, opatření k nápravě a úpravy našich testovacích metodik.

V případě dalších dotazů kontaktujte prosím security@wink.travel.

