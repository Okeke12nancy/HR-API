const express = require("express");
const userController = require("../controllers/users.controller");
const { isAdmin } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/", isAdmin, userController.create);

userRouter.get("/", isAdmin, userController.findAll);

userRouter.get("/:id", isAdmin, userController.findById);

userRouter.put("/:id", isAdmin, userController.update);

userRouter.delete("/:id", isAdmin, userController.delete);

module.exports = userRouter;
