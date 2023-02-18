const { Router } = require('express');
const UsersBlog = require('../services/blog.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createBlogSchema, updateSchema, getBlogSchema } = require('../schemas/blog.schema')

const router = Router();
const service = new UsersBlog()

/* Get all Blogs */

router.get('/', async (req, res, next) => {

  try {

    const blogs = await service.find(req.query)

    res.json(blogs)
  } catch (error) {

    next(error)
  }

});

  /* Find One Blog */

router.get('/:id',
validatorHandler(getBlogSchema, 'params'),
async (req, res, next) => {

  try {

    const { id } = req.params;

    const blog = await service.findOne(id)

    res.json(blog)
  } catch (error) {

    next(error)
  }

});

  /* Create new Blog */

  router.post('/',
  validatorHandler(createBlogSchema, "body"),
  async (req, res, next) => {

    try {

      const body = req.body;

      const createdBlog = await service.create(body)

      res.json(createdBlog)
    } catch (error) {

      next(error)
    }

  });

    /* Update Blog */

router.patch('/:id',
validatorHandler(getBlogSchema, 'params'),
validatorHandler(updateSchema, "body"),
async (req, res, next) => {

  try {

    const { id } = req.params

    const body = req.body;

    const updatedBlog = await service.update(id, body)

    res.json(updatedBlog)
  } catch (error) {
    next(error)
  }

});

  /* Delete Blog */

router.delete('/:id',
validatorHandler(getBlogSchema, 'params'),
async (req, res, next) => {

  try {

    const { id } = req.params

    const deletedBlog = await service.delete(id)

    res.json(deletedBlog)
  } catch (error) {

    next(error)
  }

});



module.exports = router;
