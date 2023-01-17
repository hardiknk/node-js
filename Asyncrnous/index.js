const fs = require('fs'); // core module import syntex
// here third callback funtion first argument is error
// fs.writeFile("bio.txt", "hii hardik kanzariydd a", (err) => { //another is writeFileSysn() function but this is writeFile() asyncronus funciton
//     console.log(err);
// });

// // fs.writeFileSync("bio.txt", "hardik kanzariya");
// fs.appendFile('bio.txt', " how are you", (err) => {
//     console.log("error" + err);
// });

// fs.readFile("bio.txt", 'UTF-8', (err, data) => { //when read then passing the two arguments second is data and error is first arguments
//     console.log(data);
// });

// ============= syncronus  ====== checking how exicute and time taken in sysncronus and asyncronus function 
// const readF = fs.readFileSync("bio.txt", "UTF-8");
// console.log(readF);
// console.log("hii hardik kanzairya");

// //reding the file using asyncronus type 
// console.log("before  asyncronus");
// fs.readFile('bio.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log("after asyncronus");
