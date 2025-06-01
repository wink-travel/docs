---
title: Security
description: >-
  Ang artikulong ito ay naglalaman ng impormasyon tungkol sa mga hakbang sa
  seguridad na ipinapatupad namin at na-publish taun-taon ng aming 3rd party na
  security firm.
sidebar:
  order: 6
---
# Pangkalahatang-ideya ng Dokumento ng Wink Security

*Huling Na-update: Setyembre 7, 2024*

*Bersyon 1.0*

## Layunin at Saklaw

Bilang bahagi ng aming patuloy na pangako sa seguridad at pagprotekta sa data ng user, nagsasagawa kami ng regular na pagsubok sa pagtagos sa aming web application. Binabalangkas ng dokumentong ito ang aming mga pamamaraan sa pagsubok, nagbibigay ng buod ng mga natuklasan, at itinatampok ang aming diskarte sa patuloy na pagpapabuti ng seguridad.

Ang dokumentong ito ay ia-update habang gumagawa ng mga bagong ulat o kapag may mga makabuluhang pagbabago na nangyari.

Mga domain sa saklaw:\
\*.wink.travel\
\*.trippay.io

## Dalas at Iskedyul ng Pagsubok

Ang aming mga pagsubok sa pagtagos ay isinasagawa taun-taon, na may mga karagdagang pagsubok na naka-iskedyul kung kinakailangan kasunod ng mga makabuluhang update sa aplikasyon o imprastraktura. Tinitiyak ng regular na pagsubok na ito na mananatili kaming nangunguna sa mga umuusbong na banta at nagpapanatili ng isang ligtas na kapaligiran.

## Mga Pamamaraan sa Pagsubok

Ang aming penetration testing ay komprehensibo at sumasaklaw sa malawak na hanay ng mga aspeto ng seguridad, kabilang ngunit hindi limitado sa:

* **Nangungunang 10 ng OWASP:** Partikular na tina-target ng aming mga pagsubok ang pinakamahalagang panganib sa seguridad, gaya ng Injection, Broken Authentication, at Cross-Site Scripting (XSS).
* **Pagsubok sa Black Box at Gray Box:** Depende sa saklaw, ginagamit ng aming team ang mga pamamaraang ito para gayahin ang parehong panlabas at panloob na mga senaryo ng pag-atake.
* **Automated at Manu-manong Pagsusuri:** Ginagamit namin ang Burp Suite Pro, isang nangungunang tool sa pagsubok sa seguridad, upang magsagawa ng mga awtomatikong pag-scan sa seguridad at upang tulungan ang mga manual na diskarte sa pagsubok upang matukoy ang mga kumplikadong kahinaan at makuha ang pinakamahusay na saklaw na aming makakaya. Para sa mas tiyak na pagkilala sa kahinaan, ginagamit ang ilang espesyal na tool hal. SQLmap.

## Buod ng mga Natuklasan

Ang sumusunod ay isang mataas na antas na buod ng aming pinakabagong ulat sa pagsubok sa pagtagos:

* **Kabuuang Mga Natukoy na Kahinaan:** 2
* **Pamamahagi ng Kalubhaan:**
  * Kritikal: 2
* **Mga Uri ng Kahinaan na Natukoy:**
  * Sirang Access Control
  * Insecure na Disenyo

Para sa mga detalyadong natuklasan, mangyaring sumangguni sa buong ulat.

### Mga Rating ng Panganib at Epekto

Pareho sa mga nahanap na kahinaan ay na-rate bilang kritikal dahil pareho sa kanila ay maaaring magkaroon ng malubhang epekto sa pananalapi. Ang una ay nagbigay-daan sa isang malisyosong na-authenticate na user na kontrolin ang Trippay na account sa pagbabayad ng isa pang kumpanya. Ang pangalawang kahinaan ay nagbigay-daan sa isang nakakahamak na user na baguhin ang halaga ng pagbabayad na kinakailangan para sa isang booking.

### Mga Pagsusumikap sa Remediation at Mitigation

Ginawa namin ang mga sumusunod na hakbang upang matugunan ang mga natukoy na kahinaan:

* **Mga agarang patch:** Ang mga kritikal na kahinaan ay na-patched sa loob ng 48 oras ng pagkatuklas.
* **Pagsusuri at Pagpapatigas ng Code:** Nagpatupad ang development team ng mga karagdagang kontrol sa seguridad batay sa aming mga rekomendasyon..

## Patuloy na Pagpapabuti

Ang penetration testing ay bahagi ng aming mas malawak na diskarte para sa patuloy na pagpapabuti ng seguridad. Ang mga natuklasan mula sa bawat pagsubok ay gumagabay sa aming mga patakaran sa seguridad, nakakaimpluwensya sa mga kasanayan sa pag-unlad, at humimok ng mga pagpapahusay sa aming arkitektura ng seguridad.

## Dalubhasa sa Koponan

Ang aming penetration testing ay isinasagawa ng isang in-house na propesyonal na may malawak na karanasan sa iba't ibang proyekto at industriya. Gamit ang mga nangungunang tool at pamamaraan, tinitiyak ng aming eksperto na ang aming aplikasyon ay lubusang nasubok laban sa mga pinakabagong banta sa seguridad.

## Pangako sa Seguridad

Kami ay nakatuon sa pagpapanatili ng isang secure na kapaligiran ng application para sa aming mga user at stakeholder. Ang aming patuloy na pagsisikap sa pagsubok at pagpapabuti ng seguridad ay nagpapakita ng aming pangako sa pagprotekta laban sa mga umuusbong na banta.

## Access sa Ulat at Mga Update

Ang dokumentong ito ay patuloy na ia-update habang inilabas ang mga bagong ulat sa pagsubok sa pagtagos. Upang ma-access ang buong ulat, mangyaring makipag-ugnayan sa amin sa pamamagitan ng email sa ibaba. Kasama sa mga update sa hinaharap ang mga bagong natukoy na kahinaan, mga pagsisikap sa remediation, at mga pagsasaayos sa aming mga pamamaraan ng pagsubok.

Para sa karagdagang mga katanungan, mangyaring makipag-ugnayan sa security@wink.travel.

