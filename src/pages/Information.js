import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import moment from 'moment';

class Information extends Component {
	render(){
		const {login,name,family,createdAccount} = this.props.user.info;
		return(
			<div className='info__page'>
				<ListGroup>
					<ListGroupItem>Логин - {login}</ListGroupItem>
					<ListGroupItem>Имя - {name}</ListGroupItem>
					<ListGroupItem>Фамилия - {family}</ListGroupItem>
					<ListGroupItem>Аккаунт создан - {moment(createdAccount).format('MM-DD-YYYY')}</ListGroupItem>
				</ListGroup>
			</div>
		)
	}
}

const mapStateToProps = ({user}) => {
	return {user};
};

export default connect(mapStateToProps,null)(Information);