// console.log("hii hardik kanzairya");
const fs = require("fs");
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // var fs = require('fs');
    // fs.readFile('text.json', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data);
    // });

    // const readStream = fs.createReadStream("bio.txt");
    // readStream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // readStream.on('end', () => {
    //     res.end();
    // });

    // // if file is not exists when we reading 
    // readStream.on("error", (err) => {
    //     console.log(err);
    //     res.end("file is not found");
    // });


    //2 nd way to read the data 
    const readStream = fs.createReadStream("bio.txt");
    readStream.pipe(res); // this function pipe is automatic read, writer and end the reponse in browser
    
});


// const readFile = fs.readFileSync('text.json');
// console.log(readFile);


server.listen(8005, '127.0.0.1');

