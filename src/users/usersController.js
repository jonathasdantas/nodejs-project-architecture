const usersService = require('./usersService');
const BaseController = require('./../core/baseController');

class UsersController extends BaseController {
  constructor() {
    super(usersService);
  }
}

/**
 * Expose the object.
 * @public
 */
module.exports = new UsersController();
