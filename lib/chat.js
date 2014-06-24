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

  if (message.sender == 'system') {
    e.innerHTML = '<em>' + message.text + '</em>';
  } else {
    e.textContent = message.sender + ': ' + message.text;
  }
  
  messages.appendChild(e);
  e.scrollIntoView(false);
});
