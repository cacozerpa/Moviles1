const localStrategy = require('passport-local').Strategy;
const userHelper = require('../helpers/user.helper');
const bcrypt = require('bcrypt');

const localOptions = {
    usernameField: 'username',
    passwordField: 'pass'
};

module.exports = new localStrategy(localOptions, async (username, pass, done) => {
    try{
        const user = await userHelper.getUserByUsername(username);
        if(user != ''){
            const password = await bcrypt.compare(pass, user.pass);
            if(password != ''){
                return done(null, user);
            }else{
                return done(null, false, {message: 'Contraseña incorrecta!'})
            }
        }else{
            return done(null, false, {message: 'Usuario no encontrado!'});
        }
    }catch(err){
        done(err);
        throw err;
    }
})