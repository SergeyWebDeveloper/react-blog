import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import settings from './config';
import key from './config/private';
import {userRouting} from './route/user';

mongoose.set('debug', true);
mongoose.connect(key.keyDB);
const app = express();

app.use(bodyParser.json());


app.get('/',(req,res)=>{
	console.log('main');
});

userRouting(app);

app.listen(settings.PORT,()=>{
	console.log(`Listen PORT ${settings.PORT}`)
});
