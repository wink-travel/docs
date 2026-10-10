---
title: Ceny
description: Většina Wink je zdarma. Platíte malý poplatek za rezervaci a poplatek za využití několika prémiových funkcí podle skutečné spotřeby.
sidebar:
  order: 4
---

Wink nemá žádné předplatné, žádná místa ani poplatky za nastavení. Naprostá většina platformy je zdarma a platíte pouze za dvě věci:

1. **Poplatek za platformu za rezervaci plus náklady na zpracování karty** — pouze při uskutečnění rezervace.
2. **Poplatky za využití podle skutečné spotřeby** — u několika prémiových funkcí, které nás stojí peníze při každém spuštění, každá s měsíční bezplatnou kvótou.

## Co je zdarma

Tyto funkce nic nestojí, navždy, bez kvóty a bez měření:

- **rezervační engine** — na vašem vlastním webu, na vaší stránce WinkLinks nebo kdekoli jinde, kde jej vložíte.
- **správa nemovitostí** — obsah, fotografie, ceny, cenové plány, dostupnost, akce a podmínky.
- **affiliate nástroje** — sdílené odkazy, kurátorské seznamy, mřížky, mapy, karty a vložitelné widgety.
- **nástroje pro cestovní kanceláře** — vyhledávání, speciální ceny a rezervace jménem vašich klientů.
- **WinkLinks** — získejte vlastní URL, vytvořte si stránku a publikujte na ni, kolikrát chcete.
- **ruční příspěvky na sociální sítě** — cokoli, co sami napíšete, na jakékoli připojené síti.
- **analytika, žebříčky, reklamace, nastavení** a správa účtu.
- **API pro spotřebitele a rezervační engine**, včetně jejich endpointů pro vyhledávání a automatické doplňování. U **Partner API** jsou volání Lookup a Content měřena po jedné jednotce (viz [Použití](#co-je-a-není-měřeno) níže).

## Rezervace

Wink podporuje dva modely: Wink vybírá platbu za hotel a licencovaná cestovní kancelář vystupuje jako obchodník zapsaný v registru.

### Model 1 — Wink vybírá platbu za hotel

Wink vybírá platbu hosta jako omezený zástupce hotelu pro inkaso plateb. Hotelem je obchodník zapsaný v registru a na výpisu z karty hosta se objeví název hotelu.
Tento model platí pro 95 % všech rezervací.

#### Rozpis

:::note[Poplatek za platformu]
Wink účtuje 1,5% poplatek za platformu za rezervaci. Pokrývá údržbu platformy a umožňuje nám poskytovat vše výše uvedené zdarma. Neúčtuje se u zrušených rezervací.
:::

:::note[Zpracování karty]
Poplatek za zpracování platby, který je účtován za inkaso platby hosta, je hotelu předáván za náklady bez marže. Liší se podle karty a platební metody hosta a přesná částka je uvedena v sekci Účetnictví u každé rezervace. Pokud je rezervace zrušena nebo vrácena, jakýkoli poplatek, který si zpracovatel ponechá, je stále účtován; pokud nic neúčtuje, neúčtujeme ani my.
:::

:::note[Vyplácení prostředků]
S vyplácením prostředků na váš účet jsou spojeny poplatky. Záleží na zvolené metodě vyplácení. Aktuálně podporujeme:

- **Bankovní převod** — Cena závisí na zemi, kde se nacházíte, odkud jsou prostředky odesílány a na případné konverzi měny během převodu. Poplatek za výplatu a případné náklady na konverzi platí příjemce, za náklady. K dispozici je kalkulačka, kterou můžete použít, pokud máte na účtu dostupné prostředky.

Pokud chcete, abychom podporovali jinou metodu výplaty, pošlete nám e-mail.
:::

### Model 2 — Cestovní kancelář jako obchodník zapsaný v registru

Tento model je dostupný pouze cestovním kancelářím, které mají licenci v daném regionu a chtějí být obchodníkem zapsaným v registru. Je dostupný pouze partnerům API, kteří rezervují přes [Partner API](/cs/integrations/partner-api/) a vyžaduje předchozí písemný souhlas Wink. Někteří z našich registrovaných cestovních kanceláří chtějí být odpovědní za zpracování platby a vyplácení hotelům. V tomto modelu jsou odpovědní za prostředky a mají potřebné licence k provozu ve své zemi.

#### Rozpis

:::note[Poplatek za platformu]
Wink účtuje 1,5% poplatek za platformu za rezervaci. Pokrývá údržbu platformy a umožňuje nám poskytovat vše výše uvedené zdarma.
:::

V tomto modelu cestovní kanceláře platí Wink poplatek 1,5 % plus jakékoli využití Partner API nad bezplatnou kvótu, fakturované měsíčně.

## Co platí partneři

Pro partnery, kteří posílají rezervace: tvůrce, affiliate, platformy, vývojáře a cestovní kanceláře. Partnerství jsou neexkluzivní, bez územních omezení.

| | Platba vybíraná za hotel (většina partnerů) | Jste obchodník zapsaný v registru (pouze API partneři) |
|---|---|---|
| Poplatek za licenci nebo území | Žádný | Žádný |
| Poplatek za nastavení | Žádný | Žádný |
| Předplatné nebo měsíční poplatek | Žádný | Žádný |
| Minimální závazek nebo doba | Žádný | Žádný. Platí kreditní limit. |
| Přístup k Partner API | 10 000 hotelových nocí měsíčně zdarma, poté 0,0001 $ za hotelovou noc. Pay-as-you-go je ve výchozím stavu vypnutý; při dosažení kvóty volání vrací `429`. | Stejné |
| Transakční poplatek | Žádný. Vyděláváte provizi (výchozí 10 %). | 1,5% poplatek za rezervaci z hodnoty rezervace, fakturovaný měsíčně v USD, splatný do 15 dnů. Při zapnutém pay-as-you-go je využití Partner API fakturováno na druhé měsíční faktuře. |
| Poplatek za podporu | Žádný | Žádný |
| Jiné poplatky | Poplatky za převod výplat, za náklady | Možná záloha nebo vklad při schválení. Úrok 1,5 % měsíčně pouze z prodlených faktur. |
| Kdy se poplatky mění | 30 dní předem; platí pouze pro rezervace po změně | Stejné. Wink může také změnit váš kreditní limit s oznámením. |

Cesta obchodníka zapsaného v registru vyžaduje předchozí písemný souhlas Wink. Viz [Model 2](#model-2--cestovní-kancelář-jako-obchodník-zapsaný-v-registru) výše a stránku [Partner API](/cs/integrations/partner-api/).

## Využití (pay-as-you-go)

Několik funkcí nás stojí peníze při každém spuštění — generativní AI, API třetích stran pro sociální sítě a poskytování živých cen ve velkém měřítku. Místo toho, abychom je zahrnuli do měsíčního plánu, který možná nevyužijete, platíte pouze za to, co skutečně spotřebujete, a to až po vyčerpání bezplatné měsíční kvóty.

| Funkce | Zdarma za měsíc | Poté | Účetní jednotka |
| -- | -- | -- | -- |
| Příspěvek na sociální síť — obrázek | 1 | 1,50 $ | Jeden publikovaný příspěvek |
| Příspěvek na sociální síť — AI generovaný obrázek | 0 | 2,50 $ | Jeden publikovaný příspěvek |
| Příspěvek na sociální síť — AI vylepšené video | 0 | 4,00 $ | Jeden publikovaný příspěvek |
| Příspěvek na sociální síť — AI generované video | 0 | 14,00 $ | Jeden publikovaný příspěvek |
| AI odpověď na komentář nebo DM | 5 | 0,05 $ | Jedna odpověď |
| Odpověď chatbota | 5 | 0,05 $ | Jedna odpověď |
| Partner API | 10 000 | 0,0001 $ | Jedna hotelová noc |

Ceny jsou v USD. Bezplatná kvóta je udělena **na účet**, nikoli na uživatele, a obnovuje se vždy 1. dne každého měsíce (UTC).

### Jak se ceny příspěvků stanovují

Příspěvky jsou účtovány podle toho, co obsahují, protože to je to, co nás stojí jejich vytvoření. Statický obrázek je levný; video nikoli; cokoli, co generujeme pomocí AI, stojí výrazně více než fotografie, kterou jste dodali sami.

- **Bezplatná kvóta pokrývá pouze standardní obrázkové příspěvky.** Jeden takový příspěvek na účet za měsíc. Video příspěvky a AI generovaná média jsou účtovány od prvního příspěvku — u těchto kategorií není žádná bezplatná kvóta, takže nemovitost, která zveřejňuje video, by měla očekávat poplatek již v prvním měsíci.
- **Video má přednost.** Pokud příspěvek obsahuje jakékoli video, celý příspěvek je účtován jako video. Příspěvek kombinující obrázek a video je video příspěvek.
- **Původ AI určuje sazbu.** Média, která dodáte — vaše vlastní fotografie a videa nebo cokoli z vaší knihovny obsahu Wink — jsou účtována za standardní sazbu. Média, která pro vás generujeme, jsou účtována za AI sazbu.

### Co je a není měřeno

- Účtován je pouze **generovaný** příspěvek publikovaný na síť třetí strany (Facebook, Instagram). Příspěvek, který jste napsali sami, je zdarma, kamkoli jej publikujete.
- **Publikování na WinkLinks je vždy zdarma**, generované i ne.
- Účtujete se **při publikování**, ne za pokus. Opakované generování konceptu, dokud nejste spokojeni, nezvyšuje váš účet — platíte jednou za příspěvek, který skutečně zveřejníte. Pokusy nejsou neomezené: každý příspěvek umožňuje asi 10 regenerací u obrázků a 3 u videí, což odráží náklady na jejich vytvoření. Během práce uvidíte, kolik jich máte ještě k dispozici.
- U Partner API je **hotelová noc** jedna hotelová noc za jednu noc pobytu — *nikoli* jedno volání API. Vyhledávání, které vrátí 20 hotelů na 3 noci, znamená 60 hotelových nocí z jednoho požadavku. Volání Content a Lookup (vyhledávání destinace a automatické doplňování) stojí jednu jednotku za volání, bez ohledu na výsledek. Endpointy účtu jsou zdarma.

### Zapnutí

Pay-as-you-go je ve výchozím stavu vypnutý. Každý dostane bezplatnou kvótu bez jakýchkoli kroků.

Chcete-li překročit kvótu, **vlastník** účtu zapne pay-as-you-go a vybere, které účty budou měřeny. Využití ze všech zapnutých účtů se sloučí do **jedné měsíční faktury**, kterou můžete automaticky uhradit kartou nebo obdržet jako fakturu k úhradě sami.

Po zapnutí je vaše využití měřeno, ale **nikdy není omezeno** — nedosáhnete limitu rychlosti za utrácení u nás.

:::note[Pokud to nezapnete]
Nic se nezlomí a nic se neúčtuje. Prostě skončíte na bezplatné kvótě pro daný měsíc: generované příspěvky nebudou publikovány a volání Partner API vrací `429`, dokud se kvóta neobnoví.
:::

### Stav fakturace

| Stav | Co znamená |
| -- | -- |
| V pořádku | Vše funguje normálně. |
| Po splatnosti | Platba selhala a je opakována. Vaše funkce během této doby fungují dál. |
| Pozastaveno | Faktura nebyla uhrazena do konce. Účtovatelné akce jsou blokovány, bezplatné funkce pokračují normálně. |

:::tip[Živé ceny]
Jednotkové ceny a bezplatné kvóty jsou vždy zobrazeny v Portálu, přímo z našeho fakturačního systému, takže je můžete zkontrolovat před závazkem. Viz [Fakturace](/cs/portal/plan) pro zapnutí pay-as-you-go, výběr účtů a sledování využití a faktur za měsíc. Viz [Sociální sítě](/cs/portal/social/what-is-social) pro vliv objemu příspěvků na vaše náklady.
:::

## Efekt platformy

Nakonec, jak rosteme v počtu i rezervacích, chceme s vámi sdílet některé efekty platformy. Více rezervací přináší příležitosti k objemovým slevám od našeho zpracovatele plateb. Protože zpracování karet je předáváno za náklady, jakákoli úspora jde přímo hotelům.

Připojte se k Wink ještě dnes a objevte nový, výnosný způsob podnikání v pohostinství!
