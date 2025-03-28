const qrcode = require("qrcode"); // Importa la libreria 'qrcode'

// Genera un codice QR come stringa ASCII
qrcode.toString("Hello world", (_err, qrstring) => {
  console.log(qrstring); // Stampa il codice QR in formato ASCII nella console
});

// Genera un codice QR come URL immagine in formato DataURL (base64)
qrcode.toDataURL("Hello world", (_err, qrstring) => {
  console.log(qrstring); // Stampa il DataURL nella console
});

qrcode.toFile('qrcode.png', 'Hello world') // Genera un file PNG con il codice QR

qrcode.toFile('qrcode.png', 'Hello world', {
    width: 10 // Imposta la larghezza del codice QR
})


qrcode.toFile('qrcode.png', 'Hello world', {
    errorCorrectionLevel: 'H'
}) // Imposta il livello di correzione degli errori