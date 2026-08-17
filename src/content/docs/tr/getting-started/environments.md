---
title: Ortamlar
description: Bu makale, test uzmanları ve geliştiriciler için farklı sunucu ortamlarımıza nasıl erişileceği hakkında bilgi içermektedir.
sidebar:
  order: 8
---

Wink'te, yaptığımız her şey için her zaman 2 ortam çalıştırıyoruz:

- Production bizim stabil ortamımızdır.
- Staging bizim sertifikasyon ve test ortamımızdır.

Eğer bir entegratör, otel veya seyahat acentasıysanız ve sertifikasyona hazırlanmak ya da Wink platformunu test etmek istiyorsanız, başlamak için staging ortamımızda bir hesap oluşturun.

:::note
Staging ortamı talep üzerine kullanılabilir. Bu, kullanım olmadığında uyku moduna geçeceği ve kullanım başladığında tekrar açılacağı anlamına gelir. Uyandırırken lütfen sabırlı olun. Sunucuların tamamının başlaması, bir sunucu veya uygulamamızla ilk bağlantınızı kurduktan sonra yaklaşık bir dakika sürer.
:::

## Sunucular

Aşağıda sunucularımızın isimleri ve kullanım alanlarını içeren bir matris bulunmaktadır.

| Özellik | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Uygulamalar

Müşterilerimiz için uygulamalarımızın da test ve üretim ortamları bulunmaktadır.

| Uygulama | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
