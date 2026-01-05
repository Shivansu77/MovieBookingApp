const { createMovie ,getMovie , deleteMovie , updateMovie } = require('../controller/movieController.js');
const { validateMovieCreateRequest, validateMovieUpdateRequest } = require('../middleware/movieMiddleware.js');

const routes = (app) => {
    app.post('/mba/api/v1/movies', validateMovieCreateRequest, createMovie);
    app.get('/mba/api/v1/movies/:id', getMovie);
    app.delete('/mba/api/v1/movies/:id', deleteMovie);
    app.put('/mba/api/v1/movies/:id', validateMovieUpdateRequest, updateMovie);

};

module.exports = routes;