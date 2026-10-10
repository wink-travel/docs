---
title: Cenik
description: Večina Wink je brezplačna. Plačate majhno provizijo na rezervacijo in plačilo glede na uporabo za nekaj premium funkcij.
sidebar:
  order: 4
---

Wink nima naročnin, sedežev ali stroškov vzpostavitve. Večina platforme je brezplačna, plačate pa le za dve stvari:

1. **Provizija platforme na rezervacijo, plus stroški obdelave kartice po dejanski ceni** — samo ob izvedeni rezervaciji.
2. **Plačilo glede na uporabo** — za nekaj premium funkcij, ki nam povzročajo stroške vsakič, ko se uporabijo, vsaka s svojo brezplačno mesečno kvoto.

## Kaj je brezplačno

Te funkcije ne stanejo nič, za vedno, brez kvot in merjenja:

- **Rezervacijski sistem** — na vaši spletni strani, na vaši WinkLinks strani ali kjerkoli ga vdelate.
- **Upravljanje nepremičnin** — vsebina, fotografije, cene, cenovni načrti, razpoložljivost, promocije in pravila.
- **Affiliate orodja** — deljive povezave, izbrane sezname, mreže, zemljevide, kartice in vdelljive pripomočke.
- **Orodja za potovalne agencije** — iskanje, prilagojene cene in rezervacije v imenu vaših strank.
- **WinkLinks** — zahtevajte svojo unikatno URL, ustvarite svojo stran in jo objavljajte kolikokrat želite.
- **Ročni objavi na družbenih omrežjih** — karkoli sami napišete, na katerem koli povezanem omrežju.
- **Analitika, lestvice, zahtevki, nastavitve** in upravljanje računa.
- **API-ji za potrošnike in rezervacijski sistem**, vključno z njihovimi iskalnimi in samodokončnimi končnimi točkami. Pri **Partner API-ju** so klici Lookup in Content merjeni po eni enoti vsak (glej [Uporaba](#what-is-and-isnt-metered) spodaj).

## Rezervacije

Wink podpira dva modela: Wink kot zbiratelj plačil za hotel in licencirana potovalna agencija kot trgovec v evidenci.

### Model 1 — Wink zbira plačilo za hotel

Wink zbira plačilo gosta kot omejeni agent za zbiranje plačil hotela. Hotel je trgovec v evidenci, ime hotela pa se pojavi na izpisku kartice gosta.
Ta model velja za 95 % vseh rezervacij.

#### Razčlenitev

:::note[Provizija platforme]
Wink zaračuna 1,5 % provizijo platforme na rezervacijo. To pokriva vzdrževanje platforme in omogoča, da vam podarimo vse zgoraj našteto. Ni zaračunano za preklicane rezervacije.
:::

:::note[Obdelava kartic]
Strošek obdelave plačila, ki se zaračuna za zbiranje plačila gosta, se prenese na hotel po dejanski ceni, brez marže. Različen je glede na kartico in način plačila gosta, natančen znesek pa je prikazan v računovodskem delu vsake rezervacije. Če je rezervacija preklicana ali povrnjena, se še vedno zaračuna strošek, ki ga obdrži procesor; če ne zaračuna nič, tudi mi ne.
:::

:::note[Izplačila sredstev]
Obstajajo stroški povezani s prenosom sredstev na vaš račun. To je odvisno od izbranega načina izplačila. Trenutno podpiramo:

- **Bančno nakazilo** — stroški so odvisni od države, kjer se nahajate, od kje se sredstva pošiljajo in morebitnih menjalnih stroškov. Stroške izplačila in menjalne stroške plača prejemnik, po dejanski ceni. Vključujemo kalkulator ponudb, ki ga lahko uporabite, ko imate na računu razpoložljiva sredstva.

Če želite, da podpiramo drug način izplačila, nam pošljite e-pošto.
:::

### Model 2 — Potovalna agencija kot trgovec v evidenci

Ta model je na voljo samo potovalnim agencijam, ki imajo licenco za potovalno agencijo v svoji regiji in želijo biti trgovec v evidenci. Na voljo je samo API partnerjem, ki rezervirajo preko [Partner API-ja](/sl/integrations/partner-api/) in potrebuje pisno predhodno odobritev Wink. Nekateri naši registrirani potovalni agenti želijo prevzeti odgovornost za obdelavo plačil in izplačila hotelom. V tem modelu so odgovorni za sredstva in imajo potrebne licence za delovanje v svoji državi.

#### Razčlenitev

:::note[Provizija platforme]
Wink zaračuna 1,5 % provizijo platforme na rezervacijo. To pokriva vzdrževanje platforme in omogoča, da vam podarimo vse zgoraj našteto.
:::

V tem modelu potovalne agencije plačajo Winkovo 1,5 % provizijo plus morebitno uporabo Partner API-ja nad brezplačno kvoto, ki se zaračunava mesečno.

## Kaj plačujejo partnerji

Za partnerje, ki pošiljajo rezervacije: ustvarjalce, affiliate, platforme, razvijalce in potovalne agente. Partnerstva niso ekskluzivna in nimajo ozemeljskih omejitev.

| | Plačilo zbrano za hotel (večina partnerjev) | Vi ste trgovec v evidenci (samo API partnerji) |
|---|---|---|
| Licenčna ali ozemeljska pristojbina | Nič | Nič |
| Strošek vzpostavitve | Nič | Nič |
| Naročnina ali mesečna pristojbina | Nič | Nič |
| Minimalna obveznost ali trajanje | Nič | Nič. Velja kreditna omejitev. |
| Dostop do Partner API-ja | 10.000 hotelskih nočitev na mesec brezplačno, nato 0,0001 $ na hotelsko nočitev. Plačilo glede na uporabo je privzeto izklopljeno; pri dosegu brezplačne kvote klici vrnejo `429`. | Enako |
| Transakcijska pristojbina | Nič. Zaslužite provizijo (privzeto 10 %). | 1,5 % provizija na vrednost rezervacije, zaračunana mesečno v USD, zapadlost v 15 dneh. Če je plačilo glede na uporabo vključeno, se uporaba Partner API-ja zaračuna na drugi mesečni fakturi. |
| Strošek podpore | Nič | Nič |
| Drugi stroški | Stroški prenosa izplačil po dejanski ceni | Možno predplačilo ali depozit ob odobritvi. Obresti 1,5 % mesečno samo na zapadle račune. |
| Kdaj se pristojbine spremenijo | 30 dni predhodnega obvestila; velja samo za rezervacije po spremembi | Enako. Wink lahko tudi spremeni vašo kreditno omejitev z obvestilom. |

Pot trgovca v evidenci zahteva predhodno pisno odobritev Wink. Glejte [Model 2](#model-2--travel-agent-as-merchant-of-record) zgoraj in stran [Partner API](/sl/integrations/partner-api/).

## Uporaba (plačilo glede na uporabo)

Nekatere funkcije nam povzročajo stroške vsakič, ko se uporabijo — generativna AI, API-ji družbenih omrežij tretjih oseb in prikazovanje cen v živo v velikem obsegu. Namesto da bi jih vključili v mesečni paket, ki ga morda ne boste uporabljali, plačate le za tisto, kar dejansko porabite, in šele ko porabite brezplačno mesečno kvoto.

| Funkcija | Brezplačno na mesec | Nato | Zaračunana enota |
| -- | -- | -- | -- |
| Objave na družbenih omrežjih — slika | 1 | 1,50 $ | Ena objava |
| Objave na družbenih omrežjih — AI-generirana slika | 0 | 2,50 $ | Ena objava |
| Objave na družbenih omrežjih — AI izboljšan video | 0 | 4,00 $ | Ena objava |
| Objave na družbenih omrežjih — AI-generiran video | 0 | 14,00 $ | Ena objava |
| AI odgovor na komentar ali zasebno sporočilo | 5 | 0,05 $ | En odgovor |
| Odgovor chatbota | 5 | 0,05 $ | En odgovor |
| Partner API | 10.000 | 0,0001 $ | Ena hotelska nočitev |

Cene so v USD. Brezplačna kvota velja **na račun**, ne na uporabnika, in se ponastavi 1. v mesecu (UTC).

### Kako se cenijo objave

Objave se cenijo glede na vsebino, ker nas to stane. Statična slika je poceni; video ni; vse, kar ustvarimo z AI, stane bistveno več kot fotografija, ki jo zagotovite sami.

- **Brezplačna kvota velja samo za standardne slikovne objave.** Na račun dobite eno takšno na mesec. Video objave in AI-generirane vsebine se zaračunavajo od prve objave naprej — za te ni brezplačne kvote, zato naj nepremičnina, ki objavlja video, pričakuje strošek že v prvem mesecu.
- **Video prevlada.** Če objava vsebuje video, se celotna objava zaračuna po video tarifi. Objave, ki mešajo sliko in video, so video objave.
- **AI izvor določa tarifo.** Vsebine, ki jih zagotovite sami — vaše lastne fotografije in video ali karkoli iz Winkove knjižnice vsebin — se zaračunavajo po standardni tarifi. Vsebine, ki jih ustvarimo za vas z AI, se zaračunavajo po AI tarifi.

### Kaj se meri in kaj ne

- Zaračunljiva je samo **generirana** objava, ki je objavljena na omrežju tretje osebe (Facebook, Instagram). Objave, ki jih napišete sami, so brezplačne, kamorkoli jih objavite.
- **Objavljanje na WinkLinks je vedno brezplačno**, ne glede na to, ali je vsebina generirana ali ne.
- Zaračunava se **ob objavi**, ne na poskus. Ponovno ustvarjanje osnutka, dokler niste zadovoljni, ne poveča računa — plačate samo za objavo, ki jo dejansko objavite. Poskusi niso neomejeni: vsaka objava omogoča približno 10 ponovnih generacij za slike in 3 za video, kar odraža naše stroške za njihovo izdelavo. Med delom boste videli, koliko jih imate še na voljo.
- Pri Partner API-ju je **hotelska nočitev** ena hotelska soba za eno nočitev — *ne* en API klic. Iskanje, ki vrne 20 hotelov za 3 nočitve, je 60 hotelskih nočitev iz enega zahtevka. Klici Content in Lookup (iskanje destinacij in samodokončanje) stanejo po eno enoto vsak, ne glede na rezultat. Klici na račun so brezplačni.

### Vklop

Plačilo glede na uporabo je privzeto izklopljeno. Vsi dobijo brezplačno kvoto brez kakršnih koli ukrepov.

Za prekoračitev kvote **lastnik** računa omogoči plačilo glede na uporabo in izbere, kateri računi so merjeni. Uporaba vseh omogočenih računov se združi v **eno mesečno fakturo**, ki jo lahko poravnate samodejno s kartico ali prejmete kot račun za samostojno plačilo.

Ko je omogočeno, se vaša uporaba meri, a **nikoli ni omejena** — ne boste dosegli omejitve hitrosti zaradi porabe pri nas.

:::note[Če ne omogočite]
Nič se ne pokvari in nič se ne zaračuna. Preprosto ostanete pri brezplačni kvoti za ta mesec: generirane objave se ne bodo objavile, klici Partner API-ja pa bodo vrnili `429`, dokler se kvota ne ponastavi.
:::

### Status obračunavanja

| Status | Pomen |
| -- | -- |
| V dobrem stanju | Vse deluje normalno. |
| Zapadlo | Plačilo ni uspelo in se poskuša znova. Vaše funkcije delujejo v tem času. |
| Začasno onemogočeno | Račun ni bil plačan do konca. Zaračunljive funkcije so blokirane, brezplačne pa delujejo normalno. |

:::tip[Aktualne cene]
Cene na enoto in brezplačne kvote so vedno prikazane v Portalu, neposredno iz našega sistema za obračunavanje, tako da jih lahko preverite pred uporabo. Oglejte si [Obračunavanje](/sl/portal/plan) za omogočanje plačila glede na uporabo, izbiro računov in spremljanje porabe ter računov v tekočem mesecu. Oglejte si [Social](/sl/portal/social/what-is-social) za vpliv obsega objav na vaše stroške.
:::

## Učinek platforme

Nazadnje, ko rastemo tako po velikosti kot po številu rezervacij, želimo z vami deliti nekaj učinkov platforme. Več rezervacij prinaša priložnosti za količinske popuste pri našem procesorju plačil. Ker se stroški obdelave kartic prenašajo po dejanski ceni, vsak prihranek, ki ga dosežemo, neposredno koristi hotelom.

Pridružite se Wink danes in odkrijte nov, donosni način poslovanja v gostinski industriji!
