const { Router, text } = require('express');
const UsersBlog = require('../services/blog.service');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createBlogSchema,
  updateSchema,
  getBlogSchema,
  ratingSchema,
  favorites,
  coments,
} = require('../schemas/blog.schema');

const router = Router();
const service = new UsersBlog();

/* Get all Blogs */

router.get('/', async (req, res, next) => {
  try {

    const page = req.query.page || 1;
    const blogs = await service.find(req.query, page);

    let pages = ''

    if (blogs.blogsInFilter <= blogs.blogsLimit){
      pages = 1
    } else {
      pages = Math.ceil(blogs.blogsInFilter / blogs.blogsLimit);
    }

    const pageNumber = parseInt(page);
    const response = { blogs, pageNumber, pages };
    res.json(response);
  } catch (error) {
    next(error);
  }
});

/* Find One Blog */

router.get(
  '/:id',
  validatorHandler(getBlogSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const blog = await service.findOne(id);

      res.json(blog);
    } catch (error) {
      next(error);
    }
  }
);

/* Create new Blog */

router.post(
  '/',
  validatorHandler(createBlogSchema, 'body'),
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const body = req.body;

      const createdBlog = await service.create(body);

      res.json(createdBlog);
    } catch (error) {
      next(error);
    }
  }
);

/* Update Blog */

router.patch(
  '/:id',
  validatorHandler(getBlogSchema, 'params'),
  validatorHandler(updateSchema, 'body'),
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const body = req.body;

      const updatedBlog = await service.update(id, body);

      res.json(updatedBlog);
    } catch (error) {
      next(error);
    }
  }
);

/* Update Blog votes */

router.patch(
  '/:id/votes',
  validatorHandler(ratingSchema, 'body'),

  async (req, res, next) => {
    try {
      const { id } = req.params;

      const body = req.body;

      const updatedBlog = await service.updateVotes(id, body);

      res.json(updatedBlog);
    } catch (error) {
      next(error);
    }
  }
);

/* Delete Blog */

router.delete(
  '/:id',
  validatorHandler(getBlogSchema, 'params'),
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedBlog = await service.delete(id);

      res.json(deletedBlog);
    } catch (error) {
      next(error);
    }
  }
);

/* Create Comment */

router.post(
  '/:id/comment',
  validatorHandler(getBlogSchema, 'params'),
  validatorHandler(coments, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const createdPlan = await service.createComment(id, body);

      res.json(createdPlan);
    } catch (error) {
      next(error);
    }
  }
);

/* Get comment */

router.get(
  '/:id/comment',
  validatorHandler(getBlogSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const createdComment = await service.getComment(id);

      res.json(createdComment);
    } catch (error) {
      next(error);
    }
  }
);



/* Create favorite blog */

router.post(
  '/:id/favorite',
  validatorHandler(getBlogSchema, 'params'),
  validatorHandler(favorites, 'body'),
  async (req, res, next) => {
    try {

      const { id } = req.params;

      const body = req.body;

      const blogAddFavorite = await service.addBlogFavorite(id, body);

      res.json(blogAddFavorite);
    } catch (error) {
      next(error);
    }
  }
);

/* Get favorite blogs by nickname */

router.get(
  '/:userNickName/favorite',
  validatorHandler(favorites, 'params'),
  async (req, res, next) => {
    try {
      const  {userNickName}  = req.params;

      const favoriteBlogs = await service.getFavoriteBlogs(userNickName);

      res.json(favoriteBlogs);
    } catch (error) {
      next(error);
    }
  }
);

/* Get all users with blogid in favorite */

router.get(
  '/:id/blogfavorite',
  validatorHandler(getBlogSchema, 'params'),
  async (req, res, next) => {
    try {
      const  { id }  = req.params;

      const createdComment = await service.getFavoriteUsers(id);

      res.json(createdComment);
    } catch (error) {
      next(error);
    }
  }
);

/* Delete Blog favorite */

router.delete(
  '/:id/favorite',
  validatorHandler(getBlogSchema, 'params'),
  validatorHandler(favorites, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const body = req.body;

      const deletedBlog = await service.deleteFavoriteBlog(id, body);

      res.json(deletedBlog);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
