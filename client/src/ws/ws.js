"use strict";

// create socket instance
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener('open', (event) => {
  socket.send('Hello Server! From', window.location.href);
  console.log(event, "<<<<<<<<<< event [open]");
});

// Listen for messages
socket.addEventListener('message', (event) => {
  console.log('Message from server "', event.data, '"');
  console.log(event, "<<<<<<<<<< event [message]");
});

export default socket;
