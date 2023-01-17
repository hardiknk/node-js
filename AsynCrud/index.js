const fs = require("fs");
fs.writeFile("crud.txt", "hii crud using asyncronus version", (err) => {
    // console.log(err);
});

// append the file 
fs.appendFile("crud.txt", "appended file", (err) => { console.log(err); });

//read the file and here utf-8 if buffering the data into the string 
fs.readFile("crud.txt", "utf-8", (err, data) => {
    // console.log(data);
});

// fs.rename("crud.txt", "curdsss.txt", (err) => { console.log(err); }); //rename the file


// fs.unlink("crud.txt", (err) => { console.log(err) }); //delete the file 