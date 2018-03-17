import React, {Component, Fragment} from 'react'
import {Navbar, NavItem, Nav, Label} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {exitAccount} from '../actions';


class Header extends Component {

	exitAccount = () =>{
		this.props.exitAccount();
	};

	renderAuthMenu() {
		const {auth} = this.props.user;
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
							<NavItem eventKey={4} onClick={this.exitAccount}>
								Выход
							</NavItem>
					</Fragment>
				)
		}
	}

	showLogin(){
		return(
			<Nav pullRight>
				<NavItem eventKey={5}>
					Ваш логин <Label bsStyle="primary">{this.props.user.info.login}</Label>
				</NavItem>
			</Nav>
		)
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
					{this.props.user.auth&&this.showLogin()}
				</Navbar>
			</header>
		)
	}
}

const mapStateToProps = ({user}) => {
	return {user};
};

export default withRouter(connect(mapStateToProps, {exitAccount})(Header));