---
title: 要約
description: この文章では、予約エンジンについて知りたいことをすべて解説します。
sidebar:
  order: 0
---

Winkにおける責任分担は以下の通りです：

- [Extranet](/ja/extranet/what-is-extranet) はサプライヤーが在庫を管理することに関わります。
- [Studio](/ja/studio/what-is-studio) はアフィリエイトがコンテンツを管理することに関わります。
- `Booking Engine` は、`Extranet` で作成された在庫を元に `Studio` で作成されたコンテンツを予約可能にすることに関わります。
- [Payment](/ja/payment/what-is-trip-pay) は、[Winkのようなプラットフォームを通じて]予約した旅行者からの課金・返金やベンダーへの支払いに関わります。

予約エンジンは当プラットフォームの中核です。

その責任範囲は以下を含みます：

- 通貨の管理と為替レートの最新化。
- レート提供者がレートデータを送信するための手段の提供。
- 参照データの管理。*例：地域、国、目的地、施設など。*
- 言語の管理。
- ユーザーの操作、イベント、APIコールに基づく分析の生成。
- 希望のフォーマット、言語、通貨で予約可能な在庫を提供。例えば：
    - Facebook上の[共有可能なリンク](/ja/studio/shareable-links)。
    - https://ota.wink.travel のホテルランディングページにそのホテルの在庫を表示。
    - アフィリエイト在庫を含む[カード](/ja/studio/cards)。
    - [WinkLinks](/ja/link-manager/wink-links)アカウント上の[マップ](/ja/studio/maps)。
    - リモートの旅行代理店システムからの[APIコール](/ja/developers/apis)。
- 旅行者に以下の手段を提供：
    - 旅行在庫の検索。
    - 利用可能な在庫の予約。
    - [予約とレビュー](/ja/booking-engine/bookings)の管理。
    - 将来予約したいものの[バケットリスト](/ja/booking-engine/bucket-list)の管理。
    - [旅行プロフィール](/ja/booking-engine/travel-preferences)の管理。*例：アレルギー、緊急連絡先など。*

予約エンジンは https://ota.wink.travel を通じて提供する再利用可能な機能の集合体であり、ホテルやアフィリエイトが旅行者に商品を販売するための高度にカスタマイズ可能なウェブサイトです。

さらに自由度を求める統合者は、当社の[WordPressプラグイン](/ja/developers/wordpress/)、[Web Components](/ja/developers/web-components)、[API](/ja/developers/apis)を通じて同じ機能すべてにアクセスできます。

次のセクションに進み、予約エンジンの提供内容についてさらにお読みください。

## さらに読む

- 当社の[WordPressプラグイン](/ja/developers/wordpress/)について読む。
- 当社の[Web Components](/ja/developers/web-components)について読む。
- 当社の[API](/ja/developers/apis)について読む。
