import {User} from "../models/user";

export const verificationUser = async (req, res, next) => {
	const dataUser = req.body;
	const verificationUser = await User.findOne({login: dataUser.login});
	if(verificationUser){
		return res.send({user: true})
	}
	next();
};
