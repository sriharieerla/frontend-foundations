var myexpress = require("express");
var app = myexpress();
var port = 7000;
app.get("/", (req, res) => {
  res.send("Hello World from ExpressJS....");
});
app.get("/about", (req, res) => {
  res.send("Display from About page");
});
app.get("/contact", (req, res) => {
  res.send("Display from conatct page");
});
app.listen(port, () => {
  console.log("Display on port 8000");
});
