import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: String,
	author: String,
	body: String,
	date: Number
});

export const Article = mongoose.model('Article',articleSchema);
