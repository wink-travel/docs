---
title: Aplinkos
description: Šiame straipsnyje pateikiama informacija testuotojams ir kūrėjams apie prieigą prie mūsų skirtingų serverių aplinkų.
sidebar:
  order: 8
---

Wink platformoje mes nuolat veikiame 2 aplinkas:

- Produkcija yra mūsų stabili aplinka.
- Staging yra mūsų sertifikavimo ir testavimo aplinka.

Jei esate integratorius, viešbutis ar kelionių agentas, norintis pasiruošti sertifikavimui arba išbandyti Wink platformą, sukurkite paskyrą mūsų staging aplinkoje, kad pradėtumėte.

:::note
Staging aplinka prieinama pagal užklausą. Tai reiškia, kad ji užmiega, jei nėra naudojama, ir pati įsijungia, kai yra naudojama. Prašome būti kantriems, jei ją pažadinote. Po pirmo prisijungimo prie vieno iš mūsų serverių ar programėlių užtrunka apie minutę, kol visi serveriai pilnai užsikrauna.
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

Mūsų programėlėms taip pat yra testavimo ir produkcijos aplinkos mūsų klientams.

| Programėlė | Staging | Produkcija
| ------- | ------- | ---------- |
| Portalas | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervavimo variklis | https://staging-book.wink.travel | https://book.wink.travel | 
| Nuorodų valdytojas | https://staging-i.trvl.as | https://i.trvl.as |
