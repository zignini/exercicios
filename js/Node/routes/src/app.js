import { createServer } from 'http';
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {

  // Get the path in the URL to manually route
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;

  switch (path) {
    case "/":
    case "index":

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World');

      break

    case "/sobre":

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World');

      break

    default:

      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end("Service not found")

      break
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
