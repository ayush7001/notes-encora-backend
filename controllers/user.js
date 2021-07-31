const jwt = require("jsonwebtoken");
const userHelper = require("../helpers/user");
const responseGenerator = require("../response/response");
const constants = require("../response/constants");
class UserController {
    
    /**
     * signUp method is used to register user 
     * @param {*} req 
     * @param {*} res 
     */
    async signUp(req, res) {
        try {
            const checkUser = await userHelper.checkUserByEmail(req.body.email);
            if (checkUser) {
                throw new Error('102');
            }
            const user = await userHelper.signUp(req.body);
            responseGenerator.sendResponse(res, {message: "User is successfully sign up", user: user});
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * login method is used to login user 
     * @param {*} req it contains email and password
     * @param {*} res 
     */
    async login(req, res) {
        try {

            if(!req.body.email || req.body.email === "") {
                throw new Error("103")
            }
            if(!req.body.password || req.body.password === "") {
                throw new Error("107");
            }
            const checkUser = await userHelper.checkUserByEmail(req.body.email);
            if (!checkUser) {
                throw new Error('103');
            }
            if (checkUser.password.toLowerCase() !== req.body.password.toLowerCase()) {
                throw new Error('104');
            }
            const tokenBody =  {
                id: checkUser._id,
                email: checkUser.email
            }
            const token = await jwt.sign(tokenBody, constants.JWT_KEY)
            responseGenerator.sendResponse(res, {message: "User is successfully sign in", tsc: token});
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * addNote method is used to add notes in database with corresponding users
     * @param {*} req 
     * @param {*} res 
     */
    async addNote (req, res) {
        try {
            const note = await userHelper.addNotes({title: req.body.title, body: req.body.body}, req.user.id);
            responseGenerator.sendResponse(res, {message: 'Note is successfully added', note: note });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * updateNote api is used to update notes
     * @param {*} req 
     * @param {*} res 
     */
    async updateNote (req, res) {
        try {
            const note = await userHelper.updateNote({title: req.body.title, body: req.body.body}, req.params.id);
            if (!note) {
                throw new Error("106");
            }
            responseGenerator.sendResponse(res, {message: 'Note is updatedSuccessfully added', note: note });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }


    /**
     * listNotes method is used to list notes for corresponding users
     * @param {*} req 
     * @param {*} res 
     */
    async listNotes (req, res) {
        try {
            console.log(req.query.pageNumber, req.query.perPage)
            const list = await userHelper.notesList(req.user.id, parseInt(req.query.pageNumber), parseInt(req.query.perPage));
            responseGenerator.sendResponse(res, { list: list });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * deleteNote method is used to delete note
     * @param {*} req 
     * @param {*} res 
     */
    async deleteNote (req, res) {
        try {
            const list = await userHelper.deleteNote(req.params.id);
            if (!list) {
                throw new Error('106');
            }
            responseGenerator.sendResponse(res, { message: 'Note is deleted successfully' });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }
}

module.exports = new UserController();