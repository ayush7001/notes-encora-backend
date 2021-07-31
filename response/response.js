const constants = require("./constants");
class ResponseGenerator {

    /**
     * sendError method is used to send response with error code and error response
     * @param {*} res 
     * @param {*} error 
     */
    sendError(res, error) {
        if(constants.ERR_CODES[error.message]) {
            res.status(constants.ERR_CODES[error.message].status);
            res.send({isError: true, message: constants.ERR_CODES[error.message].message || 'Something went wrong'});
        } else {
            res.status(500);
            res.send({isError: true, message: error.message || 'Something went wrong'});
        }
    }

    /**
     * sendResponse method is used to send response with data and status code 200
     * @param {*} res 
     * @param {*} data 
     */
    sendResponse(res, data) {
        res.status(200);
        res.send({isError: false, data})
    }
}

module.exports = new ResponseGenerator();