import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav,Navbar,NavItem} from 'react-bootstrap';

class NavbarAdmin extends Component {
	render(){
		return(
			<Navbar>
				<Nav>
					<LinkContainer to='/admin/posts'>
						<NavItem eventKey={1}>
							Посты
						</NavItem>
					</LinkContainer>
					<LinkContainer to='/admin/info'>
						<NavItem eventKey={2}>
							Информация
						</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		)
	}
}
export default NavbarAdmin;