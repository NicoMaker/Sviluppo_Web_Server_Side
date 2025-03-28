- [Vai al file Principale](../../Readme.md)

# Lezione 2: Sviluppo Web Server Side del 28 Marzo 2025

## Legenda

- [Uso Watch in node](#uso-watch-in-node)
- [Scarici Pacchetti in NodeJS](#scarici-pacchetti-in-nodejs)
- [Variabili](#variabili)
- [JSON](#json)
- [Array](#array)
- [Funzione](#definizione-di-una-funzione)
- [Progetti (Esercizi)](#progetti-esercizi)

## Uso Watch in node

```bash
node --watch src/index.js
```

## Scarici Pacchetti in NodeJS

```bash
npm install nome pacchetto
npm i nome pacchetto
```

## Variabili

Le variabili in un programma vengono utilizzate per immagazzinare valori che possono essere utilizzati o modificati durante l'esecuzione del codice. Ecco una spiegazione delle variabili che hai menzionato:

1. **`const`**: Una variabile dichiarata con `const` è **costante**, il che significa che il suo valore **non può essere modificato dopo l'assegnazione**. Questo tipo di variabile deve essere inizializzata al momento della dichiarazione e non può essere riassegnata.

   ```javascript
   const pi = 3.14;
   pi = 3.14159; // Errore! Non puoi modificare una variabile dichiarata con `const`
   ```

2. **`let`**: Una variabile dichiarata con `let` è una **variabile locale** che può essere **modificata** nel corso del programma. La sua visibilità è limitata al blocco di codice in cui è stata dichiarata, per esempio all'interno di un ciclo o di una funzione.

   ```javascript
   let nome = "Mario";
   nome = "Luigi"; // Questo è valido, la variabile può essere aggiornata
   ```

3. **`var`**: Una variabile dichiarata con `var` è una **variabile globale** o, se dichiarata all'interno di una funzione, **locale alla funzione**, ma con una scoping meno restrittiva rispetto a `let`. Inoltre, `var` permette di dichiarare la variabile più volte all'interno dello stesso blocco senza errori, anche se questo non è una buona pratica. Oggi è consigliato utilizzare `let` o `const` invece di `var`.
   ```javascript
   var numero = 10;
   numero = 20; // Questo è valido
   var numero = 30; // Questo è valido ma non consigliato (variabile dichiarata di nuovo)
   ```

In generale, si consiglia di preferire l'uso di `let` e `const` per evitare potenziali confusione e problemi di scoping che possono verificarsi con `var`.

## JSON

Rappresentazione degli oggeti JS

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

## Array

Un **array** è una struttura dati che permette di memorizzare più valori (elementi) in una singola variabile. Gli array sono utili quando desideri lavorare con un gruppo di dati dello stesso tipo (numeri, stringhe, oggetti, ecc.). In JavaScript, un array è indicato con parentesi quadre `[]`, e gli elementi sono separati da virgole.

### Creare un Array

Per creare un array, puoi usare la sintassi:

```javascript
let numeri = [1, 2, 3, 4, 5];
let nomi = ["Alice", "Bob", "Charlie"];
```

Gli array in JavaScript sono **indicizzati** a partire da 0, quindi l'elemento con indice `0` sarà il primo dell'array.

### Funzioni e Metodi per gli Array

JavaScript offre vari metodi per manipolare gli array. Ecco alcuni esempi:

1. **Accesso agli Elementi**
   Puoi accedere a un elemento di un array tramite il suo indice.

   ```javascript
   let numeri = [10, 20, 30, 40];
   console.log(numeri[2]); // 30 (terzo elemento)
   ```

2. **Aggiungere Elementi**
   Puoi aggiungere elementi alla fine o all'inizio dell'array.

   - `push()` aggiunge un elemento alla fine:

     ```javascript
     numeri.push(50); // [10, 20, 30, 40, 50]
     ```

   - `unshift()` aggiunge un elemento all'inizio:
     ```javascript
     numeri.unshift(5); // [5, 10, 20, 30, 40, 50]
     ```

3. **Rimuovere Elementi**
   Puoi rimuovere elementi dalla fine o dall'inizio.

   - `pop()` rimuove l'ultimo elemento:

     ```javascript
     numeri.pop(); // [5, 10, 20, 30, 40]
     ```

   - `shift()` rimuove il primo elemento:
     ```javascript
     numeri.shift(); // [10, 20, 30, 40]
     ```

4. **Iterare sugli Elementi**
   Puoi usare un ciclo `for` o metodi come `forEach()` per iterare sugli elementi di un array.

   ```javascript
   let frutti = ["Mela", "Banana", "Arancia"];

   frutti.forEach(function (frutto, index) {
     console.log(index, frutto);
   });
   ```

5. **Filtrare gli Elementi**
   Usa `filter()` per creare un nuovo array con solo gli elementi che soddisfano una condizione.

   ```javascript
   let numeri = [1, 2, 3, 4, 5, 6];
   let numeriPari = numeri.filter((num) => num % 2 === 0);
   console.log(numeriPari); // [2, 4, 6]
   ```

6. **Modificare gli Elementi**
   Usa `map()` per creare un nuovo array in cui ogni elemento è stato trasformato da una funzione.

   ```javascript
   let numeri = [1, 2, 3, 4];
   let quadrati = numeri.map((num) => num * num);
   console.log(quadrati); // [1, 4, 9, 16]
   ```

7. **Ordinare gli Elementi**
   Usa `sort()` per ordinare gli elementi di un array (alfa-numericamente per default).

   ```javascript
   let numeri = [5, 3, 8, 1];
   numeri.sort();
   console.log(numeri); // [1, 3, 5, 8]
   ```

8. **Trovare un Elemento**
   Usa `find()` per trovare il primo elemento che soddisfa una condizione.

   ```javascript
   let numeri = [1, 2, 3, 4, 5];
   let primoMaggioreDiTre = numeri.find((num) => num > 3);
   console.log(primoMaggioreDiTre); // 4
   ```

9. **Concatenare Due Array**
   Usa `concat()` per combinare due o più array.

   ```javascript
   let array1 = [1, 2];
   let array2 = [3, 4];
   let combinato = array1.concat(array2);
   console.log(combinato); // [1, 2, 3, 4]
   ```

### Esempio Completo di Utilizzo degli Array

```javascript
let numeri = [10, 20, 30, 40];

// Aggiungi un elemento
numeri.push(50);

// Rimuovi l'ultimo elemento
numeri.pop();

// Filtra solo i numeri pari
let numeriPari = numeri.filter((num) => num % 2 === 0);

// Calcola il quadrato di ogni numero
let quadrati = numeri.map((num) => num * num);

// Trova il primo numero maggiore di 25
let primoMaggioreDi25 = numeri.find((num) => num > 25);

console.log(numeri); // [10, 20, 30, 40, 50]
console.log(numeriPari); // [10, 20, 30, 40]
console.log(quadrati); // [100, 400, 900, 1600, 2500]
console.log(primoMaggioreDi25); // 30
```

Questi sono alcuni dei metodi principali che puoi utilizzare per lavorare con gli array in JavaScript! Se vuoi ulteriori dettagli o un altro esempio, fammelo sapere!

In JavaScript, una **funzione** è un blocco di codice che può essere definito e poi chiamato per eseguire un compito specifico. Le funzioni possono ricevere parametri (input) e restituire valori (output). Ecco come puoi definire e usare le funzioni in JavaScript.

### Definizione di una funzione

Puoi definire una funzione in JavaScript in vari modi:

#### 1. Funzione dichiarata

La forma più tradizionale per definire una funzione è usare la parola chiave `function`:

```javascript
function somma(a, b) {
  return a + b;
}
```

- **`somma`** è il nome della funzione.
- **`a` e `b`** sono i parametri della funzione.
- **`return`** restituisce il risultato dell'operazione.

Questa funzione somma i due numeri passati come argomenti e restituisce il risultato.

Puoi chiamarla così:

```javascript
console.log(somma(3, 5)); // Stampa 8
```

#### 2. Funzione espressione (funzione anonima)

Un'altra modalità di definizione è tramite una **funzione anonima**, che viene assegnata a una variabile:

```javascript
const somma = function (a, b) {
  return a + b;
};
```

Chiamata:

```javascript
console.log(somma(3, 5)); // Stampa 8
```

#### 3. Funzione freccia (Arrow Function)

A partire da ECMAScript 6 (ES6), JavaScript ha introdotto le **funzioni freccia**, che sono una sintassi più compatta per definire le funzioni:

```javascript
const somma = (a, b) => a + b;
```

Chiamata:

```javascript
console.log(somma(3, 5)); // Stampa 8
```

### Parametri e ritorno di una funzione

Le funzioni in JavaScript possono avere parametri opzionali e possono restituire un valore. Se non è presente una dichiarazione `return`, la funzione restituirà `undefined` di default.

#### Esempio con valore di ritorno:

```javascript
function saluta(nome) {
  return "Ciao, " + nome;
}

console.log(saluta("Mario")); // Stampa "Ciao, Mario"
```

#### Esempio con parametro opzionale:

```javascript
function saluta(nome = "ospite") {
  return "Ciao, " + nome;
}

console.log(saluta()); // Stampa "Ciao, ospite"
console.log(saluta("Luca")); // Stampa "Ciao, Luca"
```

In questo caso, se il parametro `nome` non viene passato, il valore predefinito sarà `"ospite"`.

### Funzioni come oggetti di prima classe

In JavaScript, le funzioni sono trattate come **oggetti di prima classe**, il che significa che possono essere assegnate a variabili, passate come argomenti e restituite da altre funzioni.

#### Esempio di funzione passata come argomento:

```javascript
function eseguiFunzione(fn) {
  return fn(5, 10);
}

const somma = (a, b) => a + b;

console.log(eseguiFunzione(somma)); // Stampa 15
```

### Funzioni di callback

Le **funzioni di callback** sono funzioni passate come argomenti a un'altra funzione che vengono poi chiamate all'interno di quest'ultima. Sono molto usate in JavaScript, soprattutto con operazioni asincrone.

Esempio:

```javascript
function faiQualcosaConCallback(callback) {
  let risultato = 42;
  callback(risultato);
}

faiQualcosaConCallback(function (x) {
  console.log("Il risultato è: " + x);
});
```

### In sintesi

Le funzioni in JavaScript sono versatili e possono essere definite in vari modi (dichiarazione, espressione, freccia). Possono ricevere parametri, restituire valori e essere trattate come oggetti. Utilizzare funzioni ti permette di scrivere codice modulare, riutilizzabile e chiaro.
La funzione viene usata per ripetere le opzioni più volte.

### Progetti (Esercizi)

- [1 Progetto](Progetti/1_Progetto/)
- [2 Progetto](Progetti/2_Progetto/)
- [3 Progetto](Progetti/3_Progetto/)
