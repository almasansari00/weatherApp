const fs = require("fs");

//creating a new file
//fs.writeFileSync("read.txt","welcome");

//Append a existign File
// fs.appendFileSync("read.txt" ,"how are you  thank you");

//Read a file
//  const buf_data=  fs.readFileSync("read.txt");
//  console.log(buf_data.toString());

// fs.mkdirSync("practice");
// fs.writeFileSync("bio.txt","check it");
// fs.renameSync("bio.txt","mybio.txt");

//TO remove file
// fs.unlinkSync("practice/mybio.txt","practice/mybio.txt")

//To remove directory
fs.rmdirSync("practice")