const myhttp = require("http");
const server = myhttp.createServer((req, res) => {
  res.end("Hello from server side: !!!!!");
});
server.listen(9000, "127.0.0.1", () => {
  console.log("Listening on port 9000");
});
/*
npm install -g nodemon
nodeman filenamw.js
Listening on port 9000:RAM
  goto browser and tyor url http://localhost:9000
  HTTP status codes:
    200 to 299:SUCCES 400 to 499:Error 500 to 599
*/
