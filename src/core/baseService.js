/**
 *
 * @class BaseService
 */
class BaseService {
  constructor(model) {
    this.model = model;
  }

  getAll() {
    return this.model.find({});
  }

  get(id) {
    return this.model.findById(id);
  }

  save(entity) {
    return new this.model(entity).save();
  }

  update(id, updatedEntity) {
    return this.model.findByIdAndUpdate(id, updatedEntity);
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseService;
