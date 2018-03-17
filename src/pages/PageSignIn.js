import React, {Component} from 'react';
import SignInForm from '../components/forms/SignInForm';
import {signInUser} from '../actions';
import {connect} from 'react-redux';


class PageSignIn extends Component {

	submitForm = (values) => {
		this.props.signInUser(values);
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


export default connect(null,{signInUser})(PageSignIn);