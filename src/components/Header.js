import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
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
					</Nav>
				</Navbar>
			</header>
		)
	}
}

export default Header;