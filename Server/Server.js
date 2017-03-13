var filePath = req.url;
if(filePath == '/')
	filePath = '/index.html';

filePath = __dirname+filePath;
var extname = path.ext;
var contentType = 'text/html';

switch(extname) {
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		 contentType = 'text/css';
		 break;
}

fs.exists(filePath,function(exists) {
if(exists) {
	fs.readFile(filepath,function(error,content) {
		if(error) {
			res.writeHEad(500);
			res.end();
		}
		else {
			res.writeHead(200, { 'Content-Type': contentType});
			res.end(content, 'utf-8')
		}
	});
}