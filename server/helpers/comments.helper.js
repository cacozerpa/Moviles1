const objectId = require('mongoose').Types.ObjectId

const { Comment } = require('../models/comment.js');
const mongoose = require('../db');

const createComment = async (req, res) => {

    const {message, username, movieId} = req.body;
    

}

