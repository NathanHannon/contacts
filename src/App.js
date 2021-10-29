import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

library.add(fab, fas);
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className='NavContainer'>

					</div>
					<div className="App">

					</div>
				</Router>
			</div>
		);
	}
}

export default App;
