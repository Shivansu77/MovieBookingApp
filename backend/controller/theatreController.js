const theatreService = require('../services/theatreService');

const createTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.createTheatre(req.body);
        return res.status(201).json({
            message: "Theatre created successfully",
            data: theatre,
        });
    } catch (err) {
        console.error("Error creating theatre:", err);
        return res.status(500).json({ error: "Failed to create theatre", details: err.message });
    }
};

const getTheatres = async (_req, res) => {
    try {
        const theatres = await theatreService.getAllTheatres();
        return res.status(200).json(theatres);
    } catch (err) {
        console.error("Error fetching theatres:", err);
        return res.status(500).json({ error: "Failed to fetch theatres", details: err.message });
    }
};

const getTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.getTheatreById(req.params.id);
        if (!theatre) {
            return res.status(404).json({ error: "Theatre not found" });
        }
        return res.status(200).json(theatre);
    } catch (err) {
        console.error("Error fetching theatre:", err);
        return res.status(500).json({ error: "Failed to fetch theatre", details: err.message });
    }
};

const updateTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.updateTheatreById(req.params.id, req.body);
        if (!theatre) {
            return res.status(404).json({ error: "Theatre not found" });
        }
        return res.status(200).json({ message: "Theatre updated successfully", data: theatre });
    } catch (err) {
        console.error("Error updating theatre:", err);
        return res.status(500).json({ error: "Failed to update theatre", details: err.message });
    }
};

const deleteTheatre = async (req, res) => {
    try {
        const deleted = await theatreService.deleteTheatreById(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Theatre not found" });
        }
        return res.status(200).json({ message: "Theatre deleted successfully" });
    } catch (err) {
        console.error("Error deleting theatre:", err);
        return res.status(500).json({ error: "Failed to delete theatre", details: err.message });
    }
};

module.exports = {
    createTheatre,
    getTheatres,
    getTheatre,
    updateTheatre,
    deleteTheatre,
};