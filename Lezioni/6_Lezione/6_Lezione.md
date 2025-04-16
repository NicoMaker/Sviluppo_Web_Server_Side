- [Vai al file Principale](../../Readme.md)

# Lezione 6: Sviluppo Web Server Side del 16 Aprile 2025

## Legenda

- [Moduli](#-cosè-un-modulo-in-nodejs)
- [Progetti (Esercizi)](#progetti-esercizi)


---

### 🔹 Cos'è un Modulo in Node.js?

Un **modulo** in Node.js è un **insieme di funzioni, oggetti o variabili** raggruppate in un unico file o pacchetto. Serve per **organizzare il codice**, **riutilizzarlo** in più parti del progetto e **mantenerlo ordinato**.

Node.js usa il sistema **CommonJS**, dove ogni file è considerato un modulo.

---

### ✅ Caratteristiche principali:

- Incapsula codice (evita conflitti tra variabili)
- Può **esportare** funzioni, oggetti o costanti
- Può essere **importato** in altri file usando `require()`

---

### 📦 Tipi di moduli:

1. **Moduli interni** (built-in): già presenti in Node.js, es. `fs`, `http`, `path`
2. **Moduli esterni**: installati con npm, es. `express`, `lodash`
3. **Moduli locali**: creati da te in file `.js`

---

### ✍️ Esempio di modulo personalizzato

#### 📁 `mathUtils.js` (modulo)

```js
function somma(a, b) {
  return a + b;
}

function moltiplica(a, b) {
  return a * b;
}

module.exports = { somma, moltiplica };
```

#### 📁 `app.js` (file principale)

```js
const math = require("./mathUtils");

console.log("Somma:", math.somma(3, 5)); // Output: Somma: 8
console.log("Moltiplicazione:", math.moltiplica(4, 6)); // Output: Moltiplicazione: 24
```

---

## Progetti (Esercizi)

- [Legenda Esercizio](Progetti/1_Progetto/README.md)
- [1 Progetto](Progetti/1_Progetto/)
