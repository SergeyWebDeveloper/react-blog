import {Article} from '../models/article';
import {User} from '../models/user';

export const articleRouting = app => {
	app.post('/api/newpost', (req, res) => {
		const post = new Article({
			author: req.body.author,
			date: req.body.date,
			title: req.body.title,
			body: req.body.body
		});
		post.save((err)=>{
			if (err) {
				res.send({error: true});
			}
			else {
				User.findByIdAndUpdate(req.body.idAuthor, {$push: {posts: post._id}}, (err) => {
					if (err) {
						res.send({error: true});
					}
				});
				res.send({error: false});
			}
		});
	});

	app.post('/api/deletepost',async (req,res)=>{
		await User.update({_id: req.user._id}, {$pull: {posts: {oid: req.body.id}}});
		await Article.findOne({_id: req.body.id}).remove();
		res.send({error: false});
	});

	app.get('/api/posts',async (req,res)=>{
		const posts = await Article.find().sort({date: 'desc'}).limit(6);
		res.send({error: false,posts});
	});

	app.post('/api/editpost', (req,res)=>{
		Article.findByIdAndUpdate(
			req.body.id,
			{date: req.body.data.date,title:req.body.data.title,body:req.body.data.body}, (err)=>{
			if(err) {
				res.send({error: true})
			} else {
				res.send({error: false});
			}
		});
	});

};