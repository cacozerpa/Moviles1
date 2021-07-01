const objectId = require('mongoose').Types.ObjectId

const { User } = require('../models/user.js');
const mongoose = require('../db')

const getAllUsers = async (req, res) => {
    await User.find((err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            res.send('Error in retrieving users: ' + '\n' + err)
        }
    })
}

const getUserByID = async (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No existe un usuario con este id`);

    await User.findById(req.params.id, (err, doc) => {
        if (!err){ 
            res.send(doc); 
        }else{ 
            res.send('No se encontro al usuario con este id'); 
        }
    });
}

const createUser = async (req, res) => {
    const user = mongoose.model({
        username: { type: String },
        pass: { type: String },
        email: { type: String }
    });

    await user.save((err, doc) => {
        if(!err){
            res.send('Usuario creado satisfactoriamente: ' + '\n' + doc)
        }else{
             res.send('Error en crear usuario: ' + '\n' + err)
        }
    })
}

const updateUser = async (req, res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No se encontro al usuario con este id')
    }

    await User.findOneAndUpdate(req.params.id, { $set: {
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

const deleteUser = async (req, res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No se encontro al usuario con este id')
    }

    await User.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send('El usuario fue eliminado satisfactoriamente: ' + '\n' + doc)
        }else{
            res.send('Error en eliminar el usuario: ' + '\n' + err)
        }
    })
}

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser }
