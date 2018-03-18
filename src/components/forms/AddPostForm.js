import React from 'react';
import {mapFieldsRender} from "./fieldsForm/renderFieldForms";
import {fieldAddPost} from "./fieldsForm/fieldsAddPost";
import {reduxForm} from "redux-form";
import Button from '../Button';

const AddPost = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			{mapFieldsRender(fieldAddPost)}
			<Button
				label='Сохранить'
				type='success'
			/>
		</form>
	)
};

export default reduxForm({
	form: 'addpost'
})(AddPost);
