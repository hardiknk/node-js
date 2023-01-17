const fs = require('fs');
fs.writeFileSync("bio.txt", "Hardik Kanzariya");
fs.appendFileSync("bio.txt", " From Botad");

const readData = fs.readFileSync('bio.txt', 'utf-8'); //reading the data 

//reaname the file 

fs.renameSync("bio.txt", "biodata.txt"); //biodata.txt file will be created 
// console.log(readData);
fs.rmdirSync("HardikCrud");