const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const aJson = {
    name: "crud",
    version: "1.0.0",
    description: "",
    main: "app.js",
    author: "",
    license: "ISC"
  };

const server = http.createServer((req, res) => {
  console.log(req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(aJson));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
