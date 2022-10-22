const router = require('express').Router();
const {
  findAllUsers,
  findUserById,
  updateProfile,
  updateAvatar,
  getProfile,
} = require('../controllers/users');
const { validationProfileUpdate, validationAvatarUpdate, validationUserId } = require('../middlewares/validation');

router.get('/', findAllUsers);
router.get('/me', getProfile);
router.patch('/me', validationProfileUpdate, updateProfile);
router.get('/:userId', validationUserId, findUserById);

router.patch('/me/avatar', validationAvatarUpdate, updateAvatar);

module.exports = router;
