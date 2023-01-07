//route  GET /api/ideas
//access  private

const getPlants = (req, res) => {
  try {
    res.status(200).json({ message: 'get plants' });
  } catch (err) {
    console.log(err);
  }
};

//route  POST /api/plants
//access  private

const createPlants = (req, res) => {
  res.status(200).json({ message: 'create plants' });
};

//route  PUT /api/ideas
//access  private

const updatePlant = (req, res) => {
  res.status(200).json({ message: `updated Plant ${req.params.id}` });
};

//route  DELETE /api/Plants
//access  private

const deletePlant = (req, res) => {
  res.status(200).json({ message: `delete Plant ${req.params.id}` });
};

module.exports = {
  getPlants,
  createPlants,
  updatePlant,
  deletePlant,
};
