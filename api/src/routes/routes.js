const { Router } = require('express')
const usersRoutes = require("./users.routes")
const plansRoutes = require("./plans.routes")
const blogsRoutes = require("./blog.routes")
const productsRoutes = require("./products.routes")
const sessionsRoutes = require("./sessions.routes")
const messagesRoutes = require("./messages.routes")
const authRoutes = require("./auth.routes")
const router = Router()

function routesApi(app) {

  app.use("/api/v1", router)

  router.use("/users", usersRoutes)

  router.use("/plans", plansRoutes)

  router.use("/blogs", blogsRoutes)

  router.use("/products", productsRoutes)

  router.use("/auth", authRoutes)

  router.use("/sessions", sessionsRoutes)

  router.use("/messages", messagesRoutes)
}

module.exports = routesApi;
