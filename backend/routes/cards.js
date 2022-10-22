const router = require('express').Router();
const { validationCard, validationCardId } = require('../middlewares/validation');

const {
  createCard,
  findAllCards,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', findAllCards);
router.post('/', validationCard, createCard);
router.delete('/:cardId', validationCardId, deleteCardById);
router.put('/:cardId/likes', validationCardId, likeCard);
router.delete('/:cardId/likes', validationCardId, dislikeCard);

module.exports = router;
