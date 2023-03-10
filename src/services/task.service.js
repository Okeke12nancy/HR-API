const { Task } = require("../models/task.model");

class TaskService {
  async create(newTask) {
    const newTaskData = await Task.create(newTask);

    return newTaskData;
  }

  async findOne(filter) {
    const task = await Task.findOne(filter);

    return task;
  }

  async findById(id) {
    const task = await Task.findById(id);

    return task;
  }

  async findAll(filter = {}) {
    const tasks = await Task.find(filter);

    return tasks;
  }

  async update(id, updateData = {}) {
    const task = await Task.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
      runValidators: true,
    });

    return task;
  }

  async delete(id) {
    const task = await Task.findByIdAndRemove(id);
    return task;
  }
}

module.exports = new TaskService();
