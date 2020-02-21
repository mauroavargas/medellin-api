const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
server.use(bodyParser.json());

// Models
const { Users } = require('../models');

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.get('/users', (req, res) => {
  Users.find()
    .then((users) => res.status(200).json({ message: 'Users obtained!', data: users }))
    .catch((err) => res.status(404).json({ message: 'Error obtaining users', data: err }));
});


server.get('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id, req.body)
    .then((users) => res.status(200).json({ message: 'User obtained!', data: users }))
    .catch((err) => res.status(404).json({ message: 'Error obtaining user', data: err }));
});


server.patch('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedUser) => res.status(200).json({ message: 'User updated!', data: updatedUser }))
    .catch((err) => res.status(404).json({ message: 'Error updating user', data: err }));
});


server.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.findByIdAndUpdate(id, { is_active: false, new: true })
    .then((userDeleted) => res.status(200).json())
    .catch((err) => res.status(404).json({ message: 'Error deleting user', data: err }));
});


// CRUD Users
server.post('/users', (req, res) => {
  console.log(req.body);

  // const first_name = req.body.first_name;
  // const last_name = req.body.last_name;
  // const email = req.body.email;

  const { first_name,
     last_name,
     email 
    } = req.body;

  const document = {
    first_name,
    last_name,
    email,
  };

  Users.create(document)
    .then((user) => res.status(201).json({ message: 'User created!', data: user }))
    .catch((err) => res.status(400).json({ message: 'Error creating user', errors: err }));

})





module.exports = { 
  server,
  PORT
}; 