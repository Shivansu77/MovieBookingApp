const {
    createTheatre,
    getTheatres,
    getTheatre,
    deleteTheatre,
    updateTheatre,
} = require('../controller/theatreController');
const { validateTheatreCreateRequest, validateTheatreUpdateRequest } = require('../middleware/theatreMiddleware');

const routes = (app) => {
    app.post('/mba/api/v1/theatres', validateTheatreCreateRequest, createTheatre);
    app.get('/mba/api/v1/theatres', getTheatres);
    app.get('/mba/api/v1/theatres/:id', getTheatre);
    app.delete('/mba/api/v1/theatres/:id', deleteTheatre);
    app.put('/mba/api/v1/theatres/:id', validateTheatreUpdateRequest, updateTheatre);
};

module.exports = routes;