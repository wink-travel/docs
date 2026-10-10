---
title: 環境
description: 本文包含測試人員和開發人員如何取得我們不同伺服器環境存取權的資訊。
sidebar:
  order: 8
---

在 Wink，我們隨時運行兩個環境來處理所有事務：

- Production 是我們的穩定環境。
- Staging 是我們的測試環境，也是頻道管理員和旅行社進行認證的地方。

如果您想測試 Wink 平台，無論是開發人員、飯店或旅行社，請在我們的 staging 環境中建立帳號以開始使用。頻道管理員也會在此進行他們的[認證](/zh-TW/guides/integrators/add-your-channel-manager/#certification)。

在 staging 或 production 建立帳號需要接受 Wink 的條款與付款條款，且該接受具有約束力。頻道管理員和旅行社在取得 production 存取權前也需要通過認證；其他人則可自行轉入 production。

:::note
staging 環境為申請制。這表示若無使用，環境會進入休眠狀態，當有使用時會自動啟動。若您正在喚醒環境，請耐心等候。首次連接我們的伺服器或應用程式後，啟動所有伺服器約需一分鐘。
:::

## 伺服器

以下為我們伺服器名稱及其用途的對照表。

| 功能 | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| 庫存 | https://staging-api.wink.travel | https://api.wink.travel | 
| 整合 | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| 合作夥伴 (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | 付款 | https://staging-api.trippay.io | https://api.trippay.io |  -->

## 應用程式

我們的應用程式也為客戶提供測試與生產環境。

| 應用程式 | Staging | Production
| ------- | ------- | ---------- |
| 入口網站 | https://staging-app.wink.travel | https://app.wink.travel | 
| 訂房引擎 | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
