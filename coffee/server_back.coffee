http = require('http')
fs = require('fs')
settings = require('./settings')
server = http.createServer()
server.on('request', (req, res)->
  msg = ''
  switch req.url
    when '/about'
      msg = 'about this page'
    when '/profile'
      msg = 'about me'
    else
      msg = 'wrong page'

  res.writeHead(200, {'Content-Type': 'text/plane'})
  #res.write('hello from ' + req.url)
  res.write(msg)
  res.end() #かならずいる
)

server.listen(settings.port, settings.host)
console.log("server listening ...")
