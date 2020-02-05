const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DoctorScehma = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    }
}, { versionKey: false });

module.exports = mongoose.model('DoctorsSignup', DoctorScehma);