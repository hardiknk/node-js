require("../src/db/connection");
const express = require('express');
const app = express();
const mongodb = require('mongodb');
//import connection from db connection file 
// const Student = require('../src/models/student');

const port = 8005;

app.use(express.json());



//here we need to create routers 

//1 create a new router 
// const router = new express.Router();
//2 we need to define routes
// router.get('/get-students', async (req, res) => {
//     try {
//         const allStudents = await Student.find();
//         res.send(allStudents);
//     } catch (error) {
//         res.send(error);
//     }
// });
// 3. we need to register our routers
// app.use(router);

//external file in router folder student.js
const studentRoute = require('../src/router/student');
app.use(studentRoute);
app.listen(port);