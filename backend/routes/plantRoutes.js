const express = require('express');
const router = express.Router();
const {
  getPlants,
  createPlants,
  UpadtePlant,
  deletePlant,
} = require('../controllers/PlantController');

router.route('/').get(getPlants).post(createPlants);
router.route('/:id').put(UpadtePlant).delete(deletePlant);

// router.get('/', getIdeas);

// router.post('/', createIdeas);

// router.put('/:id', UpadteIdea);

// router.delete('/:id', deleteIdea);

module.exports = router;
