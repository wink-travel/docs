---
title: Güvenlik
description: Bu makale, uyguladığımız güvenlik önlemleri hakkında bilgi içermekte olup, üçüncü taraf güvenlik firmamız tarafından her yıl yayımlanmaktadır.
sidebar:
  order: 6
---

*Son Güncelleme: 7 Eylül 2024*

*Sürüm 1.0*

## Amaç ve Kapsam

Güvenlik ve kullanıcı verilerinin korunmasına yönelik sürekli taahhüdümüzün bir parçası olarak, web uygulamamızda düzenli penetrasyon testleri yapmaktayız. Bu belge, test metodolojilerimizi özetler, bulguların bir özetini sunar ve sürekli güvenlik iyileştirmesine yönelik yaklaşımımızı vurgular.

Bu belge, yeni raporlar üretildikçe veya önemli değişiklikler meydana geldikçe güncellenecektir.

Kapsamdaki alan adları:  
\*.wink.travel  
\*.trippay.io

## Test Sıklığı ve Takvimi

Penetrasyon testlerimiz yıllık olarak yapılmakta olup, uygulama veya altyapıda önemli güncellemeler sonrası gerektiğinde ek testler planlanmaktadır. Bu düzenli test takvimi, gelişen tehditlerin önünde olmamızı ve güvenli bir ortam sağlamamızı garanti eder.

## Test Metodolojileri

Penetrasyon testlerimiz kapsamlıdır ve aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere çeşitli güvenlik yönlerini kapsar:

* **OWASP Top 10:** Testlerimiz özellikle Enjeksiyon, Kırık Kimlik Doğrulama ve Cross-Site Scripting (XSS) gibi en kritik güvenlik risklerine odaklanır.  
* **Black Box ve Grey Box Testleri:** Kapsama bağlı olarak, ekibimiz hem dış hem de iç saldırı senaryolarını simüle etmek için bu metodolojileri kullanır.  
* **Otomatik ve Manuel Testler:** Burp Suite Pro gibi önde gelen güvenlik test araç setlerini kullanarak otomatik güvenlik taramaları yapar ve karmaşık güvenlik açıklarını tespit etmek için manuel test tekniklerine destek veririz. Daha spesifik açık tespiti için SQLmap gibi bazı özel araçlar da kullanılmaktadır.

## Bulguların Özeti

Aşağıda en son penetrasyon testi raporumuzun üst düzey özeti yer almaktadır:

* **Tespit Edilen Toplam Güvenlik Açığı:** 2  
* **Ciddiyet Dağılımı:**  
  * Kritik: 2  
* **Tespit Edilen Güvenlik Açığı Türleri:**  
  * Kırık Erişim Kontrolü  
  * Güvensiz Tasarım

Detaylı bulgular için lütfen tam rapora bakınız.

### Risk Değerlendirmeleri ve Etkisi

Bulunan her iki güvenlik açığı da kritik olarak derecelendirilmiştir çünkü her ikisi de ciddi finansal etkiler yaratabilirdi. İlk açık, kötü niyetli doğrulanmış bir kullanıcının başka bir şirketin Trippay ödeme hesabını kontrol etmesine izin vermiştir. İkinci açık ise kötü niyetli bir kullanıcının rezervasyon için gereken ödeme tutarını değiştirmesine olanak sağlamıştır.

### Düzeltme ve Azaltma Çalışmaları

Tespit edilen güvenlik açıklarını gidermek için aşağıdaki adımlar atılmıştır:

* **Hızlı Yama Uygulamaları:** Kritik güvenlik açıkları keşfedildikten sonraki 48 saat içinde yamalanmıştır.  
* **Kod İncelemesi ve Güçlendirme:** Geliştirme ekibi, önerilerimiz doğrultusunda ek güvenlik kontrolleri uygulamıştır.

## Sürekli İyileştirme

Penetrasyon testi, sürekli güvenlik iyileştirmesi stratejimizin bir parçasıdır. Her testten elde edilen bulgular, güvenlik politikalarımızı yönlendirir, geliştirme uygulamalarını etkiler ve güvenlik mimarimizde iyileştirmeler sağlar.

## Ekip Uzmanlığı

Penetrasyon testlerimiz, çeşitli projeler ve sektörlerde geniş deneyime sahip dahili bir uzman tarafından yürütülmektedir. Önde gelen araçlar ve yöntemler kullanılarak, uzmanımız uygulamamızı en güncel güvenlik tehditlerine karşı kapsamlı şekilde test eder.

## Güvenliğe Taahhüt

Kullanıcılarımız ve paydaşlarımız için güvenli bir uygulama ortamı sağlamaya kararlıyız. Güvenlik testleri ve iyileştirme konusundaki sürekli çabalarımız, gelişen tehditlere karşı koruma taahhüdümüzü göstermektedir.

## Rapor Erişimi ve Güncellemeler

Bu belge, yeni penetrasyon testi raporları yayımlandıkça sürekli güncellenecektir. Tam rapora erişmek için lütfen aşağıdaki e-posta adresi üzerinden bizimle iletişime geçin. Gelecekteki güncellemeler, yeni tespit edilen güvenlik açıklarını, düzeltme çalışmalarını ve test metodolojilerimizdeki ayarlamaları içerecektir.

Daha fazla bilgi için lütfen security@wink.travel adresiyle iletişime geçin.
