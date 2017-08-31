const express = require('express');
const studentsController = require('../controllers/students-controller');
const studentsRouter = express.Router();

studentsRouter.get('/', studentsController.index)
studentsRouter.get('/:id', studentsController.show)
studentsRouter.get('/:id/edit', studentsController.edit)
studentsRouter.put('/:id', studentsController.update)
studentsRouter.get('')

module.exports = studentsRouter;
