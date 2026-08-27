# Revisione d'autore — 27 sezioni B1

**Metodo eseguito.** Estrazione di `TEST_STRUCTURES` dalla pagina (27 sezioni, 81 esercizi, 486 item; formati presenti: `buco` 38, `errore` 27, `fill` 14, `ordina` 2 — nessun formato nuovo, nessuna sezione di comprensione). Generazione di 27 pacchetti **senza chiavi**, un revisore cieco per sezione in parallelo, poi arbitraggio mio contro il database.

**Esito del confronto cieco.** Su 486 item, la risoluzione cieca ha divergito dalla chiave del db in **1 caso** (`Ho messo nel carrello qualche bottiglie d'acqua minerale.`) e ha segnalato **77 item** come risolti ma ambigui. Il tasso di divergenza secca bassissimo è una buona notizia: **le chiavi sono quasi sempre difendibili**. Il problema non è che siano sbagliate, è che in un numero non trascurabile di item **non sono le uniche difendibili**.

Un dato che vale più di molte righe: **due terzi dei rilievi bloccanti stanno nel formato `errore`**, e quasi tutti hanno la stessa causa — una seconda riparazione da un solo intervento che la consegna ammette (sostituzione di un'altra parola, o cancellazione).

---

## A) BLOCCANTI — 36 item

Doppia chiave, errore non univoco, item rotto. Da correggere prima della pubblicazione.

### A.1 — Il partitivo

**«Oggi non ho comprato ___ perché il fruttivendolo era chiuso.»** — opzioni `frutta / della frutta / qualche frutta`, chiave `frutta`.
Doppia chiave. Con la negazione l'omissione del partitivo è la forma consigliata, ma il partitivo in frase negativa non è agrammaticale: Serianni lo descrive come *evitato*, non escluso, ed è corrente nel neo-standard. Nulla nella frase permette di scegliere.
**Proposta:** togliere il confronto nudo/partitivo, che non è decidibile → «Stamattina ho comprato ___ al mercato.» con `della frutta / delle frutta / qualche frutta` (chiave `della frutta`). I due distrattori cadono per ragioni diverse: accordo di numero; «qualche» + nome di massa. *(−4 parole.)*

**«Ho messo nel carrello qualche bottiglie d'acqua minerale.»** — db: click su `bottiglie` → `bottiglia`.
**Unica divergenza secca fra risoluzione cieca e db.** Il revisore ha cliccato `qualche` (→ «delle bottiglie»), riparazione altrettanto legittima e con un solo intervento. La scena non contiene nulla che imponga il singolare. Segnalo che, fra le due, la chiave del db è la meno spontanea.
**Proposta:** ancorare il singolare con un accordo già presente, senza allungare → «Nel frigo è rimasta qualche bottiglie d'acqua.» Il plurale ora costerebbe due interventi (`è rimasta` → `sono rimaste`), quindi l'unico bersaglio resta `bottiglie`. *(−1 parola.)*

### A.2 — L'infinito istruttivo

**«Luca, ___ tu la spesa oggi, io torno tardi.» (fare)** — chiave `fai`.
L'imperativo di 2ª sing. di *fare* ha due forme standard registrate: **fai** e **fa'**. Il contesto non ne seleziona una, e la tolleranza ai refusi non copre la differenza. Chi scrive la forma giusta viene penalizzato.
**Proposta (solo dati, nessuna modifica al testo):** portare `a` a `fai|fa'|fa`, come già fatto altrove nel test per gli item a più risposte.

**«Inserire la spina e premendo il tasto per tre secondi.»** — click su `premendo`.
Togliendo `e` si ottiene «Inserire la spina premendo il tasto per tre secondi»: gerundio modale, frase perfetta e anzi più naturale. Due click premiabili.
**Proposta:** sostituire il gerundio con un participio in seconda posizione, dove la lettura assoluta è impossibile → «Inserire la spina e premuto il tasto per tre secondi.» (click su `premuto`). Senza `e` la frase è agrammaticale. *(lunghezza invariata.)*

**«Compilato il modulo e allegare una copia del documento.»** — click su `Compilato`.
Togliendo `e` si ottiene un participio assoluto + infinito istruttivo: costruzione corretta e frequentissima proprio nelle istruzioni.
**Proposta:** invertire l'ordine, così che la sottrazione della congiunzione non salvi nulla → «Allegare una copia del documento e compilato il modulo.» *(lunghezza invariata.)*

### A.3 — Volerci e metterci

**«Sara ci vogliono due giorni per finire la relazione.»** — click su `vogliono` → `mette`.
Tre letture: sostituire il verbo; **togliere `Sara`** («Ci vogliono due giorni per finire la relazione», impeccabile); oppure leggere `Sara` come vocativo, e allora la frase è già corretta.
**Proposta:** soggetto non vocativizzabile e non cancellabile con un click → «Il collega ci vogliono due giorni per finire la relazione.» *(+1 parola.)*

**«Voi quanto ci mettono a rispondere alle email?»** — click su `mettono` → `mettete`.
Si ripara anche togliendo `Voi`, o sostituendolo con `Loro`: entrambe danno domande naturali.
**Proposta:** spostare l'errore sulla scelta del verbo, dove la cancellazione non ripara → «Voi quanto ci volete a rispondere alle email?» (click su `volete` → `mettete`). Bonus: diversifica il tipo d'errore dell'esercizio. *(lunghezza invariata.)*

**«Quando c'è traffico io ci mette il doppio del solito.»** — click su `mette` → `metto`.
Stessa struttura: togliendo `io`, o sostituendolo con `lui`, la frase è corretta.
**Proposta:** soggetto lessicale plurale → «Quando c'è traffico gli autobus ci mette il doppio del solito.» *(+1 parola.)*

### A.4 — L'imperfetto

**«Al liceo io studiava in biblioteca insieme a due compagni.»** — click su `studiava` → `studiavo`.
Togliendo `io`, o sostituendolo con `lui`, la frase è corretta: nessun'altra spia di persona la blinda.
**Proposta:** soggetto coordinato, non riducibile con un click → «Al liceo io e Marco studiava sempre in biblioteca.» (click su `studiava` → `studiavamo`). *(−2 parole.)*

### A.5 — Imperfetto o passato prossimo?

**«Quella mattina mio nonno leggeva tutto il giornale in mezz'ora.»** — click su `leggeva` → `ha letto`.
L'unica àncora perfettiva è `Quella`, cioè proprio una parola cliccabile: `Quella` → `Ogni` dà un imperfetto abituale ineccepibile, e più idiomatico dell'esito atteso. `in mezz'ora` non blinda nulla, è compatibile con l'abituale.
**Proposta:** appoggiare l'imperfetto a un evento perfettivo interno, come è già fatto bene altrove nello stesso esercizio → «Ieri mio nonno leggeva tutto il giornale e poi è uscito.» *(+1 parola.)*

### A.6 — Stare + gerundio

**«Il tecnico ha smontando il termosifone del salotto.»** — click su `ha` → `sta`.
Due riparazioni impeccabili: `ha` → `sta`, oppure `smontando` → `smontato` (passato prossimo, con transitivo e ausiliare *avere* è anzi la lettura più naturale). `del salotto` è riempitivo, non àncora.
**Proposta:** scambiare il riempitivo con un'àncora temporale → «In questo momento il tecnico ha smontando il termosifone.» *(+1 parola.)*

**«Noi stanno aspettando il preventivo del muratore.»** — click su `stanno` → `stiamo`.
Tre click difendibili: `stanno`→`stiamo`, `Noi`→`Loro`, o cancellazione di `Noi`.
**Proposta:** «Io e Luca stanno aspettando il preventivo.» *(lunghezza invariata.)*

**«L'elettricista sta controllando l'impianto e voi stiamo guardando come lavora.»** — click su `stiamo` → `state`.
Peggiore del precedente: la scena non dice chi guarda, quindi `voi`→`noi` è altrettanto sensato di `stiamo`→`state`.
**Proposta:** soggetto pieno → «L'elettricista sta controllando l'impianto e i ragazzi stiamo guardando.» *(−1 parola.)*

### A.7 — Il condizionale presente

**«Loro aspetterebbe volentieri, ma con questo freddo nessuno resterebbe fuori.»** — click su `aspetterebbe`.
`Loro`→`Lui`, o cancellazione di `Loro`, danno frasi corrette: «nessuno resterebbe fuori» è compatibile con qualunque soggetto.
**Proposta:** «Gli altri aspetterebbe volentieri, ma con questo freddo nessuno resterebbe fuori.» — il singolare costerebbe due interventi. *(+1 parola.)*

### A.8 — Il congiuntivo passato

**«È strano che il riscaldamento ___ solo di notte.»** — chiave `funzioni`.
Nessuna àncora temporale: `abbia funzionato` è italiano perfetto («stanotte è andato solo di notte»). È l'unico item dell'esercizio privo di marca di tempo — gli altri hanno «ieri», «era senza portafoglio».
**Proposta:** «È strano che d'inverno il riscaldamento ___ solo di notte.» *(+1 parola.)*

### A.9 — Stare per + infinito

**«Io preparo la cena e mia sorella sta per finendo i compiti.»** — click su `finendo`.
Togliendo `per` si ottiene «mia sorella sta finendo i compiti», coerente con la principale al presente descrittivo. Doppia chiave.
**Proposta:** ancorare l'imminenza con un avverbiale futuro che uccide il progressivo → «Il film sta per cominciando fra cinque minuti.» *(−5 parole.)*

**«Allacciate le cinture: l'aereo ___.»** — chiave `sta per decollare`.
«Allacciate le cinture: l'aereo sta decollando» è altrettanto corretto e frequente. È **l'unico item dell'esercizio senza àncora temporale** (gli altri hanno «da un momento all'altro», «in questo momento», «tra pochi secondi»): la regolarità del disegno conferma che è una svista.
**Proposta:** «L'aereo ___ fra un minuto.» *(−1 parola.)*

### A.10 — I connettivi logici

**«Siccome ho molto tempo, non riesco a finire la relazione entro stasera.»** — click su `Siccome` → `Anche se`.
**Tre** riparazioni da un intervento: `Siccome`→`Anche se`; `molto`→`poco`; togliere `non`. Nessuna àncora esclude le altre due.
**Proposta:** scena senza aggettivo di quantità e senza negazione ribaltabile → «Siccome sono in ritardo, arriverò prima degli altri.» *(−4 parole.)*

### A.11 — I pronomi relativi

**«La ditta ___ ho ordinato il materiale non risponde.»** — chiave `a cui`.
`di cui` dà una frase pienamente grammaticale e sensata («il materiale di quella ditta»). Nulla la esclude.
**Proposta (solo dati):** sostituire il distrattore `di cui` con `con cui` — cade per reggenza, mentre `che` (già presente) cade per funzione. Nessuna modifica al testo.

### A.12 — I pronomi combinati

**«Non riesco a salire le scale con la spesa. → ___ tu, per favore!»** — chiave `Portamela`.
In campo libero mancano **due** gradi di libertà: il verbo non è determinato (portamela / prendimela / portamela su) e nemmeno l'oggetto, che può essere «la spesa» (*me la*) o «le scale» (*me le* → *salimele*). Nell'item gemello dello stesso esercizio l'autore ha già registrato quattro alternative: qui no.
**Proposta:** togliere il secondo oggetto candidato → «Non riesco a portare la spesa fino a casa. → ___ tu, per favore!», con `a` = `Portamela|Prendimela`. *(+2 parole.)*

### A.13 — Il «si» impersonale

Tre item ammettono, oltre alla chiave, **la cancellazione di `si`/`ci`**, che produce una frase corretta e naturale. Nello stesso esercizio un quarto item (`Alla festa si ha mangiato troppo e si è bevuto poco.`) è invece blindato da una seconda proposizione impersonale: il modello giusto c'è già, va solo esteso.

**«In quella riunione si ha discusso per tre ore senza decidere niente.»** → senza `si`: «In quella riunione ha discusso per tre ore…», corretta.
**Proposta:** «Si ha discusso per tre ore e non si è deciso niente.» *(+1 parola.)*

**«Domenica ci si è alzato alle sei per prendere il traghetto.»** → senza `ci`: riflessivo personale perfetto.
**Proposta:** «Domenica ci si è alzato presto e si è partiti subito.» *(lunghezza invariata.)*

**«Quest'anno si è stato in vacanza due volte.»** → senza `si`: «Quest'anno è stato in vacanza due volte», impeccabile. È il caso più netto.
**Proposta:** «Quest'anno si è stato in vacanza tutti insieme.» — «tutti insieme» è incompatibile con un soggetto singolare. *(−1 parola.)*

### A.14 — Il periodo ipotetico del 1° tipo

È la sezione più compromessa: **6 item bloccanti su 18**.

**«Se il volo parte in orario, ___ a Milano per cena.»** — chiave `saremo`; **«Se la strada resta chiusa, ___ dal paese vecchio.»** — chiave `passeremo`.
In entrambi la persona non è ricavabile: `sarete` / `passerete` sono altrettanto corretti (chi dà un'indicazione a qualcun altro). Cade solo il condizionale.
**Proposta:** fissare la persona nella frase → «Se il volo parte in orario, **noi** ___ a Milano per cena.» e «Se la strada resta chiusa, **noi** ___ dal paese vecchio.» *(+1 parola ciascuno.)*

**«Se tu fossi libero sabato, ti porto a vedere la mostra.»** (click su `fossi`) · **«Se il ristorante è aperto, ci fermeremmo a cena.»** (click su `fermeremmo`) · **«Se Marco avesse tempo domani, viene volentieri con noi.»** (click su `avesse`) · **«Se arrivate entro le otto, trovereste ancora posto.»** (click su `trovereste`).
Tutti e quattro sono periodi **misti**, e un periodo misto si ripara sempre da entrambi i lati: portando la protasi al 2° tipo o l'apodosi al 1°. «Se tu fossi libero sabato, ti porterei…» è anzi più idiomatico dell'esito atteso.
**Proposta (regola di redazione, non solo toppa):** in questo formato l'**unica** configurazione univoca è il condizionale **dentro la protasi**, che non ha nessuna lettura buona. Riscrivere i quattro item come: «Se tu **saresti** libero sabato, ti porto a vedere la mostra.» / «Se il ristorante **sarebbe** aperto, ci fermeremo a cena.» / «Se Marco **avrebbe** tempo domani, viene volentieri con noi.» / «Se **arrivereste** entro le otto, troverete ancora posto.» *(lunghezza invariata.)*
⚠️ Il prezzo è che tutti e sei gli item diventano «condizionale dopo *se*», cioè risolvibili per forma (vedi C.1). Se il costo non è accettabile, la strada alternativa è **cambiare formato** per due item dell'esercizio (da `errore` a `buco`), non blindare le frasi con code aggiuntive.

### A.15 — La forma passiva con essere e venire

**«Durante la visita guidata, ogni sala ___ presentata da un esperto.»** — chiave `viene`.
`ogni sala` è un distributivo **spaziale**, non temporale: non ancora la frase al presente abituale. «…ogni sala è stata presentata da un esperto» è il resoconto naturale di una visita già fatta. Negli altri cinque item l'àncora c'è («Ieri», «Ogni mattina», «ieri pomeriggio»): qui manca.
**Proposta:** «Durante ogni visita guidata, la prima sala ___ presentata da un esperto.» *(+1 parola.)*

### A.16 — Il «si» passivante

**«In questa scuola si corregge i test entro una settimana.»** — click su `corregge` → `correggono`.
*Test* è invariabile: basta cliccare `i` e metterlo al singolare per ottenere «si corregge il test», frase corretta con il si passivante intatto. Negli altri item il nome flesso blocca questa via.
**Proposta:** nome flesso → «In questa scuola si corregge i compiti entro una settimana.» *(lunghezza invariata.)*

**«Nella sala si proiettano un documentario.»** · **«All'ingresso si controllano il biglietto e basta.»**
Togliendo `si` restano «Nella sala proiettano un documentario» e «All'ingresso controllano il biglietto», entrambe naturalissime (3ª plurale impersonale). Il secondo item ha in più una lettura riflessiva distributiva («ognuno si controlla il biglietto») in cui è già corretto. Anche qui l'esercizio contiene già il modello sano: `Il telefono aziendale si riparano nel centro specializzato.`, dove l'elemento nominale anteposto rende la cancellazione agrammaticale.
**Proposta:** estendere quel modello → «Il documentario si proiettano nella sala piccola.» *(+1 parola)* e «Il biglietto si controllano all'ingresso e basta.» *(lunghezza invariata.)*

### A.17 — Il discorso indiretto

**«I ragazzi hanno spiegato che ___ prima di mezzanotte.»** — chiave `sarebbero tornati`.
Con reggente al passato prossimo e evento ancora futuro, il futuro semplice **non è un errore**: «mi ha detto che verrà domani» è lo standard. Il condizionale composto è obbligatorio solo assumendo un punto di vista interamente passato, che nulla impone.
**Proposta:** portare il reggente al trapassato → «I ragazzi **avevano** spiegato che ___ prima di mezzanotte.» *(lunghezza invariata.)*

**«Gli attori hanno avvisato che il loro spettacolo ___ tardi.»** — stesso difetto, aggravato: le due opzioni difendibili differiscono solo per il tempo, e il terzo distrattore cade sul possessivo.
**Proposta:** «…ci **avevano** avvisato gli attori» e opzioni adeguate. *(+1 parola.)*

**«Anna ha detto che ___ si vedeva meglio.»** — chiave `lì`.
Il deittico va spostato solo se chi riferisce non è più sul posto, e la scena è muta. Se sono ancora nella stessa fila, «che **qui** si vedeva meglio» è la forma corretta.
**Proposta:** forzare lo spostamento cambiando la scena → «"Qui si vede meglio", ci ha detto Anna **al telefono**.» *(+2 parole.)*

---

## B) CONTESTABILI DA UN PARLANTE COLTO — 50 item

Non bloccanti: la chiave regge, ma una seconda risposta è difendibile, o un distrattore non cade per una ragione netta.

### Varianti registrate dai dizionari

| Sezione | Frase | Rilievo | Proposta |
|---|---|---|---|
| L'infinito istruttivo | «Nel foglietto del medicinale: "___ una compressa al giorno dopo i pasti." (prendete)» | il foglietto illustrativo usa il *Lei*: «Prenda…» è la formula del genere testuale | «Sulla **scatola** del medicinale: …» |
| L'infinito istruttivo | «Messaggio alla vicina: "Anna, ___ il pacco se non ci sono." (ritirare)» | fra vicini il *Lei* è normale: «Anna, ritiri…» | «Messaggio a **tua sorella**: "Sara, ___ …"» |
| L'accordo del participio | «Ieri ho firmate tutte le pagine del contratto.» | l'accordo con oggetto **posposto** è registrato (Serianni, Treccani) come letterario ma non agrammaticale | «Le pagine del contratto le ho firmato ieri.» (click su `firmato`) |
| L'accordo del participio | «Prima di uscire di casa ho spente le luci del corridoio.» | idem, e qui ancora più difendibile | «Le luci del corridoio le ho spento prima di uscire.» |
| L'accordo del participio | distrattore «La ho stirata.» (e «La ho venduta», «La ho consegnata in segreteria») | con i clitici l'elisione è la norma ma non un obbligo: il distrattore non è scorretto — ed è per giunta accordato bene, quindi rischia di valere come seconda chiave | sostituirlo con un accordo sbagliato: «Le ho stirata.» / «L'ho stirate.» |
| La forma passiva | «Il museo ___ restaurato nel 1920.» | «nel 1920» è una data, non un deittico: licenzia il **presente storico** («Nel 1920 il museo viene restaurato»), standard nella narrazione storica | «Il museo ___ restaurato **l'anno scorso**.» |
| Stare per + infinito | «La sfilata era per passare, poi è scoppiato il temporale.» | *essere per* + infinito è registrato (Treccani, s.v. *per*), e proprio all'imperfetto è la forma più attestata: non è un errore, è un registro alto | «La sfilata **ha** per passare, poi…» |
| Il «si» impersonale | «Fino a trent'anni ___, almeno da noi.» — chiave `si è ancora ragazzi` | l'accordo al femminile plurale è registrato quando chi parla si riferisce a donne, e la frase non ha marche di genere | togliere il distrattore femminile: `si è ancora ragazzi / si è ancora ragazzo / si sono ancora ragazzi` |
| I superlativi | «…ho preso un voto peggio del solito.» | *peggio* aggettivo invariabile è registrato come uso popolare/familiare, frequentissimo | nessuna modifica: annotare la tolleranza nella chiave |
| Il passato remoto | «Il pittore nacque a Ferrara, studiò a Firenze e moriva a Roma molto giovane.» | l'**imperfetto biografico** è registrato e frequentissimo proprio in questa posizione: la frase, letta da sola, è già ben formata | spostare l'imperfetto su un verbo dove l'uso non si attiva: «…nacque a Ferrara, **studiava** a Firenze e **morì** a Roma molto giovane.» |

### Seconda riparazione difendibile (formato `errore`)

- **«Per il montaggio, appoggiando il pannello a terra e avvitare le gambe.»** e **«Staccare la corrente e aspettando che il motore si fermi.»** — togliendo `e` restano frasi grammaticali (gerundio subordinato anteposto / gerundio di modo). Più deboli dei due casi A, ma stesso vizio strutturale. **Proposta:** vedi C.2.
- **«Quando eravamo piccoli mia madre ci ha faceva la torta la domenica.»** (chiave: togliere `ha`) — `faceva`→`fatto` dà una frase grammaticale, solo pragmaticamente meno felice. **Proposta:** «**Di solito** mia madre ci ha faceva la torta la domenica.» *(−1 parola)*
- **«Sabato scorso mio zio ci portava al mare con la sua barca.»** — se «Sabato scorso» si seleziona come blocco, toglierlo lascia un imperfetto abituale corretto. **Proposta:** «Sabato scorso mio zio ci portava al mare **e siamo tornati tardi**.» *(+1 parola)*
- **«Finalmente sto capire perché la lavatrice perde acqua.»** — `sto`→`posso/riesco a` dà una frase molto idiomatica con «Finalmente». **Proposta:** «**Adesso** sto capire perché…» *(lunghezza invariata)*
- **«So che Paolo sia in riunione, ma non credo che torni presto.»** e **«Credo che l'autobus passa ogni dieci minuti, ma so che la domenica cambia orario.»** — si ripara anche il verbo reggente (`So`→`Immagino`, `Credo`→`Vedo`), che è una parola singola cliccabile. È un limite **strutturale** del formato applicato al congiuntivo: qualunque reggente è sostituibile. **Proposta:** registrare il click alternativo nel campo `alt`, oppure rendere non cliccabile la reggente.
- **«Il tecnico voleva le foto del guasto e glielo ho mandate ieri sera.»** — `mandate`→`mandato` dà una frase grammaticale, esclusa solo dalla coerenza referenziale. In più c'è il rumore della mancata elisione (`glielo ho` per `gliel'ho`). **Proposta:** «…e glielo **mando stasera**.»
- **«In quel mercato si compra prodotti locali.»** e **«Si costruisce nuovi edifici in periferia.»** — togliendo `si` restano frasi grammaticali (soggetto di 3ª sg. sottinteso), meno naturali dei due casi A ma difendibili. **Proposta:** anteporre l'oggetto, come nel modello sano della sezione: «I prodotti locali si compra in quel mercato.» / «I nuovi edifici si costruisce in periferia.»
- **«Ai vicini di sotto gli abbiamo parlate ieri sera.»** — la frase contiene un secondo elemento criticabile: la **ripresa clitica del dativo già espresso**, che molti manuali insegnano come scorretta. Chi clicca `gli` viene punito per una regola che gli è stata insegnata. **Proposta:** dislocare a destra, dove la ripresa è indiscutibile: «Gli abbiamo parlate ieri sera, ai vicini di sotto.»
- **«Il quadro ha stato dipinto nel 1800.»** — togliendo `stato` resta «Il quadro ha dipinto nel 1800», sintatticamente ben formato. **Proposta:** «La **chiesa** ha stato costruita nel 1800.»

### Distrattori difendibili o gemelli

| Sezione | Item | Rilievo | Proposta |
|---|---|---|---|
| I superlativi | «La pizzeria di via Roma è ___ del quartiere.» | i distrattori `molto famosa` e `famosissima` sono **sinonimi perfetti**: si annullano a vicenda, il terzo si prende per esclusione | sostituire `molto famosa` con `più famosa` (senza articolo) |
| I superlativi | «…le torte sono **le più buone** della città e anche i cornetti sono buonissimi molto.» | secondo bersaglio apparente: `le più buone` è legittimo, ma uno studente addestrato a *buono→migliore* ci clicca sopra | «…le torte sono **le migliori** della città…» |
| Il futuro semplice | «In sala ci sono venti posti prenotati.» | entrambi i distrattori (`ci sarà`, `ci saremo`) cadono sull'accordo con «venti posti»: nessuno mette alla prova la morfologia del futuro. Manca anche la freccia `→` | sostituire `ci saremo` con `ci sarebbero` (distrattore di **modo**); aggiungere la freccia |
| Volerci e metterci | «___ tre ore per attraversare la città in tangenziale.» | senza soggetto espresso, «Ci mettono tre ore…» è corretto (3ª pl. generica). È l'unico item in cui il distrattore di *metterci* non è bloccato | cambiare il complemento: «Per attraversare il confine ___ due documenti.» |
| I connettivi logici | «La stampante non aveva più inchiostro, ___ ho mandato il file in copisteria.» | `infatti` è difendibile: introduce il fatto che conferma quanto detto | sostituire con `oppure` |
| Il condizionale presente | «Spedite anche all'estero? →» e «Devi cambiare le gomme prima dell'inverno. →» | la consegna dice solo «Scegli la trasformazione corretta»: presi alla lettera, «Spedirebbero…?» e «Dovrei cambiare…» sono italiano impeccabile. Negli altri quattro item il distrattore di persona è agrammaticale, quindi il difetto non emerge | **consegna:** «Trasforma la frase in una richiesta più cortese, **mantenendo la stessa persona**.» |
| Il periodo ipotetico | distrattori «Ti accompagnerei al cinema se finisci i compiti.» e «Cominceremmo lunedì se il capo approva.» | condizionale + protasi all'indicativo è il **condizionale attenuativo**, corrente nel parlato sorvegliato | «Ti accompagn**avo** al cinema se finisci i compiti.» / «Cominci**avamo** lunedì se il capo approva.» |
| La forma passiva | «Servono la colazione dalle sette. (venire) →» | unico item in cui **una sola** opzione contiene *venire*: i due distrattori cadono per la stessa ragione, si trova la risposta cercando la parola «viene» | sostituire «La colazione è stata servita…» con «La colazione **viene servito** dalle sette.» (errore di accordo) |
| I verbi pronominali | «Il trasloco è durato tutto il giorno, ma alla fine ___.» | `fatti` e `fatto` cadono entrambi sull'accordo: si scartano in coppia. È l'unico item dell'esercizio che non mette in gioco anche l'ausiliare | «ce l'abbiamo fatta / **ci siamo fatti** / ce l'abbiamo fatto» |
| I pronomi relativi | «Questa è la scuola. Mio figlio va in questa scuola.» | il distrattore «la scuola **cui** va mio figlio» è italiano corretto: *cui* senza preposizione vale *a cui*, e la reggenza di *andare* lo ammette | sostituire con «la scuola **che** va mio figlio» |
| I pronomi indiretti | «___ se ha ancora la ricevuta del bonifico!» — chiave `Chiedile` | «Le chiedi se ha ancora la ricevuta!» è il normale presente **iussivo**, coerente col punto esclamativo. Nell'item gemello della stessa batteria l'autore ha bloccato la lettura parallela con «appena arrivi»: qui l'àncora manca | sostituire il distrattore `Le chiedi` con `Le chiedere`, in parallelo agli altri item |
| Il congiuntivo passato | «Non mi pare che adesso ___ ancora.» | `ancora` sotto negazione è ambiguo fra «tuttora» (+presente) e «non ancora avvenuto» (+passato) | «Non mi pare che adesso ___ **molto**.» |
| Il congiuntivo passato | «Temo che questo cappotto ___ troppo per le mie tasche.» | nessuna àncora: la lettura retrospettiva («l'ho comprato, temo che sia costato troppo») è altrettanto grammaticale | sostituire il distrattore `sia costato` con `costino` (errore di numero) |
| Il congiuntivo passato | «Mi sembra che il capo ___ per un ritardo di cinque minuti. (arrabbiarsi)» | in campo libero «sia arrabbiato» (predicato aggettivale) è impeccabile e più frequente; in più è l'unico riflessivo della batteria e il clitico va digitato senza comparire nel testo | «Mi sembra che il capo ___ del ritardo. **(accorgersi)**» |
| Stare per + infinito | «Noi ___ per firmare il contratto: manca solo la tua copia.» | «Stavamo per firmare… manca solo la tua copia» è più coerente: se manca un pezzo, la firma è sospesa | «Noi ___ per firmare il contratto: **vieni subito**.» |
| I pronomi relativi | «Ho comprato un quadro cui cornice era già rovinata.» e «In vacanza ho letto un romanzo cui autore è sconosciuto.» | l'errore è un'**omissione**: nessuna parola presente è sbagliata, e il `fix` del db è di **due** parole (`la cui`, `il cui`) contro una negli altri item. Bersaglio del click non univoco (`cui` o il nome) | mettere l'articolo **sbagliato** invece di nessun articolo: «un quadro **il** cui cornice…» / «un romanzo **la** cui autore…» (click di una parola, come negli altri quattro item) |
| I pronomi combinati | «Luca non sa quanto costa. → ___ tu!» | «Spiegaglielo tu!» è altrettanto corretto: si penalizza una scelta lessicale libera, non la grammatica dei pronomi | `a` = `Diglielo|Spiegaglielo`, oppure indicare il verbo: «(dire)» |
| I pronomi indiretti | «Ai clienti ___ sembra tutto troppo caro.» | l'item **costringe** a produrre la ripresa clitica del dativo, che la stessa sezione tratta altrove come errore: messaggio contraddittorio | dislocare a destra: «___ sembra tutto troppo caro, ai clienti.» |
| Il discorso indiretto | «Elena ha raccontato che ___ quell'attore a Venezia.» · «Vera ha detto che ___ la piscina era chiusa.» · «Luca ha ammesso che ___ quell'attore.» | i distrattori cadono per una **preferenza normativa**, non per una regola: con reggente al passato prossimo la concordanza rigida è raccomandata, non imposta, e nel neo-standard il tempo non spostato è normale | far cadere i distrattori per una ragione **strutturale**: «che **conosceva** quell'attore» / «che il giorno **prima** la piscina era chiusa» / «che non **avrebbe** mai visto quell'attore» |
| Il passato remoto | «Il giovane si trasferì a Roma **nel 1490**. →» | la consegna chiede di trattare i fatti come «successi da poco», ma la data è incompatibile con la recenza: chi ragiona vede la contraddizione | «Il giovane si trasferì a Roma **da ragazzo**. →» |
| Il passato remoto | «L'allievo copiò i disegni del maestro **per cinque anni**. →» | con durata e oggetto plurale la lettura abituale (`copiava`) è registrata: il distrattore è escluso solo dal vincolo di trasformazione | «L'allievo copiò **un disegno** del maestro. →» |
| I verbi pronominali | contesto «Voglio sapere se riesci a spostare il divano da solo.» → `ce la fai` | il gruppo componibile è un'interrogativa, il contesto è una dichiarativa con completiva; `se` non è nel bank | «Riesci a spostare il divano da solo?» |

---

## C) DIFETTI SISTEMICI TRASVERSALI

Sono i rilievi che pesano di più: non rompono un item, **rompono la validità dell'esercizio**.

### C.1 — Esercizi risolvibili per pura forma

Ho contato **22 esercizi su 81** in cui tutti e sei gli item condividono lo stesso tipo di errore o la stessa marca formale, cioè si superano con una regoletta meccanica senza conoscere la regola. I casi più netti:

| Sezione | Esercizio | Scorciatoia che dà 6/6 |
|---|---|---|
| I participi passati irregolari | Correzione | «clicca la parola che non esiste» (chiedato, chiudito, decidato, facuto, rispondato, vedato) |
| Il futuro semplice | Correzione | «cerca -arò / -aremo / -arà» — ogni frase ha due futuri, uno sano e uno malato |
| L'infinito istruttivo | Correzione | «clicca la parola in -ando o in -ato» |
| L'infinito istruttivo | Trasformazione | «l'unica opzione con -are/-ere/-ire» |
| Imperfetto o passato prossimo? | Correzione | «clicca la parola in -avo/-ava/-avamo» |
| Il congiuntivo passato | Correzione | l'errore è **sempre** sull'ausiliare |
| I connettivi logici | Riempimento | la chiave è sempre un connettivo **causale/consecutivo**, i distrattori mai |
| I connettivi logici | Correzione | «clicca il connettivo», sempre fra le due proposizioni |
| I pronomi relativi | Correzione | «cerca *cui*, guarda l'articolo davanti» |
| I pronomi indiretti | Correzione | «clicca il participio che non finisce in -o» |
| I pronomi indiretti | Trasformazione | la chiave è sempre l'unica forma **univerbata** |
| L'accordo del participio | Correzione | «clicca il participio» |
| L'accordo del participio | Trasformazione | «scarta la forma in -o» (6/6) |
| I verbi pronominali | Correzione | «cerca il pronome in -i seguito da *la*/*ne*» |
| Il «si» impersonale | Trasformazione | la chiave è sempre l'opzione in **-i** (6/6) |
| Il periodo ipotetico | Correzione | «clicca l'unica forma non indicativa» (6/6) |
| Il periodo ipotetico | Trasformazione | «scarta le opzioni con il condizionale» (6/6) |
| Il «si» passivante | Riempimento | euristica dell'intruso: due opzioni condividono il numero, la terza è la chiave (6/6) |
| Il discorso indiretto | Correzione | l'errore è sempre **l'unica parola di 1ª/2ª persona** della frase |
| Il congiuntivo irregolare | Correzione | se il soggetto è «voi» l'errore è una voce in **-te**, se è di 3ª persona è un mancato accordo — correlazione perfetta, senza eccezioni |
| Il passato remoto | Riempimento | le sei terne sono sempre imperfetto / trapassato / passato prossimo: «prendi quella con ho/sono + participio» |
| Il passato remoto | Scelta | il contesto **nomina** il campo semantico della risposta (scultore→scolpire, quadro→dipingere): si risolve senza morfologia |

**Rimedio generale, valido per tutte:** portare a due o tre i tipi di errore dentro ogni esercizio `errore`, e far cadere i due distrattori di ogni `buco` per **ragioni diverse fra loro**. Il criterio operativo: se puoi descrivere la strategia vincente in cinque parole senza nominare la regola, l'esercizio non misura la regola.

### C.2 — La cancellazione come seconda riparazione: un vizio di modello, non di item

Il formato `errore` ammette la parola da **togliere**, e questo apre una falla ricorrente in tre famiglie di frasi:

1. **Pronome soggetto esplicito isolato** (`io`, `Noi`, `voi`, `Loro`) + verbo di persona sbagliata. Toglierlo — o sostituirlo con un altro pronome — ripara sempre. **7 item** colpiti (rilievi A.3, A.4, A.6, A.7).
2. **`si`/`ci` impersonale o passivante** in frase senza altre marche. Toglierlo ripara sempre. **9 item** colpiti (A.13, A.16, B).
3. **Infinito istruttivo coordinato con `e` + forma implicita.** Togliere `e` trasforma la coordinazione in subordinazione implicita, che è esattamente il costrutto in gioco. **4 item** su 6 dello stesso esercizio.

**Regola di redazione da adottare:** in un item `errore` il bersaglio deve essere **l'unico elemento rimovibile o sostituibile con un click**. Concretamente: soggetto coordinato o lessicale invece di pronome nudo; seconda proposizione impersonale o àncora plurale accanto al `si`; oggetto anteposto che rende il clitico obbligatorio; e mai una coordinazione fra un infinito e una forma implicita.

### C.3 — Bias di lunghezza: nella direzione opposta a quella attesa

Il controllo classico è pulito: la chiave è l'opzione più lunga in **85 casi su 228** (37%), in linea con il caso puro. **Ma il bias speculare è forte**: in **11 esercizi su 38** la chiave è la più corta (o pari-merito la più corta) in 5 o 6 item su 6. In sette di questi è **6/6**:

> L'infinito istruttivo (Trasformazione) · L'imperfetto (Trasformazione) · Il congiuntivo presente (Trasformazione) · L'imperativo con i pronomi (Trasformazione) · I pronomi indiretti (Trasformazione) · L'accordo del participio (Trasformazione) · I verbi pronominali (Riempimento) · Il periodo ipotetico (Riempimento e Trasformazione) · Il «si» impersonale (Trasformazione) · Il passato remoto (Scelta)

La causa è meccanica: i distrattori si costruiscono **aggiungendo** materiale (desinenza attaccata all'infinito intero, clitico ridondante, forma composta), quindi risultano sempre più lunghi. «Scarta la più lunga» elimina un distrattore sbagliato in decine di item.
**Rimedio:** in due item per esercizio affiancare alla chiave un distrattore di **tempo** o di **persona** invece che di forma — è più corto o di pari lunghezza e azzera l'indizio.

### C.4 — Consegne incoerenti col formato: 14 esercizi

Quattordici esercizi in formato `buco` hanno una consegna di **produzione** («Riscrivi…», «Trasforma…», «Unisci…», «Riformula…», «Costruisci…», «Sostituisci…», «Rendi impersonale…»), mentre lo studente **sceglie fra tre frasi già scritte**. Le consegne dei `fill` che dicono «Scrivi…» sono invece corrette e non vanno toccate.
**Rimedio:** riformulare in «Scegli la frase…» / «Scegli la trasformazione…». Due casi vanno oltre la forma:

- *Il condizionale presente* (Trasformazione): la consegna non dice che la **persona va conservata**, ed è esattamente ciò su cui cade metà dei distrattori (vedi B).
- *Il passato remoto* (Riempimento): «Riscrivi il racconto **come se i fatti fossero successi da poco**» — la consegna stessa è sopra livello (*come se* + congiuntivo trapassato è B2) ed è l'unica chiave per capire quale tempo cercare. In più i sei item non formano nessun racconto. **Proposta:** «Gli stessi fatti sono successi da poco: scegli la forma giusta.»

### C.5 — Distrattori inerti: l'item a tre opzioni che ne ha due

Ricorre in almeno **9 esercizi**: uno dei tre distrattori non è italiano di nessun registro e nessuno studente lo produrrebbe («mezzo chilo dei pane», «un po' verdura», «Sto per parlando», «noleggiano si ombrelloni», «Firmarlo il modulo», «Essevo contento», «Stavevi bene»), oppure cade per un criterio che precede quello bersaglio (accordo di genere prima del partitivo; persona prima del congiuntivo). L'item scende a due opzioni reali: **50% a caso invece di 33%**.
**Rimedio:** i distrattori devono essere errori che gli apprendenti **producono davvero** — regolarizzazioni (`vadi`, `sappi`, `stii`, `abbi`), ausiliare sbagliato, persona sbagliata plausibile.

### C.6 — Livello: 5 sezioni dichiarate B1 sono B2, e l'autore lo sa già

Cinque sezioni portano `stima: b2` in intestazione e la stima è **corretta**: *Il congiuntivo passato*, *I pronomi combinati*, *I verbi pronominali*, *Il discorso indiretto*, *Il congiuntivo presente irregolare*. Aggiungo due sezioni che non hanno la stima ma la meritano in parte:

- **I superlativi** — gli esercizi 1 e 2 sono B1 pieno; il terzo poggia su comparativi e superlativi **organici** (maggiore, minimo, ottimo, pessimo, peggiore) e sulla coppia *meglio/migliore*, *bene/buono*: materiale B2.
- **I pronomi relativi** — il possessivo **«il cui»** è collocato a B2 in molti sillabi e qui occupa due esercizi su tre.

**Dubbi lessicali** (li do come dubbi: non conosco il programma). Il rischio non è quasi mai il singolo vocabolo, è il **cumulo** dentro una sezione in cui l'oggetto misurato è la grammatica:

- *Il passato remoto*: committente, bozzetto, volta (architettonica), portale, doge, nuocere, anticipo — tutto il lessico da bottega rinascimentale concentrato in 18 item. Sostituibile a costo zero (cliente, disegno, chiesa, porta, conoscere).
- *L'infinito istruttivo*: pannello, avvitare, montaggio, spia, sportello, filtro, staccare la corrente, cantiere, compressa, foglietto illustrativo, «il capo a rovescio».
- *Stare + gerundio* e *Il congiuntivo regolare*: preventivo, amministratore (di condominio), impianto, termosifone, muratore, citofono, portone, condòmini.
- *Volerci e metterci*: tangenziale, concorso. *I connettivi*: disdire/disdetto, copisteria, bilanci, «le pratiche restano ferme», «senza preavviso».
- Singoli: *arrangiarsi* e *allo sportello* (verbi pronominali), *la ricevuta del bonifico* (pronomi indiretti), *la consegna al piano* e *un anticipo* (condizionale), *incartare* e il plurale *le lenzuola* (accordo del participio), *conteggio* e *trapano* (pronomi combinati), *collegio* e *le cabine* (imperfetto), *respinta* e *posare il pavimento* (passiva).

**Costrutti fuori portata segnalati come dubbio:** «Dopo aver parlato con i colleghi» (infinito composto, participi irregolari); «prima che la scopra da sola» (congiuntivo dopo *prima che*, pronomi indiretti); «Se fossimo in vacanza…» (congiuntivo imperfetto dentro una sezione sul condizionale presente); «si è aspettati» (passivo-impersonale).

### C.7 — Copertura e monotonia

- **Ripetizione di scena.** Quasi ogni sezione vive in un solo mondo: la spesa (partitivo), l'ufficio (futuro, connettivi), il condominio (gerundio, congiuntivo), il bucato (accordo del participio), la cucina (imperativo con pronomi, 6 item su 6), il teatro (discorso indiretto), la bottega rinascimentale (passato remoto). È coerente, ma le riprese sono **letterali**: «Al mercato ho comprato…» e «Al mercato ho preso…»; «Per la torta serve…» e «Per la torta ho comprato…». Vale la pena variare almeno le aperture.
- **Item gemelli da sostituire:** «Alle sei c'è la riunione di reparto.» / «Sabato non c'è nessuno in ufficio.» (identici per struttura e set di distrattori); «Immagino che Paolo ha andato…» / «Sospetto che… il pacco ha arrivato ieri» (stesso errore); «Se ___ adesso il biglietto…» / «Se ___ questa scorciatoia…» (identici); i due item su «quell'attore» nel discorso indiretto.
- **Lacune di copertura.** *Il condizionale presente*: sei verbi su sei a radice irregolare, **zero regolari** — il passaggio -are → -er-, che è l'errore numero uno a B1, non viene mai verificato in produzione. *Stare + gerundio*: nessun gerundio irregolare (facendo, dicendo, bevendo). *I superlativi*: nessun aggettivo in -co/-go. *I verbi pronominali*: mai la reggenza né l'enclisi («devo andarmene», «vattene»), che è la difficoltà vera. *L'accordo del participio*: in 5 item su 6 il referente è femminile, quindi il caso in cui l'accordo **non si sente** (`l'ho stirato`) non è mai chiave — lo studente può uscire con la sovrageneralizzazione «con il pronome il participio cambia sempre».
- **Squilibrio di genere.** Nei participi irregolari, per 1ª e 2ª singolare l'unica opzione corretta è sempre al maschile («Sono venuto», «Sono uscito», «Sei rimasto») — e in un item il distrattore è proprio il femminile «Sono uscite». Una studentessa non trova la propria forma.

### C.8 — Confezione

- **Apostrofi misti** (curvo `’` vs dritto `'`) dentro la stessa sezione e a volte nella stessa riga: partitivo, participi irregolari, futuro, volerci/metterci, discorso indiretto. Se il confronto della risposta è testuale è una fonte di falsi negativi.
- **Buchi a inizio frase** («___ alla riunione di domani?», «→ ___ prima di mezzogiorno»): la risposta attesa ha la maiuscola. Verificare che il motore accetti la minuscola.
- **Un `fill` con parte della risposta già stampata:** «Mio padre si ___ ogni mattina alle sei. **(svegliarsi)**» — il clitico è fuori dal buco ma il suggerimento è l'infinito riflessivo: chi digita «si svegliava» produce «si si svegliava». **Proposta:** spostare il buco: «Mio padre ___ ogni mattina alle sei. (svegliarsi)».
- **Freccia `→` mancante** in un item della sezione sul futuro.
- **Etichette di tipo incoerenti:** più esercizi sono dichiarati «Trasformazione» ma sono scelte multiple senza alcuna trasformazione da operare.

---

## D) RIFINITURE MINORI

- **Il partitivo** — «Per il condimento serve ___ buono.»: è l'unico item in cui il buco contiene anche il nome, e i due distrattori (`del olio`, `dello olio`) cadono per la stessa ragione. → «Per il condimento serve ___ olio buono.» con `del / dell' / della`.
- **Il partitivo** — «Vorrei un chilo delle arance, per favore.»: la scena del mercato favorisce la lettura determinata («quelle sul banco»), in cui la frase è già corretta. → «Ogni mattina bevo un bicchiere del latte.»
- **Il partitivo** — «Questa settimana ci sono delle offerte. → (con «qualche»)»: i due distrattori condividono il vizio `qualche` + plurale. → far sbagliare l'uno solo il verbo, l'altro solo il nome.
- **I participi irregolari** — il distrattore «Letto il giornale in treno.» non ha verbo finito: si scarta a vista. → «Sono letto il giornale in treno.» Idem «Rimani in ufficio fino alle otto.», ambiguo fra indicativo e imperativo → «Marta rimane in ufficio…» (recupera anche una forma femminile). E quattro frasi-fonte su sei sono presenti **abituali**, il cui passato naturale è l'imperfetto: renderle puntuali.
- **Il futuro semplice** — «Noi cominciaremo alle sei…»: la riparazione mescola due regole (vocale tematica **e** caduta della -i- di *cominciare*). → «Noi entraremo alle sei…». E in «Se vieni con noi, ti accompagnaremo…» il presente `vieni` è un secondo candidato attraente in un esercizio tutto sul futuro → «Sabato ti accompagnaremo…».
- **L'imperfetto** — «Bevi molto tè la sera?» e «Stai bene in quella casa?»: entrambi i distrattori sono non-parole. → sostituirne uno con una persona sbagliata (`Bevevate`, `Stavate`).
- **Imperfetto o pp** — nell'item «Quella sera (fare) freddo, così (restare, noi) a casa» **entrambi** i distrattori differiscono dalla chiave solo su `restavamo`: l'item testa un verbo, non la coppia. → sostituire il primo distrattore con «Quella sera **è stato** freddo, così siamo restati a casa.» E «Ha nevicato già…» va scritto «Ha **già** nevicato…»: così com'è si scarta per l'ordine delle parole, non per il tempo.
- **I superlativi** — «Dopo tre lavaggi le tende sono ancora pulitissime»: il lavaggio è ciò che pulisce, «ancora» resta senza attrito. → «Dopo tre **mesi** le tende…».
- **Stare + gerundio** — «Mangio adesso, poi esco.» si legge come presente pro futuro, che il progressivo non traduce: è l'item d'apertura, quello che fissa il modello. → «Mangio, non posso rispondere.»
- **Stare per** — «Voi ___ per atterrare o siete ancora in volo?»: chi sta per atterrare **è** ancora in volo, l'alternativa non si esclude. → «…o siete ancora lontani?»
- **L'imperativo con i pronomi** — quattro scene di cucina zoppicano: «Scegli le patate» (manca il criterio) → «Lava le patate»; «Affetta il pane, servili con l'olio e coprilo con un panno» (ordine cronologico rovesciato) → invertire gli ultimi due segmenti; «Trita le cipolle, girali spesso in padella» (nessuno le ha messe in padella) → «…mettili in padella e girale spesso…»; «Metti il latte in un pentolino, scaldale piano e assaggialo» (due antecedenti maschili singolari, due `-lo` di seguito) → «…nella pentola…». E la consegna «Riscrivi l'imperativo con il pronome attaccato» non prepara all'item con il partitivo `ne` → «…con il pronome **giusto** attaccato».
- **I pronomi relativi** — «Ho conosciuto un ingegnere il cui azienda produce turbine per navi»: a differenza degli altri item il verbo è singolare, quindi anche cliccare `azienda` è una riparazione formalmente valida. → portare il verbo al plurale. E in due item i due distrattori sono entrambi «preposizione + cui», scartabili in blocco.
- **I pronomi indiretti** — «Aspetto Elena da mezz'ora e ___ vedo arrivare solo adesso»: la percezione + infinito è una difficoltà estranea al bersaglio → «…e ___ vedo solo adesso.» «Chiara ha bisogno di un consiglio: ___ rispondo domani» presuppone un messaggio mai dato → «Chiara mi ha scritto per un consiglio…». Il distrattore `loro` è inerte (mai preverbale) **e** sinonimo di `gli` → sostituire con `li`.
- **I pronomi combinati** — nel bank di un `ordina` il distrattore `le` cade per pura ispezione della desinenza del participio già accordato: sostituirlo con `gli`. E un contesto resta sospeso: «Non abbiamo ancora ricevuto il conteggio delle spese.» → «Ce lo mandano.» non è una continuazione naturale.
- **L'accordo del participio** — «Mia sorella cercava la ricevuta **dell'affitto** e l'ha trovato…»: c'è un nome maschile accanto al clitico che offre un appiglio → «…della luce…». «Le lenzuola le ho steso…» somma l'accordo e un plurale irregolare: misura il lessico.
- **Il «si» impersonale** — «Con i colleghi nuovi ci si abitua in fretta»: *abituarsi* regge **a** → «Ai colleghi nuovi…». «Con una guida brava»: con *bravo* l'ordine non marcato è prenominale → «Con una brava guida». Il distrattore `ci si dorme` non è del tutto morto (con `ci` locativo è corrente).
- **I verbi pronominali** — un bank contiene `non`, che va inferito pragmaticamente da «sono troppo stanchi»; un altro usa come innesco *arrangiarsi*, che è a sua volta un verbo pronominale non più facile del bersaglio; un item è l'unico senza soggetto né àncora di persona.
- **Il congiuntivo irregolare** — «Io vado a prenderlo in stazione»: il clitico `lo` non ha antecedente → «a prendere Marco».
- **Il passato remoto** — il distrattore `nuocere` è opaco e inerte → `conoscere`.

---

## E) SEZIONI PULITE

Dieci sezioni su 27 non hanno **nessun** rilievo bloccante. Le prime otto sono pulite anche sul piano dei rilievi B:

1. **I participi passati irregolari** — zero A, zero B sostanziali. Ceduta solo sulla validità: l'esercizio di correzione si risolve cercando la non-parola, e quello di trasformazione non mette mai alla prova il participio irregolare che dà il titolo alla sezione.
2. **Il futuro semplice** — 18 risposte su 18 univoche. Un solo rilievo B (distrattori gemelli) e rifiniture.
3. **I superlativi assoluto e relativo** — nessun item bloccante, confezione curata. Due punti B e il dubbio di livello sul terzo esercizio.
4. **Il congiuntivo presente: forme regolari** — chiavi univoche in tutto il primo e il terzo esercizio; l'unica falla è strutturale al formato (riparazione sulla reggente).
5. **L'imperativo con i pronomi** — la sezione più solida del pacchetto: 18 item su 18 con errore univoco, verificato uno per uno. Solo rifiniture di scena.
6. **I verbi pronominali** — tutte le chiavi univoche, nessuna seconda riparazione, nessun ordine alternativo costruibile con i bank. Riserva sistemica e di livello.
7. **Il congiuntivo presente: forme irregolari** — 18 su 18 univoci, nessun distrattore accettabile. Problema di validità, non di lingua.
8. **Il passato remoto: riconoscere la forma** — nessuna doppia chiave; l'esercizio di correzione è il meglio costruito di tutto il pacchetto (due tipi di errore, posizione ruotante, nessuna seconda riparazione).
9. **I pronomi indiretti** — nessun item rotto e nessuna doppia chiave secca, ma tre rilievi B: due item impongono o penalizzano la ripresa clitica del dativo e uno ha una seconda risposta difendibile.
10. **L'accordo del participio con il pronome diretto** — nessuna doppia chiave certa; i tre rilievi B stanno tutti nella stessa zona grigia (accordo con oggetto posposto, distrattore non eliso).

Segnalo a parte due **esercizi** esemplari, da usare come modello quando si riscrivono gli altri:

- *Il «si» impersonale*, item «Alla festa si ha mangiato troppo e si è bevuto poco.» — la seconda proposizione impersonale blinda il `si`.
- *Il «si» passivante*, item «Il telefono aziendale si riparano nel centro specializzato.» — l'oggetto anteposto rende la cancellazione del `si` agrammaticale.
- *Il partitivo*, item «Sul tavolo c'è ancora alcuni pane caldo.» — `caldo` e `c'è` bloccano ogni riparazione alternativa.
- *Volerci e metterci*, esercizio di trasformazione — per ogni item un distrattore attacca l'ausiliare e l'altro l'accordo del participio: distrattori che cadono per ragioni diverse, come devono.

---

## SINTESI NUMERICA

| | |
|---|---|
| Sezioni riviste | 27 (tutte dichiarate B1; 5 con `stima: b2` in intestazione) |
| Esercizi | 81 — `buco` 38, `errore` 27, `fill` 14, `ordina` 2 |
| Item | 486 |
| Divergenze secche fra risoluzione cieca e chiavi del db | **1** (0,2%) |
| Item segnalati come ambigui dalla risoluzione cieca | 77 (16%) |
| **A — bloccanti** | **36 item (7,4%)** — su 17 sezioni |
| **B — contestabili** | **50 item (10,3%)** |
| **C — difetti sistemici** | **8 famiglie**, che toccano 22 esercizi su 81 per la sola risolvibilità per forma |
| **D — rifiniture** | 38 item, raggruppate in 19 voci |
| **E — sezioni senza bloccanti** | **10 su 27 (37%)** |
| Item con testo riscritto nelle proposte | 85 (17%) |

**Dove si concentrano i bloccanti:** *Il periodo ipotetico* (6), *Il «si» impersonale* (3), *Stare + gerundio* (3), *Volerci e metterci* (3), *Il discorso indiretto* (3), *Il «si» passivante* (3), *Il partitivo* (2), *L'infinito istruttivo* (3), gli altri 1 a testa.
**Formato più fragile:** `errore` — 24 dei 36 bloccanti, quasi tutti per una seconda riparazione da un intervento.

## LUNGHEZZA MEDIA IN PAROLE — PRIMA E DOPO

Livello dichiarato: **B1** per tutte e 27 le sezioni. Riporto il totale e lo spacchetto sulle 5 sezioni con stima d'autore B2, perché è lì che il rischio di salita di livello è più alto.

| Insieme | Item | Prima | Dopo | Δ |
|---|---|---|---|---|
| **B1 dichiarato (27 sezioni)** | 486 | **9,38** | **9,35** | **−0,3 %** |
| — di cui 5 sezioni con stima B2 | 90 | 10,74 | 10,79 | +0,4 % |
| — 22 sezioni senza stima B2 | 396 | 9,08 | 9,03 | −0,5 % |
| Solo gli 85 item riscritti | 85 | 10,14 | 9,96 | −1,7 % |

**Lettura del dato.** La media resta piatta: **26 item si allungano di una o due parole**, ma altrettanti si accorciano, perché in gran parte dei casi la riparazione giusta è stata **cambiare la scena**, non aggiungere àncore — sostituire un pronome nudo con un soggetto lessicale, spostare il condizionale dentro la protasi, anteporre l'oggetto, cambiare un complemento inerte in un'àncora temporale. Dove ho dovuto allungare (il periodo ipotetico con `noi`, l'imperfetto con la coordinata perfettiva, il discorso indiretto con «al telefono») l'aumento è di **una o due parole** e non introduce nessun costrutto o lemma sopra il B1: le parole aggiunte sono `noi`, `poi è uscito`, `al telefono`, `tutti insieme`, `d'inverno`, `gli autobus`, `il collega`, `Gli altri`, `In questo momento`.

**Le correzioni non spostano gli item verso l'alto.** Il vero rischio di livello di questo pacchetto non sta nelle mie proposte: sta nelle 5 sezioni che l'autore ha già marcato B2 e nelle 2 che meritano la stessa marca (*I superlativi*, esercizio 3; *I pronomi relativi*, «il cui»), e nel cumulo lessicale segnalato in C.6.
