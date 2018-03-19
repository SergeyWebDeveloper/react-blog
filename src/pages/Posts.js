import React, {Component} from 'react';
import {ButtonGroup, Modal} from 'react-bootstrap';
import Button from '../components/Button';
import AddPostForm from '../components/forms/AddPostForm';
import {connect} from 'react-redux';
import {addPost,loadArticlesAdmin} from '../actions';

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
		const {family, name, _id} = this.props.user.info;
		const infoAuthor = {
			author: `${family} ${name}`,
			date: Date.now(),
			idAuthor: _id
		};
		const data = Object.assign({}, infoAuthor, values);
		this.props.addPost(data);
		if (values.title.trim().length && values.body.trim().length) {
			this.handleClose();
		}
	};

	componentDidMount() {
		if(this.props.user.info._id){
			this.props.loadArticlesAdmin();
		}
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
				{console.log(this.props.articles)}
			</div>
		)
	}
}

const mapStateToProps = ({user,articles}) => {
	return {user,articles};
};

export default connect(mapStateToProps, {addPost,loadArticlesAdmin})(Posts);