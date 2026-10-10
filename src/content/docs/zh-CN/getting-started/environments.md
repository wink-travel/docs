---
title: 环境
description: 本文包含测试人员和开发人员关于如何访问我们不同服务器环境的信息。
sidebar:
  order: 8
---

在 Wink，我们始终运行两个环境来支持所有工作：

- 生产环境是我们的稳定环境。
- 预发布环境是我们的测试环境，也是渠道经理和旅行社进行认证的地方。

如果您想测试 Wink 平台，无论是作为开发者、酒店还是旅行社，请在我们的预发布环境中创建账户以开始使用。渠道经理也会在此进行他们的[认证](/zh-CN/guides/integrators/add-your-channel-manager/#certification)。

在预发布或生产环境创建账户需要接受 Wink 的条款和付款条款，且该接受具有约束力。渠道经理和旅行社在获得生产环境访问权限前也需要完成认证；其他用户则可自行切换到生产环境。

:::note
预发布环境按需提供。这意味着如果没有使用，它会进入休眠状态，并在有使用时自动唤醒。如果您正在唤醒它，请耐心等待。首次连接我们的服务器或应用后，启动所有服务器大约需要一分钟时间。
:::

## 服务器

下表列出了我们的服务器名称及其用途。

| 功能 | 预发布 | 生产
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| 库存 | https://staging-api.wink.travel | https://api.wink.travel | 
| 集成 | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| 合作伙伴 (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | 支付 | https://staging-api.trippay.io | https://api.trippay.io |  -->

## 应用程序

我们的应用程序也为客户提供测试和生产环境。

| 应用 | 预发布 | 生产
| ------- | ------- | ---------- |
| 门户 | https://staging-app.wink.travel | https://app.wink.travel | 
| 预订引擎 | https://staging-book.wink.travel | https://book.wink.travel | 
| 链接管理器 | https://staging-i.trvl.as | https://i.trvl.as |
