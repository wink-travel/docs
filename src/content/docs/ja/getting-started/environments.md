---
title: 環境
description: 本記事は、テスターや開発者向けに、当社のさまざまなサーバー環境へのアクセス方法についての情報を含んでいます。
sidebar:
  order: 8
---

Winkでは、常にすべての作業に対して2つの環境を運用しています：

- Productionは安定した環境です。
- Stagingは認証およびテスト用の環境です。

認証準備やWinkプラットフォームのテストを希望するインテグレーター、ホテル、旅行代理店の方は、まずstaging環境でアカウントを作成してください。

:::note
staging環境はリクエストベースで利用可能です。つまり、使用がない場合はスリープ状態になり、使用があると自動的に再起動します。起動時は少しお待ちください。最初にサーバーやアプリのいずれかに接続してから、すべてのサーバーが起動するまで約1分かかります。
:::

## サーバー

以下は、当社のサーバー名とその用途を示したマトリックスです。

| 機能 | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Payment | https://staging-api.trippay.io | https://api.trippay.io | 

## アプリケーション

当社のアプリケーションも、お客様向けにテスト環境と本番環境を用意しています。

| アプリケーション | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Corporate | https://staging-group.wink.travel | https://group.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
