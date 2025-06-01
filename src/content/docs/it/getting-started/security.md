---
title: Security
description: >-
  Questo articolo contiene informazioni sulle misure di sicurezza che
  implementiamo e che vengono pubblicate annualmente dalla nostra società di
  sicurezza esterna.
sidebar:
  order: 6
---
# Documento di panoramica sulla sicurezza di Wink

*Ultimo aggiornamento: 7 settembre 2024*

*Versione 1.0*

## Scopo e ambito

Nell'ambito del nostro impegno costante per la sicurezza e la protezione dei dati degli utenti, eseguiamo regolarmente test di penetrazione sulla nostra applicazione web. Questo documento illustra le nostre metodologie di test, fornisce un riepilogo dei risultati e mette in evidenza il nostro approccio al miglioramento continuo della sicurezza.

Il presente documento verrà aggiornato man mano che verranno prodotti nuovi report o quando si verificheranno cambiamenti significativi.

Domini in ambito:\
\*.occhiolino.viaggio\
\*.trippay.io

## Frequenza e programma dei test

I nostri penetration test vengono eseguiti annualmente, con ulteriori test programmati in base alle necessità, a seguito di aggiornamenti significativi dell'applicazione o dell'infrastruttura. Questa cadenza di test regolare ci garantisce di essere sempre al passo con l'evoluzione delle minacce e di mantenere un ambiente sicuro.

## Metodologie di test

I nostri test di penetrazione sono completi e coprono un'ampia gamma di aspetti di sicurezza, tra cui:

* **I primi 10 OWASP:**&#x49; nostri test sono specificamente mirati ai rischi per la sicurezza più critici, come Injection, Broken Authentication e Cross-Site Scripting (XSS).
* **Test della scatola nera e della scatola grigia:**&#x41; seconda dell'ambito, il nostro team utilizza queste metodologie per simulare scenari di attacco sia esterni che interni.
* **Test automatizzati e manuali:**&#x55;tilizziamo Burp Suite Pro, un set di strumenti leader per i test di sicurezza, per condurre scansioni di sicurezza automatizzate e supportare le tecniche di test manuali, al fine di identificare vulnerabilità complesse e ottenere la migliore copertura possibile. Per l'identificazione di vulnerabilità più specifiche, utilizziamo strumenti specializzati, come ad esempio SQLmap.

## Riepilogo dei risultati

Di seguito è riportato un riepilogo generale del nostro più recente report sui test di penetrazione:

* **Vulnerabilità totali identificate:**&#x32;
* **Distribuzione della gravità:**
  * Critico: 2
* **Tipi di vulnerabilità rilevate:**
  * Controllo di accesso interrotto
  * Design non sicuro

Per risultati dettagliati, fare riferimento al rapporto completo.

### Valutazioni del rischio e impatto

Entrambe le vulnerabilità individuate sono classificate come critiche, poiché entrambe avrebbero potuto avere gravi ripercussioni finanziarie. La prima ha permesso a un utente malintenzionato autenticato di ottenere il controllo del conto di pagamento Trippay di un'altra azienda. La seconda vulnerabilità ha permesso a un utente malintenzionato di modificare l'importo richiesto per una prenotazione.

### Sforzi di bonifica e mitigazione

Abbiamo adottato le seguenti misure per affrontare le vulnerabilità identificate:

* **Patch immediate:**&#x4C;e vulnerabilità critiche sono state risolte entro 48 ore dalla scoperta.
* **Revisione e rafforzamento del codice:**&#x49;l team di sviluppo ha implementato ulteriori controlli di sicurezza in base alle nostre raccomandazioni.

## Miglioramento continuo

I penetration test fanno parte della nostra strategia più ampia per il miglioramento continuo della sicurezza. I risultati di ogni test guidano le nostre policy di sicurezza, influenzano le pratiche di sviluppo e stimolano miglioramenti nella nostra architettura di sicurezza.

## Competenza di squadra

I nostri penetration test sono condotti da un professionista interno con una vasta esperienza in diversi progetti e settori. Utilizzando strumenti e metodi all'avanguardia, il nostro esperto garantisce che la nostra applicazione venga testata a fondo contro le più recenti minacce alla sicurezza.

## Impegno per la sicurezza

Ci impegniamo a mantenere un ambiente applicativo sicuro per i nostri utenti e stakeholder. Il nostro impegno costante nei test e nel miglioramento della sicurezza dimostra il nostro impegno a proteggere dalle minacce in continua evoluzione.

## Segnala accesso e aggiornamenti

Questo documento verrà costantemente aggiornato con la pubblicazione di nuovi report sui penetration test. Per accedere al report completo, contattateci all'indirizzo email sottostante. I futuri aggiornamenti includeranno nuove vulnerabilità identificate, interventi di ripristino e modifiche alle nostre metodologie di test.

Per ulteriori informazioni, contattare security@wink.travel.

