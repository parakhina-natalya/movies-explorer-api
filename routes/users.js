const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers,
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', getUserInfo);

// ---- удалить ----
usersRouter.get('/', getUsers);

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required(),
  }),
}), updateUserInfo);

module.exports = usersRouter;
