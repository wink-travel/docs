---
title: Persekitaran
description: Artikel ini mengandungi maklumat untuk penguji dan pembangun tentang cara mendapatkan akses ke pelbagai persekitaran pelayan kami.
sidebar:
  order: 8
---

Di Wink, kami menjalankan 2 persekitaran untuk segala yang kami lakukan pada setiap masa:

- Production adalah persekitaran stabil kami.
- Staging adalah persekitaran ujian kami, dan tempat pengurus saluran serta ejen pelancongan disahkan.

Jika anda ingin menguji platform Wink, sebagai pembangun, hotel atau ejen pelancongan, buat akaun di persekitaran staging kami untuk bermula. Pengurus saluran juga menjalankan [pensijilan](/ms/guides/integrators/add-your-channel-manager/#certification) mereka di sana.

Membuat akaun di staging atau production memerlukan penerimaan Terma dan Syarat serta Terma Pembayaran Wink, dan penerimaan itu adalah mengikat. Pengurus saluran dan ejen pelancongan juga memerlukan pensijilan sebelum akses production; semua orang lain beralih ke production secara sendiri.

:::note
Persekitaran staging tersedia atas permintaan. Ini bermakna ia akan tidur jika tiada penggunaan dan akan hidup semula apabila ada. Sila bersabar jika anda sedang membangunkannya. Ia mengambil masa kira-kira satu minit untuk memulakan semua pelayan selepas anda pertama kali berhubung dengan salah satu pelayan atau aplikasi kami.
:::

## Pelayan

Di bawah adalah matriks yang mengandungi nama pelayan kami dan kegunaannya.

| Ciri | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventori | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrasi | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Rakan Kongsi (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Pembayaran | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikasi

Aplikasi kami juga mempunyai persekitaran ujian dan production untuk pelanggan kami.

| Aplikasi | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Enjin tempahan | https://staging-book.wink.travel | https://book.wink.travel | 
| Pengurus Pautan | https://staging-i.trvl.as | https://i.trvl.as |
