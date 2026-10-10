---
title: Árazás
description: A Wink nagy része ingyenes. Egy kis díjat fizetsz foglalásonként, valamint használatarányos díjat néhány prémium funkcióért.
sidebar:
  order: 4
---

A Winknek nincs előfizetése, nincs ülőhelydíja és nincs beállítási díja. A platform túlnyomó része ingyenes, és csak két dologért kell fizetned:

1. **Platformdíj foglalásonként, plusz kártyakezelési költség** — csak akkor, amikor foglalás történik.
2. **Használatarányos díjak** — néhány prémium funkcióért, amelyek minden futtatáskor költséget jelentenek számunkra, mindegyikhez havi ingyenes keret tartozik.

## Mi az, ami ingyenes

Ezek semmibe sem kerülnek, örökre, keret és mérés nélkül:

- A **foglalási motor** — a saját oldaladon, a WinkLinks oldaladon vagy bárhol máshol, ahol beágyazod.
- **Ingatlankezelés** — tartalom, fotók, árak, ártervek, elérhetőség, promóciók és szabályzatok.
- **Partneri eszközök** — megosztható linkek, válogatott listák, rácsok, térképek, kártyák és beágyazható widgetek.
- **Utazási ügynöki eszközök** — keresés, egyedi árak és foglalás az ügyfeleid nevében.
- **WinkLinks** — igényeld a saját egyedi URL-címed, építsd meg az oldalad, és publikálj rá annyiszor, ahányszor csak szeretnéd.
- **Kézi közösségi posztok** — bármi, amit magad írsz bármely csatlakoztatott hálózaton.
- **Elemzések, ranglisták, igénylések, beállítások** és fiókkezelés.
- A **Fogyasztói és Foglalási Motor API-k**, beleértve a keresési és automatikus kiegészítési végpontokat. A **Partner API** esetén a Keresési és Tartalmi hívások egy-egy egységnek számítanak (lásd [Használat](#what-is-and-isnt-metered) alább).

## Foglalások

A Wink két modellt támogat: a Wink gyűjti be a szálloda részére a fizetést, vagy egy engedéllyel rendelkező utazási ügynök jár el kereskedőként.

### 1. modell — Wink gyűjti be a szálloda részére

A Wink a vendég fizetését a szálloda korlátozott fizetéskezelő ügynökeként gyűjti be. A szálloda a kereskedő, és a szálloda neve jelenik meg a vendég kártyakivonatán.
Ez a modell az összes foglalás 95%-ára vonatkozik.

#### Részletezés

:::note[Platformdíj]
A Wink 1,5%-os platformdíjat számít fel foglalásonként. Ez fedezi a platform karbantartását, és lehetővé teszi, hogy mindent ingyen adjunk, amit fent felsoroltunk. Lemondott foglalás esetén nem számítjuk fel.
:::

:::note[Kártyakezelés]
A vendég fizetésének feldolgozási díját a szállodának továbbítjuk költségen, haszon nélkül. Ez a vendég kártyájától és fizetési módjától függ, és a pontos összeg minden foglalás Számlázás részében megjelenik. Lemondás vagy visszatérítés esetén a feldolgozó által megtartott díjat továbbra is felszámítjuk; ha nem számítanak fel díjat, mi sem.
:::

:::note[Összegkifizetés]
Díjak merülnek fel a pénz számládra történő átutalásakor. Ez az általad választott kifizetési módtól függ. Jelenleg a következőket támogatjuk:

- **Banki átutalás** — A költség az országodtól, a pénz forrásától és az esetleges árfolyamkonverziótól függ. A kifizetési díjat és az esetleges konverziós költséget a kedvezményezett fizeti, költségen. Tartalmazunk egy árajánlat-kalkulátort, amit használhatsz, ha van elérhető egyenleged a számládon.

Ha más kifizetési módot szeretnél, írj nekünk e-mailt.
:::

### 2. modell — Utazási ügynök kereskedőként

Ez a modell csak olyan utazási irodáknak érhető el, amelyek rendelkeznek utazási iroda engedéllyel a régiójukban, és kereskedőként kívánnak eljárni. Csak API partnerek számára érhető el, a [Partner API](/hu/integrations/partner-api/) használatával, és Wink előzetes írásbeli jóváhagyását igényli. Néhány regisztrált utazási iroda szeretné kezelni a fizetést és a szállodáknak történő kifizetést. Ebben a modellben ők felelnek a pénzért, és rendelkeznek a szükséges engedélyekkel az országukban.

#### Részletezés

:::note[Platformdíj]
A Wink 1,5%-os platformdíjat számít fel foglalásonként. Ez fedezi a platform karbantartását, és lehetővé teszi, hogy mindent ingyen adjunk, amit fent felsoroltunk.
:::

Ebben a modellben az utazási irodák fizetik a Wink 1,5%-os díját, plusz a Partner API használatot a havi ingyenes keret felett, amelyet havonta számlázunk.

## Amit a partnerek fizetnek

Azoknak a partnereknek, akik foglalásokat küldenek: alkotók, partnerek, platformok, fejlesztők és utazási irodák. A partnerségek nem kizárólagosak, területi korlátozás nélkül.

| | Fizetés gyűjtése a szálloda részére (a legtöbb partner) | Te vagy a kereskedő (csak API partnerek) |
|---|---|---|
| Engedély vagy területi díj | Nincs | Nincs |
| Beállítási díj | Nincs | Nincs |
| Előfizetés vagy havi díj | Nincs | Nincs |
| Minimális kötelezettség vagy időtartam | Nincs | Nincs. Hitelkeret érvényes. |
| Partner API hozzáférés | Havonta 10,000 szállodai éjszaka ingyen, utána 0,0001 USD szállodai éjszakánként. A használatarányos díj alapértelmezés szerint ki van kapcsolva; az ingyenes keret elérésekor a hívások `429`-et adnak vissza. | Ugyanez |
| Tranzakciós díj | Nincs. Jutalékot keresel (alapértelmezett 10%). | 1,5% foglalási díj a foglalás értékére, havonta USD-ben számlázva, 15 napon belül fizetendő. Használatarányos díj bekapcsolása esetén a Partner API használat külön havi számlán jelenik meg. |
| Támogatási díj | Nincs | Nincs |
| Egyéb díjak | Kifizetési átutalási díjak, költségen | Lehetséges előleg vagy letét jóváhagyáskor. Csak késedelmes számlákra 1,5% havi kamat. |
| Díjváltozás esetén | 30 napos értesítés; csak a változás utáni foglalásokra vonatkozik | Ugyanez. A Wink értesítés mellett módosíthatja a hitelkeretedet is. |

A kereskedői út Wink előzetes írásbeli jóváhagyását igényli. Lásd [2. modell](#model-2--travel-agent-as-merchant-of-record) fent és a [Partner API](/hu/integrations/partner-api/) oldalt.

## Használat (pay-as-you-go)

Néhány funkció minden egyes futtatáskor költséget jelent számunkra — generatív AI, harmadik fél közösségi API-k és élő árak nagy léptékű kiszolgálása. Ahelyett, hogy ezeket havi csomagba foglalnánk, amelyet esetleg nem használsz, csak azért fizetsz, amit ténylegesen fogyasztasz, és csak miután elfogyott a havi ingyenes kereted.

| Funkció | Havi ingyenes | Utána | Számlázott egység |
| -- | -- | -- | -- |
| Közösségi poszt — kép | 1 | 1,50 USD | Egy közzétett poszt |
| Közösségi poszt — AI által generált kép | 0 | 2,50 USD | Egy közzétett poszt |
| Közösségi poszt — AI által javított videó | 0 | 4,00 USD | Egy közzétett poszt |
| Közösségi poszt — AI által generált videó | 0 | 14,00 USD | Egy közzétett poszt |
| AI válasz egy kommentre vagy üzenetre | 5 | 0,05 USD | Egy válasz |
| Chatbot válasz | 5 | 0,05 USD | Egy válasz |
| Partner API | 10,000 | 0,0001 USD | Egy szállodai éjszaka |

Az árak USD-ben értendők. Az ingyenes keret **fiókonként** jár, nem felhasználónként, és minden hónap 1-jén (UTC) újraindul.

### Hogyan árazódnak a posztok

A posztokat az alapján árazzuk, mi van bennük, mert ez a költségünk az elkészítésükre. Egy állókép olcsó; egy videó nem; bármi, amit AI-val generálunk, lényegesen többe kerül, mint egy általad feltöltött fotó.

- **Az ingyenes keret csak a szabványos képes posztokra vonatkozik.** Fiókonként havonta egy ilyen jár. A videós posztok és AI által generált média az első poszttól kezdve fizetős — ezekre nincs ingyenes keret, így egy ingatlan, amely videót posztol, az első hónapban díjra számíthat.
- **A videó a domináns.** Ha egy poszt bármilyen videót tartalmaz, az egész poszt a videós díjon kerül számlázásra. Egy poszt, amely képet és videót is tartalmaz, videós posztnak számít.
- **Az AI eredet határozza meg a díjszintet.** A te általad szolgáltatott média — saját fotók és videók, vagy bármi a Wink tartalomkönyvtárából — a szabványos díjon számlázódik. Az általunk generált média az AI díjszinten kerül számlázásra.

### Mi az, ami mérve van és mi nem

- Csak a **generált** poszt, amely harmadik fél hálózatára (Facebook, Instagram) kerül közzétételre, számlázható. A saját magad által írt poszt ingyenes, bárhová is kerül.
- **A WinkLinks-re történő közzététel mindig ingyenes**, generált vagy nem generált.
- A számlázás **a közzétételkor történik**, nem próbálkozásonként. Egy vázlat újragenerálása, amíg elégedett nem vagy vele, nem növeli a számládat — egyszer fizetsz a ténylegesen elküldött posztért. A próbálkozások nem korlátlanok: egy poszthoz körülbelül 10 újragenerálás engedélyezett képeknél és 3 videóknál, ami tükrözi az előállítás költségét. Láthatod, mennyi maradt, miközben dolgozol.
- A Partner API esetén egy **szállodai éjszaka** egy szálloda egy éjszakára árazott tartózkodása — *nem* egy API hívás. Egy keresés, amely 20 szállodát ad vissza 3 éjszakára, 60 szállodai éjszaka egyetlen kérésből. A Tartalom és Keresés (úticél keresés és automatikus kiegészítés) hívások egy-egy egységbe kerülnek, bármit is adnak vissza. A fiók végpontok ingyenesek.

### Bekapcsolás

A használatarányos díj alapértelmezés szerint ki van kapcsolva. Mindenki megkapja az ingyenes keretet automatikusan.

A keret túllépéséhez a **fiók tulajdonosa** engedélyezi a használatarányos díjat, és kiválasztja, mely fiókok legyenek mérve. Az összes engedélyezett fiókod használata egyetlen havi számlába kerül, amelyet automatikusan kártyával rendezhetsz, vagy számlaként megkapsz, és magad fizeted be.

Bekapcsolás után a használat mérve van, de **soha nem korlátozott** — nem éred el a költési limitet nálunk.

:::note[Ha nem engedélyezed]
Semmi nem törik el, és semmiért nem számítunk fel díjat. Egyszerűen megállsz az adott hónap ingyenes kereténél: a generált posztok nem jelennek meg, és a Partner API hívások `429`-et adnak vissza, amíg a keret újra nem indul.
:::

### Számlázási állapot

| Állapot | Jelentése |
| -- | -- |
| Jó állapot | Minden normálisan működik. |
| Fizetési késedelem | Egy fizetés sikertelen volt, és újrapróbálkozás alatt áll. A funkciók ebben az időszakban tovább működnek. |
| Felfüggesztve | Egy számla véglegesen kifizetetlen maradt. A számlázható műveletek blokkolva vannak, amíg rendezve nem lesz; az ingyenes funkciók tovább működnek. |

:::tip[Élő árak]
Az egységárak és az ingyenes keretek mindig a Portálon jelennek meg, közvetlenül a számlázási rendszerünkből, így ellenőrizheted őket, mielőtt elköteleznéd magad. Lásd a [Számlázás](/hu/portal/plan) oldalt a használatarányos díj engedélyezéséhez, fiókok kiválasztásához, valamint a havi használat és számlák nyomon követéséhez. Lásd a [Közösségi](/hu/portal/social/what-is-social) oldalt, hogy a posztok mennyisége hogyan befolyásolja a költést.
:::

## A platform hatása

Végül, ahogy tovább növekszünk méretben és foglalásokban, szeretnénk megosztani veled a platform hatásait. Több foglalás nagyobb volumenű kedvezményeket hoz a fizetésfeldolgozónktól. Mivel a kártyakezelés költségen megy át, bármilyen megtakarítás közvetlenül a szállodákhoz kerül.

Csatlakozz ma a Winkhez, és fedezz fel egy új, jövedelmező módot az üzletvitelre a vendéglátóiparban!
