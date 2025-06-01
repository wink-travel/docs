---
title: Security
description: >-
  Acest articol conține informații despre măsurile de securitate pe care le
  implementăm și sunt publicate anual de firma noastră de securitate terță
  parte.
sidebar:
  order: 6
---
# Document de prezentare generală a securității Wink

*Ultima actualizare: 7 septembrie 2024*

*Versiunea 1.0*

## Scop și domeniu de aplicare

Ca parte a angajamentului nostru continuu față de securitate și protejarea datelor utilizatorilor, efectuăm periodic teste de penetrare pe aplicația noastră web. Acest document prezintă metodologiile noastre de testare, oferă un rezumat al constatărilor și evidențiază abordarea noastră privind îmbunătățirea continuă a securității.

Acest document va fi actualizat pe măsură ce sunt produse noi rapoarte sau când apar modificări semnificative.

Domenii incluse în domeniu:\
\*.wink.travel\
\*.trippay.io

## Frecvența și programul de testare

Testele noastre de penetrare sunt efectuate anual, cu teste suplimentare programate după cum este necesar, în urma unor actualizări semnificative ale aplicației sau infrastructurii. Această cadență regulată de testare ne asigură că suntem cu un pas înaintea amenințărilor în continuă evoluție și că menținem un mediu securizat.

## Metodologii de testare

Testarea noastră de penetrare este cuprinzătoare și acoperă o gamă largă de aspecte de securitate, inclusiv, dar fără a se limita la:

* **Top 10 al OWASP:**&#x54;estele noastre vizează în mod specific cele mai critice riscuri de securitate, cum ar fi injecția, autentificarea spartă și scriptarea între site-uri (XSS).
* **Testarea Black Box și Grey Box:**&#xCE;n funcție de domeniul de aplicare, echipa noastră utilizează aceste metodologii pentru a simula atât scenarii de atac extern, cât și interne.
* **Testare automată și manuală:**&#x46;olosim Burp Suite Pro, un set de instrumente de testare a securității de top, pentru a efectua scanări automate de securitate și pentru a sprijini tehnicile de testare manuală în vederea identificării vulnerabilităților complexe și obținerii celei mai bune acoperiri posibile. Pentru o identificare mai specifică a vulnerabilităților, se utilizează câteva instrumente specializate, de exemplu, SQLmap.

## Rezumatul constatărilor

Următorul este un rezumat general al celui mai recent raport al nostru privind testele de penetrare:

* **Vulnerabilități totale identificate:**&#x32;
* **Distribuția severității:**
  * Critic: 2
* **Tipuri de vulnerabilități detectate:**
  * Controlul accesului defect
  * Design nesigur

Pentru constatări detaliate, vă rugăm să consultați raportul complet.

### Evaluări ale riscurilor și impact

Ambele vulnerabilități descoperite sunt clasificate ca fiind critice, deoarece ambele ar fi putut avea impacturi financiare severe. Prima a permis unui utilizator autentificat rău intenționat să obțină controlul asupra contului de plată Trippay al altei companii. A doua vulnerabilitate a permis unui utilizator rău intenționat să modifice suma de plată necesară pentru o rezervare.

### Eforturi de remediere și atenuare

Am luat următoarele măsuri pentru a remedia vulnerabilitățile identificate:

* **Patch-uri imediate:**&#x56;ulnerabilitățile critice au fost remediate în termen de 48 de ore de la descoperire.
* **Revizuirea și consolidarea codului:**&#x45;chipa de dezvoltare a implementat controale de securitate suplimentare pe baza recomandărilor noastre.

## Îmbunătățire continuă

Testarea de penetrare face parte din strategia noastră mai amplă de îmbunătățire continuă a securității. Rezultatele fiecărui test ghidează politicile noastre de securitate, influențează practicile de dezvoltare și determină îmbunătățiri ale arhitecturii noastre de securitate.

## Expertiza echipei

Testele noastre de penetrare sunt efectuate de un profesionist intern cu o vastă experiență în diverse proiecte și industrii. Folosind instrumente și metode de ultimă generație, expertul nostru se asigură că aplicația noastră este testată temeinic împotriva celor mai recente amenințări de securitate.

## Angajament față de securitate

Ne dedicăm menținerii unui mediu de aplicații securizat pentru utilizatorii și părțile interesate. Eforturile noastre continue în testarea și îmbunătățirea securității demonstrează angajamentul nostru de a proteja împotriva amenințărilor în continuă evoluție.

## Acces la rapoarte și actualizări

Acest document va fi actualizat continuu pe măsură ce sunt emise noi rapoarte de teste de penetrare. Pentru a accesa raportul complet, vă rugăm să ne contactați prin e-mailul de mai jos. Actualizările viitoare vor include vulnerabilități nou identificate, eforturi de remediere și ajustări ale metodologiilor noastre de testare.

Pentru informații suplimentare, vă rugăm să contactați security@wink.travel.

