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

// Rotta POST per aggiungere molte notizie
server.post("/timelinemany", (req, res) => {
  const timelineContent = readData(),
    newEntries = req.body;

  // Controlla se sono stati forniti dati
  if (!Array.isArray(newEntries) || newEntries.length === 0)
    return res
      .status(406)
      .json({ message: "Dati non validi o vuoti", status: 406 });

  // Aggiungi un ID unico per ogni nuova notizia
  const lastId =
    timelineContent.length > 0
      ? Math.max(...timelineContent.map((item) => item.id))
      : 0;

  newEntries.forEach((entry, index) => {
    const { titolo, testo, data } = entry;

    // Verifica che i dati siano validi
    if (!titolo || !testo || !data)
      return res.status(406).json({
        message: `Dati non validi per l'elemento ${index + 1}`,
        status: 406,
      });

    // Assegna un nuovo ID
    entry.id = lastId + index + 1;
    timelineContent.push(entry);
  });

  // Scrivi i dati aggiornati nel file
  writeData(timelineContent);

  // Risposta con le nuove notizie inserite
  res.status(201).json(newEntries);
});

// Rotta PUT per aggiornare una notizia esistente
server.put("/timeline/:id", (req, res) => {
  let timelineContent = readData();
  const id = parseInt(req.params.id),
    index = timelineContent.findIndex((item) => item.id === id);

  if (index === -1)
    return res.status(404).json({ message: "ID non trovato", status: 404 });

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

  // Elimina l'elemento
  timelineContent.splice(index, 1);

  // Scrivi i dati aggiornati nel file
  writeData(timelineContent);

  // Risposta con l'ID dell'elemento eliminato
  res.status(200).json({
    message: `Elemento con ID ${id} eliminato con successo`,
  });
});

server.delete("/timelinemany", (req, res) => {
  let timelineContent = readData();
  const idsToDelete = req.body.ids; // Array di ID da eliminare

  // Controlla se è stato fornito un array di ID
  if (!Array.isArray(idsToDelete) || idsToDelete.length === 0)
    return res
      .status(406)
      .json({ message: "Array di ID non valido o vuoto", status: 406 });

  // Filtra i dati per rimuovere gli ID specificati
  const updatedContent = timelineContent.filter(
    (item) => !idsToDelete.includes(item.id)
  );

  // Se la lunghezza è la stessa, significa che nessun elemento è stato eliminato
  if (updatedContent.length === timelineContent.length)
    return res.status(404).json({
      message: "Nessun elemento trovato con gli ID forniti",
      status: 404,
    });

  // Scrivi i dati aggiornati nel file
  writeData(updatedContent);

  // Risposta con gli ID degli elementi eliminati
  res.status(200).json({
    message: `Elementi con gli ID ${idsToDelete.join(
      ", "
    )} eliminati con successo`,
  });
});

server.delete("/deleteall", (req, res) => {
  // Leggi i dati della timeline
  let timelineContent = readData();

  // Verifica se la timeline contiene già dei dati
  if (timelineContent.length === 0) {
    return res.status(404).json({
      message: "Nessun elemento nella timeline da eliminare",
      status: 404,
    });
  }

  // Svuota il contenuto della timeline (rimuovi tutti gli elementi)
  timelineContent = [];

  // Scrivi i dati aggiornati nel file
  writeData(timelineContent);

  // Risposta che conferma l'eliminazione di tutti gli elementi
  res.status(200).json({
    message: "Tutti gli elementi sono stati eliminati con successo.",
  });
});

server.listen(port, host, () => {
  console.log(`Server in ascolto su http://${host}:${port}`);
});
