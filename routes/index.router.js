const express = require("express");
const router = express.Router();

// Creamos un router por cada archivo dentro de routes 
const userRouter = require('./user.router');
//const mapRouter = require("./map.router")
const labRouter = require('./lab.router')
const authRouter = require('./auth.router');

// Por cada router asignar una ruta para realizar las peticiones
router.use("/auth", authRouter);
router.use("/user", userRouter);
//router.use("/map", mapRouter)
router.use("/lab", labRouter)

module.exports = router;