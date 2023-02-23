const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const connection = mongoose.connect("mongodb://localhost:27017/Post").then(() => {
    // console.log("connection established");
}).catch((err) => {
    console.log(err);
});
