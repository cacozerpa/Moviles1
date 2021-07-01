//Paquetes
const express = require('express');
require('dotenv').config({path:'../.env'});

//Local
const db = require('./db.js')
const router = require('./routes/user')

let app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.use('/users', router)

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
}))
