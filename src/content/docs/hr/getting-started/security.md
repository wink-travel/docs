---
title: Sigurnost
description: Ovaj članak sadrži informacije o sigurnosnim mjerama koje provodimo i koje godišnje objavljuje naša vanjska sigurnosna tvrtka.
sidebar:
  order: 6
---

*Zadnje ažuriranje: 7. rujna 2024.*

*Verzija 1.0*

## Svrha i opseg

Kao dio naše kontinuirane predanosti sigurnosti i zaštiti korisničkih podataka, redovito provodimo penetracijsko testiranje naše web aplikacije. Ovaj dokument opisuje naše metode testiranja, pruža sažetak nalaza i ističe naš pristup kontinuiranom poboljšanju sigurnosti.

Ovaj će se dokument ažurirati kako budu izrađeni novi izvještaji ili kada dođe do značajnih promjena.

Domeni u opsegu:  
\*.wink.travel  
\*.trippay.io

## Učestalost i raspored testiranja

Naša penetracijska testiranja provode se godišnje, uz dodatna testiranja prema potrebi nakon značajnih ažuriranja aplikacije ili infrastrukture. Ovaj redovni ritam testiranja osigurava da budemo korak ispred novih prijetnji i održavamo sigurno okruženje.

## Metodologije testiranja

Naše penetracijsko testiranje je sveobuhvatno i pokriva širok spektar sigurnosnih aspekata, uključujući, ali ne ograničavajući se na:

* **OWASP Top 10:** Naši testovi ciljaju najkritičnije sigurnosne rizike, poput Injection, Broken Authentication i Cross-Site Scripting (XSS).  
* **Black Box i Grey Box testiranje:** Ovisno o opsegu, naš tim koristi ove metodologije za simulaciju vanjskih i unutarnjih scenarija napada.  
* **Automatizirano i ručno testiranje:** Koristimo Burp Suite Pro, vodeći alat za sigurnosno testiranje, za provođenje automatiziranih sigurnosnih skeniranja i podršku ručnim tehnikama testiranja kako bismo identificirali složene ranjivosti i postigli najbolju moguću pokrivenost. Za specifičniju identifikaciju ranjivosti koriste se i neki specijalizirani alati, npr. SQLmap.

## Sažetak nalaza

Slijedi sažetak najnovijeg izvještaja o penetracijskom testiranju:

* **Ukupan broj identificiranih ranjivosti:** 2  
* **Raspodjela težine:**  
  * Kritične: 2  
* **Vrste otkrivenih ranjivosti:**  
  * Broken Access Control  
  * Nesiguran dizajn

Za detaljne nalaze, molimo pogledajte puni izvještaj.

### Ocjene rizika i utjecaj

Obje pronađene ranjivosti ocijenjene su kao kritične jer su obje mogle imati ozbiljne financijske posljedice. Prva je omogućila zlonamjernom autentificiranom korisniku kontrolu nad Trippay računom za plaćanje druge tvrtke. Druga ranjivost omogućila je zlonamjernom korisniku izmjenu iznosa plaćanja potrebnog za rezervaciju.

### Napori u otklanjanju i ublažavanju

Poduzeli smo sljedeće korake za rješavanje identificiranih ranjivosti:

* **Hitni zakrpe:** Kritične ranjivosti su zakrpane unutar 48 sati od otkrića.  
* **Pregled i ojačavanje koda:** Razvojni tim je implementirao dodatne sigurnosne kontrole na temelju naših preporuka.

## Kontinuirano poboljšanje

Penetracijsko testiranje dio je naše šire strategije za kontinuirano poboljšanje sigurnosti. Nalazi iz svakog testiranja usmjeravaju naše sigurnosne politike, utječu na razvojne prakse i potiču unaprjeđenja u našoj sigurnosnoj arhitekturi.

## Stručnost tima

Naše penetracijsko testiranje provodi interni stručnjak s opsežnim iskustvom u različitim projektima i industrijama. Koristeći vodeće alate i metode, naš stručnjak osigurava da je naša aplikacija temeljito testirana protiv najnovijih sigurnosnih prijetnji.

## Predanost sigurnosti

Posvećeni smo održavanju sigurnog okruženja aplikacije za naše korisnike i dionike. Naši kontinuirani napori u testiranju i poboljšanju sigurnosti pokazuju našu predanost zaštiti od novih prijetnji.

## Pristup izvještaju i ažuriranja

Ovaj će se dokument kontinuirano ažurirati kako budu izdavani novi izvještaji o penetracijskom testiranju. Za pristup punom izvještaju, molimo kontaktirajte nas putem donje e-mail adrese. Buduća ažuriranja uključivat će novo otkrivene ranjivosti, napore u otklanjanju i prilagodbe naših metodologija testiranja.

Za dodatne upite, molimo kontaktirajte security@wink.travel.
