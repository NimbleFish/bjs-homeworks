require('dotenv').config({path:`${__dirname}/.env`});
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const server = express();
const jsonParser = express.json();
server.use(cors());

const pathToHistory = path.resolve(__dirname, process.env.filePath);

let history = fs.readFileSync(pathToHistory, 'utf8')!== '' ? JSON.parse(fs.readFileSync(pathToHistory, 'utf8')) : [];

server.get('/notes', (req, res) => res.json(history));

server.post('/notes', jsonParser, (req, res) => {
    console.log(req);
    history.push({ 'id': uuidv4(), 'content': req.body.content });
    res.write('ok');
});

server.delete('/notes', (req, res) => {
    history = history.filter(el => el.id !== req.body.id);
    res.write('ok');
});

process.on('SIGTERM', () =>
    fs.writeFile(pathToHistory, JSON.stringify(history, null, 4), err => {
        if (err) console.log(err);
        process.exit();
    })
);

server.listen(process.env.SERVERPORT, () => console.log("Server started!"));