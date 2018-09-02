/**
 * Module dependencies.
 * @private
 */
const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./todosController');

/**
 * Module variables.
 * @private
 */
const router = express.Router();

/**
 * General middleware
 */
router.use(bodyParser.json());

/**
 * API definition.
 * @public
 */
router.get('/', todoController.getAll.bind(todoController));

router.get('/:id', todoController.get.bind(todoController));

router.post('/', todoController.save.bind(todoController));

router.patch('/:id', todoController.update.bind(todoController));

router.delete('/:id', todoController.delete.bind(todoController));

module.exports = router;
