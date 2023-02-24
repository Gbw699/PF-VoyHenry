const mercadopago = require('mercadopago')
const productModel = require('../libs/models/products.model')
const { CustomError } = require('../middlewares/error.handler')


class ProductsService {

  constructor(){

  }

  /* create product */

  async create ({ title, price, detail, mainImage, availability, category, images}) {

    const newProduct = await productModel.create({

      title: title,
      price: price,

      category: category,

      detail: detail,
      mainImage: mainImage,

      images: images,

      availability: availability,
    })

    return {
      message: "Create",
      data: {
        newProduct
      }
    }

  }

  /* find all products || Filter*/

  async find (query) {

    const options = {

      order: [['id', 'ASC']]
    }

    if (query.order){
      if (query.order == 'alfabetico'){

        options.order = [['title', 'ASC']]
      } else if (query.order == 'reverso'){

        options.order = [['title', 'DESC']]
      } else if (query.order == 'ascendente') {

        options.order = [['price', 'ASC']]
      } else if (query.order == 'descendente') {

        options.order = [['price', 'DESC']]
      }
    }

    if (query.category) {
      options.where = {
        category: query.category
      }
    }

    if (query.availability) {
      options.where = {
        available: query.availability === 'true'
      }
    }

    const products = await productModel.findAll(options)
    return {products}

  }

  /* find one product */

  async findOne (id) {

    const product = await productModel.findByPk(id)

    if (product === null) {
      throw new CustomError("Product not found", 404)
    }

    return product

  }

  /* Update product */

  async update ( id, { title, price, detail, mainImage, availability,category, images}) {

    const product = await productModel.findByPk(id)

    if (product === null) {
      throw new CustomError("Product not found", 404)
    }

    product.title =  title || product.title
    product.price = price || product.price
    product.detail = detail || product.detail
    product.mainImage = mainImage || product.mainImage
    product.availability = availability || product.availability
    product.category = category || product.category
    product.images = images || product.images

    await product.save()

    return product;

  }

  /* delete one product */

  async delete (id) {

    const deletedProduct = await productModel.destroy({
      where: {
        id: id
      }
    })

    if (deletedProduct === 0){
      throw new CustomError("Product not found", 404)
    }

    return {
        message: "deleted",
        data: {
          id: id
        }
      }

  }

  /* buy One product */

  async buyOne ({title, price}){

    let preference = {
      items: [
        {
          title: title,
          unit_price: price,
          currency_id: 'ARS',
          quantity: 1,
        }
      ],
      back_urls: {
        success: 'http://localhost:3030/api/v1/',
        failure: '',
        pendig: ''
      },
      auto_return: 'approved',
      binary_mode: true,
    };

    const response = await mercadopago.preferences.create(preference)
    
    return response.body.init_point
  }

  /* Chackour */
  async checkOut (body) {

    let preference = {
      items: [],
      back_urls: {
        success: 'http://localhost:3030/api/v1/',
        failure: '',
        pendig: ''
      },
      auto_return: 'approved',
      binary_mode: true,
    }

    body.forEach((products) => {
      preference.items.push({
        title: products.title,
        unit_price: products.price,
        quantity: products.quantity
      })
    });

    const response = await mercadopago.preferences.create(preference)

    return response.body.init_point
  }


}

module.exports = ProductsService;
