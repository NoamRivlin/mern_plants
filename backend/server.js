const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4545;
const { errHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/plants', require('./routes/plantRoutes'));
app.use(errHandler);

app.listen(port, () => {
  console.log(`on port ${port}`);
});
