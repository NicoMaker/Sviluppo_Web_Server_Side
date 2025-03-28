const express = require("express"),
  server = express(),
  host = `127.0.0.1`,
  port = 3000;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/home", (req, res) => {
  res.send("Benvenuto su Home!");
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}/`)
);
