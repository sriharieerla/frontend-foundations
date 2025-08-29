var express = require("express");
var app = express();
var port = 5500;
app.get("index.html", (req, res) => {
  res.sendFile("index.html");
});
//assuming app is express Object.
/*
app.get("/home", function (req, res) {
  res.sendFile("index.html");
});
app.get("/home", (req, res) => {
  res.send("home");
});*/
app.use(express.static("public"));
app.listen(port, () => {});
