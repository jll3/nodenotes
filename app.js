//CREATE NEW MODULE EXAMPLE
var logger = require('./logger');
logger('Messagee');

//PATH MODULE EXAMPLE
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS MODULE EXAMPLE
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);//ES6 / ES2015 / ECMAScript 6
console.log(`Free Memory: ${freeMemory}`);//ES6 / ES2015 / ECMAScript 6

//FILE SYSTEM MODULE EXAMPLE synchronous
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

//FILE SYSTEM MODULE EXAMPLE asynchronous 
const fs = require('fs');
fs.readdir('./', function(err, files){
	if(err) console.log('Error', err);
	else console.log('Result', files);
});

//EVENTS MODULE EXAMPLE
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});//register listener
logger.log('message');

//HTTP MODULE EXAMPLE
const http = require('http');
const server = http.createServer((req,res) => {
	if(req.url === '/'){
		res.write('HelloWorld');
		res.end();
	}
	if(req.url === '/api/courses'){
		res.write(JSON.stringify([1,2,3]));
		res.end();
	}
});
server.listen(3000);
console.log('Listening on port 3000...');

//HTTP MODULE EXAMPLE
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('test.html', (err, html) => {
	if(err){
		throw err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end('Hello W');
	});
	server.listen(port, hostname, () => {
		console.log('Server started on port ' + port);
	});
});