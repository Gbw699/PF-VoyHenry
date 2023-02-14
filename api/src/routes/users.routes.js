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

/*  */

module.exports = router;
