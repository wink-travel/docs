---
title: Bảo Mật
description: Bài viết này chứa thông tin về các biện pháp bảo mật mà chúng tôi thực hiện và được công bố hàng năm bởi công ty bảo mật bên thứ ba của chúng tôi.
sidebar:
  order: 6
---

# Tài Liệu Tổng Quan Bảo Mật Wink

*Cập nhật lần cuối: 7 tháng 9, 2024*

*Phiên bản 1.0*

## Mục Đích và Phạm Vi

Là một phần trong cam kết liên tục của chúng tôi về bảo mật và bảo vệ dữ liệu người dùng, chúng tôi tiến hành kiểm thử xâm nhập định kỳ trên ứng dụng web của mình. Tài liệu này trình bày các phương pháp kiểm thử, cung cấp tóm tắt các phát hiện và làm nổi bật cách tiếp cận của chúng tôi đối với việc cải tiến bảo mật liên tục.

Tài liệu này sẽ được cập nhật khi có báo cáo mới hoặc khi có những thay đổi quan trọng xảy ra.

Các miền trong phạm vi:  
\*.wink.travel  
\*.trippay.io

## Tần Suất và Lịch Trình Kiểm Thử

Các bài kiểm thử xâm nhập của chúng tôi được thực hiện hàng năm, với các bài kiểm thử bổ sung được lên lịch khi cần thiết sau các cập nhật quan trọng đối với ứng dụng hoặc hạ tầng. Chu kỳ kiểm thử định kỳ này đảm bảo chúng tôi luôn đi trước các mối đe dọa đang phát triển và duy trì môi trường an toàn.

## Phương Pháp Kiểm Thử

Kiểm thử xâm nhập của chúng tôi toàn diện và bao gồm nhiều khía cạnh bảo mật, bao gồm nhưng không giới hạn:

* **OWASP Top 10:** Các bài kiểm thử của chúng tôi tập trung vào những rủi ro bảo mật nghiêm trọng nhất, như Injection, Xác thực bị phá vỡ, và Cross-Site Scripting (XSS).  
* **Kiểm Thử Hộp Đen và Hộp Xám:** Tùy theo phạm vi, đội ngũ của chúng tôi sử dụng các phương pháp này để mô phỏng cả các kịch bản tấn công từ bên ngoài và bên trong.  
* **Kiểm Thử Tự Động và Thủ Công:** Chúng tôi sử dụng Burp Suite Pro, bộ công cụ kiểm thử bảo mật hàng đầu, để thực hiện quét bảo mật tự động và hỗ trợ các kỹ thuật kiểm thử thủ công nhằm phát hiện các lỗ hổng phức tạp và đạt được phạm vi kiểm thử tốt nhất có thể. Để xác định lỗ hổng cụ thể hơn, một số công cụ chuyên biệt như SQLmap cũng được sử dụng.

## Tóm Tắt Các Phát Hiện

Dưới đây là tóm tắt cấp cao của báo cáo kiểm thử xâm nhập gần đây nhất:

* **Tổng số lỗ hổng được xác định:** 2  
* **Phân bố mức độ nghiêm trọng:**  
  * Nguy cấp: 2  
* **Loại lỗ hổng phát hiện:**  
  * Kiểm soát truy cập bị phá vỡ  
  * Thiết kế không an toàn

Để biết chi tiết các phát hiện, vui lòng tham khảo báo cáo đầy đủ.

### Đánh Giá Rủi Ro và Tác Động

Cả hai lỗ hổng được phát hiện đều được đánh giá là nguy cấp vì cả hai đều có thể gây ra tác động tài chính nghiêm trọng. Lỗ hổng đầu tiên cho phép người dùng đã xác thực độc hại kiểm soát tài khoản thanh toán Trippay của công ty khác. Lỗ hổng thứ hai cho phép người dùng độc hại thay đổi số tiền thanh toán yêu cầu cho một đặt phòng.

### Nỗ Lực Khắc Phục và Giảm Thiểu

Chúng tôi đã thực hiện các bước sau để xử lý các lỗ hổng được xác định:

* **Bản vá ngay lập tức:** Các lỗ hổng nguy cấp đã được vá trong vòng 48 giờ kể từ khi phát hiện.  
* **Xem xét và củng cố mã nguồn:** Đội phát triển đã triển khai các biện pháp kiểm soát bảo mật bổ sung dựa trên các khuyến nghị của chúng tôi.

## Cải Tiến Liên Tục

Kiểm thử xâm nhập là một phần trong chiến lược rộng hơn của chúng tôi nhằm cải tiến bảo mật liên tục. Các phát hiện từ mỗi bài kiểm thử hướng dẫn chính sách bảo mật, ảnh hưởng đến thực hành phát triển và thúc đẩy các cải tiến trong kiến trúc bảo mật của chúng tôi.

## Chuyên Môn Đội Ngũ

Kiểm thử xâm nhập được thực hiện bởi chuyên gia nội bộ có kinh nghiệm sâu rộng qua nhiều dự án và ngành nghề khác nhau. Sử dụng các công cụ và phương pháp hàng đầu, chuyên gia của chúng tôi đảm bảo ứng dụng được kiểm thử kỹ lưỡng trước các mối đe dọa bảo mật mới nhất.

## Cam Kết Bảo Mật

Chúng tôi cam kết duy trì môi trường ứng dụng an toàn cho người dùng và các bên liên quan. Nỗ lực liên tục trong kiểm thử và cải tiến bảo mật thể hiện cam kết của chúng tôi trong việc bảo vệ trước các mối đe dọa đang phát triển.

## Truy Cập Báo Cáo và Cập Nhật

Tài liệu này sẽ được cập nhật liên tục khi có các báo cáo kiểm thử xâm nhập mới được phát hành. Để truy cập báo cáo đầy đủ, vui lòng liên hệ với chúng tôi qua email dưới đây. Các cập nhật trong tương lai sẽ bao gồm các lỗ hổng mới được xác định, nỗ lực khắc phục và điều chỉnh phương pháp kiểm thử.

Để biết thêm thông tin, vui lòng liên hệ security@wink.travel.
