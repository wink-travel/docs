---
title: Verðlagning
description: Flest af Wink er ókeypis. Þú greiðir lítinn gjald fyrir hverja bókun og notkunargjald eftir þörfum fyrir nokkrar úrvals eiginleika.
sidebar:
  order: 4
---

Wink hefur engar áskriftir, engin sæti og engin uppsetningargjöld. Langstærstur hluti vettvangsins er ókeypis, og það eru aðeins tvö atriði sem þú greiðir fyrir:

1. **Vettvangsgjald fyrir hverja bókun, auk kortavinnslugjalds á kostnaðarverði** — aðeins þegar bókun er gerð.
2. **Notkunargjöld eftir þörfum** — á nokkrum úrvals eiginleikum sem kosta okkur peninga í hvert sinn sem þeir eru keyrðir, hver með ókeypis mánaðarlega kvóta.

## Hvað er ókeypis

Þetta kostar ekkert, að eilífu, án kvóta og án mælinga:

- **Bókunarvélina** — á þínum eigin vef, í WinkLinks síðunni þinni eða hvar sem þú innbyggir hana.
- **Eignastjórnun** — efni, myndir, verð, verðáætlanir, framboð, kynningar og reglur.
- **Tengdatól** — deilanlegir tenglar, valdar listar, grindur, kort, spil og innbyggjanlegir búnaður.
- **Ferðaskrifstofutól** — leit, sérsniðin verð og bókun fyrir hönd viðskiptavina þinna.
- **WinkLinks** — krefstu þíns eigin sérsniðna slóðar, byggðu síðuna þína og birttu eins oft og þú vilt.
- **Handvirk samfélagsmiðlapóstun** — allt sem þú skrifar sjálfur, á hvaða tengdu neti sem er.
- **Greiningar, stigatöflur, kröfur, stillingar** og reikningsstjórnun.
- **Consumer og Booking Engine API-in**, þar með talin leit og sjálfvirk útfylling. Á **Partner API** eru Lookup og Content köll mæld sem ein eining hvor (sjá [Notkun](#what-is-and-isnt-metered) hér að neðan).

## Bókanir

Wink styður tvö módel: Wink innheimtir greiðslu fyrir hótelið, og löggiltur ferðaskrifstofumaður sem er kaupmaður bókunarinnar.

### Módel 1 — Wink innheimtir fyrir hótelið

Wink innheimtir greiðslu gesta sem takmarkaður innheimtuaðili hótelsins. Hótelið er kaupmaður bókunarinnar og nafn hótelsins birtist á yfirliti korta gesta.
Þetta módel á við um 95% allra bókana.

#### Sundurliðun

:::note[Vettvangsgjald]
Wink rukkar 1,5% vettvangsgjald fyrir hverja bókun. Þetta nær yfir viðhald vettvangsins og gerir okkur kleift að bjóða allt sem nefnt er hér að ofan ókeypis. Það er ekki rukkað fyrir fellda bókun.
:::

:::note[Kortavinnsla]
Gjald fyrir greiðsluvinnslu sem rukkað er til að innheimta greiðslu gesta er sent áfram til hótelsins á kostnaðarverði, án álags. Það fer eftir korti og greiðslumáta gesta, og nákvæm upphæð birtist í bókhaldsdeild hverrar bókunar. Ef bókun er felld niður eða endurgreidd, er gjald sem vinnsluaðili heldur eftir samt rukkað; ef ekkert er rukkað, rukkum við heldur ekkert.
:::

:::note[Úttektarfjármunir]
Það eru gjöld tengd við að senda fé á reikninginn þinn. Þetta fer eftir úttektaraðferð sem þú velur. Við styðjum núna:

- **Bankaflutning** — Kostnaður fer eftir landi þar sem þú ert staðsettur, hvaðan féð er sent og hvaða gjaldeyrisbreytingar eru gerðar á leiðinni. Úttektargjald og gjaldeyriskostnaður eru greidd af viðtakanda, á kostnaðarverði. Við bjóðum upp á tilvitnunarreiknivél sem þú getur notað þegar þú hefur laust fé á reikningnum þínum.

Ef þú vilt að við styðjum aðra úttektaraðferð, sendu okkur tölvupóst.
:::

### Módel 2 — Ferðaskrifstofumaður sem kaupmaður bókunarinnar

Þetta módel er aðeins í boði fyrir ferðaskrifstofur sem hafa ferðaskrifstofuleyfi í sínu svæði og vilja vera kaupmaður bókunarinnar. Það er aðeins í boði fyrir API samstarfsaðila, bókanir í gegnum [Partner API](/is/integrations/partner-api/), og þarf skriflegt samþykki frá Wink. Sumir af skráðum ferðaskrifstofum okkar vilja bera ábyrgð á greiðslu og úthlutun fjármuna til hótela. Undir þessu móti bera þeir ábyrgð á fjármálum og hafa nauðsynleg leyfi til að starfa í sínu landi.

#### Sundurliðun

:::note[Vettvangsgjald]
Wink rukkar 1,5% vettvangsgjald fyrir hverja bókun. Þetta nær yfir viðhald vettvangsins og gerir okkur kleift að bjóða allt sem nefnt er hér að ofan ókeypis.
:::

Með þessu móti greiða ferðaskrifstofur 1,5% gjald til Wink auk notkunargjalda Partner API umfram ókeypis kvóta, reiknað mánaðarlega.

## Hvað samstarfsaðilar greiða

Fyrir samstarfsaðila sem senda inn bókanir: skapendur, tengdir aðilar, vettvangar, forritarar og ferðaskrifstofur. Samstarf er ekki einkarétt, engin landamæri.

| | Greiðsla innheimt fyrir hótelið (flestir samstarfsaðilar) | Þú ert kaupmaður bókunarinnar (aðeins API samstarfsaðilar) |
|---|---|---|
| Leyfis- eða svæðisgjald | Ekkert | Ekkert |
| Uppsetningargjald | Ekkert | Ekkert |
| Áskriftar- eða mánaðargjald | Ekkert | Ekkert |
| Lágmarks skuldbinding eða tímabil | Ekkert | Ekkert. Kreditmörk gilda. |
| Aðgangur að Partner API | 10.000 hótelnætur á mánuði ókeypis, svo $0,0001 á hótelnótt. Pay-as-you-go er af sjálfu sér af; við ókeypis kvóta skilar köll `429`. | Sama |
| Viðskiptagjald | Ekkert. Þú færð þóknun (10% sjálfgefið). | 1,5% bókunargjald af bókunargildi, reiknað mánaðarlega í USD, gjaldfært innan 15 daga. Með pay-as-you-go virkt kemur notkun Partner API á annan mánaðarreikning. |
| Stuðningsgjald | Ekkert | Ekkert |
| Önnur gjöld | Úttektargjöld, á kostnaðarverði | Möguleg fyrirframgreiðsla eða innborgun við samþykki. Vextir 1,5% á mánuði á vanskilareikninga eingöngu. |
| Þegar gjöld breytast | 30 daga fyrirvara; gildir aðeins fyrir bókanir eftir breytingu | Sama. Wink getur einnig breytt kreditmörkum með fyrirvara. |

Kaupmaður bókunarinnar leiðin þarf skriflegt samþykki frá Wink. Sjá [Módel 2](#model-2--travel-agent-as-merchant-of-record) hér að ofan og [Partner API](/is/integrations/partner-api/) síðu.

## Notkun (pay-as-you-go)

Nokkrir eiginleikar kosta okkur peninga í hvert sinn sem þeir eru keyrðir — gervigreind, þriðja aðila samfélagsmiðla API, og að birta lifandi verð á stórum skala. Í stað þess að bjóða þetta í mánaðarpakka sem þú gætir ekki notað, greiðir þú aðeins fyrir það sem þú raunverulega notar, og aðeins eftir að þú hefur notað upp ókeypis mánaðarlegan kvóta.

| Eiginleiki | Ókeypis á mánuði | Síðan | Reiknað eining |
| -- | -- | -- | -- |
| Samfélagsmiðlapóstur — mynd | 1 | $1,50 | Einn birtur póstur |
| Samfélagsmiðlapóstur — AI-búin mynd | 0 | $2,50 | Einn birtur póstur |
| Samfélagsmiðlapóstur — AI-bætt myndband | 0 | $4,00 | Einn birtur póstur |
| Samfélagsmiðlapóstur — AI-búið myndband | 0 | $14,00 | Einn birtur póstur |
| AI svar við athugasemd eða skilaboðum | 5 | $0,05 | Eitt svar |
| Spjallmenni svar | 5 | $0,05 | Eitt svar |
| Partner API | 10.000 | $0,0001 | Ein hótelnótt |

Verð eru í USD. Ókeypis kvótinn er veittur **á reikning**, ekki á notanda, og endurstillist 1. hvers mánaðar (UTC).

### Hvernig póstur er verðlagður

Póstar eru verðlagðir eftir innihaldi þeirra, því það kostar okkur að búa þá til. Kyrrmynd er ódýr; myndband ekki; allt sem við búum til með AI kostar verulega meira en mynd sem þú hefur sjálfur lagt til.

- **Ókeypis kvótinn nær aðeins til venjulegra myndapósta.** Þú færð einn slíkan á reikning á mánuði. Myndbands- og AI-búnir miðlar eru reiknaðir frá fyrsta pósti — enginn ókeypis kvóti er á þeim stigum, svo eign sem birtir myndband ætti að búast við gjaldi fyrsta mánuðinn.
- **Myndband ræður.** Ef póstur inniheldur nokkurt myndband, er allur pósturinn reiknaður á myndbandsverði. Póstur sem blandar mynd og myndbandi er myndbandspóstur.
- **AI uppruni ákvarðar stigið.** Miðlar sem þú leggur til — þínar eigin myndir og myndbönd, eða hvað sem er úr Wink efnisbókasafninu — eru reiknuð á venjulegu verði. Miðlar sem við búum til fyrir þig eru reiknaðir á AI verði.

### Hvað er og er ekki mælt

- Aðeins **búinn til** póstur sem birtist á þriðja aðila neti (Facebook, Instagram) er reiknaður. Póstur sem þú skrifar sjálfur er ókeypis, hvar sem hann fer.
- **Birting á WinkLinks er alltaf ókeypis**, hvort sem pósturinn er búinn til eða ekki.
- Þú ert rukkaður **við birtingu**, ekki fyrir tilraun. Að endurgera drög þar til þú ert ánægður bætir ekki við reikninginn — þú greiðir einu sinni fyrir þann póst sem þú birtir. Tilraunir eru þó takmarkaðar: hver póstur leyfir um 10 endurgerðir fyrir myndir og 3 fyrir myndbönd, sem endurspeglar kostnað okkar við að framleiða þá. Þú sérð hversu margar þú átt eftir á meðan þú vinnur.
- Á Partner API er **hótelnótt** ein hótelnótt fyrir eina nótt dvalar — *ekki* eitt API kall. Leit sem skilar 20 hótelum fyrir 3 nætur er 60 hótelnætur úr einni beiðni. Content og Lookup (áfangastaðarleit og sjálfvirk útfylling) köll kosta eina einingu hvort sem þau skila einhverju eða ekki. Reikningsendapunktar eru ókeypis.

### Að virkja

Pay-as-you-go er af sjálfu sér óvirkt. Allir fá ókeypis kvótann án þess að gera neitt.

Til að fara yfir kvótann virkjar **eigandi** reikningsins pay-as-you-go og velur hvaða reikningar eru mældir. Notkun allra virkra reikninga safnast saman í **einn mánaðarreikning**, sem þú getur greitt sjálfkrafa með korti eða fengið sem reikning til að greiða sjálfur.

Þegar virkjað er, er notkun mæld en **aldrei takmörkuð** — þú munt ekki lenda í takmörkun á hraða vegna þess að þú eyðir peningum hjá okkur.

:::note[Ef þú virkjar það ekki]
Ekkert brotnar og ekkert er rukkað. Þú hættir einfaldlega við ókeypis kvótann fyrir þann mánuð: búin til póstur birtist ekki og Partner API köll skila `429` þar til kvótinn endurstillist.
:::

### Staða reiknings

| Staða | Hvað það þýðir |
| -- | -- |
| Í góðu standi | Allt virkar eðlilega. |
| Vanskil | Greiðsla mistókst og er í endurtilraun. Þínir eiginleikar halda áfram að virka á meðan. |
| Stöðvuð | Reikningur var ekki greiddur til enda. Reiknanlegar aðgerðir eru lokaðar þar til hann er greiddur; ókeypis eiginleikar halda áfram eðlilega. |

:::tip[Lifandi verð]
Einingaverð og ókeypis kvótar eru alltaf sýndir í Portal, beint úr reikningskerfi okkar, svo þú getur skoðað þau áður en þú skuldbindur þig. Sjá [Billing](/is/portal/plan) til að virkja pay-as-you-go, velja reikninga og fylgjast með notkun og reikningum mánaðarins. Sjá [Social](/is/portal/social/what-is-social) um hvernig póstmagn hefur áhrif á útgjöld.
:::

## Áhrif vettvangsins

Að lokum, þegar við vöxum bæði í stærð og bókunum, viljum við geta deilt nokkrum áhrifum vettvangsins með þér. Fleiri bókanir skapa tækifæri til magnaðra afslátta frá greiðsluvinnsluaðila okkar. Þar sem kortavinnsla er send áfram á kostnaðarverði, fara allar sparnaðarupphæðir beint til hótela.

Vertu með í Wink í dag og uppgötvaðu nýjan, arðbæran hátt að stunda viðskipti í gistigeiranum!
