const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //
  //2nd Way
  //Reading from a stream
  //create a readable stream
  //handle stream events--> data,end and error
 
  // const rstream = fs.createReadStream("input.txt");
  // rstream.on("data", (chunkData) => {
  //   res.write(chunkData);
  // });
  // rstream.on("end",()=>{
  //   res.end();
  // })
  // rstream.on('error',()=>{
  //   res.end("file not found")
  // })

  //3rd Way
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
