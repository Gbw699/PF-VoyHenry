const { Router } = require('express');
const UsersBlog = require('../services/blog.service')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const { createBlogSchema, updateSchema, getBlogSchema, ratingSchema } = require('../schemas/blog.schema');

const router = Router();
const service = new UsersBlog()

/* Get all Blogs */

router.get('/', async (req, res, next) => {

  try {

    const page = req.query.page || 1
    const blogs = await service.find(req.query, page)
    const count = await service.count(req.query);
    const pages = Math.ceil(count / blogs.blogs.length);

    const pageNumber = parseInt(page);
    const response = { blogs, pageNumber, pages }
    res.json(response)
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
 passport.authenticate('jwt', {session: false}),
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
  passport.authenticate('jwt', {session: false}),
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

    /* Update Blog votes */

    router.patch('/:id/votes',
    validatorHandler(ratingSchema, "body"),

    async (req, res, next) => {

      try {

        const { id } = req.params

        const body = req.body;

        const updatedBlog = await service.updateVotes(id, body)

        res.json(updatedBlog)
      } catch (error) {
        next(error)
      }

    });



  /* Delete Blog */

router.delete('/:id',
  validatorHandler(getBlogSchema, 'params'),
  passport.authenticate('jwt', {session: false}),
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