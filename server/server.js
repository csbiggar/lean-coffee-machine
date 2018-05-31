var jsonServer = require('json-server')
var _us = require('underscore')
var fs = require('fs')

// Returns an Express server
var server = jsonServer.create()

// Allow CORS with localhost
server.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  return next();
});

// Add custom routes before JSON Server router

server.get('/cards', function (req, res) {
  var db = JSON.parse(fs.readFileSync('db.json'))
  res.jsonp(db.cards)
})

server.get('/unauthorized', function (req, res) {
  res.sendStatus(401)
})

server.get('/not-found', function (req, res) {
  res.sendStatus(404)
})

// Use default middleware (logger, static, cors and no-cache)
var middlewares = jsonServer.defaults()
server.use(middlewares)

// Use default router
var router = jsonServer.router('db.json')
server.use(router)

server.listen(4000, function () {
  console.log()
  console.log('  🚀  Serving db.json on http://localhost:4000')
  console.log()
})
