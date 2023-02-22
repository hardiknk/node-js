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
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
})

//define the auth token 
//when use the methods so we are working on the instance 
const jwt = require('jsonwebtoken');
schemaStudent.methods.generateStudentToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, "mynameishardikkanzariya");
        this.tokens = this.tokens.concat({ token: token });
        //here token is concat but we need to save the data into database 
        await this.save();
        return token;
    } catch (error) {
        console.log("this is a error" + error);
    }
}

const Student = new mongoose.model("Student", schemaStudent);
module.exports = Student;