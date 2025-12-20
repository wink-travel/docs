---
title: Stručně řečeno
description: Tento článek vás provede vším, co jste chtěli vědět o rezervačním systému.
sidebar:
  order: 0
---

Zde je, jak rozdělujeme odpovědnost ve Wink:

- [Extranet](/cs/extranet/what-is-extranet) se zabývá dodavateli spravujícími inventář.
- [Studio](/cs/studio/what-is-studio) se zabývá partnery spravujícími obsah.
- `Booking Engine` se zabývá tím, aby obsah vytvořený ve `Studio`, který vychází z inventáře vytvořeného v `Extranet`, byl rezervovatelný.
- [Payment](/cs/payment/what-is-trip-pay) se zabývá účtováním / vracením peněz cestovatelům, kteří rezervují [přes platformy jako Wink], a platbami dodavatelům.

Rezervační systém je jádrem naší platformy.

Jeho odpovědnosti zahrnují:

- Správu měn a udržování aktuálních směnných kurzů.
- Poskytnutí způsobu pro poskytovatele sazeb, jak nám zasílat data o sazbách.
- Správu vyhledávacích dat. *např. regiony, země, destinace, objekty atd.*
- Správu jazyků.
- Generování analýz na základě uživatelských interakcí, událostí a API volání.
- Poskytování rezervovatelného inventáře ve požadovaném formátu, jazyce a měně, například:
    - [sdílitelný odkaz](/cs/studio/shareable-links) na Facebooku.
    - Hotelová vstupní stránka na https://ota.wink.travel s inventářem pro daný hotel.
    - [kartu](/cs/studio/cards) obsahující inventář partnera.
    - [mapu](/cs/studio/maps) ve vašem účtu [WinkLinks](/cs/link-manager/wink-links).
    - [API volání](/cs/developers/apis) z externího systému cestovní agentury.
- Poskytování cestovatelům možností:
    - Vyhledávat cestovní inventář.
    - Rezervovat dostupný inventář.
    - Spravovat své [rezervace a recenze](/cs/booking-engine/bookings).
    - Spravovat svůj [seznam přání](/cs/booking-engine/bucket-list) věcí k rezervaci v budoucnu.
    - Spravovat svůj [cestovní profil](/cs/booking-engine/travel-preferences). *např. alergie, kontakty pro nouzové situace atd.*

Rezervační systém je soubor znovupoužitelné funkčnosti, kterou zpřístupňujeme prostřednictvím https://ota.wink.travel; vysoce přizpůsobitelné webové stránky pro hotely a partnery, aby mohli prodávat své služby cestovatelům.

Integrátoři, kteří chtějí ještě větší svobodu, mají přístup ke všem stejným funkcím prostřednictvím našeho [WordPress pluginu](/cs/developers/wordpress/), [Web Components](/cs/developers/web-components) a [API](/cs/developers/apis).

Pokračujte do dalších sekcí a přečtěte si více o tom, co rezervační systém nabízí.

## Další čtení

- Přečtěte si o našem [WordPress pluginu](/cs/developers/wordpress/).
- Přečtěte si o našich [Web Components](/cs/developers/web-components).
- Přečtěte si o našich [API](/cs/developers/apis).
