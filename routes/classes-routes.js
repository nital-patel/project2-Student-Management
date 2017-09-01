const express = require('express');
const classesController = require('../controllers/classes-controller');
const classesRouter = express.Router();

classesRouter.get('/', classesController.index)

module.exports = classesRouter;