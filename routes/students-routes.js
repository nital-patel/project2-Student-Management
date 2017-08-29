const express = require('express');
const studentsController = require('../controllers/students-controller');
const studentsRouter = express.Router();

studentsRouter.get('/', studentsController.index)

module.exports = studentsRouter;
