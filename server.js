var io = require('socket.io')(3000);

console.log('server started!');
io.on('connection', function(socket) {
    console.log('client connected!');
    socket.on('message', function(data) {socket.broadcast.emit('message', data); console.log('Message: '+data);});
});