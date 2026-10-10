---
title: 環境
description: テスターや開発者向けに、当社のさまざまなサーバー環境へのアクセス方法についての情報を掲載しています。
sidebar:
  order: 8
---

Winkでは、常にすべての作業に対して2つの環境を運用しています。

- Productionは安定した環境です。
- Stagingはテスト環境であり、チャネルマネージャーや旅行代理店の認証が行われる場所です。

Winkプラットフォームをテストしたい開発者、ホテル、旅行代理店の方は、まずstaging環境でアカウントを作成してください。チャネルマネージャーもそこで[認証](/ja/guides/integrators/add-your-channel-manager/#certification)を行います。

stagingまたはproductionでアカウントを作成するには、Winkの利用規約および支払い条件に同意する必要があり、その同意は拘束力を持ちます。チャネルマネージャーと旅行代理店はproductionアクセス前に認証が必要で、それ以外の方は自分でproductionに移行します。

:::note
staging環境はリクエストベースで利用可能です。つまり、使用がない場合はスリープ状態になり、使用があると自動的に起動します。起動時は少しお待ちください。最初にサーバーやアプリのいずれかに接続してから、すべてのサーバーが起動するまで約1分かかります。
:::

## サーバー

以下は当社のサーバー名とその用途を示したマトリックスです。

| 機能 | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## アプリケーション

当社のアプリケーションも、お客様向けにテスト環境と本番環境があります。

| アプリケーション | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
