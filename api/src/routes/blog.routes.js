const { Router } = require('express');
const UsersBlog = require('../services/blog.service')
const router = Router();
const service = new UsersBlog()


router.get('/', async (req, res, next) => {

  try {

    const blogs = await service.find()

    res.json(blogs)
  } catch (error) {

    next(error)
  }

});


router.get('/:titulo', async (req, res, next) => {

  try {

    const { titulo } = req.params;

    const blog = await service.findOne(titulo)
 console.log(blog)
    res.json(blog)

  } catch (error) {

    next(error)
  }

});


  router.post('/', async (req, res, next) => {

    try {



      const {username, titulo, contenido, rating} = req.body;

      const createdBlog = await service.create(username,titulo, contenido, rating)

      res.json(createdBlog)
    } catch (error) {

      next(error)
    }

  });


router.patch('/:titulo', (req, res, next) => {

  try {

    //const { userName } = req.params

    const body = req.body;

    const updatedBlog = service.update( body)

    res.json(updatedBlog)
  } catch (error) {
    next(error)
  }

});


router.delete('/:titulo', (req, res, next) => {

  try {

    const { titulo } = req.params

    const deletedBlog = service.delete(titulo)

    res.json(deletedBlog)
  } catch (error) {

    next(error)
  }

});



module.exports = router;
