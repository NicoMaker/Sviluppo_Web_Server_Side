// importo i moduli necessari
const express = require("express");

// configuro la porta del server
const port = 3000;

// configuro il server
const app = express();

// definisco una rotta `/` alla quale rispondo con `Hello!`
app.get("/", (_request, response) => {
  response.send("Hello!");
});

app.post("/", (_request, response) => {
  response.send("Hello! POST");
});

app.put("/", (_request, response) => {
  response.send("Hello! PUT");
});

app.delete("/", (_request, response) => {
  response.send("Hello! DELETE");
});

app.patch("/", (_request, response) => {
  response.send("Hello! PATCH");
});

// avvio il server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
