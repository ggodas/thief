var mongoose = require('mongoose');
var User = require('./model/user');
var config = require('./config');
var mongoConfig = config.mongodb;

mongoose.connect('mongodb://' + mongoConfig.server + '/' + mongoConfig.databaseName);

var john = User({
	name: 'John Doe',
	fone: '11986999005',

});

john.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});