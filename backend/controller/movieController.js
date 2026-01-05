const movieService = require('../services/movieService');

const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        return res.status(201).json({
            message: "Movie created successfully",
            data: movie,
        });
    } catch (err) {
        console.error("Error creating movie:", err);
        return res.status(500).json({ error: "Failed to create movie", details: err.message });
    }
};

const getMovie = async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        return res.status(200).json(movie);
    } catch (err) {
        console.error("Error fetching movie:", err);
        return res.status(500).json({ error: "Failed to fetch movie", details: err.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const deleted = await movieService.deleteMovieById(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Movie not found" });
        }
        return res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
        console.error("Error deleting movie:", err);
        return res.status(500).json({ error: "Failed to delete movie", details: err.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const updated = await movieService.updateMovieById(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Movie not found" });
        }
        return res.status(200).json({ message: "Movie updated successfully", data: updated });
    } catch (err) {
        console.error("Error updating movie:", err);
        return res.status(500).json({ error: "Failed to update movie", details: err.message });
    }
};

module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    updateMovie,
};