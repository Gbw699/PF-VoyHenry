const productModel = require('../libs/models/products.model')

class ProductsService {

  constructor(){

  }

  /* create product */

  async create () {

  }

  /* find all products */

  async find () {

    const products = await productModel.findAll()
    return {products}

  }

  /* find one product */

  async findOne () {

  }

  async update () {

  }

  /* delete one product */

  async delete () {

  }

}

module.exports = ProductsService;
