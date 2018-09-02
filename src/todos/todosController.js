const todosService = require('./todosService');
const BaseController = require('./../core/baseController');

class TodosController extends BaseController {
  constructor() {
    super(todosService);
  }
}

/**
 * Expose the object.
 * @public
 */
module.exports = new TodosController();
