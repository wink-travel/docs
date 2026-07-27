---
title: Cijene
description: Većina Wink-a je besplatna. Plaćate malu naknadu po rezervaciji i naknadu po korištenju za nekoliko premium značajki.
sidebar:
  order: 4
---

Wink nema pretplate, nema mjesta za korisnike i nema naknada za postavljanje. Velika većina platforme je besplatna, a postoje samo dvije stvari za koje ćete ikada platiti:

1. **Mali postotak po rezervaciji** — samo kada zapravo zaradite.
2. **Naknade po korištenju** — za nekoliko premium značajki koje nas koštaju svaki put kad se koriste, svaka s besplatnim mjesečnim ograničenjem.

## Što je besplatno

Ovo ne košta ništa, zauvijek, bez ograničenja i mjerenja:

- **Booking engine** — na vašoj vlastitoj stranici, na vašoj WinkLinks stranici ili bilo gdje drugdje gdje ga ugrađujete.
- **Upravljanje nekretninama** — sadržaj, fotografije, cijene, planovi cijena, dostupnost, promocije i pravila.
- **Affiliate alati** — dijeljivi linkovi, kurirane liste, mreže, karte, kartice i ugrađeni widgeti.
- **Alati za turističke agente** — pretraživanje, prilagođene cijene i rezervacije u ime vaših klijenata.
- **WinkLinks** — preuzmite svoj personalizirani URL, izgradite svoju stranicu i objavljujte koliko god želite.
- **Ručno objavljivanje na društvenim mrežama** — sve što sami napišete, na bilo kojoj povezanoj mreži.
- **Analitika, ljestvice, zahtjevi, postavke** i upravljanje računom.
- **Consumer i Booking Engine API-jevi**, plus lookup i autocomplete krajnje točke.

## Rezervacije

Wink podržava oba modela: trgovac i agent.

### Model 1

Wink je trgovac zapisa u trenutku kada se rezervacija dogodi. Wink je odgovoran za sredstva i posjeduje sve potrebne licence za rad turističke agencije.
Ovaj model se odnosi na 95% svih rezervacija.

Wink naplaćuje `5,5% po rezervaciji` za održavanje platforme.
Većina toga ide platnom gatewayu (Visa, MasterCard itd.). Prosječna rezervacija nas košta `2,95%` za stjecanje; ponekad i do `3,6%`. Djelomični povrati dodatno nas koštaju jer platni gateway to vidi kao novu naplatu.
Želimo biti potpuno transparentni oko cijena sada kako bismo svima uštedjeli vrijeme prije nego što pokušaju pregovarati o dodatnim popustima prije korištenja Wink-a. Naš model cijena je više nego pošten i i mi moramo zaraditi za život.

#### Raspodjela

:::note[Naknada za obradu]
Wink naplaćuje 1,5% naknade za obradu po rezervaciji. To pokriva održavanje platforme i omogućuje nam da besplatno pružimo sve gore navedeno.
:::

:::note[Naknada za plaćanje]
TripPay naplaćuje 4,0% naknade za plaćanje po rezervaciji. To pokriva pribavljanje uplate od putnika.
:::

:::note[Isplata sredstava]
Postoje naknade povezane s isplatom sredstava na vaš račun. To ovisi o metodi isplate koju odaberete. Trenutno podržavamo:

- **Bankovni transfer** Trošak ovisi o zemlji u kojoj se nalazite i odakle se sredstva šalju. Uključili smo kalkulator ponuda koji možete koristiti kada imate dostupna sredstva na računu.

Ako želite da podržimo drugu metodu isplate, pošaljite nam e-mail.
:::

### Model 2

Ovaj model je dostupan samo turističkim agencijama koje posjeduju licencu za rad turističke agencije u svojoj regiji i koje žele biti trgovac zapisa. Neki od naših registriranih turističkih agenata žele biti odgovorni za rukovanje plaćanjem i isplatom sredstava hotelima. U ovom modelu oni su odgovorni za sredstva i posjeduju potrebne licence za rad u svojoj zemlji.

#### Raspodjela

:::note[Naknada za obradu]
Wink naplaćuje 1,5% naknade za obradu po rezervaciji. To pokriva održavanje platforme i omogućuje nam da besplatno pružimo sve gore navedeno.
:::

Koristeći ovaj model, turistički agenti plaćaju samo Wink-ovu naknadu za obradu, a Wink će turističkom agentu fakturirati mjesečno.

## Korištenje (plaćanje po korištenju)

Nekoliko značajki nas košta svaki put kad se koriste — generativni AI, API-ji društvenih mreža trećih strana i prikazivanje cijena uživo u velikom opsegu. Umjesto da ih uključujemo u mjesečni plan koji možda nećete koristiti, plaćate samo za ono što stvarno potrošite, i to tek nakon što iskoristite besplatni mjesečni limit.

| Značajka | Besplatno mjesečno | Zatim | Jedinica naplate |
| -- | -- | -- | -- |
| Objave na društvenim mrežama — slika | 1 | $1.50 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-generirana slika | 0 | $2.50 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-poboljšani video | 0 | $4.00 | Jedna objavljena objava |
| Objave na društvenim mrežama — AI-generirani video | 0 | $14.00 | Jedna objavljena objava |
| AI odgovor na komentar ili DM | 5 | $0.05 | Jedan odgovor |
| Odgovor chatbota | 5 | $0.05 | Jedan odgovor |
| Partner API | 10,000 | $0.0001 | Jedan hotel-dan |

Cijene su u USD. Besplatni limit se dodjeljuje **po računu**, ne po korisniku, i resetira se 1. u mjesecu (UTC).

### Kako se cijene objava određuju

Objave se cijene prema sadržaju jer nas to košta za izradu. Statična slika je jeftina; video nije; sve što generiramo AI-jem košta znatno više od fotografije koju ste sami dostavili.

- **Besplatni limit pokriva samo standardne objave sa slikama.** Dobivate jednu takvu po računu mjesečno. Video objave i AI-generirani mediji se naplaćuju od prve objave — nema besplatnog limita za te kategorije, pa nekretnina koja objavljuje video može očekivati naplatu već u prvom mjesecu.
- **Video ima prednost.** Ako objava sadrži bilo kakav video, cijela objava se naplaćuje po video tarifi. Objave koje kombiniraju sliku i video smatraju se video objavama.
- **AI porijeklo određuje tarifu.** Mediji koje dostavite sami — vaše vlastite fotografije i videozapisi ili bilo što iz Wink biblioteke sadržaja — naplaćuju se po standardnoj tarifi. Mediji koje generiramo za vas naplaćuju se po AI tarifi.

### Što se mjeri, a što ne

- Samo **generirana** objava objavljena na mreži treće strane (Facebook, Instagram) se naplaćuje. Objave koje ste sami napisali su besplatne, gdje god da idu.
- **Objavljivanje na WinkLinks je uvijek besplatno**, bilo generirano ili ne.
- Naplaćuje se **pri objavi**, ne po pokušaju. Ponovno generiranje nacrta dok ne budete zadovoljni ne povećava račun — plaćate jednom za objavu koju stvarno objavite. Pokušaji nisu neograničeni: svaka objava dopušta oko 10 regeneracija za slike i 3 za video, što odražava troškove njihove proizvodnje. Vidjet ćete koliko vam je preostalo dok radite.
- Na Partner API-ju, **hotel-dan** je jedan hotel s cijenom za jednu noć boravka — *ne* jedan API poziv. Pretraživanje koje vraća 20 hotela za 3 noći je 60 hotel-dana iz jednog zahtjeva. Lookup i autocomplete krajnje točke su besplatne i nikada se ne mjere.

### Kako uključiti

Plaćanje po korištenju je isključeno prema zadanim postavkama. Svi dobivaju besplatni limit bez ikakve akcije.

Da biste prešli limit, **vlasnik** računa uključuje plaćanje po korištenju i odabire koje račune želi mjeriti. Korištenje sa svih uključenih računa zbraja se u **jedan mjesečni račun**, koji možete automatski platiti karticom ili primiti kao fakturu za samostalno plaćanje.

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

:::tip[Trenutne cijene]
Jedinične cijene i besplatni limiti uvijek su prikazani u Portalu, izravno iz našeg sustava naplate, tako da ih možete provjeriti prije nego što se obvežete. Pogledajte [Billing](/hr/portal/plan) za uključivanje plaćanja po korištenju, odabir računa i praćenje korištenja i računa tijekom mjeseca. Pogledajte [Social](/hr/portal/social/what-is-social) za to kako volumen objava utječe na vaše troškove.
:::

## Utjecaj platforme

Na kraju, kako nastavljamo rasti u veličini i broju rezervacija, želimo s vama podijeliti neke učinke platforme. Više rezervacija donosi prilike za količinske popuste od našeg platnog gatewaya, što bi nam omogućilo da smanjimo naknadu za obradu za sve.

Pridružite se Wink-u danas i otkrijte novi, unosan način poslovanja u industriji ugostiteljstva!
