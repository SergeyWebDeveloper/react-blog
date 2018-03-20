import React, {Component} from 'react';
import {loadArticles} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

import {Post} from '../components/Post';
import {Loader} from '../components/Loader';

class HomePage extends Component {
	componentDidMount() {
		this.props.loadArticles();
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className="row">
					<div className="col-md-12">
						<h1>{this.props.title}</h1>
					</div>
					{this.props.articles.loading && <Loader/>}
					<div className="posts__main">
						{_.map(this.props.articles.post, (post) => {
							return <Post mainPage key={post._id} {...post} />
						})}
					</div>
				</div>
			</div>
		)
	}
}

HomePage.defaultProps = {
	title: 'Главная страница'
};

const mapStateToProps = ({articles}) => {
	return {articles};
};

export default connect(mapStateToProps, {loadArticles})(HomePage);