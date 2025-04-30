import express from "express";

// Inizializza l'applicazione Express
const app = express();
const port = 3000;

// Middleware per parsare il JSON nel body delle richieste
app.use(express.json());

// Array in memoria per memorizzare i versi (ora con struttura più complessa)
const versi = [];

// Rotta POST /verso per salvare un verso semplice nell'array
app.post("/verso", (req, res) => {
  // Verifica se il campo 'verso' è presente nel body
  if (!req.body.verso) {
    return res.status(400).json({ errore: "Campo 'verso' obbligatorio" });
  }

  // Estrai il verso dal body
  const nuovoVerso = req.body.verso;

  // Aggiungi il verso all'array in memoria
  versi.push({ verso: nuovoVerso });

  // Rispondi con conferma e il verso aggiunto
  res.status(201).json({
    messaggio: "Verso aggiunto con successo",
    verso: nuovoVerso,
    totale: versi.length,
  });
});

// NUOVA ROTTA: POST /versi per salvare un verso con informazioni aggiuntive
app.post("/verso", (req, res) => {
  // Verifica se il campo 'verso' è presente nel body
  if (!req.body.verso) {
    return res.status(400).json({ errore: "Campo 'verso' obbligatorio" });
  }

  // Crea un oggetto con tutte le proprietà ricevute
  const nuovoElemento = { ...req.body };

  // Aggiungi l'oggetto all'array in memoria
  versi.push(nuovoElemento);

  // Rispondi con conferma e l'oggetto aggiunto
  res.status(201).json({
    messaggio: "Elemento aggiunto con successo",
    elemento: nuovoElemento,
    totale: versi.length,
  });
});

// Rotta GET /versi per ottenere tutti i versi salvati
app.get("/versi", (req, res) => {
  // Restituisci l'array completo dei versi
  res.json(versi);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
  console.log(
    "Prova ad inviare una richiesta POST a: http://localhost:3000/verso"
  );
  console.log(
    "Prova ad inviare una richiesta POST a: http://localhost:3000/versi"
  );
  console.log(
    "Prova ad inviare una richiesta GET a: http://localhost:3000/versi"
  );
});
