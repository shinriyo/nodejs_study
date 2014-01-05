http = require('http')
fs = require('fs')
ejs = require('ejs')
qs = require('querystring')

settings = require('./settings')
server = http.createServer()
template = fs.readFileSync(__dirname + '/../public_html/bbs.ejs', 'utf-8')
posts = []
renderForm = (posts, res)->
  data = ejs.render(template, {
    posts: posts
  })
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(data)
  return res.end()

server.on('request', (req, res)->
  if req.method == 'POST'
    req.data = ""
    req.on("readable", ()->
      req.data += req.read() 
    )
    req.on("end", ()->
      query = qs.parse(req.data)
      posts.push(query.name)
      renderForm(posts, res)
    )
  else 
    renderForm(posts, res)
)

server.listen(settings.port, settings.host)
console.log("server listening ...")
