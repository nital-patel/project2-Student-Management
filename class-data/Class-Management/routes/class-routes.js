const express = require('express');
const classController = require('../controllers/class-controller');
const classRouter = express.Router();

classRouter.get('/', classController.index)

module.exports = classRouter;