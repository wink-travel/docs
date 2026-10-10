---
title: Cijene
description: Većina Wink-a je besplatna. Plaćate malu naknadu po rezervaciji i naknadu po korištenju za nekoliko premium značajki.
sidebar:
  order: 4
---

Wink nema pretplate, nema mjesta i nema naknada za postavljanje. Velika većina platforme je besplatna, a postoje samo dvije stvari za koje ćete ikada platiti:

1. **Naknada za platformu po rezervaciji, plus troškovi obrade kartice po stvarnoj cijeni** — samo kada se izvrši rezervacija.
2. **Naknade po korištenju** — za nekoliko premium značajki koje nam svaki put kad se koriste stvaraju trošak, svaka s besplatnim mjesečnim ograničenjem.

## Što je besplatno

Ovo ne košta ništa, zauvijek, bez ograničenja i mjerenja:

- **Booking engine** — na vašoj vlastitoj stranici, na vašoj WinkLinks stranici ili bilo gdje drugdje gdje ga ugrađujete.
- **Upravljanje nekretninama** — sadržaj, fotografije, cijene, planovi cijena, dostupnost, promocije i pravila.
- **Affiliate alati** — dijeljivi linkovi, kurirane liste, mreže, karte, kartice i ugrađeni widgeti.
- **Alati za turističke agente** — pretraživanje, prilagođene cijene i rezervacije u ime vaših klijenata.
- **WinkLinks** — preuzmite svoj personalizirani URL, izgradite svoju stranicu i objavljujte na njoj koliko god želite.
- **Ručno objavljivanje na društvenim mrežama** — sve što sami napišete, na bilo kojoj povezanoj mreži.
- **Analitika, ljestvice, zahtjevi, postavke** i upravljanje računom.
- **Consumer i Booking Engine API-jevi**, uključujući njihove lookup i autocomplete krajnje točke. Na **Partner API-ju**, Lookup i Content pozivi se mjere po jednoj jedinici svaki (vidi [Korištenje](#što-se-mjeri-a-što-ne) dolje).

## Rezervacije

Wink podržava dva modela: Wink prikuplja uplatu za hotel i licencirani turistički agent koji djeluje kao trgovac zapisa.

### Model 1 — Wink prikuplja za hotel

Wink prikuplja uplatu gosta kao ograničeni agent za prikupljanje uplata hotela. Hotel je trgovac zapisa, a ime hotela se pojavljuje na izvodu kartice gosta.
Ovaj model se primjenjuje na 95% svih rezervacija.

#### Razrada

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. To pokriva održavanje platforme i omogućuje nam da besplatno ponudimo sve gore navedeno. Ne naplaćuje se za otkazane rezervacije.
:::

:::note[Obrada kartice]
Naknada za obradu plaćanja koja se naplaćuje za prikupljanje uplate gosta prosljeđuje se hotelu po stvarnoj cijeni, bez marže. Varira ovisno o kartici gosta i načinu plaćanja, a točan iznos vidljiv je u odjeljku Računovodstvo svake rezervacije. Ako se rezervacija otkaže ili vrati novac, naknada koju procesor zadrži i dalje se naplaćuje; ako ne naplaćuje ništa, ni mi ne naplaćujemo.
:::

:::note[Isplata sredstava]
Postoje naknade povezane s isplatom sredstava na vaš račun. To ovisi o metodi isplate koju odaberete. Trenutno podržavamo:

- **Bankovni transfer** — Trošak ovisi o zemlji u kojoj se nalazite, odakle se sredstva šalju i o bilo kojoj konverziji valute na putu. Naknadu za isplatu i bilo koji trošak konverzije plaća primatelj, po stvarnoj cijeni. Uključujemo kalkulator ponude koji možete koristiti kada imate dostupna sredstva na računu.

Ako želite da podržimo drugu metodu isplate, pošaljite nam e-mail.
:::

### Model 2 — Turistički agent kao trgovac zapisa

Ovaj model je dostupan samo turističkim agencijama koje imaju licencu za turističku agenciju u svojoj regiji i koje žele biti trgovac zapisa. Dostupan je samo API partnerima, rezervacije se vrše putem [Partner API-ja](/hr/integrations/partner-api/), i zahtijeva prethodnu pisanu suglasnost Wink-a. Neki od naših registriranih turističkih agenata žele biti odgovorni za rukovanje uplatom i isplatom sredstava hotelima. U ovom modelu oni su odgovorni za sredstva i posjeduju potrebne licence za rad u svojoj zemlji.

#### Razrada

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. To pokriva održavanje platforme i omogućuje nam da besplatno ponudimo sve gore navedeno.
:::

Koristeći ovaj model, turistički agenti plaćaju Wink-ovu naknadu od 1,5% plus bilo kakvu upotrebu Partner API-ja iznad besplatnog ograničenja, fakturiranu mjesečno.

## Što partneri plaćaju

Za partnere koji šalju rezervacije: kreatore, affiliate, platforme, developere i turističke agente. Partnerstva su neekskluzivna, bez teritorijalnih ograničenja.

| | Plaćanje prikupljeno za hotel (većina partnera) | Vi ste trgovac zapisa (samo API partneri) |
|---|---|---|
| Naknada za licencu ili teritorij | Nema | Nema |
| Naknada za postavljanje | Nema | Nema |
| Pretplata ili mjesečna naknada | Nema | Nema |
| Minimalna obveza ili rok | Nema | Nema. Primjenjuje se kreditni limit. |
| Pristup Partner API-ju | 10.000 hotelskih noćenja mjesečno besplatno, zatim $0.0001 po hotelskoj noći. Pay-as-you-go je isključen prema zadanim postavkama; pri dosegu besplatnog ograničenja pozivi vraćaju `429`. | Isto |
| Naknada po transakciji | Nema. Zaradite proviziju (10% zadano). | 1,5% naknada za rezervaciju na vrijednost rezervacije, fakturirana mjesečno u USD, dospjela u roku od 15 dana. S uključenim pay-as-you-go, korištenje Partner API-ja dolazi na drugoj mjesečnoj fakturi. |
| Naknada za podršku | Nema | Nema |
| Ostali troškovi | Naknade za prijenos isplate, po stvarnoj cijeni | Moguća predujam ili depozit pri odobrenju. Kamata od 1,5% mjesečno na neplaćene račune. |
| Kada se naknade mijenjaju | 30 dana unaprijed; primjenjuje se samo na rezervacije napravljene nakon promjene | Isto. Wink također može promijeniti vaš kreditni limit uz obavijest. |

Put trgovca zapisa zahtijeva prethodnu pisanu suglasnost Wink-a. Pogledajte [Model 2](#model-2--travel-agent-as-merchant-of-record) gore i stranicu [Partner API](/hr/integrations/partner-api/).

## Korištenje (pay-as-you-go)

Nekoliko značajki nam svaki put kad se koriste stvaraju trošak — generativni AI, API-ji društvenih mreža trećih strana i prikazivanje cijena uživo u velikom opsegu. Umjesto da ih uključujemo u mjesečni plan koji možda nećete koristiti, plaćate samo za ono što stvarno potrošite, i to tek nakon što iskoristite besplatni mjesečni limit.

| Značajka | Besplatno mjesečno | Zatim | Naplaćena jedinica |
| -- | -- | -- | -- |
| Objave na društvenim mrežama — slika | 1 | $1.50 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-generirana slika | 0 | $2.50 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-poboljšani video | 0 | $4.00 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-generirani video | 0 | $14.00 | Jedna objavljena objava |
| AI odgovor na komentar ili DM | 5 | $0.05 | Jedan odgovor |
| Odgovor chatbota | 5 | $0.05 | Jedan odgovor |
| Partner API | 10.000 | $0.0001 | Jedna hotelska noć |

Cijene su u USD. Besplatni limit se dodjeljuje **po računu**, ne po korisniku, i resetira se 1. u mjesecu (UTC).

### Kako se cijene objava određuju

Objave se cijene prema sadržaju jer to je ono što nas košta njihova izrada. Statična slika je jeftina; video nije; sve što generiramo AI-jem košta znatno više od fotografije koju ste sami dostavili.

- **Besplatni limit pokriva samo standardne objave sa slikama.** Dobivate jednu takvu po računu mjesečno. Video objave i AI-generirani mediji se naplaćuju od prve objave — nema besplatnog ograničenja za te kategorije, pa nekretnina koja objavljuje video može očekivati trošak već u prvom mjesecu.
- **Video pobjeđuje.** Ako objava sadrži bilo kakav video, cijela objava se naplaćuje po video tarifi. Objavu koja miješa sliku i video smatra se video objavom.
- **AI podrijetlo određuje tarifu.** Mediji koje dostavite sami — vlastite fotografije i video ili bilo što iz Wink biblioteke sadržaja — naplaćuju se po standardnoj tarifi. Mediji koje generiramo za vas naplaćuju se po AI tarifi.

### Što se mjeri, a što ne

- Samo **generirana** objava objavljena na mreži treće strane (Facebook, Instagram) se naplaćuje. Objave koje ste sami napisali su besplatne, gdje god se objave.
- **Objavljivanje na WinkLinks je uvijek besplatno**, generirano ili ne.
- Naplaćuje se **pri objavi**, ne po pokušaju. Ponovno generiranje nacrta dok ne budete zadovoljni ne povećava račun — plaćate samo za objavu koju stvarno objavite. Pokušaji nisu neograničeni: svaka objava dopušta oko 10 ponovnih generiranja za slike i 3 za video, što odražava trošak njihove proizvodnje. Vidjet ćete koliko vam je preostalo dok radite.
- Na Partner API-ju, **hotelska noć** je jedna hotelska soba za jednu noć boravka — *ne* jedan API poziv. Pretraživanje koje vraća 20 hotela za 3 noći je 60 hotelskih noćenja iz jednog zahtjeva. Content i Lookup (pretraživanje destinacija i autocomplete) pozivi koštaju po jednoj jedinici, bez obzira što vraćaju. Krajnje točke računa su besplatne.

### Kako uključiti

Pay-as-you-go je isključen prema zadanim postavkama. Svi dobivaju besplatni limit bez ikakve akcije.

Da biste prešli besplatni limit, **vlasnik** računa uključuje pay-as-you-go i odabire koje račune želi mjeriti. Korištenje sa svih uključenih računa zbraja se u **jednu mjesečnu fakturu**, koju možete automatski platiti karticom ili primiti kao fakturu za samostalno plaćanje.

Nakon uključivanja, vaše korištenje se mjeri, ali **nikada se ne ograničava** — nećete dosegnuti ograničenje brzine za trošenje novca kod nas.

:::note[Ako ga ne uključite]
Ništa se ne kvari i ništa se ne naplaćuje. Jednostavno stajete na besplatnom limitu za taj mjesec: generirane objave se neće objaviti, a Partner API pozivi vraćaju `429` dok se limit ne resetira.
:::

### Status naplate

| Status | Što znači |
| -- | -- |
| U dobrom stanju | Sve radi normalno. |
| Kašnjenje u plaćanju | Plaćanje nije uspjelo i pokušava se ponovno. Vaše značajke nastavljaju raditi tijekom tog razdoblja. |
| Obustavljeno | Račun nije plaćen do kraja. Naplatne radnje su blokirane dok se ne podmiri; besplatne značajke rade normalno. |

:::tip[Stvarne cijene]
Cijene po jedinici i besplatni limiti uvijek su prikazani u Portalu, izravno iz našeg sustava naplate, tako da ih možete provjeriti prije nego što se obvežete. Pogledajte [Naplate](/hr/portal/plan) za uključivanje pay-as-you-go, odabir računa i praćenje korištenja i faktura tijekom mjeseca. Pogledajte [Social](/hr/portal/social/what-is-social) za to kako volumen objava utječe na vaše troškove.
:::

## Učinak platforme

Na kraju, kako nastavljamo rasti i po veličini i po broju rezervacija, želimo s vama podijeliti neke učinke platforme. Više rezervacija donosi prilike za količinske popuste od našeg procesora plaćanja. Budući da se obrada kartica prosljeđuje po stvarnoj cijeni, svaka ušteda koju dogovorimo ide izravno hotelima.

Pridružite se Wink-u danas i otkrijte novi, unosan način poslovanja u ugostiteljskoj industriji!
