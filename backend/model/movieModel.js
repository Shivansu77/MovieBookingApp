const {model, Schema} = require('mongoose');

const movieSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    casts: { type: [String], required: true },
    director: { type: String, required: true },
    trailerUrl: { type: String, required: true },
    language: { type: String, required: true ,default: 'English'},
    posterUrl: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    releasedStatus: { type: String, required: true ,default: 'RELEASED'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = model('Movie', movieSchema);