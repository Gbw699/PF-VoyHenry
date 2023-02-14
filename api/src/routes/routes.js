const { Router } = require('express')
const usersRoutes = require("./users.routes")
const router = Router()

function routesApi(app) {

  app.use("/api/v1", router)

  router.use("/users", usersRoutes)

}

module.exports = routesApi;
