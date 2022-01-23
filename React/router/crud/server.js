const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const jsonParser = express.json();

let posts = [], nextId = 1;

const PORT = process.env.PORT || 7777;

server.get('/posts', (req, res) => res.json(posts));

server.post('/posts', jsonParser, (req, res) => {
    res.status(204);
    if (req.body.id !== 0) posts = posts.map(p => p.id !== req.body.id ? p : { ...p, content: req.body.content });
    else posts.push({ ...req.body, id: nextId++, created: Date.now() });
    res.send('ok');
});

server.delete('/posts/:id', jsonParser, (req, res) => {
    posts = posts.filter(el => el.id != req.params.id);
    res.status(204);
    res.send('ok');
});

server.listen(PORT, () => console.log("Server started at port: " + PORT))