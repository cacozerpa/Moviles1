const mongoose = require('../db')

const User = mongoose.model('User', {
    username: { type: String },
    pass: { type: String },
    email: { type: String }
});

module.exports = { User: User }