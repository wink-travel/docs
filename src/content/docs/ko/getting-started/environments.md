---
title: Environments
description: 이 문서에는 테스터와 개발자가 다양한 서버 환경에 액세스하는 방법에 대한 정보가 포함되어 있습니다.
sidebar:
  order: 8
---
Wink에서는 항상 수행하는 모든 작업에 대해 2가지 환경을 실행합니다.

* 생산은 우리의 안정적인 환경입니다.
* 스테이징은 인증 및 테스트 환경입니다.

통합자, 호텔 또는 여행사로서 Wink 플랫폼 인증을 준비하거나 테스트하려는 경우 스테이징 환경에서 계정을 만들어 시작하세요.

:::참고
스테이징 환경은 요청 기반으로 제공됩니다. 즉, 사용량이 없으면 절전 모드로 전환되고 사용량이 증가하면 자동으로 다시 켜집니다. 스테이징 환경을 다시 활성화하는 경우 잠시 기다려 주시기 바랍니다. 저희 서버나 앱 중 하나에 처음 연결한 후 모든 서버를 시작하는 데 약 1분 정도 소요됩니다.
:::

## 서버

아래는 서버 이름과 사용법을 담은 매트릭스입니다.

| 기능 | 스테이징 | 프로덕션
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel |
| 인벤토리 | https://staging-api.wink.travel | https://api.wink.travel |
| 통합 | https://staging-integrations.wink.travel | https://integrations.wink.travel |
| 결제 | https://staging-api.trippay.io | https://api.trippay.io |

## 응용 프로그램

당사의 애플리케이션에는 고객을 위한 테스트 및 운영 환경도 마련되어 있습니다.

| 신청 | 스테이징 | 제작
| ------- | ------- | ---------- |
| 에이전트 | https://staging-agent.wink.travel | https://agent.wink.travel |
| 기업 | https://staging-group.wink.travel | https://group.wink.travel |
| 엑스트라넷 | https://staging-extranet.wink.travel | https://extranet.wink.travel |
| 결제 | https://staging-pay.wink.travel | https://pay.wink.travel |
| 스튜디오 | https://staging-studio.wink.travel | https://studio.wink.travel |
| 윙크링크 | https://staging-i.trvl.as | https://i.trvl.as |

