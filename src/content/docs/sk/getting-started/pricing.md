---
title: Cenník
description: Väčšina Wink je zadarmo. Platíte malý poplatok za rezerváciu a poplatok za používanie niektorých prémiových funkcií podľa spotreby.
sidebar:
  order: 4
---

Wink nemá žiadne predplatné, žiadne miesta ani poplatky za nastavenie. Väčšina platformy je zadarmo a existujú len dve veci, za ktoré budete niekedy platiť:

1. **Poplatok za platformu za rezerváciu plus náklady na spracovanie platby kartou** — iba keď sa uskutoční rezervácia.
2. **Poplatky za používanie podľa spotreby** — za niekoľko prémiových funkcií, ktoré nás stoja peniaze pri každom spustení, každá s bezplatným mesačným limitom.

## Čo je zadarmo

Tieto veci nič nestoja, navždy, bez limitu a bez merania:

- **Rezervačný engine** — na vašej vlastnej stránke, na vašej WinkLinks stránke alebo kdekoľvek inde, kde ho vložíte.
- **Správa nehnuteľností** — obsah, fotografie, ceny, cenové plány, dostupnosť, akcie a pravidlá.
- **Affiliate nástroje** — zdieľateľné odkazy, kurátorské zoznamy, mriežky, mapy, karty a vložiteľné widgety.
- **Nástroje pre cestovné kancelárie** — vyhľadávanie, špeciálne ceny a rezervácie v mene vašich klientov.
- **WinkLinks** — zaregistrujte si vlastnú URL adresu, vytvorte si stránku a publikujte na nej koľvek často chcete.
- **Manuálne príspevky na sociálnych sieťach** — čokoľvek, čo sami napíšete, na akejkoľvek prepojenej sieti.
- **Analytika, rebríčky, reklamácie, nastavenia** a správa účtu.
- **API pre spotrebiteľa a rezervačný engine**, vrátane ich vyhľadávacích a automatických dopĺňacích endpointov. Na **Partner API** sú volania Lookup a Content merané po jednej jednotke (viď [Použitie](#čo-sa-meria-a-čo-nie) nižšie).

## Rezervácie

Wink podporuje dva modely: Wink inkasuje platbu za hotel a licencovaná cestovná kancelária pôsobí ako obchodník zodpovedný za platbu.

### Model 1 — Wink inkasuje za hotel

Wink inkasuje platbu hosťa ako obmedzený agent hotela na zber platieb. Hotel je obchodníkom zodpovedným za platbu a na výpise z karty hosťa sa zobrazuje názov hotela.
Tento model platí pre 95 % všetkých rezervácií.

#### Rozpis

:::note[Poplatok za platformu]
Wink účtuje 1,5 % poplatok za platformu za rezerváciu. Tento poplatok pokrýva údržbu platformy a umožňuje nám poskytovať všetko vyššie uvedené zadarmo. Neúčtuje sa pri zrušenej rezervácii.
:::

:::note[Spracovanie platby kartou]
Poplatok za spracovanie platby, ktorý sa účtuje za inkaso platby hosťa, sa prenáša na hotel bez marže, za náklady. Výška poplatku závisí od karty hosťa a spôsobu platby, presná suma je uvedená v účtovníctve každej rezervácie. Ak je rezervácia zrušená alebo vrátená, poplatok, ktorý si spracovateľ ponechá, sa stále účtuje; ak neúčtuje nič, ani my neúčtujeme.
:::

:::note[Vyplácanie prostriedkov]
S vyplácaním prostriedkov na váš účet sú spojené poplatky. Závisí to od spôsobu vyplácania, ktorý si zvolíte. Momentálne podporujeme:

- **Bankový prevod** — Náklady závisia od krajiny, kde sa nachádzate, odkiaľ sa prostriedky posielajú a od prípadnej konverzie meny počas prevodu. Poplatok za výplatu a prípadné náklady na konverziu platí príjemca, za náklady. Súčasťou je kalkulačka odhadov, ktorú môžete použiť, keď máte na účte dostupné prostriedky.

Ak chcete, aby sme podporovali iný spôsob výplaty, pošlite nám e-mail.
:::

### Model 2 — Cestovná kancelária ako obchodník zodpovedný za platbu

Tento model je dostupný iba pre cestovné kancelárie, ktoré majú licenciu na činnosť vo svojej oblasti a chcú byť obchodníkom zodpovedným za platbu. Je dostupný iba pre API partnerov, ktorí rezervujú cez [Partner API](/sk/integrations/partner-api/) a vyžaduje si predchádzajúci písomný súhlas Wink. Niektorí z našich registrovaných cestovných kancelárií chcú byť zodpovední za spracovanie platieb a vyplácanie hotelom. V tomto modeli sú zodpovední za prostriedky a majú potrebné licencie na prevádzku vo svojej krajine.

#### Rozpis

:::note[Poplatok za platformu]
Wink účtuje 1,5 % poplatok za platformu za rezerváciu. Tento poplatok pokrýva údržbu platformy a umožňuje nám poskytovať všetko vyššie uvedené zadarmo.
:::

V tomto modeli cestovné kancelárie platia Wink poplatok 1,5 % plus akékoľvek použitie Partner API nad bezplatný limit, fakturované mesačne.

## Čo platia partneri

Pre partnerov, ktorí posielajú rezervácie: tvorcovia, affiliate, platformy, vývojári a cestovné kancelárie. Partnerstvá sú neexkluzívne, bez územných obmedzení.

| | Platba inkasovaná pre hotel (väčšina partnerov) | Vy ste obchodník zodpovedný za platbu (len API partneri) |
|---|---|---|
| Licenčný alebo územný poplatok | Žiadny | Žiadny |
| Poplatok za nastavenie | Žiadny | Žiadny |
| Predplatné alebo mesačný poplatok | Žiadny | Žiadny |
| Minimálne záväzky alebo doba viazanosti | Žiadne | Žiadne. Platí kreditný limit. |
| Prístup k Partner API | 10 000 hotelových nocí mesačne zadarmo, potom 0,0001 $ za hotelovú noc. Pay-as-you-go je predvolene vypnuté; pri prekročení limitu volania vracajú `429`. | Rovnaké |
| Transakčný poplatok | Žiadny. Zarábate províziu (predvolene 10 %). | 1,5 % poplatok za rezerváciu z hodnoty rezervácie, fakturovaný mesačne v USD, splatný do 15 dní. Pri zapnutom pay-as-you-go sa používanie Partner API fakturuje na druhej mesačnej faktúre. |
| Poplatok za podporu | Žiadny | Žiadny |
| Iné poplatky | Poplatky za prevod výplat, za náklady | Možná platba vopred alebo záloha pri schválení. Úrok 1,5 % mesačne len na oneskorené faktúry. |
| Kedy sa poplatky menia | 30-dňové oznámenie; platí len pre rezervácie po zmene | Rovnaké. Wink môže tiež meniť váš kreditný limit s oznámením. |

Trasa obchodníka zodpovedného za platbu vyžaduje predchádzajúci písomný súhlas Wink. Viď [Model 2](#model-2--cestovná-kancelária-ako-obchodník-zodpovedný-za-platbu) vyššie a stránku [Partner API](/sk/integrations/partner-api/).

## Použitie (pay-as-you-go)

Niektoré funkcie nás stoja peniaze pri každom spustení — generatívna AI, API tretích strán pre sociálne siete a poskytovanie živých cien vo veľkom rozsahu. Namiesto toho, aby sme ich zahrnuli do mesačného plánu, ktorý možno nevyužijete, platíte len za to, čo skutočne spotrebujete, a to až po vyčerpaní bezplatného mesačného limitu.

| Funkcia | Zadarmo mesačne | Potom | Fakturovaná jednotka |
| -- | -- | -- | -- |
| Príspevok na sociálnu sieť — obrázok | 1 | 1,50 $ | Jeden publikovaný príspevok |
| Príspevok na sociálnu sieť — AI generovaný obrázok | 0 | 2,50 $ | Jeden publikovaný príspevok |
| Príspevok na sociálnu sieť — AI vylepšené video | 0 | 4,00 $ | Jeden publikovaný príspevok |
| Príspevok na sociálnu sieť — AI generované video | 0 | 14,00 $ | Jeden publikovaný príspevok |
| AI odpoveď na komentár alebo DM | 5 | 0,05 $ | Jedna odpoveď |
| Odpoveď chatbota | 5 | 0,05 $ | Jedna odpoveď |
| Partner API | 10 000 | 0,0001 $ | Jedna hotelová noc |

Ceny sú v USD. Bezplatný limit sa udeľuje **na účet**, nie na používateľa, a resetuje sa vždy 1. v mesiaci (UTC).

### Ako sa príspevky účtujú

Príspevky sa účtujú podľa toho, čo obsahujú, pretože to nás stojí ich vytvorenie. Statický obrázok je lacný; video nie; čokoľvek, čo generujeme pomocou AI, stojí podstatne viac ako fotografia, ktorú ste dodali sami.

- **Bezplatný limit pokrýva iba štandardné obrázkové príspevky.** Na účet dostanete jeden takýto príspevok mesačne. Video príspevky a AI generované médiá sa účtujú od prvého príspevku — na týchto úrovniach nie je žiadny bezplatný limit, takže nehnuteľnosť, ktorá zverejňuje video, by mala očakávať poplatok už v prvom mesiaci.
- **Video má prednosť.** Ak príspevok obsahuje akékoľvek video, celý príspevok sa účtuje podľa video sadzby. Príspevok kombinujúci obrázok a video je video príspevok.
- **Pôvod AI určuje sadzbu.** Médiá, ktoré dodáte vy — vlastné fotografie a videá alebo čokoľvek z vašej Wink knižnice obsahu — sa účtujú podľa štandardnej sadzby. Médiá, ktoré pre vás generujeme, sa účtujú podľa AI sadzby.

### Čo sa meria a čo nie

- Fakturovaný je iba **generovaný** príspevok publikovaný na tretej strane (Facebook, Instagram). Príspevok, ktorý ste napísali sami, je zadarmo, nech ide kamkoľvek.
- **Publikovanie na WinkLinks je vždy zadarmo**, či už je príspevok generovaný alebo nie.
- Poplatok sa účtuje **pri publikovaní**, nie za pokus. Opakované generovanie návrhu, kým nie ste spokojní, nezvyšuje váš účet — platíte raz za príspevok, ktorý skutočne zverejníte. Pokusy nie sú neobmedzené: každý príspevok umožňuje približne 10 regenerácií pre obrázky a 3 pre video, čo odráža náklady na ich výrobu. Počas práce uvidíte, koľko vám zostáva.
- Na Partner API je **hotelová noc** jedna hotelová izba ocenená za jednu noc pobytu — *nie* jedno API volanie. Vyhľadávanie, ktoré vráti 20 hotelov na 3 noci, je 60 hotelových nocí z jedného požiadavku. Volania Content a Lookup (vyhľadávanie destinácie a automatické dopĺňanie) stoja jednu jednotku za volanie, bez ohľadu na výsledok. Endpointy účtu sú zadarmo.

### Zapnutie

Pay-as-you-go je predvolene vypnuté. Každý dostane bezplatný limit bez nutnosti čohokoľvek robiť.

Ak chcete prekročiť limit, **vlastník** účtu zapne pay-as-you-go a vyberie, ktoré účty sa budú merať. Použitie zo všetkých zapnutých účtov sa zráta do **jednej mesačnej faktúry**, ktorú môžete automaticky uhradiť kartou alebo si ju nechať vystaviť na úhradu sami.

Po zapnutí sa vaše používanie meria, ale **nikdy nie je obmedzované** — neobmedzíte sa limitom rýchlosti pri utrácaní peňazí u nás.

:::note[Ak to nezapnete]
Nič sa nezlomí a nič sa neúčtuje. Jednoducho sa zastavíte na bezplatnom limite za daný mesiac: generované príspevky sa nezverejnia a volania Partner API vracajú `429`, kým sa limit neobnoví.
:::

### Stav fakturácie

| Stav | Význam |
| -- | -- |
| V poriadku | Všetko funguje normálne. |
| Po lehote splatnosti | Platba zlyhala a je opakovane spracovávaná. Vaše funkcie počas tohto obdobia fungujú ďalej. |
| Pozastavené | Faktúra zostala nezaplatená do konca. Fakturovateľné akcie sú zablokované, bezplatné funkcie pokračujú normálne. |

:::tip[Živé ceny]
Jednotkové ceny a bezplatné limity sú vždy zobrazené v Portáli, priamo z nášho fakturačného systému, takže si ich môžete skontrolovať pred záväzkom. Pozrite si [Fakturáciu](/sk/portal/plan) na zapnutie pay-as-you-go, výber účtov a sledovanie spotreby a faktúr za aktuálny mesiac. Pozrite si [Sociálne siete](/sk/portal/social/what-is-social) pre informácie, ako objem príspevkov ovplyvňuje vaše náklady.
:::

## Efekt platformy

Nakoniec, ako naďalej rastieme v počte používateľov aj rezervácií, chceme s vami zdieľať niektoré efekty platformy. Viac rezervácií prináša príležitosti na objemové zľavy od nášho spracovateľa platieb. Keďže spracovanie kariet sa prenáša za náklady, akákoľvek úspora, ktorú vyjednáme, ide priamo hotelom.

Pridajte sa k Wink ešte dnes a objavte nový, výnosný spôsob podnikania v hotelierstve!
