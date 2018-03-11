import React, {Component} from 'react'
import {Navbar,NavItem,Nav} from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<header>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">React-Блог</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullLeft>
						<NavItem eventKey={1} href="#">
							Регистрация
						</NavItem>
						<NavItem eventKey={2} href="#">
							Войти
						</NavItem>
					</Nav>
				</Navbar>
			</header>
		)
	}
}

export default Header;