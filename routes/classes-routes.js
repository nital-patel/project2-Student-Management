const express = require('express');
const classesController = require('../controllers/classes-controller');
const classesRouter = express.Router();

classesRouter.get('/', classesController.index);
classesRouter.get('/:id/edit', classesController.edit);
classesRouter.get('/new', classesController.new);
classesRouter.get('/:id', classesController.show);
classesRouter.put('/:id', classesController.update);
classesRouter.post('/', classesController.create);
classesRouter.delete('/:id', classesController.destroy);

module.exports = classesRouter;
