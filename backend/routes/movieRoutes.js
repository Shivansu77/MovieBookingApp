const { createMovie ,getMovie , deleteMovie } = require('../controller/movieController.js');
const routes = (app) => {
    app.post('/mba/api/v1/movies', createMovie);
    app.get('/mba/api/v1/movies/:id', getMovie);
    app.delete('/mba/api/v1/movies/:id', deleteMovie);

};

module.exports = routes;