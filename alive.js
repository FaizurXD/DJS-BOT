const http = require("http");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot started!");
});

// Listen on port 8080
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
