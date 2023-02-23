require("./db/connect");
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const express = require('express');
const app = express();
const port = process.env.PORT || 5003;
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './templates/views'));

hbs.registerPartials("./templates/partials");

app.get('/', async (req, res) => {
    res.render('home');
});

app.get('/add-post', async (req, res) => {
    res.render('addPost');
});

app.post('/add-post', async (req, res) => {
    res.render(req.body);
});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port);