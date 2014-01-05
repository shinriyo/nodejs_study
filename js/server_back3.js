var esj, fs, http, n, server, settings, template;

http = require('http');

fs = require('fs');

esj = require('ejs');

settings = require('./settings');

server = http.createServer();

template = fs.readFileSync(__dirname + '/../public_html/hello.ejs', 'utf-8');

n = 0;

server.on('request', function(req, res) {
  var data;
  n++;
  data = esj.render(template, {
    title: "hello",
    content: "<strong>World!</strong>",
    n: n
  });
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(data);
  return res.end();
});

server.listen(settings.port, settings.host);

console.log("server listening ...");
