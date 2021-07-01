
const objectId = require('mongoose').Types.ObjectId

const { User } = require('../models/user.js');

const getAllUsers = (res) => {
    User.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error in retrieving users: ', err);
        }
    });
}

const getUserByID = (res) => {
    const user = mongoose.model('User', {
    id: { type: Number },
    username: { type: String },
    pass: { type: String },
    email: { type: String }
});

    user.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            console.log('Error en guardar el usuario: ', err);
        }
    })
}

const createUser = (req, res) => {
    var user = new User({
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
    });

    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + err); }
    });
}

const updateUser = (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id`);

    User.findOneAndUpdate(req.params.id, { $set: {
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
    } }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + err); }
    });
}

const deleteUser = (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send('User Deleted Successfully'); }
        else { console.log('Error in User Delete :' + err); }
    });
}

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };