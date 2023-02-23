const { Router } = require('express');
const ProductsService = require('../services/products.service')
const { checkAdminRole } = require('../middlewares/auth.handler')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, getProductSchema, updateProductSchema, buyProductSchema } = require('../schemas/products.schema');
const { mercadopagoconfig } = require('../libs/mercadopago/mercadopago');



mercadopagoconfig()
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
  passport.authenticate('jwt', {session: false}),
  checkAdminRole,
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
  passport.authenticate('jwt', {session: false}),
  checkAdminRole,
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
  passport.authenticate('jwt', {session: false}),
  checkAdminRole,
  async (req, res, next) => {

    try {

      const { id } = req.params

      const deletedProduct = await service.delete(id)

      res.json(deletedProduct)
    } catch (error) {

      next(error)
    }

});

/* Buy One Product */

router.post('/buy',
  validatorHandler(buyProductSchema, 'body'),
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {

      const body = req.body;

      const buyProducts = await service.buyOne(body)

      res.json(buyProducts)
    } catch (error) {

      next(error)
    }

});

/* CheckOut Product */

router.post('/checkout',
/*   validatorHandler(buyProductSchema, 'body'), */
/*   passport.authenticate('jwt', {session: false}), */
  async (req, res, next) => {
    try {

      const body = req.body;

      const buyProducts = await service.checkOut(body)

      res.json(buyProducts)
    } catch (error) {

      next(error)
    }

});


module.exports = router;
