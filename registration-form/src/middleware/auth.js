const jwt = require('jsonwebtoken');
const Register = require("../model/student");
// console.log("hello hardi k atuh is cal" );


const auth = async (req, res, next) => {
    try {
        const jwtToken = req.cookies.jwt_test;
        const verifyUser = jwt.verify(jwtToken, process.env.SECRET_KEY);
        // console.log(verifyUser);
        const studentData = await Register.findOne({ _id: verifyUser._id });
        req.user = studentData;
        req.token = jwtToken;
        next();

    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;