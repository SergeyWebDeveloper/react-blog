import {User} from '../models/user';

export const userRouting = (app) => {
	app.post('/api/newuser', async (req,res)=>{
		const dataUser = await req.body;
		const user = await new User({
			login: dataUser.login,
			password: dataUser.password
		});
		await user.save((err)=>{
			err ? res.send({error: true}) : res.send({error: false});
		});
	});
};
