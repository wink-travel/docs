---
title: Cennik
description: Większość funkcji Wink jest bezpłatna. Płacisz niewielką opłatę za każdą rezerwację oraz opłatę za korzystanie z kilku funkcji premium według rzeczywistego zużycia.
sidebar:
  order: 4
---

Wink nie ma subskrypcji, miejsc ani opłat za konfigurację. Zdecydowana większość platformy jest bezpłatna, a płacisz tylko za dwie rzeczy:

1. **Opłatę platformową za rezerwację oraz koszt przetwarzania kart** — tylko w momencie dokonania rezerwacji.
2. **Opłaty za korzystanie według rzeczywistego zużycia** — za kilka funkcji premium, które generują dla nas koszty przy każdym uruchomieniu, każda z darmowym miesięcznym limitem.

## Co jest bezpłatne

Te funkcje nic nie kosztują, na zawsze, bez limitów i pomiaru:

- **Silnik rezerwacji** — na Twojej stronie, na stronie WinkLinks lub gdziekolwiek go osadzisz.
- **Zarządzanie obiektem** — treści, zdjęcia, ceny, plany taryfowe, dostępność, promocje i zasady.
- **Narzędzia afiliacyjne** — linki do udostępniania, wyselekcjonowane listy, siatki, mapy, karty i osadzalne widgety.
- **Narzędzia dla agentów turystycznych** — wyszukiwanie, indywidualne stawki i rezerwacje w imieniu klientów.
- **WinkLinks** — zarejestruj własny adres URL, zbuduj swoją stronę i publikuj na niej dowolnie często.
- **Ręczne posty w mediach społecznościowych** — wszystko, co napiszesz samodzielnie, na dowolnej podłączonej sieci.
- **Analityka, rankingi, zgłoszenia, ustawienia** i zarządzanie kontem.
- **API Konsumenta i Silnika Rezerwacji**, w tym ich punkty końcowe do wyszukiwania i autouzupełniania. W **Partner API** wywołania Lookup i Content są mierzone po jednej jednostce każde (patrz [Użycie](#co-jest-mierzone-a-co-nie) poniżej).

## Rezerwacje

Wink obsługuje dwa modele: Wink pobierający płatność dla hotelu oraz licencjonowanego agenta turystycznego jako sprzedawcę.

### Model 1 — Wink pobiera płatność dla hotelu

Wink pobiera płatność od gościa jako ograniczony agent hotelu do pobierania płatności. Hotelem jako sprzedawcą jest hotel, a jego nazwa pojawia się na wyciągu z karty gościa.
Ten model dotyczy 95% wszystkich rezerwacji.

#### Szczegóły

:::note[Opłata platformowa]
Wink pobiera 1,5% opłaty platformowej za rezerwację. Pokrywa to utrzymanie platformy i pozwala nam udostępniać wszystko, co wymieniono powyżej. Opłata nie jest pobierana za anulowane rezerwacje.
:::

:::note[Przetwarzanie kart]
Opłata za przetwarzanie płatności pobierana przy pobieraniu płatności od gościa jest przekazywana hotelowi po kosztach, bez marży. Zależy od karty i metody płatności gościa, a dokładna kwota jest widoczna w sekcji Księgowość każdej rezerwacji. Jeśli rezerwacja zostanie anulowana lub zwrócona, wszelkie opłaty zatrzymane przez procesora są nadal pobierane; jeśli procesor nic nie pobiera, my również nie.
:::

:::note[Wypłata środków]
Istnieją opłaty związane z wysyłaniem środków na Twoje konto. Zależy to od wybranej metody wypłaty. Obecnie obsługujemy:

- **Przelew bankowy** — Koszt zależy od kraju, w którym się znajdujesz, miejsca wysłania środków oraz ewentualnej konwersji waluty po drodze. Opłata za wypłatę i wszelkie koszty konwersji są ponoszone przez odbiorcę, po kosztach. Udostępniamy kalkulator wyceny, którego możesz użyć, gdy masz dostępne środki na koncie.

Jeśli chcesz, abyśmy obsługiwali inną metodę wypłaty, wyślij do nas e-mail.
:::

### Model 2 — Agent turystyczny jako sprzedawca

Ten model jest dostępny tylko dla biur podróży posiadających licencję na działalność w swoim regionie i chcących być sprzedawcą. Dostępny jest wyłącznie dla partnerów API, rezerwujących przez [Partner API](/pl/integrations/partner-api/), i wymaga uprzedniej pisemnej zgody Wink. Niektórzy z naszych zarejestrowanych agentów turystycznych chcą odpowiadać za obsługę płatności i wypłatę środków do hoteli. W tym modelu odpowiadają za środki i posiadają niezbędne licencje do działania w swoim kraju.

#### Szczegóły

:::note[Opłata platformowa]
Wink pobiera 1,5% opłaty platformowej za rezerwację. Pokrywa to utrzymanie platformy i pozwala nam udostępniać wszystko, co wymieniono powyżej.
:::

W tym modelu agenci turystyczni płacą Wink 1,5% opłaty plus wszelkie opłaty za korzystanie z Partner API powyżej darmowego limitu, fakturowane miesięcznie.

## Co płacą partnerzy

Dla partnerów wysyłających rezerwacje: twórców, afiliantów, platform, deweloperów i agentów turystycznych. Partnerstwa są niewyłączne, bez podziału na terytoria.

| | Płatność pobierana dla hotelu (większość partnerów) | Jesteś sprzedawcą (tylko partnerzy API) |
|---|---|---|
| Opłata licencyjna lub terytorialna | Brak | Brak |
| Opłata za konfigurację | Brak | Brak |
| Opłata abonamentowa lub miesięczna | Brak | Brak |
| Minimalne zobowiązanie lub okres | Brak | Brak. Obowiązuje limit kredytowy. |
| Dostęp do Partner API | 10 000 noclegów hotelowych miesięcznie za darmo, potem 0,0001 USD za nocleg. Pay-as-you-go jest domyślnie wyłączone; po przekroczeniu limitu wywołania zwracają `429`. | Tak samo |
| Opłata transakcyjna | Brak. Zarabiasz prowizję (domyślnie 10%). | 1,5% opłaty za rezerwację od wartości rezerwacji, fakturowane miesięcznie w USD, płatne w ciągu 15 dni. Przy włączonym pay-as-you-go korzystanie z Partner API jest fakturowane na drugiej fakturze miesięcznej. |
| Opłata za wsparcie | Brak | Brak |
| Inne opłaty | Opłaty za przelewy wypłat, po kosztach | Możliwa przedpłata lub depozyt przy zatwierdzeniu. Odsetki 1,5% miesięcznie od zaległych faktur. |
| Zmiana opłat | 30 dni powiadomienia; dotyczy tylko rezerwacji dokonanych po zmianie | Tak samo. Wink może również zmienić Twój limit kredytowy po powiadomieniu. |

Model sprzedawcy wymaga uprzedniej pisemnej zgody Wink. Zobacz [Model 2](#model-2--agent-turystyczny-jako-sprzedawca) powyżej oraz stronę [Partner API](/pl/integrations/partner-api/).

## Użycie (pay-as-you-go)

Kilka funkcji generuje dla nas koszty za każdym razem, gdy są uruchamiane — generatywna AI, zewnętrzne API mediów społecznościowych oraz serwowanie cen na żywo na dużą skalę. Zamiast pakować je w miesięczny plan, którego możesz nie używać, płacisz tylko za to, co faktycznie zużywasz, i tylko po wykorzystaniu darmowego miesięcznego limitu.

| Funkcja | Darmowo miesięcznie | Potem | Jednostka rozliczeniowa |
| -- | -- | -- | -- |
| Post w social media — obraz | 1 | 1,50 USD | Jeden opublikowany post |
| Post w social media — obraz generowany przez AI | 0 | 2,50 USD | Jeden opublikowany post |
| Post w social media — wideo ulepszone przez AI | 0 | 4,00 USD | Jeden opublikowany post |
| Post w social media — wideo generowane przez AI | 0 | 14,00 USD | Jeden opublikowany post |
| Odpowiedź AI na komentarz lub DM | 5 | 0,05 USD | Jedna odpowiedź |
| Odpowiedź chatbota | 5 | 0,05 USD | Jedna odpowiedź |
| Partner API | 10 000 | 0,0001 USD | Jedna nocleg hotelowy |

Ceny podane są w USD. Darmowy limit jest przyznawany **na konto**, nie na użytkownika, i resetuje się 1. dnia każdego miesiąca (UTC).

### Jak wyceniane są posty

Posty wyceniane są według zawartości, ponieważ to ona generuje koszty. Statyczne zdjęcie jest tanie; wideo nie; wszystko, co generujemy AI, kosztuje znacznie więcej niż zdjęcie dostarczone przez Ciebie.

- **Darmowy limit obejmuje tylko standardowe posty ze zdjęciami.** Dostajesz jeden taki post na konto miesięcznie. Posty wideo i media generowane przez AI są rozliczane od pierwszego posta — nie ma na nie darmowego limitu, więc obiekt publikujący wideo powinien spodziewać się opłaty już w pierwszym miesiącu.
- **Wideo ma pierwszeństwo.** Jeśli post zawiera jakiekolwiek wideo, cały post jest rozliczany według stawki wideo. Post łączący zdjęcie i wideo jest traktowany jako post wideo.
- **Pochodzenie AI ustala stawkę.** Media dostarczone przez Ciebie — własne zdjęcia i wideo lub cokolwiek z biblioteki Wink — są rozliczane według standardowej stawki. Media generowane przez nas dla Ciebie są rozliczane według stawki AI.

### Co jest, a co nie jest mierzone

- Tylko **wygenerowany** post opublikowany w sieci zewnętrznej (Facebook, Instagram) jest płatny. Post napisany samodzielnie jest bezpłatny, gdziekolwiek zostanie opublikowany.
- **Publikowanie na WinkLinks jest zawsze bezpłatne**, niezależnie od tego, czy post jest generowany, czy nie.
- Opłata jest pobierana **w momencie publikacji**, nie za próbę. Regenerowanie szkicu do momentu zadowolenia nie zwiększa rachunku — płacisz raz za post, który faktycznie opublikujesz. Próby nie są jednak nieograniczone: każdy post pozwala na około 10 regeneracji obrazów i 3 dla wideo, co odzwierciedla nasze koszty produkcji. Podczas pracy zobaczysz, ile Ci zostało.
- W Partner API **nocleg hotelowy** to jeden hotel wyceniony za jedną noc pobytu — *nie* jedno wywołanie API. Wyszukiwanie zwracające 20 hoteli na 3 noce to 60 noclegów hotelowych z jednego zapytania. Wywołania Content i Lookup (wyszukiwanie destynacji i autouzupełnianie) kosztują po jednej jednostce każde, niezależnie od wyniku. Punkty końcowe konta są bezpłatne.

### Włączanie

Pay-as-you-go jest domyślnie wyłączone. Każdy otrzymuje darmowy limit bez żadnych działań.

Aby przekroczyć limit, **właściciel** konta włącza pay-as-you-go i wybiera, które konta mają być mierzone. Zużycie ze wszystkich włączonych kont sumuje się na **jednej miesięcznej fakturze**, którą możesz opłacić automatycznie kartą lub otrzymać fakturę do samodzielnej zapłaty.

Po włączeniu zużycie jest mierzone, ale **nigdy nie jest ograniczane** — nie osiągniesz limitu wydatków u nas.

:::note[Jeśli nie włączysz]
Nic się nie psuje i nic nie jest pobierane. Po prostu zatrzymujesz się na darmowym limicie w danym miesiącu: posty generowane nie będą publikowane, a wywołania Partner API zwrócą `429` do momentu resetu limitu.
:::

### Status rozliczeń

| Status | Co oznacza |
| -- | -- |
| W porządku | Wszystko działa normalnie. |
| Zaległe | Płatność nie powiodła się i jest ponawiana. Funkcje działają w tym czasie. |
| Zawieszone | Faktura nie została opłacona do końca terminu. Akcje płatne są zablokowane do momentu uregulowania; funkcje bezpłatne działają normalnie. |

:::tip[Ceny na żywo]
Ceny jednostkowe i darmowe limity są zawsze widoczne w Portalu, bezpośrednio z naszego systemu rozliczeniowego, więc możesz je sprawdzić przed podjęciem decyzji. Zobacz [Rozliczenia](/pl/portal/plan), aby włączyć pay-as-you-go, wybrać konta i śledzić zużycie oraz faktury w bieżącym miesiącu. Zobacz [Social](/pl/portal/social/what-is-social), jak ilość postów wpływa na wydatki.
:::

## Efekt platformy

Na koniec, w miarę jak rośniemy pod względem wielkości i liczby rezerwacji, chcemy dzielić się z Tobą efektami platformy. Więcej rezerwacji to możliwości uzyskania rabatów ilościowych od naszego procesora płatności. Ponieważ przetwarzanie kart jest przekazywane po kosztach, każda wynegocjowana oszczędność trafia bezpośrednio do hoteli.

Dołącz do Wink już dziś i odkryj nowy, dochodowy sposób prowadzenia biznesu w branży hotelarskiej!
