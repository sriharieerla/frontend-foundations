const { write } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<html><title>ExpressJS FrameWork</title></head>");
  res.write("<body><h2>Hello from Node.js server!!!</h2></body>");
  res.write("</html>");
  res.end();
});
server.listen(8000, () => {
  console.log("Server Listening on port 8000");
});
