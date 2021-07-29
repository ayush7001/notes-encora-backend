const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const router = require("./routes/app");
const app = express();

dotenv.config({});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", router);
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})