/**
 *
 * @class BaseController
 */
class BaseController {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    try {
      const entities = await this.service.getAll();
      res.json(entities);
    } catch (error) {
      res.status(500).send('getAll Errors');
    }
  }

  async get(req, res) {
    try {
      const entity = await this.service.get(req.params.id);
  
      if (entity) {
        res.json(entity);
      } else {
        res.status(404).json({ description: `id ${req.params.id} was not found` });
      }
    } catch (error) {
      res.status(500).send('get Error');
    }
  }

  async save(req, res) {
    try {
      const entitiy = await this.service.save(req.body);
      res.status(201).json(entitiy);
    } catch (error) {
      res.status(500).send('save Error');
    }
  }

  async update(req, res) {
    try {
      await this.service.update(req.params.id, req.body);
      res.json();
    } catch (error) {
      res.status(500).send('update Error');
    }
  }

  async delete(req, res) {
    try {
      await this.service.delete(req.params.id);
      res.status(205).json();
    } catch (error) {
      res.status(500).send('delete Error');
    }
  }
}

/**
 * Expose only the desired function
 * @public
 */
module.exports = BaseController
