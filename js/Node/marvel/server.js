import {createServer } from 'http';
import { stat, createReadStream } from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
	let htmlFile = '';
	switch(req.url) {
		case '/':
			htmlFile = 'index.html';
			break;
		case '/about':
			htmlFile = 'about.html';
			break;
		default:
			break;
	}

	if(htmlFile)
		render(res, htmlFile);
});

function render(res, htmlFile) {
  	stat(`./${htmlFile}`, (err, stats) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
  		if(stats) {
		  	createReadStream(htmlFile).pipe(res);
  		} else {
  			res.statusCode = 404;
  			res.end('Sorry, page not found!');
  		}
  	});
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

