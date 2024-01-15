//1 import json-server
const jsonserver = require('json-server')


//2 Create server
const server = jsonserver.create()


//3 setup path for db.json file
const router  = jsonserver.router('db.json')

//4 Return Middleware used by json server 
const middleware = jsonserver.defaults()

//5 setup port for server
const port = process.env.port || 3001

//6 use Middleware and router
server.use(middleware)
server.use(router)

//7 To run the server
server.listen(port,()=>{
    console.log('listing on port'+ port);
})
