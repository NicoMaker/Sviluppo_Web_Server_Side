const fs = require("fs"); // Importa il modulo 'fs' per lavorare con il file system
const zlib = require("zlib"); // Importa il modulo 'zlib' per la compressione e decompressione dei dati

const gz = zlib.createGzip(); // Crea un oggetto gzip per la compressione dei dati

// Crea uno stream di lettura per il file JSON
const reader = fs.createReadStream("Data/Social.json"),
  writer = fs.createWriteStream("Data/Social2.json"),
  writerGz = fs.createWriteStream("data/Social.json.gz"); // Crea uno stream di scrittura per il file JSON compresso

// // Quando lo stream 'reader' viene aperto, viene attivato l'evento "open".
// // La funzione di callback viene eseguita e stampa "Stream: open" nella console.
// reader.on("open", function (_chunk) {
//   console.log("Stream: open");
// });

// // Quando lo stream 'reader' viene chiuso, viene attivato l'evento "close".
// // La funzione di callback viene eseguita e stampa "Stream: close" nella console.
// reader.on("close", function (_chunk) {
//   console.log("Stream: close");
// });

// // Si ascolta l'evento "data" emesso dal flusso `reader`
// // Ogni volta che il flusso riceve nuovi dati (chunk), questa funzione viene invocata
// reader.on("data", function (chunk) {
//   // I dati (chunk) vengono stampati sulla console
//   console.log(chunk);
// });

reader.on("open", () => console.log("Stream: open"));
reader.on("close", () => console.log("Stream: close"));
reader.on("data", (chunk) => console.log(chunk));

// Utilizza il metodo `pipe()` per trasferire i dati dallo stream 'reader' allo stream 'writer'.
// Questo consente di leggere i dati in ingresso e scriverli direttamente nell'output.
// reader.pipe(writer);

reader.pipe(gz).pipe(writer); // I dati letti dallo stream 'reader' vengono compressi e poi scritti nello stream 'writerGz'.
