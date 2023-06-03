const moviesRouter = require('express').Router();

const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');

// GET /movies возвращает все сохранённые текущим пользователем фильмы
moviesRouter.get('/', getMovies);

// POST /movies создаёт фильм с переданными в теле
// country, director, duration, year, description,
// image, trailer, nameRU, nameEN и thumbnail, movieId
moviesRouter.post('/', postMovie);

// DELETE /movies/_id удаляет сохранённый фильм по id
moviesRouter.delete('/:_id', deleteMovie);

module.exports = moviesRouter;
