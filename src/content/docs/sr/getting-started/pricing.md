---
title: Cene
description: Većina Wink-a je besplatna. Plaćate malu naknadu po rezervaciji i naknadu po korišćenju za nekoliko premium funkcija.
sidebar:
  order: 4
---

Wink nema pretplate, nema mesta i nema troškove postavljanja. Ogromna većina platforme je besplatna, a postoje samo dve stvari za koje ćete ikada plaćati:

1. **Mali procenat po rezervaciji** — samo kada zaista zaradite.
2. **Naknade po korišćenju** — za nekoliko premium funkcija koje nas koštaju svaki put kada se koriste, svaka sa besplatnim mesečnim limitom.

## Šta je besplatno

Ovo ništa ne košta, zauvek, bez limita i merenja:

- **Booking engine** — na vašem sajtu, na vašoj WinkLinks stranici ili bilo gde gde ga ugradite.
- **Upravljanje nekretninama** — sadržaj, fotografije, cene, planovi cena, dostupnost, promocije i politike.
- **Affiliate alati** — deljivi linkovi, kurirane liste, mreže, mape, kartice i ugrađivi vidžeti.
- **Alati za turističke agente** — pretraga, prilagođene cene i rezervacije u ime vaših klijenata.
- **WinkLinks** — preuzmite svoj personalizovani URL, napravite svoju stranicu i objavljujte koliko god želite.
- **Ručno objavljivanje na društvenim mrežama** — sve što sami napišete, na bilo kojoj povezanoj mreži.
- **Analitika, tabele lidera, zahtevi, podešavanja** i upravljanje nalogom.
- **Consumer i Booking Engine API-jevi**, plus lookup i autocomplete krajnje tačke.

## Rezervacije

Wink podržava i model trgovca i model agenta.

### Model 1

Wink je trgovac zapisa u trenutku kada se rezervacija desi. Wink je odgovoran za sredstva i poseduje sve potrebne licence za rad turističke agencije.
Ovaj model važi za 95% svih rezervacija.

Wink naplaćuje `5,5% po rezervaciji` za održavanje platforme.
Većina tog iznosa ide platnom provajderu (Visa, MasterCard itd). Prosečna rezervacija nas košta `2,95%` za sticanje; ponekad i do `3,6%`. Delimični povraćaji dodatno nas koštaju jer platni provajder to vidi kao novu naplatu.
Želimo da budemo potpuno transparentni u vezi sa cenama sada, kako bismo svima uštedeli vreme pre nego što pokušaju da pregovaraju o dodatnim popustima pre nego što koriste Wink. Naš model cena je više nego fer i i mi moramo da zarađujemo.

#### Raspodela

:::note[Naknada za obradu]
Wink naplaćuje 1,5% naknade za obradu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno.
:::

:::note[Naknada za plaćanje]
TripPay naplaćuje 4,0% naknade za plaćanje po rezervaciji. Ovo pokriva pribavljanje uplate od putnika.
:::

:::note[Isplata sredstava]
Postoje naknade povezane sa slanjem sredstava na vaš račun. To zavisi od metode isplate koju izaberete. Trenutno podržavamo:

- **Bankovni transfer** Trošak zavisi od zemlje u kojoj se nalazite i odakle se sredstva šalju. Uključili smo kalkulator ponuda koji možete koristiti kada imate dostupna sredstva na računu.

Ako želite da podržimo drugu metodu isplate, pošaljite nam e-mail.
:::

### Model 2

Ovaj model je dostupan samo turističkim agencijama koje imaju licencu za rad turističke agencije u svojoj regiji i koje žele da budu trgovac zapisa. Neki od naših registrovanih turističkih agenata žele da budu odgovorni za rukovanje plaćanjem i isplatom sredstava hotelima. U okviru ovog modela, oni su odgovorni za sredstva i poseduju potrebne licence za rad u svojoj zemlji.

#### Raspodela

:::note[Naknada za obradu]
Wink naplaćuje 1,5% naknade za obradu po rezervaciji. Ovo pokriva održavanje platforme i omogućava nam da besplatno pružimo sve gore navedeno.
:::

Koristeći ovaj model, turistički agenti plaćaju samo Wink-ovu naknadu za obradu, a Wink će fakturisati turističkom agentu na mesečnom nivou.

## Korišćenje (plaćanje po upotrebi)

Nekoliko funkcija nas košta svaki put kada se koriste — generativni AI, API-jevi društvenih mreža trećih strana i prikazivanje uživo cena u velikom obimu. Umesto da ih uključujemo u mesečni plan koji možda nećete koristiti, plaćate samo za ono što zaista potrošite, i to tek nakon što iskoristite besplatni mesečni limit.

| Funkcija | Besplatno mesečno | Zatim | Jedinica naplate |
| -- | -- | -- | -- |
| Objavljivanje na društvenim mrežama — slika | 1 | $1.50 | Jedna objava |
| Objavljivanje na društvenim mrežama — AI-generisana slika | 0 | $2.50 | Jedna objava |
| Objavljivanje na društvenim mrežama — AI-poboljšani video | 0 | $4.00 | Jedna objava |
| Objavljivanje na društvenim mrežama — AI-generisan video | 0 | $14.00 | Jedna objava |
| AI odgovor na komentar ili DM | 5 | $0.05 | Jedan odgovor |
| Odgovor chatbota | 5 | $0.05 | Jedan odgovor |
| Partner API | 10,000 | $0.0001 | Jedan hotel-dan |

Cene su u USD. Besplatni limit se dodeljuje **po nalogu**, ne po korisniku, i resetuje se prvog u mesecu (UTC).

### Kako se cene objava određuju

Objave se naplaćuju prema sadržaju, jer to je ono što nas košta da ih napravimo. Statična slika je jeftina; video nije; sve što generišemo AI-jem košta znatno više od fotografije koju ste sami dostavili.

- **Besplatni limit pokriva samo standardne objave sa slikama.** Dobijate jednu takvu po nalogu mesečno. Video objave i AI-generisani mediji se naplaćuju od prve objave — nema besplatnog limita za te kategorije, tako da nekretnina koja objavljuje video treba da očekuje naplatu već u prvom mesecu.
- **Video ima prednost.** Ako objava sadrži bilo kakav video, cela objava se naplaćuje po video tarifi. Objave koje kombinuju sliku i video smatraju se video objavama.
- **AI poreklo određuje tarifu.** Mediji koje vi dostavite — vaše fotografije i video, ili bilo šta iz vaše Wink biblioteke sadržaja — naplaćuju se po standardnoj tarifi. Mediji koje generišemo za vas naplaćuju se po AI tarifi.

### Šta se meri, a šta ne

- Samo **generisana** objava objavljena na mreži treće strane (Facebook, Instagram) se naplaćuje. Objava koju ste sami napisali je besplatna, gde god da je objavljena.
- **Objavljivanje na WinkLinks je uvek besplatno**, bilo da je generisano ili ne.
- Naplaćuje se **pri objavljivanju**, ne po pokušaju. Ponovno generisanje nacrta dok ne budete zadovoljni ne povećava račun — plaćate samo za objavu koju zaista objavite. Pokušaji nisu neograničeni: svaka objava dozvoljava oko 10 ponovnih generisanja za slike i 3 za video, što odražava troškove njihove proizvodnje. Videćete koliko vam je ostalo dok radite.
- Na Partner API-ju, **hotel-dan** je jedan hotel sa cenom za jednu noć boravka — *ne* jedan API poziv. Pretraga koja vraća 20 hotela za 3 noći je 60 hotel-dana iz jednog zahteva. Lookup i autocomplete krajnje tačke su besplatne i nikada se ne mere.

### Kako se uključuje

Plaćanje po upotrebi je isključeno po defaultu. Svi dobijaju besplatni limit bez ikakve akcije.

Da biste prešli preko limita, **vlasnik** naloga uključuje plaćanje po upotrebi i bira koji od svojih naloga će biti merena potrošnja. Korišćenje sa svih uključenih naloga se sabira u **jednu mesečnu fakturu**, koju možete automatski platiti karticom ili dobiti kao fakturu za samostalno plaćanje.

Kada se uključi, vaša potrošnja se meri, ali **nikada ne bude ograničena** — nećete dostići limit potrošnje kod nas.

:::note[Ako ne uključite]
Ništa se ne kvari i ništa se ne naplaćuje. Jednostavno stajete na besplatnom limitu za taj mesec: generisane objave neće biti objavljene, a Partner API pozivi vraćaju `429` dok se limit ne resetuje.
:::

### Status naplate

| Status | Šta znači |
| -- | -- |
| U dobrom stanju | Sve funkcioniše normalno. |
| Kašnjenje u plaćanju | Plaćanje nije uspelo i pokušava se ponovo. Vaše funkcije nastavljaju da rade tokom ovog perioda. |
| Suspendovan | Faktura nije plaćena do kraja. Naplatne akcije su blokirane dok se ne izmiru; besplatne funkcije rade normalno. |

:::tip[Aktuelne cene]
Jedinicne cene i besplatni limiti su uvek prikazani u Portalu, direktno iz našeg sistema za naplatu, tako da ih možete proveriti pre nego što se obavežete. Pogledajte [Billing](/sr/account/subscription) da uključite plaćanje po upotrebi, izaberete naloge i pratite potrošnju i fakture za tekući mesec. Pogledajte [Social](/sr/portal/social/what-is-social) za to kako obim objava utiče na vaše troškove.
:::

## Efekat platforme

Na kraju, kako nastavljamo da rastemo i po veličini i po broju rezervacija, želimo da sa vama podelimo neke efekte platforme. Više rezervacija donosi mogućnosti za količinske popuste od našeg platnog provajdera, što bi nam omogućilo da smanjimo naknadu za obradu za sve.

Pridružite se Wink-u danas i otkrijte novi, unosan način poslovanja u industriji ugostiteljstva!
