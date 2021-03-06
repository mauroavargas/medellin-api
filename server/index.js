const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.get('/prueba', function(req, res) {
  res.send('Hola Mundo!');
});

module.exports = { 
  server,
  PORT
}; 