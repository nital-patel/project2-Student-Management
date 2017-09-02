const express = require('express');
const classesController = require('../controllers/classes-controller');
const classesRouter = express.Router();

classesRouter.get('/', classesController.index);
classesRouter.get('/:id', classesController.show);

module.exports = classesRouter;
