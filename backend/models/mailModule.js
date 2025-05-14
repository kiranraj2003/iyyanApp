// this file handles the mail module
const mongoose = require('mongoose');
const mailSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });
const mailModel = mongoose.model('Mail', mailSchema);
module.exports = mailModel;