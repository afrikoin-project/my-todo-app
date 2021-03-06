const http = require('http')
const app = require('../app')

const server = http.createServer(app)

server.listen(process.env.PORT || 3000)

server
    .on('listening', () => console.log(`Server started on port : ${server.address().port}`))
    .on('error', error => console.log(`Error : ${error}`))