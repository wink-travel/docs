---
title: Security
description: >-
  Dieser Artikel enthält Informationen zu den Sicherheitsmaßnahmen, die wir
  implementieren und die jährlich von unserem externen Sicherheitsunternehmen
  veröffentlicht werden.
sidebar:
  order: 6
---
# Wink-Sicherheitsübersichtsdokument

*Zuletzt aktualisiert: 7. September 2024*

*Version 1.0*

## Zweck und Umfang

Im Rahmen unseres kontinuierlichen Engagements für Sicherheit und den Schutz unserer Nutzerdaten führen wir regelmäßig Penetrationstests unserer Webanwendung durch. Dieses Dokument beschreibt unsere Testmethoden, bietet eine Zusammenfassung der Ergebnisse und beleuchtet unseren Ansatz zur kontinuierlichen Verbesserung der Sicherheit.

Dieses Dokument wird aktualisiert, wenn neue Berichte erstellt werden oder wesentliche Änderungen auftreten.

Domänen im Geltungsbereich:\
\*.wink.travel\
\*.trippay.io

## Testhäufigkeit und -plan

Unsere Penetrationstests werden jährlich durchgeführt. Zusätzliche Tests werden bei Bedarf nach wesentlichen Aktualisierungen der Anwendung oder Infrastruktur durchgeführt. Dieser regelmäßige Testrhythmus stellt sicher, dass wir neuen Bedrohungen immer einen Schritt voraus sind und eine sichere Umgebung gewährleisten.

## Testmethoden

Unsere Penetrationstests sind umfassend und decken ein breites Spektrum an Sicherheitsaspekten ab, einschließlich, aber nicht beschränkt auf:

* **OWASP Top 10:**&#x55;nsere Tests zielen speziell auf die kritischsten Sicherheitsrisiken ab, wie z. B. Injection, fehlerhafte Authentifizierung und Cross-Site Scripting (XSS).
* **Black-Box- und Grey-Box-Tests:**&#x4A;e nach Umfang nutzt unser Team diese Methoden, um sowohl externe als auch interne Angriffsszenarien zu simulieren.
* **Automatisiertes und manuelles Testen:**&#x57;ir verwenden Burp Suite Pro, ein führendes Toolset für Sicherheitstests, um automatisierte Sicherheitsscans durchzuführen und manuelle Testverfahren zu unterstützen, um komplexe Schwachstellen zu identifizieren und die bestmögliche Abdeckung zu erreichen. Zur genaueren Identifizierung von Schwachstellen kommen spezielle Tools wie SQLmap zum Einsatz.

## Zusammenfassung der Ergebnisse

Nachfolgend finden Sie eine allgemeine Zusammenfassung unseres jüngsten Penetrationstestberichts:

* **Gesamtzahl der identifizierten Schwachstellen:**&#x32;
* **Schweregradverteilung:**
  * Kritisch: 2
* **Arten der erkannten Schwachstellen:**
  * Defekte Zugriffskontrolle
  * Unsicheres Design

Detaillierte Ergebnisse finden Sie im vollständigen Bericht.

### Risikobewertungen und Auswirkungen

Beide gefundenen Schwachstellen werden als kritisch eingestuft, da sie schwerwiegende finanzielle Folgen hätten haben können. Die erste ermöglichte es einem böswilligen authentifizierten Benutzer, Zugriff auf das Trippay-Zahlungskonto eines anderen Unternehmens zu erlangen. Die zweite Schwachstelle ermöglichte es einem böswilligen Benutzer, den für eine Buchung erforderlichen Zahlungsbetrag zu ändern.

### Sanierungs- und Minderungsbemühungen

Wir haben die folgenden Schritte unternommen, um die identifizierten Schwachstellen zu beheben:

* **Sofortige Patches:**&#x44;ie kritischen Schwachstellen wurden innerhalb von 48 Stunden nach ihrer Entdeckung behoben.
* **Codeüberprüfung und -härtung:**&#x44;as Entwicklungsteam hat basierend auf unseren Empfehlungen zusätzliche Sicherheitskontrollen implementiert.

## Kontinuierliche Verbesserung

Penetrationstests sind Teil unserer umfassenden Strategie zur kontinuierlichen Verbesserung der Sicherheit. Die Ergebnisse jedes Tests dienen als Grundlage für unsere Sicherheitsrichtlinien, beeinflussen Entwicklungspraktiken und fördern Verbesserungen unserer Sicherheitsarchitektur.

## Teamkompetenz

Unsere Penetrationstests werden von einem internen Experten mit umfassender Erfahrung in verschiedenen Projekten und Branchen durchgeführt. Mit führenden Tools und Methoden stellt unser Experte sicher, dass unsere Anwendung gründlich auf die neuesten Sicherheitsbedrohungen getestet wird.

## Verpflichtung zur Sicherheit

Wir legen Wert darauf, unseren Nutzern und Stakeholdern eine sichere Anwendungsumgebung zu bieten. Unsere kontinuierlichen Sicherheitstests und -verbesserungen unterstreichen unser Engagement für den Schutz vor neuen Bedrohungen.

## Berichtszugriff und -aktualisierungen

Dieses Dokument wird fortlaufend aktualisiert, sobald neue Penetrationstestberichte veröffentlicht werden. Um den vollständigen Bericht zu erhalten, kontaktieren Sie uns bitte über die unten stehende E-Mail-Adresse. Zukünftige Updates werden neu identifizierte Schwachstellen, Behebungsmaßnahmen und Anpassungen unserer Testmethoden enthalten.

Für weitere Anfragen wenden Sie sich bitte an security@wink.travel.

