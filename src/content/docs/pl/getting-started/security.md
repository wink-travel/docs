---
title: Security
description: >-
  W tym artykule znajdują się informacje o środkach bezpieczeństwa, które
  wdrażamy i które są co roku publikowane przez naszą zewnętrzną firmę
  ochroniarską.
sidebar:
  order: 6
---
# Dokument przeglądu bezpieczeństwa Wink

*Ostatnia aktualizacja: 7 września 2024 r.*

*Wersja 1.0*

## Cel i zakres

W ramach naszego stałego zaangażowania w bezpieczeństwo i ochronę danych użytkowników przeprowadzamy regularne testy penetracyjne naszej aplikacji internetowej. Niniejszy dokument przedstawia nasze metodologie testowania, zawiera podsumowanie ustaleń i podkreśla nasze podejście do ciągłego doskonalenia bezpieczeństwa.

Niniejszy dokument będzie aktualizowany w miarę opracowywania nowych raportów lub występowania istotnych zmian.

Domeny w zakresie:\
\*.mrugnięcie.podróż\
\*.trippay.io

## Częstotliwość i harmonogram testowania

Nasze testy penetracyjne są przeprowadzane corocznie, a dodatkowe testy są planowane w razie potrzeby po istotnych aktualizacjach aplikacji lub infrastruktury. Ta regularna częstotliwość testów zapewnia, że wyprzedzamy rozwijające się zagrożenia i utrzymujemy bezpieczne środowisko.

## Metodologie testowania

Nasze testy penetracyjne są kompleksowe i obejmują szeroki zakres aspektów bezpieczeństwa, w tym między innymi:

* **OWASP Top 10:**&#x4E;asze testy są ukierunkowane na najpoważniejsze zagrożenia bezpieczeństwa, takie jak wstrzyknięcie kodu, zerwanie uwierzytelniania i atak typu cross-site scripting (XSS).
* **Testowanie metodą czarnej skrzynki i szarej skrzynki:**&#x57; zależności od zakresu nasz zespół wykorzystuje te metodologie do symulacji scenariuszy ataków zewnętrznych i wewnętrznych.
* **Testowanie automatyczne i ręczne:**&#x55;żywamy Burp Suite Pro, wiodącego zestawu narzędzi do testowania bezpieczeństwa, aby przeprowadzać automatyczne skanowanie bezpieczeństwa i wspomagać ręczne techniki testowania w celu identyfikowania złożonych luk w zabezpieczeniach i uzyskania najlepszego możliwego pokrycia. Do bardziej szczegółowej identyfikacji luk w zabezpieczeniach używane są niektóre specjalistyczne narzędzia, np. SQLmap.

## Podsumowanie ustaleń

Poniżej przedstawiamy ogólne podsumowanie naszego najnowszego raportu z testów penetracyjnych:

* **Łączna liczba zidentyfikowanych luk:**&#x32;
* **Dystrybucja stopnia zagrożenia:**
  * Krytyczny: 2
* **Rodzaje wykrytych luk:**
  * Złamana kontrola dostępu
  * Niebezpieczny projekt

Szczegółowe ustalenia można znaleźć w pełnym raporcie.

### Oceny ryzyka i wpływ

Obie znalezione luki w zabezpieczeniach są oceniane jako krytyczne, ponieważ obie mogły mieć poważne skutki finansowe. Pierwsza z nich umożliwiła złośliwemu uwierzytelnionemu użytkownikowi przejęcie kontroli nad kontem płatniczym Trippay innej firmy. Druga luka umożliwiła złośliwemu użytkownikowi modyfikację kwoty płatności wymaganej do rezerwacji.

### Działania naprawcze i łagodzące

Podjęliśmy następujące kroki w celu usunięcia zidentyfikowanych luk:

* **Natychmiastowe poprawki:**&#x4B;rytyczne luki zostały załatane w ciągu 48 godzin od ich wykrycia.
* **Przegląd i utwardzanie kodu:**&#x5A;espół programistów wdrożył dodatkowe środki bezpieczeństwa w oparciu o nasze zalecenia.

## Ciągłe doskonalenie

Testowanie penetracyjne jest częścią naszej szerszej strategii ciągłego doskonalenia bezpieczeństwa. Wyniki każdego testu stanowią podstawę naszych zasad bezpieczeństwa, wpływają na praktyki rozwojowe i napędzają ulepszenia w naszej architekturze bezpieczeństwa.

## Ekspertyza zespołu

Nasze testy penetracyjne są przeprowadzane przez wewnętrznego specjalistę z dużym doświadczeniem w różnych projektach i branżach. Korzystając z wiodących narzędzi i metod, nasz ekspert zapewnia, że nasza aplikacja jest dokładnie testowana pod kątem najnowszych zagrożeń bezpieczeństwa.

## Zaangażowanie w bezpieczeństwo

Jesteśmy oddani utrzymywaniu bezpiecznego środowiska aplikacji dla naszych użytkowników i interesariuszy. Nasze stałe wysiłki w zakresie testowania i ulepszania bezpieczeństwa pokazują nasze zaangażowanie w ochronę przed ewoluującymi zagrożeniami.

## Raportuj dostęp i aktualizacje

Ten dokument będzie stale aktualizowany w miarę wydawania nowych raportów z testów penetracyjnych. Aby uzyskać dostęp do pełnego raportu, skontaktuj się z nami za pośrednictwem poniższego adresu e-mail. Przyszłe aktualizacje będą obejmować nowo zidentyfikowane luki w zabezpieczeniach, działania naprawcze i dostosowania naszych metodologii testowania.

Jeśli masz dalsze pytania, skontaktuj się z nami pod adresem security@wink.travel.

