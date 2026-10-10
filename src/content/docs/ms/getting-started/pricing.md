---
title: Harga
description: Sebahagian besar Wink adalah percuma. Anda membayar yuran kecil setiap tempahan, dan yuran penggunaan bayar-semasa untuk beberapa ciri premium.
sidebar:
  order: 4
---

Wink tidak mempunyai langganan, tiada tempat duduk dan tiada yuran penyediaan. Sebahagian besar platform adalah percuma, dan hanya ada dua perkara yang anda akan bayar:

1. **Yuran platform setiap tempahan, ditambah pemprosesan kad pada kos** — hanya apabila tempahan dibuat.
2. **Yuran penggunaan bayar-semasa** — pada beberapa ciri premium yang menelan kos setiap kali ia dijalankan, setiap satu dengan elaun bulanan percuma.

## Apa yang percuma

Ini tidak dikenakan kos, selama-lamanya, tanpa elaun dan tanpa pengukuran:

- **Enjin tempahan** — di laman web anda sendiri, di halaman WinkLinks anda, atau di mana-mana sahaja anda sematkannya.
- **Pengurusan hartanah** — kandungan, foto, kadar, pelan kadar, ketersediaan, promosi dan polisi.
- **Alat afiliasi** — pautan boleh dikongsi, senarai terpilih, grid, peta, kad dan widget yang boleh disematkan.
- **Alat ejen pelancongan** — carian, kadar khusus dan tempahan bagi pihak pelanggan anda.
- **WinkLinks** — tuntut URL vanity anda, bina halaman anda dan terbitkan seberapa kerap yang anda mahu.
- **Catatan sosial manual** — apa sahaja yang anda tulis sendiri, di mana-mana rangkaian yang disambungkan.
- **Analitik, papan pendahulu, tuntutan, tetapan** dan pengurusan akaun.
- **API Pengguna dan Enjin Tempahan**, termasuk titik akhir carian dan autolengkap mereka. Pada **Partner API**, panggilan Lookup dan Content diukur pada satu unit setiap satu (lihat [Penggunaan](#what-is-and-isnt-metered) di bawah).

## Tempahan

Wink menyokong dua model: Wink mengutip pembayaran untuk hotel, dan ejen pelancongan berlesen bertindak sebagai pedagang rekod.

### Model 1 — Wink mengutip untuk hotel

Wink mengutip pembayaran tetamu sebagai ejen kutipan pembayaran terhad hotel. Hotel adalah pedagang rekod, dan nama hotel muncul pada penyata kad tetamu.
Model ini terpakai kepada 95% daripada semua tempahan.

#### Pecahan

:::note[Yuran platform]
Wink mengenakan yuran platform 1.5% / tempahan. Ini meliputi penyelenggaraan platform dan membolehkan kami memberikan semua yang disenaraikan di atas secara percuma. Ia tidak dikenakan pada tempahan yang dibatalkan.
:::

:::note[Pemprosesan kad]
Yuran pemprosesan pembayaran yang dikenakan untuk mengutip pembayaran tetamu disalurkan kepada hotel pada kos, tanpa margin. Ia berbeza mengikut kad tetamu dan kaedah pembayaran, dan jumlah tepat dipaparkan dalam bahagian Perakaunan setiap tempahan. Jika tempahan dibatalkan atau dikembalikan wang, sebarang yuran yang disimpan oleh pemproses masih dikenakan; jika tiada yuran dikenakan, kami juga tidak mengenakan yuran.
:::

:::note[Pengagihan dana]
Terdapat yuran yang berkaitan dengan penghantaran dana ke akaun anda. Ini bergantung pada kaedah pengagihan yang anda pilih. Kami kini menyokong:

- **Pemindahan bank** — Kos bergantung pada negara anda berada, dari mana dana dihantar, dan sebarang penukaran mata wang yang dikenakan. Yuran pembayaran dan sebarang kos penukaran dibayar oleh penerima, pada kos. Kami menyediakan kalkulator sebut harga yang boleh anda gunakan apabila anda mempunyai dana tersedia dalam akaun anda.

Jika anda mahu kami menyokong kaedah pembayaran lain, hantarkan e-mel kepada kami.
:::

### Model 2 — Ejen pelancongan sebagai pedagang rekod

Model ini hanya tersedia untuk agensi pelancongan yang memegang lesen agensi pelancongan di rantau mereka dan yang ingin menjadi pedagang rekod. Ia tersedia untuk rakan kongsi API sahaja, tempahan melalui [Partner API](/ms/integrations/partner-api/), dan memerlukan kelulusan bertulis terlebih dahulu daripada Wink. Sesetengah ejen pelancongan berdaftar kami ingin bertanggungjawab mengendalikan pembayaran dan pengagihan dana kepada hotel. Di bawah model ini, mereka bertanggungjawab terhadap dana dan memegang lesen yang diperlukan untuk beroperasi di negara mereka.

#### Pecahan

:::note[Yuran platform]
Wink mengenakan yuran platform 1.5% / tempahan. Ini meliputi penyelenggaraan platform dan membolehkan kami memberikan semua yang disenaraikan di atas secara percuma.
:::

Menggunakan model ini, ejen pelancongan membayar yuran 1.5% Wink serta sebarang penggunaan Partner API melebihi elaun percuma, yang akan ditagih setiap bulan.

## Apa yang rakan kongsi bayar

Untuk rakan kongsi yang menghantar tempahan: pencipta, afiliasi, platform, pembangun dan ejen pelancongan. Perkongsian adalah tidak eksklusif, tanpa wilayah.

| | Pembayaran dikutip untuk hotel (kebanyakan rakan kongsi) | Anda adalah pedagang rekod (rakan kongsi API sahaja) |
|---|---|---|
| Yuran lesen atau wilayah | Tiada | Tiada |
| Yuran penyediaan | Tiada | Tiada |
| Yuran langganan atau bulanan | Tiada | Tiada |
| Komitmen minimum atau tempoh | Tiada | Tiada. Had kredit dikenakan. |
| Akses Partner API | 10,000 malam hotel sebulan percuma, kemudian $0.0001 setiap malam hotel. Bayar-semasa dimatikan secara lalai; pada elaun percuma, panggilan akan kembali `429`. | Sama |
| Yuran transaksi | Tiada. Anda memperoleh komisen (10% lalai). | Yuran Tempahan 1.5% atas nilai tempahan, ditagih bulanan dalam USD, perlu dibayar dalam 15 hari. Dengan bayar-semasa diaktifkan, penggunaan Partner API akan ditagih dalam invois bulanan kedua. |
| Yuran sokongan | Tiada | Tiada |
| Caj lain | Yuran pemindahan pembayaran, pada kos | Mungkin prabayar atau deposit semasa kelulusan. Faedah 1.5% sebulan hanya pada invois tertunggak. |
| Bila yuran berubah | Notis 30 hari; hanya terpakai pada tempahan selepas perubahan | Sama. Wink juga boleh mengubah had kredit anda dengan notis. |

Jalur pedagang rekod memerlukan kelulusan bertulis terlebih dahulu daripada Wink. Lihat [Model 2](#model-2--travel-agent-as-merchant-of-record) di atas dan halaman [Partner API](/ms/integrations/partner-api/).

## Penggunaan (bayar-semasa)

Beberapa ciri menelan kos setiap kali ia dijalankan — AI generatif, API sosial pihak ketiga, dan penyajian harga langsung pada skala besar. Daripada menggabungkan ini ke dalam pelan bulanan yang mungkin anda tidak gunakan, anda hanya membayar untuk apa yang anda gunakan, dan hanya selepas anda menggunakan elaun bulanan percuma.

| Ciri | Percuma sebulan | Kemudian | Unit bil |
| -- | -- | -- | -- |
| Catatan sosial — imej | 1 | $1.50 | Satu catatan diterbitkan |
| Catatan sosial — imej dijana AI | 0 | $2.50 | Satu catatan diterbitkan |
| Catatan sosial — video dipertingkat AI | 0 | $4.00 | Satu catatan diterbitkan |
| Catatan sosial — video dijana AI | 0 | $14.00 | Satu catatan diterbitkan |
| Balasan AI kepada komen atau DM | 5 | $0.05 | Satu balasan |
| Jawapan chatbot | 5 | $0.05 | Satu jawapan |
| Partner API | 10,000 | $0.0001 | Satu malam hotel |

Harga dalam USD. Elaun percuma diberikan **setiap akaun**, bukan setiap pengguna, dan diset semula pada 1 haribulan setiap bulan (UTC).

### Cara catatan dihargai

Catatan dihargai berdasarkan kandungannya, kerana itulah kos kami untuk membuatnya. Imej statik murah; video tidak; apa sahaja yang dijana dengan AI menelan kos lebih ketara daripada foto yang anda sediakan sendiri.

- **Elaun percuma hanya meliputi catatan imej standard.** Anda mendapat satu setiap akaun setiap bulan. Catatan video dan media dijana AI akan dikenakan bayaran dari catatan pertama — tiada elaun percuma untuk kategori ini, jadi hartanah yang menyiarkan video harus menjangkakan caj pada bulan pertama.
- **Video menang.** Jika catatan mengandungi sebarang video, keseluruhan catatan dikenakan pada kadar video. Catatan yang menggabungkan imej dan video adalah catatan video.
- **Asal AI menetapkan kategori.** Media yang anda sediakan — foto dan video anda sendiri, atau apa sahaja dari perpustakaan kandungan Wink anda — dikenakan pada kadar standard. Media yang kami jana untuk anda dikenakan pada kadar AI.

### Apa yang diukur dan tidak diukur

- Hanya catatan **dijana** yang diterbitkan ke rangkaian pihak ketiga (Facebook, Instagram) yang dikenakan bayaran. Catatan yang anda tulis sendiri adalah percuma, ke mana sahaja ia pergi.
- **Penerbitan ke WinkLinks sentiasa percuma**, dijana atau tidak.
- Anda dikenakan bayaran **pada masa terbit**, bukan setiap cubaan. Menghasilkan semula draf sehingga anda berpuas hati tidak menambah bil anda — anda bayar sekali untuk catatan yang anda benar-benar terbitkan. Cubaan tidak tanpa had: setiap catatan membenarkan kira-kira 10 penghasilan semula untuk imej dan 3 untuk video, yang mencerminkan kos kami untuk menghasilkan mereka. Anda akan melihat berapa banyak yang tinggal semasa anda bekerja.
- Pada Partner API, satu **malam hotel** adalah satu hotel yang dinilai untuk satu malam penginapan — *bukan* satu panggilan API. Carian yang memulangkan 20 hotel untuk penginapan 3 malam adalah 60 malam hotel dari satu permintaan. Panggilan Content dan Lookup (carian destinasi dan autolengkap) menelan satu unit setiap satu, tidak kira apa yang dipulangkan. Titik akhir akaun adalah percuma.

### Mengaktifkannya

Bayar-semasa dimatikan secara lalai. Semua orang mendapat elaun percuma tanpa perlu melakukan apa-apa.

Untuk melebihi elaun, **pemilik** akaun mengaktifkan bayar-semasa dan memilih akaun mana yang diukur. Penggunaan dari semua akaun yang diaktifkan anda digabungkan ke dalam **satu invois bulanan**, yang boleh anda bayar secara automatik dengan kad atau terima sebagai invois untuk anda bayar sendiri.

Setelah diaktifkan, penggunaan anda diukur tetapi **tidak pernah disekat** — anda tidak akan mencapai had kadar untuk membelanjakan wang dengan kami.

:::note[Jika anda tidak mengaktifkannya]
Tiada apa yang rosak dan tiada bayaran dikenakan. Anda hanya berhenti pada elaun percuma untuk bulan itu: catatan dijana tidak akan diterbitkan dan panggilan Partner API akan kembali `429` sehingga elaun diset semula.
:::

### Status bil

| Status | Maksudnya |
| -- | -- |
| Dalam keadaan baik | Segala-galanya berfungsi seperti biasa. |
| Lewat bayar | Pembayaran gagal dan sedang dicuba semula. Ciri anda terus berfungsi dalam tempoh ini. |
| Digantung | Invois tidak dibayar sehingga tamat tempoh. Tindakan yang dikenakan bayaran disekat sehingga ia diselesaikan; ciri percuma terus berfungsi seperti biasa. |

:::tip[Harga langsung]
Harga unit dan elaun percuma sentiasa dipaparkan dalam Portal, terus dari sistem bil kami, supaya anda boleh menyemaknya sebelum membuat komitmen. Lihat [Billing](/ms/portal/plan) untuk mengaktifkan bayar-semasa, pilih akaun anda, dan jejak penggunaan serta invois bulan ini. Lihat [Social](/ms/portal/social/what-is-social) untuk bagaimana jumlah catatan mempengaruhi perbelanjaan anda.
:::

## Kesan platform

Akhir sekali, semasa kami terus berkembang dari segi saiz dan tempahan, kami ingin berkongsi sebahagian kesan platform dengan anda. Lebih banyak tempahan membawa peluang untuk diskaun volum dari pemproses pembayaran kami. Oleh kerana pemprosesan kad disalurkan pada kos, sebarang penjimatan yang kami rundingkan terus diberikan kepada hotel.

Sertai Wink hari ini dan temui cara baru yang menguntungkan untuk menjalankan perniagaan dalam industri hospitaliti!
