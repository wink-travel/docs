---
title: Drošība
description: Šajā rakstā ir informācija par drošības pasākumiem, ko mēs īstenojam, un kas tiek publicēti ikgadēji mūsu trešās puses drošības uzņēmuma.
sidebar:
  order: 6
---

# Wink drošības pārskata dokuments

*Pēdējā atjaunināšana: 2024. gada 7. septembris*

*Versija 1.0*

## Mērķis un darbības joma

Kā daļa no mūsu pastāvīgās apņemšanās nodrošināt drošību un aizsargāt lietotāju datus, mēs regulāri veicam iekļūšanas testēšanu mūsu tīmekļa lietotnē. Šis dokuments apraksta mūsu testēšanas metodoloģijas, sniedz kopsavilkumu par atklājumiem un izceļ mūsu pieeju nepārtrauktai drošības uzlabošanai.

Šis dokuments tiks atjaunināts, kad tiks sagatavoti jauni ziņojumi vai notiks būtiskas izmaiņas.

Darbības jomas domēni:  
\*.wink.travel  
\*.trippay.io

## Testēšanas biežums un grafiks

Mūsu iekļūšanas testi tiek veikti reizi gadā, un papildus testi tiek plānoti pēc nepieciešamības, sekojot būtiskām lietotnes vai infrastruktūras izmaiņām. Šis regulārais testēšanas ritms nodrošina, ka mēs esam soli priekšā mainīgajiem draudiem un uzturam drošu vidi.

## Testēšanas metodoloģijas

Mūsu iekļūšanas testēšana ir visaptveroša un aptver plašu drošības aspektu loku, tostarp, bet ne tikai:

* **OWASP Top 10:** Mūsu testi īpaši mērķē uz kritiskākajiem drošības riskiem, piemēram, injekciju, bojātu autentifikāciju un vietņu skriptu ievietošanu (XSS).  
* **Black Box un Grey Box testēšana:** Atkarībā no darbības jomas mūsu komanda izmanto šīs metodoloģijas, lai simulētu gan ārējās, gan iekšējās uzbrukuma situācijas.  
* **Automatizētā un manuālā testēšana:** Mēs izmantojam Burp Suite Pro, vadošo drošības testēšanas rīku komplektu, lai veiktu automatizētas drošības skenēšanas un atbalstītu manuālās testēšanas tehnikas, lai identificētu sarežģītas ievainojamības un nodrošinātu pēc iespējas labāku pārklājumu. Lai precīzāk identificētu ievainojamības, tiek izmantoti arī specializēti rīki, piemēram, SQLmap.

## Atklājumu kopsavilkums

Zemāk ir augsta līmeņa kopsavilkums par mūsu nesenāko iekļūšanas testēšanas ziņojumu:

* **Kopējais atklāto ievainojamību skaits:** 2  
* **Smaguma sadalījums:**  
  * Kritiskas: 2  
* **Atklāto ievainojamību veidi:**  
  * Bojāta piekļuves kontrole  
  * Nedroša dizaina risinājums

Detalizētai informācijai lūdzu skatīt pilno ziņojumu.

### Riska novērtējums un ietekme

Abas atklātās ievainojamības ir novērtētas kā kritiskas, jo abas varēja radīt smagas finansiālas sekas. Pirmā ļāva ļaunprātīgam autentificētam lietotājam pārņemt citas kompānijas Trippay maksājumu kontroles tiesības. Otrā ievainojamība ļāva ļaunprātīgam lietotājam mainīt maksājuma summu, kas nepieciešama rezervācijai.

### Novēršanas un mazināšanas pasākumi

Mēs esam veikuši šādas darbības, lai risinātu atklātās ievainojamības:

* **Ātras labojumu ieviešana:** Kritiskās ievainojamības tika novērstas 48 stundu laikā pēc to atklāšanas.  
* **Koda pārskatīšana un nostiprināšana:** Izstrādes komanda ir ieviesusi papildu drošības kontroli, balstoties uz mūsu ieteikumiem.

## Nepārtraukta uzlabošana

Iekļūšanas testēšana ir daļa no mūsu plašākas stratēģijas nepārtrauktai drošības uzlabošanai. Katru testu atklājumi virza mūsu drošības politiku, ietekmē izstrādes praksi un veicina uzlabojumus mūsu drošības arhitektūrā.

## Komandas ekspertīze

Mūsu iekļūšanas testēšanu veic iekšējais profesionālis ar plašu pieredzi dažādos projektos un nozarēs. Izmantojot vadošos rīkus un metodes, mūsu eksperts nodrošina, ka mūsu lietotne tiek rūpīgi pārbaudīta pret jaunākajiem drošības draudiem.

## Apņemšanās drošībai

Mēs esam apņēmušies uzturēt drošu lietotnes vidi mūsu lietotājiem un ieinteresētajām pusēm. Mūsu pastāvīgās pūles drošības testēšanā un uzlabošanā apliecina mūsu apņemšanos aizsargāt pret mainīgajiem draudiem.

## Ziņojuma piekļuve un atjauninājumi

Šis dokuments tiks nepārtraukti atjaunināts, kad tiks izlaisti jauni iekļūšanas testu ziņojumi. Lai piekļūtu pilnam ziņojumam, lūdzu, sazinieties ar mums, izmantojot zemāk norādīto e-pastu. Nākamajos atjauninājumos tiks iekļautas jaunatklātās ievainojamības, novēršanas pasākumi un izmaiņas mūsu testēšanas metodoloģijās.

Papildu jautājumu gadījumā lūdzu rakstiet uz security@wink.travel.
