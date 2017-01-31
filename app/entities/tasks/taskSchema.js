const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const Task = new mongoose.Schema({
	title: String,
	description: String
});

Task.methods.getViewModel = function(){
	return {
		_id: this._id,
		title: this.title,
		description: this.description
	};
};

module.exports = mongoose.model('Task', Task);