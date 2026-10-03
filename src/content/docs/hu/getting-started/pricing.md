---
title: Árazás
description: A Wink nagy része ingyenes. Egy kis díjat fizetsz foglalásonként, valamint használatarányos díjat néhány prémium funkció esetén.
sidebar:
  order: 4
---

A Winknek nincs előfizetése, nincs ülőhelydíja és nincs beállítási díja. A platform túlnyomó része ingyenes, és csak két dologért kell fizetned:

1. **Platformdíj foglalásonként, plusz kártyakezelési költség** — csak akkor, amikor foglalás történik.
2. **Használatarányos díjak** — néhány prémium funkció esetén, amelyek minden futtatáskor költséget jelentenek számunkra, mindegyikhez havi ingyenes keret tartozik.

## Mi az, ami ingyenes

Ezek semmibe sem kerülnek, örökre, keret és mérés nélkül:

- A **foglalási motor** — a saját oldaladon, a WinkLinks oldaladon vagy bárhol máshol, ahol beágyazod.
- **Ingatlankezelés** — tartalom, fotók, árak, ártervek, elérhetőség, promóciók és szabályzatok.
- **Partneri eszközök** — megosztható linkek, válogatott listák, rácsok, térképek, kártyák és beágyazható widgetek.
- **Utazási ügynöki eszközök** — keresés, egyedi árak és foglalás az ügyfeleid nevében.
- **WinkLinks** — igényeld a saját egyedi URL-címed, építsd meg az oldalad, és publikálj rá annyiszor, ahányszor csak szeretnéd.
- **Kézi közösségi posztok** — bármi, amit magad írsz bármely csatlakoztatott hálózaton.
- **Elemzések, ranglisták, igénylések, beállítások** és fiókkezelés.
- A **Fogyasztói és Foglalási Motor API-k**, valamint keresési és automatikus kiegészítési végpontok.

## Foglalások

A Wink két modellt támogat: a Wink gyűjti be a szálloda részére a fizetést, vagy egy engedéllyel rendelkező utazási ügynök jár el kereskedőként.

### 1. modell — Wink gyűjti be a szálloda részére

A Wink a vendég fizetését a szálloda korlátozott fizetéskezelő ügynökeként gyűjti be. A szálloda a kereskedő, és a szálloda neve jelenik meg a vendég kártyakivonatán.
Ez a modell az összes foglalás 95%-ára vonatkozik.

#### Részletezés

:::note[Platformdíj]
A Wink 1,5%-os platformdíjat számít fel foglalásonként. Ez fedezi a platform karbantartását, és lehetővé teszi, hogy mindent ingyenesen adjunk a fentiekből. Lemondott foglalás esetén nem számítjuk fel.
:::

:::note[Kártyakezelés]
A vendég fizetésének feldolgozási díja költségen továbbítódik a szállodának, haszon nélkül. Ez a vendég kártyájától és fizetési módjától függ, és a pontos összeg megjelenik minden foglalás Számlázás részében. Lemondás vagy visszatérítés esetén a feldolgozó által megtartott díj továbbra is felszámításra kerül; ha nem számítanak fel díjat, mi sem.
:::

:::note[Összegkifizetés]
Díjak kapcsolódnak a pénz számládra történő átutalásához. Ez az általad választott kifizetési módtól függ. Jelenleg a következőket támogatjuk:

- **Banki átutalás** — A költség az országodtól, a pénz forrásától és az esetleges árfolyamkonverziótól függ. A kifizetési díjat és az esetleges konverziós költséget a kedvezményezett fizeti, költségen. Tartalmazunk egy árajánlat-kalkulátort, amit használhatsz, ha van elérhető egyenleged a számládon.

Ha más kifizetési módot szeretnél, írj nekünk e-mailt.
:::

### 2. modell — Utazási ügynök kereskedőként

Ez a modell csak azoknak az utazási irodáknak érhető el, akik rendelkeznek utazási iroda engedéllyel a régiójukban, és kereskedőként kívánnak eljárni. Néhány regisztrált utazási ügynök szeretné kezelni a fizetést és a szállodáknak történő kifizetést. Ebben a modellben ők felelősek a pénzért, és rendelkeznek a szükséges engedélyekkel az országukban.

#### Részletezés

:::note[Platformdíj]
A Wink 1,5%-os platformdíjat számít fel foglalásonként. Ez fedezi a platform karbantartását, és lehetővé teszi, hogy mindent ingyenesen adjunk a fentiekből.
:::

Ebben a modellben az utazási ügynökök csak a Wink platformdíját fizetik, és a Wink havonta számlázza az ügynököt.

## Használat (pay-as-you-go)

Néhány funkció minden egyes futtatáskor költséget jelent számunkra — generatív AI, harmadik fél közösségi API-k és élő árak szolgáltatása nagy volumenben. Ahelyett, hogy ezeket egy havi csomagba csomagolnánk, amit esetleg nem használsz, csak azért fizetsz, amit ténylegesen fogyasztasz, és csak miután elfogyott az ingyenes havi kereted.

| Funkció | Ingyenes havonta | Ezután | Számlázott egység |
| -- | -- | -- | -- |
| Közösségi poszt — kép | 1 | $1.50 | Egy publikált poszt |
| Közösségi poszt — AI által generált kép | 0 | $2.50 | Egy publikált poszt |
| Közösségi poszt — AI által javított videó | 0 | $4.00 | Egy publikált poszt |
| Közösségi poszt — AI által generált videó | 0 | $14.00 | Egy publikált poszt |
| AI válasz egy kommentre vagy DM-re | 5 | $0.05 | Egy válasz |
| Chatbot válasz | 5 | $0.05 | Egy válasz |
| Partner API | 10,000 | $0.0001 | Egy szállodai éjszaka |

Az árak USD-ben értendők. Az ingyenes keret **fiókonként** jár, nem felhasználónként, és minden hónap 1-jén (UTC) újraindul.

### Hogyan árazódnak a posztok

A posztokat az alapján árazzuk, mi van bennük, mert ez az, ami nekünk költséget jelent. Egy állókép olcsó; egy videó nem; bármi, amit AI-val generálunk, lényegesen többe kerül, mint egy általad feltöltött fotó.

- **Az ingyenes keret csak a standard képes posztokra vonatkozik.** Fiókonként havonta egy ilyen jár. A videós posztok és az AI által generált média az első poszttól kezdve fizetős — ezekre nincs ingyenes keret, így egy ingatlan, amely videót posztol, az első hónapban díjra számíthat.
- **A videó nyer.** Ha egy poszt bármilyen videót tartalmaz, az egész poszt a videós díjszabás szerint kerül számlázásra. Egy poszt, amely képet és videót is tartalmaz, videós posztnak számít.
- **Az AI eredet határozza meg a díjszintet.** A te általad szolgáltatott média — saját fotók és videók, vagy bármi a Wink tartalomkönyvtárából — a standard díjszabás szerint kerül számlázásra. Az általunk generált média az AI díjszabás szerint.

### Mi mérhető és mi nem

- Csak egy **generált** poszt, amely harmadik fél hálózatán (Facebook, Instagram) jelenik meg, számlázható. Egy általad írt poszt ingyenes, bárhová is kerül.
- **A WinkLinks-re történő publikálás mindig ingyenes**, generált vagy nem generált.
- A számlázás **publikáláskor történik**, nem próbálkozásonként. Egy vázlat újragenerálása, amíg elégedett nem vagy, nem növeli a számládat — egyszer fizetsz a ténylegesen elküldött posztért. A próbálkozások nem korlátlanok: egy poszthoz kb. 10 kép- és 3 videó újragenerálás engedélyezett, ami tükrözi a gyártási költségeinket. Láthatod, mennyi maradt, miközben dolgozol.
- A Partner API esetén egy **szállodai éjszaka** egy szálloda egy éjszakára árazott ára — *nem* egy API hívás. Egy keresés, amely 20 szállodát ad vissza 3 éjszakára, 60 szállodai éjszaka egyetlen kérésből. A Tartalom és Keresés (úticél keresés és automatikus kiegészítés) hívások egy-egy egységbe kerülnek, bármit is adnak vissza. A fiók végpontok ingyenesek.

### Bekapcsolás

A használatarányos díjazás alapértelmezés szerint ki van kapcsolva. Mindenki megkapja az ingyenes keretet anélkül, hogy bármit tenne.

A keret túllépéséhez a **fiók tulajdonosa** engedélyezi a használatarányos díjazást, és kiválasztja, mely fiókjai legyenek mérve. Az összes engedélyezett fiókod használata egy **egyetlen havi számlába** kerül, amelyet automatikusan kártyával rendezhetsz, vagy számlát kapsz, amit magad fizetsz be.

Bekapcsolás után a használat mérve van, de **soha nem korlátozott** — nem éred el a költési limitet nálunk.

:::note[Ha nem engedélyezed]
Semmi nem törik el, és semmiért nem számítunk fel díjat. Egyszerűen megállsz az adott hónap ingyenes kereténél: a generált posztok nem jelennek meg, és a Partner API hívások `429` hibát adnak vissza, amíg a keret újra nem indul.
:::

### Számlázási állapot

| Állapot | Jelentése |
| -- | -- |
| Jó állapot | Minden normálisan működik. |
| Fizetés késedelmes | Egy fizetés sikertelen volt, és újrapróbálkozás alatt áll. A funkciók tovább működnek ebben az időszakban. |
| Felfüggesztve | Egy számla véglegesen kifizetetlen maradt. A fizetős műveletek blokkolva vannak, amíg rendezve nem lesz; az ingyenes funkciók tovább működnek. |

:::tip[Élő árak]
Az egységárak és az ingyenes keretek mindig megjelennek a Portálon, közvetlenül a számlázási rendszerünkből, így ellenőrizheted őket, mielőtt elköteleznéd magad. Lásd a [Számlázás](/hu/portal/plan) részt a használatarányos díjazás engedélyezéséhez, fiókok kiválasztásához és a havi használat, valamint számlák nyomon követéséhez. Lásd a [Közösségi](/hu/portal/social/what-is-social) részt arról, hogyan befolyásolja a posztok mennyisége a költést.
:::

## A platform hatása

Végül, ahogy tovább növekszünk méretben és foglalásokban, szeretnénk megosztani veled a platform hatásait. Több foglalás nagyobb volumenű kedvezményeket hoz a fizetésfeldolgozónktól. Mivel a kártyakezelés költségen megy át, bármilyen megtakarítás közvetlenül a szállodákhoz kerül.

Csatlakozz a Winkhez még ma, és fedezz fel egy új, jövedelmező módot az üzletvitelre a vendéglátóiparban!
