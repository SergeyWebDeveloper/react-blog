import React from 'react';
import FieldGroup from './FieldGroup';
import { Field, reduxForm } from 'redux-form'
import Button from '../components/Button';

const SignUp = props => {
	const {handleSubmit} = props;
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				{/*<FieldGroup*/}
					{/*id='fieldName'*/}
					{/*type='text'*/}
					{/*label='Ваше имя'*/}
					{/*required*/}
				{/*/>*/}
				{/*<FieldGroup*/}
					{/*id='fieldFamily'*/}
					{/*type='text'*/}
					{/*label='Ваша фамилия'*/}
				{/*/>*/}
				{/*<FieldGroup*/}
					{/*id='fieldLogin'*/}
					{/*type='text'*/}
					{/*label='Ваш логин'*/}
				{/*/>*/}
				{/*<FieldGroup*/}
					{/*id='fieldPassword'*/}
					{/*type='password'*/}
					{/*label='Пароль'*/}
				{/*/>*/}
				{/*<Button*/}
					{/*label='Сохранить'*/}
					{/*type='success'*/}
				{/*/>*/}
				<Field
					name="login"
					component="input"
					type="text"
					placeholder="login"
					required
				/>
				<Field
					name="password"
					component="input"
					type="password"
					placeholder="password"
					required
				/>
				<Button
					label='Сохранить'
					type='success'
				/>
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'signup'
})(SignUp);