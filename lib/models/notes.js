const mongoose = require("mongoose");
const Scehma = mongoose.Schema;
const dbClient = require("../database");

const notesModel = new Scehma({
    title: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    body: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    user: {
        type: Scehma.Types.ObjectId,
        ref: 'User'
    },
});

const Note = dbClient.model('Note', notesModel);
module.exports = Note;