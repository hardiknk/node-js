const myKey = "f577c93293d0e89a8bd986910c0b0360";
const fs = require("fs");
const http = require("http");

const homeFile = fs.readFileSync("home2.html", 'utf-8');

const reaplaceVal = (tempValue, orgVal) => {
    // console.log(orgVal);
    let temprature = tempValue.replace("{%temp_value%}", orgVal.main.temp);
    temprature = temprature.replace("{%min_value%}", orgVal.main.temp_min);
    temprature = temprature.replace("{%max_value%}", orgVal.main.temp_max);
    // console.log(temprature);
    return temprature;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        var requests = require("requests");
        requests('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f577c93293d0e89a8bd986910c0b0360')
            .on('data', function (chunk) {
                // console.log(chunk)
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                const realTimeData = arrData.map((val) => {
                    reaplaceVal(homeFile, val);
                }).join("");

                res.write(realTimeData);
            })
            .on('end', function (err) {
                console.log(err);
                res.end();
            });
    }

});

server.listen("5005", "127.0.0.1");