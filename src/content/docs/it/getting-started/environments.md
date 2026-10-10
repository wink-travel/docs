---
title: Ambienti
description: Questo articolo contiene informazioni per tester e sviluppatori su come accedere ai nostri diversi ambienti server.
sidebar:
  order: 8
---

Da Wink, gestiamo 2 ambienti per tutto ciò che facciamo in ogni momento:

- Production è il nostro ambiente stabile.
- Staging è il nostro ambiente di test, e dove i channel manager e le agenzie di viaggio vengono certificati.

Se vuoi testare la piattaforma Wink, come sviluppatore, hotel o agenzia di viaggio, crea un account nel nostro ambiente staging per iniziare. Anche i channel manager eseguono la loro [certificazione](/it/guides/integrators/add-your-channel-manager/#certification) lì.

Creare un account in staging o production richiede l'accettazione dei Termini e delle Condizioni di Pagamento di Wink, e tale accettazione è vincolante. I channel manager e le agenzie di viaggio necessitano inoltre della certificazione prima dell'accesso in production; tutti gli altri passano a production in autonomia.

:::note
L'ambiente staging è disponibile su richiesta. Ciò significa che andrà in standby se non viene utilizzato e si riattiverà quando necessario. Ti preghiamo di avere pazienza se lo stai risvegliando. Occorre circa un minuto per avviare tutti i server dopo la prima connessione a uno dei nostri server o app.
:::

## Server

Di seguito una matrice contenente i nomi dei nostri server e il loro utilizzo.

| Feature | Staging | Production
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Applicazioni

Anche le nostre applicazioni hanno ambienti di test e di produzione per i nostri clienti.

| Application | Staging | Production
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Booking engine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
