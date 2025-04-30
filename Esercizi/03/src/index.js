import express from "express";

// Inizializza l'applicazione Express
const app = express();
const port = 3000;

// Definisci la rotta GET /persona
app.get("/persona", (req, res) => {
  // Crea l'oggetto JSON da restituire
  const persona = {
    nome: "Marco",
    eta: 25,
  };

  // Invia la risposta JSON
  res.json(persona);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
  console.log("Prova ad accedere a: http://localhost:3000/persona");
});

// Esempio di come funzionerebbe la richiesta per /persona
console.log("\nEsempio di risposta per GET /persona:");
console.log(JSON.stringify({ nome: "Marco", eta: 25 }, null, 2));
