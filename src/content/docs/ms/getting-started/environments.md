---
title: Persekitaran
description: Artikel ini mengandungi maklumat untuk penguji dan pembangun tentang cara mendapatkan akses ke pelbagai persekitaran pelayan kami.
sidebar:
  order: 8
---

Di Wink, kami menjalankan 2 persekitaran untuk semua yang kami lakukan pada setiap masa:

- Production adalah persekitaran stabil kami.
- Staging adalah persekitaran pensijilan dan ujian kami.

Jika anda seorang integrator, hotel atau ejen pelancongan yang ingin bersedia untuk pensijilan atau menguji platform Wink, buat akaun di persekitaran staging kami untuk memulakan.

:::note
Persekitaran staging tersedia atas permintaan. Ini bermakna ia akan tidur jika tiada penggunaan dan akan hidup semula apabila ada. Sila bersabar jika anda sedang membangunkannya. Ia mengambil masa kira-kira satu minit untuk memulakan semua pelayan selepas anda pertama kali berhubung dengan salah satu pelayan atau aplikasi kami.
:::

## Pelayan

Di bawah adalah matriks yang mengandungi nama pelayan kami dan kegunaannya.

| Ciri | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikasi

Aplikasi kami juga mempunyai persekitaran ujian dan produksi untuk pelanggan kami.

| Aplikasi | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
