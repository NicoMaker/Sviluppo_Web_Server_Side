- [Vai al file princpale della lezione](../../6_Lezione.md)

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

# Se copio il progetto o lo clono dal repository

Una volta copiato basterà lanciare `npm i` oppure `npm install` per reinstallare i moduli necessari.


- Aggiungere script `dev` che riavvia il server quando ci sono modifiche
- Aggiungere le varie rotte per i metodi che rispondono `Hello POST`, `Hello Put`, ecc
- Aggiungere il file di test .http per provare le rotte che avete definito