const express = require("express"),
  fs = require("fs"),
  path = require("path"),
  server = express(),
  host = `127.0.0.1`,
  port = 3000,
  qrcode = require("qrcode");

server.get("/", (_req, res) => {
  res.send("Hello World!");
});

server.get("/home", (_req, res) => {
  res.send("Benvenuto su Home!");
});

server.get("/json", (_req, res) => {
  const rispostajson = {
    nome: "Marco",
    cognome: "Rossi",
    eta: 30,
  };

  res.send(rispostajson);
});

server.get("/data", (_req, res) => {
  const filePath = path.join(__dirname, "../Data/CV", "Competenze.json");

  console.log(`Sto cercando il file in: ${filePath}`); // Aggiungi un log per vedere il percorso

  // Leggi il file JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Errore nella lettura del file JSON:", err);
      res.status(500).send({ errore: "Errore nella lettura dei dati" });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error("Errore nel parsing del JSON:", parseErr);
      res.status(500).send({ errore: "Errore nel formato dei dati" });
    }
  });
});

server.use("/dati", express.static("Data")); // Serve file statici dalla cartella 'Data/CV' ed estende il contenuto di tutta la cartella

server.get("/attestati", (_req, res) => {
  const attestaticontent = require("../Data/CV/Attestati.json");

  res.send(attestaticontent);
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}/`)
);
