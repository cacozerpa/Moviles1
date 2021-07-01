const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId

const { User } = require('../models/user.js');

//Get all users
router.get('/', (req, res) => {
    //Devuelve todos los usuarios de la coleccion
    User.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error in retrieving users: ', err);
        }
    });
})

//Get user by id
router.get('/:id', (req, res) => {

    if(!objectId.isValid(req.params.id)){
        return res.status(400).send(`No user with given id`)
    }
    User.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            console.log('Error in retrieving user by id: ', err);
        }
    })

    })


//Create a User
router.post('/', (req, res) => {
    var user = new User({
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email
    })
    user.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            console.log('Error en guardar el usuario: ', err);
        }
    })
})

//Update User
router.put('/:id', (req, res) => {

    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No user with given id')
    }

    
    //new: true devuelve solo el user que se actualizo
    User.findOneAndUpdate(req.params.id, { $set: { 
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email
     } }, { new: true }, (err, doc) => {
        if(!err){
            res.send('User updated successfully:' + '\n' + '\n' + doc)
        }else{
            console.log('Error in updating user: ', err)
        }
    })
})  

//Delete user
router.delete('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id)){
        return res.status(400).send('No user with given id')
    }

    User.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err){
            res.send('User deleted successfully')
        }else{
            console.log('User could not be deleted: ', err)
        }
    })
})

module.exports = router;