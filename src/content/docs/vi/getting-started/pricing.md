---
title: Giá cả
description: Phần lớn Wink là miễn phí. Bạn chỉ trả một khoản phí nhỏ cho mỗi đặt phòng và phí sử dụng theo mức tiêu thụ cho một số tính năng cao cấp.
sidebar:
  order: 4
---

Wink không có đăng ký, không có chỗ ngồi và không có phí thiết lập. Phần lớn nền tảng là miễn phí, và chỉ có hai điều bạn sẽ phải trả tiền:

1. **Phí nền tảng cho mỗi đặt phòng, cộng với phí xử lý thẻ theo giá gốc** — chỉ khi có đặt phòng được thực hiện.
2. **Phí sử dụng theo mức tiêu thụ** — cho một vài tính năng cao cấp tốn chi phí mỗi lần sử dụng, mỗi tính năng có một hạn mức miễn phí hàng tháng.

## Những gì miễn phí

Những điều này không tốn phí, mãi mãi, không có hạn mức và không bị đo lường:

- **Công cụ đặt phòng** — trên trang web của bạn, trong trang WinkLinks của bạn, hoặc bất cứ nơi nào bạn nhúng nó.
- **Quản lý tài sản** — nội dung, ảnh, giá, kế hoạch giá, tình trạng phòng, khuyến mãi và chính sách.
- **Công cụ liên kết** — liên kết chia sẻ, danh sách được tuyển chọn, lưới, bản đồ, thẻ và widget nhúng.
- **Công cụ đại lý du lịch** — tìm kiếm, giá tùy chỉnh và đặt phòng thay mặt khách hàng của bạn.
- **WinkLinks** — đăng ký URL tùy chỉnh của bạn, xây dựng trang và xuất bản bao nhiêu lần bạn muốn.
- **Bài đăng xã hội thủ công** — bất cứ điều gì bạn tự viết, trên bất kỳ mạng xã hội nào được kết nối.
- **Phân tích, bảng xếp hạng, yêu cầu, cài đặt** và quản lý tài khoản.
- **API Người tiêu dùng và Công cụ đặt phòng**, bao gồm các điểm cuối tra cứu và tự động hoàn thành. Trên **API Đối tác**, các cuộc gọi Lookup và Content được đo lường với một đơn vị mỗi lần (xem [Sử dụng](#what-is-and-isnt-metered) bên dưới).

## Đặt phòng

Wink hỗ trợ hai mô hình: Wink thu tiền cho khách sạn, và đại lý du lịch được cấp phép làm người bán hàng chính thức.

### Mô hình 1 — Wink thu tiền cho khách sạn

Wink thu tiền của khách như đại lý thu tiền hạn chế cho khách sạn. Khách sạn là người bán hàng chính thức, và tên khách sạn xuất hiện trên sao kê thẻ của khách.
Mô hình này áp dụng cho 95% tất cả các đặt phòng.

#### Phân tích

:::note[Phí nền tảng]
Wink tính phí nền tảng 1,5% cho mỗi đặt phòng. Phí này bao gồm chi phí bảo trì nền tảng và cho phép chúng tôi cung cấp miễn phí tất cả những gì liệt kê ở trên. Phí này không áp dụng cho đặt phòng bị hủy.
:::

:::note[Phí xử lý thẻ]
Phí xử lý thanh toán để thu tiền khách được chuyển thẳng cho khách sạn theo giá gốc, không có lợi nhuận. Phí này thay đổi tùy theo thẻ và phương thức thanh toán của khách, và số tiền chính xác được hiển thị trong phần Kế toán của mỗi đặt phòng. Nếu đặt phòng bị hủy hoặc hoàn tiền, bất kỳ khoản phí nào mà bộ xử lý giữ lại vẫn bị tính; nếu bộ xử lý không tính phí, chúng tôi cũng không tính.
:::

:::note[Phí chuyển tiền]
Có các khoản phí liên quan đến việc gửi tiền vào tài khoản của bạn. Điều này phụ thuộc vào phương thức chuyển tiền bạn chọn. Hiện tại chúng tôi hỗ trợ:

- **Chuyển khoản ngân hàng** — Chi phí phụ thuộc vào quốc gia bạn ở, nơi tiền được gửi từ, và bất kỳ chuyển đổi tiền tệ nào được áp dụng trên đường đi. Phí thanh toán và bất kỳ chi phí chuyển đổi nào do người nhận thanh toán, theo giá gốc. Chúng tôi có bộ tính toán báo giá bạn có thể sử dụng khi có tiền khả dụng trong tài khoản.

Nếu bạn muốn chúng tôi hỗ trợ phương thức thanh toán khác, hãy gửi email cho chúng tôi.
:::

### Mô hình 2 — Đại lý du lịch làm người bán hàng chính thức

Mô hình này chỉ dành cho các đại lý du lịch có giấy phép đại lý du lịch tại khu vực của họ và muốn làm người bán hàng chính thức. Nó chỉ dành cho đối tác API, đặt phòng qua [API Đối tác](/vi/integrations/partner-api/), và cần sự chấp thuận bằng văn bản trước của Wink. Một số đại lý du lịch đã đăng ký muốn chịu trách nhiệm xử lý thanh toán và phân phối tiền cho khách sạn. Theo mô hình này, họ chịu trách nhiệm về tiền và có giấy phép cần thiết để hoạt động tại quốc gia của họ.

#### Phân tích

:::note[Phí nền tảng]
Wink tính phí nền tảng 1,5% cho mỗi đặt phòng. Phí này bao gồm chi phí bảo trì nền tảng và cho phép chúng tôi cung cấp miễn phí tất cả những gì liệt kê ở trên.
:::

Sử dụng mô hình này, đại lý du lịch trả phí 1,5% của Wink cộng với bất kỳ phí sử dụng API Đối tác vượt quá hạn mức miễn phí, được lập hóa đơn hàng tháng.

## Đối tác trả gì

Dành cho các đối tác gửi đặt phòng: người tạo, liên kết, nền tảng, nhà phát triển và đại lý du lịch. Quan hệ đối tác không độc quyền, không giới hạn khu vực.

| | Thu tiền cho khách sạn (hầu hết đối tác) | Bạn là người bán hàng chính thức (chỉ đối tác API) |
|---|---|---|
| Phí giấy phép hoặc khu vực | Không | Không |
| Phí thiết lập | Không | Không |
| Phí đăng ký hoặc hàng tháng | Không | Không |
| Cam kết tối thiểu hoặc thời hạn | Không | Không. Áp dụng giới hạn tín dụng. |
| Truy cập API Đối tác | 10.000 đêm khách sạn mỗi tháng miễn phí, sau đó $0.0001 cho mỗi đêm khách sạn. Mặc định tắt pay-as-you-go; khi đạt hạn mức miễn phí, các cuộc gọi trả về `429`. | Giống |
| Phí giao dịch | Không. Bạn nhận hoa hồng (mặc định 10%). | Phí đặt phòng 1,5% trên giá trị đặt phòng, lập hóa đơn hàng tháng bằng USD, thanh toán trong vòng 15 ngày. Khi bật pay-as-you-go, phí sử dụng API Đối tác được lập hóa đơn riêng hàng tháng. |
| Phí hỗ trợ | Không | Không |
| Các khoản phí khác | Phí chuyển tiền thanh toán, theo giá gốc | Có thể yêu cầu thanh toán trước hoặc đặt cọc khi được duyệt. Lãi suất 1,5% mỗi tháng chỉ áp dụng cho hóa đơn quá hạn. |
| Khi phí thay đổi | Thông báo trước 30 ngày; chỉ áp dụng cho các đặt phòng sau khi thay đổi | Giống. Wink cũng có thể thay đổi giới hạn tín dụng của bạn sau khi thông báo. |

Lộ trình người bán hàng chính thức cần sự chấp thuận bằng văn bản trước của Wink. Xem [Mô hình 2](#model-2--travel-agent-as-merchant-of-record) ở trên và trang [API Đối tác](/vi/integrations/partner-api/).

## Sử dụng (pay-as-you-go)

Một vài tính năng tốn chi phí mỗi lần sử dụng — AI tạo nội dung, API mạng xã hội bên thứ ba, và cung cấp giá trực tiếp quy mô lớn. Thay vì gói gọn vào một kế hoạch hàng tháng bạn có thể không dùng, bạn chỉ trả cho những gì bạn thực sự sử dụng, và chỉ sau khi đã dùng hết hạn mức miễn phí hàng tháng.

| Tính năng | Miễn phí mỗi tháng | Sau đó | Đơn vị tính phí |
| -- | -- | -- | -- |
| Bài đăng xã hội — hình ảnh | 1 | $1.50 | Một bài đăng đã xuất bản |
| Bài đăng xã hội — hình ảnh do AI tạo | 0 | $2.50 | Một bài đăng đã xuất bản |
| Bài đăng xã hội — video được AI nâng cao | 0 | $4.00 | Một bài đăng đã xuất bản |
| Bài đăng xã hội — video do AI tạo | 0 | $14.00 | Một bài đăng đã xuất bản |
| Trả lời AI cho bình luận hoặc tin nhắn | 5 | $0.05 | Một câu trả lời |
| Trả lời chatbot | 5 | $0.05 | Một câu trả lời |
| API Đối tác | 10.000 | $0.0001 | Một đêm khách sạn |

Giá tính bằng USD. Hạn mức miễn phí được cấp **cho mỗi tài khoản**, không phải cho mỗi người dùng, và được đặt lại vào ngày 1 mỗi tháng (theo giờ UTC).

### Cách tính giá bài đăng

Bài đăng được tính giá dựa trên nội dung bên trong, vì đó là chi phí để chúng tôi tạo ra. Một hình ảnh tĩnh thì rẻ; video thì không; bất cứ thứ gì chúng tôi tạo bằng AI đều tốn kém hơn nhiều so với ảnh bạn tự cung cấp.

- **Hạn mức miễn phí chỉ áp dụng cho bài đăng hình ảnh tiêu chuẩn.** Bạn được một bài đăng như vậy cho mỗi tài khoản mỗi tháng. Bài đăng video và phương tiện do AI tạo sẽ bị tính phí ngay từ bài đăng đầu tiên — không có hạn mức miễn phí cho các loại này, nên một tài sản đăng video nên chuẩn bị cho khoản phí trong tháng đầu tiên.
- **Video được ưu tiên.** Nếu bài đăng có bất kỳ video nào, toàn bộ bài đăng sẽ được tính theo mức giá video. Bài đăng kết hợp hình ảnh và video được tính là bài đăng video.
- **Nguồn gốc AI quyết định mức giá.** Phương tiện bạn cung cấp — ảnh và video của bạn, hoặc bất cứ thứ gì từ thư viện nội dung Wink — được tính theo mức giá tiêu chuẩn. Phương tiện chúng tôi tạo cho bạn được tính theo mức giá AI.

### Những gì được và không được đo lường

- Chỉ bài đăng **được tạo ra** và xuất bản lên mạng xã hội bên thứ ba (Facebook, Instagram) mới bị tính phí. Bài đăng bạn tự viết là miễn phí, dù đăng ở đâu.
- **Xuất bản lên WinkLinks luôn miễn phí**, dù có tạo ra hay không.
- Bạn bị tính phí **khi xuất bản**, không phải mỗi lần thử. Việc tạo lại bản nháp cho đến khi bạn hài lòng không làm tăng hóa đơn — bạn chỉ trả một lần cho bài đăng bạn thực sự xuất bản. Tuy nhiên, số lần thử không vô hạn: mỗi bài đăng cho phép khoảng 10 lần tạo lại hình ảnh và 3 lần cho video, phản ánh chi phí sản xuất của chúng tôi. Bạn sẽ thấy còn bao nhiêu lần khi làm việc.
- Trên API Đối tác, một **đêm khách sạn** là một khách sạn được định giá cho một đêm lưu trú — *không phải* một cuộc gọi API. Một tìm kiếm trả về 20 khách sạn cho 3 đêm lưu trú là 60 đêm khách sạn từ một yêu cầu duy nhất. Các cuộc gọi Content và Lookup (tìm kiếm điểm đến và tự động hoàn thành) tính một đơn vị mỗi lần, bất kể trả về gì. Các điểm cuối tài khoản miễn phí.

### Bật tính năng

Pay-as-you-go mặc định tắt. Mọi người đều nhận được hạn mức miễn phí mà không cần làm gì.

Để vượt quá hạn mức, **chủ sở hữu** tài khoản bật pay-as-you-go và chọn tài khoản nào được đo lường. Sử dụng từ tất cả các tài khoản được bật sẽ được tổng hợp thành **một hóa đơn hàng tháng duy nhất**, bạn có thể thanh toán tự động bằng thẻ hoặc nhận hóa đơn để tự thanh toán.

Khi bật, việc sử dụng của bạn được đo lường nhưng **không bao giờ bị giới hạn tốc độ** — bạn sẽ không bị giới hạn tỷ lệ khi chi tiền với chúng tôi.

:::note[Nếu bạn không bật]
Không có gì bị gián đoạn và không bị tính phí. Bạn chỉ dừng lại ở hạn mức miễn phí trong tháng đó: các bài đăng tạo ra sẽ không được xuất bản và các cuộc gọi API Đối tác trả về `429` cho đến khi hạn mức được đặt lại.
:::

### Trạng thái thanh toán

| Trạng thái | Ý nghĩa |
| -- | -- |
| Tình trạng tốt | Mọi thứ hoạt động bình thường. |
| Quá hạn | Thanh toán thất bại và đang được thử lại. Tính năng của bạn vẫn hoạt động trong thời gian này. |
| Bị tạm ngưng | Hóa đơn không được thanh toán đến hạn cuối. Các hành động bị tính phí bị chặn cho đến khi thanh toán; các tính năng miễn phí vẫn hoạt động bình thường. |

:::tip[Giá trực tiếp]
Giá đơn vị và hạn mức miễn phí luôn được hiển thị trong Portal, trực tiếp từ hệ thống thanh toán của chúng tôi, để bạn có thể kiểm tra trước khi cam kết. Xem [Thanh toán](/vi/portal/plan) để bật pay-as-you-go, chọn tài khoản và theo dõi sử dụng và hóa đơn trong tháng. Xem [Mạng xã hội](/vi/portal/social/what-is-social) để biết khối lượng bài đăng ảnh hưởng thế nào đến chi phí của bạn.
:::

## Tác động của nền tảng

Cuối cùng, khi chúng tôi tiếp tục phát triển về quy mô và số lượng đặt phòng, chúng tôi muốn chia sẻ một số tác động của nền tảng với bạn. Nhiều đặt phòng hơn mang lại cơ hội giảm giá theo khối lượng từ bộ xử lý thanh toán của chúng tôi. Vì phí xử lý thẻ được chuyển thẳng theo giá gốc, bất kỳ khoản tiết kiệm nào chúng tôi thương lượng được sẽ chuyển thẳng đến khách sạn.

Hãy tham gia Wink ngay hôm nay và khám phá một cách kinh doanh mới, sinh lợi trong ngành khách sạn!
