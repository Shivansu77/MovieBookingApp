const Theatre = require('../model/theatreModel');

const createTheatre = async (payload) => {
    return Theatre.create(payload);
};

const getAllTheatres = async () => {
    return Theatre.find({});
};

const getTheatreById = async (id) => {
    return Theatre.findById(id);
};

const updateTheatreById = async (id, payload) => {
    return Theatre.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const deleteTheatreById = async (id) => {
    return Theatre.findByIdAndDelete(id);
};

module.exports = {
    createTheatre,
    getAllTheatres,
    getTheatreById,
    updateTheatreById,
    deleteTheatreById,
};