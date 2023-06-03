const usersRouter = require('express').Router();

// const auth = require('../middlewares/auth');

const {
  getUsers,
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', getUserInfo);

// ---- удалить ----
usersRouter.get('/', getUsers);

usersRouter.patch('/me', updateUserInfo);

module.exports = usersRouter;
