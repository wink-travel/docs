---
title: Pricing
description: Most of Wink is free. You pay a small fee per booking, and a pay-as-you-go usage fee on a handful of premium features.
sidebar:
  order: 4
---

Wink has no subscriptions, no seats and no setup fees. The vast majority of the platform is free, and there are only two things you'll ever pay for:

1. **A small percentage per booking** — only when you actually make money.
2. **Pay-as-you-go usage fees** — on a few premium features that cost us money every time they run, each with a free monthly allowance.

## What's free

These cost nothing, forever, with no allowance and no metering:

- The **booking engine** — on your own site, in your WinkLinks page, or anywhere else you embed it.
- **Property management** — content, photos, rates, rate plans, availability, promotions and policies.
- **Affiliate tools** — shareable links, curated lists, grids, maps, cards and embeddable widgets.
- **Travel agent tools** — search, bespoke rates and booking on behalf of your clients.
- **WinkLinks** — claim your vanity URL, build your page and publish to it as often as you like.
- **Manual social posts** — anything you write yourself, on any connected network.
- **Analytics, leaderboards, claims, settings** and account management.
- The **Consumer and Booking Engine APIs**, plus lookup and autocomplete endpoints.

## Bookings

Wink supports both the merchant and agent models.

### Model 1

Wink is the merchant of record at the time the booking occurs. Wink is responsible for the funds and carries, any and all, licenses to operate a travel agency.
This model applies to 95% of all bookings.

Wink charges `5.5% per booking` to maintain the platform.
Most of that goes to the payment gateway (Visa, MasterCard etc). An average booking costs us `2.95%` to acquire; sometimes as high as `3.6%`. Partial refunds set us back further as the payment gateway sees this as new charge.
We want to be completely transparent about pricing now to save everyone some time before trying to negotiate further discounts before having used Wink. Our pricing model is more than fair and we need to make a living too.

#### Breakdown

:::note[Processing fee]
Wink charges a 1.5% processing fee / booking. This covers platform maintenance and is what lets us give away everything listed above.
:::

:::note[Payment fee]
TripPay charges a 4.0% payment fee / booking. This covers acquiring the payment from the traveler.
:::

:::note[Funds disbursement]
There are fees associated with sending funds to your account. This depends on the disbursement method you choose. We currently support:

- **Bank transfer** Cost depends on the country you are located in and where the funds are sent from. We include a quote calculator you can use when you have available funds in your account.

If you want us to support another pay-out method, send us an e-mail.
:::

### Model 2

This model is only available to travel agencies who hold a travel agency license in their region and who desire to be the merchant of record. Some of our registered travel agents want to be responsible for handling the payment and disbursing of funds to hotels. Under this model, they are responsible for the funds and carry the necessary licenses to operate in their country.

#### Breakdown

:::note[Processing fee]
Wink charges a 1.5% processing fee / booking. This covers platform maintenance and is what lets us give away everything listed above.
:::

Using this model, travel agents only pay Wink's processing fee and Wink will invoice the travel agent on a monthly basis.

## Usage (pay-as-you-go)

A few features cost us money every single time they run — generative AI, third-party social APIs, and serving live pricing at scale. Rather than bundle those into a monthly plan you may not use, you pay only for what you actually consume, and only after you've used up a free monthly allowance.

| Feature | Free per month | Then | Billed unit |
| -- | -- | -- | -- |
| Social post — image | 1 | $1.50 | One published post |
| Social post — AI-generated image | 0 | $2.50 | One published post |
| Social post — video | 0 | $4.00 | One published post |
| Social post — AI-generated video | 0 | $14.00 | One published post |
| AI reply to a comment or DM | 5 | $0.05 | One reply |
| Chatbot answer | 5 | $0.05 | One answer |
| Partner API | 10,000 | $0.0001 | One hotel-day |
| Partner Media API | 1,000 | $0.0005 | One hotel's media |

Prices are in USD. The free allowance is granted **per account**, not per user, and resets on the 1st of every month (UTC).

### How posts are priced

Posts are priced by what's in them, because that's what they cost us to make. A still image is cheap; a video is not; anything we generate with AI costs materially more than a photo you supplied yourself.

- **The free allowance covers standard image posts only.** You get one of those per account per month. Video posts and AI-generated media are billed from the very first post — there is no free allowance on those tiers, so a property that posts video should expect a charge in its first month.
- **Video wins.** If a post contains any video at all, the whole post is billed at the video rate. A post mixing an image and a video is a video post.
- **AI provenance sets the tier.** Media you supply — your own photos and video, or anything from your Wink content library — bills at the standard rate. Media we generate for you bills at the AI rate.

### What is and isn't metered

- Only a **generated** post published to a third-party network (Facebook, Instagram) is billable. A post you wrote yourself is free, wherever it goes.
- **Publishing to WinkLinks is always free**, generated or not.
- You're charged **on publish**, not per attempt. Regenerating a draft until you're happy with it doesn't add to your bill — you pay once for the post you actually ship. Attempts aren't unlimited, though: each post allows around 10 regenerations for images and 3 for video, which reflects what it costs us to produce them. You'll see how many you have left as you work.
- On the Partner API, a **hotel-day** is one hotel priced for one night of stay — *not* one API call. A search that returns 20 hotels for a 3-night stay is 60 hotel-days from a single request. Lookup and autocomplete endpoints are free and never metered.
- On the **Partner Media API**, the unit is one hotel whose media comes back to you, however many photos and videos that turns out to be. A batch request for 50 hotels is 50 units — and if some of those hotels have nothing you're entitled to see, you're only billed for the ones that actually returned media.

### Example: an OTA caching 90 days of pricing

Say you're an OTA, a metasearch site or a tour operator, and you want 90 days of forward pricing for **1,000 hotels**, each of which publishes **4 master rates**.

**One full refresh of all of it is 90,000 hotel-days — $9.00.**

That's 1,000 hotels × 90 days. The 4 master rates cost you nothing extra: a single request returns every rate plan a hotel publishes for that date range, so the number of rates a property carries is not a billing dimension. Neither is how you slice the request — a period request covers up to 30 days, so you'd make 3 requests per hotel, and 3 × 30 days bills exactly the same as one 90-day request would. You're billed for the pricing you asked for, not for the plumbing you asked it through.

So what you pay per month comes down to one question: how often do you refresh?

| Refresh cadence | Hotel-days / month | After the 10,000 free | Monthly cost |
| -- | -- | -- | -- |
| Once a month | 90,000 | 80,000 | **$8.00** |
| Weekly | 360,000 | 350,000 | **$35.00** |
| Daily | 2,700,000 | 2,690,000 | **$269.00** |
| Twice a day | 5,400,000 | 5,390,000 | **$539.00** |

Refreshing all 1,000 hotels every single day is 3,000 requests a day and works out to about $9.00 a day. The free allowance on its own — 10,000 hotel-days a month — is enough to price roughly 110 hotels for a full 90 days, or to build and test an entire integration without paying anything.

#### What moves that number

- **Asking for rate plans one at a time.** A period request returns the best price per room type across every rate plan at once. If you filter to one rate plan per request so you can see all four separately, you make four times the requests and pay four times as much.
- **Extra occupancies, currencies or languages.** Pricing for 1 adult and pricing for 2 adults are two different questions, and each is billed. The same goes for a second display currency or language.
- **Freshness you don't need.** Nothing says all 90 days deserve the same refresh rate. Refresh the next 14 days daily and days 15–90 weekly and the same 1,000 hotels cost **$71.40** a month instead of $269.00 — the near-term dates, where rates actually move, stay fresh.

### Turning it on

Pay-as-you-go is off by default. Everyone gets the free allowance without doing anything.

To go beyond the allowance, the **owner** of an account enables pay-as-you-go and picks which of their accounts are metered. Usage from all of your enabled accounts rolls up into a **single monthly invoice**, which you can settle automatically by card or receive as an invoice to pay yourself.

Once enabled, your usage is metered but **never throttled** — you won't hit a rate limit for spending money with us.

:::note[If you don't enable it]
Nothing breaks and nothing is charged. You simply stop at the free allowance for that month: generated posts won't publish and Partner API calls return a `429` until the allowance resets.
:::

### Billing status

| Status | What it means |
| -- | -- |
| Good standing | Everything works normally. |
| Past due | A payment failed and is being retried. Your features keep working during this window. |
| Suspended | An invoice went unpaid to the end. Billable actions are blocked until it's settled; free features carry on as normal. |

:::tip[Live prices]
Unit prices and free allowances are always shown in Portal, straight from our billing system, so you can check them before you commit to anything. See [Billing](/account/subscription) to enable pay-as-you-go, pick your accounts, and track month-to-date usage and invoices. See [Social](/portal/social/what-is-social) for how post volume affects what you spend.
:::

## Platform effect

Finally, as we continue to grow in both size and bookings, we want to be able to share some of the platform effects with you. More bookings bring opportunities for volume discounts from our payment gateway which would allow us to lower our processing fee for everyone.

Join Wink today and discover a new, lucrative, way to do business in the hospitality industry!
