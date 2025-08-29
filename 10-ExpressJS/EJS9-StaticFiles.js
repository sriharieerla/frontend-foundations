const express = require("express");
const app = express();
const port = 3001;
//app.use(express.static("public"));
app.use(express.static("public1"));
app.listen(port, () => {
  console.log("Server running at 3000 port----");
});
