const { Router } = require('express')
const usersRoutes = require("./users.routes")
const blogsRoutes = require("./blog.routes")
const router = Router()

function routesApi(app) {

  app.use("/api/v1", router)

  router.use("/users", usersRoutes)

  router.use("/blogs", blogsRoutes)

}

module.exports = routesApi;
