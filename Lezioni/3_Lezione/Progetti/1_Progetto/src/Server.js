const express = require("express"),
  fs = require("fs"),
  path = require("path"),
  server = express(),
  host = "127.0.0.1",
  port = 3000;

// Percorso del file JSON
const jsonFilePath = path.join(__dirname, "../data/timeline.json");

// Middleware per il parsing del JSON
server.use(express.json());

// Funzione per leggere i dati dal file JSON
const readData = () => {
  try {
    const data = fs.readFileSync(jsonFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Errore nella lettura del file JSON:", err);
    return [];
  }
};

// Funzione per scrivere i dati nel file JSON
const writeData = (data) => {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Errore nella scrittura del file JSON:", err);
  }
};

// Rotta GET per ottenere tutta la timeline
server.get("/timeline", (_req, res) => {
  res.status(200).json(readData());
});

// Rotta GET per ottenere un elemento specifico
server.get("/timeline/:id", (req, res) => {
  const timelineContent = readData(),
    item = timelineContent.find(
      (entry) => entry.id === parseInt(req.params.id)
    );
  if (item) res.status(200).json(item);
  else {
    res
      .status(404)
      .json({ message: "La risorsa cercata non esiste", status: 404 });
  }
});

// Rotta POST per aggiungere una nuova notizia
server.post("/timeline", (req, res) => {
  const { titolo, testo, data } = req.body;
  if (!titolo || !testo || !data)
    return res.status(406).json({ message: "Dati non validi", status: 406 });

  let timelineContent = readData();
  const newId =
      timelineContent.length > 0
        ? Math.max(...timelineContent.map((item) => item.id)) + 1
        : 1,
    newEntry = { id: newId, titolo, testo, data };
  timelineContent.push(newEntry);

  writeData(timelineContent);
  res.status(201).json(newEntry);
});

// Rotta PUT per aggiornare una notizia esistente
server.put("/timeline/:id", (req, res) => {
  let timelineContent = readData();
  const id = parseInt(req.params.id),
    index = timelineContent.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "ID non trovato", status: 404 });
  }

  const { titolo, testo, data } = req.body;
  if (!titolo || !testo || !data)
    return res.status(406).json({ message: "Dati non validi", status: 406 });

  timelineContent[index] = { id, titolo, testo, data };

  writeData(timelineContent);
  res.status(200).json(timelineContent[index]);
});

// Rotta PATCH per modificare solo alcuni campi di una notizia
server.patch("/timeline/:id", (req, res) => {
  let timelineContent = readData();
  const id = parseInt(req.params.id),
    index = timelineContent.findIndex((item) => item.id === id);

  if (index === -1)
    return res.status(404).json({ message: "ID non trovato", status: 404 });

  timelineContent[index] = { ...timelineContent[index], ...req.body };

  writeData(timelineContent);
  res.status(200).json(timelineContent[index]);
});

// Rotta DELETE per eliminare una notizia
server.delete("/timeline/:id", (req, res) => {
  let timelineContent = readData();
  const id = parseInt(req.params.id),
    index = timelineContent.findIndex((item) => item.id === id);

  if (index === -1)
    return res.status(404).json({ message: "ID non trovato", status: 404 });

  // Prendi l'elemento da eliminare
  const deletedItem = timelineContent[index];

  // Elimina l'elemento
  timelineContent.splice(index, 1);

  // Scrivi i dati aggiornati nel file
  writeData(timelineContent);

  // Risposta con l'ID dell'elemento eliminato
  res.status(200).json({
    message: `Elemento con ID ${id} eliminato con successo`,
  });
});

server.listen(port, host, () => {
  console.log(`Server in ascolto su http://${host}:${port}`);
});
