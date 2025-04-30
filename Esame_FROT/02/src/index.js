import express from "express";

// Inizializza l'applicazione Express
const app = express();
const port = 3000;

// Definisci la rotta GET /utente/:nome
app.get("/utente/:nome", (req, res) => {
  // Estrai il parametro nome dalla richiesta
  const nome = req.params.nome;

  // Invia la risposta
  res.send(`Ciao, ${nome}!`);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
  console.log("Prova ad accedere a: http://localhost:3000");
  console.log("Prova ad accedere a: http://localhost:3000/utente/Luca");
});

// Esempio di come funzionerebbe la richiesta
console.log("Esempio di risposta per GET /utente/Luca:");
console.log("Ciao, Luca!");
