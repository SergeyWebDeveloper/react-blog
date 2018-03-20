import React, {Component} from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import {Route} from 'react-router-dom';

import Posts from '../pages/Posts';
import Information from '../pages/Information';

class Admin extends Component {
	render() {
		return (
			<div className='container'>
				<NavbarAdmin/>
				<div className="route__page">
					<Route path='/admin/posts' component={Posts} />
					<Route path='/admin/info' component={Information} />
				</div>
			</div>
		)
	}
}

export default Admin;