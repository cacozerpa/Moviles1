const mongoose  = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://moviles1:moviles1@moviles1.aiswk.mongodb.net/User?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } ,(err) => {
    if(!err){
        console.log('MongoDB Connection Successful')
    }else{
        console.log('Error en la conexion: ', err)
    }
});

module.exports = mongoose;