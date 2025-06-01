---
title: Environments
description: >-
  Bài viết này chứa thông tin dành cho người thử nghiệm và nhà phát triển về
  cách truy cập vào các môi trường máy chủ khác nhau của chúng tôi.
sidebar:
  order: 8
---
Tại Wink, chúng tôi luôn chạy 2 môi trường cho mọi hoạt động của mình:

* Sản xuất là môi trường ổn định của chúng tôi.
* Staging là môi trường chứng nhận và thử nghiệm của chúng tôi.

Nếu bạn là đơn vị tích hợp, khách sạn hoặc đại lý lữ hành muốn chuẩn bị chứng nhận hoặc thử nghiệm nền tảng Wink, hãy tạo tài khoản trong môi trường thử nghiệm của chúng tôi để bắt đầu.

:::lưu ý
Môi trường dàn dựng có sẵn theo yêu cầu. Điều đó có nghĩa là nó sẽ chuyển sang chế độ ngủ nếu không có nhu cầu sử dụng và tự bật lại khi có nhu cầu. Hãy kiên nhẫn nếu bạn đang đánh thức nó. Sẽ mất khoảng một phút để khởi động tất cả các máy chủ sau khi bạn kết nối lần đầu với một trong các máy chủ hoặc ứng dụng của chúng tôi.
:::

## Máy chủ

Dưới đây là ma trận chứa tên các máy chủ của chúng tôi và cách sử dụng chúng.

| Tính năng | Dàn dựng | Sản xuất
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| Hàng tồn kho | https://staging-api.wink.travel | https://api.wink.travel |
| Tích hợp | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| Thanh toán | https://staging-api.trippay.io | https://api.trippay.io |

## Ứng dụng

Các ứng dụng của chúng tôi cũng có môi trường thử nghiệm và sản xuất dành cho khách hàng.

| Ứng dụng | Dàn dựng | Sản xuất
| ------- | ------- | ---------- |
| Đại lý | https://staging-agent.wink.travel | https://agent.wink.travel |
| Công ty | https://staging-group.wink.travel | https://group.wink.travel |
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| Thanh toán | https://staging-pay.wink.travel | https://pay.wink.travel |
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

