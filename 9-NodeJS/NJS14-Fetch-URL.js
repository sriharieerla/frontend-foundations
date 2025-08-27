const https = require("https");
https
  .get("https://jsonplaceholder.typicode.com/todos/", (resp) => {
    let data = "";
    // A chunk of data has been recived.
    resp.on("data", (chunk) => {
      data += chunk;
    });
    //The whole response has been recevied.Print out the result
    resp.on("end", () => {
      console.log(JSON.parse(data));
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
