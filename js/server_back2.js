var fs, http, server, settings;

http = require('http');

fs = require('fs');

settings = require('./settings');

server = http.createServer();

server.on('request', function(req, res) {
  return fs.readFile(__dirname + '/../public_html/hello.html', 'utf-8', function(err, data) {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/plane'
      });
      res.write("not found!");
      return res.end();
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    return res.end();
  });
});

server.listen(settings.port, settings.host);

console.log("server listening ...");
