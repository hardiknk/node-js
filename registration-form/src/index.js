const express = require('express');
const app = express();
const port = 5002;
const path = require('path');
const hbs = require('hbs');

//connct the index.html file in node js index.html is located in public folder
// const static_path = path.join(__dirname, '../public/');

const templatePath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials');

// app.use(express.static(templatePath));


app.set('views', templatePath)
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath); //this is used for the common files.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    //when use the views engine then res.render() function use 
    res.render('index');
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post('/register', (req, res) => {
    console.log(req.body.first_name);
    res.send(req.body);
});
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(port);