const Movie = require('../model/movieModel');

const createMovie = async (payload) => {
    return Movie.create(payload);
};

const getMovieById = async (id) => {
    return Movie.findById(id);
};

const getAllMovies = async () => {
    return Movie.find({});
};

const deleteMovieById = async (id) => {
    return Movie.findByIdAndDelete(id);
};

const updateMovieById = async (id, payload) => {
    return Movie.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const fetchMovies = async (filter) => {
    const query = {};
    if (filter.name) {
        query.name = filter.name;
    }
    if (filter.language) {
        query.language = filter.language;
    }
    return Movie.find(query);
};

module.exports = {
    createMovie,
    getMovieById,
    getAllMovies,
    deleteMovieById,
    updateMovieById,
    fetchMovies,
};