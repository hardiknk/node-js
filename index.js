const { log } = require("console");
const fs = require("fs"); // here fs is the core module and it is built in moduel because we can use the functionality for fs 

fs.writeFileSync('read.txt', "hii hardik kanzairya from botad"); // sync version if not file found then create and second argument is data 

fs.writeFileSync('read.txt', 'hii your are in offfice '); // if same file name then override the old data 

fs.appendFileSync('read.txt', "Hello Hardik"); //append the data into the read.txt file

let read_data = fs.readFileSync('read.txt');
// console.log(read_data); //output <Buffer 68 69 69 20 79 6f 75 72 20 61 72 65 20 69 6e 20 6f 66 66 66 69 63 65 20 61 6e 64 20 39 20 68 6f 75 72 20 63 6f 6d 70 6c 74 65 20 67 6f 20 74 6f 20 68 ... 3 more bytes>
//here we are getting the buffer data

// so we need to convert this data into string 
let orignal_data = read_data.toString(); 
// console.log(orignal_data); // hii your are in offfice and 9 hour complte go to home 
//here this is original value from getting the read.txt file 

//we want to rename read.txt file to readwriter.txt 

// fs.renameSync('read.txt','readwrite.txt');

// let yourName = 'hardik kanzairya';
// console.log(`your name is ${yourName}`);