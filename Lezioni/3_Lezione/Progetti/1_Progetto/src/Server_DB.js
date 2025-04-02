const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    console.log(row.id + ": " + row.info);
  });
});

db.close();

const port = 3000;
const server = express();

server.get("/timeline", (_req, res) => {
  const timelineContent = require("../data/timeline.json");

  res.send(timelineContent);
});

server.get("/timeline/:id", (req, res) => {
  const timelineContent = require("../data/timeline.json");

  const item = timelineContent.find(
    (item) => item.id === parseInt(req.params.id)
  );

  if (!item) {
    return res.status(404).send();
  }

  console.log("tutto ok");

  res.send(item);
});

server.post("/timeline", (req, res) => {
  res.send("ok POST");
});

server.put("/timeline/:id", (req, res) => {
  res.send(`ok PUT con id ${req.params.id}`);
});

server.patch("/timeline/:id", (req, res) => {
  res.send(`ok PATCH con id ${req.params.id}`);
});

server.delete("/timeline/:id", (req, res) => {
  res.send(`ok DELETE con id ${req.params.id}`);
});

server.listen(port, () => {
  console.log("server in ascolto!");
});
