---
title: Securitate
description: Acest articol conține informații despre măsurile de securitate pe care le implementăm și care sunt publicate anual de firma noastră terță de securitate.
sidebar:
  order: 6
---

*Ultima actualizare: 7 septembrie 2024*

*Versiunea 1.0*

## Scop și domeniu de aplicare

Ca parte a angajamentului nostru continuu față de securitate și protejarea datelor utilizatorilor, efectuăm teste regulate de penetrare asupra aplicației noastre web. Acest document descrie metodologiile noastre de testare, oferă un rezumat al constatărilor și evidențiază abordarea noastră pentru îmbunătățirea continuă a securității.

Acest document va fi actualizat pe măsură ce sunt produse noi rapoarte sau când apar schimbări semnificative.

Domenii în domeniul de aplicare:  
\*.wink.travel  
\*.trippay.io

## Frecvența și programul testărilor

Testele noastre de penetrare sunt efectuate anual, cu teste suplimentare programate după cum este necesar, în urma actualizărilor semnificative ale aplicației sau infrastructurii. Această frecvență regulată a testelor ne asigură că rămânem înaintea amenințărilor în evoluție și menținem un mediu securizat.

## Metodologii de testare

Testarea noastră de penetrare este cuprinzătoare și acoperă o gamă largă de aspecte de securitate, inclusiv, dar fără a se limita la:

* **OWASP Top 10:** Testele noastre vizează în mod specific cele mai critice riscuri de securitate, cum ar fi Injection, Broken Authentication și Cross-Site Scripting (XSS).  
* **Testare Black Box și Grey Box:** În funcție de domeniul de aplicare, echipa noastră utilizează aceste metodologii pentru a simula scenarii de atac externe și interne.  
* **Testare automată și manuală:** Folosim Burp Suite Pro, un set de instrumente de top pentru testarea securității, pentru a efectua scanări automate de securitate și pentru a sprijini tehnicile de testare manuală în identificarea vulnerabilităților complexe și pentru a obține cea mai bună acoperire posibilă. Pentru identificarea unor vulnerabilități mai specifice, sunt folosite unele instrumente specializate, de ex. SQLmap.

## Rezumatul constatărilor

Următorul este un rezumat la nivel înalt al celui mai recent raport de testare a penetrației:

* **Total vulnerabilități identificate:** 2  
* **Distribuția severității:**  
  * Critice: 2  
* **Tipuri de vulnerabilități detectate:**  
  * Control acces compromis  
  * Proiectare nesigură

Pentru detalii complete, vă rugăm să consultați raportul integral.

### Evaluarea riscurilor și impactul

Ambele vulnerabilități găsite sunt evaluate ca fiind critice, deoarece ambele ar fi putut avea impact financiar sever. Prima a permis unui utilizator autenticat malițios să preia controlul asupra contului de plată Trippay al altei companii. A doua vulnerabilitate a permis unui utilizator malițios să modifice suma de plată necesară pentru o rezervare.

### Eforturi de remediere și atenuare

Am luat următoarele măsuri pentru a aborda vulnerabilitățile identificate:

* **Patch-uri imediate:** Vulnerabilitățile critice au fost remediate în termen de 48 de ore de la descoperire.  
* **Revizuirea codului și întărirea:** Echipa de dezvoltare a implementat controale suplimentare de securitate bazate pe recomandările noastre.

## Îmbunătățire continuă

Testarea de penetrare face parte din strategia noastră mai largă pentru îmbunătățirea continuă a securității. Constatările fiecărui test ghidează politicile noastre de securitate, influențează practicile de dezvoltare și conduc la îmbunătățiri în arhitectura noastră de securitate.

## Expertiza echipei

Testarea noastră de penetrare este realizată de un profesionist intern cu experiență vastă în diverse proiecte și industrii. Folosind instrumente și metode de top, expertul nostru asigură testarea riguroasă a aplicației noastre împotriva celor mai recente amenințări de securitate.

## Angajamentul față de securitate

Suntem dedicați menținerii unui mediu de aplicație securizat pentru utilizatorii și părțile interesate. Eforturile noastre continue în testarea și îmbunătățirea securității demonstrează angajamentul nostru de a proteja împotriva amenințărilor în evoluție.

## Accesul la raport și actualizări

Acest document va fi actualizat continuu pe măsură ce sunt emise noi rapoarte de testare a penetrației. Pentru a accesa raportul complet, vă rugăm să ne contactați prin emailul de mai jos. Actualizările viitoare vor include vulnerabilități nou identificate, eforturi de remediere și ajustări ale metodologiilor noastre de testare.

Pentru întrebări suplimentare, vă rugăm să contactați security@wink.travel.
