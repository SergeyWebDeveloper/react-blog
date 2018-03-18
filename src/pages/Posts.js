import React, {Component} from 'react';
import {ButtonGroup, Modal} from 'react-bootstrap';
import Button from '../components/Button';
import AddPostForm from '../components/forms/AddPostForm';
import {addPost} from '../api';
import {connect} from 'react-redux';

class Posts extends Component {

	state = {
		show: false
	};

	handleClose = () => {
		this.setState({show: false});
	};

	handleShow = () => {
		this.setState({show: true});
	};

	submitForm = values => {
		const {family,name,_id} = this.props.user.info;
		const infoAuthor = {
			author: `${family} ${name}`,
			date: Date.now(),
			idAuthor: _id
		};
		// console.log(Object.assign({},infoAuthor,values));
		const {data} = addPost(Object.assign({},infoAuthor,values));
	};

	componentDidMount() {

	}

	modal = () => {
		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Создать пост</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<AddPostForm onSubmit={this.submitForm}/>
					</Modal.Body>
				</Modal>
			</div>
		)
	};

	render() {
		return (
			<div className='container-fluid'>
				<ButtonGroup style={{margin: '15px 0'}}>
					<Button label='Создать пост' type='success' onClick={this.handleShow}/>
					{this.modal()}
				</ButtonGroup>
			</div>
		)
	}
}

const mapStateToProps = ({user}) => {
	return {user};
};

export default connect(mapStateToProps,null)(Posts);