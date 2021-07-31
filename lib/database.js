const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({});
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
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