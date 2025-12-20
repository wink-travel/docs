---
title: 简要概述
description: 本文将带您了解有关预订引擎的所有内容。
sidebar:
  order: 0
---

以下是我们在 Wink 上的职责划分：

- [Extranet](/zh-CN/extranet/what-is-extranet) 负责供应商管理库存。
- [Studio](/zh-CN/studio/what-is-studio) 负责加盟商管理内容。
- `Booking Engine` 负责将 `Studio` 中创建的、基于 `Extranet` 中创建的库存的内容变为可预订。
- [Payment](/zh-CN/payment/what-is-trip-pay) 负责向通过 [Wink 等平台] 预订的旅客收费/退款，并向供应商付款。

预订引擎是我们平台的核心。

其职责包括：

- 管理货币并保持汇率最新。
- 为价格提供者提供发送价格数据的方式。
- 管理查找数据。*例如地区、国家、目的地、酒店等。*
- 管理语言。
- 根据用户交互、事件和 API 调用生成分析数据。
- 以所需的格式、语言和货币提供可预订库存，例如：
    - Facebook 上的[可分享链接](/zh-CN/studio/shareable-links)。
    - https://ota.wink.travel 上的酒店着陆页，展示该酒店的库存。
    - 包含加盟商库存的[卡片](/zh-CN/studio/cards)。
    - 您的 [WinkLinks](/zh-CN/link-manager/wink-links) 账户上的[地图](/zh-CN/studio/maps)。
    - 来自远程旅行代理系统的[API 调用](/zh-CN/developers/apis)。
- 为旅客提供以下功能：
    - 搜索旅游库存。
    - 预订可用库存。
    - 管理他们的[预订和评价](/zh-CN/booking-engine/bookings)。
    - 管理他们未来想预订的[愿望清单](/zh-CN/booking-engine/bucket-list)。
    - 管理他们的[旅行档案](/zh-CN/booking-engine/travel-preferences)。*例如过敏信息、紧急联系人等。*

预订引擎是一组可重用功能，我们通过 https://ota.wink.travel 提供；这是一个高度可定制的网站，供酒店和加盟商向旅客销售产品。

需要更多自由度的集成商，可以通过我们的 [WordPress 插件](/zh-CN/developers/wordpress/)、[Web 组件](/zh-CN/developers/web-components) 和 [API](/zh-CN/developers/apis) 访问所有相同功能。

请继续阅读下一部分，了解预订引擎的更多功能。

## 进一步阅读

- 阅读关于我们的 [WordPress 插件](/zh-CN/developers/wordpress/)。
- 阅读关于我们的 [Web 组件](/zh-CN/developers/web-components)。
- 阅读关于我们的 [API](/zh-CN/developers/apis)。
