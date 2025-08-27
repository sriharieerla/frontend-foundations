//Require the http module
var http = require("http");
//Require your custom module
var dt = require("./myModule");
//Creat an http server
http
  .createServer(function (req, res) {
    //Set the Response header
    res.writeHead(200, { "Content-Type": "text/html" });
    //Use the custom module to get the data and time
    res.write("The date and time is currently: " + dt.myDateTime());
    //end the Response
    res.end();
  })
  .listen(8000);
/*
>nodemon filename.js
type this url in browser: http://localhost:8000/
*/
