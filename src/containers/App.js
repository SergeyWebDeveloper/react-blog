import React, {Component} from 'react';
import Header from '../components/Header';
import Routing from '../route/Routing';

class App extends Component {

	render(){
		return(
			<div className='app-wrapper'>
				<Header />
				<Routing/>
			</div>
		)
	}
}


export default App;
