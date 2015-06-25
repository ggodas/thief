var mongoose = require('mongoose')
var User = require('../model/user');

exports.createUser = function(req, res, next) {
	console.log('Ola');
	var userModel = User(req.body);
	userModel.save(function(err, user) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Erro ocorrido: " + err
            })
        } else {
            res.json({
                type: true,
                data: user
            })
        }
	});
}