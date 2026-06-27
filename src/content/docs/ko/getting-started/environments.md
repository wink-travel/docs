---
title: 환경
description: 이 문서에는 다양한 서버 환경에 접근하는 방법에 대해 테스터와 개발자를 위한 정보가 포함되어 있습니다.
sidebar:
  order: 8
---

Wink에서는 항상 모든 작업에 대해 2개의 환경을 운영합니다:

- 프로덕션은 안정적인 환경입니다.
- 스테이징은 인증 및 테스트 환경입니다.

인티그레이터, 호텔 또는 여행사로서 인증 준비나 Wink 플랫폼 테스트를 원하시면, 스테이징 환경에서 계정을 생성하여 시작하세요.

:::note
스테이징 환경은 요청 기반으로 제공됩니다. 사용이 없으면 잠자기 모드로 전환되며, 사용 시 자동으로 다시 켜집니다. 환경을 깨우는 중이라면 잠시 기다려 주세요. 서버나 앱 중 하나에 처음 연결한 후 모든 서버가 시작되는 데 약 1분 정도 걸립니다.
:::

## 서버

아래는 서버 이름과 용도를 포함한 매트릭스입니다.

| 기능 | 스테이징 | 프로덕션
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| 인벤토리 | https://staging-api.wink.travel | https://api.wink.travel | 
| 통합 | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | 결제 | https://staging-api.trippay.io | https://api.trippay.io |  -->

## 애플리케이션

고객을 위한 애플리케이션도 테스트 및 프로덕션 환경이 있습니다.

| 애플리케이션 | 스테이징 | 프로덕션
| ------- | ------- | ---------- |
| 에이전트 | https://staging-agent.wink.travel | https://agent.wink.travel | 
| 예약 엔진 | https://staging-ota.wink.travel | https://ota.wink.travel | 
| 익스트라넷 | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| 내 계정 | https://staging-app.wink.travel | https://app.wink.travel | 
| 결제 | https://staging-pay.wink.travel | https://pay.wink.travel | 
| 스튜디오 | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
