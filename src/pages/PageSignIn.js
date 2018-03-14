import React, {Component} from 'react';
import SignInForm from '../components/forms/SignInForm';
import {loginUser} from '../api';
class PageSignIn extends Component {

	submitForm = async (values) => {
		const data = await loginUser(values);
		console.log('response--',data);
	};

	render(){
		return(
			<div className='container'>
				<h1>{this.props.title}</h1>
				<SignInForm onSubmit={this.submitForm}/>
			</div>
		)
	}
}

PageSignIn.defaultProps={
	title: 'Войти в личный кабинет'
};

export default PageSignIn;