---
title: Security
description: >-
  Ovaj članak sadrži informacije o sigurnosnim mjerama koje provodimo, a
  objavljuje ih naša vanjska zaštitarska tvrtka.
sidebar:
  order: 6
---
# Pregled sigurnosti Wink-a

*Zadnje ažuriranje: 7. rujna 2024.*

*Verzija 1.0*

## Svrha i opseg

Kao dio naše trajne predanosti sigurnosti i zaštiti korisničkih podataka, redovito provodimo testiranje penetracije na našoj web aplikaciji. Ovaj dokument opisuje naše metodologije testiranja, pruža sažetak nalaza i ističe naš pristup kontinuiranom poboljšanju sigurnosti.

Ovaj dokument će se ažurirati kako se budu izrađivala nova izvješća ili kada dođe do značajnih promjena.

Domene u opsegu:\
\*.wink.travel\
\*.trippay.io

## Učestalost i raspored testiranja

Naši testovi penetracije provode se svake godine, a dodatni testovi se zakazuju po potrebi nakon značajnih ažuriranja aplikacije ili infrastrukture. Ova redovita ritam testiranja osigurava da budemo korak ispred prijetnji koje se razvijaju i da održavamo sigurno okruženje.

## Metodologije testiranja

Naše testiranje penetracije je sveobuhvatno i pokriva širok raspon sigurnosnih aspekata, uključujući, ali ne ograničavajući se na:

* **OWASP Top 10:**&#x4E;aši testovi posebno su usmjereni na najkritičnije sigurnosne rizike, kao što su injektiranje, oštećena autentifikacija i cross-site scripting (XSS).
* **Testiranje crne i sive kutije:**&#x4F;visno o opsegu, naš tim koristi ove metodologije za simuliranje scenarija vanjskog i unutarnjeg napada.
* **Automatizirano i ručno testiranje:**&#x4B;oristimo Burp Suite Pro, vodeći skup alata za sigurnosno testiranje, za provođenje automatiziranih sigurnosnih skeniranja i kao pomoć pri tehnikama ručnog testiranja kako bismo identificirali složene ranjivosti i dobili najbolju moguću pokrivenost. Za precizniju identifikaciju ranjivosti koriste se neki specijalizirani alati, npr. SQLmap.

## Sažetak nalaza

Slijedi sažetak našeg najnovijeg izvješća o testiranju penetracije:

* **Ukupan broj identificiranih ranjivosti:**&#x32;
* **Raspodjela ozbiljnosti:**
  * Kritično: 2
* **Vrste otkrivenih ranjivosti:**
  * Prekinuta kontrola pristupa
  * Nesiguran dizajn

Za detaljne nalaze, molimo pogledajte cjelovito izvješće.

### Ocjene rizika i utjecaj

Obje pronađene ranjivosti ocijenjene su kao kritične jer su obje mogle imati ozbiljne financijske posljedice. Prva je omogućila zlonamjernom autentificiranom korisniku da preuzme kontrolu nad Trippay platnim računom druge tvrtke. Druga ranjivost omogućila je zlonamjernom korisniku da izmijeni iznos plaćanja potreban za rezervaciju.

### Napori za sanaciju i ublažavanje

Poduzeli smo sljedeće korake kako bismo riješili uočene ranjivosti:

* **Trenutne zakrpe:**&#x4B;ritične ranjivosti su zakrpane unutar 48 sati od otkrivanja.
* **Pregled i poboljšanje koda:**&#x52;azvojni tim je implementirao dodatne sigurnosne kontrole na temelju naših preporuka.

## Kontinuirano poboljšanje

Testiranje prodiranja dio je naše šire strategije za kontinuirano poboljšanje sigurnosti. Nalazi svakog testa usmjeravaju naše sigurnosne politike, utječu na razvojne prakse i potiču poboljšanja u našoj sigurnosnoj arhitekturi.

## Stručnost tima

Naše testiranje penetracije provodi interni stručnjak s bogatim iskustvom u raznim projektima i industrijama. Koristeći vodeće alate i metode, naš stručnjak osigurava da je naša aplikacija temeljito testirana na najnovije sigurnosne prijetnje.

## Predanost sigurnosti

Posvećeni smo održavanju sigurnog okruženja aplikacija za naše korisnike i dionike. Naši kontinuirani napori u testiranju i poboljšanju sigurnosti pokazuju našu predanost zaštiti od prijetnji koje se stalno razvijaju.

## Pristup izvješćima i ažuriranja

Ovaj dokument će se kontinuirano ažurirati kako se budu izdavala nova izvješća o testovima penetracije. Za pristup cijelom izvješću, kontaktirajte nas putem e-pošte u nastavku. Buduća ažuriranja uključivat će novootkrivene ranjivosti, napore za sanaciju i prilagodbe naših metodologija testiranja.

Za dodatne upite, molimo kontaktirajte security@wink.travel.

