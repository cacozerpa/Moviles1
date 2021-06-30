//Paquetes
const express = require('express');

//Local
const db = require('./db.js')
const userHelper = require('./helpers/user.helper.js')

let app = express();
app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'))

app.use('/users', userHelper)
