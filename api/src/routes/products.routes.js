const { Router } = require('express');
const ProductsService = require('../services/products.service')
const { checkAdminRole } = require('../middlewares/auth.handler')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, getProductSchema, updateProductSchema, buyProductSchema } = require('../schemas/products.schema');
const { mercadopagoconfig } = require('../libs/mercadopago/mercadopago');
const MailerService = require('../services/Mailer.service');




mercadopagoconfig()
const router = Router();
const service = new ProductsService()
const mailer = new MailerService()


/* Get all products */

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {

    try {

      const page = req.query.page || 1
      const products = await service.find(req.query, page)

      let pages = ''
      if (products.productsInFilter <= products.productsLimit){
        pages = 1
      } else {
        pages = Math.ceil(products.productsInFilter / products.productsLimit);
      }

      const pageNumber = parseInt(page)
      const response = {products, pageNumber, pages}
      res.json(response)
    } catch (error) {

      next(error)
    }

});

/* Buy success */

router.get('/success', 
  async (req, res, next) => {

    try {

      mailer.buySuccess(req.query)
      res.redirect(`http://localhost:3000/home`)
    } catch (error) {

      next(error)
    }

});


/* Get product by id */

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createProductSchema, 'body'),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(buyProductSchema, 'body'),
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
  passport.authenticate('jwt', {session: false}),
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
