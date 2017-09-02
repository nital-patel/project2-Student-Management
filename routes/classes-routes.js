const express = require('express');
const classesController = require('../controllers/classes-controller');
const classesRouter = express.Router();

classesRouter.get('/', classesController.index);
classesRouter.get('/:id', classesController.show);
classesRouter.get('/:id/edit', classesController.edit);
classesRouter.get('/new', classesController.new);
classesRouter.post('/', classesController.create);

module.exports = classesRouter;
