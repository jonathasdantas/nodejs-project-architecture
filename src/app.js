/**
 * Module dependencies.
 * @private
 */
const express = require('express');
const initDb = require('./db');

const app = express();

/**
 * Route assigments.
 * @private
 */
app.use('/', require('./core/api'));
app.use('/users', require('./users/usersAPI'));
app.use('/todos', require('./todos/todosAPI'));

/**
 * Init tasks.
 */
initDb();

/**
 * Module api.
 * @public
 */
module.exports = app;
