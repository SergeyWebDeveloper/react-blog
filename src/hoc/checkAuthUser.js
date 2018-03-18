import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function hocUserAuth(Component) {
	class UserAuth extends Component {
		render() {
			return (
				<Fragment>
					<Component />
					{this.props.user.auth&&<Redirect to='/admin/posts' />}
				</Fragment>
			)
		}
	}
	return connect(({user}) => {
		return {user}
		}, null)(UserAuth);
}