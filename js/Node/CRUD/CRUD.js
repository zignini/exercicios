// Bibliotecas
const http = require('node:http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
const { Console } = require('node:console');

// Definição de endereço e URL
const hostname = '127.0.0.1';
const port = 3000;
var resposta;

// Implementação e regra de negócio

const server = http.createServer((req, res) => {

  const urlParse = url.parse(req.url, true);
  const params = queryString.parse(urlParse.search);
  const jsonParams = JSON.stringify(params);

  if (urlParse.pathname == "/criar") {
    
    fs.writeFile('./Users/' + params.id + '.json', jsonParams, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    resposta = "Usuário salvo com sucesso";

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  } else if (urlParse.pathname == "/selecionar") {

    var id = params.id;

      fs.readFile("./Users/" + id + ".json", "utf8", (err, data) => {
      resposta = data;
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  } else {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  };

  // switch (urlParse.pathname) {
  //   case "/criar":

  //     fs.writeFile('./Users/' + params.id + '.json', jsonParams, function (err) {
  //       if (err) throw err;
  //       console.log('Saved!');
  //     });

  //     resposta = "Usuário salvo com sucesso";

  //     res.statusCode = 201;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);

  //     break;

  //   case "/selecionar":

  //     var id = params.id;

  //     console.log(id)

  //     fs.readFile("./Users/" + id + ".json", "utf8", (err, data) => {
  //       resposta = data;

  //       console.log(data);
  //     });

  //     console.log(resposta);

  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);

  //     break;

  //   case "/atualizar":



  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);


  //     break;

  //   case "/remover":


  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);

  //     break;

  //   case "/" || "":

  //     resposta = "Seja bem-vindo(a)! Digite a operação no final da URL para continuar: 'criar', 'selecionar', 'atualizar', 'remover'."

  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);

  //     break;

  //   default:

  //     resposta = "Não encontrado. Desculpe!"

  //     res.statusCode = 404;
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.end(resposta);

  // };


  // Criar um usuário e atualizar um usuário
  // criar-usuario
  // selecionar-usuario


  // Buscar e selecionar um usuário 

  var idUsuario = params.id;



  // Remover um usuário

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
