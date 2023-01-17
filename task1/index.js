const fs = require('fs');

const myBioData = {
    "name": "hardik",
    "age": 24,
    "address": "ahmedabad"
}

const convertToJson = JSON.stringify(myBioData);

fs.writeFile('bio.txt', convertToJson, (err) => {
    // console.log(err); 
});

//convert to object 
const covertObject = JSON.parse(convertToJson);
console.log(covertObject);