---
title: 환경
description: 이 문서에는 테스터와 개발자가 다양한 서버 환경에 접근하는 방법에 대한 정보가 포함되어 있습니다.
sidebar:
  order: 8
---

Wink에서는 항상 모든 작업에 대해 2개의 환경을 운영합니다:

- Production은 안정적인 환경입니다.
- Staging은 인증 및 테스트 환경입니다.

통합자, 호텔 또는 여행사로서 인증 준비나 Wink 플랫폼 테스트를 원하시면, 시작을 위해 staging 환경에서 계정을 생성하세요.

:::note
staging 환경은 요청 기반으로 제공됩니다. 사용이 없으면 잠자기 모드로 전환되며, 사용이 시작되면 다시 켜집니다. 환경을 깨우는 중에는 인내심을 가져주세요. 서버나 앱 중 하나에 처음 연결한 후 모든 서버가 시작되는 데 약 1분 정도 걸립니다.
:::

## 서버

아래는 서버 이름과 용도를 포함한 매트릭스입니다.

| 기능 | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## 애플리케이션

고객을 위한 애플리케이션도 테스트 및 프로덕션 환경이 있습니다.

| 애플리케이션 | Staging | Production
| ------- | ------- | ---------- |
| Agent | https://staging-agent.wink.travel | https://agent.wink.travel | 
| Booking engine | https://staging-ota.wink.travel | https://ota.wink.travel | 
| Extranet | https://staging-extranet.wink.travel | https://extranet.wink.travel | 
| My Account | https://staging-my.wink.travel | https://my.wink.travel | 
| Payment | https://staging-pay.wink.travel | https://pay.wink.travel | 
| Studio | https://staging-studio.wink.travel | https://studio.wink.travel | 
| WinkLinks | https://staging-i.trvl.as | https://i.trvl.as |
