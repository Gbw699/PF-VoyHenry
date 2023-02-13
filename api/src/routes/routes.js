const { Router } = require('express')
const router = Router()

function routesApi(app) {

  app.use('/api/v1', router)

  /* Ruta de prueba borrar cuando se cree una ruta enserio */

  router.use('/', (req, res) => {

    res.send("Esta ruta funciona")

  })

}

module.exports = routesApi;
