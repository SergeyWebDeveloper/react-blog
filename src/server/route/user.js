import {User} from '../models/user';
import {Article} from '../models/article';
import {verificationUser} from '../middlewars/verificationUser';
import passport from "passport/lib/index";

export const userRouting = app => {
	app.post('/api/newuser', verificationUser, async (req, res) => {
		const dataUser = req.body;
		const user = await new User({
			login: dataUser.login,
			password: dataUser.password,
			name: dataUser.name,
			family: dataUser.family
		});
		await user.save((err) => {
			err ? res.send({error: true}) : res.send({error: false});
		});
	});

	app.post('/api/login',
		passport.authenticate('local'),
		(req, res) => {
			res.send(req.user);
		});

	app.get('/api/login', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send({exit: true})
	});

	app.get('/api/adminpost', async (req,res)=>{
		const user = await User.findOne({ _id: req.user._id },(err)=>{
			if(err) res.send({error: true});
		});
		const articles = await Article.find({ _id: { $in: user.posts } });
		res.send({
			error: false,
			articles
		});
	});

};


