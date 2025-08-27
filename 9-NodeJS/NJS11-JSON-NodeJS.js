//Integration with Node with JSON : Data write and read
const fs = require("fs");
const bioData = {
  name: "Rise",
  age: 24,
  skill: "NodeJs Programmer",
};
console.log(bioData);
const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json", jsonData, (err) => {
  console.log("Process Completed...");
  console.log(jsonData);
});
fs.readFile("testjson.json", "utf-8", (err, data) => {
  console.log(data);
});
