const validateMovieCreateRequest = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({ error: "Movie name is required" });
    }
    if (!req.body.description) {
        return res.status(400).json({ error: "Movie description is required" });
    }
    if (!req.body.casts || !Array.isArray(req.body.casts) || req.body.casts.length === 0) {
        return res.status(400).json({ error: "Movie casts is required and must be a non-empty array" });
    }
    if (!req.body.director) {
        return res.status(400).json({ error: "Movie director is required" });
    }
    if (!req.body.trailerUrl) {
        return res.status(400).json({ error: "Movie trailer URL is required" });
    }
    if (!req.body.posterUrl) {
        return res.status(400).json({ error: "Movie poster URL is required" });
    }
    if (!req.body.releaseDate) {
        return res.status(400).json({ error: "Movie release date is required" });
    }
    next();
};

const validateMovieUpdateRequest = (req, res, next) => {
    const hasValidField = req.body.name || req.body.description || req.body.casts || 
                          req.body.director || req.body.trailerUrl || req.body.posterUrl || 
                          req.body.releaseDate || req.body.language || req.body.releasedStatus;
    
    if (!hasValidField) {
        return res.status(400).json({ error: "At least one field is required to update" });
    }
    next();
};

module.exports = {
    validateMovieCreateRequest,
    validateMovieUpdateRequest,
};