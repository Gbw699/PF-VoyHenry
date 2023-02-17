const productModel = require('../libs/models/products.model')
const { CustomError } = require('../middlewares/error.handler')

class ProductsService {

  constructor(){

  }

  /* create product */

  async create ({ title, price, detail, mainImage, availability}) {

    const newProduct = await productModel.create({
      title: title,
      price: price,
      detail: detail,
      mainImage: mainImage,
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


  if (query.price == 'ascendente') {
    const products = await productModel.findAll({
      order: [['price', 'ASC']]
    })

    return {products}
  } else if (query.price == 'descendente') {

    const products = await productModel.findAll({
      order: [['price', 'DESC']]
    })

    return {products}
  } else if (query.order == 'alphabetical') {

    const products = await productModel.findAll({
      order: [['title', 'ASC']]
    })

    return {products}
  } else if (query.order == 'reverse') {

    const products = await productModel.findAll({
      order: [['title', 'DESC']]
    })

    return {products}
  } else {

    const products = await productModel.findAll()
    return {products}
  } 

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

  async update ( id, { title, price, detail, mainImage, availability}) {

    const product = await productModel.findByPk(id)

    if (product === null) {
      throw new CustomError("Product not found", 404)
    }

    product.title =  title || product.title
    product.price = price || product.price
    product.detail = detail || product.detail
    product.mainImage = mainImage || product.mainImage
    product.availability = availability || product.availability

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

}

module.exports = ProductsService;
