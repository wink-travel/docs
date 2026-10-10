---
title: Vides
description: Šajā rakstā ir informācija testētājiem un izstrādātājiem par piekļuvi mūsu dažādām serveru vidēm.
sidebar:
  order: 8
---

Wink platformā mēs vienmēr darbojam divas vides:

- Ražošana ir mūsu stabilā vide.
- Staging ir mūsu testēšanas vide, kur tiek sertificēti kanālu pārvaldnieki un ceļojumu aģenti.

Ja vēlaties testēt Wink platformu kā izstrādātājs, viesnīca vai ceļojumu aģents, izveidojiet kontu mūsu staging vidē, lai sāktu darbu. Kanālu pārvaldnieki arī veic savu [sertifikāciju](/lv/guides/integrators/add-your-channel-manager/#certification) tur.

Kontu izveide staging vai ražošanas vidē prasa piekrišanu Wink Noteikumiem un Maksājumu noteikumiem, un šī piekrišana ir saistoša. Kanālu pārvaldniekiem un ceļojumu aģentiem pirms piekļuves ražošanai nepieciešama sertifikācija; pārējiem pāreja uz ražošanu notiek pašiem.

:::note
Staging vide ir pieejama pēc pieprasījuma. Tas nozīmē, ka tā iemieg, ja netiek izmantota, un pati atkal ieslēdzas, kad tiek izmantota. Lūdzu, esiet pacietīgi, ja to pamodināt. Pēc pirmās savienojuma izveides ar kādu no mūsu serveriem vai lietotnēm visu serveru startēšana aizņem apmēram minūti.
:::

## Serveri

Zemāk ir tabula ar mūsu serveru nosaukumiem un to izmantošanu.

| Funkcija | Staging | Ražošana
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Lietotnes

Mūsu lietotnēm arī ir testēšanas un ražošanas vides mūsu klientiem.

| Lietotne | Staging | Ražošana
| ------- | ------- | ---------- |
| Portāls | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervēšanas dzinējs | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
