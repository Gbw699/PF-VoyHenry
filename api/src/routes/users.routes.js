const { Router } = require('express');

const router = Router();

/* Get all users */

router.get('/', (req, res, next) => {

  try {

    res.json({message: "Esta ruta debería mostrar todos los usuarios"})
  } catch (error) {

    next(error)
  }

});

/* Get user by nickName */

router.get('/:nickName', (req, res, next) => {

  try {

    const { nickName } = req.params;
    res.json({userNickName: nickName})
  } catch (error) {

    next(error)
  }

});

/* Create new user */

router.post('/', (req, res, next) => {

  try {

    const { email, nickName, image, firstName, lastName } = req.body;

    res.json({
      message: "post user",
      data: {
        email: email,
        nickName: nickName,
        firstName: firstName,
        lastName: lastName,
        image: image
      }
    })
  } catch (error) {

    next(error)
  }

});

module.exports = router;
