const express = require("express");
const app = express();
const port = 3500;

app.get("/search", (req, ress) => {
  const qurey = req.query.q;
  ress.send(`Search Query: ${qurey}`);
});

app.listen(port, () => {
  console.log("Server running at 3500: Rise");
});
/*
//http://localhost:3500/search?q=hello*/
