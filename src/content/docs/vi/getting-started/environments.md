---
title: Môi trường
description: Bài viết này chứa thông tin dành cho người kiểm thử và nhà phát triển về cách truy cập các môi trường máy chủ khác nhau của chúng tôi.
sidebar:
  order: 8
---

Tại Wink, chúng tôi vận hành 2 môi trường cho mọi hoạt động của mình mọi lúc:

- Production là môi trường ổn định của chúng tôi.
- Staging là môi trường thử nghiệm, nơi các channel manager và đại lý du lịch được chứng nhận.

Nếu bạn muốn thử nghiệm nền tảng Wink, với vai trò nhà phát triển, khách sạn hoặc đại lý du lịch, hãy tạo tài khoản trong môi trường staging để bắt đầu. Các channel manager cũng thực hiện [chứng nhận](/vi/guides/integrators/add-your-channel-manager/#certification) tại đó.

Việc tạo tài khoản trong staging hoặc production yêu cầu chấp nhận Điều khoản và Điều khoản Thanh toán của Wink, và sự chấp nhận đó là ràng buộc. Channel manager và đại lý du lịch cũng cần chứng nhận trước khi truy cập production; những người khác sẽ tự chuyển sang production.

:::note
Môi trường staging chỉ được cung cấp theo yêu cầu. Điều này có nghĩa là nó sẽ tự động ngủ nếu không có sử dụng và tự bật lại khi có. Vui lòng kiên nhẫn nếu bạn đang đánh thức nó dậy. Quá trình khởi động tất cả các máy chủ mất khoảng một phút sau khi bạn kết nối lần đầu với một trong các máy chủ hoặc ứng dụng của chúng tôi.
:::

## Máy chủ

Dưới đây là bảng ma trận chứa tên các máy chủ và mục đích sử dụng của chúng tôi.

| Tính năng | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Ứng dụng

Các ứng dụng của chúng tôi cũng có môi trường thử nghiệm và production dành cho khách hàng.

| Ứng dụng | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
