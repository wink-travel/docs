---
title: Fiyatlandırma
description: Wink'in çoğu ücretsizdir. Her rezervasyon için küçük bir ücret ve birkaç premium özellik için kullandıkça öde kullanım ücreti ödersiniz.
sidebar:
  order: 4
---

Wink'te abonelik, koltuk veya kurulum ücreti yoktur. Platformun büyük çoğunluğu ücretsizdir ve yalnızca iki şey için ödeme yaparsınız:

1. **Her rezervasyon için platform ücreti ve maliyet üzerinden kart işleme ücreti** — yalnızca rezervasyon yapıldığında.
2. **Kullandıkça öde kullanım ücretleri** — her çalıştırıldığında bize maliyeti olan birkaç premium özellik için, her birinin aylık ücretsiz kotası vardır.

## Neler ücretsiz

Bunlar sonsuza dek, kota veya ölçüm olmadan hiçbir ücret talep edilmeden sunulur:

- **Rezervasyon motoru** — kendi sitenizde, WinkLinks sayfanızda veya başka bir yerde gömülü olarak.
- **Mülk yönetimi** — içerik, fotoğraflar, fiyatlar, fiyat planları, müsaitlik, promosyonlar ve politikalar.
- **Ortak araçları** — paylaşılabilir bağlantılar, seçilmiş listeler, ızgaralar, haritalar, kartlar ve gömülebilir widget'lar.
- **Seyahat acentesi araçları** — arama, özel fiyatlar ve müşterileriniz adına rezervasyon.
- **WinkLinks** — özel URL'nizi talep edin, sayfanızı oluşturun ve istediğiniz sıklıkta yayınlayın.
- **Manuel sosyal paylaşımlar** — kendinizin yazdığı her şey, bağlı herhangi bir ağda.
- **Analitik, lider tabloları, talepler, ayarlar** ve hesap yönetimi.
- **Tüketici ve Rezervasyon Motoru API'leri**, arama ve otomatik tamamlama uç noktaları dahil. **Partner API**'de, Arama ve İçerik çağrıları her biri bir birim olarak ölçülür (aşağıdaki [Kullanım](#what-is-and-isnt-metered) bölümüne bakınız).

## Rezervasyonlar

Wink iki modeli destekler: Wink otel için ödemeyi toplar veya lisanslı bir seyahat acentesi kayıtlı satıcı olarak hareket eder.

### Model 1 — Wink otel için tahsilat yapar

Wink, misafirin ödemesini otelin sınırlı ödeme tahsilat acentesi olarak toplar. Otel kayıtlı satıcıdır ve otelin adı misafirin kart ekstresinde görünür.  
Bu model tüm rezervasyonların %95'i için geçerlidir.

#### Detaylar

:::note[Platform ücreti]
Wink, rezervasyon başına %1,5 platform ücreti alır. Bu, platform bakımını kapsar ve yukarıda listelenen her şeyi ücretsiz sunmamızı sağlar. İptal edilen rezervasyonlarda ücret alınmaz.
:::

:::note[Kart işleme]
Misafirin ödemesini toplamak için alınan ödeme işleme ücreti, kar olmadan maliyet üzerinden otele yansıtılır. Ücret, misafirin kartı ve ödeme yöntemine göre değişir ve her rezervasyonun Muhasebe bölümünde tam tutar görünür. Rezervasyon iptal veya iade edilirse, işlemci tarafından tutulan ücret yine de alınır; işlemci ücret almazsa biz de almayız.
:::

:::note[Fonların dağıtımı]
Hesabınıza para gönderme ile ilgili ücretler vardır. Bu, seçtiğiniz ödeme yöntemine bağlıdır. Şu anda desteklediğimiz yöntemler:

- **Banka transferi** — Ülkenize, fonların gönderildiği yere ve varsa döviz dönüşümüne bağlı olarak maliyet değişir. Ödeme ücreti ve dönüşüm maliyeti, maliyet üzerinden alıcı tarafından ödenir. Hesabınızda kullanılabilir fon olduğunda kullanabileceğiniz bir teklif hesaplayıcı sunuyoruz.

Başka bir ödeme yöntemi desteklememizi isterseniz, bize e-posta gönderin.
:::

### Model 2 — Seyahat acentesi kayıtlı satıcı olarak

Bu model yalnızca bölgesinde seyahat acentesi lisansına sahip ve kayıtlı satıcı olmak isteyen seyahat acentelerine açıktır. Yalnızca API ortakları için, [Partner API](/tr/integrations/partner-api/) üzerinden rezervasyon yaparak ve Wink'in önceden yazılı onayı ile kullanılabilir. Bazı kayıtlı seyahat acenteleri ödemeyi yönetmek ve otellere fon dağıtımından sorumlu olmak ister. Bu modelde, fonlardan sorumludurlar ve ülkelerinde faaliyet göstermek için gerekli lisanslara sahiptirler.

#### Detaylar

:::note[Platform ücreti]
Wink, rezervasyon başına %1,5 platform ücreti alır. Bu, platform bakımını kapsar ve yukarıda listelenen her şeyi ücretsiz sunmamızı sağlar.
:::

Bu modeli kullanan seyahat acenteleri, Wink'in %1,5 ücretini ve ücretsiz kotayı aşan Partner API kullanımını aylık olarak faturalandırılır.

## Ortakların ödediği ücretler

Rezervasyon gönderen ortaklar için: içerik oluşturucular, ortaklar, platformlar, geliştiriciler ve seyahat acenteleri. Ortaklıklar münhasır değildir, bölge kısıtlaması yoktur.

| | Otel için ödeme toplanıyor (çoğu ortak) | Siz kayıtlı satıcı oluyorsunuz (yalnızca API ortakları) |
|---|---|---|
| Lisans veya bölge ücreti | Yok | Yok |
| Kurulum ücreti | Yok | Yok |
| Abonelik veya aylık ücret | Yok | Yok |
| Minimum taahhüt veya süre | Yok | Yok. Kredi limiti uygulanır. |
| Partner API erişimi | Ayda 10.000 otel-gecesi ücretsiz, sonrası otel-gecesi başına $0.0001. Kullandıkça öde varsayılan kapalıdır; ücretsiz kota dolunca çağrılar `429` döner. | Aynı |
| İşlem ücreti | Yok. Komisyon kazanırsınız (%10 varsayılan). | Rezervasyon tutarının %1,5'i, aylık USD fatura, 15 gün içinde ödenir. Kullandıkça öde açık ise Partner API kullanımı ikinci aylık faturada gelir. |
| Destek ücreti | Yok | Yok |
| Diğer ücretler | Ödeme transfer ücretleri, maliyet üzerinden | Onayda ön ödeme veya depozito olabilir. Gecikmiş faturalar için aylık %1,5 faiz uygulanır. |
| Ücret değişikliği zamanı | 30 gün önceden bildirim; sadece değişiklik sonrası yapılan rezervasyonlara uygulanır | Aynı. Wink kredi limitinizi bildirimle değiştirebilir. |

Kayıtlı satıcı yolu için Wink'in önceden yazılı onayı gerekir. Yukarıdaki [Model 2](#model-2--travel-agent-as-merchant-of-record) ve [Partner API](/tr/integrations/partner-api/) sayfasına bakınız.

## Kullanım (kullandıkça öde)

Bazı özellikler her çalıştırıldığında bize maliyet çıkar — üretken yapay zeka, üçüncü taraf sosyal API'leri ve ölçekli canlı fiyat sunumu gibi. Bunları aylık plana dahil etmek yerine, yalnızca gerçekten kullandığınız kadar ödersiniz ve ücretsiz aylık kotayı aşınca ücretlendirilirsiniz.

| Özellik | Aylık ücretsiz | Sonrası | Faturalandırılan birim |
| -- | -- | -- | -- |
| Sosyal paylaşım — resim | 1 | $1.50 | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile oluşturulmuş resim | 0 | $2.50 | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile geliştirilmiş video | 0 | $4.00 | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile oluşturulmuş video | 0 | $14.00 | Yayınlanan bir paylaşım |
| Yorum veya DM'ye yapay zeka yanıtı | 5 | $0.05 | Bir yanıt |
| Sohbet botu cevabı | 5 | $0.05 | Bir cevap |
| Partner API | 10.000 | $0.0001 | Bir otel-gecesi |

Fiyatlar USD cinsindendir. Ücretsiz kota **hesap başına** verilir, kullanıcı başına değil ve her ayın 1'inde (UTC) sıfırlanır.

### Paylaşımlar nasıl fiyatlandırılır

Paylaşımlar içeriğine göre fiyatlandırılır, çünkü yapmaları bize maliyet çıkar. Sabit bir resim ucuzdur; video pahalıdır; yapay zeka ile oluşturulan içerik, sizin sağladığınız fotoğraftan çok daha maliyetlidir.

- **Ücretsiz kota yalnızca standart resim paylaşımlarını kapsar.** Her hesap için ayda bir tane ücretsizdir. Video paylaşımları ve yapay zeka ile oluşturulan medya ilk paylaşımda ücretlendirilir — bu katmanlarda ücretsiz kota yoktur, bu yüzden video paylaşan bir mülk ilk ay ücret beklemelidir.
- **Video önceliklidir.** Paylaşımda herhangi bir video varsa, tüm paylaşım video oranından ücretlendirilir. Resim ve video karışımı paylaşım video paylaşımıdır.
- **Yapay zeka kökeni katmanı belirler.** Sizden gelen medya — kendi fotoğraf ve videolarınız veya Wink içerik kütüphanesinden — standart oranla ücretlendirilir. Bizim sizin için oluşturduğumuz medya yapay zeka oranıyla ücretlendirilir.

### Neler ölçülür ve neler ölçülmez

- Yalnızca **üretilmiş** ve üçüncü taraf ağa (Facebook, Instagram) yayınlanan paylaşımlar ücretlendirilir. Kendi yazdığınız paylaşım ücretsizdir, nereye giderse gitsin.
- **WinkLinks'e yayınlama her zaman ücretsizdir**, üretilmiş olsun ya da olmasın.
- Ücretlendirme **yayın anında** yapılır, deneme başına değil. Taslağı istediğiniz kadar yeniden oluşturmak faturaya eklenmez — yalnızca gerçekten yayınladığınız paylaşım için bir kez ödersiniz. Denemeler sınırsız değildir: her paylaşım resim için yaklaşık 10, video için 3 yeniden oluşturma hakkı verir, bu bizim üretim maliyetimizi yansıtır. Kalan hakkınızı çalışırken görebilirsiniz.
- Partner API'de, bir **otel-gecesi** bir otelin bir gece konaklamasıdır — *bir API çağrısı değil*. 3 gecelik konaklama için 20 otel döndüren arama, tek istekte 60 otel-gecesi sayılır. İçerik ve Arama (varış yeri arama ve otomatik tamamlama) çağrıları ne döndürürse döndürsün bir birim olarak ücretlendirilir. Hesap uç noktaları ücretsizdir.

### Açma

Kullandıkça öde varsayılan kapalıdır. Herkes ücretsiz kotayı herhangi bir işlem yapmadan alır.

Kotayı aşmak için, bir hesabın **sahibi** kullandıkça ödeyi açar ve hangi hesapların ölçüleceğini seçer. Tüm etkin hesaplarınızın kullanımı **tek aylık faturada** toplanır, kartla otomatik ödenebilir veya fatura olarak alıp kendiniz ödeyebilirsiniz.

Açıldıktan sonra kullanım ölçülür ama **asla sınırlandırılmaz** — bizimle para harcarken hız limitiyle karşılaşmazsınız.

:::note[Açmazsanız]
Hiçbir şey bozulmaz ve ücret alınmaz. O ay için ücretsiz kotada kalırsınız: üretilmiş paylaşımlar yayınlanmaz ve Partner API çağrıları `429` döner, kota sıfırlanana kadar.
:::

### Faturalandırma durumu

| Durum | Anlamı |
| -- | -- |
| İyi durumda | Her şey normal çalışıyor. |
| Gecikmiş | Bir ödeme başarısız oldu ve tekrar deneniyor. Bu süre zarfında özellikleriniz çalışmaya devam eder. |
| Askıya alınmış | Fatura tamamen ödenmedi. Ücretli işlemler bloke edilir; ücretsiz özellikler normal devam eder. |

:::tip[Canlı fiyatlar]
Birim fiyatlar ve ücretsiz kotalar Portal'da, faturalandırma sistemimizden doğrudan gösterilir, böylece taahhütte bulunmadan önce kontrol edebilirsiniz. Kullandıkça ödeyi açmak, hesap seçmek ve ay içi kullanım ile faturaları takip etmek için [Faturalandırma](/tr/portal/plan) sayfasına bakın. Paylaşım hacminin harcamalarınızı nasıl etkilediğini görmek için [Sosyal](/tr/portal/social/what-is-social) sayfasını inceleyin.
:::

## Platform etkisi

Son olarak, hem büyüklük hem de rezervasyon sayısı arttıkça, platform etkilerinden bazılarını sizinle paylaşmak istiyoruz. Daha fazla rezervasyon, ödeme işlemcimizden hacim indirimleri alma fırsatları getirir. Kart işleme maliyet üzerinden yansıtıldığı için, pazarlıkla elde ettiğimiz tasarruf doğrudan otellere gider.

Bugün Wink'e katılın ve konaklama sektöründe yeni, karlı bir iş yapma yolunu keşfedin!
