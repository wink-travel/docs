---
title: Environments
description: >-
  Ez a cikk információkat tartalmaz tesztelők és fejlesztők számára arról,
  hogyan férhetnek hozzá a különböző szerverkörnyezeteinkhez.
sidebar:
  order: 8
---
A Winknél két környezetet üzemeltetünk mindenhez, amit mindenkor csinálunk:

* A termelés a stabil környezetünk.
* A Staging a mi tanúsítási és tesztelési környezetünk.

Ha Ön integrátor, szálloda vagy utazási iroda, és szeretne felkészülni a tanúsításra, vagy tesztelni a Wink platformot, hozzon létre egy fiókot a tesztelési környezetünkben a kezdéshez.

:::note
A tesztelési környezet kérésre érhető el. Ez azt jelenti, hogy alvó üzemmódba lép, ha nincs használat, és újra bekapcsol, ha van használat. Kérjük, legyen türelmes, ha felébreszti. Körülbelül egy percet vesz igénybe, amíg az összes szerver elindul, miután először csatlakozott valamelyik szerverünkhöz vagy alkalmazásunkhoz.
:::

## Szerverek

Az alábbiakban egy mátrix látható, amely a szervereink nevét és azok használatát tartalmazza.

| Kiemelt | Előadás | Gyártás
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| Készlet | https://staging-api.wink.travel | https://api.wink.travel |
| Integrációk | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| Fizetés | https://staging-api.trippay.io | https://api.trippay.io |

## Alkalmazások

Alkalmazásaink teszt- és éles környezetekkel is rendelkeznek ügyfeleink számára.

| Alkalmazás | Előkészítés | Gyártás
| ------- | ------- | ---------- |
| Ügynök | https://staging-agent.wink.travel | https://agent.wink.travel |
| Vállalati | https://staging-group.wink.travel | https://group.wink.travel |
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| Fizetés | https://staging-pay.wink.travel | https://pay.wink.travel |
| Stúdió | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

