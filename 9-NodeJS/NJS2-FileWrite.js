const myfs = require("fs"); //file System
myfs.writeFileSync("myData.txt", "My Node Data Ram");
//Replace the Data
myfs.writeFileSync("myData.txt", "Welcome to NodeJs...");
/*
Creates a myData File and Writes--> My Node Data Ram..

*/
