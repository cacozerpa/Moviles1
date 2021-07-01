const objectId = require('mongoose').Types.ObjectId
const mongoose = require('../db')

const { User } = require('../models/user.js');


const getAllUsers = (res) => {
    User.find((err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            res.send('Error in retrieving users: ' + '\n' + err)
        }
    })
}

const getUserByID = (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No existe un usuario con este id`);

    User.findById(req.params.id, (err, doc) => {
        if (!err){ 
            res.send(doc); 
        }else{ 
            res.send('No se encontro al usuario con este id'); 
        }
    });
}

const createUser = (res) => {
    const user = mongoose.model({
        username: { type: String },
        pass: { type: String },
        email: { type: String }
    });

    user.save((err, doc) => {
        if(!err){
            res.send('Usuario creado satisfactoriamente: ' + '\n' + doc)
        }else{
             res.send('Error en crear usuario: ' + '\n' + err)
        }
    })
}

const updateUser = (req, res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No se encontro al usuario con este id')
    }

    User.findOneAndUpdate(req.params.id, { $set: {
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
    } }, { new: true }, (err, doc) => {
        if(!err){
            res.send('El usuario fue actualizado satisfactoriamente' + '\n' + doc)
        }else{
            res.send('Error en actualizar el usuario: ' + '\n' + err)
        }
    })
}

const deleteUser = (req, res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No se encontro al usuario con este id')
    }

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send('El usuario fue eliminado satisfactoriamente: ' + '\n' + doc)
        }else{
            res.send('Error en eliminar el usuario: ' + '\n' + err)
        }
    })
}

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser }
