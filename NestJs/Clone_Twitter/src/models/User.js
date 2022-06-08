const mongoose = require('mongoose')

const { Schema, Types: { ObjectId } } = mongoose

const UserSchema = Schema({
    name: {type: String, requerid: true},
	age: {type: String, requerid: true},
	bio: {type: String, requerid: true},
	user: {type: String, requerid: true},
	location: {type: Object, requerid: true},
	posts: [{type: ObjectId, ref: 'Post'}],
	followers: [{type: ObjectId, ref: 'User'}],
	following: [{type: ObjectId, ref: 'User'}],
	email: {type: String, requerid: true},
	password: {type: String, requerid: true},
	profile_pic: {type: String, requerid: true},
	birth_date: {type: Date, requerid: true}
})

module.exports = mongoose.model('user', UserSchema)