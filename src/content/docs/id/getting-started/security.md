---
title: Security
description: >-
  Artikel ini berisi informasi tentang langkah-langkah keamanan yang kami
  terapkan dan diterbitkan setiap tahun oleh firma keamanan pihak ketiga kami.
sidebar:
  order: 6
---
# Dokumen Ikhtisar Keamanan Wink

*Terakhir Diperbarui: 7 September 2024*

*Versi 1.0*

## Tujuan dan Ruang Lingkup

Sebagai bagian dari komitmen berkelanjutan kami terhadap keamanan dan perlindungan data pengguna, kami melakukan pengujian penetrasi secara berkala pada aplikasi web kami. Dokumen ini menguraikan metodologi pengujian kami, memberikan ringkasan temuan, dan menyoroti pendekatan kami terhadap peningkatan keamanan berkelanjutan.

Dokumen ini akan diperbarui saat laporan baru dibuat atau saat terjadi perubahan signifikan.

Cakupan domain:\
\*.kedip.perjalanan\
\*.trippay.io

## Frekuensi dan Jadwal Pengujian

Pengujian penetrasi kami dilakukan setiap tahun, dengan pengujian tambahan yang dijadwalkan sesuai kebutuhan setelah pembaruan signifikan pada aplikasi atau infrastruktur. Irama pengujian rutin ini memastikan kami tetap unggul dalam menghadapi ancaman yang terus berkembang dan menjaga lingkungan yang aman.

## Metodologi Pengujian

Pengujian penetrasi kami komprehensif dan mencakup berbagai aspek keamanan, termasuk namun tidak terbatas pada:

* **10 Teratas OWASP:**&#x50;engujian kami secara khusus menargetkan risiko keamanan yang paling kritis, seperti Injeksi, Autentikasi Rusak, dan Cross-Site Scripting (XSS).
* **Pengujian Kotak Hitam dan Kotak Abu-abu:**&#x42;ergantung pada cakupannya, tim kami memanfaatkan metodologi ini untuk mensimulasikan skenario serangan eksternal dan internal.
* **Pengujian Otomatis dan Manual:**&#x4B;ami menggunakan Burp Suite Pro, perangkat pengujian keamanan terkemuka, untuk melakukan pemindaian keamanan otomatis dan membantu teknik pengujian manual untuk mengidentifikasi kerentanan yang kompleks dan mendapatkan cakupan terbaik yang kami bisa. Untuk identifikasi kerentanan yang lebih spesifik, beberapa alat khusus digunakan misalnya SQLmap.

## Ringkasan Temuan

Berikut ini adalah ringkasan tingkat tinggi dari laporan pengujian penetrasi terbaru kami:

* **Total Kerentanan yang Teridentifikasi:**&#x32;
* **Distribusi Tingkat Keparahan:**
  * Kritis: 2
* **Jenis Kerentanan yang Terdeteksi:**
  * Kontrol Akses Rusak
  * Desain Tidak Aman

Untuk temuan terperinci, silakan lihat laporan lengkapnya.

### Peringkat Risiko dan Dampak

Kedua kerentanan yang ditemukan dinilai kritis karena keduanya dapat menimbulkan dampak finansial yang serius. Kerentanan pertama memungkinkan pengguna yang diautentikasi jahat untuk mengendalikan akun pembayaran Trippay milik perusahaan lain. Kerentanan kedua memungkinkan pengguna jahat untuk mengubah jumlah pembayaran yang diperlukan untuk pemesanan.

### Upaya Pemulihan dan Mitigasi

Kami telah mengambil langkah-langkah berikut untuk mengatasi kerentanan yang teridentifikasi:

* **Perbaikan Segera:**&#x4B;erentanan kritis telah ditambal dalam waktu 48 jam sejak ditemukan.
* **Tinjauan dan Pengerasan Kode:**&#x54;im pengembangan telah menerapkan kontrol keamanan tambahan berdasarkan rekomendasi kami.

## Peningkatan Berkelanjutan

Pengujian penetrasi merupakan bagian dari strategi kami yang lebih luas untuk peningkatan keamanan berkelanjutan. Temuan dari setiap pengujian memandu kebijakan keamanan kami, memengaruhi praktik pengembangan, dan mendorong peningkatan dalam arsitektur keamanan kami.

## Keahlian Tim

Pengujian penetrasi kami dilakukan oleh seorang profesional internal dengan pengalaman luas di berbagai proyek dan industri. Dengan menggunakan alat dan metode terkemuka, pakar kami memastikan aplikasi kami diuji secara menyeluruh terhadap ancaman keamanan terkini.

## Komitmen terhadap Keamanan

Kami berdedikasi untuk menjaga lingkungan aplikasi yang aman bagi pengguna dan pemangku kepentingan kami. Upaya berkelanjutan kami dalam pengujian dan peningkatan keamanan menunjukkan komitmen kami untuk melindungi dari ancaman yang terus berkembang.

## Akses Laporan dan Pembaruan

Dokumen ini akan terus diperbarui seiring dengan terbitnya laporan uji penetrasi baru. Untuk mengakses laporan lengkap, silakan hubungi kami melalui email di bawah ini. Pembaruan mendatang akan mencakup kerentanan yang baru diidentifikasi, upaya perbaikan, dan penyesuaian terhadap metodologi pengujian kami.

Untuk pertanyaan lebih lanjut, silakan menghubungi security@wink.travel.

