import React, {Component} from 'react';
import {ButtonGroup, Modal} from 'react-bootstrap';
import Button from '../components/Button';
import AddPostForm from '../components/forms/AddPostForm';

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
		console.log(values);
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

export default Posts;