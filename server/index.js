//Paquetes
const cookieParser = require('cookie-parser');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');

require('dotenv').config({path:'../.env'});

//Local
const db = require('./db.js')
const router = require('./routes/user')

let app = express();
app.use(express.json());

app.use(cookieParser(process.env.SECRET || 'Not a Secret'));
app.use(session({
    secret: process.send.SECRET || 'Not a secret!',
    resave: true,
    saveUninitialized: true
}));

passport.use('local', require('./utils/strategy'));

passport.serializeUser(function(user, done){
    console.log('usuario loggeado: ' + user.username);
    return done(null, user.id);
})

passport.deserializeUser(function(user, done){
    console.log('User id: ' + user.id);
    return done(null, user.id);
})

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.use('/users', router)

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
}))
