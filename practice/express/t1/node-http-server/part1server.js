const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from ahmer ");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});