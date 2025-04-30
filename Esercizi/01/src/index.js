import express from "express";

// Inizializza l'applicazione Express
const app = express();
const port = 3000;

// Definisci la route per la richiesta GET alla root
app.get("/", (req, res) => {
  res.send("Ciao mondo!");
});

// Avvia il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server avviato e in ascolto sulla porta ${port}`);
  console.log(
    `Apri http://localhost:${port} nel tuo browser per vedere il messaggio`
  );
});
