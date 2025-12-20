---
title: Securitate
description: Acest articol conține informații despre măsurile de securitate pe care le implementăm și care sunt publicate anual de firma noastră terță de securitate.
sidebar:
  order: 6
---

# Document de Prezentare a Securității Wink

*Ultima actualizare: 7 septembrie 2024*

*Versiunea 1.0*

## Scop și Domeniu de Aplicare

Ca parte a angajamentului nostru continuu față de securitate și protejarea datelor utilizatorilor, efectuăm teste regulate de penetrare asupra aplicației noastre web. Acest document descrie metodologiile noastre de testare, oferă un rezumat al constatărilor și evidențiază abordarea noastră pentru îmbunătățirea continuă a securității.

Acest document va fi actualizat pe măsură ce sunt produse noi rapoarte sau când apar schimbări semnificative.

Domenii în domeniul de aplicare:  
\*.wink.travel  
\*.trippay.io

## Frecvența și Programul Testărilor

Testele noastre de penetrare sunt efectuate anual, cu teste suplimentare programate după cum este necesar, în urma actualizărilor semnificative ale aplicației sau infrastructurii. Această frecvență regulată a testelor ne asigură că rămânem înaintea amenințărilor în evoluție și menținem un mediu securizat.

## Metodologii de Testare

Testarea noastră de penetrare este cuprinzătoare și acoperă o gamă largă de aspecte de securitate, inclusiv, dar fără a se limita la:

* **OWASP Top 10:** Testele noastre vizează în mod specific cele mai critice riscuri de securitate, cum ar fi Injection, Autentificare compromisă și Cross-Site Scripting (XSS).  
* **Testare Black Box și Grey Box:** În funcție de domeniul de aplicare, echipa noastră utilizează aceste metodologii pentru a simula scenarii de atac externe și interne.  
* **Testare Automată și Manuală:** Folosim Burp Suite Pro, un set de instrumente de top pentru testarea securității, pentru a efectua scanări automate și pentru a sprijini tehnicile manuale de testare în identificarea vulnerabilităților complexe și pentru a obține cea mai bună acoperire posibilă. Pentru identificarea unor vulnerabilități specifice, sunt folosite unele instrumente specializate, de exemplu SQLmap.

## Rezumatul Constatărilor

Următorul este un rezumat la nivel înalt al celui mai recent raport de testare a penetrației:

* **Total Vulnerabilități Identificate:** 2  
* **Distribuția Severității:**  
  * Critice: 2  
* **Tipuri de Vulnerabilități Detectate:**  
  * Control Acces Compromis  
  * Proiectare Nesigură

Pentru detalii complete, vă rugăm să consultați raportul integral.

### Evaluarea Riscurilor și Impactul

Ambele vulnerabilități găsite sunt evaluate ca fiind critice, deoarece ambele ar fi putut avea impact financiar sever. Prima a permis unui utilizator autenticat malițios să preia controlul asupra contului de plată Trippay al altei companii. A doua vulnerabilitate a permis unui utilizator malițios să modifice suma plății necesare pentru o rezervare.

### Eforturi de Remediere și Atenuare

Am luat următoarele măsuri pentru a aborda vulnerabilitățile identificate:

* **Patch-uri Imediate:** Vulnerabilitățile critice au fost remediate în termen de 48 de ore de la descoperire.  
* **Revizuirea Codului și Consolidare:** Echipa de dezvoltare a implementat controale suplimentare de securitate bazate pe recomandările noastre.

## Îmbunătățire Continuă

Testarea de penetrare face parte din strategia noastră mai largă pentru îmbunătățirea continuă a securității. Constatările fiecărui test ghidează politicile noastre de securitate, influențează practicile de dezvoltare și stimulează îmbunătățiri în arhitectura noastră de securitate.

## Expertiza Echipei

Testarea noastră de penetrare este realizată de un profesionist intern cu experiență vastă în diverse proiecte și industrii. Folosind instrumente și metode de top, expertul nostru asigură testarea riguroasă a aplicației noastre împotriva celor mai recente amenințări de securitate.

## Angajamentul față de Securitate

Suntem dedicați menținerii unui mediu de aplicație securizat pentru utilizatorii și părțile interesate. Eforturile noastre continue în testarea și îmbunătățirea securității demonstrează angajamentul nostru de a proteja împotriva amenințărilor în evoluție.

## Accesul la Raport și Actualizări

Acest document va fi actualizat continuu pe măsură ce sunt emise noi rapoarte de testare a penetrației. Pentru a accesa raportul complet, vă rugăm să ne contactați prin emailul de mai jos. Actualizările viitoare vor include vulnerabilități nou identificate, eforturi de remediere și ajustări ale metodologiilor noastre de testare.

Pentru întrebări suplimentare, vă rugăm să contactați security@wink.travel.
