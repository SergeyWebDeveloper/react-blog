import passport from 'passport';
import Strategy from 'passport-local';
import {User} from '../models/user';

passport.use(new Strategy({
		usernameField:"login",
		passwordField:"password"
	},
	async (login, password, cb) => {
		await User.findOne({login:login}, function (err, user) {
			if (err) {
				return cb(err);
			}
			if (!user) {
				return cb(null, false);
			}
			if (user.password != password) {
				return cb(null, false);
			}
			return cb(null, user);
		});
	})
);



passport.serializeUser(function (user, cb) {
	cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
	User.findById(id, function (err, user) {
		if (err) {
			return cb(err);
		}
		cb(null, user);
	});
});



