import React from 'react';

const style={
	fontSize: '35px'
};

export const Loader = () => {
	return(
		<span style={style} className='glyphicon glyphicon-refresh'></span>
	)
};