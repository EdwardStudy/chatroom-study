var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

exports.create = function(req, res){
	var message = new Message(req.msg);
	// message.creator = req.
}