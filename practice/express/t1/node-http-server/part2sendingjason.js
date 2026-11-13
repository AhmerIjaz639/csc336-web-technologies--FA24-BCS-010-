const http = require("http");

const server = http.createServer((req, res) => {
  const body = JSON.stringify({ message: "Hello from Node!" });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(body);
});

server.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});