// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Allow any origin for demo purposes ONLY. Do NOT use this in production.
// If you need credentials (cookies/auth), set `origin` to the exact URLs
// and add `credentials: true` instead of using '*'.
server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

server.use(middlewares)
//server.use(jsonServer.bodyParser)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/v1/*': '/$1'
}))





server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server