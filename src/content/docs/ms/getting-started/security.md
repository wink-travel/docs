---
title: Keselamatan
description: Artikel ini mengandungi maklumat mengenai langkah keselamatan yang kami laksanakan dan diterbitkan setiap tahun oleh firma keselamatan pihak ketiga kami.
sidebar:
  order: 6
---

# Dokumen Gambaran Keselamatan Wink

*Terakhir Dikemas Kini: 7 September 2024*

*Versi 1.0*

## Tujuan dan Skop

Sebagai sebahagian daripada komitmen berterusan kami terhadap keselamatan dan melindungi data pengguna, kami menjalankan ujian penembusan secara berkala ke atas aplikasi web kami. Dokumen ini menggariskan metodologi ujian kami, menyediakan ringkasan penemuan, dan menyorot pendekatan kami untuk penambahbaikan keselamatan berterusan.

Dokumen ini akan dikemas kini apabila laporan baru dihasilkan atau apabila berlaku perubahan ketara.

Domain dalam skop:  
\*.wink.travel  
\*.trippay.io

## Kekerapan dan Jadual Ujian

Ujian penembusan kami dijalankan setiap tahun, dengan ujian tambahan dijadualkan mengikut keperluan selepas kemas kini ketara pada aplikasi atau infrastruktur. Kekerapan ujian yang tetap ini memastikan kami sentiasa berada di hadapan ancaman yang berkembang dan mengekalkan persekitaran yang selamat.

## Metodologi Ujian

Ujian penembusan kami menyeluruh dan merangkumi pelbagai aspek keselamatan, termasuk tetapi tidak terhad kepada:

* **OWASP Top 10:** Ujian kami secara khusus menyasarkan risiko keselamatan paling kritikal, seperti Injection, Broken Authentication, dan Cross-Site Scripting (XSS).  
* **Ujian Black Box dan Grey Box:** Bergantung pada skop, pasukan kami menggunakan metodologi ini untuk mensimulasikan senario serangan luaran dan dalaman.  
* **Ujian Automatik dan Manual:** Kami menggunakan Burp Suite Pro, satu set alat ujian keselamatan terkemuka, untuk menjalankan imbasan keselamatan automatik dan membantu teknik ujian manual bagi mengenal pasti kerentanan kompleks dan mendapatkan liputan terbaik. Untuk pengenalpastian kerentanan yang lebih khusus, beberapa alat khusus digunakan seperti SQLmap.

## Ringkasan Penemuan

Berikut adalah ringkasan tahap tinggi laporan ujian penembusan terkini kami:

* **Jumlah Kerentanan Dikenal Pasti:** 2  
* **Pengagihan Keterukan:**  
  * Kritikal: 2  
* **Jenis Kerentanan Dikesan:**  
  * Broken Access Control  
  * Reka Bentuk Tidak Selamat

Untuk penemuan terperinci, sila rujuk laporan penuh.

### Penilaian Risiko dan Impak

Kedua-dua kerentanan yang ditemui dinilai sebagai kritikal kerana kedua-duanya boleh memberi impak kewangan yang serius. Yang pertama membenarkan pengguna yang disahkan berniat jahat mengawal akaun pembayaran Trippay syarikat lain. Kerentanan kedua membenarkan pengguna berniat jahat mengubah jumlah pembayaran yang diperlukan untuk tempahan.

### Usaha Pembetulan dan Mitigasi

Kami telah mengambil langkah berikut untuk menangani kerentanan yang dikenal pasti:

* **Patch Segera:** Kerentanan kritikal telah dipatch dalam masa 48 jam selepas penemuan.  
* **Semakan Kod dan Pengukuhan:** Pasukan pembangunan telah melaksanakan kawalan keselamatan tambahan berdasarkan cadangan kami.

## Penambahbaikan Berterusan

Ujian penembusan adalah sebahagian daripada strategi lebih luas kami untuk penambahbaikan keselamatan berterusan. Penemuan dari setiap ujian membimbing polisi keselamatan kami, mempengaruhi amalan pembangunan, dan memacu penambahbaikan dalam seni bina keselamatan kami.

## Kepakaran Pasukan

Ujian penembusan kami dijalankan oleh seorang profesional dalaman yang berpengalaman luas dalam pelbagai projek dan industri. Menggunakan alat dan kaedah terkemuka, pakar kami memastikan aplikasi kami diuji dengan teliti terhadap ancaman keselamatan terkini.

## Komitmen terhadap Keselamatan

Kami berdedikasi untuk mengekalkan persekitaran aplikasi yang selamat untuk pengguna dan pihak berkepentingan kami. Usaha berterusan kami dalam ujian dan penambahbaikan keselamatan menunjukkan komitmen kami untuk melindungi daripada ancaman yang berkembang.

## Akses Laporan dan Kemas Kini

Dokumen ini akan dikemas kini secara berterusan apabila laporan ujian penembusan baru dikeluarkan. Untuk mengakses laporan penuh, sila hubungi kami melalui emel di bawah. Kemas kini akan datang akan merangkumi kerentanan yang baru dikenal pasti, usaha pembetulan, dan penyesuaian kepada metodologi ujian kami.

Untuk pertanyaan lanjut, sila hubungi security@wink.travel.
