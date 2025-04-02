- [Vai al file Principale](../../Readme.md)

# Lezione 2: Sviluppo Web Server Side del 02 Aprile 2025

## Legenda

- [Intro Node](#intro-node)
- [Progetti (Esercizi)](#progetti-esercizi)
- [Moduli Nativi](#moduli-nativi)

## Intro Node

Moduli di Node non tutti bisogna scaricarli perche sono gia installati con npm

1. **Moduli integrati (Built-in Modules)** – Sono già inclusi in Node.js e non necessitano di installazione. Alcuni esempi sono:

   - `fs` (File System)
   - `http` (Server HTTP)
   - `path` (Gestione percorsi)
   - `os` (Informazioni sul sistema operativo)
   - `crypto` (Funzioni crittografiche)

2. **Moduli di terze parti** – Questi devono essere installati tramite **npm** (Node Package Manager). Ad esempio:
   - `express` (Framework per server web)
   - `mongoose` (Gestione database MongoDB)
   - `dotenv` (Gestione variabili d’ambiente)

Quindi, se hai bisogno di un modulo come `fs`, puoi usarlo direttamente con `require('fs')`, mentre se vuoi `express`, devi prima installarlo con `npm install express`.

Modulo teze parti -> ti fidi altre persone che hanno gia fatto il lavoro per te e ti dare il codice.

Esatto! I **moduli di terze parti** sono pacchetti creati da altri sviluppatori e condivisi tramite **npm**. Quando li usi, stai sfruttando codice già scritto da qualcun altro, risparmiando tempo e fatica.

Moduli -> codici che ti servono per fare delle determinate opzioni. Esempi: `express`, `mongoose`, `dotenv`.

### Differenza tra moduli integrati e moduli di terze parti:

- **Moduli integrati**: fanno parte di Node.js e sono sempre disponibili senza installazione.
- **Moduli di terze parti**: devono essere installati e aggiornati tramite `npm`.

Ad esempio, se usi `express`, stai utilizzando una libreria scritta da altri sviluppatori, che include metodi e funzioni già pronte per la gestione di server web.

In pratica, quando installi un modulo di terze parti, ti **affidi al lavoro di altri**, ma puoi sempre controllare il codice sorgente e la documentazione per capire come funziona. Alcuni moduli di terze parti sfruttano anche **moduli nativi di Node.js**, combinandoli in un'unica soluzione più facile da usare.

## Moduli Nativi

- [fs](https://nodejs.org/api/fs.html)  - File System (accesso al file system)
- [http](https://nodejs.org/api/http.html)  - Server HTTP
- [path](https://nodejs.org/api/path.html)  - Gestione percorsi
- [os](https://nodejs.org/api/os.html)  - Informazioni sul sistema operativo
- [crypto](https://nodejs.org/api/crypto.html)  - Funzioni crittografiche
- [events](https://nodejs.org/api/events.html)  - Gestione degli eventi
- [stream](https://nodejs.org/api/stream.html)  - Gestione di flussi di dati
- [util](https://nodejs.org/api/util.html)  - Funzioni utili
- [child_process](https://nodejs.org/api/child_process.html)  - Gestione dei processi figli
- [buffer](https://nodejs.org/api/buffer.html)  - Gestione di buffer
- [timers](https://nodejs.org/api/timers.html)  - Gestione dei timer
- [utils](https://nodejs.org/api/util.html)  - Funzioni utili

## Progetti (Esercizi)

- [1 Progetto](Progetti/1_Progetto/)
- [Prova CRUD](Progetti/Prova_CRUD/)