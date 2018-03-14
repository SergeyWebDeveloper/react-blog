import React from 'react';
import _ from 'lodash';
import FieldGroup from "../InputFieldGroup";
import {Field} from 'redux-form';

export const mapFieldsRender = (fieldNameForm) => {
	return (
		_.map(fieldNameForm, ({name, id, label, ...attribute}) => {
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
		})
	)
};
