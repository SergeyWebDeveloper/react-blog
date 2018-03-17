import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return(
		<div className='container'>
			<p>Данная страница не существует.</p>
			<p>Перейти <Link to='/'>на главную</Link></p>
		</div>
	)
};

export default NotFound;