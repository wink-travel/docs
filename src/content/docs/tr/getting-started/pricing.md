---
title: Fiyatlandırma
description: Wink'in çoğu ücretsizdir. Her rezervasyon için küçük bir ücret ve birkaç premium özellik için kullandıkça öde kullanım ücreti ödersiniz.
sidebar:
  order: 4
---

Wink'te abonelik, koltuk veya kurulum ücreti yoktur. Platformun büyük çoğunluğu ücretsizdir ve yalnızca iki şey için ödeme yaparsınız:

1. **Her rezervasyon için platform ücreti ve maliyet üzerinden kart işleme ücreti** — sadece bir rezervasyon yapıldığında.
2. **Kullandıkça öde kullanım ücretleri** — her çalıştırıldığında bize maliyeti olan birkaç premium özellik için, her birinin ücretsiz aylık kotası vardır.

## Neler ücretsiz

Bunlar sonsuza dek, kota veya ölçüm olmadan hiçbir maliyete tabi değildir:

- **Rezervasyon motoru** — kendi sitenizde, WinkLinks sayfanızda veya başka bir yere gömülü olarak.
- **Mülk yönetimi** — içerik, fotoğraflar, fiyatlar, fiyat planları, müsaitlik, promosyonlar ve politikalar.
- **Ortak araçlar** — paylaşılabilir bağlantılar, küratörlü listeler, ızgaralar, haritalar, kartlar ve gömülebilir widget'lar.
- **Seyahat acentesi araçları** — arama, özel fiyatlar ve müşterileriniz adına rezervasyon.
- **WinkLinks** — özel URL'nizi talep edin, sayfanızı oluşturun ve istediğiniz sıklıkta yayınlayın.
- **Manuel sosyal paylaşımlar** — kendinizin yazdığı her şey, bağlı herhangi bir ağda.
- **Analitik, lider tabloları, talepler, ayarlar** ve hesap yönetimi.
- **Tüketici ve Rezervasyon Motoru API'leri**, ayrıca arama ve otomatik tamamlama uç noktaları.

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
Misafirin ödemesini toplamak için alınan ödeme işleme ücreti, kar marjı olmadan maliyet üzerinden otele yansıtılır. Ücret, misafirin kartı ve ödeme yöntemine göre değişir ve her rezervasyonun Muhasebe bölümünde tam tutar görünür. Rezervasyon iptal veya iade edilirse, işlemci tarafından tutulan ücret yine de alınır; işlemci ücret almazsa biz de almayız.
:::

:::note[Para transferi]
Hesabınıza para gönderme ile ilgili ücretler vardır. Bu, seçtiğiniz ödeme yöntemine bağlıdır. Şu anda desteklediğimiz yöntemler:

- **Banka transferi** — Ücret, bulunduğunuz ülkeye, paranın gönderildiği yere ve varsa uygulanan döviz dönüşümüne bağlıdır. Ödeme ücreti ve dönüşüm maliyeti, maliyet üzerinden alıcı tarafından ödenir. Hesabınızda kullanılabilir bakiye olduğunda kullanabileceğiniz bir teklif hesaplayıcı sunuyoruz.

Başka bir ödeme yöntemini desteklememizi isterseniz, bize e-posta gönderin.
:::

### Model 2 — Seyahat acentesi kayıtlı satıcı olarak

Bu model yalnızca bölgesinde seyahat acentesi lisansına sahip ve kayıtlı satıcı olmak isteyen seyahat acentelerine açıktır. Bazı kayıtlı seyahat acenteleri ödemeyi yönetmek ve otellere fon dağıtımından sorumlu olmak ister. Bu modelde, fonlardan sorumludurlar ve ülkelerinde faaliyet göstermek için gerekli lisanslara sahiptirler.

#### Detaylar

:::note[Platform ücreti]
Wink, rezervasyon başına %1,5 platform ücreti alır. Bu, platform bakımını kapsar ve yukarıda listelenen her şeyi ücretsiz sunmamızı sağlar.
:::

Bu modeli kullanan seyahat acenteleri sadece Wink'in platform ücretini öder ve Wink seyahat acentesine aylık fatura keser.

## Kullanım (kullandıkça öde)

Bazı özellikler her çalıştırıldığında bize maliyet çıkarır — üretken yapay zeka, üçüncü taraf sosyal API'leri ve canlı fiyat sunumu gibi. Bunları aylık plana dahil etmek yerine, yalnızca gerçekten kullandığınız kadar ödersiniz ve ücretsiz aylık kotanızı aşana kadar ücretlendirilmezsiniz.

| Özellik | Aylık ücretsiz | Sonrası | Faturalandırma birimi |
| -- | -- | -- | -- |
| Sosyal paylaşım — resim | 1 | 1,50 $ | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile oluşturulan resim | 0 | 2,50 $ | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile geliştirilmiş video | 0 | 4,00 $ | Yayınlanan bir paylaşım |
| Sosyal paylaşım — yapay zeka ile oluşturulan video | 0 | 14,00 $ | Yayınlanan bir paylaşım |
| Yorum veya DM'ye yapay zeka yanıtı | 5 | 0,05 $ | Bir yanıt |
| Sohbet botu cevabı | 5 | 0,05 $ | Bir cevap |
| Partner API | 10.000 | 0,0001 $ | Bir otel-gün |

Fiyatlar USD cinsindendir. Ücretsiz kota **hesap başına** verilir, kullanıcı başına değil ve her ayın 1'inde (UTC) sıfırlanır.

### Paylaşımlar nasıl fiyatlandırılır

Paylaşımlar içeriğine göre fiyatlandırılır, çünkü bunları üretmek bize maliyet çıkarır. Sabit bir resim ucuzdur; video değildir; yapay zeka ile oluşturulan herhangi bir medya, sizin sağladığınız fotoğraftan önemli ölçüde daha maliyetlidir.

- **Ücretsiz kota sadece standart resim paylaşımlarını kapsar.** Her hesap için ayda bir tane ücretsizdir. Video paylaşımları ve yapay zeka ile oluşturulan medya ilk paylaşımda ücretlendirilir — bu katmanlarda ücretsiz kota yoktur, bu yüzden video paylaşan bir mülk ilk ayında ücret beklemelidir.
- **Video önceliklidir.** Bir paylaşımda herhangi bir video varsa, tüm paylaşım video oranından ücretlendirilir. Resim ve video karışımı bir paylaşım video paylaşımıdır.
- **Yapay zeka kökeni katmanı belirler.** Sizden gelen medya — kendi fotoğraf ve videolarınız veya Wink içerik kütüphanenizden olanlar — standart oranla ücretlendirilir. Bizim sizin için oluşturduğumuz medya yapay zeka oranından ücretlendirilir.

### Neler ölçülür ve neler ölçülmez

- Yalnızca **üretilmiş** ve üçüncü taraf ağa (Facebook, Instagram) yayınlanan paylaşımlar ücretlendirilir. Kendi yazdığınız paylaşımlar ücretsizdir, nereye giderse gitsin.
- **WinkLinks'e yayınlamak her zaman ücretsizdir**, üretilmiş olsun ya da olmasın.
- Ücretlendirme **yayınlandığında** yapılır, denemeye göre değil. Taslağı istediğiniz kadar yeniden oluşturmak faturaya eklenmez — sadece gerçekten yayınladığınız paylaşım için bir kez ödersiniz. Denemeler sınırsız değildir: her paylaşım için resimlerde yaklaşık 10, videoda 3 yeniden oluşturma hakkı vardır; bu, üretim maliyetimizi yansıtır. Çalışırken kaç hakkınız kaldığını göreceksiniz.
- Partner API'de, bir **otel-gün** bir otelin bir gece konaklaması için fiyatlandırılmasıdır — *bir API çağrısı değil*. 20 otel ve 3 gece konaklama içeren bir arama, tek bir istekten 60 otel-gün eder. Arama ve otomatik tamamlama uç noktaları ücretsizdir ve asla ölçülmez.

### Açma

Kullandıkça öde varsayılan olarak kapalıdır. Herkes ücretsiz kotayı herhangi bir işlem yapmadan alır.

Kotayı aşmak için, bir hesabın **sahibi** kullandıkça ödeyi etkinleştirir ve hangi hesaplarının ölçüleceğini seçer. Etkinleştirdiğiniz tüm hesaplardan kullanım **tek bir aylık faturada** toplanır; bu faturayı kartla otomatik ödeyebilir veya kendiniz ödemek üzere fatura alabilirsiniz.

Etkinleştirildikten sonra kullanımınız ölçülür ancak **asla sınırlandırılmaz** — bizimle para harcarken harcama limitiyle karşılaşmazsınız.

:::note[Etkinleştirmezseniz]
Hiçbir şey bozulmaz ve ücret alınmaz. O ay için ücretsiz kota ile sınırlı kalırsınız: üretilmiş paylaşımlar yayınlanmaz ve Partner API çağrıları kota sıfırlanana kadar `429` döner.
:::

### Faturalandırma durumu

| Durum | Anlamı |
| -- | -- |
| İyi durumda | Her şey normal çalışıyor. |
| Gecikmiş | Bir ödeme başarısız oldu ve tekrar deneniyor. Bu süre zarfında özellikleriniz çalışmaya devam eder. |
| Askıya alınmış | Bir fatura tamamen ödenmedi. Faturalandırılabilir işlemler ödenene kadar engellenir; ücretsiz özellikler normal devam eder. |

:::tip[Canlı fiyatlar]
Birim fiyatlar ve ücretsiz kotalar Portal'da her zaman faturalandırma sistemimizden doğrudan gösterilir, böylece taahhütte bulunmadan önce kontrol edebilirsiniz. Kullandıkça ödeyi etkinleştirmek, hesaplarınızı seçmek ve ay içi kullanım ile faturaları takip etmek için [Billing](/tr/portal/plan) sayfasına bakın. Paylaşım hacminin harcamalarınızı nasıl etkilediğini öğrenmek için [Social](/tr/portal/social/what-is-social) sayfasına göz atın.
:::

## Platform etkisi

Son olarak, hem büyüklük hem de rezervasyon sayısı arttıkça, platform etkilerinden bazılarını sizinle paylaşmak istiyoruz. Daha fazla rezervasyon, ödeme işlemcimizden hacim indirimleri alma fırsatları getirir. Kart işleme maliyet üzerinden yansıtıldığı için, pazarlıkla elde ettiğimiz herhangi bir tasarruf doğrudan otellere gider.

Bugün Wink'e katılın ve konaklama sektöründe yeni, karlı bir iş yapma yolunu keşfedin!
