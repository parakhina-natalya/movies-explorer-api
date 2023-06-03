const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../utils/errors/notFound');

const { createUser, login } = require('../controllers/users');

// ------------------ регистрация ------
router.post('/signup', createUser);

// ------------ вход -----------
router.post('/signin', login);

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);

// ---------------404--------------------
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
