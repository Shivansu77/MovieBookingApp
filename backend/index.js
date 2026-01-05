const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes.js');
const theatreRoutes = require('./routes/theatreRoutes.js');

env.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

movieRoutes(app);
theatreRoutes(app);

app.get('/home', (req, res) => {
    res.json({ message: 'Welcome to the Home Page' });
});

app.listen(process.env.PORT || 8000, async () => {
  const PORT = process.env.PORT || 8000;

  console.log(`Server is running at http://localhost:${PORT}`);

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
});
