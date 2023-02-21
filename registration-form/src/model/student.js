const mongoose = require('mongoose');

const schemaStudent = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
})

const Student = new mongoose.model("Student", schemaStudent);
module.exports = Student;