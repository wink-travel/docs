---
title: Presyo
description: Karamihan sa Wink ay libre. Nagbabayad ka ng maliit na bayad kada booking, at isang pay-as-you-go na bayad sa paggamit para sa ilang piling premium na tampok.
sidebar:
  order: 4
---

Wink ay walang mga subscription, walang mga upuan, at walang mga bayad sa pagsisimula. Karamihan sa platform ay libre, at may dalawang bagay lang na kailanman mong babayaran:

1. **Isang maliit na porsyento kada booking** — kapag kumikita ka talaga.
2. **Pay-as-you-go na bayad sa paggamit** — sa ilang piling premium na tampok na may gastos sa amin sa bawat paggamit, bawat isa ay may libreng buwanang alok.

## Ano ang libre

Walang bayad ang mga ito, magpakailanman, walang alok at walang pagsukat:

- Ang **booking engine** — sa iyong sariling site, sa iyong WinkLinks page, o kahit saan mo ito i-embed.
- **Pamamahala ng ari-arian** — nilalaman, mga larawan, mga presyo, mga plano ng presyo, availability, mga promosyon at mga patakaran.
- **Mga kasangkapan para sa affiliate** — mga shareable na link, curated na listahan, grids, mapa, cards at mga embeddable na widget.
- **Mga kasangkapan para sa travel agent** — paghahanap, bespoke na mga presyo at booking para sa iyong mga kliyente.
- **WinkLinks** — i-claim ang iyong vanity URL, buuin ang iyong pahina at i-publish ito nang madalas hangga't gusto mo.
- **Manwal na mga social post** — anumang isinusulat mo mismo, sa anumang konektadong network.
- **Analytics, leaderboards, claims, settings** at pamamahala ng account.
- Ang **Consumer at Booking Engine APIs**, pati na rin ang lookup at autocomplete endpoints.

## Mga Booking

Sinusuportahan ng Wink ang parehong merchant at agent na mga modelo.

### Modelo 1

Ang Wink ang merchant of record sa oras ng booking. Ang Wink ang responsable sa pondo at may hawak ng anumang lisensya upang mag-operate ng travel agency.
Ang modelong ito ay naaangkop sa 95% ng lahat ng booking.

Naniningil ang Wink ng `5.5% kada booking` para mapanatili ang platform.
Karamihan nito ay napupunta sa payment gateway (Visa, MasterCard, atbp). Ang karaniwang booking ay nagkakahalaga sa amin ng `2.95%` para makuha; minsan umaabot hanggang `3.6%`. Ang mga partial refund ay nagpapataas pa ng gastos dahil tinitingnan ito ng payment gateway bilang bagong singil.
Nais naming maging ganap na transparent tungkol sa pagpepresyo ngayon upang makatipid ng oras bago subukang makipag-negosasyon para sa karagdagang diskwento bago pa man gamitin ang Wink. Ang aming modelo ng pagpepresyo ay patas at kailangan din naming kumita.

#### Paghahati-hati

:::note[Bayad sa pagproseso]
Naniningil ang Wink ng 1.5% na bayad sa pagproseso / booking. Sinasaklaw nito ang pagpapanatili ng platform at ito ang dahilan kung bakit libre ang lahat ng nabanggit sa itaas.
:::

:::note[Bayad sa pagbabayad]
Naniningil ang TripPay ng 4.0% na bayad sa pagbabayad / booking. Sinasaklaw nito ang pagkuha ng bayad mula sa manlalakbay.
:::

:::note[Paghahatid ng pondo]
May mga bayad na kaugnay sa pagpapadala ng pondo sa iyong account. Depende ito sa paraan ng paghahatid na pipiliin mo. Sa kasalukuyan, sinusuportahan namin ang:

- **Bank transfer** Ang gastos ay depende sa bansa kung saan ka naroroon at kung saan nanggagaling ang pondo. Mayroon kaming quote calculator na maaari mong gamitin kapag may available kang pondo sa iyong account.

Kung nais mong suportahan namin ang ibang paraan ng pagbayad, magpadala ng e-mail sa amin.
:::

### Modelo 2

Ang modelong ito ay para lamang sa mga travel agency na may hawak ng lisensya sa kanilang rehiyon at nais maging merchant of record. Ang ilan sa aming mga rehistradong travel agent ay nais maging responsable sa paghawak ng bayad at paghahatid ng pondo sa mga hotel. Sa modelong ito, sila ang responsable sa pondo at may hawak ng kinakailangang lisensya upang mag-operate sa kanilang bansa.

#### Paghahati-hati

:::note[Bayad sa pagproseso]
Naniningil ang Wink ng 1.5% na bayad sa pagproseso / booking. Sinasaklaw nito ang pagpapanatili ng platform at ito ang dahilan kung bakit libre ang lahat ng nabanggit sa itaas.
:::

Sa modelong ito, ang mga travel agent ay nagbabayad lamang ng bayad sa pagproseso ng Wink at mag-i-invoice ang Wink sa travel agent buwan-buwan.

## Paggamit (pay-as-you-go)

Ilang tampok ang may gastos sa amin sa bawat paggamit — generative AI, third-party social APIs, at pagseserbisyo ng live pricing sa malaking sukat. Sa halip na isama ito sa buwanang plano na maaaring hindi mo magamit, nagbabayad ka lamang para sa aktwal na nagamit mo, at pagkatapos mong maubos ang libreng buwanang alok.

| Tampok | Libre kada buwan | Pagkatapos | Yunit ng pagsingil |
| -- | -- | -- | -- |
| Social post — larawan | 1 | $1.50 | Isang na-publish na post |
| Social post — AI-generated na larawan | 0 | $2.50 | Isang na-publish na post |
| Social post — video | 0 | $4.00 | Isang na-publish na post |
| Social post — AI-generated na video | 0 | $14.00 | Isang na-publish na post |
| AI na sagot sa komento o DM | 5 | $0.05 | Isang sagot |
| Sagot ng chatbot | 5 | $0.05 | Isang sagot |
| Partner API | 10,000 | $0.0001 | Isang hotel-araw |
| Partner Media API | 1,000 | $0.0005 | Media ng isang hotel |

Ang mga presyo ay nasa USD. Ang libreng alok ay ibinibigay **bawat account**, hindi bawat user, at nagre-reset tuwing ika-1 ng bawat buwan (UTC).

### Paano pinapresyo ang mga post

Pinapresyo ang mga post base sa laman nito, dahil iyon ang gastos sa amin para gawin ito. Ang isang still image ay mura; ang video ay hindi; anumang ginagawa namin gamit ang AI ay mas mahal kaysa sa larawang ikaw mismo ang nagbigay.

- **Sinasaklaw ng libreng alok ang mga standard na image post lamang.** Makakakuha ka ng isa bawat account kada buwan. Ang mga video post at AI-generated media ay sinisingil mula sa unang post pa lang — walang libreng alok sa mga ito, kaya ang isang property na nagpo-post ng video ay dapat asahan ang singil sa unang buwan pa lang.
- **Nanalo ang video.** Kung ang post ay may kahit anong video, ang buong post ay sinisingil sa video rate. Ang post na may halo ng larawan at video ay itinuturing na video post.
- **Ang pinagmulan ng AI ang nagtatakda ng tier.** Ang media na ikaw ang nagbigay — sariling mga larawan at video, o anumang mula sa iyong Wink content library — ay sinisingil sa standard rate. Ang media na ginawa namin para sa iyo ay sinisingil sa AI rate.

### Ano ang sinusukat at hindi sinusukat

- Tanging isang **generated** na post na na-publish sa third-party network (Facebook, Instagram) ang sinisingil. Ang post na ikaw mismo ang sumulat ay libre, saan man ito mapunta.
- **Libreng laging ang pag-publish sa WinkLinks**, generated man o hindi.
- Sinisingil ka **sa pag-publish**, hindi sa bawat pagtatangka. Ang pag-regenerate ng draft hanggang sa maging kontento ka ay hindi magdadagdag sa iyong bill — nagbabayad ka lang isang beses para sa post na talagang naipadala mo. Hindi unlimited ang pagtatangka: bawat post ay may humigit-kumulang 10 regenerations para sa mga larawan at 3 para sa video, na sumasalamin sa gastos namin sa paggawa nito. Makikita mo kung ilan pa ang natitira habang nagtatrabaho ka.
- Sa Partner API, ang **hotel-araw** ay isang hotel na may presyo para sa isang gabi ng pananatili — *hindi* isang API call. Ang paghahanap na nagbabalik ng 20 hotel para sa 3-gabing pananatili ay 60 hotel-araw mula sa isang request. Libre at hindi sinusukat ang lookup at autocomplete endpoints.
- Sa **Partner Media API**, ang yunit ay isang hotel na may media na bumalik sa iyo, gaano man karami ang mga larawan at video. Ang batch request para sa 50 hotel ay 50 yunit — at kung ang ilan sa mga hotel na iyon ay walang media na karapat-dapat mong makita, sinisingil ka lang para sa mga hotel na nagbalik ng media.

### Halimbawa: isang OTA na nag-cache ng 90 araw ng presyo

Sabihin nating ikaw ay isang OTA, isang metasearch site o tour operator, at gusto mo ng 90 araw ng forward pricing para sa **1,000 hotel**, bawat isa ay naglalathala ng **4 master rates**.

**Isang buong refresh ng lahat ay 90,000 hotel-araw — $9.00.**

Ito ay 1,000 hotel × 90 araw. Ang 4 master rates ay walang dagdag na gastos: isang request lang ang nagbabalik ng bawat rate plan na inilathala ng hotel para sa petsang iyon, kaya ang bilang ng mga rate na hawak ng isang property ay hindi batayan ng singil. Hindi rin mahalaga kung paano mo hinati ang request — ang period request ay sumasaklaw ng hanggang 30 araw, kaya gagawa ka ng 3 request bawat hotel, at 3 × 30 araw ay sinisingil nang pareho sa isang 90-araw na request. Sinisingil ka para sa presyo na hiniling mo, hindi para sa paraan ng paghingi mo nito.

Kaya ang babayaran mo kada buwan ay nakasalalay sa isang tanong: gaano ka kadalas mag-refresh?

| Dalas ng pag-refresh | Hotel-araw / buwan | Pagkatapos ng 10,000 libre | Buwanang gastos |
| -- | -- | -- | -- |
| Isang beses kada buwan | 90,000 | 80,000 | **$8.00** |
| Lingguhan | 360,000 | 350,000 | **$35.00** |
| Araw-araw | 2,700,000 | 2,690,000 | **$269.00** |
| Dalawang beses kada araw | 5,400,000 | 5,390,000 | **$539.00** |

Ang pag-refresh ng lahat ng 1,000 hotel araw-araw ay 3,000 request kada araw at nagkakahalaga ng halos $9.00 kada araw. Ang libreng alok na 10,000 hotel-araw kada buwan ay sapat na para ma-presyo ang humigit-kumulang 110 hotel para sa buong 90 araw, o para makabuo at makapagsubok ng buong integration nang walang bayad.

#### Ano ang nagpapagalaw ng bilang na iyon

- **Paghingi ng mga rate plan isa-isa.** Ang period request ay nagbabalik ng pinakamagandang presyo bawat uri ng kuwarto sa lahat ng rate plan nang sabay. Kung ifi-filter mo sa isang rate plan bawat request para makita ang apat nang hiwalay, gagawa ka ng apat na beses na request at magbabayad ng apat na beses na halaga.
- **Karagdagang occupancies, pera o wika.** Ang presyo para sa 1 adult at presyo para sa 2 adult ay dalawang magkaibang tanong, at bawat isa ay sinisingil. Ganoon din sa pangalawang display currency o wika.
- **Sariwang presyo na hindi mo kailangan.** Walang nagsasabing lahat ng 90 araw ay kailangang pareho ang dalas ng pag-refresh. I-refresh araw-araw ang susunod na 14 araw at lingguhan ang mga araw 15–90 at ang parehong 1,000 hotel ay nagkakahalaga ng **$71.40** kada buwan sa halip na $269.00 — ang mga malapit na petsa, kung saan talagang gumagalaw ang mga presyo, ay nananatiling sariwa.

### Paano ito i-on

Ang pay-as-you-go ay naka-off bilang default. Lahat ay nakakakuha ng libreng alok nang hindi gumagawa ng anuman.

Para lumampas sa alok, ang **may-ari** ng account ang nag-e-enable ng pay-as-you-go at pipili kung alin sa kanilang mga account ang susukatin. Ang paggamit mula sa lahat ng enabled na account mo ay pinagsasama sa isang **isang buwanang invoice**, na maaari mong bayaran nang awtomatiko gamit ang card o makatanggap bilang invoice para bayaran mo mismo.

Kapag na-enable, sinusukat ang paggamit mo pero **hindi kailanman nililimitahan** — hindi ka maaabot ng rate limit para gumastos sa amin.

:::note[Kung hindi mo ito i-enable]
Walang masisira at walang sisingilin. Titigil ka lang sa libreng alok para sa buwan na iyon: ang mga generated post ay hindi mag-publish at ang Partner API calls ay magbabalik ng `429` hanggang sa mag-reset ang alok.
:::

### Katayuan sa pagsingil

| Katayuan | Kahulugan |
| -- | -- |
| Good standing | Normal na gumagana ang lahat. |
| Past due | Nabigong bayaran ang isang payment at sinusubukang muli. Patuloy na gumagana ang iyong mga tampok sa panahong ito. |
| Suspended | Hindi nabayaran ang invoice hanggang sa huli. Nakabloke ang mga billable na aksyon hanggang mabayaran ito; ang mga libreng tampok ay nagpapatuloy nang normal. |

:::tip[Live prices]
Ang mga unit price at libreng alok ay palaging ipinapakita sa Portal, direkta mula sa aming billing system, kaya maaari mong suriin bago ka mag-commit. Tingnan ang [Billing](/tl/account/subscription) para i-enable ang pay-as-you-go, piliin ang iyong mga account, at subaybayan ang paggamit at mga invoice sa buwan. Tingnan ang [Social](/tl/portal/social/what-is-social) para sa kung paano naaapektuhan ng dami ng post ang iyong gastos.
:::

## Epekto sa platform

Sa wakas, habang patuloy kaming lumalaki sa laki at bilang ng booking, nais naming maibahagi sa iyo ang ilan sa mga epekto ng platform. Mas maraming booking ay nagdadala ng oportunidad para sa volume discounts mula sa aming payment gateway na magpapahintulot sa amin na babaan ang aming bayad sa pagproseso para sa lahat.

Sumali sa Wink ngayon at tuklasin ang isang bago, kumikitang paraan ng pagnenegosyo sa industriya ng hospitality!
