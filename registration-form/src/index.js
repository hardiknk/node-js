const express = require('express');
const app = express();
const port = 5003;
const path = require('path');
const hbs = require('hbs');

//connct the index.html file in node js index.html is located in public folder
// const static_path = path.join(__dirname, '../public/');
const templatePath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials');

// app.use(express.static(templatePath));

//hash the password 
const bcrypt = require('bcrypt');
const saltRound = 10;

const securePassword = async (password) => {
    return await bcrypt.hash(password, saltRound);
}

app.set('views', templatePath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath); //this is used for the common files.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('../src/db/connect');

const Student = require("./model/student");


app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/home", async (req, res) => {
    res.render("home");
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const isLogin = await Student.findOne({ email: email });
        // res.send(isLogin);
        if (isLogin) {
            const isValidPassword = await bcrypt.compare(password, isLogin.password);
            if (!isValidPassword) {
                res.send("Invalid password");
            }

            res.send(isLogin);
        } else {
            res.status(422).send("Invalid email.");
        }
    } catch (error) {
        res.status(422).send(error);
    }
});

app.post('/register-student', async (req, res) => {
    try {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const gender = req.body.gender;
        const password = await securePassword(req.body.password);

        const studentModel = new Student({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            gender: gender,
            password: password,
        });

        const afterAddData = await studentModel.save();
        res.status(200).send(afterAddData);
    } catch (error) {
        res.status(400).send(error);
    }
});
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(port);