const express = require('express');
const router = express.Router();

const { getAllUsers, getUserByID, createUser, updateUser, deleteUser }  = require('../routes/user');

router.get('/', getAllUsers);
router.get('/:id', getUserByID)
router.post('/', createUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;