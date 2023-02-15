const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/get-students', async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.send(allStudents);
    } catch (error) {
        res.send(error);
    }
});


// //using the promises insert 
// router.post('/add-student', (req, res) => {
//     const student = new Student(req.body);
//     student.save().then(() => {
//         res.status(201).send(student);
//     }).catch((err) => {
//         res.status(422).send(err.message);
//     });
// });


//using the async and await 
router.post('/add-student', async (req, res) => {
    try {
        const student = new Student(req.body);
        const cretedUser = await student.save();
        res.status(201).send(cretedUser);
    } catch (error) {
        res.status(422).send(error);
    }

});

// router.get('/get-students', async (req, res) => {
//     try {
//         const allStudents = await Student.find();
//         res.send(allStudents);
//     } catch (error) {
//         res.send(error);
//     }
// });


router.get('/get-student/:id', async (req, res) => {
    try {
        const studentData = await Student.findById(req.params.id);
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
});

router.patch('/update-student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
        res.status(200).send(updateStudent);

    } catch (error) {
        res.status(404).send(error);
    }
});

router.delete('/delete-student/:id', async (req, res) => {
    try {
        // const deleteStudent = await Student.findById(req.params.id);
        // const isDelete = deleteStudent.delete();

        //another method 
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.send(deleteStudent);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;