var io = require('socket.io')(3000);

console.log('server started!');
io.on('connection', function(socket) {
    console.log('client connected!');
    setInterval(function() {socket.emit('message', 'hello!\n')}, 2000);
    socket.on('message', function(data) {console.log('Message: '+data)});
});