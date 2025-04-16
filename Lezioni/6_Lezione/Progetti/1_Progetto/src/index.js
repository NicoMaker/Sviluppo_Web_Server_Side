// importo i moduli necessari
const dotenv = require('dotenv');

// dico a dotenv di configurare process.env in modo che contenga
// tutte le variabili presenti nel file .env
dotenv.config();

// importo il modulo express
const express = require('express');

// configuro la porta del server dalla variabile SERVER_PORT
// definita dentro il file .env
const port = process.env.SERVER_PORT;

// 
// configuro il server
//

// creo un istanza del server express
const app = express();

// dico al server che i json che riceve vanno a popolare request.body
app.use(express.json())

// dico al server di esporre tutti i file della cartella `public` nella root
// del sito, esempio http://localhost:3000/image.jpg
app.use('/', express.static('public'));

// definisco una rotta `/` alla quale rispondo con `Hello!`
app.get('/', (_request, response) => {
    response.send('Hello GET!')    
})

app.get('/:id', (request, response) => {
    response.send(`Hello GET ${request.params.id}!`)    
})

/*
Equivale a quella sopra
app.get('/:id', (request, response) => {
    const {id} = request.params;
    response.send(`Hello GET ${id}!`)    
})
*/

// creo la risorsa e rispondo con 201 e il verso + "POST!"
app.post('/', (request, response) => {
    response.status(201).send(`${request.body.verso} POST!`)
})

app.put('/:id', (request, response) => {
    response.send(`Hello PUT ${request.params.id}!`)
})

app.patch('/:id', (request, response) => {
    response.send(`Hello PATCH ${request.params.id}!`)
})

app.delete('/:id', (request, response) => {
    response.send(`Hello DELETE ${request.params.id}!`)
})

// avvio il server
app.listen(port, (err) => {
    if (err) {
        // se c'è un errore mostralo in console ed esci dal processo
        console.error('Errore', err);
        process.exit();
    }

    // se tutto ok mostra il messaggio
    console.log(`Server in ascolto su http://localhost:${port}`)
});