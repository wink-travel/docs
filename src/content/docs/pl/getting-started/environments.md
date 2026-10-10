---
title: Środowiska
description: Ten artykuł zawiera informacje dla testerów i deweloperów o tym, jak uzyskać dostęp do naszych różnych środowisk serwerowych.
sidebar:
  order: 8
---

W Wink prowadzimy 2 środowiska dla wszystkiego, co robimy, przez cały czas:

- Produkcja to nasze stabilne środowisko.
- Staging to nasze środowisko testowe, gdzie certyfikowani są channel managerowie i agenci turystyczni.

Jeśli chcesz testować platformę Wink jako deweloper, hotel lub agent turystyczny, załóż konto w naszym środowisku staging, aby zacząć. Channel managerowie również przeprowadzają tam swoją [certyfikację](/pl/guides/integrators/add-your-channel-manager/#certification).

Założenie konta w środowisku staging lub produkcyjnym wymaga akceptacji Regulaminu Wink oraz Warunków Płatności, a ta akceptacja jest wiążąca. Channel managerowie i agenci turystyczni muszą również przejść certyfikację przed dostępem do produkcji; wszyscy pozostali przechodzą do produkcji samodzielnie.

:::note
Środowisko staging jest dostępne na zasadzie zgłoszenia. Oznacza to, że przechodzi w stan uśpienia, jeśli nie jest używane, i samoczynnie się włącza, gdy jest potrzebne. Prosimy o cierpliwość podczas jego wybudzania. Uruchomienie wszystkich serwerów po pierwszym połączeniu z jednym z naszych serwerów lub aplikacji zajmuje około minuty.
:::

## Serwery

Poniżej znajduje się tabela zawierająca nazwy naszych serwerów oraz ich zastosowanie.

| Funkcja | Staging | Produkcja
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Aplikacje

Nasze aplikacje również mają środowiska testowe i produkcyjne dla naszych klientów.

| Aplikacja | Staging | Produkcja
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
