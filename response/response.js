const constants = require("./constants");
class ResponseGenerator {
    
    sendError(res, error) {
        if(constants.ERR_CODES[error.message]) {
            res.status(constants.ERR_CODES[error.message].status);
            res.send({isError: true, message: constants.ERR_CODES[error.message].message || 'Something went wrong'});
        } else {
            res.status(500);
            res.send({isError: true, message: error.message || 'Something went wrong'});
        }
    }

    sendResponse(res, data) {
        res.status(200);
        res.send({isError: false, data})
    }
}

module.exports = new ResponseGenerator();