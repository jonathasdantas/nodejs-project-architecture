const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose Schema
 */
const todoSchema = new Schema({
  name: String,
  description: String
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
