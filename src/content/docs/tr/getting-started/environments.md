---
title: Ortamlar
description: Bu makale, test uzmanları ve geliştiriciler için farklı sunucu ortamlarımıza nasıl erişileceği hakkında bilgi içermektedir.
sidebar:
  order: 8
---

Wink'te, yaptığımız her şey için her zaman 2 ortam çalıştırıyoruz:

- Production bizim stabil ortamımızdır.
- Staging test ortamımızdır ve kanal yöneticileri ile seyahat acentelerinin sertifikalandığı yerdir.

Wink platformunu test etmek istiyorsanız, geliştirici, otel veya seyahat acentesi olarak başlamak için staging ortamımızda bir hesap oluşturun. Kanal yöneticileri de [sertifikasyonlarını](/tr/guides/integrators/add-your-channel-manager/#certification) orada yapar.

Staging veya production ortamında hesap oluşturmak, Wink'in Şartlar ve Ödeme Şartları'nı kabul etmeyi gerektirir ve bu kabul bağlayıcıdır. Kanal yöneticileri ve seyahat acenteleri production erişimi öncesinde sertifikasyona ihtiyaç duyar; diğer herkes kendi başına production ortamına geçer.

:::note
Staging ortamı talep üzerine kullanılabilir durumdadır. Bu, kullanım olmadığında uyku moduna geçeceği ve kullanım başladığında tekrar açılacağı anlamına gelir. Uyandırırken lütfen sabırlı olun. Sunucuların tamamının başlaması, bir sunucumuz veya uygulamamızla ilk bağlantınızdan sonra yaklaşık bir dakika sürer.
:::

## Sunucular

Aşağıda sunucularımızın isimleri ve kullanım alanlarını içeren bir matris bulunmaktadır.

| Özellik | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Uygulamalar

Müşterilerimiz için uygulamalarımızın da test ve production ortamları vardır.

| Uygulama | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Rezervasyon motoru | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Yöneticisi | https://staging-i.trvl.as | https://i.trvl.as |
