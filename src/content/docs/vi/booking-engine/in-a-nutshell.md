---
title: Tóm Tắt
description: Bài viết này hướng dẫn bạn mọi điều bạn muốn biết về booking engine.
sidebar:
  order: 0
---

Dưới đây là cách chúng tôi phân chia trách nhiệm trên Wink:

- [Extranet](/vi/extranet/what-is-extranet) liên quan đến nhà cung cấp quản lý tồn kho.
- [Studio](/vi/studio/what-is-studio) liên quan đến các đối tác quản lý nội dung.
- `Booking Engine` liên quan đến việc tạo nội dung, được tạo trong `Studio`, dựa trên tồn kho được tạo trong `Extranet` và làm cho nó có thể đặt được.
- [Payment](/vi/payment/what-is-trip-pay) liên quan đến việc thu phí / hoàn tiền cho khách du lịch đặt [qua các nền tảng như Wink], và thanh toán cho nhà cung cấp.

Booking engine là trung tâm của nền tảng của chúng tôi.

Các trách nhiệm của nó bao gồm:

- Quản lý tiền tệ và cập nhật tỷ giá hối đoái.
- Cung cấp cho nhà cung cấp giá một cách để gửi dữ liệu giá cho chúng tôi.
- Quản lý dữ liệu tra cứu. *ví dụ: vùng, quốc gia, điểm đến, cơ sở lưu trú, v.v.*
- Quản lý ngôn ngữ.
- Tạo phân tích dựa trên tương tác người dùng, sự kiện và các cuộc gọi API.
- Cung cấp tồn kho có thể đặt được ở định dạng, ngôn ngữ và tiền tệ mong muốn, chẳng hạn như:
    - Một [liên kết chia sẻ](/vi/studio/shareable-links) trên Facebook.
    - Một trang đích khách sạn trên https://ota.wink.travel với tồn kho cho khách sạn đó.
    - Một [thẻ](/vi/studio/cards) chứa tồn kho của đối tác.
    - Một [bản đồ](/vi/studio/maps) trên tài khoản [WinkLinks](/vi/link-manager/wink-links) của bạn.
    - Một [cuộc gọi API](/vi/developers/apis) từ hệ thống đại lý du lịch từ xa.
- Cung cấp cho khách du lịch cách để:
    - Tìm kiếm tồn kho du lịch.
    - Đặt tồn kho có sẵn.
    - Quản lý [đặt chỗ và đánh giá](/vi/booking-engine/bookings).
    - Quản lý [danh sách mong muốn](/vi/booking-engine/bucket-list) những thứ muốn đặt trong tương lai.
    - Quản lý [hồ sơ du lịch](/vi/booking-engine/travel-preferences). *ví dụ: Dị ứng, liên hệ khẩn cấp, v.v.*

Booking engine là tập hợp các chức năng có thể tái sử dụng mà chúng tôi cung cấp qua https://ota.wink.travel; một trang web có thể tùy chỉnh cao dành cho khách sạn và đối tác để bán sản phẩm của họ cho khách du lịch.

Các nhà tích hợp, muốn có nhiều tự do hơn nữa, có quyền truy cập tất cả các tính năng tương tự thông qua [plugin WordPress](/vi/developers/wordpress/), [Web Components](/vi/developers/web-components) và [APIs](/vi/developers/apis) của chúng tôi.

Tiếp tục đến các phần tiếp theo để đọc thêm về những gì booking engine cung cấp.

## Đọc thêm

- Đọc về [plugin WordPress](/vi/developers/wordpress/) của chúng tôi.
- Đọc về [Web Components](/vi/developers/web-components) của chúng tôi.
- Đọc về [APIs](/vi/developers/apis) của chúng tôi.
