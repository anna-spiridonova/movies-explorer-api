const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
// const urlPattern = require('../utils/constants');

const {
  getUser,
  editProfile,
  register,
  login,
  signOut,
} = require('../controllers/users');

router.post(
  '/signup',
  register,
);

router.post(
  '/signin',
  login,
);

router.post('/signout', auth, signOut);

router.get('/users/me', auth, getUser);

router.patch(
  '/users/me',
  auth,
  editProfile,
);

module.exports = router;
