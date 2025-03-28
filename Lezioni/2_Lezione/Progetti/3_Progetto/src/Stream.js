const fs = require("fs"); // Importa il modulo 'fs' per lavorare con il file system

// Crea uno stream di lettura per il file JSON
const reader = fs.createReadStream("Data/Social.json"),
  writer = fs.createWriteStream("Data/Social2.json");

// reader.on("data", function (chunk) {
//   console.log(); // Qui dovresti specificare cosa stampare, ad esempio 'console.log(chunk.toString());'
// });

reader.pipe(writer); // Collega lo stream di lettura a quello di scrittura e metti i dati da una parte all'altra corretta facendo copie di dati

