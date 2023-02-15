const { Router } = require('express')
const usersRoutes = require("./users.routes")
const plansRoutes = require("./plans.routes")
const router = Router()

function routesApi(app) {

  app.use("/api/v1", router)

  router.use("/users", usersRoutes)

  router.use("/plans", plansRoutes)

}

module.exports = routesApi;
