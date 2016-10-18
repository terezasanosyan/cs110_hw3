const http = require('http');

const httpServer = http.createServer(function (req, res) {
	
	if(req.url === '/1'){
		res.writeHead(200, "John Lennon -Imagine");
		res.end ('Imagine there's no heaven');
	}
	if (req.url === '/2') {
		res.writeHead(200, "It's easy if you try");
		res.end ('No hell below us');
	}
	if (req.url === '/3') {
		res.writeHead(200, "Above us only sky");
		res.end ( 'Imagine all the people');
	}
	if (req.url === '/4') {
		res.writeHead(200, "Living for today... Aha-ah...");
		res.end ('You may say I'm a dreamer');
	}
	if (req.url === '/5'){
		res.writeHead(200, "But I'm not the only one");
		res.end ('I hope someday you'll join us');
	}
	else {
		res.writeHead(404, "And the world will be as one");
		res.end("And the world will live as one.");
	}

}).listen(577);