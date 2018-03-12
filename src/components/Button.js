import React from 'react';
import {Button} from 'react-bootstrap';

const CustomButton = ({type,label,...props}) =>{
	return(
		<Button
			bsStyle={type}
			{...props}
		>{label}
		</Button>
	)
};

export default CustomButton;