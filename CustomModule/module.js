//this function is private so we can use this file only 
//if we want to access this function outside of the file so we can module.exports = sum 
const sum = (a, b) => {
    return a + b;
}

const minus = (a, b) => {
    return a - b;
}

const multiple = (a, b) => {
    return a * b;
}





const myName = "Hardik Kanzariya";
// console.log(myName);

// module.exports = sum;   // this is for single function


// we want to multiple function so we do that way 
module.exports.sum = sum;
module.exports.minus = minus;
module.exports.myName = myName;