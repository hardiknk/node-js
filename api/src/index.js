require("../src/db/connection");
const express = require('express');
const app = express();
const mongodb = require('mongodb');
//import connection from db connection file 
const Student = require('../src/models/student');

const port = 8005;

//connect to mongodb

//this is for testing purposes
// app.get('/', (req, res) => {
//     res.send("hello hardik kanzariya");
// });
app.use(express.json());

// //using the promises insert 
// app.post('/add-student', (req, res) => {
//     const student = new Student(req.body);
//     student.save().then(() => {
//         res.status(201).send(student);
//     }).catch((err) => {
//         res.status(422).send(err.message);
//     });
// });


//using the async and await 
//using the promises insert 
app.post('/add-student', async (req, res) => {
    try {
        const student = new Student(req.body);
        const cretedUser = await student.save();
        res.status(201).send(cretedUser);
    } catch (error) {
        res.status(422).send(error);
    }

});
app.listen(port);