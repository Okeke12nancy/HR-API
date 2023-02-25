const userService = require("../services/user.service");
const { BadRequestError } = require("../errors");

const { userSchema } = require("../middlewares/validate");

class UserController {
  async create(req, res) {
    try {
      await userSchema.validateAsync({ ...req.body });

      const newUser = await userService.create(req.body);

      return res.status(201).send({
        success: true,
        message: "created user",
        data: newUser,
      });
    } catch (err) {
      //   throw new BadRequestError(err);
      throw new BadRequestError(err?.details[0]?.message);
    }
  }

  // Find One
  async findById(req, res) {
    const user = await userService.findById(req.params.id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "UserFound",
      data: user,
    });
  }

  async findAll(req, res) {
    const users = await userService.findAll({});

    if (!users) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Users found",
      data: users,
    });
  }

  async update(req, res) {
    const user = await userService.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "user details updated successfully",
      data: user,
    });
  }

  async delete(req, res) {
    const user = await userService.delete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "user deleted successfully",
    });
  }
}

module.exports = new UserController();
