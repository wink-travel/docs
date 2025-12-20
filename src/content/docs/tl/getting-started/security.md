---
title: Seguridad
description: Ang artikulong ito ay naglalaman ng impormasyon tungkol sa mga hakbang sa seguridad na ipinatutupad namin at inilalathala taun-taon ng aming third party security firm.
sidebar:
  order: 6
---

# Wink Security Overview Document

*Huling Na-update: Setyembre 7, 2024*

*Bersyon 1.0*

## Layunin at Saklaw

Bilang bahagi ng aming patuloy na pangako sa seguridad at pagprotekta sa datos ng gumagamit, nagsasagawa kami ng regular na penetration testing sa aming web application. Inilalahad ng dokumentong ito ang aming mga metodolohiya sa pagsubok, nagbibigay ng buod ng mga natuklasan, at itinatampok ang aming pamamaraan sa patuloy na pagpapabuti ng seguridad.

Ang dokumentong ito ay ia-update kapag may mga bagong ulat na nalikha o kapag may mahahalagang pagbabago.

Mga domain na saklaw:  
\*.wink.travel  
\*.trippay.io

## Dalas at Iskedyul ng Pagsubok

Ang aming mga penetration test ay isinasagawa taun-taon, na may karagdagang mga pagsusuri na naka-iskedyul kung kinakailangan pagkatapos ng mahahalagang update sa application o imprastraktura. Ang regular na iskedyul ng pagsusuri ay nagsisiguro na kami ay nangunguna sa mga umuusbong na banta at nagpapanatili ng isang ligtas na kapaligiran.

## Mga Metodolohiya sa Pagsubok

Ang aming penetration testing ay komprehensibo at sumasaklaw sa malawak na aspeto ng seguridad, kabilang ngunit hindi limitado sa:

* **OWASP Top 10:** Ang aming mga pagsusuri ay partikular na tumutok sa mga pinaka-kritikal na panganib sa seguridad, tulad ng Injection, Broken Authentication, at Cross-Site Scripting (XSS).  
* **Black Box at Grey Box Testing:** Depende sa saklaw, ginagamit ng aming koponan ang mga metodolohiyang ito upang gayahin ang parehong panlabas at panloob na mga senaryo ng pag-atake.  
* **Automated at Manual Testing:** Ginagamit namin ang Burp Suite Pro, isang nangungunang security testing toolset, upang magsagawa ng automated security scans at tulungan ang mga manual testing techniques upang matukoy ang mga kumplikadong kahinaan at makuha ang pinakamahusay na coverage. Para sa mas tiyak na pagtukoy ng kahinaan, ginagamit ang ilang espesyal na mga tool tulad ng SQLmap.

## Buod ng mga Natuklasan

Narito ang mataas na antas na buod ng aming pinakabagong ulat sa penetration testing:

* **Kabuuang Natukoy na Kahinaan:** 2  
* **Pamamahagi ng Kalubhaan:**  
  * Kritikal: 2  
* **Mga Uri ng Natuklasang Kahinaan:**  
  * Broken Access Control  
  * Insecure Design

Para sa detalyadong mga natuklasan, mangyaring sumangguni sa buong ulat.

### Mga Rating ng Panganib at Epekto

Ang parehong natuklasang kahinaan ay na-rate bilang kritikal dahil pareho itong maaaring magdulot ng malubhang epekto sa pananalapi. Ang una ay nagbigay-daan sa isang malisyosong authenticated user na makontrol ang Trippay payment account ng ibang kumpanya. Ang pangalawang kahinaan ay nagbigay-daan sa isang malisyosong user na baguhin ang halagang kailangang bayaran para sa isang booking.

### Mga Hakbang sa Pag-ayos at Pagpapagaan

Gumawa kami ng mga sumusunod na hakbang upang tugunan ang mga natukoy na kahinaan:

* **Agad na Pag-patch:** Ang mga kritikal na kahinaan ay na-patch sa loob ng 48 oras mula sa pagkakatuklas.  
* **Pagsusuri ng Code at Pagpapalakas:** Nagpatupad ang development team ng karagdagang mga kontrol sa seguridad batay sa aming mga rekomendasyon.

## Patuloy na Pagpapabuti

Ang penetration testing ay bahagi ng aming mas malawak na estratehiya para sa patuloy na pagpapabuti ng seguridad. Ang mga natuklasan mula sa bawat pagsusuri ay gumagabay sa aming mga polisiya sa seguridad, nakakaimpluwensya sa mga gawi sa pag-develop, at nagtutulak ng mga pagpapahusay sa aming arkitektura ng seguridad.

## Kasanayan ng Koponan

Ang aming penetration testing ay isinasagawa ng isang in-house na propesyonal na may malawak na karanasan sa iba't ibang proyekto at industriya. Gamit ang mga nangungunang tool at pamamaraan, tinitiyak ng aming eksperto na ang aming application ay masusing nasusuri laban sa mga pinakabagong banta sa seguridad.

## Pangako sa Seguridad

Kami ay nakatuon sa pagpapanatili ng isang ligtas na kapaligiran ng application para sa aming mga gumagamit at stakeholder. Ang aming patuloy na pagsisikap sa pagsusuri at pagpapabuti ng seguridad ay nagpapakita ng aming pangako sa pagprotekta laban sa mga umuusbong na banta.

## Access sa Ulat at Mga Update

Ang dokumentong ito ay patuloy na ia-update habang may mga bagong ulat sa penetration test na inilalabas. Upang ma-access ang buong ulat, mangyaring makipag-ugnayan sa amin sa pamamagitan ng email sa ibaba. Ang mga susunod na update ay maglalaman ng mga bagong natukoy na kahinaan, mga hakbang sa pag-ayos, at mga pagbabago sa aming mga metodolohiya sa pagsubok.

Para sa karagdagang mga katanungan, mangyaring makipag-ugnayan sa security@wink.travel.
