---
title: Tarifare
description: Majoritatea funcțiilor Wink sunt gratuite. Plătiți o mică taxă per rezervare și o taxă de utilizare pay-as-you-go pentru câteva funcții premium.
sidebar:
  order: 4
---

Wink nu are abonamente, locuri sau taxe de configurare. Marea majoritate a platformei este gratuită, iar există doar două lucruri pentru care veți plăti vreodată:

1. **O taxă de platformă per rezervare, plus procesarea cardului la cost** — doar când se face o rezervare.
2. **Taxe de utilizare pay-as-you-go** — pentru câteva funcții premium care ne costă bani de fiecare dată când sunt folosite, fiecare cu o alocație lunară gratuită.

## Ce este gratuit

Acestea nu costă nimic, niciodată, fără alocație și fără măsurare:

- **Motorul de rezervări** — pe propriul site, în pagina ta WinkLinks sau oriunde îl încorporezi.
- **Managementul proprietății** — conținut, fotografii, tarife, planuri tarifare, disponibilitate, promoții și politici.
- **Instrumente pentru afiliați** — linkuri partajabile, liste selectate, grile, hărți, carduri și widgeturi încorporabile.
- **Instrumente pentru agenții de turism** — căutare, tarife personalizate și rezervări în numele clienților tăi.
- **WinkLinks** — revendică-ți URL-ul personalizat, construiește-ți pagina și publică oricât de des dorești.
- **Postări sociale manuale** — orice scrii tu însuți, pe orice rețea conectată.
- **Analitice, clasamente, revendicări, setări** și gestionarea contului.
- **API-urile Consumer și Booking Engine**, inclusiv endpoint-urile lor de căutare și completare automată. Pe **Partner API**, apelurile Lookup și Content sunt măsurate la o unitate fiecare (vezi [Utilizare](#what-is-and-isnt-metered) mai jos).

## Rezervări

Wink suportă două modele: Wink colectează plata pentru hotel și un agent de turism licențiat acționează ca comerciant înregistrat.

### Modelul 1 — Wink colectează pentru hotel

Wink colectează plata oaspetelui ca agent limitat de colectare a plăților pentru hotel. Hotelul este comerciantul înregistrat, iar numele hotelului apare pe extrasul de card al oaspetelui.
Acest model se aplică pentru 95% din toate rezervările.

#### Detalii

:::note[Taxa de platformă]
Wink percepe o taxă de platformă de 1,5% per rezervare. Aceasta acoperă întreținerea platformei și ne permite să oferim gratuit tot ce este listat mai sus. Nu se percepe pentru o rezervare anulată.
:::

:::note[Procesarea cardului]
Taxa de procesare a plății percepută pentru colectarea plății oaspetelui este transmisă hotelului la cost, fără adaos. Variează în funcție de cardul și metoda de plată a oaspetelui, iar suma exactă apare în secțiunea Contabilitate a fiecărei rezervări. Dacă o rezervare este anulată sau rambursată, orice taxă reținută de procesator este totuși percepută; dacă procesatorul nu percepe nimic, nici noi nu percepem.
:::

:::note[Decontarea fondurilor]
Există taxe asociate cu trimiterea fondurilor în contul tău. Aceasta depinde de metoda de decontare aleasă. În prezent suportăm:

- **Transfer bancar** — Costul depinde de țara în care te afli, de unde sunt trimise fondurile și de orice conversie valutară aplicată pe parcurs. Taxa de plată și orice cost de conversie sunt plătite de beneficiar, la cost. Oferim un calculator de cotații pe care îl poți folosi când ai fonduri disponibile în cont.

Dacă dorești să suportăm o altă metodă de plată, trimite-ne un e-mail.
:::

### Modelul 2 — Agentul de turism ca comerciant înregistrat

Acest model este disponibil doar agențiilor de turism care dețin o licență de agenție de turism în regiunea lor și care doresc să fie comerciantul înregistrat. Este disponibil doar partenerilor API, rezervând prin [Partner API](/ro/integrations/partner-api/), și necesită aprobarea prealabilă scrisă a Wink. Unii dintre agenții noștri de turism înregistrați doresc să fie responsabili pentru gestionarea plății și decontarea fondurilor către hoteluri. În acest model, ei sunt responsabili pentru fonduri și dețin licențele necesare pentru a opera în țara lor.

#### Detalii

:::note[Taxa de platformă]
Wink percepe o taxă de platformă de 1,5% per rezervare. Aceasta acoperă întreținerea platformei și ne permite să oferim gratuit tot ce este listat mai sus.
:::

Folosind acest model, agenții de turism plătesc taxa de 1,5% către Wink plus orice utilizare a Partner API peste alocația gratuită, facturată lunar.

## Ce plătesc partenerii

Pentru partenerii care trimit rezervări: creatori, afiliați, platforme, dezvoltatori și agenți de turism. Parteneriatele sunt non-exclusive, fără teritorii.

| | Plata colectată pentru hotel (majoritatea partenerilor) | Ești comerciant înregistrat (doar parteneri API) |
|---|---|---|
| Taxă de licență sau teritoriu | Niciuna | Niciuna |
| Taxă de configurare | Niciuna | Niciuna |
| Abonament sau taxă lunară | Niciuna | Niciuna |
| Angajament minim sau termen | Niciunul | Niciunul. Se aplică o limită de credit. |
| Acces Partner API | 10.000 nopți-hotel pe lună gratuit, apoi 0,0001 USD per noapte-hotel. Pay-as-you-go este dezactivat implicit; la depășirea alocației gratuite, apelurile returnează `429`. | La fel |
| Taxă de tranzacție | Niciuna. Câștigi comision (10% implicit). | Taxă de rezervare de 1,5% din valoarea rezervării, facturată lunar în USD, scadentă în 15 zile. Cu pay-as-you-go activat, utilizarea Partner API vine pe o a doua factură lunară. |
| Taxă de suport | Niciuna | Niciuna |
| Alte taxe | Taxe de transfer pentru plăți, la cost | Posibilă plată în avans sau depozit la aprobare. Dobândă de 1,5% pe lună pentru facturi restante. |
| Când se schimbă taxele | Preaviz de 30 de zile; se aplică doar rezervărilor făcute după schimbare | La fel. Wink poate modifica și limita ta de credit cu preaviz. |

Ruta comerciantului înregistrat necesită aprobarea prealabilă scrisă a Wink. Vezi [Modelul 2](#model-2--travel-agent-as-merchant-of-record) mai sus și pagina [Partner API](/ro/integrations/partner-api/).

## Utilizare (pay-as-you-go)

Câteva funcții ne costă bani de fiecare dată când sunt folosite — AI generativ, API-uri sociale terțe și afișarea prețurilor live la scară largă. În loc să le includem într-un plan lunar pe care s-ar putea să nu-l folosești, plătești doar pentru ceea ce consumi efectiv, și doar după ce ai epuizat alocația lunară gratuită.

| Funcție | Gratuit pe lună | Apoi | Unitate facturată |
| -- | -- | -- | -- |
| Postare socială — imagine | 1 | 1,50 USD | O postare publicată |
| Postare socială — imagine generată de AI | 0 | 2,50 USD | O postare publicată |
| Postare socială — video îmbunătățit de AI | 0 | 4,00 USD | O postare publicată |
| Postare socială — video generat de AI | 0 | 14,00 USD | O postare publicată |
| Răspuns AI la un comentariu sau DM | 5 | 0,05 USD | Un răspuns |
| Răspuns chatbot | 5 | 0,05 USD | Un răspuns |
| Partner API | 10.000 | 0,0001 USD | O noapte-hotel |

Prețurile sunt în USD. Alocația gratuită se acordă **per cont**, nu per utilizator, și se resetează în prima zi a fiecărei luni (UTC).

### Cum se tarifează postările

Postările sunt tarifate în funcție de conținutul lor, pentru că asta ne costă să le producem. O imagine statică este ieftină; un video nu; orice generăm cu AI costă semnificativ mai mult decât o fotografie furnizată de tine.

- **Alocația gratuită acoperă doar postările standard cu imagini.** Primești una pe cont pe lună. Postările video și media generate de AI sunt facturate de la prima postare — nu există alocație gratuită pentru aceste niveluri, deci o proprietate care postează video trebuie să se aștepte la o taxă în prima lună.
- **Video câștigă.** Dacă o postare conține orice video, întreaga postare este tarifată la tariful video. O postare care combină o imagine și un video este considerată postare video.
- **Proveniența AI stabilește nivelul.** Media pe care o furnizezi — propriile tale fotografii și video, sau orice din biblioteca ta de conținut Wink — se facturează la tariful standard. Media generată de noi pentru tine se facturează la tariful AI.

### Ce este și ce nu este măsurat

- Doar o postare **generată** publicată pe o rețea terță (Facebook, Instagram) este facturabilă. O postare scrisă de tine este gratuită, oriunde ar merge.
- **Publicarea pe WinkLinks este întotdeauna gratuită**, generată sau nu.
- Ești taxat **la publicare**, nu per încercare. Regenerarea unui draft până ești mulțumit nu adaugă la factură — plătești o singură dată pentru postarea pe care o publici efectiv. Încercările nu sunt nelimitate: fiecare postare permite aproximativ 10 regenerări pentru imagini și 3 pentru video, reflectând costul nostru de producție. Vei vedea câte regenerări mai ai pe măsură ce lucrezi.
- Pe Partner API, o **noapte-hotel** este un hotel tarifat pentru o noapte de cazare — *nu* un apel API. O căutare care returnează 20 de hoteluri pentru 3 nopți este 60 de nopți-hotel dintr-o singură cerere. Apelurile Content și Lookup (căutare destinație și completare automată) costă o unitate fiecare, indiferent ce returnează. Endpoint-urile contului sunt gratuite.

### Activarea

Pay-as-you-go este dezactivat implicit. Toată lumea primește alocația gratuită fără să facă nimic.

Pentru a depăși alocația, **proprietarul** unui cont activează pay-as-you-go și alege care dintre conturile sale sunt măsurate. Utilizarea din toate conturile activate se cumulează într-o **singură factură lunară**, pe care o poți plăti automat cu cardul sau o poți primi pentru plată manuală.

Odată activat, utilizarea ta este măsurată, dar **niciodată limitată** — nu vei atinge o limită de rată pentru a cheltui bani cu noi.

:::note[Dacă nu îl activezi]
Nimic nu se strică și nimic nu se taxează. Pur și simplu te oprești la alocația gratuită pentru luna respectivă: postările generate nu se vor publica, iar apelurile Partner API vor returna `429` până la resetarea alocației.
:::

### Starea facturării

| Stare | Ce înseamnă |
| -- | -- |
| În regulă | Totul funcționează normal. |
| Restanță | O plată a eșuat și se încearcă din nou. Funcțiile tale continuă să funcționeze în această perioadă. |
| Suspendat | O factură a rămas neachitată până la final. Acțiunile facturabile sunt blocate până la plata ei; funcțiile gratuite continuă normal. |

:::tip[Prețuri live]
Prețurile unitare și alocațiile gratuite sunt afișate întotdeauna în Portal, direct din sistemul nostru de facturare, astfel încât să le poți verifica înainte de a te angaja. Vezi [Facturare](/ro/portal/plan) pentru a activa pay-as-you-go, a alege conturile și a urmări utilizarea și facturile lunare. Vezi [Social](/ro/portal/social/what-is-social) pentru cum volumul postărilor influențează cheltuielile.
:::

## Efectul platformei

În final, pe măsură ce continuăm să creștem atât ca dimensiune, cât și ca număr de rezervări, dorim să putem împărtăși cu tine unele dintre efectele platformei. Mai multe rezervări aduc oportunități de discounturi de volum de la procesatorul nostru de plăți. Deoarece procesarea cardurilor este transmisă la cost, orice economii negociate merg direct către hoteluri.

Alătură-te Wink astăzi și descoperă o modalitate nouă, profitabilă, de a face afaceri în industria ospitalității!
