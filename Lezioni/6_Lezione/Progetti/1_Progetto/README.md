- [vai al file principale](../1_Progetto/README.md)

# Primi passi

Inizializziamo il progetto con

`npm init`

che crea il `package.json` con dentro tutta la configurazione del progetto e i pacchetti necessari.

Definisco poi un comando da eseguire per avviare l'applicativo nella sezione scripts di `package.json`

```
"start": "node src/index.js"
```

## Installiamo le dipendenze (ovvero i moduli o pacchetti)

```
npm install express
```

Questo scaricherà internamente alla cartella `node_modules` il pacchetto `express`
assieme a tutte le sue dipendenze.
Inoltre all'interno del file `package.json` aggiungerà una dipendenza

```
"express": "^5.1.0"
```

## Inizializzo il repository

Lancio

```
git init
```

per inizializzare il repository. Aggiungo anche il file `.gitignore` per escludere le cartelle `.vscode` e `node_modules`.
