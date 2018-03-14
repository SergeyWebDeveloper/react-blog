import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';

import PageSignUp from '../pages/PageSignUp';
import PageSignIn from '../pages/PageSignIn';

const HomePage = () => 'Home Page';

const Routing = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/signup' component={PageSignUp}/>
			<Route path='/signin' component={PageSignIn}/>
		</Switch>
	)
};

export default Routing;