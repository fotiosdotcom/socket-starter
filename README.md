# socket-starter

# websocket (ws) and socket.io are very different, socket.io is built on top of websockets

# https://github.com/websockets/ws
# https://github.com/socketio/socket.io

# tutorials
# https://quickstarts.postman.com/guide/websockets_node/index.html
# https://blog.postman.com/postman-now-supports-socket-io/

# nginx
# /opt/homebrew/etc/nginx/nginx.conf
# /opt/homebrew/etc/nginx/servers/*
# nginx -t && brew services restart nginx
# tail -f /opt/homebrew/var/log/nginx/error.log /opt/homebrew/var/log/nginx/access.log
# cat /dev/null > /opt/homebrew/var/log/nginx/access.log && cat /dev/null > /opt/homebrew/var/log/nginx/error.log  && tail -f /opt/homebrew/var/log/nginx/error.log /opt/homebrew/var/log/nginx/access.log
# https://socket.io/docs/v4/reverse-proxy/

# nodejs
# "socket.io-client": "^4.2.0", better logging, discovered ECONNREFUSED error
# npm uninstall socket.io-client && npm install socket.io-client@4.2.0
# cat node_modules/socket.io-client/dist/socket.io.js | more
# add this to nginx if you get TransportError. listen [::]:3333;

# js
# https://cdnjs.com/libraries/socket.io
# <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.2.0/socket.io.js"></script>
# no debug support in versions after 4.2.0
# https://socket.io/blog/socket-io-4-3-0/
# localStorage.debug = '*'; 4.2.0 and prior

# cors
# this might be needed in the nodejs server, but probably not
# const options = { cors: { origin: '*' } }
# const io = new Server(server, options);

# test
# socketio & ws: https://www.postman.com/
# ws only: https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo?hl=en
# 1. client-index.html
# 2. DEBUG=* node client.js
# 3. postman (workspace > new websocket request > socket.io above url)
# use 3333 for proxy, 3000 for direct connection
# all valid, transports not needed
# const socket = io('ws://localhost:3000', { transports: ['websocket'] });
# const socket = io('http://localhost:3000', { transports: ['websocket'] });
# const socket = io('ws://localhost:3000')
# const socket = io('http://localhost:3000')

# CommonJS vs ES Module
# const io = require('socket.io-client');
# import io from 'socket.io-client';