const express = require("express");
const taskController = require("../controllers/taskcontrollers");
const { isHOD } = require("../middlewares/auth.middleware");
const taskRouter = express.Router();

taskRouter.post("/", isHOD, taskController.create);

taskRouter.get("/", isHOD, taskController.findAll);

taskRouter.get("/:id", taskController.findById);

taskRouter.put("/:id", isHOD, taskController.update);

taskRouter.delete("/:id", isHOD, taskController.delete);

module.exports = taskRouter;
