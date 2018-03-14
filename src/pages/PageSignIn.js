import React, {Component} from 'react';
import SignInForm from '../components/forms/SignInForm';

class PageSignIn extends Component {

	submitForm = (values) => {
		console.log(values);
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