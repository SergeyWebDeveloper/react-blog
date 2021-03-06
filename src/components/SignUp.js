import React from 'react';
import FieldGroup from './FieldGroup';
import Button from '../components/Button';

const SignUp = () => {
	return (
		<div className='container'>
			<form>
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
					id='fieldLogin'
					type='text'
					label='Ваш логин'
				/>
				<FieldGroup
					id='fieldPassword'
					type='password'
					label='Пароль'
				/>
				<Button
					label='Сохранить'
					type='success'
				/>
			</form>
		</div>
	)
};

export default SignUp;