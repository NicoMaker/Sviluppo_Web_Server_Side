import express from "express";

// Inizializza l'applicazione Express
const app = express();
const port = 3000;

// Middleware per parsare il JSON nel body delle richieste
app.use(express.json());

// Definisci la rotta POST /animale
app.post("/animale", (req, res) => {
  // Verifica se il campo 'nome' è presente nel body
  if (!req.body.nome) {
    // Se manca il campo 'nome', rispondi con status 400
    return res.status(400).json({ errore: "Campo 'nome' obbligatorio" });
  }

  // Estrai il nome dell'animale dal body
  const nomeAnimale = req.body.nome;

  // Invia la risposta
  res.json(`Hai scelto: ${nomeAnimale}`);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
  console.log(
    "Prova ad inviare una richiesta POST a: http://localhost:3000/animale"
  );
});
