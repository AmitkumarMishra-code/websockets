const http = require('http').createServer();
const socket = require('socket.io')

const io = socket(http, {
    cors: { origin: '*' }
})

io.on('connection', (socket) => {
    console.log('Client connected ', socket.id)
    socket.on('message', (data) => {
        io.emit('message', `${socket.id.substring(0,4)} : ${data}`)
    })
})

const PORT = 3030;
http.listen(PORT, () => console.log(`Listening on http:localhost:${PORT}`))

// using ws and websocket API on client side

// const webSocket = require('ws')

// const PORT = 3030;

// const server = new webSocket.Server({
//     port: PORT
// })

// server.on('connection', (socket) => {
//     console.log('Someone connected')
//     socket.on('message', (message) => {
//         console.log(message)
//         socket.send('Received, Loud and Clear ' + Date.now() )
//     })
// })