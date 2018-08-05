const mongoose = require('mongoose');

module.exports= () => {
    mongoose.connect('mongodb://movie_user:abcd1234@ds111192.mlab.com:11192/movie-api',{ useNewUrlParser: true });
    mongoose.connection.on('open',() =>{
        console.log("MongoDB Bağlantısı Sağlandı");
    });
    mongoose.connection.on('error',(err) =>{
        console.log("MongoDB : ERROR!", err);
    });

    mongoose.Promise = global.Promise;
};