const express = require("express");
const app = express();

const path = require("path");


const staticPath = path.join(__dirname, '../public');
console.log(staticPath);
app.use(express.static(staticPath));

app.get("/", function (req, res) {
    res.send("<h1> hii hardikss </h1>");
    // res.send(" <h3> hii hardik </h3>"); //with passing the html 

    // passing the data to json on browser  
    // res.send({
    //     name: "hardik",
    //     surname: "kanzariya",
    //     address: "kadar sheth ni vadi botad",
    // });
});


// console.log();

app.get("/about", function (req, res) {
    res.send(" <h2> welcome to the about page <h2>");
});




app.get("/contact", function (req, res) {
    res.status(500).send("welcome to the contact page");
});

app.listen(5002, () => {
    console.log("hello listining from 5002");
});
