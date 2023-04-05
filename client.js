import io from 'socket.io-client';

const socket = io('ws://localhost:3333', { transports: ['websocket'] })

socket.on('connect', () => {
    console.log('connected to server')
    socket.emit('message', 'hello server')
});

socket.on('message', (data) => console.log(`received: ${data}`))

socket.on('cpuTemp', (data) => console.log(`received: ${data}`))

socket.on('disconnect', () => console.log('disconnected from server'))

socket.on('error', (error) => console.log(`socket error: ${error}`))