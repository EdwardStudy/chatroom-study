var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	crator: {
		// type: mongoose.Schema.ObjectId,
		// ref: 'User'
		//@TODO reference to UserSchema
		type: String,
		default: 'anonymous',
		trim: true
	}
});

mongoose.model('Message', MessageSchema);