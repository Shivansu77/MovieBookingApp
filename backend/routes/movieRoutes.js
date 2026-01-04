const { createMovie } = require('../controller/movieController.js');
const routes = (app) => {
    app.post('/mba/api/v1/movies', createMovie);
};

module.exports = routes;