import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import SignUp from '../components/SignUpForm';
import {createUser} from '../api';

class PageSignUp extends Component {
	state={
		error: false,
		message: '',
		success: false
	};

	submitForm = async value =>{
		this.setState({
			error: false,
			message: '',
			success: false
		});
		const {data} = await createUser(value);
		if(data.error){
			this.setState({error: true});
		} else if(data.user){
			this.setState({
				error: true,
				message: 'Такой пользователь уже существует!'
			});
		} else {
			this.setState({success: true});
		}
	};

	messageErrorShow = () =>{
		return(
			<p>В резальтате сохранения произошла ошибка! Попробуйте заново. {this.state.message}</p>
		);
	};

	render(){
		return(
			<div className='container'>
				<h1>Зарегистрироваться</h1>
				<SignUp onSubmit={this.submitForm} />
				{this.state.error&&this.messageErrorShow()}
				{this.state.success&&<Redirect to='/signin'/>}
			</div>
		)
	}
}

export default PageSignUp;
