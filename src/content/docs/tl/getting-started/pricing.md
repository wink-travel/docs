---
title: Presyo
description: Karamihan sa Wink ay libre. Nagbabayad ka ng maliit na bayad kada booking, at isang pay-as-you-go na bayad sa paggamit para sa ilang piling premium na tampok.
sidebar:
  order: 4
---

Wink ay walang subscription, walang upuan, at walang setup fees. Karamihan sa platform ay libre, at may dalawang bagay lang na kailanman mong babayaran:

1. **Isang maliit na porsyento kada booking** — kapag kumikita ka na talaga.
2. **Pay-as-you-go na bayad sa paggamit** — sa ilang premium na tampok na may gastos sa amin tuwing ginagamit, bawat isa ay may libreng buwanang alok.

## Ano ang libre

Walang bayad ang mga ito, magpakailanman, walang alok at walang pagsukat:

- Ang **booking engine** — sa iyong sariling site, sa iyong WinkLinks page, o kahit saan mo ito i-embed.
- **Property management** — nilalaman, mga larawan, presyo, mga plano ng presyo, availability, promosyon at mga patakaran.
- **Affiliate tools** — mga shareable na link, curated na listahan, grids, mapa, cards at mga embeddable na widget.
- **Travel agent tools** — paghahanap, bespoke na presyo at booking para sa iyong mga kliyente.
- **WinkLinks** — i-claim ang iyong vanity URL, buuin ang iyong pahina at i-publish ito nang madalas hangga't gusto mo.
- **Manwal na social posts** — anumang isinusulat mo mismo, sa anumang konektadong network.
- **Analytics, leaderboards, claims, settings**** at pamamahala ng account.
- Ang **Consumer at Booking Engine APIs**, pati na rin ang lookup at autocomplete endpoints.

## Mga Booking

Sinusuportahan ng Wink ang parehong merchant at agent na mga modelo.

### Modelo 1

Ang Wink ang merchant of record sa oras ng booking. Ang Wink ang responsable sa pondo at may hawak ng anumang lisensya para mag-operate ng travel agency.
Ang modelong ito ay para sa 95% ng lahat ng booking.

Siningil ng Wink ang `5.5% kada booking` para mapanatili ang platform.
Karamihan nito ay napupunta sa payment gateway (Visa, MasterCard, atbp). Ang karaniwang booking ay nagkakahalaga sa amin ng `2.95%` para makuha; minsan umaabot hanggang `3.6%`. Ang mga partial refund ay nagpapataas pa ng gastos dahil tinitingnan ito ng payment gateway bilang bagong singil.
Nais naming maging ganap na transparent tungkol sa pagpepresyo ngayon upang makatipid ng oras bago subukang makipag-negosasyon para sa karagdagang diskwento bago pa man gamitin ang Wink. Ang aming modelo ng pagpepresyo ay patas at kailangan din naming kumita.

#### Paghahati-hati

:::note[Processing fee]
Siningil ng Wink ang 1.5% processing fee / booking. Ito ay para sa pagpapanatili ng platform at ito ang dahilan kung bakit libre ang lahat ng nakalista sa itaas.
:::

:::note[Payment fee]
Siningil ng TripPay ang 4.0% payment fee / booking. Ito ay para sa pagkuha ng bayad mula sa manlalakbay.
:::

:::note[Funds disbursement]
May mga bayad na kaugnay sa pagpapadala ng pondo sa iyong account. Depende ito sa paraan ng disbursement na pipiliin mo. Sa kasalukuyan, sinusuportahan namin ang:

- **Bank transfer** Ang gastos ay depende sa bansa kung saan ka naroroon at kung saan nanggagaling ang pondo. Mayroon kaming quote calculator na maaari mong gamitin kapag may available kang pondo sa iyong account.

Kung gusto mong suportahan namin ang ibang paraan ng pagbayad, magpadala ng e-mail sa amin.
:::

### Modelo 2

Ang modelong ito ay para lamang sa mga travel agency na may hawak ng lisensya sa kanilang rehiyon at nais maging merchant of record. Ang ilan sa aming mga rehistradong travel agent ay nais maging responsable sa paghawak ng bayad at pamamahagi ng pondo sa mga hotel. Sa modelong ito, sila ang responsable sa pondo at may hawak ng kinakailangang lisensya para mag-operate sa kanilang bansa.

#### Paghahati-hati

:::note[Processing fee]
Siningil ng Wink ang 1.5% processing fee / booking. Ito ay para sa pagpapanatili ng platform at ito ang dahilan kung bakit libre ang lahat ng nakalista sa itaas.
:::

Sa modelong ito, ang mga travel agent ay nagbabayad lamang ng processing fee ng Wink at mag-i-invoice ang Wink sa travel agent buwan-buwan.

## Paggamit (pay-as-you-go)

Ilang tampok ang may gastos sa amin tuwing ginagamit — generative AI, third-party social APIs, at pagseserbisyo ng live pricing sa malaking sukat. Sa halip na isama ito sa buwanang plano na maaaring hindi mo magamit, magbabayad ka lamang para sa aktwal na nagamit mo, at pagkatapos mong maubos ang libreng buwanang alok.

| Tampok | Libre kada buwan | Pagkatapos | Yunit ng pagsingil |
| -- | -- | -- | -- |
| Social post — larawan | 1 | $1.50 | Isang na-publish na post |
| Social post — AI-generated na larawan | 0 | $2.50 | Isang na-publish na post |
| Social post — AI-enhanced na video | 0 | $4.00 | Isang na-publish na post |
| Social post — AI-generated na video | 0 | $14.00 | Isang na-publish na post |
| AI reply sa isang komento o DM | 5 | $0.05 | Isang sagot |
| Chatbot answer | 5 | $0.05 | Isang sagot |
| Partner API | 10,000 | $0.0001 | Isang hotel-day |

Ang mga presyo ay nasa USD. Ang libreng alok ay ibinibigay **bawat account**, hindi bawat user, at nagre-reset tuwing ika-1 ng bawat buwan (UTC).

### Paano pinapresyo ang mga post

Pinapresyo ang mga post base sa laman nito, dahil iyon ang gastos namin sa paggawa. Ang isang still image ay mura; ang video ay hindi; anumang ginagawa namin gamit ang AI ay mas mahal kaysa sa larawang ikaw mismo ang nagbigay.

- **Ang libreng alok ay para lamang sa mga standard na image post.** Makakakuha ka ng isa bawat account bawat buwan. Ang mga video post at AI-generated media ay sinisingil mula sa unang post pa lang — walang libreng alok sa mga ito, kaya ang property na nagpo-post ng video ay dapat asahan ang singil sa unang buwan pa lang.
- **Video ang nangingibabaw.** Kung ang post ay may kahit anong video, ang buong post ay sinisingil sa video rate. Ang post na may halo ng larawan at video ay itinuturing na video post.
- **AI provenance ang nagtatakda ng tier.** Ang media na ikaw ang nagbigay — sariling mga larawan at video, o anumang mula sa iyong Wink content library — ay sinisingil sa standard rate. Ang media na ginawa namin para sa iyo ay sinisingil sa AI rate.

### Ano ang sinusukat at hindi

- Tanging isang **generated** na post na na-publish sa third-party network (Facebook, Instagram) ang sinisingil. Ang post na ikaw mismo ang sumulat ay libre, saan man ito mapunta.
- **Libreng-libre ang pag-publish sa WinkLinks**, generated man o hindi.
- Sinisingil ka **kapag na-publish**, hindi sa bawat pagtatangka. Ang pag-regenerate ng draft hanggang sa maging kontento ka ay hindi magdadagdag sa iyong bill — isang beses ka lang magbabayad para sa post na talagang naipadala mo. Hindi unlimited ang pagtatangka: bawat post ay may humigit-kumulang 10 regenerations para sa mga larawan at 3 para sa video, na sumasalamin sa gastos namin sa paggawa nito. Makikita mo kung ilan pa ang natitira habang nagtatrabaho ka.
- Sa Partner API, ang **hotel-day** ay isang hotel na pinresyohan para sa isang gabi ng pananatili — *hindi* isang API call. Ang paghahanap na nagbabalik ng 20 hotel para sa 3-gabing pananatili ay 60 hotel-days mula sa isang request. Libre at hindi sinusukat ang lookup at autocomplete endpoints.

### Paano ito i-on

Naka-off ang pay-as-you-go bilang default. Lahat ay nakakakuha ng libreng alok nang hindi kailangang gumawa ng anuman.

Para lumampas sa alok, ang **may-ari** ng account ang nag-e-enable ng pay-as-you-go at pipili kung alin sa kanilang mga account ang susukatin. Ang paggamit mula sa lahat ng enabled na account mo ay pinagsasama sa isang **isang buwanang invoice**, na maaari mong bayaran nang awtomatiko gamit ang card o makatanggap bilang invoice para bayaran mo mismo.

Kapag na-enable na, sinusukat ang paggamit mo pero **hindi kailanman nililimitahan** — hindi ka maaabot sa rate limit para gumastos sa amin.

:::note[Kung hindi mo ito i-enable]
Walang masisira at walang sisingilin. Titigil ka lang sa libreng alok para sa buwan na iyon: ang mga generated post ay hindi mapapublish at ang Partner API calls ay magbabalik ng `429` hanggang sa mag-reset ang alok.
:::

### Katayuan ng pagsingil

| Katayuan | Kahulugan |
| -- | -- |
| Good standing | Normal ang lahat ng operasyon. |
| Past due | Nabigo ang isang bayad at sinusubukang muli. Patuloy ang paggamit ng iyong mga tampok sa panahong ito. |
| Suspended | Hindi nabayaran ang invoice hanggang sa katapusan. Nakaharang ang mga billable na aksyon hanggang mabayaran ito; ang mga libreng tampok ay nagpapatuloy nang normal. |

:::tip[Live prices]
Ang mga unit price at libreng alok ay palaging ipinapakita sa Portal, direkta mula sa aming billing system, kaya maaari mong suriin bago ka mag-commit. Tingnan ang [Billing](/tl/portal/plan) para i-enable ang pay-as-you-go, piliin ang iyong mga account, at subaybayan ang paggamit at mga invoice sa buwan. Tingnan ang [Social](/tl/portal/social/what-is-social) para sa kung paano naaapektuhan ng dami ng post ang iyong gastos.
:::

## Epekto ng platform

Sa wakas, habang patuloy kaming lumalaki sa laki at bilang ng booking, nais naming maibahagi sa iyo ang ilan sa mga epekto ng platform. Mas maraming booking ay nagdadala ng oportunidad para sa volume discounts mula sa aming payment gateway na magpapababa ng aming processing fee para sa lahat.

Sumali sa Wink ngayon at tuklasin ang isang bago, kumikitang paraan ng pagnenegosyo sa industriya ng hospitality!
