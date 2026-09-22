---
title: Prezzi
description: La maggior parte di Wink è gratuita. Paghi una piccola commissione per ogni prenotazione e una tariffa pay-as-you-go per alcune funzionalità premium.
sidebar:
  order: 4
---

Wink non prevede abbonamenti, posti a sedere né costi di configurazione. La stragrande maggioranza della piattaforma è gratuita, e ci sono solo due cose per cui pagherai:

1. **Una commissione di piattaforma per prenotazione, più il costo di elaborazione della carta** — solo quando viene effettuata una prenotazione.
2. **Tariffe pay-as-you-go** — su alcune funzionalità premium che ci costano ogni volta che vengono utilizzate, ciascuna con una franchigia mensile gratuita.

## Cosa è gratuito

Questi non costano nulla, per sempre, senza franchigia né misurazione:

- Il **motore di prenotazione** — sul tuo sito, nella tua pagina WinkLinks o ovunque tu lo incorpori.
- **Gestione della proprietà** — contenuti, foto, tariffe, piani tariffari, disponibilità, promozioni e politiche.
- **Strumenti affiliati** — link condivisibili, liste curate, griglie, mappe, schede e widget incorporabili.
- **Strumenti per agenti di viaggio** — ricerca, tariffe personalizzate e prenotazioni per conto dei tuoi clienti.
- **WinkLinks** — richiedi il tuo URL personalizzato, crea la tua pagina e pubblica tutte le volte che vuoi.
- **Post social manuali** — qualsiasi contenuto scritto da te, su qualsiasi rete connessa.
- **Analisi, classifiche, reclami, impostazioni** e gestione account.
- Le **API Consumer e Booking Engine**, più endpoint di ricerca e completamento automatico.

## Prenotazioni

Wink supporta due modelli: Wink che incassa il pagamento per l’hotel, e un agente di viaggio autorizzato che agisce come merchant of record.

### Modello 1 — Wink incassa per l’hotel

Wink incassa il pagamento dell’ospite come agente limitato di raccolta pagamenti per l’hotel. L’hotel è il merchant of record, e il nome dell’hotel appare sull’estratto conto della carta dell’ospite.
Questo modello si applica al 95% di tutte le prenotazioni.

#### Dettaglio

:::note[Commissione di piattaforma]
Wink applica una commissione di piattaforma dell’1,5% per prenotazione. Questa copre la manutenzione della piattaforma ed è ciò che ci permette di offrire gratuitamente tutto quanto elencato sopra. Non viene addebitata su prenotazioni cancellate.
:::

:::note[Elaborazione carta]
La commissione per l’elaborazione del pagamento addebitata per incassare il pagamento dell’ospite viene trasferita all’hotel al costo, senza margine. Varia in base alla carta e al metodo di pagamento dell’ospite, e l’importo esatto appare nella sezione Contabilità di ogni prenotazione. Se una prenotazione viene cancellata o rimborsata, qualsiasi commissione trattenuta dal processore viene comunque addebitata; se non viene addebitato nulla, nemmeno noi addebitiamo.
:::

:::note[Disposizione fondi]
Ci sono commissioni associate all’invio dei fondi al tuo conto. Questo dipende dal metodo di pagamento scelto. Attualmente supportiamo:

- **Bonifico bancario** — Il costo dipende dal paese in cui ti trovi, da dove vengono inviati i fondi e da eventuali conversioni di valuta applicate. La commissione di pagamento e qualsiasi costo di conversione sono a carico del beneficiario, al costo. Forniamo un calcolatore di preventivi che puoi usare quando hai fondi disponibili nel tuo account.

Se desideri che supportiamo un altro metodo di pagamento, inviaci un’e-mail.
:::

### Modello 2 — Agente di viaggio come merchant of record

Questo modello è disponibile solo per agenzie di viaggio che possiedono una licenza di agenzia di viaggio nella loro regione e che desiderano essere il merchant of record. Alcuni dei nostri agenti di viaggio registrati vogliono essere responsabili della gestione del pagamento e della distribuzione dei fondi agli hotel. In questo modello, sono responsabili dei fondi e possiedono le licenze necessarie per operare nel loro paese.

#### Dettaglio

:::note[Commissione di piattaforma]
Wink applica una commissione di piattaforma dell’1,5% per prenotazione. Questa copre la manutenzione della piattaforma ed è ciò che ci permette di offrire gratuitamente tutto quanto elencato sopra.
:::

Con questo modello, gli agenti di viaggio pagano solo la commissione di piattaforma di Wink e Wink fatturerà l’agente di viaggio su base mensile.

## Utilizzo (pay-as-you-go)

Alcune funzionalità ci costano denaro ogni volta che vengono utilizzate — AI generativa, API social di terze parti e fornitura di prezzi in tempo reale su larga scala. Invece di includerle in un piano mensile che potresti non usare, paghi solo per ciò che consumi effettivamente, e solo dopo aver esaurito la franchigia mensile gratuita.

| Funzionalità | Gratis al mese | Poi | Unità fatturata |
| -- | -- | -- | -- |
| Post social — immagine | 1 | $1.50 | Un post pubblicato |
| Post social — immagine generata da AI | 0 | $2.50 | Un post pubblicato |
| Post social — video migliorato da AI | 0 | $4.00 | Un post pubblicato |
| Post social — video generato da AI | 0 | $14.00 | Un post pubblicato |
| Risposta AI a commento o DM | 5 | $0.05 | Una risposta |
| Risposta chatbot | 5 | $0.05 | Una risposta |
| API Partner | 10.000 | $0.0001 | Un hotel-giorno |

I prezzi sono in USD. La franchigia gratuita è concessa **per account**, non per utente, e si azzera il 1° di ogni mese (UTC).

### Come vengono tariffati i post

I post sono tariffati in base a cosa contengono, perché è quello che ci costa produrli. Un’immagine statica è economica; un video no; qualsiasi cosa generata con AI costa molto più di una foto fornita da te.

- **La franchigia gratuita copre solo i post con immagini standard.** Ne hai uno per account al mese. I post video e i media generati da AI sono fatturati fin dal primo post — non c’è franchigia gratuita per questi livelli, quindi una struttura che pubblica video deve aspettarsi un addebito nel primo mese.
- **Il video prevale.** Se un post contiene anche solo un video, l’intero post viene fatturato al prezzo del video. Un post che mescola immagine e video è considerato un post video.
- **La provenienza AI determina il livello.** I media forniti da te — tue foto e video, o qualsiasi cosa dalla libreria contenuti Wink — sono fatturati al prezzo standard. I media generati da noi per te sono fatturati al prezzo AI.

### Cosa viene e non viene misurato

- Solo un post **generato** pubblicato su una rete di terze parti (Facebook, Instagram) è fatturabile. Un post scritto da te è gratuito, ovunque venga pubblicato.
- **La pubblicazione su WinkLinks è sempre gratuita**, generata o meno.
- Viene addebitato **al momento della pubblicazione**, non per tentativo. Rigenerare una bozza finché non sei soddisfatto non aumenta la fattura — paghi una volta per il post che effettivamente pubblichi. I tentativi non sono illimitati: ogni post consente circa 10 rigenerazioni per immagini e 3 per video, riflettendo il costo per noi di produrli. Vedrai quanti ne hai rimasti mentre lavori.
- Sull’API Partner, un **hotel-giorno** è un hotel valutato per una notte di soggiorno — *non* una chiamata API. Una ricerca che restituisce 20 hotel per un soggiorno di 3 notti equivale a 60 hotel-giorni da una singola richiesta. Gli endpoint di ricerca e completamento automatico sono gratuiti e mai misurati.

### Attivazione

Il pay-as-you-go è disattivato di default. Tutti ricevono la franchigia gratuita senza fare nulla.

Per superare la franchigia, il **proprietario** di un account abilita il pay-as-you-go e sceglie quali dei suoi account sono misurati. L’utilizzo di tutti gli account abilitati viene consolidato in una **singola fattura mensile**, che puoi saldare automaticamente con carta o ricevere come fattura da pagare autonomamente.

Una volta abilitato, il tuo utilizzo viene misurato ma **mai limitato** — non raggiungerai mai un limite di spesa con noi.

:::note[Se non lo abiliti]
Niente si interrompe e niente viene addebitato. Ti fermi semplicemente alla franchigia gratuita per quel mese: i post generati non verranno pubblicati e le chiamate API Partner restituiranno un `429` finché la franchigia non si azzera.
:::

### Stato fatturazione

| Stato | Cosa significa |
| -- | -- |
| In regola | Tutto funziona normalmente. |
| Scaduto | Un pagamento è fallito e viene ritentato. Le tue funzionalità continuano a funzionare durante questo periodo. |
| Sospeso | Una fattura non è stata pagata fino alla fine. Le azioni fatturabili sono bloccate finché non viene saldata; le funzionalità gratuite continuano normalmente. |

:::tip[Prezzi in tempo reale]
I prezzi unitari e le franchigie gratuite sono sempre mostrati nel Portale, direttamente dal nostro sistema di fatturazione, così puoi verificarli prima di impegnarti. Vedi [Fatturazione](/it/portal/plan) per abilitare il pay-as-you-go, scegliere i tuoi account e monitorare l’utilizzo e le fatture del mese in corso. Vedi [Social](/it/portal/social/what-is-social) per capire come il volume dei post influisce sulla spesa.
:::

## Effetto piattaforma

Infine, mentre continuiamo a crescere sia in dimensioni che in prenotazioni, vogliamo poter condividere con te alcuni degli effetti di scala della piattaforma. Più prenotazioni portano opportunità di sconti per volume dal nostro processore di pagamenti. Poiché l’elaborazione delle carte viene trasferita al costo, ogni risparmio che negoziamo va direttamente agli hotel.

Unisciti a Wink oggi e scopri un modo nuovo e redditizio di fare business nell’industria dell’ospitalità!
