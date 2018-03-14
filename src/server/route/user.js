import {User} from '../models/user';
import {verificationUser} from '../middlewars/verificationUser';

export const userRouting = (app) => {
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
};
