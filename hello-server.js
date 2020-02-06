const http = require('http')

const server = http
  .createServer((req, res) => {
    if (req.url === '/foo') {
      res.writeHead(404, { 'Content-type': 'text/html' })
      res.end('<p>404 page not found</p>')
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello</h1>')
    res.write('<p>this is paragraph</p>')
    res.end()
  })
  .listen(8081)
