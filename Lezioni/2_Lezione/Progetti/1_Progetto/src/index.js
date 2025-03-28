const http = require("http"),
  host = `127.0.0.1`,
  port = 3000;

http
  .createServer((req, res) =>
    res.writeHead(200, { "Content-Type": "text/plain" }).end("Hello World\n")
  )
  .listen(port, host, () =>
    console.log(`Server running at http://${host}:${port}/`)
  );
