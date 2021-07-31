const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({});
mongoose.connect('mongodb+srv://ayush7001:ayush7001@cluster-work.yulo0.mongodb.net/encora-test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(error) {
        console.log(`Error in database connection: ${error.message}`);
    } else {
        console.log(`Database is connected`);
    }
});

const dbClient = mongoose.connection;

dbClient.on('error', (Err) => {
    console.log(`Error in database connection: ${Err.message}`);
})

module.exports = dbClient;