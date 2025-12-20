---
title: Sicherheit
description: Dieser Artikel enthält Informationen über die von uns implementierten Sicherheitsmaßnahmen, die jährlich von unserer externen Sicherheitsfirma veröffentlicht werden.
sidebar:
  order: 6
---

# Wink Sicherheitsübersichts-Dokument

*Zuletzt aktualisiert: 7. September 2024*

*Version 1.0*

## Zweck und Umfang

Im Rahmen unseres fortlaufenden Engagements für Sicherheit und den Schutz von Benutzerdaten führen wir regelmäßige Penetrationstests an unserer Webanwendung durch. Dieses Dokument beschreibt unsere Testmethoden, bietet eine Zusammenfassung der Ergebnisse und hebt unseren Ansatz zur kontinuierlichen Sicherheitsverbesserung hervor.

Dieses Dokument wird aktualisiert, sobald neue Berichte vorliegen oder wesentliche Änderungen eintreten.

Im Umfang enthaltene Domains:  
\*.wink.travel  
\*.trippay.io

## Testfrequenz und Zeitplan

Unsere Penetrationstests werden jährlich durchgeführt, mit zusätzlichen Tests nach Bedarf, insbesondere nach größeren Updates der Anwendung oder Infrastruktur. Diese regelmäßige Testfrequenz stellt sicher, dass wir Bedrohungen frühzeitig erkennen und eine sichere Umgebung aufrechterhalten.

## Testmethoden

Unsere Penetrationstests sind umfassend und decken eine Vielzahl von Sicherheitsaspekten ab, darunter unter anderem:

* **OWASP Top 10:** Unsere Tests zielen gezielt auf die kritischsten Sicherheitsrisiken ab, wie Injection, Broken Authentication und Cross-Site Scripting (XSS).  
* **Black Box und Grey Box Testing:** Je nach Umfang nutzt unser Team diese Methoden, um sowohl externe als auch interne Angriffsszenarien zu simulieren.  
* **Automatisierte und manuelle Tests:** Wir verwenden Burp Suite Pro, ein führendes Sicherheitstest-Toolset, um automatisierte Sicherheitsscans durchzuführen und manuelle Testtechniken zu unterstützen, um komplexe Schwachstellen zu identifizieren und die bestmögliche Abdeckung zu erreichen. Für spezifischere Schwachstellenidentifikation kommen auch spezialisierte Tools wie SQLmap zum Einsatz.

## Zusammenfassung der Ergebnisse

Im Folgenden eine Zusammenfassung unseres aktuellsten Penetrationstestberichts:

* **Insgesamt identifizierte Schwachstellen:** 2  
* **Verteilung der Schweregrade:**  
  * Kritisch: 2  
* **Erkannte Schwachstellentypen:**  
  * Broken Access Control  
  * Unsicheres Design

Für detaillierte Ergebnisse siehe den vollständigen Bericht.

### Risikobewertung und Auswirkungen

Beide gefundenen Schwachstellen werden als kritisch eingestuft, da sie jeweils erhebliche finanzielle Auswirkungen hätten haben können. Die erste ermöglichte einem böswilligen authentifizierten Benutzer die Kontrolle über das Trippay-Zahlungskonto eines anderen Unternehmens. Die zweite Schwachstelle erlaubte einem böswilligen Benutzer, den für eine Buchung erforderlichen Zahlungsbetrag zu ändern.

### Behebungs- und Minderungsmaßnahmen

Wir haben folgende Schritte unternommen, um die identifizierten Schwachstellen zu beheben:

* **Sofortige Patches:** Die kritischen Schwachstellen wurden innerhalb von 48 Stunden nach Entdeckung behoben.  
* **Code-Review und Härtung:** Das Entwicklungsteam hat zusätzliche Sicherheitskontrollen basierend auf unseren Empfehlungen implementiert.

## Kontinuierliche Verbesserung

Penetrationstests sind Teil unserer umfassenderen Strategie zur kontinuierlichen Sicherheitsverbesserung. Die Ergebnisse jedes Tests leiten unsere Sicherheitsrichtlinien, beeinflussen die Entwicklungspraktiken und treiben Verbesserungen in unserer Sicherheitsarchitektur voran.

## Team-Expertise

Unsere Penetrationstests werden von einem internen Experten mit umfangreicher Erfahrung in verschiedenen Projekten und Branchen durchgeführt. Mit führenden Tools und Methoden stellt unser Experte sicher, dass unsere Anwendung gründlich gegen die neuesten Sicherheitsbedrohungen getestet wird.

## Engagement für Sicherheit

Wir sind bestrebt, eine sichere Anwendungsumgebung für unsere Nutzer und Stakeholder zu gewährleisten. Unsere fortlaufenden Bemühungen im Bereich Sicherheitstests und -verbesserungen zeigen unser Engagement zum Schutz vor sich entwickelnden Bedrohungen.

## Berichtszugriff und Updates

Dieses Dokument wird kontinuierlich aktualisiert, sobald neue Penetrationstestberichte vorliegen. Um den vollständigen Bericht zu erhalten, kontaktieren Sie uns bitte über die untenstehende E-Mail-Adresse. Zukünftige Updates werden neu identifizierte Schwachstellen, Behebungsmaßnahmen und Anpassungen unserer Testmethoden enthalten.

Für weitere Anfragen wenden Sie sich bitte an security@wink.travel.
