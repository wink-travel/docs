---
title: Aplinkos
description: Šiame straipsnyje pateikta informacija testuotojams ir kūrėjams apie prieigą prie mūsų skirtingų serverių aplinkų.
sidebar:
  order: 8
---

Wink platformoje mes nuolat veikiame 2 aplinkas:

- Produkcija yra mūsų stabili aplinka.
- Staging yra mūsų testavimo aplinka, kurioje sertifikuojami kanalų valdytojai ir kelionių agentai.

Jei norite išbandyti Wink platformą kaip kūrėjas, viešbutis ar kelionių agentas, sukurkite paskyrą mūsų staging aplinkoje, kad pradėtumėte. Kanalų valdytojai taip pat vykdo savo [sertifikavimą](/lt/guides/integrators/add-your-channel-manager/#certification) ten.

Sukurti paskyrą staging arba produkcijos aplinkoje reikalauja sutikimo su Wink naudojimo sąlygomis ir mokėjimo sąlygomis, o šis sutikimas yra įpareigojantis. Kanalų valdytojams ir kelionių agentams taip pat reikalingas sertifikavimas prieš prieigą prie produkcijos; visi kiti patys pereina į produkciją.

:::note
Staging aplinka prieinama pagal užklausą. Tai reiškia, kad ji užmiega, jei nėra naudojama, ir pati įsijungia, kai yra naudojama. Prašome kantrybės, jei ją pažadinote. Po pirmo prisijungimo prie vieno iš mūsų serverių ar programų užtrunka apie minutę, kol visi serveriai paleidžiami.
:::

## Serveriai

Žemiau pateikta matrica su mūsų serverių pavadinimais ir jų paskirtimi.

| Funkcija | Staging | Produkcija
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventorius | https://staging-api.wink.travel | https://api.wink.travel | 
| Integracijos | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partneris (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Mokėjimai | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Programėlės

Mūsų programėlės taip pat turi testavimo ir produkcijos aplinkas mūsų klientams.

| Programėlė | Staging | Produkcija
| ------- | ------- | ---------- |
| Portalas | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervavimo variklis | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
