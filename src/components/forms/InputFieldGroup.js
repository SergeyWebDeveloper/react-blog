import React from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

const FieldGroup = ({ input, id, label, meta: { touched, error }, ...props}) => {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl
				{...props}
				{...input}
			/>
			{touched && error}
		</FormGroup>
	)
};

export default FieldGroup;
