---
title: W skrócie
description: Ten artykuł przeprowadzi Cię przez wszystko, co chciałeś wiedzieć o silniku rezerwacji.
sidebar:
  order: 0
---

Oto jak dzielimy odpowiedzialność w Wink:

- [Extranet](/pl/extranet/what-is-extranet) zajmuje się dostawcami zarządzającymi inwentarzem.
- [Studio](/pl/studio/what-is-studio) zajmuje się afiliantami zarządzającymi treścią.
- `Booking Engine` zajmuje się tworzeniem treści, stworzonych w `Studio`, które opierały się na inwentarzu stworzonym w `Extranet` i udostępnianiem ich do rezerwacji.
- [Payment](/pl/payment/what-is-trip-pay) zajmuje się pobieraniem opłat / zwrotami dla podróżnych rezerwujących [poprzez platformy takie jak Wink] oraz wypłatami dla dostawców.

Silnik rezerwacji jest sercem naszej platformy.

Jego obowiązki obejmują:

- Zarządzanie walutami i utrzymywanie aktualnych kursów wymiany.
- Umożliwianie dostawcom taryf przesyłania nam danych o cenach.
- Zarządzanie danymi referencyjnymi. *np. regiony, kraje, destynacje, obiekty itp.*
- Zarządzanie językami.
- Generowanie analiz na podstawie interakcji użytkowników, zdarzeń i wywołań API.
- Udostępnianie rezerwowanego inwentarza w pożądanym formacie, języku i walucie, takich jak:
    - [link do udostępniania](/pl/studio/shareable-links) na Facebooku.
    - Strona docelowa hotelu na https://ota.wink.travel z inwentarzem tego hotelu.
    - [karta](/pl/studio/cards) zawierająca inwentarz afilianta.
    - [mapa](/pl/studio/maps) na Twoim koncie [WinkLinks](/pl/link-manager/wink-links).
    - [wywołanie API](/pl/developers/apis) z zewnętrznego systemu agenta turystycznego.
- Zapewnianie podróżnym możliwości:
    - Wyszukiwania inwentarza podróży.
    - Rezerwowania dostępnego inwentarza.
    - Zarządzania swoimi [rezerwacjami i opiniami](/pl/booking-engine/bookings).
    - Zarządzania swoją [liście życzeń](/pl/booking-engine/bucket-list) rzeczy do zarezerwowania w przyszłości.
    - Zarządzania swoim [profilem podróżnym](/pl/booking-engine/travel-preferences). *np. alergie, kontakt alarmowy itp.*

Silnik rezerwacji to zbiór wielokrotnego użytku funkcji, które udostępniamy przez https://ota.wink.travel; wysoce konfigurowalną stronę internetową dla hoteli i afiliantów do sprzedaży ich ofert podróżnym.

Integratorzy, którzy chcą jeszcze większej swobody, mają dostęp do tych samych funkcji poprzez naszą [wtyczkę WordPress](/pl/developers/wordpress/), [Web Components](/pl/developers/web-components) oraz [API](/pl/developers/apis).

Przejdź do kolejnych sekcji, aby dowiedzieć się więcej o tym, co oferuje silnik rezerwacji.

## Dalsza lektura

- Przeczytaj o naszej [wtyczce WordPress](/pl/developers/wordpress/).
- Przeczytaj o naszych [Web Components](/pl/developers/web-components).
- Przeczytaj o naszych [API](/pl/developers/apis).
