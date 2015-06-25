var mongoose = require('mongoose');

var config = require('./config');
var mongoConfig = config.mongodb;
var restify = require('restify')
, fs = require('fs')


var controllers = {}
    , controllers_path = process.cwd() + '/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})
 
var server = restify.createServer();
server
    .use(restify.fullResponse())
    .use(restify.bodyParser());

server.post("/user", controllers.userController.createUser);

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('Aplicativo pronto na porta: ' + port)
});

mongoose.connect(mongoConfig.databaseConnection);
console.log(mongoConfig.databaseConnection);

	