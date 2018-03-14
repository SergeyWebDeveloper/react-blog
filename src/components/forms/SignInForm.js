import React from 'react';
import Button from '../Button';
import {fieldSignIn} from "./fieldsForm/fieldsSignIn";
import {mapFieldsRender} from "./fieldsForm/renderFieldForms";
import {reduxForm} from "redux-form";

const SignIn = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			{mapFieldsRender(fieldSignIn)}
			<Button
				label='Войти'
				type='success'
			/>
		</form>
	)
};

export default reduxForm({
	form: 'signin'
})(SignIn);