const asyncHandler = require('express-async-handler');
//route  GET /api/ideas
//access  private
const Plant = require('../models/plantModel');

const getPlants = asyncHandler(async (req, res) => {
  try {
    const plants = await Plant.find();
    // res.status(200).json({ message: 'get plants' });
    return res.status(200).json(plants);
  } catch (err) {
    console.log(err);
  }
});

//route  POST /api/plants
//access  private

const createPlants = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.description) {
    res.status(400);
    throw new Error('add description field');
  }
  const plant = await Plant.create({
    description: req.body.description,
  });
  res.status(200).json(plant);
});

//route  PUT /api/ideas
//access  private

const updatePlant = asyncHandler(async (req, res) => {
  const plant = await Plant.findById(req.params.id);
  console.log(plant);
  if (!plant) {
    res.status(400);
    throw new Error('plant not found');
  }
  const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPlant);
});

//route  DELETE /api/Plants
//access  private

const deletePlant = asyncHandler(async (req, res) => {
  // const plant = await Plant.findById(req.params.id);
  const plant = await Plant.findByIdAndRemove(req.params.id);
  console.log(plant);
  if (!plant) {
    res.status(400);
    throw new Error('plant not found');
  }
  // await plant.remove()

  res.status(200).json({ message: `deleted plant ${req.params.id}` });
});

module.exports = {
  getPlants,
  createPlants,
  updatePlant,
  deletePlant,
};
