const BaseService = require('./../core/baseService');
const Todo = require('./todo');

class TodosService extends BaseService {
  constructor() {
    super(Todo);
  }
}

/**
 * Expose only the desired function
 * @public
 */
module.exports = new TodosService();
