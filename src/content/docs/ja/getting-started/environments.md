---
title: 環境
description: 本記事は、テスターや開発者向けに当社のさまざまなサーバー環境へのアクセス方法についての情報を含んでいます。
sidebar:
  order: 8
---

Winkでは、常にすべての作業に対して2つの環境を運用しています：

- Productionは安定した環境です。
- Stagingは認証およびテスト用の環境です。

認証準備やWinkプラットフォームのテストを希望するインテグレーター、ホテル、旅行代理店の方は、まずstaging環境でアカウントを作成してください。

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
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## アプリケーション

当社のアプリケーションもお客様向けにテスト環境と本番環境があります。

| アプリケーション | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
