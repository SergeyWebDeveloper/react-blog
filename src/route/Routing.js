import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';

import SignUp from '../components/SignUp';

const HomePage = () => 'Home Page';

const Routing = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/signup' component={SignUp}/>
		</Switch>
	)
};

export default Routing;