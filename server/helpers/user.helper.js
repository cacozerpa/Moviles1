const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId

const { User } = require('../models/user.js');
const { getAllUsers, getUserByID, createUser, updateUser, deleteUser }  = require('../routes/user');

router.get('/', getAllUsers);
router.get('/:id', getUserByID)
router.post('/', createUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;