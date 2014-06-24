/**
 * HTTP server
 */

var express = require('express');
var app     = express();
var server  = require('http').Server(app);

var port = Number(process.env.PORT) || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));

/**
 * PChat server
 */

var io = require('socket.io')(server);
var randomName = require(__dirname + '/lib/randomName');
var names = {};

io.on('connection', function(socket) {
  names[socket.id] = getRandomName();
  io.emit('message', {
    text: '<strong>' + names[socket.id] + '</strong> has connected.',
    sender: 'system'
  });

  handleMessageBroadcasting(socket);

  socket.on('disconnect', function() {
    io.emit('message', {
      text: '<strong>' + names[socket.id] + '</strong> has disconnected.',
      sender: 'system'
    });

    delete names[socket.id];
  });
});

function getRandomName() {
  do {
    name = randomName.generate();
  } while (name in Object.keys(names));
  return name;
}

function handleMessageBroadcasting(socket) {
  socket.on('message', function(message) {
    if (message.sender == 'system') {
      io.emit('message', message);
    } else {
      io.emit('message', {
        text: message.text,
        sender: names[socket.id]
      });
    }
  });
}
