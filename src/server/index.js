import express from 'express';
import bodyParser from 'body-parser';
import settings from './config';

const app = express();

app.use(bodyParser.json());


app.get('/',(req,res)=>{
	console.log('main');
});

app.listen(settings.PORT,()=>{
	console.log(`Listen PORT ${settings.PORT}`)
});
