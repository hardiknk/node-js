const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },

    sur_name: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email address has been taken."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        },
    },

});

const studentModel = new mongoose.model("student", studentSchema);

module.exports = studentModel;