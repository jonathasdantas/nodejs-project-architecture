const BaseService = require('../core/baseService');
const User = require('./user');

class UsersService extends BaseService {
  constructor() {
    super(User);
  }
}

/**
 * Expose only the desired function
 * @public
 */
module.exports = new UsersService();
