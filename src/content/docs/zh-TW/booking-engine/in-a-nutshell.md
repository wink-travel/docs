---
title: 簡要說明
description: 本文將帶您了解關於訂位引擎的所有資訊。
sidebar:
  order: 0
---

以下是我們在 Wink 上的職責劃分：

- [Extranet](/zh-TW/extranet/what-is-extranet) 負責供應商管理庫存。
- [Studio](/zh-TW/studio/what-is-studio) 負責聯盟管理內容。
- `Booking Engine` 負責將在 `Studio` 中建立、基於 `Extranet` 中建立的庫存內容，轉化為可預訂的形式。
- [Payment](/zh-TW/payment/what-is-trip-pay) 負責向透過 [像 Wink 這樣的平台] 預訂的旅客收費/退款，並支付給供應商。

訂位引擎是我們平台的核心。

其職責包括：

- 管理貨幣並保持匯率最新。
- 提供價格供應商傳送價格資料的方式。
- 管理查詢資料。*例如地區、國家、目的地、住宿等。*
- 管理語言。
- 根據用戶互動、事件和 API 呼叫產生分析數據。
- 以所需格式、語言和貨幣提供可預訂的庫存，例如：
    - Facebook 上的[可分享連結](/zh-TW/studio/shareable-links)。
    - https://ota.wink.travel 上該飯店的飯店登陸頁面。
    - 含有聯盟庫存的[卡片](/zh-TW/studio/cards)。
    - 您的 [WinkLinks](/zh-TW/link-manager/wink-links) 帳戶上的[地圖](/zh-TW/studio/maps)。
    - 來自遠端旅行社系統的[API 呼叫](/zh-TW/developers/apis)。
- 提供旅客以下功能：
    - 搜尋旅遊庫存。
    - 預訂可用庫存。
    - 管理他們的[訂單與評論](/zh-TW/booking-engine/bookings)。
    - 管理他們未來想預訂的[願望清單](/zh-TW/booking-engine/bucket-list)。
    - 管理他們的[旅遊偏好設定](/zh-TW/booking-engine/travel-preferences)。*例如過敏資訊、緊急聯絡人等。*

訂位引擎是一組可重複使用的功能，我們透過 https://ota.wink.travel 提供；這是一個高度可自訂的網站，供飯店和聯盟向旅客銷售商品。

想要更多自由度的整合者，可以透過我們的 [WordPress 外掛](/zh-TW/developers/wordpress/)、[Web Components](/zh-TW/developers/web-components) 和 [APIs](/zh-TW/developers/apis) 使用所有相同功能。

請繼續閱讀下一節，了解訂位引擎的更多功能。

## 延伸閱讀

- 閱讀關於我們的 [WordPress 外掛](/zh-TW/developers/wordpress/)。
- 閱讀關於我們的 [Web Components](/zh-TW/developers/web-components)。
- 閱讀關於我們的 [APIs](/zh-TW/developers/apis)。
