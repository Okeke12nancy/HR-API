const taskService = require("../services/task.service");
const { BadRequestError } = require("../errors");

const { taskSchema } = require("../middlewares/validate");

class TaskController {
  async create(req, res) {
    try {
      await taskSchema.validateAsync({ ...req.body });

      const newTask = await taskService.create(req.body);

      return res.status(201).send({
        success: true,
        message: "created tasks",
        data: newTask,
      });
    } catch (err) {
      throw new BadRequestError(err?.details[0]?.message);
    }
  }

  // Find One
  async findById(req, res) {
    const task = await taskService.findById(req.params.id);

    if (!task) {
      return res.status(404).send({
        success: false,
        message: "task not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "task found",
      data: task,
    });
  }

  async findAll(req, res) {
    const tasks = await taskService.findAll({});

    if (!task) {
      return res.status(404).send({
        success: false,
        message: "tasks not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "tasks found",
      data: tasks,
    });
  }

  async update(req, res) {
    const task = await taskService.update(req.params.id, req.body);
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "task not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "task updated successfully",
      data: task,
    });
  }

  async delete(req, res) {
    const task = await task.delete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "task deleted successfully",
    });
  }
}

module.exports = new TaskController();
