---
title: Security
description: >-
  Bu makale, uyguladığımız güvenlik önlemleri hakkında bilgi içermektedir ve her
  yıl 3. taraf güvenlik firmamız tarafından yayınlanmaktadır.
sidebar:
  order: 6
---
# Wink Güvenlik Genel Bakış Belgesi

*Son Güncelleme: 7 Eylül 2024*

*Sürüm 1.0*

## Amaç ve Kapsam

Güvenliğe ve kullanıcı verilerini korumaya yönelik devam eden bağlılığımızın bir parçası olarak, web uygulamamızda düzenli olarak penetrasyon testleri gerçekleştiriyoruz. Bu belge, test metodolojilerimizi ana hatlarıyla açıklıyor, bulguların bir özetini sunuyor ve sürekli güvenlik iyileştirme yaklaşımımızı vurguluyor.

Yeni raporlar hazırlandığında veya önemli değişiklikler meydana geldiğinde bu belge güncellenecektir.

Kapsam dahilindeki alanlar:\
\*.göz kırpma.seyahat\
\*.trippay.io

## Test Sıklığı ve Programı

Penetrasyon testlerimiz yıllık olarak yürütülür ve uygulama veya altyapıda önemli güncellemeler yapıldıktan sonra ihtiyaç duyuldukça ek testler planlanır. Bu düzenli test ritmi, gelişen tehditlerin önünde kalmamızı ve güvenli bir ortam sağlamamızı sağlar.

## Test Metodolojileri

Penetrasyon testlerimiz kapsamlıdır ve aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere çok çeşitli güvenlik konularını kapsar:

* **OWASP'ın En İyi 10'u:**&#x54;estlerimiz özellikle Enjeksiyon, Bozuk Kimlik Doğrulama ve Siteler Arası Komut Dosyası Çalıştırma (XSS) gibi en kritik güvenlik risklerini hedef almaktadır.
* **Kara Kutu ve Gri Kutu Testleri:**&#x4B;apsama bağlı olarak ekibimiz bu metodolojileri hem dış hem de iç saldırı senaryolarını simüle etmek için kullanır.
* **Otomatik ve Manuel Test:**&#x4F;tomatik güvenlik taramaları yapmak ve karmaşık güvenlik açıklarını belirlemek ve elimizden gelen en iyi kapsamı elde etmek için manuel test tekniklerine yardımcı olmak amacıyla önde gelen bir güvenlik test araç seti olan Burp Suite Pro'yu kullanıyoruz. Daha spesifik güvenlik açığı tanımlaması için bazı özel araçlar kullanılır, örneğin SQLmap.

## Bulguların Özeti

En son penetrasyon testi raporumuzun üst düzey özeti aşağıdadır:

* **Belirlenen Toplam Güvenlik Açığı:**&#x32;
* **Şiddet Dağılımı:**
  * Kritik: 2
* **Tespit Edilen Güvenlik Açığı Türleri:**
  * Kırık Erişim Kontrolü
  * Güvensiz Tasarım

Ayrıntılı bulgular için lütfen tam rapora bakın.

### Risk Derecelendirmeleri ve Etkisi

Bulunan güvenlik açıklarının her ikisi de ciddi finansal etkilere sahip olabileceğinden kritik olarak derecelendirilmiştir. İlki, kötü niyetli bir kimliği doğrulanmış kullanıcının başka bir şirketin Trippay ödeme hesabını kontrol etmesine izin verdi. İkinci güvenlik açığı, kötü niyetli bir kullanıcının bir rezervasyon için gereken ödeme miktarını değiştirmesine izin verdi.

### Çözüm ve Azaltma Çabaları

Belirlenen güvenlik açıklarını gidermek için aşağıdaki adımları attık:

* **Hemen Uygulanacak Yamalar:**&#x4B;ritik güvenlik açıkları keşfedildikten sonraki 48 saat içinde kapatıldı.
* **Kod İncelemesi ve Güçlendirme:**&#x47;eliştirme ekibimiz önerilerimize dayanarak ek güvenlik kontrolleri uyguladı.

## Sürekli İyileştirme

Penetrasyon testi, sürekli güvenlik iyileştirmesi için daha geniş stratejimizin bir parçasıdır. Her testten elde edilen bulgular güvenlik politikalarımıza rehberlik eder, geliştirme uygulamalarını etkiler ve güvenlik mimarimizdeki iyileştirmeleri yönlendirir.

## Takım Uzmanlığı

Penetrasyon testlerimiz, çeşitli projeler ve sektörlerde kapsamlı deneyime sahip şirket içi bir profesyonel tarafından yürütülür. Uzmanımız, önde gelen araçları ve yöntemleri kullanarak uygulamamızın en son güvenlik tehditlerine karşı kapsamlı bir şekilde test edilmesini sağlar.

## Güvenliğe Bağlılık

Kullanıcılarımız ve paydaşlarımız için güvenli bir uygulama ortamı sağlamaya adadık kendimizi. Güvenlik testi ve iyileştirme konusundaki devam eden çabalarımız, gelişen tehditlere karşı koruma konusundaki kararlılığımızı göstermektedir.

## Rapor Erişimi ve Güncellemeler

Bu belge, yeni penetrasyon testi raporları yayınlandıkça sürekli olarak güncellenecektir. Tam rapora erişmek için lütfen aşağıdaki e-posta aracılığıyla bizimle iletişime geçin. Gelecekteki güncellemeler, yeni belirlenen güvenlik açıklarını, düzeltme çabalarını ve test metodolojilerimizdeki ayarlamaları içerecektir.

Daha fazla bilgi için lütfen security@wink.travel ile iletişime geçin.

