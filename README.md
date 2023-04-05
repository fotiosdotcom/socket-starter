# socket-starter

This is a starter template for setting up websockets using socket.io and the ws library.

## Libraries

- [socket.io](https://github.com/socketio/socket.io)
- [socket.io CDNJS](https://cdnjs.com/libraries/socket.io)
- [ws](https://github.com/websockets/ws)

## Tutorials

- [Postman Now Supports Socket.io](https://blog.postman.com/postman-now-supports-socket-io/)
- [WebSockets Node.js Quickstart](https://quickstarts.postman.com/guide/websockets_node/index.html)

## Server
- node server.js (socket.io)
- node server-ws.js (websocket)

## JavaScript Client Debugging

- No debug support in versions after 4.2.0
- [Socket.io 4.3.0 Release Notes](https://socket.io/blog/socket-io-4-3-0/)
- Use `<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.2.0/socket.io.js"></script>`
- Enable debugging `localStorage.debug = '*';` (4.2.0 and prior)

## Node.js Client Troubleshooting

- Edit: package.json: `socket.io-client`: "^4.2.0" better logging, discovered ECONNREFUSED error
- Install: `npm uninstall socket.io-client && npm install socket.io-client@4.2.0`
- Check version: `cat node_modules/socket.io-client/dist/socket.io.js | more`
- Add this to Nginx if you get `TransportError`: `listen [::]:3333;`

## Nginx Cheat Sheet

- [Socket.io Reverse Proxy](https://socket.io/docs/v4/reverse-proxy/)
- `/opt/homebrew/etc/nginx/nginx.conf`
- `/opt/homebrew/etc/nginx/servers/*`
- `nginx -t && brew services restart nginx`
- `tail -f /opt/homebrew/var/log/nginx/error.log /opt/homebrew/var/log/nginx/access.log`

## CORS

This might be needed in the Node.js server, but probably not.
- const options = { cors: { origin: '*' } }
- const io = new Server(server, options);

## Testing

- [Postman](https://www.postman.com/) (workspace > new websocket request > websocket or socket.io above url)
- [Simple WebSocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo?hl=en) (websocket only)
- JS open`client-index.html`
- Node `DEBUG=* node client.js`
- Use `3333` for nginx proxy or `3000` for direct connection
- All the following are valid, transports not needed
  - `const socket = io('ws://localhost:3000', { transports: ['websocket'] });`
  - `const socket = io('http://localhost:3000', { transports: ['websocket'] });`
  - `const socket = io('ws://localhost:3000')`
  - `const socket = io('http://localhost:3000')`

## CommonJS vs ES Module

- `const io = require('socket.io-client');`
- `import io from 'socket.io-client';`