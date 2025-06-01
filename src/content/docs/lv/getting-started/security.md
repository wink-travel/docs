---
title: Security
description: >-
  Šajā rakstā ir sniegta informācija par drošības pasākumiem, ko mēs ieviešam un
  ko katru gadu publicē mūsu trešās puses drošības uzņēmums.
sidebar:
  order: 6
---
# Wink drošības pārskata dokuments

*Pēdējoreiz atjaunināts: 2024. gada 7. septembrī*

*1.0 versija*

## Mērķis un darbības joma

Kā daļa no mūsu pastāvīgās apņemšanās nodrošināt drošību un aizsargāt lietotāju datus, mēs regulāri veicam ielaušanās testēšanu mūsu tīmekļa lietojumprogrammā. Šajā dokumentā ir izklāstītas mūsu testēšanas metodoloģijas, sniegts secinājumu kopsavilkums un izcelta mūsu pieeja nepārtrauktai drošības uzlabošanai.

Šis dokuments tiks atjaunināts, tiklīdz tiks sagatavoti jauni ziņojumi vai notiks būtiskas izmaiņas.

Aptveramās jomas:\
\*.wink.travel\
\*.trippay.io

## Testēšanas biežums un grafiks

Mūsu ielaušanās testi tiek veikti katru gadu, un papildu testi tiek ieplānoti pēc nepieciešamības pēc būtiskiem lietojumprogrammas vai infrastruktūras atjauninājumiem. Šī regulārā testēšanas biežums nodrošina, ka mēs esam soli priekšā mainīgajiem apdraudējumiem un uzturējam drošu vidi.

## Testēšanas metodoloģijas

Mūsu penetrācijas testēšana ir visaptveroša un aptver plašu drošības aspektu klāstu, tostarp, bet ne tikai:

* **OWASP 10 labākie:**&#x4D;ūsu testi īpaši vērsti uz kritiskākajiem drošības riskiem, piemēram, injekciju, bojātu autentifikāciju un starpvietņu skriptēšanu (XSS).
* **Melnās kastes un pelēkās kastes testēšana:**&#x41;tkarībā no darbības jomas mūsu komanda izmanto šīs metodoloģijas, lai simulētu gan ārējus, gan iekšējus uzbrukumu scenārijus.
* **Automatizēta un manuāla testēšana:**&#x4D;ēs izmantojam Burp Suite Pro — vadošo drošības testēšanas rīku komplektu, lai veiktu automatizētas drošības skenēšanas un palīdzētu manuālās testēšanas metodēm identificēt sarežģītas ievainojamības un iegūt vislabāko iespējamo pārklājumu. Precīzākai ievainojamību identificēšanai tiek izmantoti daži specializēti rīki, piemēram, SQLmap.

## Secinājumu kopsavilkums

Tālāk ir sniegts mūsu jaunākā iespiešanās testēšanas ziņojuma vispārīgs kopsavilkums:

* **Kopējais identificēto ievainojamību skaits:**&#x32;
* **Smaguma sadalījums:**
  * Kritiski: 2
* **Atklāto ievainojamību veidi:**
  * Bojāta piekļuves kontrole
  * Nedrošs dizains

Detalizētus secinājumus skatiet pilnajā ziņojumā.

### Riska vērtējumi un ietekme

Abas atrastās ievainojamības ir novērtētas kā kritiskas, jo abām varētu būt bijusi nopietna finansiāla ietekme. Pirmā ļāva ļaunprātīgam autentificētam lietotājam iegūt kontroli pār cita uzņēmuma Trippay maksājumu kontu. Otrā ievainojamība ļāva ļaunprātīgam lietotājam mainīt rezervācijai nepieciešamo maksājuma summu.

### Sanācijas un mazināšanas pasākumi

Esam veikuši šādus pasākumus, lai novērstu konstatētās ievainojamības:

* **Tūlītēji ielāpi:**&#x4B;ritiskās ievainojamības ir novērstas 48 stundu laikā pēc to atklāšanas.
* **Koda pārskatīšana un sacietēšana:**&#x49;zstrādātāju komanda ir ieviesusi papildu drošības kontroles, pamatojoties uz mūsu ieteikumiem.

## Nepārtraukta uzlabošana

Iekļūšanas testēšana ir daļa no mūsu plašākās stratēģijas nepārtrauktai drošības uzlabošanai. Katra testa rezultāti nosaka mūsu drošības politikas, ietekmē izstrādes praksi un veicina uzlabojumus mūsu drošības arhitektūrā.

## Komandas zināšanas

Mūsu ielaušanās testēšanu veic iekšējais profesionālis ar plašu pieredzi dažādos projektos un nozarēs. Izmantojot vadošos rīkus un metodes, mūsu eksperts nodrošina, ka mūsu lietojumprogramma ir rūpīgi pārbaudīta pret jaunākajiem drošības apdraudējumiem.

## Apņemšanās drošībai

Mēs esam apņēmušies uzturēt drošu lietojumprogrammu vidi mūsu lietotājiem un ieinteresētajām personām. Mūsu pastāvīgie centieni drošības testēšanā un uzlabošanā apliecina mūsu apņemšanos aizsargāties pret mainīgiem apdraudējumiem.

## Piekļuve ziņojumiem un atjauninājumi

Šis dokuments tiks nepārtraukti atjaunināts, tiklīdz tiks publicēti jauni ielaušanās testu ziņojumi. Lai piekļūtu pilnam ziņojumam, lūdzu, sazinieties ar mums, izmantojot tālāk norādīto e-pastu. Turpmākajos atjauninājumos būs iekļautas jaunizveidotas ievainojamības, novēršanas pasākumi un mūsu testēšanas metodoloģiju pielāgojumi.

Lai saņemtu papildu informāciju, lūdzu, sazinieties ar mums pa e-pastu security@wink.travel.

