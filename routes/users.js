const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  registerValidator,
  loginValidator,
  editProfileValidator,
} = require('../middlewares/validator');

const {
  getUser,
  editProfile,
  register,
  login,
  signOut,
} = require('../controllers/users');

router.post(
  '/signup',
  registerValidator,
  register,
);

router.post(
  '/signin',
  loginValidator,
  login,
);

router.post('/signout', auth, signOut);

router.get('/users/me', auth, getUser);

router.patch(
  '/users/me',
  auth,
  editProfileValidator,
  editProfile,
);

module.exports = router;
