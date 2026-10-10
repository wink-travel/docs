---
title: Lingkungan
description: Artikel ini berisi informasi untuk penguji dan pengembang tentang cara mendapatkan akses ke berbagai lingkungan server kami.
sidebar:
  order: 8
---

Di Wink, kami menjalankan 2 lingkungan untuk semua yang kami lakukan setiap saat:

- Production adalah lingkungan stabil kami.
- Staging adalah lingkungan pengujian kami, dan tempat channel manager serta agen perjalanan disertifikasi.

Jika Anda ingin menguji platform Wink, sebagai pengembang, hotel, atau agen perjalanan, buat akun di lingkungan staging kami untuk memulai. Channel manager juga menjalankan [sertifikasi](/id/guides/integrators/add-your-channel-manager/#certification) di sana.

Membuat akun di staging atau production mengharuskan menerima Ketentuan dan Ketentuan Pembayaran Wink, dan penerimaan tersebut bersifat mengikat. Channel manager dan agen perjalanan juga memerlukan sertifikasi sebelum akses production; semua orang lain pindah ke production secara mandiri.

:::note
Lingkungan staging tersedia berdasarkan permintaan. Artinya, lingkungan ini akan tidur jika tidak ada penggunaan dan akan menyala kembali saat ada penggunaan. Harap bersabar jika Anda sedang membangunkannya. Dibutuhkan sekitar satu menit untuk memulai semua server setelah Anda pertama kali terhubung dengan salah satu server atau aplikasi kami.
:::

## Server

Berikut adalah matriks yang berisi nama server kami dan penggunaannya.

| Fitur | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikasi

Aplikasi kami juga memiliki lingkungan pengujian dan produksi untuk pelanggan kami.

| Aplikasi | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
