const mongoose  = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/Moviles1', { useNewUrlParser: true, useUnifiedTopology: true } ,(err) => {
    if(!err){
        console.log('MongoDB Connection Successful')
    }else{
        console.log('Error en la conexion: ', err)
    }
});

module.exports = mongoose;