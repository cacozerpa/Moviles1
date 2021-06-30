const mongoose = require('../db')

const User = mongoose.model('User', {
    id: { type: Number },
    username: { type: String },
    pass: { type: String },
    email: { type: String }
});

module.exports = { User: User }