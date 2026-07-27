---
title: Lingkungan
description: Artikel ini berisi informasi untuk penguji dan pengembang tentang cara mendapatkan akses ke berbagai lingkungan server kami.
sidebar:
  order: 8
---

Di Wink, kami menjalankan 2 lingkungan untuk semua yang kami lakukan setiap saat:

- Production adalah lingkungan stabil kami.
- Staging adalah lingkungan sertifikasi dan pengujian kami.

Jika Anda adalah integrator, hotel, atau agen perjalanan yang ingin mempersiapkan sertifikasi atau menguji platform Wink, buat akun di lingkungan staging kami untuk memulai.

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
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikasi

Aplikasi kami juga memiliki lingkungan pengujian dan produksi untuk pelanggan kami.

| Aplikasi | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
