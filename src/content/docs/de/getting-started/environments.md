---
title: Umgebungen
description: Dieser Artikel enthält Informationen für Tester und Entwickler darüber, wie sie Zugang zu unseren verschiedenen Serverumgebungen erhalten.
sidebar:
  order: 8
---

Bei Wink betreiben wir jederzeit 2 Umgebungen für alles, was wir tun:

- Produktion ist unsere stabile Umgebung.
- Staging ist unsere Testumgebung und der Ort, an dem Channel Manager und Reisebüros zertifiziert werden.

Wenn Sie die Wink-Plattform testen möchten, sei es als Entwickler, Hotel oder Reisebüro, erstellen Sie ein Konto in unserer Staging-Umgebung, um zu starten. Channel Manager führen dort auch ihre [Zertifizierung](/de/guides/integrators/add-your-channel-manager/#certification) durch.

Die Erstellung eines Kontos in Staging oder Produktion erfordert die Akzeptanz der Wink-Nutzungsbedingungen und Zahlungsbedingungen, und diese Akzeptanz ist verbindlich. Channel Manager und Reisebüros benötigen vor dem Produktionszugang ebenfalls eine Zertifizierung; alle anderen wechseln eigenständig in die Produktion.

:::note
Die Staging-Umgebung ist auf Anfrage verfügbar. Das bedeutet, sie geht in den Ruhezustand, wenn sie nicht genutzt wird, und schaltet sich wieder ein, wenn sie gebraucht wird. Bitte haben Sie Geduld, wenn Sie sie aufwecken. Es dauert etwa eine Minute, bis alle Server gestartet sind, nachdem Sie sich zum ersten Mal mit einem unserer Server oder Apps verbunden haben.
:::

## Server

Nachfolgend eine Matrix mit den Namen unserer Server und deren Nutzung.

| Feature | Staging | Produktion
| ------- | ------- | ---------- |
| IAM | https://staging-iam.wink.travel | https://iam.wink.travel | 
| Inventory | https://staging-api.wink.travel | https://api.wink.travel | 
| Integrations | https://staging-integrations.wink.travel | https://integrations.wink.travel | 
| Partner (gRPC) | https://staging-partner.wink.travel | https://partner.wink.travel | 
<!-- | Payment | https://staging-api.trippay.io | https://api.trippay.io |  -->

## Anwendungen

Unsere Anwendungen haben ebenfalls Test- und Produktionsumgebungen für unsere Kunden.

| Anwendung | Staging | Produktion
| ------- | ------- | ---------- |
| Portal | https://staging-app.wink.travel | https://app.wink.travel | 
| Buchungsmaschine | https://staging-book.wink.travel | https://book.wink.travel | 
| Link Manager | https://staging-i.trvl.as | https://i.trvl.as |
