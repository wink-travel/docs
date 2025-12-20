---
title: Bezpieczeństwo
description: Ten artykuł zawiera informacje o środkach bezpieczeństwa, które wdrażamy i które są corocznie publikowane przez naszą zewnętrzną firmę zajmującą się bezpieczeństwem.
sidebar:
  order: 6
---

# Dokument Przeglądu Bezpieczeństwa Wink

*Ostatnia aktualizacja: 7 września 2024*

*Wersja 1.0*

## Cel i Zakres

W ramach naszego stałego zaangażowania w bezpieczeństwo i ochronę danych użytkowników przeprowadzamy regularne testy penetracyjne naszej aplikacji internetowej. Dokument ten opisuje nasze metody testowania, zawiera podsumowanie ustaleń oraz przedstawia nasze podejście do ciągłego doskonalenia bezpieczeństwa.

Dokument będzie aktualizowany w miarę pojawiania się nowych raportów lub gdy zajdą istotne zmiany.

Domeny w zakresie:  
\*.wink.travel  
\*.trippay.io

## Częstotliwość i Harmonogram Testów

Nasze testy penetracyjne przeprowadzane są corocznie, z dodatkowymi testami planowanymi w razie potrzeby po znaczących aktualizacjach aplikacji lub infrastruktury. Ten regularny rytm testów zapewnia, że wyprzedzamy rozwijające się zagrożenia i utrzymujemy bezpieczne środowisko.

## Metodyki Testowania

Nasze testy penetracyjne są kompleksowe i obejmują szeroki zakres aspektów bezpieczeństwa, w tym między innymi:

* **OWASP Top 10:** Nasze testy koncentrują się na najważniejszych ryzykach bezpieczeństwa, takich jak Injection, Broken Authentication oraz Cross-Site Scripting (XSS).  
* **Testy Black Box i Grey Box:** W zależności od zakresu, nasz zespół wykorzystuje te metody, aby symulować zarówno zewnętrzne, jak i wewnętrzne scenariusze ataków.  
* **Testy Automatyczne i Manualne:** Używamy Burp Suite Pro, wiodącego zestawu narzędzi do testowania bezpieczeństwa, do przeprowadzania automatycznych skanów oraz wspierania technik manualnych w celu identyfikacji złożonych podatności i uzyskania jak najlepszego pokrycia. Do bardziej specyficznej identyfikacji podatności stosujemy również narzędzia specjalistyczne, np. SQLmap.

## Podsumowanie Ustaleń

Poniżej znajduje się ogólne podsumowanie naszego najnowszego raportu z testów penetracyjnych:

* **Łączna liczba zidentyfikowanych podatności:** 2  
* **Rozkład według poziomu zagrożenia:**  
  * Krytyczne: 2  
* **Typy wykrytych podatności:**  
  * Broken Access Control  
  * Insecure Design

Szczegółowe ustalenia znajdują się w pełnym raporcie.

### Ocena Ryzyka i Wpływ

Obie znalezione podatności zostały ocenione jako krytyczne, ponieważ mogły mieć poważne skutki finansowe. Pierwsza pozwalała złośliwemu, uwierzytelnionemu użytkownikowi na przejęcie kontroli nad kontem płatniczym Trippay innej firmy. Druga podatność umożliwiała złośliwemu użytkownikowi modyfikację kwoty płatności wymaganej za rezerwację.

### Działania Naprawcze i Łagodzące

Podjęliśmy następujące kroki, aby usunąć zidentyfikowane podatności:

* **Natychmiastowe poprawki:** Krytyczne podatności zostały załatane w ciągu 48 godzin od ich wykrycia.  
* **Przegląd kodu i wzmocnienie:** Zespół deweloperski wdrożył dodatkowe kontrole bezpieczeństwa na podstawie naszych rekomendacji.

## Ciągłe Doskonalenie

Testy penetracyjne są częścią naszej szerszej strategii ciągłego doskonalenia bezpieczeństwa. Wyniki każdego testu kierują nasze polityki bezpieczeństwa, wpływają na praktyki rozwojowe oraz napędzają ulepszenia w architekturze bezpieczeństwa.

## Ekspertyza Zespołu

Nasze testy penetracyjne przeprowadza wewnętrzny specjalista z bogatym doświadczeniem w różnych projektach i branżach. Korzystając z wiodących narzędzi i metod, nasz ekspert zapewnia, że nasza aplikacja jest gruntownie testowana pod kątem najnowszych zagrożeń bezpieczeństwa.

## Zaangażowanie w Bezpieczeństwo

Jesteśmy zaangażowani w utrzymanie bezpiecznego środowiska aplikacji dla naszych użytkowników i interesariuszy. Nasze stałe działania w zakresie testowania i doskonalenia bezpieczeństwa świadczą o naszym zobowiązaniu do ochrony przed rozwijającymi się zagrożeniami.

## Dostęp do Raportu i Aktualizacje

Dokument ten będzie na bieżąco aktualizowany wraz z wydawaniem nowych raportów z testów penetracyjnych. Aby uzyskać pełny raport, prosimy o kontakt pod poniższym adresem e-mail. Przyszłe aktualizacje będą zawierać nowo zidentyfikowane podatności, działania naprawcze oraz zmiany w naszych metodach testowania.

W przypadku dalszych pytań prosimy o kontakt pod adresem security@wink.travel.
