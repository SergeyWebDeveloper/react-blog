import React from 'react';
import {Field, reduxForm} from 'redux-form'
import FieldGroup from './FieldGroup';
import Button from '../components/Button';

const SignUp = props => {
	const {handleSubmit, pristine, reset} = props;
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<FieldGroup
					id='fieldName'
					type='text'
					label='Ваше имя'
				/>
				<FieldGroup
					id='fieldFamily'
					type='text'
					label='Ваша фамилия'
				/>
				<FieldGroup
					id='fieldPassword'
					type='password'
					label='Пароль'
				/>
				<Button
					label='Отправить'
					type='success'
				/>
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'signup'
})(SignUp);