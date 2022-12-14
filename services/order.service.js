const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')

class OrderService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    // const query = "SELECT * FROM tasks";
    // const [data] = await sequelize.query(query)
    // return data;
    const ordenes = await models.User.findAll()
    return ordenes
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
