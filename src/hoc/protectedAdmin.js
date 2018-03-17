import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function hocProtectedAdmin(Component) {
	class UserAuth extends Component {
		render() {
			return (
				<Fragment>
					<Component user={this.props.user} />
					{!this.props.user.auth&&<Redirect to='/signin' />}
				</Fragment>
			)
		}
	}
	return connect(({user}) => {
		return {user}
	}, null)(UserAuth);
}