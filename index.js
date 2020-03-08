var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write(`[${new Date().toDateString()}] Hi there! I'm being served from ${os.hostname()}`)
  res.end()
}

http.createServer(handleRequest).listen(3000)
