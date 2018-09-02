/**
 * Module dependencies.
 * @private
 */
const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./usersController');

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
router.get('/', usersController.getAll.bind(usersController));

router.get('/:id', usersController.get.bind(usersController));

router.post('/', usersController.save.bind(usersController));

router.patch('/:id', usersController.update.bind(usersController));

router.delete('/:id', usersController.delete.bind(usersController));

module.exports = router;
