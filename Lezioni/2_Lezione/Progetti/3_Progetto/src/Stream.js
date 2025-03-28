const fs = require("fs"); // Importa il modulo 'fs' per lavorare con il file system

// Crea uno stream di lettura per il file JSON
const reader = fs.createReadStream("Data/Social.json"),
  writer = fs.createWriteStream("Data/Social2.json");

// Quando lo stream 'reader' viene aperto, viene attivato l'evento "open".
// La funzione di callback viene eseguita e stampa "Stream: open" nella console.
reader.on("open", function (_chunk) {
  console.log("Stream: open");
});

// Quando lo stream 'reader' viene chiuso, viene attivato l'evento "close".
// La funzione di callback viene eseguita e stampa "Stream: close" nella console.
reader.on("close", function (_chunk) {
  console.log("Stream: close");
});

// Si ascolta l'evento "data" emesso dal flusso `reader`
// Ogni volta che il flusso riceve nuovi dati (chunk), questa funzione viene invocata
reader.on("data", function (chunk) {
  // I dati (chunk) vengono stampati sulla console
  console.log(chunk);
});

// Utilizza il metodo `pipe()` per trasferire i dati dallo stream 'reader' allo stream 'writer'.
// Questo consente di leggere i dati in ingresso e scriverli direttamente nell'output.
// reader.pipe(writer);
