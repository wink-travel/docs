---
title: Preise
description: Der Großteil von Wink ist kostenlos. Sie zahlen eine kleine Gebühr pro Buchung und eine nutzungsabhängige Gebühr für einige Premium-Funktionen.
sidebar:
  order: 4
---

Wink hat keine Abonnements, keine Sitzplätze und keine Einrichtungsgebühren. Der überwiegende Teil der Plattform ist kostenlos, und es gibt nur zwei Dinge, für die Sie jemals bezahlen:

1. **Eine Plattformgebühr pro Buchung plus Kartenzahlungsgebühren zum Selbstkostenpreis** — nur wenn eine Buchung vorgenommen wird.
2. **Nutzungsabhängige Gebühren** — für einige Premium-Funktionen, die uns bei jeder Ausführung Geld kosten, jeweils mit einem kostenlosen monatlichen Kontingent.

## Was kostenlos ist

Diese kosten dauerhaft nichts, ohne Kontingent und ohne Messung:

- Die **Buchungsmaschine** — auf Ihrer eigenen Website, auf Ihrer WinkLinks-Seite oder überall dort, wo Sie sie einbetten.
- **Objektverwaltung** — Inhalte, Fotos, Preise, Tarifpläne, Verfügbarkeit, Aktionen und Richtlinien.
- **Affiliate-Tools** — teilbare Links, kuratierte Listen, Raster, Karten, Kartenansichten und einbettbare Widgets.
- **Reisebüro-Tools** — Suche, individuelle Preise und Buchung im Namen Ihrer Kunden.
- **WinkLinks** — beanspruchen Sie Ihre Vanity-URL, erstellen Sie Ihre Seite und veröffentlichen Sie so oft Sie möchten.
- **Manuelle Social-Posts** — alles, was Sie selbst schreiben, auf jedem verbundenen Netzwerk.
- **Analysen, Bestenlisten, Ansprüche, Einstellungen** und Kontoverwaltung.
- Die **Consumer- und Booking Engine APIs**, einschließlich ihrer Lookup- und Autocomplete-Endpunkte. Bei der **Partner API** werden Lookup- und Content-Aufrufe mit jeweils einer Einheit gemessen (siehe [Nutzung](#was-gemessen-wird-und-was-nicht) unten).

## Buchungen

Wink unterstützt zwei Modelle: Wink übernimmt die Zahlung für das Hotel, oder ein lizenziertes Reisebüro fungiert als Händler des Zahlungsvorgangs.

### Modell 1 — Wink übernimmt die Zahlung für das Hotel

Wink nimmt die Zahlung des Gastes als begrenzter Zahlungsabwickler des Hotels entgegen. Das Hotel ist der Händler des Zahlungsvorgangs, und der Name des Hotels erscheint auf dem Kartenabrechnungsbeleg des Gastes.
Dieses Modell gilt für 95 % aller Buchungen.

#### Aufschlüsselung

:::note[Plattformgebühr]
Wink erhebt eine Plattformgebühr von 1,5 % pro Buchung. Diese deckt die Wartung der Plattform ab und ermöglicht es uns, alles oben Genannte kostenlos anzubieten. Sie wird bei einer stornierten Buchung nicht berechnet.
:::

:::note[Kartenzahlungsgebühr]
Die Zahlungsabwicklungsgebühr, die für die Entgegennahme der Zahlung des Gastes berechnet wird, wird zum Selbstkostenpreis an das Hotel weitergegeben, ohne Aufschlag. Sie variiert je nach Karte und Zahlungsmethode des Gastes, und der genaue Betrag ist im Buchungsbereich unter Buchhaltung ersichtlich. Wenn eine Buchung storniert oder erstattet wird, wird jede Gebühr, die der Zahlungsabwickler einbehält, dennoch berechnet; wenn keine Gebühr anfällt, berechnen wir auch keine.
:::

:::note[Auszahlung der Gelder]
Für die Überweisung der Gelder auf Ihr Konto fallen Gebühren an. Diese hängen von der von Ihnen gewählten Auszahlungsart ab. Derzeit unterstützen wir:

- **Banküberweisung** — Die Kosten hängen vom Land ab, in dem Sie sich befinden, von dem Land, aus dem die Gelder gesendet werden, und von etwaigen Währungsumrechnungen auf dem Weg. Die Auszahlungsgebühr und etwaige Umrechnungskosten werden vom Zahlungsempfänger zum Selbstkostenpreis getragen. Wir bieten einen Angebotsrechner an, den Sie nutzen können, wenn Sie verfügbare Mittel auf Ihrem Konto haben.

Wenn Sie möchten, dass wir eine andere Auszahlungsart unterstützen, senden Sie uns bitte eine E-Mail.
:::

### Modell 2 — Reisebüro als Händler des Zahlungsvorgangs

Dieses Modell steht nur Reisebüros zur Verfügung, die eine Reisebürolizenz in ihrer Region besitzen und als Händler des Zahlungsvorgangs auftreten möchten. Es ist nur für API-Partner verfügbar, die über die [Partner API](/de/integrations/partner-api/) buchen, und erfordert die vorherige schriftliche Zustimmung von Wink. Einige unserer registrierten Reisebüros möchten für die Zahlungsabwicklung und Auszahlung an Hotels verantwortlich sein. In diesem Modell sind sie für die Gelder verantwortlich und verfügen über die erforderlichen Lizenzen, um in ihrem Land tätig zu sein.

#### Aufschlüsselung

:::note[Plattformgebühr]
Wink erhebt eine Plattformgebühr von 1,5 % pro Buchung. Diese deckt die Wartung der Plattform ab und ermöglicht es uns, alles oben Genannte kostenlos anzubieten.
:::

Bei diesem Modell zahlen Reisebüros die 1,5 % Gebühr an Wink plus alle Partner-API-Nutzungen über das kostenlose Kontingent hinaus, die monatlich in Rechnung gestellt werden.

## Was Partner zahlen

Für Partner, die Buchungen senden: Ersteller, Affiliates, Plattformen, Entwickler und Reisebüros. Partnerschaften sind nicht exklusiv und ohne Gebietsbeschränkungen.

| | Zahlung für das Hotel (die meisten Partner) | Sie sind Händler des Zahlungsvorgangs (nur API-Partner) |
|---|---|---|
| Lizenz- oder Gebietszulassungsgebühr | Keine | Keine |
| Einrichtungsgebühr | Keine | Keine |
| Abonnement- oder Monatsgebühr | Keine | Keine |
| Mindestverpflichtung oder Laufzeit | Keine | Keine. Es gilt ein Kreditlimit. |
| Partner-API-Zugang | 10.000 Hotelnächte pro Monat kostenlos, danach 0,0001 $ pro Hotelnacht. Pay-as-you-go ist standardmäßig deaktiviert; bei Erreichen des Kontingents geben Aufrufe `429` zurück. | Gleich |
| Transaktionsgebühr | Keine. Sie verdienen Provision (Standard 10 %). | 1,5 % Buchungsgebühr auf den Buchungswert, monatlich in USD in Rechnung gestellt, zahlbar innerhalb von 15 Tagen. Bei aktivierter Pay-as-you-go-Nutzung erfolgt die Partner-API-Abrechnung auf einer zweiten Monatsrechnung. |
| Supportgebühr | Keine | Keine |
| Sonstige Gebühren | Auszahlungsgebühren zum Selbstkostenpreis | Mögliche Vorauszahlung oder Kaution bei Genehmigung. Nur auf überfällige Rechnungen wird ein Zinssatz von 1,5 % pro Monat erhoben. |
| Bei Gebührenerhöhung | 30 Tage Vorankündigung; gilt nur für Buchungen nach der Änderung | Gleich. Wink kann auch Ihr Kreditlimit mit Vorankündigung anpassen. |

Der Weg über den Händler des Zahlungsvorgangs erfordert die vorherige schriftliche Zustimmung von Wink. Siehe [Modell 2](#modell-2--reisebüro-als-händler-des-zahlungsvorgangs) oben und die [Partner API](/de/integrations/partner-api/) Seite.

## Nutzung (pay-as-you-go)

Einige Funktionen kosten uns bei jeder Ausführung Geld — generative KI, APIs von Drittanbietern für soziale Netzwerke und die Bereitstellung von Live-Preisen in großem Umfang. Anstatt diese in einem monatlichen Plan zu bündeln, den Sie möglicherweise nicht nutzen, zahlen Sie nur für das, was Sie tatsächlich verbrauchen, und erst nachdem Sie ein kostenloses monatliches Kontingent aufgebraucht haben.

| Funktion | Kostenlos pro Monat | Danach | Abgerechnete Einheit |
| -- | -- | -- | -- |
| Social-Post — Bild | 1 | 1,50 $ | Ein veröffentlichter Post |
| Social-Post — KI-generiertes Bild | 0 | 2,50 $ | Ein veröffentlichter Post |
| Social-Post — KI-verbessertes Video | 0 | 4,00 $ | Ein veröffentlichter Post |
| Social-Post — KI-generiertes Video | 0 | 14,00 $ | Ein veröffentlichter Post |
| KI-Antwort auf Kommentar oder DM | 5 | 0,05 $ | Eine Antwort |
| Chatbot-Antwort | 5 | 0,05 $ | Eine Antwort |
| Partner API | 10.000 | 0,0001 $ | Eine Hotelnacht |

Preise sind in USD. Das kostenlose Kontingent wird **pro Konto**, nicht pro Nutzer gewährt und am 1. eines jeden Monats (UTC) zurückgesetzt.

### Wie Posts berechnet werden

Posts werden nach ihrem Inhalt berechnet, da dieser die Kosten bestimmt. Ein Standbild ist günstig; ein Video nicht; alles, was wir mit KI generieren, kostet deutlich mehr als ein von Ihnen selbst bereitgestelltes Foto.

- **Das kostenlose Kontingent gilt nur für Standardbild-Posts.** Sie erhalten pro Konto und Monat einen solchen Post kostenlos. Video-Posts und KI-generierte Medien werden ab dem ersten Post berechnet — es gibt kein kostenloses Kontingent für diese Kategorien, daher sollte ein Objekt, das Videos postet, im ersten Monat mit Kosten rechnen.
- **Video hat Vorrang.** Enthält ein Post auch nur ein Video, wird der gesamte Post zum Videotarif berechnet. Ein Post, der Bild und Video mischt, ist ein Video-Post.
- **KI-Herkunft bestimmt die Kategorie.** Medien, die Sie bereitstellen — eigene Fotos und Videos oder Inhalte aus Ihrer Wink-Bibliothek — werden zum Standardtarif berechnet. Medien, die wir für Sie generieren, werden zum KI-Tarif berechnet.

### Was gemessen wird und was nicht

- Nur ein **generierter** Post, der in einem Drittanbieter-Netzwerk (Facebook, Instagram) veröffentlicht wird, ist kostenpflichtig. Ein Post, den Sie selbst geschrieben haben, ist kostenlos, egal wo er veröffentlicht wird.
- **Das Veröffentlichen auf WinkLinks ist immer kostenlos**, egal ob generiert oder nicht.
- Sie werden **bei Veröffentlichung** berechnet, nicht pro Versuch. Das erneute Generieren eines Entwurfs, bis Sie zufrieden sind, erhöht Ihre Rechnung nicht — Sie zahlen einmal für den Post, den Sie tatsächlich veröffentlichen. Versuche sind jedoch nicht unbegrenzt: Jeder Post erlaubt etwa 10 Regenerierungen für Bilder und 3 für Videos, was die Kosten widerspiegelt, die uns die Produktion verursacht. Sie sehen während der Arbeit, wie viele Sie noch haben.
- Bei der Partner API ist eine **Hotelnacht** ein Hotel, das für eine Nacht Aufenthalt berechnet wird — *nicht* ein API-Aufruf. Eine Suche, die 20 Hotels für 3 Nächte zurückgibt, entspricht 60 Hotelnächten aus einer einzigen Anfrage. Content- und Lookup-Aufrufe (Zielortsuche und Autocomplete) kosten jeweils eine Einheit, egal was sie zurückgeben. Konto-Endpunkte sind kostenlos.

### Aktivierung

Pay-as-you-go ist standardmäßig deaktiviert. Jeder erhält das kostenlose Kontingent ohne weitere Maßnahmen.

Um das Kontingent zu überschreiten, aktiviert der **Kontoinhaber** pay-as-you-go und wählt aus, welche seiner Konten gemessen werden sollen. Die Nutzung aller aktivierten Konten wird in einer **einzigen monatlichen Rechnung** zusammengefasst, die Sie automatisch per Karte begleichen oder selbst bezahlen können.

Nach der Aktivierung wird Ihre Nutzung gemessen, aber **nie gedrosselt** — Sie stoßen nicht an ein Limit, wenn Sie Geld bei uns ausgeben.

:::note[Wenn Sie es nicht aktivieren]
Es funktioniert alles weiter und es werden keine Gebühren berechnet. Sie bleiben einfach beim kostenlosen Kontingent für diesen Monat: generierte Posts werden nicht veröffentlicht und Partner-API-Aufrufe geben `429` zurück, bis das Kontingent zurückgesetzt wird.
:::

### Abrechnungsstatus

| Status | Bedeutung |
| -- | -- |
| In gutem Zustand | Alles funktioniert normal. |
| Überfällig | Eine Zahlung ist fehlgeschlagen und wird erneut versucht. Ihre Funktionen bleiben in diesem Zeitraum aktiv. |
| Gesperrt | Eine Rechnung wurde bis zum Ende nicht bezahlt. Kostenpflichtige Aktionen sind blockiert, kostenlose Funktionen laufen normal weiter. |

:::tip[Live-Preise]
Einheitspreise und kostenlose Kontingente werden im Portal immer aktuell aus unserem Abrechnungssystem angezeigt, sodass Sie sie vor einer Verpflichtung prüfen können. Siehe [Abrechnung](/de/portal/plan), um pay-as-you-go zu aktivieren, Ihre Konten auszuwählen und die Nutzung sowie Rechnungen des laufenden Monats zu verfolgen. Siehe [Social](/de/portal/social/what-is-social) für Informationen, wie das Postvolumen Ihre Ausgaben beeinflusst.
:::

## Plattform-Effekt

Schließlich möchten wir, während wir in Größe und Buchungen weiter wachsen, einige der Plattform-Effekte mit Ihnen teilen. Mehr Buchungen bringen Möglichkeiten für Mengenrabatte bei unserem Zahlungsabwickler. Da die Kartenzahlungsgebühren zum Selbstkostenpreis weitergegeben werden, kommen alle von uns ausgehandelten Einsparungen direkt den Hotels zugute.

Werden Sie noch heute Teil von Wink und entdecken Sie eine neue, lukrative Art, im Gastgewerbe Geschäfte zu machen!
