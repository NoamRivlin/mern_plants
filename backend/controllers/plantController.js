const asyncHandler = require('express-async-handler');
//route  GET /api/ideas
//access  private

const getPlants = async (req, res) => {
  try {
    res.status(200).json({ message: 'get plants' });
  } catch (err) {
    console.log(err);
  }
};

//route  POST /api/plants
//access  private

const createPlants = async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error('add text field');
  }
  res.status(200).json({ message: 'create plants' });
};

//route  PUT /api/ideas
//access  private

const updatePlant = async (req, res) => {
  res.status(200).json({ message: `updated Plant ${req.params.id}` });
};

//route  DELETE /api/Plants
//access  private

const deletePlant = async (req, res) => {
  res.status(200).json({ message: `delete Plant ${req.params.id}` });
};

module.exports = {
  getPlants,
  createPlants,
  updatePlant,
  deletePlant,
};
