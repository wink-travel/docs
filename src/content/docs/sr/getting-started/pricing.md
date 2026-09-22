---
title: Cene
description: Većina Wink-a je besplatna. Plaćate malu naknadu po rezervaciji i naknadu po korišćenju za nekoliko premium funkcija.
sidebar:
  order: 4
---

Wink nema pretplate, nema mesta i nema troškove postavljanja. Ogromna većina platforme je besplatna, a postoje samo dve stvari za koje ćete ikada plaćati:

1. **Naknada za platformu po rezervaciji, plus troškovi obrade kartice po stvarnoj ceni** — samo kada se izvrši rezervacija.
2. **Naknade po korišćenju** — za nekoliko premium funkcija koje nas koštaju svaki put kada se koriste, svaka sa besplatnim mesečnim limitom.

## Šta je besplatno

Ovo ne košta ništa, zauvek, bez limita i merenja:

- **Booking engine** — na vašem sajtu, na vašoj WinkLinks stranici ili bilo gde gde ga ugradite.
- **Upravljanje nekretninama** — sadržaj, fotografije, cene, planovi cena, dostupnost, promocije i politike.
- **Affiliate alati** — deljivi linkovi, kurirane liste, mreže, mape, kartice i ugrađeni vidžeti.
- **Alati za turističke agente** — pretraga, prilagođene cene i rezervacije u ime vaših klijenata.
- **WinkLinks** — preuzmite svoj personalizovani URL, napravite svoju stranicu i objavljujte koliko god želite.
- **Ručno objavljivanje na društvenim mrežama** — sve što sami napišete, na bilo kojoj povezanoj mreži.
- **Analitika, tabele lidera, zahtevi, podešavanja** i upravljanje nalogom.
- **Consumer i Booking Engine API-jevi**, plus lookup i autocomplete krajnje tačke.

## Rezervacije

Wink podržava dva modela: Wink prikuplja uplatu za hotel, i licencirani turistički agent koji je zvanični trgovac.

### Model 1 — Wink prikuplja za hotel

Wink prikuplja uplatu gosta kao ograničeni agent hotela za naplatu. Hotel je zvanični trgovac, i ime hotela se pojavljuje na izvodu sa kartice gosta.
Ovaj model važi za 95% svih rezervacija.

#### Detalji

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno. Naknada se ne naplaćuje za otkazane rezervacije.
:::

:::note[Obrada kartice]
Naknada za obradu plaćanja koja se naplaćuje za prikupljanje uplate gosta prenosi se hotelu po stvarnoj ceni, bez marže. Varira u zavisnosti od kartice i načina plaćanja gosta, a tačan iznos se vidi u odeljku Računovodstvo za svaku rezervaciju. Ako je rezervacija otkazana ili vraćena, bilo koja naknada koju procesor zadrži i dalje se naplaćuje; ako ne naplaćuje ništa, ni mi ne naplaćujemo.
:::

:::note[Isplata sredstava]
Postoje naknade povezane sa slanjem sredstava na vaš račun. To zavisi od metode isplate koju izaberete. Trenutno podržavamo:

- **Bankovni transfer** — Trošak zavisi od zemlje u kojoj se nalazite, odakle se sredstva šalju i bilo koje konverzije valute na putu. Naknadu za isplatu i bilo koji trošak konverzije plaća primalac, po stvarnoj ceni. Uključili smo kalkulator ponude koji možete koristiti kada imate dostupna sredstva na računu.

Ako želite da podržimo drugu metodu isplate, pošaljite nam e-mail.
:::

### Model 2 — Turistički agent kao zvanični trgovac

Ovaj model je dostupan samo turističkim agencijama koje imaju licencu za turističku agenciju u svojoj regiji i koje žele da budu zvanični trgovac. Neki od naših registrovanih turističkih agenata žele da budu odgovorni za rukovanje uplatom i isplatom sredstava hotelima. U ovom modelu oni su odgovorni za sredstva i poseduju potrebne licence za rad u svojoj zemlji.

#### Detalji

:::note[Naknada za platformu]
Wink naplaćuje 1,5% naknade za platformu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno.
:::

Koristeći ovaj model, turistički agenti plaćaju samo Wink-ovu naknadu za platformu, a Wink će fakturisati turističkom agentu na mesečnom nivou.

## Korišćenje (plaćanje po potrošnji)

Nekoliko funkcija nas košta svaki put kada se koriste — generativni AI, API-jevi društvenih mreža trećih strana i prikazivanje cena uživo u velikom obimu. Umesto da ih uključujemo u mesečni plan koji možda nećete koristiti, plaćate samo za ono što zaista potrošite, i to tek nakon što iskoristite besplatni mesečni limit.

| Funkcija | Besplatno mesečno | Zatim | Jedinica naplate |
| -- | -- | -- | -- |
| Objavljivanje na društvenim mrežama — slika | 1 | $1.50 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-generisana slika | 0 | $2.50 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-poboljšani video | 0 | $4.00 | Jedna objavljena objava |
| Objavljivanje na društvenim mrežama — AI-generisani video | 0 | $14.00 | Jedna objavljena objava |
| AI odgovor na komentar ili DM | 5 | $0.05 | Jedan odgovor |
| Odgovor chatbota | 5 | $0.05 | Jedan odgovor |
| Partner API | 10,000 | $0.0001 | Jedan hotel-dan |

Cene su u USD. Besplatni limit se dodeljuje **po nalogu**, ne po korisniku, i resetuje se prvog u mesecu (UTC).

### Kako se cene određuju za objave

Objave se naplaćuju prema sadržaju, jer to je ono što nas košta da ih napravimo. Statična slika je jeftina; video nije; sve što generišemo AI-jem košta znatno više od fotografije koju ste sami dostavili.

- **Besplatni limit pokriva samo standardne objave sa slikama.** Dobijate jednu takvu po nalogu mesečno. Video objave i AI-generisani mediji se naplaćuju od prve objave — nema besplatnog limita za te kategorije, tako da nekretnina koja objavljuje video treba da očekuje naplatu već u prvom mesecu.
- **Video ima prednost.** Ako objava sadrži bilo kakav video, cela objava se naplaćuje po video tarifi. Objave koje kombinuju sliku i video smatraju se video objavama.
- **AI poreklo određuje tarifu.** Mediji koje vi dostavite — vaše fotografije i video, ili bilo šta iz vaše Wink biblioteke sadržaja — naplaćuju se po standardnoj tarifi. Mediji koje generišemo za vas naplaćuju se po AI tarifi.

### Šta se meri, a šta ne

- Samo **generisana** objava objavljena na mreži treće strane (Facebook, Instagram) se naplaćuje. Objave koje ste sami napisali su besplatne, gde god da idu.
- **Objavljivanje na WinkLinks je uvek besplatno**, bilo da je generisano ili ne.
- Naplaćuje se **pri objavljivanju**, ne po pokušaju. Ponovno generisanje nacrta dok ne budete zadovoljni ne povećava račun — plaćate samo za objavu koju zaista objavite. Pokušaji nisu neograničeni: svaka objava dozvoljava oko 10 ponovnih generisanja za slike i 3 za video, što odražava troškove njihove proizvodnje. Videćete koliko vam je ostalo dok radite.
- Na Partner API-ju, **hotel-dan** je jedan hotel sa cenom za jednu noć boravka — *ne* jedan API poziv. Pretraga koja vraća 20 hotela za 3 noći je 60 hotel-dana iz jednog zahteva. Lookup i autocomplete krajnje tačke su besplatne i nikada se ne mere.

### Kako se uključuje

Plaćanje po potrošnji je isključeno po defaultu. Svi dobijaju besplatni limit bez ikakve akcije.

Da biste prešli preko limita, **vlasnik** naloga uključuje plaćanje po potrošnji i bira koji od svojih naloga će biti merena potrošnja. Korišćenje sa svih uključenih naloga se sabira u **jedan mesečni račun**, koji možete automatski platiti karticom ili dobiti kao fakturu za samostalno plaćanje.

Kada je uključeno, vaša potrošnja se meri, ali **nikada se ne ograničava** — nećete dostići limit potrošnje kod nas.

:::note[Ako ne uključite]
Ništa se ne kvari i ništa se ne naplaćuje. Jednostavno stajete na besplatnom limitu za taj mesec: generisane objave neće biti objavljene, a Partner API pozivi vraćaju `429` dok se limit ne resetuje.
:::

### Status naplate

| Status | Šta znači |
| -- | -- |
| U dobrom stanju | Sve funkcioniše normalno. |
| Kašnjenje u plaćanju | Plaćanje nije uspelo i pokušava se ponovo. Vaše funkcije nastavljaju da rade tokom ovog perioda. |
| Suspendovan | Faktura nije plaćena do kraja. Naplative akcije su blokirane dok se ne izmiru; besplatne funkcije rade normalno. |

:::tip[Aktuelne cene]
Jedinicne cene i besplatni limiti su uvek prikazani u Portalu, direktno iz našeg sistema za naplatu, tako da ih možete proveriti pre nego što se obavežete. Pogledajte [Billing](/sr/portal/plan) da uključite plaćanje po potrošnji, izaberete naloge i pratite potrošnju i fakture za tekući mesec. Pogledajte [Social](/sr/portal/social/what-is-social) za to kako obim objava utiče na vaše troškove.
:::

## Efekat platforme

Na kraju, kako nastavljamo da rastemo i po veličini i po broju rezervacija, želimo da sa vama podelimo neke od efekata platforme. Više rezervacija donosi mogućnosti za količinske popuste od našeg procesora plaćanja. Pošto se obrada kartica prenosi po stvarnoj ceni, svaka ušteda koju dogovorimo ide direktno hotelima.

Pridružite se Wink-u danas i otkrijte novi, unosan način poslovanja u industriji ugostiteljstva!
