---
title: Environments
description: This article contains information for testers and developers about how to get access to our different server environments.
sidebar:
  order: 8
---

At Wink, we run 2 environments for everything we do at all times:

- Production is our stable environment.
- Staging is our testing environment, and where channel managers and travel agents are certified.

If you want to test the Wink platform, as a developer, a hotel or a travel agent, create an account in our staging environment to get started. Channel managers also run their [certification](/guides/integrators/add-your-channel-manager/#certification) there.

Creating an account in staging or production requires accepting Wink's Terms and Payment Terms, and that acceptance is binding. Channel managers and travel agents also need certification before production access; everyone else moves to production on their own.

:::note
The staging environment is available on a request-basis. It means it will go to sleep if there is no usage and turn itself back on when there is. Please be patient if you are waking it up. It takes about a minute to start all the servers after you first connect with one of our servers or apps.
:::

## Servers

Below is a matrix containing the names of our servers and their usage.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applications

Our applications also have test and production environments for our customers.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as | 
