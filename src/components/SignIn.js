import React from 'react';
import FieldGroup from './FieldGroup';
import Button from '../components/Button';

const SignIn = () => {
	return (
		<div className='container'>
			<form>
				<FieldGroup
					id='fieldLogin'
					type='text'
					label='Ваш логин на сайте'
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

export default SignIn;