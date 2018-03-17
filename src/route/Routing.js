import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';

import {hocUserAuth} from '../hoc/checkAuthUser';
import {hocProtectedAdmin} from '../hoc/protectedAdmin';

import PageSignUp from '../pages/PageSignUp';
import PageSignIn from '../pages/PageSignIn';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';


const Routing = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/admin' component={hocProtectedAdmin(Admin)}/>
			<Route path='/signup' component={hocUserAuth(PageSignUp)}/>
			<Route path='/signin' component={hocUserAuth(PageSignIn)}/>
			<Route path='*' component={NotFound}/>
		</Switch>
	)
};

export default Routing;