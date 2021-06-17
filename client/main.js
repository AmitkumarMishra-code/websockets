// let messageElement = document.getElementById('message')
let inputElement = document.getElementById('input')
let sendButton = document.getElementById('send')
const socket = io('ws://localhost:3030')
let chatElement = document.getElementById('chat-window')

socket.on('connect', () => {
    console.log('Connection Established')
})

socket.on('message', (data) => {
    let listElement = document.createElement('li')
    console.log(data)
    listElement.innerText = data
    chatElement.appendChild(listElement)
})

// let socket = new WebSocket('ws://localhost:3030')


// socket.onopen = (e) => {
//     console.log('Connected to server')
//     socket.send(`Swagat nahi karoge hamara!`)
// }

// socket.onmessage = (data) => {
//     messageElement.innerText = data.data
// }

sendButton.addEventListener('click', (e) => {
    console.log(inputElement.value)
    socket.send(inputElement.value)
})