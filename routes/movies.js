const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
// const urlPattern = require('../utils/constants');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', auth, getMovies);

router.post(
  '/movies',
  auth,
  createMovie,
);

router.delete(
  '/movies/:_id',
  auth,
  deleteMovie,
);

module.exports = router;
