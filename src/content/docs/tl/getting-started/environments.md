---
title: Mga Kapaligiran
description: Naglalaman ang artikulong ito ng impormasyon para sa mga tester at developer tungkol sa kung paano makakuha ng access sa aming iba't ibang server na kapaligiran.
sidebar:
  order: 8
---

Sa Wink, nagpapatakbo kami ng 2 kapaligiran para sa lahat ng aming ginagawa sa lahat ng oras:

- Ang Production ay ang aming matatag na kapaligiran.
- Ang Staging ay ang aming testing na kapaligiran, at dito kinukumpirma ang mga channel manager at travel agent.

Kung nais mong subukan ang Wink platform, bilang isang developer, hotel, o travel agent, gumawa ng account sa aming staging environment upang makapagsimula. Ang mga channel manager ay nagpapatakbo rin ng kanilang [certification](/tl/guides/integrators/add-your-channel-manager/#certification) doon.

Ang paggawa ng account sa staging o production ay nangangailangan ng pagtanggap sa Mga Tuntunin ng Wink at Mga Tuntunin sa Pagbabayad, at ang pagtanggap na iyon ay may bisa. Kinakailangan din ng certification ang mga channel manager at travel agent bago makakuha ng access sa production; ang iba pa ay kusang lilipat sa production.

:::note
Ang staging environment ay available kapag hiniling. Ibig sabihin, ito ay papahingahin kung walang paggamit at muling bubuhayin kapag may aktibidad. Mangyaring magtiyaga kung binubuhay mo ito. Tumitagal ng humigit-kumulang isang minuto upang simulan ang lahat ng server pagkatapos mong unang kumonekta sa isa sa aming mga server o app.
:::

## Mga Server

Nasa ibaba ang matrix na naglalaman ng mga pangalan ng aming mga server at ang kanilang gamit.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Mga Aplikasyon

Ang aming mga aplikasyon ay mayroon ding test at production na kapaligiran para sa aming mga customer.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
