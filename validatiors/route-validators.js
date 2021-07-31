const jwt = require("jsonwebtoken");
const responseGenerator = require("../response/response");
const constants = require("../response/constants");


class RoutesValidators {

    /**
     * verifyUser method is usd to verify user it checks token for the routes
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async verifyUser(req, res, next) {
        try {
            const token = req.headers["x-access-token"];
            if (!token) {
                throw new Error('105');
            }
            const user = await jwt.decode(token);
            if (!user) {
                throw new Error('105');
            }
            
            req.user = user;
            next();
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }
}

module.exports = new RoutesValidators();