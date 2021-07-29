const mongoose = require("mongoose");
const Scehma = mongoose.Schema;
const dbClient = require("../database");

const userModel = new Scehma({
    firstName: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    lastName: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    email: {
        type: Scehma.Types.String,
        required: true
    },
    password: {
        type: Scehma.Types.String,
        required: true
    }
});

const User = dbClient.model('User', userModel);
module.exports = User;