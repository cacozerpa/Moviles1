const mongoose = require('../db');

const Comment = mongoose.model('Comment', {
    username: { type: String },
    message: { type: String }
});

module.exports = { Comment: Comment }