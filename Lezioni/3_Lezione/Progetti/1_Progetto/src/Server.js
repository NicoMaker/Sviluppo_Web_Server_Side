const express = require("express"),
  server = express(),
  host = `127.0.0.1`,
  port = 3000;

// Caricamento dei dati direttamente come modulo
const timelineContent = require("../data/timeline.json");

// Rotta GET per /timeline
server.get("/timeline", (_req, res) => {
  res.status(200).json(timelineContent);
});

// Rotta GET per /timeline/:id
server.get("/timeline/:id", (req, res) => {
  const item = timelineContent.find(
    (entry) => entry.id === parseInt(req.params.id)
  );
  if (item) res.status(200).json(item);
  else {
    res
      .status(404)
      .json({ message: "la risorsa cercata non esiste", status: 404 });
  }
});

server.listen(port, host, () => {
  console.log(`Server in ascolto su http://${host}:${port}`);
});
