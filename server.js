import { createServer } from 'http';
const server = createServer();

import { Server } from "socket.io";

const io = new Server(server);

io.listen(3000);

import si from "systeminformation";

io.on('connection', client => {
  console.log('someone connected')

  setInterval(async () => {
    const cpuTemp = JSON.stringify(await si.currentLoad());
    client.emit('cpuTemp', cpuTemp);
  }, 1000);
});
