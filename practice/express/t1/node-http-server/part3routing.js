const http = require("http");

function sendJson(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tasks") {
    return sendJson(res, 200, [{ id: 1, title: "Learn the http module" }]);
  }

  sendJson(res, 404, { error: `No route for ${req.method} ${req.url}` });
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});