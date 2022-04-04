const http = require("http"); //Using http native module
const port = 3000;

// Creating server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hey dude!");
});

// Setting server port to 3000
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
