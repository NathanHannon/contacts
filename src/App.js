import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavMenu from './components/NavMenu';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

library.add(fab, fas);
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className='NavContainer'>
						<NavMenu />
					</div>
					<div className="App">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/login' component={Login} />
							<Route path='/signup' component={Signup} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
