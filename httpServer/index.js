const http = require("http");
const fs = require("fs");

// const url = require("url");
const server = http.createServer((req, res) => {
  const data=fs.readFileSync(`${__dirname}/userAPI/userAPI.json`, "utf-8");
    const objData = JSON.parse(data)

  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the home sides");
  } else if (req.url == "/about") {
    res.end("hello from the about sides");
  } else if (req.url == "/userAPI") {
    res.writeHead(200,{"content-type":"application/json"})
      res.end(objData[0].name);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1> 404 Page not Found </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
