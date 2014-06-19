;(function(exports) {
  /**
   * HTTP server
   */

  var express  = require('express');
  var app      = express();
  var server   = require('http').Server(app);

  server.listen(3000, function() {
    console.log("Listening at localhost:3000...");
  });

  app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });

  app.use(express.static(__dirname + '/public'));

  /**
   * PChat server
   */

  var io = require('socket.io')(server);

  io.on('connection', function(socket) {
    console.log(socket.id + ' has connected.');

    socket.on('disconnect', function() {
      console.log(socket.id + ' has disconnected.');
    });
  });
})(this);
