const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/students").then(() => {
    console.log("connection established...");
}).catch((err) => { console.log(err) });
