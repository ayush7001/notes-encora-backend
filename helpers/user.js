const User = require("../lib/models/user");
const Notes = require("../lib/models/notes");

class UserHelper {

    checkUserByEmail(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne({email: email});
                if(user) {
                    resolve(user);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    signUp(body) {
        return new Promise(async (resolve, reject) => {
            try {
               const createUser = new User({
                   firstName: body.firstName,
                   lastName: body.lastName,
                   email: body.email,
                   password: body.password
               });
               const createdUser = await createUser.save();
               if(createdUser) {
                   resolve(createdUser)
               } else {
                   resolve(null);
               }
            } catch (error) {
                reject(error);
            }
        });
    }

    addNotes(noteBody, id) {

        return new Promise(async (resolve, reject) => {
            try {
                
                const newNote = new Notes({
                    title: noteBody.title,
                    body: noteBody.body,
                    user: id
                });

                const createdNote = await newNote.save();
                resolve(createdNote);
            } catch (error) {
                reject(error);
            }
        })
    }

    updateNote(noteBody, id) {
        return new Promise(async (resolve, reject) => {
            try {
                const newNote = {
                    title: noteBody.title,
                    body: noteBody.body,
                };

                const updatedNote = await Notes.updateOne({_id: id}, newNote);
                if(updatedNote.n > 0) {
                    resolve(true);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    notesList(id, pageNumber, perPage) {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Notes.find({user: id}).populate("user", {"firstName": 1}).skip((pageNumber) * perPage).limit(perPage)
                if (list.length > 0) {
                    resolve(list)
                } else {
                    resolve([])
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteNote(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Notes.deleteOne({_id: id});
                if (list.deletedCount > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = new UserHelper();