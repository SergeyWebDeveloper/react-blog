import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import passport from 'passport';
import settings from './config';
import key from './config/private';
import {userRouting} from './route/user';

import './auth/passport';

mongoose.set('debug', true);
mongoose.connect(key.keyDB);
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({ secret: key.secretCookie, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
	console.log('main');
});

userRouting(app);


if(process.env.NODE_ENV==='production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req,res)=>{
		res.sendFile(path.resolve(__dirname,'client','build','index.html'));
	});
}


app.listen(settings.PORT, () => {
	console.log(`Listen PORT ${settings.PORT}`)
});
