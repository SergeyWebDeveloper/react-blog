import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import settings from './config';
import key from './config/private';
import {userRouting} from './route/user';

import './auth/passport';

mongoose.set('debug', true);
mongoose.connect(key.keyDB);
const app = express();

app.use(bodyParser.json());

// app.use(
// 	cookieSession({
// 		maxAge: 30 * 24 * 60 * 60 * 1000,
// 		keys: [key.secretCookie]
// 	})
// );

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'adasdsd as45 46a5s4d', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
	console.log('main');
});

userRouting(app);

app.listen(settings.PORT, () => {
	console.log(`Listen PORT ${settings.PORT}`)
});
