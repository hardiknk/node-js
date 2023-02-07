const express = require("express");
const app = express();
const hbs = require("hbs");

const path = require("path");

//1. install and set the view engine hbs and ther are jade pug template engine also 
app.set('view engine', 'hbs');


//2. res.render so we can call the file which we want to render \

//customize the view direcotry 
const viewExicutionPart = path.join(__dirname, "../views");
app.set('views', viewExicutionPart);

//setting the partials 
//partials means when we check the part of the body is repeating so many times.
// like header is repeating for all part so we can use this as a partials.
const partialsPath = path.join(__dirname, '../partials');
// const staticPath = path.join(__dirname, '../public');
// // app.use(express.static(staticPath));

hbs.registerPartials(partialsPath);
app.get("/", function (req, res) {
    res.render("index", {
        fullName: "Hardik Kanzariya", //here we are passign the index.hbs file for fullName
    });
});




app.get("/about", function (req, res) {
    res.send(" <h2> welcome to the about page <h2>");
});


app.get("/contact", function (req, res) {
    res.status(500).send("welcome to the contact page");
});

//when any route is not found then we use app.get("*")
app.get("*", function (req, res) { 
    res.render('notFound');    
});

app.listen(5002, () => {
    console.log("hello listining from 5002");
});
