const fs = require("fs");

// fs.writeFile(
//   "read.txt",
//   "Awesome Day",

//   (err) => {
//     console.log(err);
//   }
// );

// fs.appendFile(
//   "read.txt",
//   "Awesome Day",

//   (err) => {
//     console.log(err);
//   }
// );

// fs.readFile(
//   "read.txt",
//   "Awesome Day",

//   (err) => {
//     console.log(err);
//   }
// );

fs.readFile("read.txt", (err, data) => {
  console.log(data);
});
