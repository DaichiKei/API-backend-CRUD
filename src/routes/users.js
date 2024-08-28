const express = require('express');
const usersController = require('../controllers/users');

const routes = express.Router();

routes.post('/', usersController.createUser);
routes.get('/', usersController.getAllUsers);
routes.get('/:username', usersController.getUser);
routes.patch('/:username', usersController.updateUser);
routes.delete('/:username', usersController.deleteUser);

module.exports = routes;