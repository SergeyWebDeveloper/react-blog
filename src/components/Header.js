import React, {Component, Fragment} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';

class Header extends Component {

	renderAuthMenu() {
		const {auth} = this.props.user;
		console.log(auth);
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<Fragment>
						<LinkContainer to='/signup'>
							<NavItem eventKey={1}>
								Регистрация
							</NavItem>
						</LinkContainer>
						<LinkContainer to='/signin'>
							<NavItem eventKey={2}>
								Войти
							</NavItem>
						</LinkContainer>
					</Fragment>
				);
			default:
				return (
					<Fragment>
						<LinkContainer to='/admin'>
							<NavItem eventKey={3}>
								Админка
							</NavItem>
						</LinkContainer>
						<LinkContainer to='/logout'>
							<NavItem eventKey={4}>
								Выход
							</NavItem>
						</LinkContainer>
					</Fragment>
				)
		}
	}

	render() {
		return (
			<header>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">React-Блог</Link>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullLeft>
						{this.renderAuthMenu()}
					</Nav>
				</Navbar>
			</header>
		)
	}
}

const mapStateToProps = ({user}) => {
	return {user};
};

export default connect(mapStateToProps, null)(Header);