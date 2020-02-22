const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.get('/get/users/', UserController.controllerGetAllUsers);
router.get('/get/users/:id', UserController.controllerGetSingleUser);
router.post('/create/users', UserController.controllerCreateNewUser);
router.patch('/update/users/:id', UserController.controllerUpdateUser);
router.delete('/update/users/:id', UserController.controllerDeleteUser);



module.exports = { router };