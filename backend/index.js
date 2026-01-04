const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

env.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/home', (req, res) => {
    res.json({ message: 'Welcome to the Home Page' });
});

app.listen(process.env.PORT || 8000, async() => {

    console.log(`Server is running at http://localhost:${process.env.PORT || 8000}`);
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Connected to the database successfully');
    }).catch((err) => {
        console.log('Failed to connect to the database', err);
    });

});