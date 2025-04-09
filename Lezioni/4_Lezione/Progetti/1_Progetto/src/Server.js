// carico il modulo express
const express = require("express");

// carico il modulo per sqlite
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data/timeline.db");

// creo una costante "port" dove imposto la porta che userò con "server.lister" per avviare il server
const port = 3000;

// creo un server, lo devo poi configurare e avviare
const server = express();

// indico che voglio decodificare i contenuti che ricevo come JSON
server.use(express.json());

// creo la tabella nel database se già non esiste
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS timeline (year INTEGER, company TEXT, role TEXT, description TEXT, link TEXT)"
  );
});

// inizio la configurazione, poi dovrò avviarlo

// rispondo con il contenuto di "../data/timeline.json" a chi richiede la rotta "/timeline"
server.get("/timeline", (req, res) => {
  // usare db per pescare tutte le righe presenti nella tabella timeline
  // e inviarle al client
  db.all("SELECT rowid AS id, * FROM timeline", function (err, rows) {
    if (err) {
      console.error(err);
      return res.status(400).send();
    }

    return res.send(rows);
  });
});

// chiamata con metodo "GET" su "/timeline/:id", ad esempio "/timeline/4"
// attenzione che ogni elemento del URL è una stringa, 4 in questo caso è una stringa
// rispondo con il singolo elemento, se presente, dentro il json indicato
server.get("/timeline/:id", (req, res) => {
  db.get(
    "SELECT rowid AS id, * FROM timeline WHERE rowid = $id",
    {
      $id: parseInt(req.params.id),
    },
    function (err, row) {
      if (err) {
        console.error(err);
        return res.status(400).send();
      }

      return res.status(row ? 200 : 404).send(row);
    }
  );
});

// rispondo con "ok POST" alle chiamate con metodo "POST" che ricevo su "/timeline"
server.post("/timeline", (req, res) => {
  db.serialize(() => {
    // preparo uno statement, un istruzione di inserimento da eseguire
    const stmt = db.prepare(
      "INSERT INTO timeline VALUES ($year, $company, $role, $description, $link)",
      {
        $year: req.body.year,
        $company: req.body.company,
        $role: req.body.role,
        $description: req.body.description,
        $link: req.body.link,
      }
    );

    // eseguo l'istruzione (lo statement)
    // accedo a this, per farlo non posso usare le
    // arrow function, ma devo usare la forma classica
    // esempio `function(){}`

    stmt.run(function () {
      // inserimento ok, leggo l'ultima riga inserita che dovrò mandare al client
      db.get(
        "SELECT rowid AS id, * FROM timeline WHERE rowid = $id", // query
        {
          $id: this.lastID,
        }, // parametri per la query
        function (err, row) {
          // callback da eseguire quando ho terminato la query
          // se c'è un errore `err` è valorizzato, altrimenti no
          if (err) {
            // c'è un errore, termino l'esecuzione e mando un messaggio in console e al client
            console.error(err);
            return res
              .send(400)
              .send("Inserimento completato, errore nella lettura dei dati");
          }

          // err non è valorizzato, quindi invio i dati che ricevo su `row`
          // al client
          return res.send(row);
        }
      );
    });

    // termino lo statement
    stmt.finalize();
  });
});

// rispondo con "ok PUT con id..." alle chiamate con metodo "PUT" che ricevo su "/timeline/:id"
// esempio di query da eseguire
// `UPDATE timeline SET year = 2025, company = "Bianchi" WHERE rowid = 75;`
server.put("/timeline/:id", (req, res) => {
  db.serialize(() => {
    db.run(
      `UPDATE timeline 
       SET year = $year, 
           company = $company, 
           role = $role, 
           description = $description, 
           link = $link 
       WHERE rowid = $id`,
      {
        $id: parseInt(req.params.id),
        $year: req.body.year,
        $company: req.body.company,
        $role: req.body.role,
        $description: req.body.description,
        $link: req.body.link,
      },
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).send("Errore durante l'aggiornamento");
        }

        if (this.changes === 0) {
          return res.status(404).send("Elemento non trovato");
        }

        // recupero il record aggiornato da restituire
        db.get(
          "SELECT rowid AS id, * FROM timeline WHERE rowid = $id",
          { $id: parseInt(req.params.id) },
          function (err, row) {
            if (err) {
              console.error(err);
              return res
                .status(500)
                .send("Errore nel recupero del dato aggiornato");
            }

            return res.status(200).send(row);
          }
        );
      }
    );
  });
});

// rispondo con "ok PATCH con id..." alle chiamate con metodo "PATCH" che ricevo su "/timeline/:id"
server.patch("/timeline/:id", (req, res) => {
  res.status(202).send({
    id: 100,
    year: 2025,
    company: "ACME",
    role: "Sviluppatore Junior",
    description:
      "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    link: "https://google.com",
  });
});

// rispondo con "ok DELETE con id..." alle chiamate con metodo "DELETE" che ricevo su "/timeline/:id"
server.delete("/timeline/:id", (req, res) => {
  db.serialize(() => {
    db.run(
      "DELETE FROM timeline WHERE rowid = $id",
      {
        $id: parseInt(req.params.id),
      },
      function () {
        console.log("cancellazione", this);

        return res.status(this.changes === 0 ? 406 : 204).send();
      }
    );
  });
});

// configurazione terminata

// ora lo avvio sulla porta indicata da "port"
server.listen(port, () => {
  console.log("server in ascolto!");
});
