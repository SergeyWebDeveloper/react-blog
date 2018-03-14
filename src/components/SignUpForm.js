import React from 'react';
import FieldGroup from './InputFieldGroup';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Button from '../components/Button';

const FIELDS= [
	{
		name: 'name',
		id: 'fieldName',
		label: 'Ваше имя'
	},
	{
		name: 'family',
		id: 'fieldFamily',
		label: 'Ваша фамилия'
	},
	{
		name: 'login',
		id: 'fieldLogin',
		label: 'Логин',
		required: true
	},
	{
		name: 'password',
		id: 'fieldPassword',
		label: 'Пароль',
		required: true,
		type: 'password'
	}
];

const SignUp = props => {
	const {handleSubmit} = props;
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				{_.map(FIELDS, ({name,id,label,...attribute})=>{
					return (
						<Field
							key={id}
							name={name}
							id={id}
							label={label}
							component={FieldGroup}
							{...attribute}
						/>
					)
				})}
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
