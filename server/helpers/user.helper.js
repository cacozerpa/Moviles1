const objectId = require('mongoose').Types.ObjectId

const { User } = require('../models/user.js');
const mongoose = require('../db')
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    await User.find((err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            res.send('Error in retrieving users: ' + '\n' + err)
        }
    })
}

const getUserByUsername = async (username) => {
    if (!objectId.isValid())
    return res.status(400).send(`No existe un usuario con ese nombre`);

await User.findById(username, (err, doc) => {
    if (!err){ 
        res.send(doc); 
    }else{ 
        res.send('No se encontro al usuario con este nombre'); 
    }
});
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

    const {username, email, ConfEmail, pass, ConfPass} = req.body;

    if(email != ConfEmail) {
        res.status(400).send('Los email no coinciden!')
    }else{
        if(pass != ConfPass){
            res.status(400).send('Las contraseñas no coinciden!');
        }else{
            User.findOne({email}).then(savedEmail => {
                if(savedEmail){
                    res.status(400).send('El email ya existe!');
                }else{
                    bcrypt.hash(pass, 12).then(hashPass => {
                        const newUser = new User({
                            username,
                            email,
                            pass: hashPass
                        }).save(function(err, newUser){
                            if(err) throw err;
                            res.status(200).send(`Usuario ${newUser} creado existosamente!`);
                        })
                    })
                }
            })
        }

    }
    
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

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser, getUserByUsername }
