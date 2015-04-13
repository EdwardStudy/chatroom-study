var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/chatroom_study';

module.exports = function(){
	mongo.connect(url, function(err, db){
		return db;
	});
};
