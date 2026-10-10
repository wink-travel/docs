---
title: Pagpepresyo
description: Karamihan sa Wink ay libre. Nagbabayad ka ng maliit na bayad kada booking, at isang pay-as-you-go na bayad sa paggamit para sa ilang piling premium na tampok.
sidebar:
  order: 4
---

Wink ay walang mga subscription, walang mga upuan, at walang mga bayad sa pagsisimula. Ang karamihan ng platform ay libre, at may dalawang bagay lang na kailanman mong babayaran:

1. **Isang bayad sa platform kada booking, kasama ang card processing sa aktwal na gastos** — kapag may nagawang booking.
2. **Pay-as-you-go na bayad sa paggamit** — sa ilang piling premium na tampok na may gastos sa amin sa bawat paggamit, bawat isa ay may libreng buwanang alokasyon.

## Ano ang libre

Walang bayad ang mga ito, magpakailanman, walang alokasyon at walang pagsukat:

- Ang **booking engine** — sa iyong sariling site, sa iyong WinkLinks page, o kahit saan mo ito i-embed.
- **Pamamahala ng ari-arian** — nilalaman, mga larawan, mga presyo, mga plano ng presyo, availability, mga promosyon at mga patakaran.
- **Mga kasangkapan para sa affiliate** — mga shareable na link, curated na listahan, grids, mapa, cards at mga embeddable na widget.
- **Mga kasangkapan para sa travel agent** — paghahanap, bespoke na mga presyo at booking para sa iyong mga kliyente.
- **WinkLinks** — i-claim ang iyong vanity URL, buuin ang iyong pahina at i-publish ito nang madalas hangga't gusto mo.
- **Manwal na mga social post** — anumang isinusulat mo mismo, sa anumang konektadong network.
- **Analytics, leaderboards, claims, settings** at pamamahala ng account.
- Ang **Consumer at Booking Engine APIs**, kabilang ang kanilang lookup at autocomplete endpoints. Sa **Partner API**, ang Lookup at Content calls ay sinusukat ng isang unit bawat isa (tingnan ang [Usage](#what-is-and-isnt-metered) sa ibaba).

## Mga Booking

Sinusuportahan ng Wink ang dalawang modelo: Wink na kumokolekta ng bayad para sa hotel, at isang lisensyadong travel agent bilang merchant of record.

### Modelo 1 — Wink ang kumokolekta para sa hotel

Kinokolekta ng Wink ang bayad ng bisita bilang limitadong payment collection agent ng hotel. Ang hotel ang merchant of record, at ang pangalan ng hotel ang makikita sa card statement ng bisita.
Ang modelong ito ay naaangkop sa 95% ng lahat ng booking.

#### Paghahati-hati

:::note[Bayad sa platform]
Naniningil ang Wink ng 1.5% na bayad sa platform / booking. Sinasaklaw nito ang pagpapanatili ng platform at ito ang dahilan kung bakit namin naibibigay nang libre ang lahat ng nakalista sa itaas. Hindi ito sinisingil sa mga kinanselang booking.
:::

:::note[Card processing]
Ang bayad sa pagproseso ng bayad na sinisingil para kolektahin ang bayad ng bisita ay ipinapasa sa hotel sa aktwal na gastos, walang tubo. Nag-iiba ito depende sa card at paraan ng pagbabayad ng bisita, at ang eksaktong halaga ay makikita sa Accounting section ng bawat booking. Kung ang booking ay kinansela o na-refund, anumang bayad na hawak ng processor ay sinisingil pa rin; kung walang sinisingil ang processor, wala rin kaming sinisingil.
:::

:::note[Paghahatid ng pondo]
May mga bayad na kaugnay sa pagpapadala ng pondo sa iyong account. Depende ito sa paraan ng paghahatid na pipiliin mo. Sa kasalukuyan, sinusuportahan namin:

- **Bank transfer** — Ang gastos ay depende sa bansa kung saan ka naroroon, kung saan nanggagaling ang pondo, at anumang conversion ng pera na nangyayari sa daan. Ang bayad sa payout at anumang gastos sa conversion ay binabayaran ng tumatanggap, sa aktwal na gastos. Mayroon kaming quote calculator na maaari mong gamitin kapag may available kang pondo sa iyong account.

Kung gusto mong suportahan namin ang ibang paraan ng payout, magpadala ng e-mail sa amin.
:::

### Modelo 2 — Travel agent bilang merchant of record

Ang modelong ito ay para lamang sa mga travel agency na may lisensya sa kanilang rehiyon at nais maging merchant of record. Available ito sa mga API partner lamang, na nagbu-book sa pamamagitan ng [Partner API](/tl/integrations/partner-api/), at nangangailangan ng paunang nakasulat na pahintulot mula sa Wink. Ang ilan sa aming mga rehistradong travel agent ay nais maging responsable sa paghawak ng bayad at paghahatid ng pondo sa mga hotel. Sa modelong ito, sila ang responsable sa pondo at may mga kinakailangang lisensya upang mag-operate sa kanilang bansa.

#### Paghahati-hati

:::note[Bayad sa platform]
Naniningil ang Wink ng 1.5% na bayad sa platform / booking. Sinasaklaw nito ang pagpapanatili ng platform at ito ang dahilan kung bakit namin naibibigay nang libre ang lahat ng nakalista sa itaas.
:::

Sa modelong ito, nagbabayad ang mga travel agent ng 1.5% na bayad ng Wink plus anumang Partner API usage na lampas sa libreng alokasyon, na sinisingil buwan-buwan.

## Ano ang binabayaran ng mga partner

Para sa mga partner na nagpapadala ng booking: mga creator, affiliate, platform, developer at travel agent. Ang mga partnership ay hindi eksklusibo, walang mga teritoryo.

| | Bayad na kinolekta para sa hotel (karamihan ng partner) | Ikaw ang merchant of record (API partners lamang) |
|---|---|---|
| Bayad sa lisensya o teritoryo | Wala | Wala |
| Bayad sa setup | Wala | Wala |
| Bayad sa subscription o buwanan | Wala | Wala |
| Minimum na commitment o termino | Wala | Wala. May credit limit na ipinatutupad. |
| Access sa Partner API | 10,000 hotel-nights bawat buwan libre, pagkatapos $0.0001 kada hotel-night. Pay-as-you-go ay naka-off bilang default; sa libreng alokasyon, ang mga tawag ay nagbabalik ng `429`. | Pareho |
| Bayad sa transaksyon | Wala. Kumita ka ng komisyon (10% default). | 1.5% Booking Fee sa halaga ng booking, sinisingil buwan-buwan sa USD, dapat bayaran sa loob ng 15 araw. Kapag naka-on ang pay-as-you-go, ang Partner API usage ay sinisingil sa pangalawang buwanang invoice. |
| Bayad sa suporta | Wala | Wala |
| Iba pang mga singil | Bayad sa payout transfer, sa aktwal na gastos | Posibleng prepayment o deposito sa pag-apruba. Interes na 1.5% bawat buwan sa mga overdue na invoice lamang. |
| Kapag nagbago ang mga bayad | 30 araw na paunawa; naaangkop lamang sa mga booking na ginawa pagkatapos ng pagbabago | Pareho. Maaaring baguhin ng Wink ang iyong credit limit sa paunawa. |

Ang ruta ng merchant-of-record ay nangangailangan ng paunang nakasulat na pahintulot mula sa Wink. Tingnan ang [Model 2](#model-2--travel-agent-as-merchant-of-record) sa itaas at ang pahina ng [Partner API](/tl/integrations/partner-api/).

## Paggamit (pay-as-you-go)

Ilang tampok ang may gastos sa amin sa bawat paggamit — generative AI, third-party social APIs, at pagseserbisyo ng live pricing sa malaking sukat. Sa halip na isama ang mga ito sa buwanang plano na maaaring hindi mo magamit, nagbabayad ka lamang para sa aktwal na nagamit mo, at pagkatapos mong maubos ang libreng buwanang alokasyon.

| Tampok | Libre bawat buwan | Pagkatapos | Sinisingil na yunit |
| -- | -- | -- | -- |
| Social post — larawan | 1 | $1.50 | Isang na-publish na post |
| Social post — AI-generated na larawan | 0 | $2.50 | Isang na-publish na post |
| Social post — AI-enhanced na video | 0 | $4.00 | Isang na-publish na post |
| Social post — AI-generated na video | 0 | $14.00 | Isang na-publish na post |
| AI reply sa isang komento o DM | 5 | $0.05 | Isang sagot |
| Chatbot answer | 5 | $0.05 | Isang sagot |
| Partner API | 10,000 | $0.0001 | Isang hotel-night |

Ang mga presyo ay nasa USD. Ang libreng alokasyon ay ibinibigay **bawat account**, hindi bawat user, at nire-reset tuwing ika-1 ng bawat buwan (UTC).

### Paano pinapresyo ang mga post

Pinapresyo ang mga post base sa laman nito, dahil iyon ang gastos namin sa paggawa. Ang isang still image ay mura; ang video ay hindi; anumang ginagawa namin gamit ang AI ay mas mahal kaysa sa larawang ikaw mismo ang nagbigay.

- **Sinasaklaw ng libreng alokasyon ang mga standard na image post lamang.** Nakakakuha ka ng isa bawat account bawat buwan. Ang mga video post at AI-generated media ay sinisingil mula sa unang post pa lang — walang libreng alokasyon sa mga ito, kaya ang isang property na nagpo-post ng video ay dapat asahan ang singil sa unang buwan pa lang.
- **Panalo ang video.** Kung ang post ay may kahit anong video, ang buong post ay sinisingil sa video rate. Ang post na may halo ng larawan at video ay itinuturing na video post.
- **Ang pinagmulan ng AI ang nagtatakda ng tier.** Ang media na ikaw ang nagbigay — sariling mga larawan at video, o anumang mula sa iyong Wink content library — ay sinisingil sa standard rate. Ang media na ginawa namin para sa iyo ay sinisingil sa AI rate.

### Ano ang sinusukat at hindi sinusukat

- Tanging isang **generated** na post na na-publish sa third-party network (Facebook, Instagram) ang sinisingil. Ang post na ikaw mismo ang sumulat ay libre, saan man ito mapunta.
- **Libreng laging ang pag-publish sa WinkLinks**, generated man o hindi.
- Sinisingil ka **kapag na-publish**, hindi sa bawat pagtatangka. Ang pag-regenerate ng draft hanggang sa maging kontento ka ay hindi nadadagdag sa singil — nagbabayad ka lang isang beses para sa post na talagang ipinadala mo. Hindi unlimited ang pagtatangka: bawat post ay may humigit-kumulang 10 regenerations para sa mga larawan at 3 para sa video, na sumasalamin sa gastos namin sa paggawa nito. Makikita mo kung ilan pa ang natitira habang nagtatrabaho ka.
- Sa Partner API, ang **hotel-night** ay isang hotel na may presyo para sa isang gabi ng pananatili — *hindi* isang tawag sa API. Ang paghahanap na nagbabalik ng 20 hotel para sa 3 gabi ay 60 hotel-nights mula sa isang request. Ang Content at Lookup (paghahanap ng destinasyon at autocomplete) calls ay nagkakahalaga ng isang unit bawat isa, kahit ano pa ang ibalik nila. Libre ang mga account endpoints.

### Paano ito i-on

Naka-off bilang default ang pay-as-you-go. Lahat ay nakakakuha ng libreng alokasyon nang hindi kailangang gumawa ng anuman.

Para lumampas sa alokasyon, ang **may-ari** ng account ang nag-e-enable ng pay-as-you-go at pumipili kung alin sa kanilang mga account ang susukatin. Ang paggamit mula sa lahat ng enabled na account mo ay pinagsasama sa isang **isang buwanang invoice**, na maaari mong bayaran nang awtomatiko gamit ang card o makatanggap bilang invoice para bayaran mo mismo.

Kapag na-enable, sinusukat ang paggamit mo pero **hindi kailanman nililimitahan** — hindi ka maaabot sa rate limit para gumastos sa amin.

:::note[Kung hindi mo ito i-enable]
Walang masisira at walang sisingilin. Titigil ka lang sa libreng alokasyon para sa buwan na iyon: ang mga generated post ay hindi ipo-publish at ang mga tawag sa Partner API ay magbabalik ng `429` hanggang sa ma-reset ang alokasyon.
:::

### Katayuan ng pagsingil

| Katayuan | Kahulugan |
| -- | -- |
| Good standing | Normal ang lahat ng operasyon. |
| Past due | Nabigo ang isang bayad at sinusubukang muli. Patuloy ang paggamit ng mga tampok sa panahong ito. |
| Suspended | Hindi nabayaran ang invoice hanggang sa katapusan. Nakaharang ang mga billable na aksyon hanggang mabayaran; ang mga libreng tampok ay nagpapatuloy nang normal. |

:::tip[Live prices]
Ang mga unit price at libreng alokasyon ay palaging ipinapakita sa Portal, direkta mula sa aming billing system, kaya maaari mong suriin bago ka mag-commit. Tingnan ang [Billing](/tl/portal/plan) para i-enable ang pay-as-you-go, piliin ang iyong mga account, at subaybayan ang paggamit at mga invoice sa buwan. Tingnan ang [Social](/tl/portal/social/what-is-social) para sa kung paano naaapektuhan ng dami ng post ang iyong gastos.
:::

## Epekto ng platform

Sa wakas, habang patuloy kaming lumalaki sa laki at bilang ng booking, nais naming maibahagi sa iyo ang ilan sa mga epekto ng platform. Mas maraming booking ay nagdudulot ng mga oportunidad para sa volume discounts mula sa aming payment processor. Dahil ang card processing ay ipinapasa sa aktwal na gastos, anumang matipid na aming mapagkasunduan ay direktang napupunta sa mga hotel.

Sumali sa Wink ngayon at tuklasin ang isang bago, kumikitang paraan ng pagnenegosyo sa industriya ng hospitality!
