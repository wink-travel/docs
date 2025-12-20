---
title: Kısaca
description: Bu makale, rezervasyon motoru hakkında bilmek istediğiniz her şeyi anlatıyor.
sidebar:
  order: 0
---

Wink'te sorumlulukları şu şekilde ayırıyoruz:

- [Extranet](/tr/extranet/what-is-extranet), tedarikçilerin envanteri yönetmesiyle ilgilenir.
- [Studio](/tr/studio/what-is-studio), bağlı kuruluşların içeriği yönetmesiyle ilgilenir.
- `Booking Engine`, `Extranet`'te oluşturulan envantere dayalı olarak `Studio`'da oluşturulan içeriği alır ve rezervasyona açar.
- [Payment](/tr/payment/what-is-trip-pay), [Wink gibi platformlar üzerinden] rezervasyon yapan gezginlerden tahsilat / iade işlemleri ve tedarikçilere ödeme yapma ile ilgilenir.

Rezervasyon motoru platformumuzun merkezindedir.

Sorumlulukları şunlardır:

- Dövizleri yönetmek ve döviz kurlarını güncel tutmak.
- Fiyat sağlayıcılarına fiyat verilerini göndermeleri için bir yol sunmak.
- Arama verilerini yönetmek. *örneğin bölgeler, ülkeler, destinasyonlar, tesisler vb.*
- Dilleri yönetmek.
- Kullanıcı etkileşimleri, olaylar ve API çağrıları bazında analizler oluşturmak.
- İstenen format, dil ve para biriminde rezervasyona açık envanteri sunmak, örneğin:
    - Facebook'ta bir [paylaşılabilir bağlantı](/tr/studio/shareable-links).
    - https://ota.wink.travel adresinde o otel için envanter içeren bir otel açılış sayfası.
    - Bağlı kuruluş envanteri içeren bir [kart](/tr/studio/cards).
    - [WinkLinks](/tr/link-manager/wink-links) hesabınızdaki bir [harita](/tr/studio/maps).
    - Uzaktaki bir seyahat acentesi sisteminden bir [API çağrısı](/tr/developers/apis).
- Gezginlere şu imkanları sağlamak:
    - Seyahat envanteri aramak.
    - Mevcut envanteri rezerve etmek.
    - [Rezervasyonlarını ve yorumlarını](/tr/booking-engine/bookings) yönetmek.
    - Gelecekte rezerve etmek istedikleri şeylerin [liste](/tr/booking-engine/bucket-list) yönetimi.
    - [Seyahat profillerini](/tr/booking-engine/travel-preferences) yönetmek. *örneğin Alerjiler, acil durum iletişim bilgileri vb.*

Rezervasyon motoru, https://ota.wink.travel üzerinden sunduğumuz, otellerin ve bağlı kuruluşların ürünlerini gezginlere satmaları için yüksek derecede özelleştirilebilir bir web sitesi olan yeniden kullanılabilir işlevsellikler koleksiyonudur.

Daha fazla özgürlük isteyen entegratörler, aynı özelliklere [WordPress eklentimiz](/tr/developers/wordpress/), [Web Bileşenlerimiz](/tr/developers/web-components) ve [API'lerimiz](/tr/developers/apis) aracılığıyla erişebilirler.

Rezervasyon motorunun sundukları hakkında daha fazla bilgi için sonraki bölümlere devam edin.

## Daha fazla okuma

- [WordPress eklentimiz](/tr/developers/wordpress/) hakkında bilgi edinin.
- [Web Bileşenlerimiz](/tr/developers/web-components) hakkında bilgi edinin.
- [API'lerimiz](/tr/developers/apis) hakkında bilgi edinin.
