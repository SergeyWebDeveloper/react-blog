import React, {Component} from 'react';
import {ButtonGroup, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import _ from 'lodash';

import Button from '../components/Button';
import AddPostForm from '../components/forms/AddPostForm';
import {Post} from '../components/Post';
import {Loader} from '../components/Loader';
import {addPost, loadArticlesAdmin, deletePost} from '../actions';

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
		if (values.title.trim().length && values.body.trim().length) {
			this.props.addPost(data);
			this.handleClose();
		}
	};

	componentDidMount() {
		if (this.props.user.info._id) {
			this.props.loadArticlesAdmin();
		}
	};

	handleDeletePost = (id) => {
		this.props.deletePost(id);
	};

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

	renderPosts = () => {
		return _.map(this.props.articles.post, (post) => {
			return <Post handleDeletePost={this.handleDeletePost} key={post._id} {...post} />
		})
	};

	renderMessageIfNotPosts= () => {
		return(
			<div className='col-md-12'>
				<h4>Постов пока нет, но вы можете все исправить.</h4>
			</div>
		)
	};

	render() {
		return (
			<div className='container-fluid'>
				<div className="row">
					<div className="col-md-12">
						<ButtonGroup style={{margin: '15px 0'}}>
							<Button label='Создать пост' type='success' onClick={this.handleShow}/>
							{this.modal()}
						</ButtonGroup>
					</div>
					{this.props.articles.loading && <Loader/>}
					<div className="posts__wrapper">
						{this.props.articles.post.length ? this.renderPosts() : this.renderMessageIfNotPosts()}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({user, articles}) => {
	return {user, articles};
};

export default connect(mapStateToProps, {addPost, loadArticlesAdmin, deletePost})(Posts);