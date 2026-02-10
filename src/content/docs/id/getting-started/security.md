---
title: Keamanan
description: Artikel ini berisi informasi tentang langkah-langkah keamanan yang kami terapkan dan dipublikasikan setiap tahun oleh perusahaan keamanan pihak ketiga kami.
sidebar:
  order: 6
---

*Terakhir Diperbarui: 7 September 2024*

*Versi 1.0*

## Tujuan dan Ruang Lingkup

Sebagai bagian dari komitmen berkelanjutan kami terhadap keamanan dan perlindungan data pengguna, kami melakukan pengujian penetrasi secara rutin pada aplikasi web kami. Dokumen ini menjelaskan metodologi pengujian kami, memberikan ringkasan temuan, dan menyoroti pendekatan kami untuk peningkatan keamanan secara berkelanjutan.

Dokumen ini akan diperbarui saat laporan baru dibuat atau ketika terjadi perubahan signifikan.

Domain dalam ruang lingkup:  
\*.wink.travel  
\*.trippay.io

## Frekuensi dan Jadwal Pengujian

Pengujian penetrasi kami dilakukan setiap tahun, dengan pengujian tambahan dijadwalkan sesuai kebutuhan setelah pembaruan signifikan pada aplikasi atau infrastruktur. Jadwal pengujian rutin ini memastikan kami tetap selangkah lebih maju dari ancaman yang berkembang dan menjaga lingkungan yang aman.

## Metodologi Pengujian

Pengujian penetrasi kami komprehensif dan mencakup berbagai aspek keamanan, termasuk namun tidak terbatas pada:

* **OWASP Top 10:** Pengujian kami secara khusus menargetkan risiko keamanan paling kritis, seperti Injection, Broken Authentication, dan Cross-Site Scripting (XSS).  
* **Pengujian Black Box dan Grey Box:** Tergantung pada ruang lingkup, tim kami menggunakan metodologi ini untuk mensimulasikan skenario serangan eksternal dan internal.  
* **Pengujian Otomatis dan Manual:** Kami menggunakan Burp Suite Pro, rangkaian alat pengujian keamanan terkemuka, untuk melakukan pemindaian keamanan otomatis dan membantu teknik pengujian manual guna mengidentifikasi kerentanan kompleks dan mendapatkan cakupan terbaik. Untuk identifikasi kerentanan yang lebih spesifik, beberapa alat khusus digunakan misalnya SQLmap.

## Ringkasan Temuan

Berikut adalah ringkasan tingkat tinggi dari laporan pengujian penetrasi terbaru kami:

* **Total Kerentanan yang Ditemukan:** 2  
* **Distribusi Tingkat Keparahan:**  
  * Kritis: 2  
* **Jenis Kerentanan yang Terdeteksi:**  
  * Broken Access Control  
  * Insecure Design

Untuk temuan lebih rinci, silakan merujuk pada laporan lengkap.

### Penilaian Risiko dan Dampak

Kedua kerentanan yang ditemukan dinilai kritis karena keduanya dapat memiliki dampak finansial yang parah. Yang pertama memungkinkan pengguna terautentikasi yang berbahaya untuk mengendalikan akun pembayaran Trippay perusahaan lain. Kerentanan kedua memungkinkan pengguna berbahaya memodifikasi jumlah pembayaran yang diperlukan untuk sebuah pemesanan.

### Upaya Perbaikan dan Mitigasi

Kami telah mengambil langkah-langkah berikut untuk mengatasi kerentanan yang diidentifikasi:

* **Patch Segera:** Kerentanan kritis telah diperbaiki dalam waktu 48 jam setelah ditemukan.  
* **Review Kode dan Penguatan:** Tim pengembang telah menerapkan kontrol keamanan tambahan berdasarkan rekomendasi kami.

## Peningkatan Berkelanjutan

Pengujian penetrasi adalah bagian dari strategi kami yang lebih luas untuk peningkatan keamanan secara berkelanjutan. Temuan dari setiap pengujian memandu kebijakan keamanan kami, memengaruhi praktik pengembangan, dan mendorong peningkatan dalam arsitektur keamanan kami.

## Keahlian Tim

Pengujian penetrasi kami dilakukan oleh profesional internal dengan pengalaman luas di berbagai proyek dan industri. Dengan menggunakan alat dan metode terdepan, ahli kami memastikan aplikasi kami diuji secara menyeluruh terhadap ancaman keamanan terbaru.

## Komitmen terhadap Keamanan

Kami berkomitmen untuk menjaga lingkungan aplikasi yang aman bagi pengguna dan pemangku kepentingan kami. Upaya berkelanjutan kami dalam pengujian dan peningkatan keamanan menunjukkan komitmen kami untuk melindungi dari ancaman yang terus berkembang.

## Akses Laporan dan Pembaruan

Dokumen ini akan terus diperbarui saat laporan pengujian penetrasi baru diterbitkan. Untuk mengakses laporan lengkap, silakan hubungi kami melalui email di bawah ini. Pembaruan di masa depan akan mencakup kerentanan yang baru diidentifikasi, upaya perbaikan, dan penyesuaian metodologi pengujian kami.

Untuk pertanyaan lebih lanjut, silakan hubungi security@wink.travel.
