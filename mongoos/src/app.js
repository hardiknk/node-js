//this code for mongoose 
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/TestDb", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successfully...")).catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
        default: "yudiz"
    },
    active: {
        type: Boolean,
        required: false,
    }

});



