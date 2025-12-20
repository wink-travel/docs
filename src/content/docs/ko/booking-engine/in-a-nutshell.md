---
title: 한눈에 보기
description: 이 문서에서는 예약 엔진에 대해 알고 싶었던 모든 내용을 안내합니다.
sidebar:
  order: 0
---

Wink에서 책임 분담 방식은 다음과 같습니다:

- [Extranet](/ko/extranet/what-is-extranet)은 공급자가 재고를 관리하는 부분입니다.
- [Studio](/ko/studio/what-is-studio)은 제휴사가 콘텐츠를 관리하는 부분입니다.
- `Booking Engine`은 `Extranet`에서 생성된 재고를 기반으로 `Studio`에서 만든 콘텐츠를 예약 가능하게 만드는 부분입니다.
- [Payment](/ko/payment/what-is-trip-pay)은 [Wink와 같은 플랫폼을 통해] 예약한 여행자에게 요금을 청구/환불하고 공급자에게 지급하는 부분입니다.

예약 엔진은 우리 플랫폼의 핵심입니다.

그 책임은 다음과 같습니다:

- 통화 관리 및 환율 최신 상태 유지.
- 요금 제공자가 요금 데이터를 전송할 수 있는 방법 제공.
- 조회 데이터 관리. *예: 지역, 국가, 목적지, 숙소 등.*
- 언어 관리.
- 사용자 상호작용, 이벤트 및 API 호출을 기반으로 분석 생성.
- 원하는 형식, 언어 및 통화로 예약 가능한 재고 제공, 예를 들어:
    - Facebook에서 사용할 수 있는 [공유 가능한 링크](/ko/studio/shareable-links).
    - 해당 호텔의 재고가 있는 https://ota.wink.travel의 호텔 랜딩 페이지.
    - 제휴사 재고가 포함된 [카드](/ko/studio/cards).
    - [WinkLinks](/ko/link-manager/wink-links) 계정의 [지도](/ko/studio/maps).
    - 원격 여행사 시스템의 [API 호출](/ko/developers/apis).
- 여행자에게 다음과 같은 기능 제공:
    - 여행 재고 검색.
    - 이용 가능한 재고 예약.
    - [예약 및 리뷰](/ko/booking-engine/bookings) 관리.
    - 미래에 예약할 항목의 [버킷 리스트](/ko/booking-engine/bucket-list) 관리.
    - [여행 프로필](/ko/booking-engine/travel-preferences) 관리. *예: 알레르기, 비상 연락처 등.*

예약 엔진은 https://ota.wink.travel을 통해 제공하는 재사용 가능한 기능 모음으로, 호텔과 제휴사가 여행자에게 상품을 판매할 수 있는 매우 맞춤화된 웹사이트입니다.

더 많은 자유를 원하는 통합자는 [WordPress 플러그인](/ko/developers/wordpress/), [웹 컴포넌트](/ko/developers/web-components), [API](/ko/developers/apis)를 통해 동일한 기능에 접근할 수 있습니다.

다음 섹션으로 계속 진행하여 예약 엔진이 제공하는 기능에 대해 더 읽어보세요.

## 추가 읽을거리

- [WordPress 플러그인](/ko/developers/wordpress/)에 대해 읽어보세요.
- [웹 컴포넌트](/ko/developers/web-components)에 대해 읽어보세요.
- [API](/ko/developers/apis)에 대해 읽어보세요.
