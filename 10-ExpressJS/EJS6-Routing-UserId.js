const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:id", (req, ress) => {
  ress.send(`User ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log("Server running at 3000: Rise");
});
/*
http://localhost:3000/user/123
*/
