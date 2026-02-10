---
title: Sicurezza
description: Questo articolo contiene informazioni sulle misure di sicurezza che implementiamo e che vengono pubblicate annualmente dalla nostra società di sicurezza terza.
sidebar:
  order: 6
---

*Ultimo aggiornamento: 7 settembre 2024*

*Versione 1.0*

## Scopo e Ambito

Come parte del nostro impegno continuo per la sicurezza e la protezione dei dati degli utenti, conduciamo regolarmente test di penetrazione sulla nostra applicazione web. Questo documento illustra le nostre metodologie di test, fornisce un riepilogo dei risultati e mette in evidenza il nostro approccio al miglioramento continuo della sicurezza.

Questo documento sarà aggiornato man mano che verranno prodotti nuovi report o quando si verificheranno cambiamenti significativi.

Domini in ambito:  
\*.wink.travel  
\*.trippay.io

## Frequenza e Programma dei Test

I nostri test di penetrazione vengono effettuati su base annuale, con test aggiuntivi programmati secondo necessità dopo aggiornamenti significativi dell’applicazione o dell’infrastruttura. Questa cadenza regolare di test ci assicura di anticipare le minacce in evoluzione e mantenere un ambiente sicuro.

## Metodologie di Test

I nostri test di penetrazione sono completi e coprono un’ampia gamma di aspetti di sicurezza, inclusi ma non limitati a:

* **OWASP Top 10:** I nostri test mirano specificamente ai rischi di sicurezza più critici, come Injection, Autenticazione compromessa e Cross-Site Scripting (XSS).  
* **Test Black Box e Grey Box:** A seconda dell’ambito, il nostro team utilizza queste metodologie per simulare scenari di attacco sia esterni che interni.  
* **Test Automatizzati e Manuali:** Utilizziamo Burp Suite Pro, un set di strumenti leader per i test di sicurezza, per condurre scansioni di sicurezza automatizzate e supportare tecniche di test manuali per identificare vulnerabilità complesse e ottenere la migliore copertura possibile. Per l’identificazione di vulnerabilità più specifiche, vengono utilizzati alcuni strumenti specializzati, ad esempio SQLmap.

## Riepilogo dei Risultati

Di seguito un riepilogo ad alto livello del nostro report più recente sui test di penetrazione:

* **Vulnerabilità Totali Identificate:** 2  
* **Distribuzione della Gravità:**  
  * Critiche: 2  
* **Tipologie di Vulnerabilità Rilevate:**  
  * Controllo Accessi compromesso  
  * Progettazione Insicura

Per i dettagli completi, si prega di consultare il report integrale.

### Valutazioni del Rischio e Impatto

Entrambe le vulnerabilità riscontrate sono classificate come critiche poiché entrambe avrebbero potuto avere gravi impatti finanziari. La prima ha permesso a un utente autenticato malevolo di ottenere il controllo dell’account di pagamento Trippay di un’altra azienda. La seconda vulnerabilità ha consentito a un utente malevolo di modificare l’importo del pagamento richiesto per una prenotazione.

### Interventi di Remediation e Mitigazione

Abbiamo adottato i seguenti provvedimenti per affrontare le vulnerabilità identificate:

* **Patch Immediate:** Le vulnerabilità critiche sono state corrette entro 48 ore dalla scoperta.  
* **Revisione del Codice e Rafforzamento:** Il team di sviluppo ha implementato controlli di sicurezza aggiuntivi basati sulle nostre raccomandazioni.

## Miglioramento Continuo

I test di penetrazione fanno parte della nostra strategia più ampia per il miglioramento continuo della sicurezza. I risultati di ogni test guidano le nostre politiche di sicurezza, influenzano le pratiche di sviluppo e promuovono miglioramenti nella nostra architettura di sicurezza.

## Competenza del Team

I nostri test di penetrazione sono condotti da un professionista interno con ampia esperienza in vari progetti e settori. Utilizzando strumenti e metodi all’avanguardia, il nostro esperto garantisce che la nostra applicazione sia testata a fondo contro le minacce di sicurezza più recenti.

## Impegno per la Sicurezza

Siamo dedicati a mantenere un ambiente applicativo sicuro per i nostri utenti e stakeholder. I nostri sforzi continui nei test di sicurezza e nel miglioramento dimostrano il nostro impegno a proteggere contro le minacce in evoluzione.

## Accesso al Report e Aggiornamenti

Questo documento sarà aggiornato continuamente man mano che verranno emessi nuovi report di test di penetrazione. Per accedere al report completo, si prega di contattarci tramite l’email sottostante. I futuri aggiornamenti includeranno nuove vulnerabilità identificate, interventi di remediation e aggiustamenti alle nostre metodologie di test.

Per ulteriori informazioni, si prega di contattare security@wink.travel.
