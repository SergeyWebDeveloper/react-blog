import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	login: {type: String, required: true},
	password: {type: String, required: true},
	name: {type: String},
	family: {type: String}
});

export const User = mongoose.model('users', userSchema);
