const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4545;
const { errHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/plants', require('./routes/plantRoutes'));
app.use(errHandler);

app.listen(port, () => {
  console.log(`on port ${port}`);
});
