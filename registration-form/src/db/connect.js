const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/students").then(()=>{
    console.log("connection established sucessfully");
}).catch((err)=>{
    console.log(err);
});