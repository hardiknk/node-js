require('dotenv').config({ path: '../.env' }); //here we are also giving the custom path useing the path: method 
require('../src/db/connect');
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const hbs = require('hbs');
const portNo = process.env.PORT || 8005;
var cookieParser = require('cookie-parser')
app.use(cookieParser())
const saltRound = 10;
const auth = require('../src/middleware/auth');
const jwt = require('jsonwebtoken');

const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

const securePassword = async (password) => {
    return await bcrypt.hash(password, saltRound);
}

app.set('views', templatePath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath); //this is used for the common files.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Student = require("./model/student");

app.get("/register", (req, res) => {
    // console.log('Cookies: ', req.cookies); //get the cookies from the browser 
    res.render("register");
});


app.post('/register-student', async (req, res) => {
    try {
        const { first_name, last_name, email, phone_number, gender } = req.body;
        const password = await securePassword(req.body.password);

        const studentModel = new Student({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            gender: gender,
            password: password,
        });

        //before save data generate the token 
        // const token = await studentModel.generateStudentToken();
        // console.log(token);

        const afterAddData = await studentModel.save();
        res.status(200).render("login");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/secret", auth, async (req, res) => {
    // console.log(req.user);
    res.render("secret");
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
        if (isLogin) {
            const isValidPassword = await bcrypt.compare(password, isLogin.password);
            if (!isValidPassword) {
                res.send("Invalid password");
            }

            //when we login then generate the token 
            const generateToken = await isLogin.generateStudentToken();
            res.cookie('jwt_test', generateToken, {
                expires: new Date(Date.now() + 300000),
                httpOnly: true
            });
            res.render("index");
        } else {
            res.status(422).send("Invalid email.");
        }
    } catch (error) {
        res.status(422).send(error);
    }
});

app.get('/logout', auth, async (req, res) => {
    try {
        res.send(req.user);
        req.user.tokens = req.user.tokens.filter((ele, index) => {
            ele != req.token;
        });
        
        res.clearCookie("jwt_test");
        await req.user.save();
        res.render("login");
    } catch (error) {
        console.log(error);
        // res.send(error);
    }

});

// const createToken = async () => {
//     //sign(payload, secret key)
//     const token = await jwt.sign({ _id: "HelloHardik" }, "hardikhardikhardikhardikhardikhardik", {
//         expiresIn: "2 seconds",
//     });
//     // console.log(token);

//     //verify the generated token  (token, secret key)
//     const retriveToken = await jwt.verify(token, "hardikhardikhardikhardikhardikhardik");
//     // console.log(retriveToken); //ouptput { _id: 'HelloHardik', iat: 1677045236 }
// }
// createToken();


app.listen(portNo);