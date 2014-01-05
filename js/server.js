var ejs, fs, http, posts, qs, renderForm, server, settings, template;

http = require('http');

fs = require('fs');

ejs = require('ejs');

qs = require('querystring');

settings = require('./settings');

server = http.createServer();

template = fs.readFileSync(__dirname + '/../public_html/bbs.ejs', 'utf-8');

posts = [];

renderForm = function(posts, res) {
  var data;
  data = ejs.render(template, {
    posts: posts
  });
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(data);
  return res.end();
};

server.on('request', function(req, res) {
  if (req.method === 'POST') {
    req.data = "";
    req.on("readable", function() {
      return req.data += req.read();
    });
    return req.on("end", function() {
      var query;
      query = qs.parse(req.data);
      posts.push(query.name);
      return renderForm(posts, res);
    });
  } else {
    return renderForm(posts, res);
  }
});

server.listen(settings.port, settings.host);

console.log("server listening ...");
