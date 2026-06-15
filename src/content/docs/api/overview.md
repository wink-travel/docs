---
title: API Overview
description: Introduction to the Wink API — audiences, testing, usage and versioning.
---

Welcome to the Wink API — a programmer-friendly way to manage, sell and book travel inventory on the
Wink platform. The API gives you all the tools you need to ready your properties and inventory for
sale across 1000s of our native sales channels. Integrators, affiliates, travel agents and content
creators can search for your travel inventory and promote / sell it in a wide variety of ways.

## Integrations

We have already integrated with the most well-known channel managers so you don't have to. Once your
properties are set up, you can finish by mapping your property to Wink using your channel manager
partner portal. If your properties don't have a channel manager, you can manage rates and
availability with this API directly.

## Intended audience

Programmers are [most likely] a requirement to start integrating with Wink. The companies that
benefit most are new and existing travel companies that have relationships with suppliers and need an
advanced system to manage their travel inventory and get it in front of as many eyeballs as possible
at the lowest price possible:

- Hotel chains
- Hotel brands
- Travel tech companies
- Destination sites
- Integrators
- Aggregators
- Destination management companies
- Travel agencies
- OTAs

## How the docs are organized

Not every integrator needs every API, so endpoints are grouped by **audience** in the sidebar:

- **Platform** — cross-cutting endpoints used by every integrator: analytics, managing-entity
  lookups, reference data, public search, user settings, and a `ping` for credential checks.
- **Supplier** — for property owners and operators: register a property, manage facilities and
  experiences, set up monetization (rate plans, promotions, cancellation policies), distribute
  inventory across sales channels, and reconcile bookings.
- **Consumer** — for developers who consume the platform: look up inventory, drive checkout and
  booking, the customization engine, and an agent-facilitated travel-agent surface.
- **Affiliate** — for resellers and content creators: browse and curate inventory (lists, maps,
  grids), manage sales channels, and run WinkLinks pages.
- **Account** — account self-management for a managing entity: payment and payout accounts, the
  ledger and withdrawals, managers, applications, webhooks, features, and customization.
- **Partner** — for technology partners that integrate at the infrastructure layer (channel managers
  today; PMS / GDS / OTA partners over time).

## Testing

You can explore and try out every endpoint interactively in our Scalar API reference:

- Production: <https://api.wink.travel/scalar>
- Staging: <https://staging-api.wink.travel/scalar>

## Usage

These features are made available to you via a REST API. The API is language agnostic.

## Versioning

We version endpoints in a way that we hope affects your integration minimally. You request the
version you wish to work with via the `Wink-Version` header. When it's time to upgrade, you only
change the version number to get access to our updated endpoints.

- Current version: `2.0`
- Prior versions: None
