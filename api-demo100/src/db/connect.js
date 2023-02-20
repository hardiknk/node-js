const mongoose = require('mongoose');

//only schema defined fields are saved other fields are not saved.
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/olymics").then(() => {
    console.log("connection established successfully.");
}).catch((err) => {
    console.log(err + "no connections established");
});
