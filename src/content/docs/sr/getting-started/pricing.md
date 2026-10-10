---
title: Cene
description: Većina Wink-a je besplatna. Plaćate malu naknadu po rezervaciji i naknadu po korišćenju za nekoliko premium funkcija.
sidebar:
  order: 4
---

Wink nema pretplate, nema mesta i nema troškove postavljanja. Ogroman deo platforme je besplatan, a postoje samo dve stvari za koje ćete ikada plaćati:

1. **Naknada za platformu po rezervaciji, plus troškovi obrade kartice po stvarnoj ceni** — samo kada se napravi rezervacija.
2. **Naknade po korišćenju** — za nekoliko premium funkcija koje nas koštaju svaki put kada se koriste, svaka sa besplatnim mesečnim limitom.

## Šta je besplatno

Ovo ne košta ništa, zauvek, bez limita i merenja:

- **Booking engine** — na vašem sajtu, na vašoj WinkLinks stranici ili bilo gde drugde gde ga ugrađujete.
- **Upravljanje nekretninama** — sadržaj, fotografije, cene, planovi cena, dostupnost, promocije i politike.
- **Affiliate alati** — deljivi linkovi, kurirane liste, mreže, mape, kartice i ugrađeni vidžeti.
- **Alati za turističke agente** — pretraga, prilagođene cene i rezervacije u ime vaših klijenata.
- **WinkLinks** — preuzmite svoj personalizovani URL, napravite svoju stranicu i objavljujte na njoj koliko god želite.
- **Ručno objavljivanje na društvenim mrežama** — sve što sami napišete, na bilo kojoj povezanoj mreži.
- **Analitika, tabele lidera, zahtevi, podešavanja** i upravljanje nalogom.
- **Consumer i Booking Engine API-jevi**, uključujući njihove lookup i autocomplete krajnje tačke. Na **Partner API-ju**, Lookup i Content pozivi se mere po jednoj jedinici svaki (pogledajte [Korišćenje](#what-is-and-isnt-metered) ispod).

## Rezervacije

Wink podržava dva modela: Wink prikuplja uplatu za hotel, i licencirani turistički agent koji je trgovac zapisan u evidenciji.

### Model 1 — Wink prikuplja za hotel

Wink prikuplja uplatu gosta kao ograničeni agent hotela za prikupljanje uplata. Hotel je trgovac zapisan u evidenciji, i ime hotela se pojavljuje na izvodu sa kartice gosta.
Ovaj model važi za 95% svih rezervacija.

#### Razrada

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno. Ne naplaćuje se za otkazane rezervacije.
:::

:::note[Obrada kartice]
Naknada za obradu plaćanja koja se naplaćuje za prikupljanje uplate gosta prenosi se hotelu po stvarnoj ceni, bez marže. Varira u zavisnosti od kartice gosta i načina plaćanja, a tačan iznos se prikazuje u odeljku Računovodstvo za svaku rezervaciju. Ako se rezervacija otkaže ili refundira, bilo koja naknada koju zadrži procesor i dalje se naplaćuje; ako ne naplaćuje ništa, ni mi ne naplaćujemo.
:::

:::note[Isplata sredstava]
Postoje naknade povezane sa slanjem sredstava na vaš račun. To zavisi od metode isplate koju izaberete. Trenutno podržavamo:

- **Bankovni transfer** — Trošak zavisi od zemlje u kojoj se nalazite, odakle se sredstva šalju i bilo koje konverzije valute na putu. Naknada za isplatu i bilo koji trošak konverzije plaća se po stvarnoj ceni od strane primaoca. Uključujemo kalkulator ponude koji možete koristiti kada imate dostupna sredstva na svom računu.

Ako želite da podržimo drugu metodu isplate, pošaljite nam e-mail.
:::

### Model 2 — Turistički agent kao trgovac zapisan u evidenciji

Ovaj model je dostupan samo turističkim agencijama koje imaju licencu za turističku agenciju u svojoj regiji i koje žele da budu trgovac zapisan u evidenciji. Dostupan je samo API partnerima, rezervacije se prave preko [Partner API-ja](/sr/integrations/partner-api/), i zahteva prethodnu pisanu saglasnost Wink-a. Neki od naših registrovanih turističkih agenata žele da budu odgovorni za rukovanje uplatom i isplatom sredstava hotelima. U okviru ovog modela, oni su odgovorni za sredstva i poseduju potrebne licence za rad u svojoj zemlji.

#### Razrada

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno.
:::

Koristeći ovaj model, turistički agenti plaćaju Wink-ovu naknadu od 1,5% plus bilo koje korišćenje Partner API-ja preko besplatnog limita, fakturisano mesečno.

## Šta partneri plaćaju

Za partnere koji šalju rezervacije: kreatore, affiliate, platforme, developere i turističke agente. Partnerstva su neekskluzivna, bez teritorijalnih ograničenja.

| | Plaćanje prikupljeno za hotel (većina partnera) | Vi ste trgovac zapisan u evidenciji (samo API partneri) |
|---|---|---|
| Naknada za licencu ili teritoriju | Nema | Nema |
| Naknada za postavljanje | Nema | Nema |
| Pretplata ili mesečna naknada | Nema | Nema |
| Minimalna obaveza ili rok | Nema | Nema. Važi kreditni limit. |
| Pristup Partner API-ju | 10.000 hotelskih noćenja mesečno besplatno, zatim $0.0001 po hotelskoj noći. Pay-as-you-go je po defaultu isključen; pri dostizanju limita pozivi vraćaju `429`. | Isto |
| Naknada po transakciji | Nema. Zarađujete proviziju (10% podrazumevano). | 1,5% naknada po rezervaciji na vrednost rezervacije, fakturisano mesečno u USD, dospeva za plaćanje u roku od 15 dana. Sa uključenim pay-as-you-go, korišćenje Partner API-ja dolazi na drugu mesečnu fakturu. |
| Naknada za podršku | Nema | Nema |
| Ostali troškovi | Naknade za transfer isplate, po stvarnoj ceni | Moguća avansna uplata ili depozit pri odobrenju. Kamata od 1,5% mesečno na neplaćene fakture. |
| Kada se naknade menjaju | Najava 30 dana; važi samo za rezervacije napravljene nakon promene | Isto. Wink može promeniti vaš kreditni limit uz najavu. |

Put trgovca zapisanog u evidenciji zahteva prethodnu pisanu saglasnost Wink-a. Pogledajte [Model 2](#model-2--travel-agent-as-merchant-of-record) iznad i stranicu [Partner API](/sr/integrations/partner-api/).

## Korišćenje (pay-as-you-go)

Nekoliko funkcija nas košta svaki put kada se koriste — generativni AI, API-jevi društvenih mreža trećih strana i prikazivanje cena uživo u velikom obimu. Umesto da ih uključujemo u mesečni plan koji možda nećete koristiti, plaćate samo za ono što zaista potrošite, i to tek nakon što iskoristite besplatni mesečni limit.

| Funkcija | Besplatno mesečno | Zatim | Naplaćena jedinica |
| -- | -- | -- | -- |
| Objavljivanje na društvenim mrežama — slika | 1 | $1.50 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-generisana slika | 0 | $2.50 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-poboljšani video | 0 | $4.00 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-generisan video | 0 | $14.00 | Jedna objavljena objava |
| AI odgovor na komentar ili DM | 5 | $0.05 | Jedan odgovor |
| Odgovor chatbota | 5 | $0.05 | Jedan odgovor |
| Partner API | 10.000 | $0.0001 | Jedna hotelska noć |

Cene su u USD. Besplatni limit se dodeljuje **po nalogu**, ne po korisniku, i resetuje se prvog u mesecu (UTC).

### Kako se cene određuju za objave

Objave se naplaćuju prema sadržaju, jer nas to košta da ih napravimo. Statična slika je jeftina; video nije; sve što generišemo AI-jem košta znatno više od fotografije koju ste sami dostavili.

- **Besplatni limit pokriva samo standardne objave sa slikama.** Dobijate jednu takvu po nalogu mesečno. Video objave i AI-generisani mediji se naplaćuju od prve objave — nema besplatnog limita za te kategorije, tako da nekretnina koja objavljuje video treba da očekuje trošak već u prvom mesecu.
- **Video ima prednost.** Ako objava sadrži bilo kakav video, cela objava se naplaćuje po video tarifi. Objave koje kombinuju sliku i video smatraju se video objavama.
- **Poreklo AI određuje tarifu.** Mediji koje vi dostavite — vaše fotografije i video ili bilo šta iz Wink biblioteke sadržaja — naplaćuju se po standardnoj tarifi. Mediji koje mi generišemo za vas naplaćuju se po AI tarifi.

### Šta se meri, a šta ne

- Samo **generisana** objava objavljena na mreži treće strane (Facebook, Instagram) se naplaćuje. Objava koju ste sami napisali je besplatna, gde god da ide.
- **Objavljivanje na WinkLinks je uvek besplatno**, bilo da je generisano ili ne.
- Naplaćuje se **pri objavljivanju**, ne po pokušaju. Ponovno generisanje nacrta dok ne budete zadovoljni ne povećava račun — plaćate samo za objavu koju zaista objavite. Pokušaji nisu neograničeni: svaka objava dozvoljava oko 10 ponovnih generisanja za slike i 3 za video, što odražava troškove njihove proizvodnje. Videćete koliko vam je ostalo dok radite.
- Na Partner API-ju, **hotelska noć** je jedna hotelska soba za jednu noć boravka — *ne* jedan API poziv. Pretraga koja vraća 20 hotela za 3 noći je 60 hotelskih noćenja iz jednog zahteva. Content i Lookup (pretraga destinacije i autocomplete) pozivi koštaju po jednoj jedinici svaki, bez obzira šta vraćaju. Account krajnje tačke su besplatne.

### Kako se uključuje

Pay-as-you-go je po defaultu isključen. Svi dobijaju besplatni limit bez ikakve akcije.

Da biste prešli preko limita, **vlasnik** naloga uključuje pay-as-you-go i bira koji od svojih naloga će biti merena potrošnja. Korišćenje sa svih uključenih naloga se sabira u **jednu mesečnu fakturu**, koju možete automatski platiti karticom ili primiti kao fakturu za samostalno plaćanje.

Kada je uključeno, vaša potrošnja se meri, ali **nikada se ne ograničava** — nećete dostići limit brzine za trošenje novca kod nas.

:::note[Ako ga ne uključite]
Ništa se ne kvari i ništa se ne naplaćuje. Jednostavno stajete na besplatnom limitu za taj mesec: generisane objave neće biti objavljene, a Partner API pozivi vraćaju `429` dok se limit ne resetuje.
:::

### Status naplate

| Status | Šta znači |
| -- | -- |
| U dobrom stanju | Sve funkcioniše normalno. |
| Kašnjenje u plaćanju | Plaćanje nije uspelo i pokušava se ponovo. Vaše funkcije nastavljaju da rade tokom ovog perioda. |
| Suspendovan | Faktura nije plaćena do kraja. Naplatne akcije su blokirane dok se ne izmiru; besplatne funkcije rade normalno. |

:::tip[Aktuelne cene]
Cene po jedinici i besplatni limiti su uvek prikazani u Portalu, direktno iz našeg sistema za naplatu, tako da ih možete proveriti pre nego što se obavežete. Pogledajte [Naplatu](/sr/portal/plan) da uključite pay-as-you-go, izaberete naloge i pratite potrošnju i fakture za tekući mesec. Pogledajte [Social](/sr/portal/social/what-is-social) za to kako obim objava utiče na vaše troškove.
:::

## Efekat platforme

Na kraju, kako nastavljamo da rastemo i po veličini i po broju rezervacija, želimo da sa vama podelimo neke od efekata platforme. Više rezervacija donosi mogućnosti za količinske popuste od našeg procesora plaćanja. Pošto se obrada kartica prenosi po stvarnoj ceni, svaka ušteda koju dogovorimo ide direktno hotelima.

Pridružite se Wink-u danas i otkrijte novi, unosan način poslovanja u industriji ugostiteljstva!
