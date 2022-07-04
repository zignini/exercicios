// Bibliotecas
const http = require('node:http');
const url = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // Pegar a pergunta na URL 
  const reqUrl = req.url;
  const params = queryString.parse(url.parse(reqUrl, true).search)
  
  // console.log(params)

  // Verificar pergunta e escolher resposta
   
  let resposta;
  
  if (params.pergunta == "melhor-filme") {
    resposta = "Star Wars";
  } else if (params.pergunta == "melhor-tecnologia-backend") {
    resposta = "Node.js"
  } else {
    resposta = "Não sei, desculpe :("
  };

  // Retornar a resposta 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
