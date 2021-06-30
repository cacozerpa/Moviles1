const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Moviles1', (err) => {
    if(!err){
        console.log('MongoDB Connection Successful')
    }else{
        console.log('Error en la conexion: ', err)
    }
});

module.exports = mongoose;

// module.exports = function Connection() {
//     const mongoose = require('mongoose')
//       let db
//       if(!db) {
//         db = mongoose.connect('mongodb://localhost:27017/globalsys', 
//         { useMongoClient: true })

//         return db
//       }
// } 