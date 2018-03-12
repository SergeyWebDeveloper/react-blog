import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const HomePage = () => 'Home Page';

const Routing = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/signup' component={SignUp}/>
			<Route path='/signin' component={SignIn}/>
		</Switch>
	)
};

export default Routing;