---
title: Bezbednost
description: Ovaj članak sadrži informacije o merama bezbednosti koje primenjujemo i koje na godišnjem nivou objavljuje naša treća strana za bezbednost.
sidebar:
  order: 6
---

# Wink Pregledni Dokument o Bezbednosti

*Poslednje ažuriranje: 7. septembar 2024.*

*Verzija 1.0*

## Svrha i Obim

Kao deo naše kontinuirane posvećenosti bezbednosti i zaštiti podataka korisnika, redovno sprovodimo penetraciona testiranja naše web aplikacije. Ovaj dokument opisuje naše metodologije testiranja, pruža rezime nalaza i ističe naš pristup kontinuiranom unapređenju bezbednosti.

Ovaj dokument će biti ažuriran kako budu izrađivani novi izveštaji ili kada dođe do značajnih promena.

Domeni u obuhvatu:  
\*.wink.travel  
\*.trippay.io

## Učestalost i Raspored Testiranja

Naša penetraciona testiranja se sprovode na godišnjem nivou, sa dodatnim testovima zakazanim po potrebi nakon značajnih ažuriranja aplikacije ili infrastrukture. Ovaj redovni ritam testiranja osigurava da budemo korak ispred evoluirajućih pretnji i održavamo sigurno okruženje.

## Metodologije Testiranja

Naša penetraciona testiranja su sveobuhvatna i pokrivaju širok spektar bezbednosnih aspekata, uključujući, ali ne ograničavajući se na:

* **OWASP Top 10:** Naši testovi ciljaju najkritičnije bezbednosne rizike, kao što su Injection, Broken Authentication i Cross-Site Scripting (XSS).  
* **Black Box i Grey Box Testiranje:** U zavisnosti od obima, naš tim koristi ove metodologije da simulira spoljašnje i unutrašnje scenarije napada.  
* **Automatizovano i Ručno Testiranje:** Koristimo Burp Suite Pro, vodeći alat za bezbednosno testiranje, za izvođenje automatizovanih bezbednosnih skeniranja i za podršku ručnim tehnikama testiranja kako bismo identifikovali složene ranjivosti i postigli najbolju moguću pokrivenost. Za specifičniju identifikaciju ranjivosti koriste se i neki specijalizovani alati, npr. SQLmap.

## Rezime Nalaza

Sledeći je visok nivo rezimea našeg najnovijeg izveštaja o penetracionom testiranju:

* **Ukupan broj identifikovanih ranjivosti:** 2  
* **Raspodela po težini:**  
  * Kritične: 2  
* **Tipovi otkrivenih ranjivosti:**  
  * Broken Access Control  
  * Nesiguran dizajn

Za detaljne nalaze, molimo pogledajte kompletan izveštaj.

### Ocene Rizika i Uticaj

Obe pronađene ranjivosti su ocenjene kao kritične jer su obe mogle imati ozbiljne finansijske posledice. Prva je omogućila zlonamernom autentifikovanom korisniku da preuzme kontrolu nad Trippay nalogom za plaćanje druge kompanije. Druga ranjivost je omogućila zlonamernom korisniku da izmeni iznos plaćanja potrebnog za rezervaciju.

### Napori u Sanaciji i Ublažavanju

Preduzeli smo sledeće korake da bismo rešili identifikovane ranjivosti:

* **Hitni zakrpe:** Kritične ranjivosti su zakrpljene u roku od 48 sati od otkrića.  
* **Pregled i ojačavanje koda:** Razvojni tim je implementirao dodatne bezbednosne kontrole na osnovu naših preporuka.

## Kontinuirano Unapređenje

Penetraciono testiranje je deo naše šire strategije za kontinuirano unapređenje bezbednosti. Nalazi iz svakog testa usmeravaju naše bezbednosne politike, utiču na razvojne prakse i pokreću unapređenja u našoj bezbednosnoj arhitekturi.

## Stručnost Tima

Naša penetraciona testiranja sprovodi interni stručnjak sa bogatim iskustvom u različitim projektima i industrijama. Koristeći vodeće alate i metode, naš ekspert osigurava da je naša aplikacija temeljno testirana protiv najnovijih bezbednosnih pretnji.

## Posvećenost Bezbednosti

Posvećeni smo održavanju sigurnog okruženja aplikacije za naše korisnike i zainteresovane strane. Naši kontinuirani napori u testiranju i unapređenju bezbednosti pokazuju našu posvećenost zaštiti od evoluirajućih pretnji.

## Pristup Izveštaju i Ažuriranja

Ovaj dokument će biti kontinuirano ažuriran kako budu izdavani novi izveštaji o penetracionim testiranjima. Za pristup kompletnom izveštaju, molimo kontaktirajte nas putem donje email adrese. Buduća ažuriranja će uključivati novoidentifikovane ranjivosti, napore u sanaciji i prilagođavanja naših metodologija testiranja.

Za dodatna pitanja, molimo kontaktirajte security@wink.travel.
