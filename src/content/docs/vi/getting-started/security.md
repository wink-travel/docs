---
title: Security
description: >-
  Bài viết này chứa thông tin về các biện pháp bảo mật mà chúng tôi triển khai
  và được công ty bảo mật bên thứ 3 của chúng tôi công bố hàng năm.
sidebar:
  order: 6
---
# Tài liệu tổng quan về bảo mật Wink

*Cập nhật lần cuối: 7 tháng 9 năm 2024*

*Phiên bản 1.0*

## Mục đích và phạm vi

Là một phần trong cam kết liên tục của chúng tôi về bảo mật và bảo vệ dữ liệu người dùng, chúng tôi tiến hành kiểm tra thâm nhập thường xuyên trên ứng dụng web của mình. Tài liệu này phác thảo các phương pháp kiểm tra của chúng tôi, cung cấp tóm tắt các phát hiện và nêu bật cách tiếp cận của chúng tôi đối với việc cải thiện bảo mật liên tục.

Tài liệu này sẽ được cập nhật khi có báo cáo mới hoặc khi có những thay đổi quan trọng.

Phạm vi lĩnh vực:\
\*.nháy mắt.du lịch\
\*.trippay.io

## Tần suất và lịch trình kiểm tra

Các cuộc kiểm tra thâm nhập của chúng tôi được tiến hành hàng năm, với các cuộc kiểm tra bổ sung được lên lịch khi cần thiết sau khi có các bản cập nhật đáng kể cho ứng dụng hoặc cơ sở hạ tầng. Nhịp độ kiểm tra thường xuyên này đảm bảo chúng tôi luôn đi trước các mối đe dọa đang phát triển và duy trì một môi trường an toàn.

## Phương pháp thử nghiệm

Kiểm tra thâm nhập của chúng tôi rất toàn diện và bao gồm nhiều khía cạnh bảo mật, bao gồm nhưng không giới hạn ở:

* **OWASP Top 10:**&#x43;ác bài kiểm tra của chúng tôi đặc biệt nhắm vào các rủi ro bảo mật quan trọng nhất, chẳng hạn như Injection, Xác thực bị hỏng và Tấn công xuyên trang (XSS).
* **Kiểm thử hộp đen và hộp xám:**&#x54;ùy thuộc vào phạm vi, nhóm của chúng tôi sử dụng các phương pháp này để mô phỏng cả tình huống tấn công bên ngoài và bên trong.
* **Kiểm tra tự động và thủ công:**&#x43;húng tôi sử dụng Burp Suite Pro, một bộ công cụ kiểm tra bảo mật hàng đầu, để tiến hành quét bảo mật tự động và hỗ trợ các kỹ thuật kiểm tra thủ công để xác định các lỗ hổng phức tạp và có được phạm vi bảo vệ tốt nhất có thể. Để xác định lỗ hổng cụ thể hơn, một số công cụ chuyên dụng được sử dụng, ví dụ: SQLmap.

## Tóm tắt các phát hiện

Sau đây là bản tóm tắt cấp cao về báo cáo thử nghiệm thâm nhập mới nhất của chúng tôi:

* **Tổng số lỗ hổng đã xác định:**&#x32;
* **Phân bố mức độ nghiêm trọng:**
  * Quan trọng: 2
* **Các loại lỗ hổng được phát hiện:**
  * Kiểm soát truy cập bị hỏng
  * Thiết kế không an toàn

Để biết kết quả chi tiết, vui lòng tham khảo báo cáo đầy đủ.

### Xếp hạng rủi ro và tác động

Cả hai lỗ hổng được tìm thấy đều được đánh giá là nghiêm trọng vì cả hai đều có thể gây ra tác động tài chính nghiêm trọng. Lỗ hổng đầu tiên cho phép người dùng đã xác thực có ác ý kiểm soát tài khoản thanh toán Trippay của công ty khác. Lỗ hổng thứ hai cho phép người dùng có ác ý sửa đổi số tiền thanh toán cần thiết cho một lần đặt phòng.

### Nỗ lực khắc phục và giảm thiểu

Chúng tôi đã thực hiện các bước sau để giải quyết các lỗ hổng đã xác định:

* **Bản vá tức thời:**&#x43;ác lỗ hổng nghiêm trọng đã được vá trong vòng 48 giờ kể từ khi phát hiện.
* **Đánh giá và củng cố mã:**&#x4E;hóm phát triển đã triển khai các biện pháp kiểm soát bảo mật bổ sung dựa trên các khuyến nghị của chúng tôi.

## Cải tiến liên tục

Kiểm thử thâm nhập là một phần trong chiến lược rộng hơn của chúng tôi nhằm cải thiện bảo mật liên tục. Những phát hiện từ mỗi bài kiểm tra sẽ hướng dẫn các chính sách bảo mật của chúng tôi, tác động đến các hoạt động phát triển và thúc đẩy các cải tiến trong kiến trúc bảo mật của chúng tôi.

## Chuyên môn của nhóm

Kiểm tra thâm nhập của chúng tôi được thực hiện bởi một chuyên gia nội bộ có nhiều kinh nghiệm trong nhiều dự án và ngành công nghiệp khác nhau. Sử dụng các công cụ và phương pháp hàng đầu, chuyên gia của chúng tôi đảm bảo ứng dụng của chúng tôi được kiểm tra kỹ lưỡng trước các mối đe dọa bảo mật mới nhất.

## Cam kết về an ninh

Chúng tôi cam kết duy trì môi trường ứng dụng an toàn cho người dùng và các bên liên quan. Những nỗ lực liên tục của chúng tôi trong việc thử nghiệm và cải thiện bảo mật thể hiện cam kết của chúng tôi trong việc bảo vệ chống lại các mối đe dọa đang phát triển.

## Báo cáo Truy cập và Cập nhật

Tài liệu này sẽ được cập nhật liên tục khi có báo cáo kiểm tra thâm nhập mới. Để truy cập báo cáo đầy đủ, vui lòng liên hệ với chúng tôi qua email bên dưới. Các bản cập nhật trong tương lai sẽ bao gồm các lỗ hổng mới được xác định, các nỗ lực khắc phục và điều chỉnh phương pháp kiểm tra của chúng tôi.

Để biết thêm thông tin chi tiết, vui lòng liên hệ security@wink.travel.

