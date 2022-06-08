const mongoose = require('mongoose')

const { Schema, Types: { ObjectId } } = mongoose

const PostsSchema = Schema({
    content: {type: String, requerid: true},	
	user: {type: String, requerid: true},	
	create_date: {type: Date, requerid: true},
    visible: {type: Boolean, default: true},
    likes: [{type: ObjectId, ref: 'User'}],
    replies: [{type: ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('Post', PostsSchema)
