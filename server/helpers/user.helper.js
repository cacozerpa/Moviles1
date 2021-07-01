const express = require('express');
const router = express.Router();

const { User } = require('../models/user.js');

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

router.post('/', (req, res) => {
    var user = new User({
        id: req.body.id,
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

module.exports = router;