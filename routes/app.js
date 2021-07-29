const express = require("express");
const router = express.Router();
const routesValidators = require("../validatiors/route-validators");
const userController = require("../controllers/user");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);

router.post("/notes/add", routesValidators.verifyUser, userController.addNote);
router.put("/notes/:id", routesValidators.verifyUser, userController.updateNote);
router.get("/notes", routesValidators.verifyUser, userController.listNotes);
router.delete("/notes/:id", routesValidators.verifyUser, userController.deleteNote);
module.exports = router;