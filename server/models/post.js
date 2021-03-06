const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} =mongoose.Schema.Types;

const postSchema = new Schema({
	title : {
		type : String,
		required : true
	},
	body : {
		type : String,
		required : true
	},
	photo : {
		type : String,
		required : true
	},
	postedBy : {
		type : ObjectId,
		ref : "User"
	}
});

mongoose.model("Post" , postSchema);