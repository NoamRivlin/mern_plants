const express = require('express');
const router = express.Router();
const {
  getPlants,
  createPlants,
  updatePlant,
  deletePlant,
} = require('../controllers/plantController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPlants).post(protect, createPlants);
router.route('/:id').put(protect, updatePlant).delete(protect, deletePlant);

// router.get('/', getIdeas);

// router.post('/', createIdeas);

// router.put('/:id', UpadteIdea);

// router.delete('/:id', deleteIdea);

module.exports = router;
