const ERR_CODES = {
    101: {
        status: 400,
        message: "Requested resource not found"
    },
    102: {
        status: 422,
        message: "Email already exists"
    },
    103: {
        status: 400,
        message: "Please enter valid email address, this email does not exist"
    },
    104: {
        status: 422,
        message: "Please enter valid password"
    },
    105: {
        status: 422,
        message: "Please authenticate yourself, you are not authorized to access this route"
    },
    106: {
        status: 400,
        message: "There is no such record"
    },
    107: {
        status: 400,
        message: "Please enter password"
    }
}

module.exports = {ERR_CODES, JWT_KEY: "qedgfjnbc2647nsqkgig"};