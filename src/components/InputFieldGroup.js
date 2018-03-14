import React from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

const FieldGroup = ({ input, id, label, meta: { touched, error }, ...props}) => {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl
				{...props}
				errortext={touched && error ? error : null}
				{...input}
			/>
		</FormGroup>
	)
};

export default FieldGroup;
