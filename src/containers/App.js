import React, {Component} from 'react';
import Header from '../components/Header';
import Routing from '../route/Routing';
import {connect} from 'react-redux';
import {currentUser} from '../actions';
import {withRouter} from 'react-router-dom';

class App extends Component {
	componentDidMount(){
		this.props.currentUser();
	}

	render(){
		return(
			<div className='app-wrapper'>
				<Header />
				<Routing/>
			</div>
		)
	}
}

export default withRouter(connect(null,{currentUser})(App));
