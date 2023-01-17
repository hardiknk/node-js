// const customModule = require('./module');
// // console.log(module(2,34)); //if single then

// console.log(customModule.myName); //output Hardik Kanzariya 
// console.log(customModule.sum(12, 122)); // output 134
// console.log(customModule.minus(222, 34)); //output 188 



// new way using bobject destructuring 
const { minus, sum, myName } = require('./module'); // here the minus, sum, myName function is automatic destrucring . 
console.log(sum(12, 23)); // 35
console.log(minus(120, 23)); // 97 
console.log(myName); //Hardik Kanzariya 

