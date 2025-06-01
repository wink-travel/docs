---
title: Environments
description: この記事には、テスターと開発者向けに、さまざまなサーバー環境にアクセスする方法に関する情報が記載されています。
sidebar:
  order: 8
---
Wink では、あらゆる作業に対して常に 2 つの環境を実行しています。

* 生産は私たちの安定した環境です。
* ステージングは、認証およびテスト環境です。

認定の準備や Wink プラットフォームのテストを希望するインテグレーター、ホテル、旅行代理店の場合は、ステージング環境でアカウントを作成して開始してください。

:::note
ステージング環境はリクエストベースで利用可能です。つまり、使用されていない場合はスリープ状態になり、使用があれば自動的に再起動します。ステージング環境を起動する場合は、しばらくお待ちください。弊社のサーバーまたはアプリのいずれかに初めて接続してから、すべてのサーバーが起動するまで約1分かかります。
:::

## サーバー

以下は、当社のサーバーの名前とその使用状況を示すマトリックスです。

| 機能 | ステージング | 本番環境
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| インベントリ | https://staging-api.wink.travel | https://api.wink.travel |
| 統合 | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| 支払い | https://staging-api.trippay.io | https://api.trippay.io |

## アプリケーション

当社のアプリケーションには、お客様向けのテスト環境と実稼働環境もあります。

| アプリケーション | ステージング | プロダクション
| ------- | ------- | ---------- |
| エージェント | https://staging-agent.wink.travel | https://agent.wink.travel |
| コーポレート | https://staging-group.wink.travel | https://group.wink.travel |
| エクストラネット | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| お支払い | https://staging-pay.wink.travel | https://pay.wink.travel |
| スタジオ | https://staging-studio.wink.travel | https://studio.wink.travel |
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |

