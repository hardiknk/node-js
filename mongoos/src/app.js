//this code for mongoose 
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/TestDb", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successfully...")).catch((err) => {
    console.log(err);
});
// mongoose.connect("mongodb://127.0.0.1:27017/TestDb");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: false,
    }
});

const userDetail = new mongoose.model("User", userSchema);

// const createDocument = async () => {

//     try {
//         //insert only one document at a time.
//         const userInsertData = new userDetail({
//             name: "Hardik <.L ",
//             surname: "Kanzariya",
//             active: true,
//         });
//         // const result = await userInsertData.save();

//         //if insert multiple documents so 
//         const userFirst = new userDetail({
//             name: "Hardik First ",
//             surname: "Kanzariya",
//             active: true,
//         });
//         const userSecond = new userDetail({
//             name: "Hardik Second ",
//             surname: "Kanzariya",
//             active: true,
//         });
//         const userThird = new userDetail({
//             name: "Hardik Third",
//             surname: "Kanzariya",
//             active: true,
//         });

//         const result = await userDetail.insertMany([userFirst, userSecond, userThird]);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// createDocument();

// const userInsertData = new userDetail({
//     name : "Hardik ",
//     surname : "Kanzariya",
//     active : true,
// });


//reading the data 
const showData = async () => {
    const usersData = await userDetail.find();
    console.log(usersData);
}
showData();
