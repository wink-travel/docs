---
title: Môi trường
description: Bài viết này chứa thông tin dành cho người kiểm thử và nhà phát triển về cách truy cập các môi trường máy chủ khác nhau của chúng tôi.
sidebar:
  order: 8
---

Tại Wink, chúng tôi vận hành 2 môi trường cho mọi hoạt động của mình mọi lúc:

- Production là môi trường ổn định của chúng tôi.
- Staging là môi trường chứng nhận và kiểm thử.

Nếu bạn là một nhà tích hợp, khách sạn hoặc đại lý du lịch muốn chuẩn bị cho việc chứng nhận hoặc kiểm thử nền tảng Wink, hãy tạo tài khoản trong môi trường staging của chúng tôi để bắt đầu.

:::note
Môi trường staging được cung cấp theo yêu cầu. Điều này có nghĩa là nó sẽ tự động tạm ngưng nếu không có người sử dụng và tự bật lại khi có người dùng. Vui lòng kiên nhẫn nếu bạn đang khởi động lại nó. Quá trình khởi động tất cả các máy chủ mất khoảng một phút sau khi bạn kết nối lần đầu với một trong các máy chủ hoặc ứng dụng của chúng tôi.
:::

## Máy chủ

Dưới đây là bảng ma trận chứa tên các máy chủ và mục đích sử dụng của chúng.

| Tính năng | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Ứng dụng

Các ứng dụng của chúng tôi cũng có môi trường kiểm thử và môi trường sản xuất dành cho khách hàng.

| Ứng dụng | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
