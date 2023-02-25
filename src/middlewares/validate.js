const { date } = require("joi");
const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string().required().max(20).min(2).trim(),
  lastName: Joi.string().required().max(20).min(2).trim(),
  email: Joi.string()
    // .pattern(new RegExp("/.+@.+..+/,"))
    .email()
    .lowercase()
    .trim()
    .required(),
  staffNo: Joi.string().required().max(10),
  phoneNumber: Joi.string().required().max(20).min(2).trim(),
  role: Joi.string().required().trim(),
  position: Joi.string().required(),
  department: Joi.string().required(),
  password: Joi.string().max(10).required().alphanum(),
  dob: Joi.date(),
  employment_date: Joi.date(),
});

const taskSchema = Joi.object({
  assignedBy: Joi.string().trim().required(),
  assignedTo: Joi.string().trim().required(),
  description: Joi.string().max(50).min(3).required(), // INCOMPLETE
  done: Joi.string(),
  deadline: Joi.date(),
  doneAt: Joi.date().default(Date.now),
  createdBy: Joi.string().required(),
});

// THAT WAS EASY RIGHT?😀

module.exports = {
  userSchema,
  taskSchema,
};
