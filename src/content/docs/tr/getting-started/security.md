---
title: Güvenlik
description: Bu makale, uyguladığımız güvenlik önlemleri hakkında bilgi içermekte olup, üçüncü taraf güvenlik firmamız tarafından her yıl yayımlanmaktadır.
sidebar:
  order: 6
---

# Wink Güvenlik Genel Bakış Belgesi

*Son Güncelleme: 7 Eylül 2024*

*Sürüm 1.0*

## Amaç ve Kapsam

Güvenlik ve kullanıcı verilerinin korunmasına yönelik sürekli taahhüdümüzün bir parçası olarak, web uygulamamızda düzenli penetrasyon testleri yapmaktayız. Bu belge, test metodolojilerimizi özetler, bulguların bir özetini sunar ve sürekli güvenlik iyileştirmesine yönelik yaklaşımımızı vurgular.

Yeni raporlar üretildikçe veya önemli değişiklikler meydana geldikçe bu belge güncellenecektir.

Kapsamdaki alan adları:  
\*.wink.travel  
\*.trippay.io

## Test Sıklığı ve Takvimi

Penetrasyon testlerimiz yıllık olarak gerçekleştirilmekte olup, uygulama veya altyapıda önemli güncellemeler sonrası gerektiğinde ek testler planlanmaktadır. Bu düzenli test takvimi, gelişen tehditlerin önünde olmamızı ve güvenli bir ortam sağlamamızı garanti eder.

## Test Metodolojileri

Penetrasyon testlerimiz kapsamlıdır ve aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere çeşitli güvenlik yönlerini kapsar:

* **OWASP Top 10:** Testlerimiz özellikle Enjeksiyon, Kırık Kimlik Doğrulama ve Cross-Site Scripting (XSS) gibi en kritik güvenlik risklerine odaklanır.  
* **Black Box ve Grey Box Testleri:** Kapsama bağlı olarak, ekibimiz hem dış hem de iç saldırı senaryolarını simüle etmek için bu metodolojileri kullanır.  
* **Otomatik ve Manuel Testler:** Burp Suite Pro gibi önde gelen güvenlik test araç setlerini kullanarak otomatik güvenlik taramaları yapar ve karmaşık zafiyetleri tespit etmek için manuel test tekniklerine destek veririz. Daha spesifik zafiyet tespiti için SQLmap gibi bazı özel araçlar da kullanılmaktadır.

## Bulguların Özeti

Aşağıda en son penetrasyon testi raporumuzun yüksek seviyede bir özeti yer almaktadır:

* **Tespit Edilen Toplam Zafiyet Sayısı:** 2  
* **Şiddet Dağılımı:**  
  * Kritik: 2  
* **Tespit Edilen Zafiyet Türleri:**  
  * Kırık Erişim Kontrolü  
  * Güvensiz Tasarım

Detaylı bulgular için lütfen tam rapora bakınız.

### Risk Değerlendirmeleri ve Etkisi

Bulunan her iki zafiyet de kritik olarak derecelendirilmiştir çünkü her ikisi de ciddi finansal etkiler yaratabilirdi. İlk zafiyet, kötü niyetli doğrulanmış bir kullanıcının başka bir şirketin Trippay ödeme hesabını kontrol etmesine izin vermiştir. İkinci zafiyet ise kötü niyetli bir kullanıcının rezervasyon için gereken ödeme tutarını değiştirmesine olanak sağlamıştır.

### Düzeltme ve Azaltma Çalışmaları

Tespit edilen zafiyetleri gidermek için aşağıdaki adımlar atılmıştır:

* **Hızlı Yama Uygulamaları:** Kritik zafiyetler keşfedildikten sonraki 48 saat içinde yamalanmıştır.  
* **Kod İncelemesi ve Güçlendirme:** Geliştirme ekibi, önerilerimiz doğrultusunda ek güvenlik kontrolleri uygulamıştır.

## Sürekli İyileştirme

Penetrasyon testi, sürekli güvenlik iyileştirmesi stratejimizin bir parçasıdır. Her testten elde edilen bulgular, güvenlik politikalarımızı yönlendirir, geliştirme uygulamalarını etkiler ve güvenlik mimarimizde iyileştirmeler sağlar.

## Ekip Uzmanlığı

Penetrasyon testlerimiz, çeşitli projeler ve sektörlerde geniş deneyime sahip dahili bir uzman tarafından yürütülmektedir. Önde gelen araçlar ve yöntemler kullanılarak, uzmanımız uygulamamızı en güncel güvenlik tehditlerine karşı kapsamlı şekilde test eder.

## Güvenliğe Taahhüt

Kullanıcılarımız ve paydaşlarımız için güvenli bir uygulama ortamı sağlamaya kararlıyız. Güvenlik testleri ve iyileştirme konusundaki sürekli çabalarımız, gelişen tehditlere karşı koruma taahhüdümüzü göstermektedir.

## Rapor Erişimi ve Güncellemeler

Bu belge, yeni penetrasyon testi raporları yayımlandıkça sürekli güncellenecektir. Tam rapora erişmek için lütfen aşağıdaki e-posta adresi üzerinden bizimle iletişime geçin. Gelecekteki güncellemeler, yeni tespit edilen zafiyetleri, düzeltme çalışmalarını ve test metodolojilerimizdeki ayarlamaları içerecektir.

Daha fazla bilgi için lütfen security@wink.travel adresiyle iletişime geçiniz.
