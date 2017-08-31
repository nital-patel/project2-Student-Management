const express = require('express');
const studentsController = require('../controllers/students-controller');
const studentsRouter = express.Router();

studentsRouter.get('/', studentsController.index)
studentsRouter.get('/:id', studentsController.show)

module.exports = studentsRouter;
