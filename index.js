const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const dotenv = require('dotenv');
const router = require("./routes/app");
const swaggerDocument = require("./swagger.json");
const app = express();

dotenv.config({});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const swaggerOptions = {
    customCss: ".try-out { display: block; }",
    customJs: "./swagger.js",
    explorer: true,
  swaggerOptions: {
    authAction: {
        Authorization: {
        name: 'Authorization',
        schema: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: ''
        },
        value: 'Bearer <my own JWT token>'
      }
    }
  }
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
app.use("/", router);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000");
})