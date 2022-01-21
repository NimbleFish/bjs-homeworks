const express = require('express');
const cors = require('cors');

const server = new express();
const jsonParser = express.json();
server.use(cors());

server.get('/data', jsonParser, async (req, res) => {
    res.json({ "status": "ok" });
});

server.get('/error', jsonParser, async (req, res) => {
    res.statusCode = 500;
    res.json({ "status": "Internal Error" });
});

server.get('/loading', jsonParser, async (req, res) => {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
    res.json({ "status": "ok" });
});

const port = process.env.PORT || 7070;
server.listen( port, () => console.log("Server started on PORT: " + port) );