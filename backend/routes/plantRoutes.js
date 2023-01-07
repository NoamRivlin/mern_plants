const express = require('express');
const router = express.Router();
const {
  getPlants,
  createPlants,
  updatePlant,
  deletePlant,
} = require('../controllers/plantController');

router.route('/').get(getPlants).post(createPlants);
router.route('/:id').put(updatePlant).delete(deletePlant);

// router.get('/', getIdeas);

// router.post('/', createIdeas);

// router.put('/:id', UpadteIdea);

// router.delete('/:id', deleteIdea);

module.exports = router;
