const { Router } = require('express');
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, getProductSchema, updateProductSchema } = require('../schemas/products.schema')

const router = Router();
const service = new ProductsService()

/* Get all products */

router.get('/', async (req, res, next) => {

  try {

    const products = await service.find(req.query)

    res.json(products)
  } catch (error) {

    next(error)
  }

});

/* Get product by id */

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {

      const { id } = req.params;

      const product = await service.findOne(id)

      res.json(product)
    } catch (error) {

      next(error)
    }

});

/* Create new product */

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {

      const body = req.body;

      const createdProduct = await service.create(body)

      res.json(createdProduct)
    } catch (error) {

      next(error)
    }

});

/* update product info */

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {

      const { id } = req.params
      const body = req.body;

      const updatedProduct = await service.update(id, body)

      res.json(updatedProduct)
    } catch (error) {
      next(error)
    }

});

/* Delete product */

router.delete('/:id',
validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {

    try {

      const { id } = req.params

      const deletedProduct = await service.delete(id)

      res.json(deletedProduct)
    } catch (error) {

      next(error)
    }

});

module.exports = router;
