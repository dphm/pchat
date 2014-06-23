var socket = io.connect();

window.onload = function() {
  document.getElementById('message-text').focus();
};

var form = document.getElementById('message-form');
form.onsubmit = function(event) {
  var message = document.getElementById('message-text');
  socket.emit('message', {text: message.value});
  message.value = '';
  return event.preventDefault();
};

socket.on('message', function(message) {
  var messages = document.getElementById('message-list');
  var e = document.createElement('li');
  e.textContent = message.text;
  messages.appendChild(e);
});
