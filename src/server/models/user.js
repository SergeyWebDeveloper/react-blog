import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	login: String,
	password: String,
	gender: String
});

export const User = mongoose.model('User',userSchema);
