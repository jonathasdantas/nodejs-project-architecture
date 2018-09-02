/**
 * Module dependencies.
 * @private
 */
const express = require('express');

/**
 * Module variables.
 * @private
 */
const router = express.Router();

/**
 * API definition.
 * @public
 */
router.get('/', function(req, res) {
  res.status(404).json({ description: 'Endpoint not found.' });
});

module.exports = router;
