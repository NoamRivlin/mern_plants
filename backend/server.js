const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4545;

const app = express();

app.use('/api/plants', require('./routes/PlantRoutes'));

app.listen(port, () => {
  console.log(`on port ${port}`);
});
