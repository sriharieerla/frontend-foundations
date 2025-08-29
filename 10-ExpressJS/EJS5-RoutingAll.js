var myexpress = require("express");
var app = myexpress();
var port = 8000;
app.get("/", (req, res) => {
  res.send("Hello World from ExpressJS....");
});
app.get("/home", (req, res) => {
  res.send("Display from home page");
});
app.get("/about", (req, res) => {
  res.send("Display from about page");
});
app.get("/contact", (req, res) => {
  res.send("Display from conatct page");
});
app.listen(port, () => {
  console.log("Display on port 8000");
});
