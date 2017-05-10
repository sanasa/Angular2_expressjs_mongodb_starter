var mongoose = require('mongoose');
//mongodb://127.0.0.1:27017/movies
//var mongoUrl = "mongodb://sana:Allah7akbar@ds115071.mlab.com:15071/movies";
var mongoUrl ='mongodb://localhost:27017/participants';
//mongodb://<user>:<pass>@mongo.onmodulus.net:27017/uw15dfpu
//var mongoUrl ='mongodb://sana:Allah7akbar@ds115071.mlab.com:15071/movies';
module.exports = function(app) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });
  
    return mongoose;
};
