import React, {Component} from 'react';
import axios from 'axios';
import SignUp from '../components/SignUpForm';
import {createUser} from '../api';

class PageSignUp extends Component {
	state={
		error: false
	};

	submitForm = async value =>{
		const {data} = await createUser(value);
		console.log(data);
		// if(data.error){
		// 	this.setState({error: true});
		// }
	};

	messageErrorShow = () =>{
		return(
			<p>В резальтате сохранения произошла ошибка! Попробуйте заново.</p>
		);
	};

	render(){
		return(
			<div className='container'>
				<h1>Зарегистрироваться</h1>
				<SignUp onSubmit={this.submitForm} />
				{this.state.error?this.messageErrorShow():null}
			</div>
		)
	}
}

export default PageSignUp;
