const { Router } = require('express');

const router = Router();

/* Get all products */

router.get('/', async (req, res, next) => {

  try {

    const products = await service.find()

    res.json(products)
  } catch (error) {

    next(error)
  }

});

/* Get product by id */

router.get('/:id', async (req, res, next) => {
    try {

      const { id } = req.params;

      const product = await service.findOne(id)

      res.json(product)
    } catch (error) {

      next(error)
    }

});

/* Create new product */

router.post('/', async (req, res, next) => {
    try {

      const body = req.body;

      const createdProduct = await service.create(body)

      res.json(createdProduct)
    } catch (error) {

      next(error)
    }

});

/* update product info */

router.patch('/:id', async (req, res, next) => {

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

router.delete('/:id', async (req, res, next) => {

    try {

      const { id } = req.params

      const deletedProduct = await service.delete(id)

      res.json(deletedProduct)
    } catch (error) {

      next(error)
    }

});

module.exports = router;
