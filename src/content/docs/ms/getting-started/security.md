---
title: Security
description: >-
  Artikel ini mengandungi maklumat tentang langkah keselamatan yang kami
  laksanakan dan diterbitkan setiap tahun oleh firma keselamatan pihak ketiga
  kami.
sidebar:
  order: 6
---
# Dokumen Gambaran Keseluruhan Keselamatan Wink

*Kemas Kini Terakhir: 7 September 2024*

*Versi 1.0*

## Tujuan dan Skop

Sebagai sebahagian daripada komitmen berterusan kami terhadap keselamatan dan melindungi data pengguna, kami menjalankan ujian penembusan tetap pada aplikasi web kami. Dokumen ini menggariskan metodologi ujian kami, menyediakan ringkasan penemuan dan menyerlahkan pendekatan kami terhadap peningkatan keselamatan yang berterusan.

Dokumen ini akan dikemas kini apabila laporan baharu dihasilkan atau apabila perubahan ketara berlaku.

Domain dalam skop:\
\*.wink.travel\
\*.trippay.io

## Kekerapan dan Jadual Ujian

Ujian penembusan kami dijalankan setiap tahun, dengan ujian tambahan dijadualkan mengikut keperluan berikutan kemas kini penting pada aplikasi atau infrastruktur. Irama ujian tetap ini memastikan kami sentiasa mendahului ancaman yang berkembang dan mengekalkan persekitaran yang selamat.

## Metodologi Pengujian

Ujian penembusan kami adalah menyeluruh dan merangkumi pelbagai aspek keselamatan, termasuk tetapi tidak terhad kepada:

* **10 Teratas OWASP:** Ujian kami menyasarkan secara khusus risiko keselamatan yang paling kritikal, seperti Suntikan, Pengesahan Patah dan Skrip Silang Tapak (XSS).
* **Ujian Kotak Hitam dan Kotak Kelabu:** Bergantung pada skop, pasukan kami menggunakan metodologi ini untuk mensimulasikan kedua-dua senario serangan luaran dan dalaman.
* **Ujian Automatik dan Manual:** Kami menggunakan Burp Suite Pro, set alat ujian keselamatan terkemuka, untuk menjalankan imbasan keselamatan automatik dan untuk membantu teknik ujian manual untuk mengenal pasti kelemahan yang kompleks dan mendapatkan liputan terbaik yang kami mampu. Untuk pengenalpastian kelemahan yang lebih khusus, beberapa alat khusus digunakan cth. SQLmap.

## Ringkasan Penemuan

Berikut ialah ringkasan peringkat tinggi bagi laporan ujian penembusan terbaharu kami:

* **Jumlah Kerentanan Yang Dikenalpasti:** 2
* **Taburan Keterukan:**
  * Kritikal: 2
* **Jenis Kerentanan yang Dikesan:**
  * Kawalan Akses Pecah
  * Reka Bentuk Tidak Selamat

Untuk penemuan terperinci, sila rujuk laporan penuh.

### Penilaian Risiko dan Kesan

Kedua-dua kelemahan yang ditemui dinilai sebagai kritikal kerana kedua-duanya mungkin mempunyai kesan kewangan yang teruk. Yang pertama membenarkan pengguna yang disahkan berniat jahat untuk mendapatkan kawalan ke atas akaun pembayaran Trippay syarikat lain. Kerentanan kedua membenarkan pengguna berniat jahat mengubah suai jumlah pembayaran yang diperlukan untuk tempahan.

### Usaha Pemulihan dan Tebatan

Kami telah mengambil langkah berikut untuk menangani kelemahan yang dikenal pasti:

* **Tampalan Segera:** Kerentanan kritikal telah ditambal dalam masa 48 jam selepas penemuan.
* **Semakan Kod dan Pengerasan:** Pasukan pembangunan telah melaksanakan kawalan keselamatan tambahan berdasarkan pengesyoran kami..

## Penambahbaikan Berterusan

Ujian penembusan adalah sebahagian daripada strategi kami yang lebih luas untuk peningkatan keselamatan yang berterusan. Penemuan daripada setiap ujian membimbing dasar keselamatan kami, mempengaruhi amalan pembangunan dan memacu peningkatan dalam seni bina keselamatan kami.

## Kepakaran Pasukan

Ujian penembusan kami dijalankan oleh profesional dalaman dengan pengalaman luas merentasi pelbagai projek dan industri. Menggunakan alat dan kaedah terkemuka, pakar kami memastikan aplikasi kami diuji secara menyeluruh terhadap ancaman keselamatan terkini.

## Komitmen terhadap Keselamatan

Kami berdedikasi untuk mengekalkan persekitaran aplikasi yang selamat untuk pengguna dan pihak berkepentingan kami. Usaha berterusan kami dalam ujian dan penambahbaikan keselamatan menunjukkan komitmen kami untuk melindungi daripada ancaman yang berkembang.

## Akses Laporan dan Kemas Kini

Dokumen ini akan dikemas kini secara berterusan apabila laporan ujian penembusan baharu dikeluarkan. Untuk mengakses laporan penuh, sila hubungi kami melalui e-mel di bawah. Kemas kini masa hadapan akan merangkumi kelemahan yang baru dikenal pasti, usaha pemulihan dan pelarasan pada metodologi ujian kami.

Untuk pertanyaan lanjut, sila hubungi security@wink.travel.

