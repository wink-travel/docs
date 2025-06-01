---
title: Environments
description: >-
  Bu makale, test uzmanları ve geliştiricilerin farklı sunucu ortamlarımıza
  nasıl erişebilecekleri hakkında bilgi içermektedir.
sidebar:
  order: 8
---
Wink'te her zaman yaptığımız her şey için 2 ortam çalıştırıyoruz:

* Üretim bizim istikrarlı ortamımızdır.
* Staging sertifikasyon ve test ortamımızdır.

Sertifikasyona hazırlanmak veya Wink platformunu test etmek isteyen bir entegratör, otel veya seyahat acentesiyseniz, başlamak için sahneleme ortamımızda bir hesap oluşturun.

:::not
Staging ortamı istek üzerine kullanılabilir. Yani kullanım yoksa uyku moduna geçecek ve kullanım olduğunda kendini tekrar açacaktır. Uyandırıyorsanız lütfen sabırlı olun. Sunucularımızdan veya uygulamalarımızdan birine ilk bağlandığınızda tüm sunucuların başlatılması yaklaşık bir dakika sürer.
:::

## Sunucular

Aşağıda sunucularımızın adlarını ve kullanımlarını içeren bir matris bulunmaktadır.

| Özellik | Sahneleme | Prodüksiyon
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| Envanter | https://staging-api.wink.travel | https://api.wink.travel |
| Entegrasyonlar | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| Ödeme | https://staging-api.trippay.io | https://api.trippay.io |

## Uygulamalar

Uygulamalarımız müşterilerimiz için test ve üretim ortamlarına da sahiptir.

| Uygulama | Sahneleme | Prodüksiyon
| ------- | ------- | ---------- |
| Temsilci | https://staging-agent.wink.travel | https://agent.wink.travel |
| Kurumsal | https://staging-group.wink.travel | https://group.wink.travel |
| Ekstranet | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| Ödeme | https://staging-pay.wink.travel | https://pay.wink.travel |
| Stüdyo | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

