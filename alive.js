const http = require("http");
const url = require("url");

// Define the target URL for redirection
const targetUrl = "minecraft://?addExternalServer=ELECTRIC NETWORK|fun.minecraft.pe:25695";

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Check if the route matches /api/mc-server/Electric
  if (parsedUrl.pathname === "/api/mc-server/Electric") {
    // Redirect to the target URL
    res.writeHead(302, { "Location": targetUrl });
    res.end();
  } else {
    // Handle other routes or show a default message
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot started!");
  }
});

// Listen on port 8080
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
