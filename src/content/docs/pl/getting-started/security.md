---
title: Bezpieczeństwo
description: Ten artykuł zawiera informacje o wdrażanych przez nas środkach bezpieczeństwa, które są corocznie publikowane przez naszą zewnętrzną firmę zajmującą się bezpieczeństwem.
sidebar:
  order: 6
---

*Ostatnia aktualizacja: 7 września 2024*

*Wersja 1.0*

## Cel i zakres

W ramach naszego stałego zaangażowania w bezpieczeństwo i ochronę danych użytkowników przeprowadzamy regularne testy penetracyjne naszej aplikacji internetowej. Dokument ten opisuje nasze metody testowania, zawiera podsumowanie ustaleń oraz przedstawia nasze podejście do ciągłego doskonalenia bezpieczeństwa.

Dokument będzie aktualizowany w miarę pojawiania się nowych raportów lub w przypadku istotnych zmian.

Domeny objęte zakresem:  
\*.wink.travel  
\*.trippay.io

## Częstotliwość i harmonogram testów

Nasze testy penetracyjne przeprowadzane są corocznie, z dodatkowymi testami planowanymi w razie potrzeby po znaczących aktualizacjach aplikacji lub infrastruktury. Ten regularny rytm testów pozwala nam wyprzedzać rozwijające się zagrożenia i utrzymywać bezpieczne środowisko.

## Metodyki testowania

Nasze testy penetracyjne są kompleksowe i obejmują szeroki zakres aspektów bezpieczeństwa, w tym między innymi:

* **OWASP Top 10:** Testy koncentrują się na najważniejszych zagrożeniach bezpieczeństwa, takich jak Injection, Broken Authentication oraz Cross-Site Scripting (XSS).  
* **Testy Black Box i Grey Box:** W zależności od zakresu, nasz zespół wykorzystuje te metody, aby symulować zarówno zewnętrzne, jak i wewnętrzne scenariusze ataków.  
* **Testy automatyczne i manualne:** Korzystamy z Burp Suite Pro, wiodącego zestawu narzędzi do testów bezpieczeństwa, do przeprowadzania automatycznych skanów oraz wspierania technik manualnych w celu identyfikacji złożonych podatności i uzyskania jak najlepszego pokrycia. Do bardziej specyficznej identyfikacji podatności stosujemy również narzędzia specjalistyczne, np. SQLmap.

## Podsumowanie ustaleń

Poniżej znajduje się ogólne podsumowanie najnowszego raportu z testów penetracyjnych:

* **Łączna liczba zidentyfikowanych podatności:** 2  
* **Rozkład według poziomu zagrożenia:**  
  * Krytyczne: 2  
* **Typy wykrytych podatności:**  
  * Broken Access Control  
  * Insecure Design

Szczegółowe ustalenia znajdują się w pełnym raporcie.

### Ocena ryzyka i wpływ

Obie znalezione podatności zostały ocenione jako krytyczne, ponieważ mogły mieć poważne skutki finansowe. Pierwsza pozwalała złośliwemu, uwierzytelnionemu użytkownikowi na przejęcie kontroli nad kontem płatniczym Trippay innej firmy. Druga podatność umożliwiała złośliwemu użytkownikowi modyfikację kwoty płatności wymaganej za rezerwację.

### Działania naprawcze i łagodzące

Podjęliśmy następujące kroki w celu usunięcia zidentyfikowanych podatności:

* **Natychmiastowe poprawki:** Krytyczne podatności zostały załatane w ciągu 48 godzin od ich wykrycia.  
* **Przegląd kodu i wzmocnienie:** Zespół deweloperski wdrożył dodatkowe kontrole bezpieczeństwa na podstawie naszych rekomendacji.

## Ciągłe doskonalenie

Testy penetracyjne są częścią naszej szerszej strategii ciągłego doskonalenia bezpieczeństwa. Wyniki każdego testu kierują nasze polityki bezpieczeństwa, wpływają na praktyki rozwojowe oraz napędzają ulepszenia w architekturze bezpieczeństwa.

## Ekspertyza zespołu

Testy penetracyjne przeprowadza nasz wewnętrzny specjalista z bogatym doświadczeniem w różnych projektach i branżach. Korzystając z wiodących narzędzi i metod, ekspert zapewnia, że nasza aplikacja jest gruntownie testowana pod kątem najnowszych zagrożeń bezpieczeństwa.

## Zaangażowanie w bezpieczeństwo

Jesteśmy zaangażowani w utrzymanie bezpiecznego środowiska aplikacji dla naszych użytkowników i interesariuszy. Nasze stałe działania w zakresie testowania i doskonalenia bezpieczeństwa świadczą o naszym zobowiązaniu do ochrony przed rozwijającymi się zagrożeniami.

## Dostęp do raportu i aktualizacje

Dokument będzie na bieżąco aktualizowany wraz z pojawianiem się nowych raportów z testów penetracyjnych. Aby uzyskać pełny raport, prosimy o kontakt pod poniższym adresem e-mail. Przyszłe aktualizacje będą zawierać nowo zidentyfikowane podatności, działania naprawcze oraz zmiany w metodach testowania.

W przypadku dalszych pytań prosimy o kontakt pod adresem security@wink.travel.
