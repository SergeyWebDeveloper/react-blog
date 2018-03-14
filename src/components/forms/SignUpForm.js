import React from 'react';
import {reduxForm} from 'redux-form';
import Button from '../Button';
import {fieldSignUp} from './fieldsForm/fieldsSignUp';
import {mapFieldsRender} from './fieldsForm/renderFieldForms';

const SignUp = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			{mapFieldsRender(fieldSignUp)}
			<Button
				label='Сохранить'
				type='success'
			/>
		</form>
	)
};

export default reduxForm({
	form: 'signup'
})(SignUp);
