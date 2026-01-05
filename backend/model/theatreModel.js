const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const theatreSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        pinCode: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model('Theatre', theatreSchema);