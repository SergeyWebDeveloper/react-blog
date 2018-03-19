import {Article} from '../models/article';
import {User} from '../models/user';

export const articleRouting = app => {
	app.post('/api/newpost', (req, res) => {
		console.log(req.body);
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
				User.findByIdAndUpdate(req.body.idAuthor, {$push: {posts: post._id}}, function (err) {
					if (err) {
						res.send({error: true});
					}
				});
				res.send({error: false});
			}
		});
	});

	app.post('/api/deletepost',(req,res)=>{
		console.log('DELETE',req.body.id);
		Article.findOne({_id: req.body.id}).remove((err)=>{
			err ? res.send({error: true}) : res.send({error: false});
		});
	});
};