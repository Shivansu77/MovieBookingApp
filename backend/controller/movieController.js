const Movie = require('../model/movieModel');
const createMovie = async (req, res) => {
    // Logic to create a movie
    try{
        await Movie.create(req.body);
        return res.status(201).json({
            message: "Movie created successfully",
});
    }catch(err){
        console.error("Error creating movie:", err);
        return res.status(500).json({error: "Failed to create movie", details: err.message});
    }
}
module.exports = {
    createMovie,
};  