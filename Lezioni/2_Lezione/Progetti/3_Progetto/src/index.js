const express = require("express"),
  server = express(),
  host = `127.0.0.1`,
  port = 3000;

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

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}/`)
);
