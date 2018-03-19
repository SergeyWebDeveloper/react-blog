import React from 'react';
import {Jumbotron, ButtonGroup} from 'react-bootstrap';
import moment from 'moment';

import Button from '../components/Button';

export const Post = ({title, body, date, author, _id, ...props}) => {
	const {handleDeletePost} = props;
	return (
		<div className='col-md-6'>
			<Jumbotron>
				<h2>{title}</h2>
				<p>{body}</p>
				<p>Автор: {author}</p>
				<p>Дата создания: {moment(date).format('MM-DD-YYYY HH:mm')}</p>
				<ButtonGroup>
					<Button label='Удалить' type='danger' onClick={handleDeletePost.bind(null,_id)}/>
					<Button label='Редактировать' type='success'/>
				</ButtonGroup>
			</Jumbotron>
		</div>
	)
};