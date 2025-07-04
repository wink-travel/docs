---
title: Security
description: >-
  Овај чланак садржи информације о безбедносним мерама које спроводимо и које
  годишње објављује наша независна безбедносна фирма.
sidebar:
  order: 6
---
# Преглед безбедности Wink-а

*Последње ажурирање: 7. септембар 2024.*

*Верзија 1.0*

## Сврха и обим

Као део наше сталне посвећености безбедности и заштити корисничких података, редовно спроводимо тестирање пенетрације на нашој веб апликацији. Овај документ описује наше методологије тестирања, пружа резиме налаза и истиче наш приступ континуираном унапређењу безбедности.

Овај документ ће се ажурирати како се буду израђивали нови извештаји или када дође до значајних промена.

Домени у опсегу:\
\*.wink.travel\
\*.trippay.io

## Учесталост и распоред тестирања

Наши тестови пенетрације се спроводе на годишњем нивоу, а додатни тестови се заказују по потреби након значајних ажурирања апликације или инфраструктуре. Ова редовна ритам тестирања осигурава да будемо корак испред претњи које се развијају и да одржавамо безбедно окружење.

## Методологије тестирања

Наше тестирање пенетрације је свеобухватно и покрива широк спектар безбедносних аспеката, укључујући, али не ограничавајући се на:

* **ОВАСП Топ 10:**&#x41D;аши тестови су посебно усмерени на најкритичније безбедносне ризике, као што су убризгавање, неисправна аутентификација и међусајтско скриптовање (XSS).
* **Тестирање црне кутије и сиве кутије:**&#x423; зависности од обима, наш тим користи ове методологије за симулацију и спољашњих и унутрашњих сценарија напада.
* **Аутоматизовано и ручно тестирање:**&#x41A;ористимо Burp Suite Pro, водећи скуп алата за безбедносно тестирање, за спровођење аутоматизованих безбедносних скенирања и као помоћ техникама ручног тестирања како бисмо идентификовали сложене рањивости и добили најбољу могућу покривеност. За прецизнију идентификацију рањивости користе се неки специјализовани алати, нпр. SQLmap.

## Резиме налаза

Следи резиме нашег најновијег извештаја о тестирању пенетрације:

* **Укупан број идентификованих рањивости:**&#x32;
* **Расподела озбиљности:**
  * Критично: 2
* **Врсте откривених рањивости:**
  * Прекинута контрола приступа
  * Несигуран дизајн

За детаљније налазе, погледајте комплетан извештај.

### Оцене ризика и утицаја

Обе пронађене рањивости су оцењене као критичне јер су обе могле имати озбиљне финансијске последице. Прва је омогућила злонамерном аутентификованом кориснику да добије контролу над Trippay платним рачуном друге компаније. Друга рањивост је омогућила злонамерном кориснику да измени износ плаћања потребан за резервацију.

### Напори за санацију и ублажавање

Предузели смо следеће кораке како бисмо отклонили идентификоване рањивости:

* **Непосредне закрпе:**&#x41A;ритичне рањивости су исправљене у року од 48 сати од откривања.
* **Преглед и усавршавање кода:**&#x420;азвојни тим је имплементирао додатне безбедносне контроле на основу наших препорука.

## Континуирано побољшање

Тестирање продора је део наше шире стратегије за континуирано унапређење безбедности. Резултати сваког теста усмеравају наше безбедносне политике, утичу на праксе развоја и подстичу побољшања у нашој безбедносној архитектури.

## Тимска стручност

Наше тестирање пенетрације спроводи интерни стручњак са богатим искуством у различитим пројектима и индустријама. Користећи водеће алате и методе, наш стручњак осигурава да је наша апликација темељно тестирана на најновије безбедносне претње.

## Посвећеност безбедности

Посвећени смо одржавању безбедног окружења апликација за наше кориснике и заинтересоване стране. Наши континуирани напори у тестирању и унапређењу безбедности показују нашу посвећеност заштити од стално еволуирајућих претњи.

## Приступ извештајима и ажурирања

Овај документ ће се континуирано ажурирати како буду објављивани нови извештаји о тестовима пенетрације. Да бисте приступили комплетном извештају, контактирајте нас путем имејла испод. Будућа ажурирања ће обухватати новооткривене рањивости, напоре за отклањање и прилагођавања наших методологија тестирања.

За додатна питања, контактирајте security@wink.travel.

