const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validator');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', auth, getMovies);

router.post(
  '/movies',
  auth,
  createMovieValidator,
  createMovie,
);

router.delete(
  '/movies/:_id',
  auth,
  deleteMovieValidator,
  deleteMovie,
);

module.exports = router;
