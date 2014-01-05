var fs, http, server, settings;

http = require('http');

fs = require('fs');

settings = require('./settings');

server = http.createServer();

server.on('request', function(req, res) {
  var msg;
  msg = '';
  switch (req.url) {
    case '/about':
      msg = 'about this page';
      break;
    case '/profile':
      msg = 'about me';
      break;
    default:
      msg = 'wrong page';
  }
  res.writeHead(200, {
    'Content-Type': 'text/plane'
  });
  res.write(msg);
  return res.end();
});

server.listen(settings.port, settings.host);

console.log("server listening ...");
