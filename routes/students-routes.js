const express = require('express');
const studentsRouter = express.Router();
const studentsController = require('../controllers/students-controller');

studentsRouter.get('/', studentsController.index);
studentsRouter.get('/:id/edit', studentsController.edit);
studentsRouter.get('/new', studentsController.new);
studentsRouter.get('/:id', studentsController.show);
studentsRouter.put('/:id', studentsController.update);
studentsRouter.post('/', studentsController.create);
studentsRouter.delete('/:id', studentsController.destroy);


module.exports = studentsRouter;
