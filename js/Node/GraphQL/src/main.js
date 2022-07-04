import { createServer } from "http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": 
      response.writeHead(200, {
        'Content-type': 'application/json' 
      });
      response.write(JSON.stringify({
        "aStatus": "OK"
      }));
      response.end(); 
      break;
    
    case "/authenticate":
      response.writeHead(200, {
        'Content-type': 'application/json' 
      });      
      response.write(JSON.stringify({
        "aStatus": "OK"
      }));
      response.end(); 
      break;

    default: {
      response.writeHead(404, "Not found");
      response.end();
    }

  }
});

const PORT = process.env.PORT ? parseInt (process.env.PORT) : 8000 ;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen( PORT, HOSTNAME,  () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
});

