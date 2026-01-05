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

module.exports = {
    createMovie,
    getMovieById,
    getAllMovies,
    deleteMovieById,
    updateMovieById,
};